/* ============================================================
   anime-t4.js —— 第四批动画模板（闹闹鱼奥数训练课堂）
   3 个模板：fillgrid 通用填数格 / factortree 分解质因数·短除 /
             panbalance 天平称重·找次品
   纯程序化 SVG+JS，frame(ctx,p) 为纯函数，p∈0..1 即时绘制整帧。
   调色板固定：#2B8A83 #3E6FB2 #E9A23B #53A06B #D8664E #7FC3B8（近白底 #FBFDFC/#fff，禁紫色）。
   注册方式沿用 t2：挂到全局 Anime.TEMPLATES，不改动 anime.js/t1/t2/t3。
   ============================================================ */
(function (root, factory) {
  var A = root.Anime || (typeof module !== "undefined" && module.parent ? require("./anime.js").Anime : null);
  factory(A);
})(typeof self !== "undefined" ? self : this, function (Anime) {
  "use strict";
  var T = Anime.TEMPLATES;
  var PAL = ["#2B8A83", "#3E6FB2", "#E9A23B", "#53A06B", "#D8664E", "#7FC3B8"];

  /* ----------------------------------------------------------
     1) fillgrid —— 通用填数格（数阵图 / 火柴棒算式 / 倒推 /
                     乘除法竖式数字谜等“按位置填数”）
     spec:{
       title: "九宫格数阵",                 // 可选，顶部标题
       cells:[{ id, row, col, val, label?, say? }],
       edges:[{ from, to }],               // 可选，点与点连线（数阵）
       order:[ cellId, … ],                // 填写顺序；在 order 里的格=待填空格
       final: "答案说明文字"               // 可选；默认自动生成
     }
     - 不在 order 里的格视为已知数（given），从一开始就显示 val。
     - order 里的格先画成虚线“?”，按顺序逐个高亮并填入 val。
     - cell.say 可自定义每步“为什么填这个数”；缺省给通用话术。
     - 终态：全部填好，edges 保留。calc.answer = spec.final。
     ---------------------------------------------------------- */
  T.fillgrid = function (s) {
    var cells = s.cells || [];
    var edges = s.edges || [];
    var order = s.order || [];
    var byId = {};
    cells.forEach(function (c) { byId[c.id] = c; });
    var orderSet = {};
    order.forEach(function (id) { orderSet[id] = true; });

    var minR = 1e9, maxR = -1e9, minC = 1e9, maxC = -1e9;
    cells.forEach(function (c) {
      var r = +c.row || 0, col = +c.col || 0;
      if (r < minR) minR = r; if (r > maxR) maxR = r;
      if (col < minC) minC = col; if (col > maxC) maxC = col;
    });
    if (!cells.length) { minR = maxR = minC = maxC = 0; }
    var CW = 58, CH = 52, OX = 48, OY = 54;
    function gx (cell) { return OX + ((+cell.col || 0) - minC) * CW; }
    function gy (cell) { return OY + ((+cell.row || 0) - minR) * CH; }
    var W = OX * 2 + (maxC - minC) * CW;
    var H = OY + (maxR - minR) * CH + 48;
    function isGiven (cell) { return !orderSet[cell.id]; }

    function drawEdges (c) {
      edges.forEach(function (e) {
        var a = byId[e.from], b = byId[e.to];
        if (!a || !b) return;
        c.line(gx(a), gy(a), gx(b), gy(b), { stroke: "#7FC3B8", "stroke-width": 2, "stroke-opacity": 0.85 });
      });
    }
    function drawTitle (c) {
      if (s.title) c.text(W / 2, 24, String(s.title), { "font-size": 15, "font-weight": "bold", fill: "#2B8A83" });
    }
    function cellBox (c, cell, state, p) {
      var x = gx(cell), y = gy(cell), w = 46, h = 34;
      if (state === "given") {
        c.rect(x - w / 2, y - h / 2, w, h, { fill: "#FBFDFC", stroke: "#3E6FB2", "stroke-width": 1.5, rx: 6 });
        c.text(x, y + 5, String(cell.val), { "font-size": 16, "font-weight": "bold", fill: "#3E6FB2" });
      } else if (state === "blank") {
        c.rect(x - w / 2, y - h / 2, w, h, { fill: "#ffffff", stroke: "#D8664E", "stroke-width": 1.5, "stroke-dasharray": "5 4", rx: 6 });
        c.text(x, y + 5, "?", { "font-size": 16, fill: "#D8664E" });
      } else { // filled | hl
        var op = (p === undefined) ? 1 : (0.3 + 0.7 * p);
        var label = (cell.val === null || cell.val === undefined) ? "?" : String(cell.val);
        c.rect(x - w / 2, y - h / 2, w, h, { fill: "#E9A23B", stroke: "#E9A23B", "stroke-width": state === "hl" ? 3 : 1.5, rx: 6 });
        c.text(x, y + 5, label, { "font-size": 16, "font-weight": "bold", fill: "#ffffff", opacity: op });
        if (state === "hl") c.circle(x, y, w / 2 + 4, { fill: "none", stroke: "#D8664E", "stroke-width": 2 });
      }
      if (cell.label) c.text(x, y + h / 2 + 14, String(cell.label), { "font-size": 11, fill: "#D8664E" });
    }

    var steps = [];
    steps.push({
      d: 700,
      say: (s.title ? s.title + "：" : "") + "先看清已知数与连线关系，再按顺序把空格一个个填出来。",
      frame: function (c) {
        drawEdges(c);
        cells.forEach(function (cell) { cellBox(c, cell, isGiven(cell) ? "given" : "blank", 1); });
        drawTitle(c);
      }
    });
    order.forEach(function (id, i) {
      var cell = byId[id];
      if (!cell) return;
      (function (cell, i) {
        steps.push({
          d: 900,
          say: cell.say || ("第 " + (i + 1) + " 个空格填 " + cell.val + "。"),
          frame: function (c, p) {
            drawEdges(c);
            cells.forEach(function (o) {
              if (o.id === cell.id) { cellBox(c, o, "hl", p); return; }
              if (isGiven(o)) { cellBox(c, o, "given", 1); return; }
              var oi = order.indexOf(o.id);
              cellBox(c, o, oi < i ? "filled" : "blank", 1);
            });
            drawTitle(c);
          }
        });
      })(cell, i);
    });
    steps.push({
      d: 800,
      say: s.final || "全部填好了，上面就是完整答案。",
      frame: function (c) {
        drawEdges(c);
        cells.forEach(function (o) { cellBox(c, o, isGiven(o) ? "given" : "filled", 1); });
        drawTitle(c);
      }
    });

    return {
      vb: "0 0 " + W + " " + H, steps: steps,
      final: s.final || ("填出 " + order.length + " 个数"),
      calc: { cells: cells.length, fills: order.length, answer: s.final || null }
    };
  };

  /* ----------------------------------------------------------
     2) factortree —— 分解质因数（tree）/ 短除求 GCF·LCM（short）
     mode:"tree"  spec:{ mode:"tree", n, nodes:[{id,parent,label,say?}], final? }
                  - 根 parent 为 null/缺省；叶子=质数。按 nodes 顺序逐层展开。
     mode:"short" spec:{ mode:"short", nums:[a,b], divisors:[d,…],
                          result, resultLabel? }
                  - 逐个用公因数去除，最后 result 为所求（GCF/LCM）。
     ---------------------------------------------------------- */
  T.factortree = function (s) {
    if (s.mode === "short") return shortDiv(s);
    return factorTree(s);
  };

  function factorTree (s) {
    var n = s.n;
    var nodes = (s.nodes || []).slice();
    var byId = {};
    nodes.forEach(function (nd) { byId[nd.id] = nd; });
    function depth (nd) {
      if (nd.parent == null || byId[nd.parent] == null) return 0;
      return depth(byId[nd.parent]) + 1;
    }
    var levels = {}, maxD = 0;
    nodes.forEach(function (nd) {
      nd._d = depth(nd);
      (levels[nd._d] = levels[nd._d] || []).push(nd);
      if (nd._d > maxD) maxD = nd._d;
    });
    var W = 360, Y0 = 48;
    var H = Y0 + maxD * 56 + 46;
    function pos (nd) {
      var row = levels[nd._d];
      var i = row.indexOf(nd);
      var x = 42 + (i + 0.5) * (W - 84) / row.length;
      return [x, Y0 + nd._d * 56];
    }
    var hasChild = {};
    nodes.forEach(function (nd) { if (nd.parent != null && byId[nd.parent]) hasChild[nd.parent] = true; });

    function drawEdge (c, nd, p) {
      if (nd.parent == null || !byId[nd.parent]) return;
      var a = pos(byId[nd.parent]), b = pos(nd);
      c.line(a[0], a[1], b[0], b[1], { stroke: "#7FC3B8", "stroke-width": 2, "stroke-opacity": 0.9 });
    }
    function drawNode (c, nd, hl, p) {
      var xy = pos(nd), x = xy[0], y = xy[1];
      var leaf = !hasChild[nd.id];
      var fill = leaf ? "#D8664E" : (hl ? "#E9A23B" : "#3E6FB2");
      var op = (p === undefined) ? 1 : (0.3 + 0.7 * p);
      c.circle(x, y, 17, { fill: fill, stroke: fill, opacity: op });
      c.text(x, y + 5, String(nd.label), { "font-size": 14, "font-weight": "bold", fill: "#ffffff" });
    }

    var steps = [];
    if (!nodes.length) {
      steps.push({ d: 600, say: "分解质因数。", frame: function (c) { c.text(W / 2, Y0, String(n), { "font-size": 16 }); } });
    } else {
      steps.push({
        d: 700,
        say: "把 " + n + " 分解质因数：先写在最上面，再一步步往下拆，直到每个因数都是质数。",
        frame: function (c) { drawNode(c, nodes[0], false, 1); }
      });
      for (var j = 1; j < nodes.length; j++) (function (j) {
        var nd = nodes[j];
        var parentLabel = (nd.parent != null && byId[nd.parent]) ? byId[nd.parent].label : n;
        steps.push({
          d: 800,
          say: nd.say || ("把 " + parentLabel + " 分出 " + nd.label + (hasChild[nd.id] ? "。" : "（这是质数）。")),
          frame: function (c, p) {
            for (var k = 0; k <= j; k++) {
              var o = nodes[k];
              if (k >= 1) drawEdge(c, o, k === j ? p : 1);
              drawNode(c, o, k === j, k === j ? p : 1);
            }
          }
        });
      })(j);
    }
    var leafLabels = nodes.filter(function (o) { return !hasChild[o.id]; }).map(function (o) { return String(o.label); });
    var leafProd = leafLabels.reduce(function (a, l) { var v = Number(l); return isNaN(v) ? a : a * v; }, 1);
    steps.push({
      d: 800,
      say: s.final || ("所以 " + n + " = " + leafLabels.join(" × ") + "。"),
      frame: function (c) {
        nodes.forEach(function (o) {
          if (o.parent != null && byId[o.parent]) drawEdge(c, o, 1);
          drawNode(c, o, false, 1);
        });
      }
    });
    return {
      vb: "0 0 " + W + " " + H, steps: steps,
      final: s.final || (n + " = " + leafLabels.join(" × ")),
      calc: { n: n, leaves: leafLabels, primeProduct: leafProd, answer: s.final || null }
    };
  }

  function shortDiv (s) {
    var nums = s.nums || [];
    var divisors = s.divisors || [];
    var W = 320, RH = 44, Y0 = 56;
    var H = Y0 + divisors.length * RH + 50;
    var xLabel = 92, colX = [];
    for (var i = 0; i < nums.length; i++) colX.push(150 + i * 52);

    var rows = [nums.slice()];
    var cur = nums.slice();
    divisors.forEach(function (d) {
      cur = cur.map(function (v) { return v / d; });
      rows.push(cur.slice());
    });
    function drawRow (c, r, alpha) {
      for (var i = 0; i < rows[r].length; i++)
        c.text(colX[i], Y0 + r * RH + 5, String(rows[r][i]), { "font-size": 18, "font-weight": "bold", fill: "#3E6FB2", opacity: alpha });
    }
    function drawDiv (c, l) {
      var d = divisors[l];
      c.text(xLabel, Y0 + l * RH + 5, String(d), { "font-size": 16, "font-weight": "bold", fill: "#D8664E" });
      c.line(xLabel + 12, Y0 + l * RH - 13, xLabel + 12, Y0 + l * RH + 17, { stroke: "#D8664E", "stroke-width": 1.5 });
      c.line(xLabel + 14, Y0 + l * RH + 17, colX[nums.length - 1] + 22, Y0 + l * RH + 17, { stroke: "#3E6FB2", "stroke-width": 1.5 });
    }

    var steps = [];
    steps.push({
      d: 700,
      say: "短除法：先把 " + nums.join(" 和 ") + " 写出来，再一步步用它们的公因数去除。",
      frame: function (c) { drawRow(c, 0, 1); }
    });
    divisors.forEach(function (d, i) {
      (function (d, i) {
        var after = rows[i + 1];
        var sayParts = rows[i].map(function (v, k) { return v + " ÷ " + d + " = " + after[k]; });
        steps.push({
          d: 900,
          say: "用公因数 " + d + " 去除：" + sayParts.join("，") + "。",
          frame: function (c, p) {
            for (var r = 0; r <= i + 1; r++) drawRow(c, r, r === i + 1 ? (0.3 + 0.7 * p) : 1);
            for (var l = 0; l <= i; l++) drawDiv(c, l);
          }
        });
      })(d, i);
    });
    var gcf = divisors.reduce(function (a, b) { return a * b; }, 1);
    var ans = (s.result != null) ? s.result : gcf;
    steps.push({
      d: 800,
      say: s.resultLabel || ("把左边所有公因数乘起来：" + divisors.join(" × ") + " = " + ans + "。"),
      frame: function (c) {
        for (var r = 0; r < rows.length; r++) drawRow(c, r, 1);
        for (var l = 0; l < divisors.length; l++) drawDiv(c, l);
        c.text(W / 2, H - 12, "= " + ans, { "font-size": 16, "font-weight": "bold", fill: "#2B8A83" });
      }
    });
    return {
      vb: "0 0 " + W + " " + H, steps: steps,
      final: s.resultLabel || String(ans),
      calc: { nums: nums, divisors: divisors, result: ans, gcf: gcf }
    };
  }

  /* ----------------------------------------------------------
     3) panbalance —— 天平称重 / 找次品
     spec:{
       items:[{ id, label, w? }],
       steps:[{ left:[id…], right:[id…], say, tilt:-1|0|1 }],
       result: "称几次 / 次品是谁（终态文案）",
       defective: "次品 id（可选，终态圈出）"
     }
     tilt:-1 左重（左盘下沉），+1 右重，0 平衡。
     ---------------------------------------------------------- */
  T.panbalance = function (s) {
    var items = s.items || [];
    var weighSteps = s.steps || [];
    var byId = {};
    items.forEach(function (it) { byId[it.id] = it; });
    var W = 340, H = 286;
    var PX = 170, PY = 92, L = 106;

    function drawScale (c, tilt, p, leftIds, rightIds) {
      var ang = -tilt * 0.16 * (0.3 + 0.7 * p);
      var lx = PX - L * Math.cos(ang), ly = PY + L * Math.sin(ang);
      var rx = PX + L * Math.cos(ang), ry = PY - L * Math.sin(ang);
      c.el("polygon", { points: PX + "," + (PY + 6) + " " + (PX - 14) + "," + (PY + 34) + " " + (PX + 14) + "," + (PY + 34), fill: "#7FC3B8" });
      c.rect(PX - 26, PY + 34, 52, 6, { fill: "#7FC3B8", rx: 3 });
      c.line(lx, ly, rx, ry, { stroke: "#3E6FB2", "stroke-width": 3 });
      function pan (ex, ey, ids) {
        var py = ey + 24;
        c.line(ex, ey, ex, py, { stroke: "#3E6FB2", "stroke-width": 1.5 });
        c.line(ex - 34, py, ex + 34, py, { stroke: "#D8664E", "stroke-width": 2.5 });
        c.line(ex - 34, py, ex - 26, py + 10, { stroke: "#D8664E", "stroke-width": 1.5 });
        c.line(ex + 34, py, ex + 26, py + 10, { stroke: "#D8664E", "stroke-width": 1.5 });
        ids.forEach(function (id, i) {
          var it = byId[id];
          if (!it) return;
          var ox = ex + (i - (ids.length - 1) / 2) * 24;
          c.circle(ox, py - 12, 11, { fill: "#E9A23B", stroke: "#E9A23B" });
          c.text(ox, py - 8, String(it.label), { "font-size": 11, "font-weight": "bold", fill: "#ffffff" });
        });
      }
      pan(lx, ly, leftIds);
      pan(rx, ry, rightIds);
    }
    function legend (c, activeIds, defectiveId) {
      var n = items.length, gap = 46;
      var x0 = PX - (n - 1) * gap / 2;
      items.forEach(function (it, i) {
        var x = x0 + i * gap, y = 246;
        var active = activeIds.indexOf(it.id) >= 0;
        c.rect(x - 19, y - 13, 38, 26, { fill: active ? "#FBFDFC" : "#ffffff", stroke: active ? "#2B8A83" : "#BFD0CC", "stroke-width": active ? 2 : 1, rx: 6 });
        c.text(x, y + 4, String(it.label), { "font-size": 13, "font-weight": "bold", fill: "#3E6FB2" });
        if (defectiveId === it.id) {
          c.rect(x - 22, y - 16, 44, 32, { fill: "none", stroke: "#D8664E", "stroke-width": 2, "stroke-dasharray": "4 3", rx: 8 });
          c.text(x, y - 22, "次品", { "font-size": 11, fill: "#D8664E" });
        }
      });
    }

    var steps = [];
    steps.push({
      d: 700,
      say: "有 " + items.length + " 件物品，其中一件是次品（较轻）。用天平称一称，把它找出来。",
      frame: function (c) { drawScale(c, 0, 1, [], []); legend(c, []); }
    });
    weighSteps.forEach(function (ws, i) {
      (function (ws, i) {
        steps.push({
          d: 1000,
          say: ws.say || ("第 " + (i + 1) + " 次称：左盘与右盘各放一组，看天平往哪边倾斜。"),
          frame: function (c, p) {
            drawScale(c, ws.tilt || 0, p, ws.left || [], ws.right || []);
            legend(c, (ws.left || []).concat(ws.right || []));
          }
        });
      })(ws, i);
    });
    steps.push({
      d: 800,
      say: s.result || "称完了。",
      frame: function (c) { drawScale(c, 0, 1, [], []); legend(c, [], s.defective || null); }
    });

    return {
      vb: "0 0 " + W + " " + H, steps: steps,
      final: s.result || ("称了 " + weighSteps.length + " 次"),
      calc: { weighings: weighSteps.length, defective: s.defective || null, result: s.result || null }
    };
  }
});
