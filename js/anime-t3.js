/* ============================================================
   anime-t3.js —— 第三批动画模板（clock / link / venn / mix / progress / drawer）
   注册到 Anime.TEMPLATES；纯程序化 SVG，frame(ctx,p) 为纯函数，p∈0..1 即时绘整帧。
   几何一律具体色值，调色板 ["#2B8A83","#3E6FB2","#E9A23B","#53A06B","#D8664E","#7FC3B8"]，禁紫色。
   ============================================================ */
(function (root, factory) {
  var A = root.Anime || (typeof module !== "undefined" && module.parent ? require("./anime.js").Anime : null);
  factory(A);
})(typeof self !== "undefined" ? self : this, function (Anime) {
  var T = Anime.TEMPLATES;
  var PAL = ["#2B8A83", "#3E6FB2", "#E9A23B", "#53A06B", "#D8664E", "#7FC3B8"];
  var INK = "#2F3B39", LINE = "#C9D6D2", AMBER = "#E9A23B", TEAL = "#2B8A83", RED = "#D8664E";

  /* ------------------------------------------------------------
     (1) clock 钟面指针
     spec:{ sh:[h,m], eh:[eh,em] }  单位：分钟
     elapsed = 结束分钟 - 开始分钟（取非负）
     分针角度 = m*6；时针角度 = (h%12)*30 + m*0.5
     ------------------------------------------------------------ */
  T.clock = function (s) {
    var sh = s.sh, eh = s.eh;
    var sm = sh[0] * 60 + sh[1], em = eh[0] * 60 + eh[1];
    var elapsed = em - sm; if (elapsed < 0) elapsed += 1440;
    function mAng (m) { return m * 6; }
    function hAng (h, m) { return (h % 12) * 30 + m * 0.5; }
    var sHA = hAng(sh[0], sh[1]), sMA = mAng(sh[1]);
    var eHA = hAng(eh[0], eh[1]), eMA = mAng(eh[1]);

    var W = 200, H = 210, cx = 100, cy = 100, R = 80;
    function polar (deg, len) {
      var r = deg * Math.PI / 180;
      return [cx + len * Math.sin(r), cy - len * Math.cos(r)];
    }
    function face (c) {
      c.circle(cx, cy, R, { fill: "#FFFFFF", stroke: LINE, "stroke-width": 2 });
      for (var i = 0; i < 12; i++) {
        var a = i * 30 * Math.PI / 180;
        c.line(cx + (R - 4) * Math.sin(a), cy - (R - 4) * Math.cos(a),
               cx + (R - 11) * Math.sin(a), cy - (R - 11) * Math.cos(a),
               { stroke: INK, "stroke-width": i % 3 === 0 ? 2.5 : 1.2 });
      }
      c.text(cx, cy - R + 16, "12", { "font-size": 11, fill: INK });
      c.text(cx + R - 12, cy + 4, "3", { "font-size": 11, fill: INK });
      c.text(cx, cy + R - 8, "6", { "font-size": 11, fill: INK });
      c.text(cx - R + 12, cy + 4, "9", { "font-size": 11, fill: INK });
    }
    function hands (c, hA, mA) {
      var hp = polar(hA, R * 0.45), mp = polar(mA, R * 0.7);
      c.line(cx, cy, hp[0], hp[1], { stroke: TEAL, "stroke-width": 4 });
      c.line(cx, cy, mp[0], mp[1], { stroke: "#3E6FB2", "stroke-width": 2.5 });
      c.circle(cx, cy, 3.5, { fill: INK });
    }
    function fmt (a) { return a[0] + ":" + (a[1] < 10 ? "0" + a[1] : a[1]); }

    var steps = [
      { d: 800, say: "从 " + fmt(sh) + " 开始，先看钟面上时针（短）与分针（长）的位置。",
        frame: function (c) { face(c); hands(c, sHA, sMA);
          c.text(cx, H - 12, "开始 " + fmt(sh), { "font-size": 13, fill: TEAL }); } },
      { d: 1600, say: "分针每走 1 小格是 6°，时针每小时走 30°。两针从 " + fmt(sh) + " 一起转到 " + fmt(eh) + "。",
        frame: function (c, p) { face(c);
          hands(c, sHA + (eHA - sHA) * p, sMA + (eMA - sMA) * p); } },
      { d: 900, say: "结束在 " + fmt(eh) + "。经过时间 = " + fmt(eh) + " − " + fmt(sh) + " = " + elapsed + " 分钟。",
        frame: function (c) { face(c); hands(c, eHA, eMA);
          c.circle(cx, cy, R + 5, { fill: "none", stroke: AMBER, "stroke-width": 2 });
          c.text(cx, H - 12, "经过 " + elapsed + " 分钟", { "font-size": 14, fill: RED }); } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: elapsed + " 分钟", calc: { elapsed: elapsed } };
  };

  /* ------------------------------------------------------------
     (2) link 搭配连线
     spec:{ up:[标签…], down:[标签…] }  total = u * d
     ------------------------------------------------------------ */
  T.link = function (s) {
    var up = s.up, down = s.down, u = up.length, d = down.length;
    var total = u * d;
    var W = 360, H = 220, yUp = 52, yDown = 152;
    function rowX (n) {
      var arr = [], gap = (W - 90) / Math.max(1, n - 1);
      for (var i = 0; i < n; i++) arr.push(45 + i * gap);
      return arr;
    }
    var ux = rowX(u), dx = rowX(d);
    function node2 (c, x, y, label, color, below) {
      c.circle(x, y, 15, { fill: color, stroke: color });
      c.text(x, y + (below ? 30 : -22), label, { "font-size": 12, fill: INK });
    }
    function drawAll (c, upto) {
      up.forEach(function (lab, i) { node2(c, ux[i], yUp, lab, PAL[i % PAL.length], false); });
      down.forEach(function (lab, j) { node2(c, dx[j], yDown, lab, PAL[(u + j) % PAL.length], true); });
      var k = 0;
      for (var i = 0; i < u; i++) for (var j = 0; j < d; j++) {
        if (k < upto) c.line(ux[i], yUp + 15, dx[j], yDown - 15,
          { stroke: AMBER, "stroke-width": 1.5, opacity: 0.75 });
        k++;
      }
    }
    var steps = [
      { d: 700, say: "上装有 " + u + " 件，下装有 " + d + " 件。先把两组物品摆好。",
        frame: function (c) { c.text(W / 2, 16, "搭配问题", { "font-size": 13, fill: TEAL }); drawAll(c, 0); } },
      { d: 1800, say: "每件上装都能分别搭配 " + d + " 件下装：第 1 件连 " + d + " 条线，第 2 件再连 " + d + " 条……",
        frame: function (c, p) { c.text(W / 2, 16, "搭配问题", { "font-size": 13, fill: TEAL });
          drawAll(c, Math.floor(p * total + 0.0001)); } },
      { d: 800, say: "全部连线共 " + u + " × " + d + " = " + total + " 种不同穿法。",
        frame: function (c) { drawAll(c, total);
          c.text(W / 2, 102, u + " × " + d + " = " + total,
            { "font-size": 16, fill: RED, "font-weight": "bold" }); } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: total + " 种",
      calc: { u: u, d: d, total: total } };
  };

  /* ------------------------------------------------------------
     (3) venn 容斥韦恩
     spec:{ a, b, both }  union = a + b - both
     ------------------------------------------------------------ */
  T.venn = function (s) {
    var a = s.a, b = s.b, both = s.both;
    var union = a + b - both;
    var W = 340, H = 200, cy = 104, R = 60, cAx = 128, cBx = 212, midX = (cAx + cBx) / 2;
    function circles (c, op) {
      c.circle(cAx, cy, R, { fill: "#DCEFEC", stroke: TEAL, "stroke-width": 2 });
      c.circle(cBx, cy, R, { fill: "#DCE6F5", stroke: "#3E6FB2", "stroke-width": 2 });
      c.el("ellipse", { cx: midX, cy: cy, rx: 22, ry: 40, fill: AMBER, opacity: op });
    }
    function labels (c) {
      c.text(cAx - 30, cy + 2, "A", { "font-size": 14, fill: TEAL, "font-weight": "bold" });
      c.text(cAx - 30, cy + 20, String(a - both), { "font-size": 14, fill: INK });
      c.text(cBx + 30, cy + 2, "B", { "font-size": 14, fill: "#3E6FB2", "font-weight": "bold" });
      c.text(cBx + 30, cy + 20, String(b - both), { "font-size": 14, fill: INK });
      c.text(midX, cy + 4, String(both), { "font-size": 14, fill: "#FFFFFF", "font-weight": "bold" });
    }
    var steps = [
      { d: 800, say: "先画 A 集合，共有 " + a + " 个元素。",
        frame: function (c) {
          c.circle(cAx, cy, R, { fill: "#DCEFEC", stroke: TEAL, "stroke-width": 2 });
          c.text(cAx, cy + 2, "A", { "font-size": 15, fill: TEAL, "font-weight": "bold" });
          c.text(cAx, cy + 22, String(a), { "font-size": 16, fill: INK });
        } },
      { d: 1400, say: "再画 B 集合有 " + b + " 个；其中 " + both + " 个同时属于 A（重叠部分，高亮）。",
        frame: function (c, p) { circles(c, (0.55 * p).toFixed(2)); labels(c); } },
      { d: 900, say: "合在一起要减去重复的 " + both + " 个：总数 = " + a + " + " + b + " − " + both + " = " + union + "。",
        frame: function (c) { circles(c, 0.55); labels(c);
          c.text(W / 2, 24, "共 " + union + " 个", { "font-size": 16, fill: RED, "font-weight": "bold" }); } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: String(union), calc: { union: union } };
  };

  /* ------------------------------------------------------------
     (4) mix 浓度混合
     spec:{ c1,m1,c2,m2 }  newC = (c1*m1 + c2*m2) / (m1 + m2)
     ------------------------------------------------------------ */
  T.mix = function (s) {
    var c1 = s.c1, m1 = s.m1, c2 = s.c2, m2 = s.m2;
    var solute = c1 * m1 + c2 * m2, totalM = m1 + m2;
    var newC = solute / totalM;
    var W = 360, H = 200, baseY = 160, maxH = 90, bw = 46;
    var maxM = Math.max(m1, m2);
    var h1 = m1 / maxM * maxH, h2 = m2 / maxM * maxH;
    var x1 = 40, x2 = W - 40 - bw, xm = (W - bw) / 2;
    function liqColor (cc) { return cc >= 50 ? TEAL : (cc >= 25 ? "#3E6FB2" : "#7FC3B8"); }
    function beaker (c, x, h, col, label, sub, edge) {
      c.rect(x, baseY - maxH - 10, bw, maxH + 10, { fill: "none", stroke: edge || LINE, "stroke-width": edge ? 2.5 : 2 });
      if (h > 0) c.rect(x + 3, baseY - h, bw - 6, h, { fill: col, opacity: 0.75 });
      c.text(x + bw / 2, baseY + 14, label, { "font-size": 12, fill: edge || INK });
      c.text(x + bw / 2, baseY + 28, sub, { "font-size": 11, fill: "#5a6b68" });
    }
    var steps = [
      { d: 800, say: "甲杯：浓度 " + c1 + "%，溶液 " + m1 + " 克；乙杯：浓度 " + c2 + "%，溶液 " + m2 + " 克。",
        frame: function (c) {
          beaker(c, x1, h1, liqColor(c1), "甲", c1 + "% · " + m1 + "克");
          beaker(c, x2, h2, liqColor(c2), "乙", c2 + "% · " + m2 + "克");
        } },
      { d: 1600, say: "把两杯都倒入中间空杯。溶质总数 = " + c1 + "×" + m1 + " + " + c2 + "×" + m2 +
        "，溶液总质量 = " + totalM + " 克。",
        frame: function (c, p) {
          beaker(c, x1, h1 * (1 - p), liqColor(c1), "甲", c1 + "% · " + m1 + "克");
          beaker(c, x2, h2 * (1 - p), liqColor(c2), "乙", c2 + "% · " + m2 + "克");
          var hm = maxH * p;
          c.rect(xm, baseY - maxH - 10, bw, maxH + 10, { fill: "none", stroke: LINE, "stroke-width": 2 });
          if (hm > 0) c.rect(xm + 3, baseY - hm, bw - 6, hm, { fill: liqColor(newC), opacity: 0.75 });
        } },
      { d: 900, say: "混合后新浓度 = (" + c1 + "×" + m1 + " + " + c2 + "×" + m2 + ") ÷ " + totalM +
        " = " + newC.toFixed(1) + "%。",
        frame: function (c) {
          beaker(c, x1, 0, liqColor(c1), "甲", c1 + "% · " + m1 + "克");
          beaker(c, x2, 0, liqColor(c2), "乙", c2 + "% · " + m2 + "克");
          c.rect(xm, baseY - maxH - 10, bw, maxH + 10, { fill: "none", stroke: RED, "stroke-width": 2.5 });
          c.rect(xm + 3, baseY - maxH, bw - 6, maxH, { fill: liqColor(newC), opacity: 0.8 });
          c.text(xm + bw / 2, baseY + 14, "混合", { "font-size": 12, fill: RED, "font-weight": "bold" });
          c.text(xm + bw / 2, baseY + 28, newC.toFixed(1) + "%", { "font-size": 13, fill: RED, "font-weight": "bold" });
        } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: newC.toFixed(1) + "%",
      calc: { newC: newC, solute: solute, total: totalM } };
  };

  /* ------------------------------------------------------------
     (5) progress 工程进度
     spec:{ rates:[{who, rate}…] }  combined = Σ rate；time = 1 / combined（天）
     ------------------------------------------------------------ */
  T.progress = function (s) {
    var rates = s.rates;
    var combined = rates.reduce(function (a, r) { return a + r.rate; }, 0);
    var time = 1 / combined;
    var n = rates.length;
    var W = 360, rowH = 32, topY = 48, H = topY + (n + 1) * rowH + 24;
    var x0 = 96, x1 = 322, bw = x1 - x0;
    var maxR = Math.max.apply(null, rates.map(function (r) { return r.rate; }));
    function barRow (c, y, name, fillW, col, label) {
      c.text(x0 - 10, y + 12, name, { "font-size": 12, fill: INK, "text-anchor": "end" });
      c.rect(x0, y, bw, 16, { fill: "#EEF3F1", stroke: LINE, "stroke-width": 1, rx: 8 });
      if (fillW > 0) c.rect(x0, y, Math.max(4, fillW), 16, { fill: col, rx: 8 });
      if (label) c.text(x1 + 6, y + 12, label, { "font-size": 11, fill: "#5a6b68", "text-anchor": "start" });
    }
    var joined = rates.map(function (r) { return r.rate; }).join("+");
    var steps = [
      { d: 900, say: rates.map(function (r) { return r.who + "每天完成 " + r.rate; }).join("，") + "。",
        frame: function (c) {
          c.text(W / 2, 24, "每人每天完成整工程的几分之几", { "font-size": 13, fill: TEAL });
          rates.forEach(function (r, i) {
            barRow(c, topY + i * rowH, r.who, r.rate / maxR * bw, PAL[i % PAL.length], r.rate + "/天");
          });
        } },
      { d: 1600, say: "合作时效率相加：每天共完成 " + joined + " = " + combined + "。",
        frame: function (c, p) {
          c.text(W / 2, 24, "合作进度", { "font-size": 13, fill: TEAL });
          rates.forEach(function (r, i) {
            barRow(c, topY + i * rowH, r.who, r.rate / maxR * bw, PAL[i % PAL.length], r.rate + "/天");
          });
          barRow(c, topY + n * rowH, "合作", combined * bw * p, RED, "");
        } },
      { d: 900, say: "整个工程看作 1，合作需要 1 ÷ " + combined + " = " + time + " 天完成。",
        frame: function (c) {
          c.text(W / 2, 24, "合作 " + time + " 天完成", { "font-size": 14, fill: RED, "font-weight": "bold" });
          rates.forEach(function (r, i) {
            barRow(c, topY + i * rowH, r.who, r.rate / maxR * bw, PAL[i % PAL.length], r.rate + "/天");
          });
          barRow(c, topY + n * rowH, "合作", bw, RED, time + " 天");
        } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: time + " 天",
      calc: { combined: combined, time: time } };
  };

  /* ------------------------------------------------------------
     (6) drawer 抽屉枚举（最不利原则）
     spec:{ items, drawers }  取 items = drawers+1；guarantee = drawers + 1
     ------------------------------------------------------------ */
  T.drawer = function (s) {
    var drawers = s.drawers, items = s.items;
    var guarantee = drawers + 1;
    var W = 360, H = 200, baseY = 128, dw = 60, dh = 54, gap = 18;
    var totalW = drawers * dw + (drawers - 1) * gap;
    var xStart = (W - totalW) / 2;
    function drawerX (i) { return xStart + i * (dw + gap); }
    function drawScene (c, placed) {
      for (var i = 0; i < drawers; i++) {
        c.rect(drawerX(i), baseY, dw, dh, { fill: "#F2F7F5", stroke: TEAL, "stroke-width": 2 });
        c.text(drawerX(i) + dw / 2, baseY + dh + 16, "抽屉" + (i + 1), { "font-size": 12, fill: INK });
      }
      for (var k = 0; k < placed; k++) {
        var di = k % drawers, round = Math.floor(k / drawers);
        var cx = drawerX(di) + dw / 2 - 12 + round * 24, cy = baseY + dh - 14;
        c.circle(cx, cy, 9, { fill: PAL[k % PAL.length], stroke: "#FFFFFF", "stroke-width": 1.5 });
      }
    }
    var steps = [
      { d: 700, say: "有 " + drawers + " 个抽屉。想一想：至少要拿出几个物品，才一定能保证有两个在同一抽屉？",
        frame: function (c) { drawScene(c, 0);
          c.text(W / 2, 26, "最不利原则", { "font-size": 14, fill: TEAL, "font-weight": "bold" }); } },
      { d: 1800, say: "最倒霉放法：前 " + drawers + " 个分别放进不同抽屉（每个各 1 个）；再放第 " + guarantee +
        " 个，无论塞进哪个抽屉，都必有一个抽屉凑成一对。",
        frame: function (c, p) { drawScene(c, Math.floor(p * items + 0.0001)); } },
      { d: 900, say: "所以至少拿出 " + guarantee + " 个物品，才能保证一定有两个放在同一个抽屉里。",
        frame: function (c) { drawScene(c, items);
          c.rect(drawerX(0) - 3, baseY - 3, dw + 6, dh + 6, { fill: "none", stroke: AMBER, "stroke-width": 3 });
          c.text(W / 2, 26, "至少 " + guarantee + " 个，保证有一对", { "font-size": 15, fill: RED, "font-weight": "bold" }); } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: guarantee + " 个",
      calc: { guarantee: guarantee, drawers: drawers, items: items } };
  };
});
