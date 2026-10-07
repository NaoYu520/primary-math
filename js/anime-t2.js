/* ============================================================
   anime-t2.js —— 第二批动画模板（闹闹鱼奥数训练课堂）
   6 个模板：solid 立体堆叠 / count 逐个计数 / roundnum 凑整移动 /
             paint 等分涂色 / vertical 竖式数字谜 / balance 天平等量代换
   纯程序化 SVG+JS，frame(ctx,p) 为纯函数，p∈0..1 即时绘制整帧。
   调色板固定：#2B8A83 #3E6FB2 #E9A23B #53A06B #D8664E #7FC3B8（禁紫色）。
   ============================================================ */
(function (root, factory) {
  var A = root.Anime || (typeof module !== "undefined" && module.parent ? require("./anime.js").Anime : null);
  factory(A);
})(typeof self !== "undefined" ? self : this, function (Anime) {
  "use strict";
  var T = Anime.TEMPLATES;
  var PAL = ["#2B8A83", "#3E6FB2", "#E9A23B", "#53A06B", "#D8664E", "#7FC3B8"];

  /* ----------------------------------------------------------
     1) solid —— 立体堆叠 / 体积
     spec:{ layers:[[该行各列高度…],…], unit:1 }
     cubes = 各列高度之和（上面方块下方有支撑，按给定 layers 简化）
     ---------------------------------------------------------- */
  T.solid = function (s) {
    var layers = s.layers, unit = s.unit || 1;
    var rows = layers.length, cols = layers[0].length;
    var cubes = 0, maxH = 0;
    for (var i = 0; i < rows; i++) for (var j = 0; j < cols; j++) {
      cubes += layers[i][j]; if (layers[i][j] > maxH) maxH = layers[i][j];
    }
    var dx = 16, dy = 9, ch = 18;
    var W = 340, X0 = W / 2, Y0 = 30 + maxH * ch;
    var H = Y0 + (rows + cols - 2) * dy + 40;

    function cube (c, fx, fy, hl) {
      c.el("polygon", { points: fx + "," + (fy - dy) + " " + (fx + dx) + "," + fy + " " +
        fx + "," + (fy + dy) + " " + (fx - dx) + "," + fy,
        fill: hl ? "#E9A23B" : "#7FC3B8", stroke: "#ffffff", "stroke-width": 1 });
      c.el("polygon", { points: (fx - dx) + "," + fy + " " + fx + "," + (fy + dy) + " " +
        fx + "," + (fy + dy + ch) + " " + (fx - dx) + "," + (fy + ch),
        fill: "#2B8A83", stroke: "#ffffff", "stroke-width": 1 });
      c.el("polygon", { points: (fx + dx) + "," + fy + " " + fx + "," + (fy + dy) + " " +
        fx + "," + (fy + dy + ch) + " " + (fx + dx) + "," + (fy + ch),
        fill: "#3E6FB2", stroke: "#ffffff", "stroke-width": 1 });
    }
    function colX (i, j) { return X0 + (j - i) * dx; }
    function colY (i, j) { return Y0 + (i + j) * dy; }
    function drawPile (c, shown, hl) {
      var order = [];
      for (var a = 0; a < rows; a++) for (var b = 0; b < cols; b++) order.push([a, b]);
      order.sort(function (p, q) { return (p[0] + p[1]) - (q[0] + q[1]); });
      order.forEach(function (rc) {
        var i = rc[0], j = rc[1], h = layers[i][j], rh = Math.round(h * shown);
        var gx = colX(i, j), gy = colY(i, j);
        var isHl = hl && hl[0] === i && hl[1] === j;
        for (var k = 0; k < rh; k++) cube(c, gx, gy - (k + 1) * ch, isHl);
      });
    }

    var steps = [];
    steps.push({
      d: 900, say: "这堆积木由一根根立柱组成，每根立柱都由一个个小正方体叠起来。",
      frame: function (c, t) { drawPile(c, t, null); }
    });
    for (var i = 0; i < rows; i++) for (var j = 0; j < cols; j++) {
      (function (i, j, h) {
        steps.push({
          d: 600, say: "这一根立柱有 " + h + " 个小正方体。",
          frame: function (c) {
            drawPile(c, 1, [i, j]);
            c.text(colX(i, j), colY(i, j) - h * ch - dy - 6, String(h), { "font-size": 14, fill: "#D8664E" });
          }
        });
      })(i, j, layers[i][j]);
    }
    steps.push({
      d: 800, say: "把每根立柱的块数加起来，一共 " + cubes + " 个小正方体，体积 = " + cubes + "×" + unit + " = " + cubes + "（立方单位）。",
      frame: function (c) {
        drawPile(c, 1, null);
        c.text(W / 2, H - 10, "共 " + cubes + " 块，体积 = " + cubes, { "font-size": 15, fill: "#2B8A83" });
      }
    });
    return { vb: "0 0 " + W + " " + H, steps: steps, final: "体积=" + cubes, calc: { cubes: cubes, unit: unit } };
  };

  /* ----------------------------------------------------------
     2) count —— 计数逐个高亮
     {kind:"line",points:n}   线段数 = n(n-1)/2
     {kind:"square",n}        n×n 方格正方形总数 = n(n+1)(2n+1)/6
     {kind:"tri",k}           顶点引出 k+1 条截线交点，三角形数 = k(k+1)/2
     ---------------------------------------------------------- */
  T.count = function (s) {
    if (s.kind === "line") return countLine(s);
    if (s.kind === "square") return countSquare(s);
    return countTri(s);
  };

  function countLine (s) {
    var n = s.points, gap = 48, X0 = 46, Y = 90;
    var W = 2 * X0 + (n - 1) * gap, H = 150;
    function px (i) { return X0 + i * gap; }
    function base (c) {
      c.line(px(0), Y, px(n - 1), Y, { stroke: "#3E6FB2", "stroke-width": 2 });
      for (var i = 0; i < n; i++) c.circle(px(i), Y, 5, { fill: "#2B8A83" });
    }
    var steps = [{
      d: 600, say: "直线上有 " + n + " 个点。每两个点之间都能连成一条线段。",
      frame: base
    }];
    var running = 0;
    for (var i = 0; i < n - 1; i++) (function (i) {
      var grp = n - 1 - i; running += grp;
      steps.push({
        d: 700, say: "以第 " + (i + 1) + " 个点为左端点，能连 " + grp + " 条线段，累计数到 " + running + " 条。",
        frame: function (c, t) {
          base(c);
          for (var gi = 0; gi < i; gi++) for (var gj = gi + 1; gj < n; gj++)
            c.line(px(gi), Y, px(gj), Y, { stroke: "#7FC3B8", "stroke-width": 5, "stroke-opacity": 0.55 });
          var show = Math.ceil(grp * t), m = 0;
          for (var gj = i + 1; gj < n; gj++) {
            m++;
            c.line(px(i), Y, px(gj), Y, { stroke: "#E9A23B", "stroke-width": 6, "stroke-opacity": m <= show ? 1 : 0.12 });
          }
          c.text(W / 2, Y + 36, "已数 " + running + " 条", { "font-size": 14, fill: "#D8664E" });
        }
      });
    })(i);
    var total = n * (n - 1) / 2;
    steps.push({
      d: 700, say: "线段总数 = " + (n - 1) + " + " + (n - 2) + " + … + 1 = " + total + " 条。",
      frame: function (c) {
        base(c);
        for (var gi = 0; gi < n; gi++) for (var gj = gi + 1; gj < n; gj++)
          c.line(px(gi), Y, px(gj), Y, { stroke: "#E9A23B", "stroke-width": 5, "stroke-opacity": 0.8 });
        c.text(W / 2, Y + 36, "共 " + total + " 条线段", { "font-size": 15, fill: "#2B8A83" });
      }
    });
    return { vb: "0 0 " + W + " " + H, steps: steps, final: String(total), calc: { count: total } };
  }

  function countSquare (s) {
    var n = s.n, cell = 28, ox = 40, oy = 34;
    var W = ox * 2 + n * cell, H = oy + n * cell + 56;
    function base (c) {
      for (var i = 0; i <= n; i++) {
        c.line(ox + i * cell, oy, ox + i * cell, oy + n * cell, { stroke: "#3E6FB2", "stroke-width": 1.5 });
        c.line(ox, oy + i * cell, ox + n * cell, oy + i * cell, { stroke: "#3E6FB2", "stroke-width": 1.5 });
      }
    }
    var steps = [{
      d: 600, say: "一个 " + n + "×" + n + " 的方格图。正方形有大有小，要按边长分类数。",
      frame: base
    }];
    var running = 0;
    for (var k = 1; k <= n; k++) (function (k) {
      var cnt = (n - k + 1) * (n - k + 1); running += cnt;
      var boxes = [];
      for (var a = 0; a <= n - k; a++) for (var b = 0; b <= n - k; b++) boxes.push([a, b]);
      steps.push({
        d: 700, say: "边长为 " + k + " 的正方形有 " + (n - k + 1) + "×" + (n - k + 1) + " = " + cnt + " 个，累计 " + running + " 个。",
        frame: function (c, t) {
          base(c);
          for (var pk = 1; pk < k; pk++) {
            var pc = (n - pk + 1) * (n - pk + 1);
            for (var a = 0; a <= n - pk; a++) for (var b = 0; b <= n - pk; b++)
              c.rect(ox + a * cell + 1, oy + b * cell + 1, pk * cell - 2, pk * cell - 2,
                { fill: "#7FC3B8", "fill-opacity": 0.25, stroke: "none" });
          }
          var show = Math.ceil(boxes.length * t);
          boxes.forEach(function (pos, idx) {
            c.rect(ox + pos[0] * cell + 1, oy + pos[1] * cell + 1, k * cell - 2, k * cell - 2,
              { fill: "#E9A23B", "fill-opacity": idx < show ? 0.55 : 0.08, stroke: "#E9A23B", "stroke-width": 2 });
          });
          c.text(W / 2, oy + n * cell + 26, "已数 " + running + " 个", { "font-size": 14, fill: "#D8664E" });
        }
      });
    })(k);
    var total = n * (n + 1) * (2 * n + 1) / 6;
    steps.push({
      d: 800, say: "总数 = " + sqSum(n) + " = " + total + " 个正方形。",
      frame: function (c) {
        base(c);
        for (var pk = 1; pk <= n; pk++)
          for (var a = 0; a <= n - pk; a++) for (var b = 0; b <= n - pk; b++)
            c.rect(ox + a * cell + 1, oy + b * cell + 1, pk * cell - 2, pk * cell - 2,
              { fill: "#E9A23B", "fill-opacity": 0.35, stroke: "none" });
        c.text(W / 2, oy + n * cell + 26, "共 " + total + " 个正方形", { "font-size": 15, fill: "#2B8A83" });
      }
    });
    return { vb: "0 0 " + W + " " + H, steps: steps, final: String(total), calc: { count: total } };
  }
  function sqSum (n) {
    var parts = [];
    for (var k = 1; k <= n; k++) parts.push((n - k + 1) + "×" + (n - k + 1));
    return parts.join(" + ");
  }

  function countTri (s) {
    var K = s.k || 4;
    var ax = 170, ay = 34, x0 = 56, x1 = 284, ty = 128, seg = (x1 - x0) / K;
    var W = 340, H = 176;
    function px (m) { return x0 + m * seg; }
    function base (c) {
      c.line(ax, ay, px(0), ty, { stroke: "#3E6FB2", "stroke-width": 1.5 });
      c.line(ax, ay, px(K), ty, { stroke: "#3E6FB2", "stroke-width": 1.5 });
      c.line(px(0), ty, px(K), ty, { stroke: "#3E6FB2", "stroke-width": 2 });
      for (var m = 0; m <= K; m++) {
        c.line(ax, ay, px(m), ty, { stroke: "#3E6FB2", "stroke-width": 1 });
        c.circle(px(m), ty, 3.5, { fill: "#2B8A83" });
      }
      c.circle(ax, ay, 4, { fill: "#D8664E" });
    }
    var steps = [{
      d: 600, say: "从同一个顶点向一条线段引出若干条线，形成一排三角形。按底边的长度分类数。",
      frame: base
    }];
    var running = 0;
    for (var d = 1; d <= K; d++) (function (d) {
      var cnt = K - d + 1; running += cnt;
      steps.push({
        d: 700, say: "底边长占 " + d + " 小段的三角形有 " + cnt + " 个，累计 " + running + " 个。",
        frame: function (c, t) {
          base(c);
          var show = Math.ceil(cnt * t);
          for (var m = 0; m < cnt; m++) {
            c.el("polygon", { points: ax + "," + ay + " " + px(m) + "," + ty + " " + px(m + d) + "," + ty,
              fill: "#E9A23B", "fill-opacity": m < show ? 0.5 : 0.08, stroke: "#E9A23B", "stroke-width": 1.5 });
          }
          c.text(W / 2, ty + 28, "已数 " + running + " 个", { "font-size": 14, fill: "#D8664E" });
        }
      });
    })(d);
    var total = K * (K + 1) / 2;
    steps.push({
      d: 700, say: "三角形总数 = 1 + 2 + … + " + K + " = " + total + " 个。",
      frame: function (c) {
        base(c);
        for (var d = 1; d <= K; d++) for (var m = 0; m <= K - d; m++)
          c.el("polygon", { points: ax + "," + ay + " " + px(m) + "," + ty + " " + px(m + d) + "," + ty,
            fill: "#E9A23B", "fill-opacity": 0.3, stroke: "none" });
        c.text(W / 2, ty + 28, "共 " + total + " 个三角形", { "font-size": 15, fill: "#2B8A83" });
      }
    });
    return { vb: "0 0 " + W + " " + H, steps: steps, final: String(total), calc: { count: total } };
  }

  /* ----------------------------------------------------------
     3) roundnum —— 凑整数字移动（速算）
     spec:{ expr:"29+36+71", pairs:[[0,2]], result:136 }
     ---------------------------------------------------------- */
  T.roundnum = function (s) {
    var terms = s.terms || s.expr.split("+").map(function (x) { return Number(x); });
    var pairs = s.pairs || [[0, terms.length - 1]];
    var pair = pairs[0];
    var result = (typeof s.result === "number") ? s.result : terms.reduce(function (a, b) { return a + b; }, 0);
    var order = [pair[0], pair[1]];
    for (var q = 0; q < terms.length; q++) if (q !== pair[0] && q !== pair[1]) order.push(q);

    var W = 360, H = 170, cy = 78, cw = 58, ch = 38, gap = 100;
    function origX (i) { return 56 + i * gap; }
    var finalPos = {};
    order.forEach(function (termIdx, slot) { finalPos[termIdx] = 56 + slot * gap; });

    function card (c, x, y, label, color) {
      c.rect(x - cw / 2, y - ch / 2, cw, ch, { fill: color, stroke: color });
      c.text(x, y + 5, String(label), { fill: "#fff", "font-size": 18, "font-weight": "bold" });
    }
    function plus (c, x, y) { c.text(x, y + 5, "+", { "font-size": 18, fill: "#3E6FB2" }); }

    var steps = [];
    steps.push({
      d: 700, say: "原式：" + terms.join(" + ") + "。先观察：哪两个数能凑成整十、整百？",
      frame: function (c) {
        for (var i = 0; i < terms.length; i++) {
          card(c, origX(i), cy, terms[i], PAL[i % PAL.length]);
          if (i < terms.length - 1) plus(c, origX(i) + gap / 2, cy);
        }
      }
    });
    steps.push({
      d: 1400, say: terms[pair[0]] + " 和 " + terms[pair[1]] + " 能凑成 " + (terms[pair[0]] + terms[pair[1]]) +
        "，把它们移到一起先算，这样更简便。",
      frame: function (c, t) {
        for (var i = 0; i < terms.length; i++) {
          var xA = origX(i), xB = finalPos[i];
          var x = xA + (xB - xA) * t;
          var y = cy - Math.sin(t * Math.PI) * 22;
          c.el("path", { d: "M " + xA + " " + cy + " Q " + ((xA + xB) / 2) + " " + (cy - 44) + " " + xB + " " + cy,
            fill: "none", stroke: "#7FC3B8", "stroke-width": 1.5, "stroke-dasharray": "4 4" });
        }
        for (var j = 0; j < order.length; j++) {
          var ti = order[j];
          var xa = origX(ti), xb = finalPos[ti];
          var xx = xa + (xb - xa) * t, yy = cy - Math.sin(t * Math.PI) * 22;
          card(c, xx, yy, terms[ti], PAL[ti % PAL.length]);
          if (j < order.length - 1) plus(c, (finalPos[order[j]] + finalPos[order[j + 1]]) / 2, cy);
        }
      }
    });
    steps.push({
      d: 900, say: "先算 " + terms[pair[0]] + " + " + terms[pair[1]] + " = " + (terms[pair[0]] + terms[pair[1]]) +
        "，再算 " + (terms[pair[0]] + terms[pair[1]]) + " + " + (terms.length === 3 ? terms[order[2]] : "余下各数") + " = " + result + "。",
      frame: function (c) {
        for (var j = 0; j < order.length; j++) {
          var ti = order[j];
          card(c, finalPos[ti], cy, terms[ti], PAL[ti % PAL.length]);
          if (j < order.length - 1) plus(c, (finalPos[order[j]] + finalPos[order[j + 1]]) / 2, cy);
        }
        c.line(finalPos[pair[0]] - cw / 2, cy + ch / 2 + 6, finalPos[pair[1]] + cw / 2, cy + ch / 2 + 6,
          { stroke: "#D8664E", "stroke-width": 2.5 });
        c.text((finalPos[pair[0]] + finalPos[pair[1]]) / 2, cy + ch / 2 + 24,
          "= " + (terms[pair[0]] + terms[pair[1]]), { "font-size": 15, fill: "#D8664E" });
        c.text(W / 2, cy - 44, result, { "font-size": 22, "font-weight": "bold", fill: "#2B8A83" });
      }
    });
    return { vb: "0 0 " + W + " " + H, steps: steps, final: String(result), calc: { result: result, terms: terms } };
  };

  /* ----------------------------------------------------------
     4) paint —— 等分涂色（分数认识）
     spec:{ denom, numer, shape:"circle"|"rect" }
     ---------------------------------------------------------- */
  T.paint = function (s) {
    var denom = s.denom, numer = s.numer, shape = s.shape || "circle";
    var W = 300, H = 190, cx = 150, cy = 96, r = 66;
    function polar (angDeg) {
      var a = (angDeg - 90) * Math.PI / 180;
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    }
    function sector (c, i, fill) {
      var p1 = polar(i * 360 / denom), p2 = polar((i + 1) * 360 / denom);
      c.el("path", { d: "M " + cx + " " + cy + " L " + p1[0].toFixed(1) + " " + p1[1].toFixed(1) +
        " A " + r + " " + r + " 0 0 1 " + p2[0].toFixed(1) + " " + p2[1].toFixed(1) + " Z",
        fill: fill, stroke: "#fff", "stroke-width": 1.5 });
    }
    function shapeBase (c) {
      if (shape === "circle") {
        c.circle(cx, cy, r, { fill: "#FBFDFC", stroke: "#3E6FB2", "stroke-width": 2 });
      } else {
        c.rect(cx - 90, cy - 50, 180, 100, { fill: "#FBFDFC", stroke: "#3E6FB2", "stroke-width": 2, rx: 6 });
      }
    }
    function dividers (c) {
      if (shape === "circle") {
        for (var i = 0; i < denom; i++) {
          var p = polar(i * 360 / denom);
          c.line(cx, cy, p[0], p[1], { stroke: "#3E6FB2", "stroke-width": 1.5 });
        }
      } else {
        for (var j = 1; j < denom; j++)
          c.line(cx - 90 + j * 180 / denom, cy - 50, cx - 90 + j * 180 / denom, cy + 50,
            { stroke: "#3E6FB2", "stroke-width": 1.5 });
      }
    }
    function paintParts (c, shown) {
      if (shape === "circle") {
        for (var i = 0; i < shown; i++) sector(c, i, "#E9A23B");
      } else {
        var w = 180 / denom;
        for (var j = 0; j < shown; j++)
          c.rect(cx - 90 + j * w + 1.5, cy - 48.5, w - 3, 97, { fill: "#E9A23B", stroke: "none" });
      }
    }
    var name = shape === "circle" ? "圆" : "长方形";
    var steps = [
      { d: 600, say: "把一个" + name + "看作单位「1」，要平均分成 " + denom + " 份。", frame: shapeBase },
      { d: 800, say: "像这样平均分，每一份都一样大，一共 " + denom + " 份。",
        frame: function (c, t) {
          shapeBase(c);
          var show = Math.ceil(denom * t);
          if (shape === "circle") {
            for (var i = 0; i < show; i++) {
              var p = polar(i * 360 / denom);
              c.line(cx, cy, p[0], p[1], { stroke: "#3E6FB2", "stroke-width": 1.5 });
            }
          } else {
            for (var j = 1; j < show; j++)
              c.line(cx - 90 + j * 180 / denom, cy - 50, cx - 90 + j * 180 / denom, cy + 50,
                { stroke: "#3E6FB2", "stroke-width": 1.5 });
          }
        } },
      { d: 1100, say: "给其中的 " + numer + " 份涂上颜色。",
        frame: function (c, t) {
          shapeBase(c); dividers(c);
          paintParts(c, Math.round(numer * t));
        } },
      { d: 800, say: "涂色部分是这样的 " + numer + " 份，占整个" + name + "的 " + numer + "/" + denom + "。",
        frame: function (c) {
          shapeBase(c); dividers(c); paintParts(c, numer);
          c.text(cx, cy + r + 26, "涂色部分 = " + numer + "/" + denom, { "font-size": 16, fill: "#2B8A83" });
        } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: numer + "/" + denom,
      calc: { value: numer / denom, denom: denom, numer: numer } };
  };

  /* ----------------------------------------------------------
     5) vertical —— 竖式数字谜填写
     spec:{ top:[t1,t0], bottom:[b1,b0], sum:[s1,s0], fills:[{pos,val}] }
     pos: t1/t0/b1/b0/s1/s0（null 为已知数）
     ---------------------------------------------------------- */
  T.vertical = function (s) {
    var top = s.top, bottom = s.bottom, sum = s.sum, fills = s.fills;
    var result = sum[0] * 10 + sum[1];
    var W = 320, H = 200;
    var xT = 140, xO = 182, yT = 52, yB = 92, yLine = 112, yS = 148;

    function drawCell (c, x, y, val, hl, t) {
      if (val === null || val === undefined) {
        c.rect(x - 15, y - 17, 30, 28, { fill: "#fff", stroke: "#D8664E", "stroke-width": hl ? 3 : 1.5,
          "stroke-dasharray": "5 4", rx: 4 });
        if (hl) c.text(x, y + 4, "?", { "font-size": 16, fill: "#D8664E" });
      } else {
        c.text(x, y + 4, String(val), { "font-size": 20, "font-weight": "bold",
          fill: hl ? "#D8664E" : "#2B8A83", opacity: hl ? (t === undefined ? 1 : 0.3 + 0.7 * t) : 1 });
      }
    }
    function layout (c, filledMap, hlPos, t) {
      c.text(96, yB + 4, "+", { "font-size": 18, fill: "#3E6FB2" });
      c.line(96, yLine, 210, yLine, { stroke: "#3E6FB2", "stroke-width": 2 });
      drawCell(c, xT, yT, filledMap.t1, hlPos === "t1", t);
      drawCell(c, xO, yT, filledMap.t0, hlPos === "t0", t);
      drawCell(c, xT, yB, filledMap.b1, hlPos === "b1", t);
      drawCell(c, xO, yB, filledMap.b0, hlPos === "b0", t);
      drawCell(c, xT, yS, sum[0], false, t);
      drawCell(c, xO, yS, sum[1], false, t);
      if (filledMap.carry) c.text(xT - 26, yT + 4, "1", { "font-size": 12, fill: "#D8664E" });
    }
    var known = { t1: top[0], t0: top[1], b1: bottom[0], b0: bottom[1], carry: false };
    fills.forEach(function (f) { known[f.pos] = f.val; if (f.pos === "t0") known.carry = (f.val + bottom[1] >= 10); });

    var steps = [{
      d: 700, say: "这是一道加法竖式数字谜。先看个位：几加 " + bottom[1] + " 等于 " + sum[1] + "，满十要向十位进 1。",
      frame: function (c) {
        var m = { t1: top[0], b1: bottom[0], b0: bottom[1] };
        if (top[1] !== null) m.t0 = top[1]; else m.t0 = null;
        layout(c, m, null, 1);
      }
    }];
    fills.forEach(function (f, idx) {
      (function (f, idx) {
        var m = { t1: top[0], b0: bottom[1], carry: false };
        for (var k = 0; k <= idx; k++) m[fills[k].pos] = fills[k].val;
        if (m.t0 !== undefined && m.t0 !== null && (Number(m.t0) + bottom[1] >= 10)) m.carry = true;
        var sayTxt = f.pos === "t0"
          ? "个位上的空格填 " + f.val + "：" + f.val + " + " + bottom[1] + " = " + sum[1] + "，向十位进 1。"
          : "十位上的空格填 " + f.val + "：" + top[0] + " + " + f.val + " + 进位 1 = " + sum[0] + "。";
        steps.push({ d: 900, say: sayTxt, frame: function (c, t) { layout(c, m, f.pos, t); } });
      })(f, idx);
    });
    steps.push({
      d: 800, say: "完整竖式：" + result + " 前面的两个加数相加正好得 " + result + "，数字谜解开了！",
      frame: function (c) { layout(c, known, null, 1);
        c.text(W / 2, H - 12, result + " = " + (known.t1 * 10 + known.t0) + " + " + (known.b1 * 10 + known.b0),
          { "font-size": 14, fill: "#2B8A83" }); }
    });
    return { vb: "0 0 " + W + " " + H, steps: steps, final: String(result),
      calc: { result: result, top: known.t1 * 10 + known.t0, bottom: known.b1 * 10 + known.b0 } };
  };

  /* ----------------------------------------------------------
     6) balance —— 天平等量代换
     spec:{ chains:[{l,ln,r,rn},{l,ln,r,rn}], result }
     ---------------------------------------------------------- */
  T.balance = function (s) {
    var chains = s.chains;
    var result = (typeof s.result === "number") ? s.result : chains[0].rn * chains[1].rn;
    var W = 340, H = 250;
    var COLOR = { "西瓜": "#D8664E", "苹果": "#E9A23B", "橘子": "#53A06B" };
    function colorOf (name) {
      for (var k in COLOR) if (name.indexOf(k) >= 0) return COLOR[k];
      return "#3E6FB2";
    }
    function item (c, x, y, name, n) {
      c.circle(x, y, 10, { fill: colorOf(name), stroke: "#fff", "stroke-width": 1.5 });
      c.text(x, y + 4, name.charAt(0), { "font-size": 11, fill: "#fff" });
    }
    function panItems (c, cx, y, name, n, alpha) {
      var gap = 22, start = cx - (n - 1) * gap / 2;
      for (var i = 0; i < n; i++) item(c, start + i * gap, y, name, i);
    }
    function beam (c, cy) {
      c.line(92, cy, 248, cy, { stroke: "#3E6FB2", "stroke-width": 3 });
      c.el("polygon", { points: "170," + (cy + 4) + " 160," + (cy + 20) + " 180," + (cy + 20), fill: "#7FC3B8" });
      c.line(100, cy, 100, cy + 14, { stroke: "#3E6FB2", "stroke-width": 1.5 });
      c.line(240, cy, 240, cy + 14, { stroke: "#3E6FB2", "stroke-width": 1.5 });
      c.rect(78, cy + 14, 44, 7, { fill: "#7FC3B8", rx: 3 });
      c.rect(218, cy + 14, 44, 7, { fill: "#7FC3B8", rx: 3 });
    }
    var c1 = chains[0], c2 = chains[1];
    var steps = [
      { d: 800, say: "第一个天平平衡：1 个" + c1.l + " = " + c1.rn + " 个" + c1.r + "。",
        frame: function (c) {
          beam(c, 66);
          panItems(c, 100, 56, c1.l, c1.ln); panItems(c, 240, 56, c1.r, c1.rn);
          c.text(170, 108, c1.ln + " 个" + c1.l + " ＝ " + c1.rn + " 个" + c1.r,
            { "font-size": 14, fill: "#2B8A83" });
        } },
      { d: 800, say: "第二个天平平衡：1 个" + c2.l + " = " + c2.rn + " 个" + c2.r + "。",
        frame: function (c) {
          beam(c, 66); panItems(c, 100, 56, c1.l, c1.ln); panItems(c, 240, 56, c1.r, c1.rn);
          beam(c, 166); panItems(c, 100, 156, c2.l, c2.ln); panItems(c, 240, 156, c2.r, c2.rn);
          c.text(170, 210, c2.ln + " 个" + c2.l + " ＝ " + c2.rn + " 个" + c2.r,
            { "font-size": 14, fill: "#2B8A83" });
        } },
      { d: 1500, say: "把第一个天平右盘的 " + c1.rn + " 个" + c1.r + "，每个都换成 " + c2.rn + " 个" + c2.r +
        "：" + c1.rn + " × " + c2.rn + " = " + result + " 个" + c2.r + "。",
        frame: function (c, t) {
          beam(c, 66);
          panItems(c, 100, 56, c1.l, c1.ln);
          c.el("g", { opacity: 1 - t });
          panItems(c, 240, 56, c1.r, c1.rn);
          c.el("g", { opacity: t });
          panItems(c, 240, 56, c2.r, result);
          c.text(170, 108, "替换中…", { "font-size": 13, fill: "#D8664E" });
        } },
      { d: 800, say: "所以 1 个" + c1.l + " = " + result + " 个" + c2.r + "。这就是等量代换。",
        frame: function (c) {
          beam(c, 100);
          panItems(c, 100, 90, c1.l, c1.ln); panItems(c, 240, 90, c2.r, result);
          c.text(170, 150, "1 个" + c1.l + " ＝ " + result + " 个" + c2.r,
            { "font-size": 18, "font-weight": "bold", fill: "#2B8A83" });
        } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: "1" + c1.l + "=" + result + c2.r,
      calc: { result: result } };
  };
});
