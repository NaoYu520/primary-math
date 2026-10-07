/* ============================================================
   anime-t1.js —— 第一批 7 个动画模板（旅行/追及/过桥/植树/间隔/周期/割补）
   注册到 Anime.TEMPLATES：travel chase train plant interval cycle cutmove
   数学全部由 spec 确定性推导；frame(ctx,p) 为纯函数，p∈[0..1] 即时整帧绘制。
   ============================================================ */
(function(root, factory){
  var A = root.Anime || (typeof module !== "undefined" && module.parent ? require("./anime.js").Anime : null);
  factory(A);
})(typeof self !== "undefined" ? self : this, function(Anime){
  var T = Anime.TEMPLATES;
  /* 仅用品牌调色板 + 具体几何色（不依赖 CSS 变量，node/浏览器口径一致） */
  var PAL = ["#2B8A83", "#3E6FB2", "#E9A23B", "#53A06B", "#D8664E", "#7FC3B8"];
  var INK = "#2B3A3A", SUB = "#5A6B68", LINE = "#9FB8B2";

  /* ---------- 1. travel 行程单向：路程=速度×时间 ---------- */
  T.travel = function(s){
    var W = 340, H = 180, X0 = 44, X1 = W - 44, RY = 92;
    var dist = s.speed * s.time;
    var steps = [
      { d: 900,
        say: "从“" + s.from + "”到“" + s.to + "”，每分钟走 " + s.speed + " " + s.unit + "，走了 " + s.time + " 分钟。路程 = 速度 × 时间。",
        frame: function(c){
          c.line(X0, RY, X1, RY, { stroke: LINE, "stroke-width": 3 });
          c.circle(X0, RY, 5, { fill: PAL[0], stroke: PAL[0] });
          c.circle(X1, RY, 5, { fill: PAL[1], stroke: PAL[1] });
          c.text(X0, RY + 26, s.from, { "font-size": 13, fill: SUB });
          c.text(X1, RY + 26, s.to, { "font-size": 13, fill: SUB });
          c.text((X0 + X1) / 2, RY - 30, "速度 " + s.speed + " " + s.unit + "/分", { "font-size": 13, fill: INK });
        } },
      { d: 1600,
        say: "匀速前进，走 " + s.time + " 分钟正好走完。路程 = " + s.speed + " × " + s.time + " = " + dist + " " + s.unit + "。",
        frame: function(c, p){
          c.line(X0, RY, X1, RY, { stroke: LINE, "stroke-width": 3 });
          c.circle(X0, RY, 5, { fill: PAL[0], stroke: PAL[0] });
          c.circle(X1, RY, 5, { fill: PAL[1], stroke: PAL[1] });
          var x = X0 + (X1 - X0) * p;
          c.circle(x, RY, 9, { fill: PAL[4], stroke: PAL[4] });
          c.text(x, RY + 26, s.from + "→" + s.to, { "font-size": 12, fill: SUB });
        } },
      { d: 900,
        say: "到达“" + s.to + "”！一共走了 " + dist + " " + s.unit + "。",
        frame: function(c){
          c.line(X0, RY, X1, RY, { stroke: LINE, "stroke-width": 3 });
          c.circle(X1, RY, 10, { fill: PAL[4], stroke: PAL[4] });
          c.circle(X1, RY, 16, { fill: "none", stroke: PAL[2], "stroke-width": 3 });
          c.text(X1, RY - 34, "到达 ✓", { "font-size": 14, fill: PAL[2] });
          c.text((X0 + X1) / 2, RY + 26, "共 " + dist + " " + s.unit, { "font-size": 13, fill: INK });
        } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: "路程=" + dist + " " + s.unit, calc: { dist: dist } };
  };

  /* ---------- 2. chase 追及：追及时间=路程差÷速度差 ---------- */
  T.chase = function(s){
    var W = 360, H = 200, X0 = 36, X1 = W - 36, RY = 100;
    var gap = s.gap, vslow = s.vslow, vfast = s.vfast;
    var catchT = gap / (vfast - vslow);
    var D = vfast * catchT;          // 快者从出发到追上共走的路程
    var sc = (X1 - X0) / D;
    var startSlow = X0 + gap * sc;   // 慢者初始位置
    var steps = [
      { d: 900,
        say: "“" + s.fast + "”在后、“" + s.slow + "”在前，两人相距 " + gap + " " + s.unit + "，同时同向出发。快者每分 " + vfast + "、慢者每分 " + vslow + "。",
        frame: function(c){
          c.line(X0, RY, X1, RY, { stroke: LINE, "stroke-width": 3 });
          c.circle(X0, RY, 9, { fill: PAL[1], stroke: PAL[1] });
          c.text(X0, RY + 26, s.fast, { "font-size": 13, fill: PAL[1] });
          c.circle(startSlow, RY, 9, { fill: PAL[3], stroke: PAL[3] });
          c.text(startSlow, RY + 26, s.slow, { "font-size": 13, fill: PAL[3] });
          var by = RY - 36;
          c.line(X0, by, startSlow, by, { stroke: PAL[2], "stroke-width": 2 });
          c.line(X0, by - 4, X0, by + 4, { stroke: PAL[2] });
          c.line(startSlow, by - 4, startSlow, by + 4, { stroke: PAL[2] });
          c.text((X0 + startSlow) / 2, by - 8, "相距" + gap, { "font-size": 12, fill: PAL[2] });
        } },
      { d: 1800,
        say: "快者每分比慢者多走 " + (vfast - vslow) + " " + s.unit + "，追上 " + gap + " 需要：" + gap + " ÷ (" + vfast + "-" + vslow + ") = " + catchT + "。",
        frame: function(c, p){
          c.line(X0, RY, X1, RY, { stroke: LINE, "stroke-width": 3 });
          var fx = X0 + vfast * catchT * sc * p;
          var sx = startSlow + vslow * catchT * sc * p;
          c.circle(fx, RY, 9, { fill: PAL[1], stroke: PAL[1] });
          c.text(fx, RY + 26, s.fast, { "font-size": 13, fill: PAL[1] });
          c.circle(sx, RY, 9, { fill: PAL[3], stroke: PAL[3] });
          c.text(sx, RY + 26, s.slow, { "font-size": 13, fill: PAL[3] });
        } },
      { d: 900,
        say: "经过 " + catchT + " 个单位时间，“" + s.fast + "”追上“" + s.slow + "”！追及时间 = " + catchT + "。",
        frame: function(c){
          c.line(X0, RY, X1, RY, { stroke: LINE, "stroke-width": 3 });
          c.circle(X1, RY, 11, { fill: PAL[2], stroke: PAL[2] });
          c.circle(X1, RY, 17, { fill: "none", stroke: PAL[0], "stroke-width": 3 });
          c.text(X1, RY - 38, "追上！", { "font-size": 14, fill: PAL[2] });
          c.text((X0 + X1) / 2, RY + 26, "追及时间 " + catchT, { "font-size": 13, fill: INK });
        } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: "追及时间=" + catchT, calc: { catchT: catchT } };
  };

  /* ---------- 3. train 火车过桥：路程=桥长+车长 ---------- */
  T.train = function(s){
    var W = 360, H = 200;
    var bx0 = 80, bx1 = 260, RY = 120;
    var bridgePx = bx1 - bx0, carPx = 34;
    var total = s.carLen + s.bridgeLen;
    var time = total / s.speed;
    var headEnd = bx1 + carPx;
    function bridge(c){
      c.line(bx0, RY, bx1, RY, { stroke: PAL[0], "stroke-width": 5 });
      for (var x = bx0; x <= bx1 + 1; x += 36) c.line(x, RY, x, RY + 14, { stroke: PAL[0], "stroke-width": 3 });
      c.text((bx0 + bx1) / 2, RY - 18, "桥长 " + s.bridgeLen, { "font-size": 12, fill: SUB });
    }
    function car(c, headX){
      c.rect(headX - carPx, RY - 22, carPx, 20, { fill: PAL[1], stroke: PAL[1] });
      c.rect(headX - carPx + 5, RY - 18, 8, 6, { fill: "#ffffff" });
      c.rect(headX - 12, RY - 18, 8, 6, { fill: "#ffffff" });
    }
    var steps = [
      { d: 800,
        say: "一列火车长 " + s.carLen + " " + s.unit + "，要开过一座长 " + s.bridgeLen + " " + s.unit + " 的桥。",
        frame: function(c){ bridge(c); car(c, bx0 - carPx); c.text(36, RY + 30, "火车", { "font-size": 12, fill: PAL[1] }); } },
      { d: 1800,
        say: "从车头进桥到车尾离开桥，火车一共走了 桥长+车长 = " + s.bridgeLen + " + " + s.carLen + " = " + total + " " + s.unit + "。",
        frame: function(c, p){ bridge(c); car(c, bx0 + (bridgePx + carPx) * p); } },
      { d: 900,
        say: "总路程 = 桥长+车长 = " + total + " " + s.unit + "；过桥时间 = " + total + " ÷ " + s.speed + " = " + time + "。",
        frame: function(c){
          bridge(c); car(c, headEnd);
          c.line(bx0, RY - 46, headEnd, RY - 46, { stroke: PAL[2], "stroke-width": 2 });
          c.line(bx0, RY - 42, bx0, RY - 50, { stroke: PAL[2] });
          c.line(headEnd, RY - 42, headEnd, RY - 50, { stroke: PAL[2] });
          c.text((bx0 + headEnd) / 2, RY - 52, "路程 " + total, { "font-size": 12, fill: PAL[2] });
        } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: "过桥路程=" + total + "，时间=" + time,
      calc: { total: total, time: time } };
  };

  /* ---------- 4. plant 植树：棵数与间隔数 ---------- */
  T.plant = function(s){
    var W = 360, H = 160, X0 = 40, X1 = W - 40, RY = 80;
    var gaps = s.len / s.interval;
    var num = (s.mode === "both") ? gaps + 1 : gaps;
    var pts = [];
    if (s.mode === "closed") {
      var cx = (X0 + X1) / 2, cy = 78, r = 46;
      for (var k = 0; k < gaps; k++) {
        var a = -Math.PI / 2 + k * 2 * Math.PI / gaps;
        pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
      }
    } else {
      var step = (X1 - X0) / gaps;
      var count = (s.mode === "both") ? gaps + 1 : gaps;
      for (var j = 0; j < count; j++) pts.push([X0 + j * step, RY]);
    }
    function tree(c, x, y, big){
      c.line(x, y + 5, x, y + 13, { stroke: PAL[2], "stroke-width": 3 });
      c.circle(x, y, big ? 8 : 7, { fill: PAL[3], stroke: PAL[3] });
    }
    function ground(c){
      if (s.mode === "closed") c.circle((X0 + X1) / 2, 78, 46, { fill: "none", stroke: LINE, "stroke-width": 3, "stroke-dasharray": "5 5" });
      else c.line(X0, RY, X1, RY, { stroke: LINE, "stroke-width": 3 });
    }
    var modeSay = (s.mode === "both") ? "两端都栽" : (s.mode === "one" ? "只栽一端" : "围成一圈（封闭图形）");
    var steps = [
      { d: 700,
        say: "一条长 " + s.len + " 的路，每隔 " + s.interval + " 栽一棵树，" + modeSay + "。",
        frame: function(c){ ground(c); } },
      { d: 1500,
        say: "每隔 " + s.interval + " 一棵，一棵一棵数：这条路被分成 " + gaps + " 个间隔。",
        frame: function(c, p){
          ground(c);
          var vis = Math.max(0, Math.round(num * p));
          for (var i = 0; i < vis; i++) tree(c, pts[i][0], pts[i][1], p > 0.9);
        } },
      { d: 800,
        say: (s.mode === "both") ? ("两端都栽：棵数 = 间隔数 + 1 = " + gaps + " + 1 = " + num + " 棵。")
          : (s.mode === "one") ? ("只栽一端：棵数 = 间隔数 = " + num + " 棵。")
          : ("封闭图形：棵数 = 间隔数 = " + num + " 棵。"),
        frame: function(c){
          ground(c);
          pts.forEach(function(pt){ tree(c, pt[0], pt[1], true); });
          c.text((X0 + X1) / 2, 142, "共 " + num + " 棵（" + gaps + " 个间隔）", { "font-size": 13, fill: INK });
        } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: num + " 棵", calc: { gaps: gaps, num: num } };
  };

  /* ---------- 5. interval 锯木/爬楼/敲钟：n-1 ---------- */
  T.interval = function(s){
    var n = s.n, actions = n - 1, steps = [];
    if (s.kind === "wood") {
      var X = 40, Y = 80, pw = 280, ph = 26, seg = pw / n;
      steps.push({ d: 700, say: "把一根木头锯成 " + n + " 段。",
        frame: function(c){ c.rect(X, Y, pw, ph, { fill: PAL[5], stroke: PAL[0] }); } });
      steps.push({ d: 1500, say: "每锯一次多出一段；要锯成 " + n + " 段，只需要锯 " + actions + " 次。",
        frame: function(c, p){
          c.rect(X, Y, pw, ph, { fill: PAL[5], stroke: PAL[0] });
          var vis = Math.max(0, Math.round(actions * p));
          for (var i = 1; i <= n - 1; i++) if (i <= vis) c.line(X + i * seg, Y - 4, X + i * seg, Y + ph + 4, { stroke: PAL[4], "stroke-width": 2 });
        } });
      steps.push({ d: 800, say: "锯成 " + n + " 段要锯 " + actions + " 次：段数 - 1 = 次数。",
        frame: function(c){
          c.rect(X, Y, pw, ph, { fill: PAL[5], stroke: PAL[0] });
          for (var i = 1; i <= n - 1; i++) c.line(X + i * seg, Y - 4, X + i * seg, Y + ph + 4, { stroke: PAL[4], "stroke-width": 2 });
          c.text(180, 150, "锯 " + actions + " 次", { "font-size": 14, fill: INK });
        } });
    } else if (s.kind === "floor") {
      var bx = 130, by = 150, fh = 24;
      function flats(c){
        for (var f = 1; f <= n; f++) {
          var y = by - (f - 1) * fh;
          c.line(bx - 40, y, bx + 40, y, { stroke: LINE, "stroke-width": 2 });
          c.text(bx + 52, y + 4, f + "楼", { "font-size": 11, fill: SUB });
        }
      }
      steps.push({ d: 700, say: "从 1 楼走到 " + n + " 楼。", frame: flats });
      steps.push({ d: 1500, say: "每上一层楼梯算一层；从1楼到" + n + "楼，一共要上 " + actions + " 层。",
        frame: function(c, p){
          flats(c);
          var vis = Math.max(0, Math.round(actions * p));
          for (var a = 0; a < vis; a++) c.rect(bx - 42, by - a * fh - fh, 8, fh, { fill: PAL[2] });
        } });
      steps.push({ d: 800, say: "从1楼到" + n + "楼，楼梯层数 = " + n + " - 1 = " + actions + " 层。",
        frame: function(c){
          flats(c);
          for (var a = 0; a < actions; a++) c.rect(bx - 42, by - a * fh - fh, 8, fh, { fill: PAL[2] });
          c.text(230, 40, "上 " + actions + " 层", { "font-size": 14, fill: INK });
        } });
    } else { /* clock */
      var ccx = 90, ccy = 90, R = 44, sx0 = 190, gap = 22;
      function dots(c){
        for (var i = 0; i < n; i++) c.circle(sx0 + i * gap, ccy, 5, { fill: PAL[3], stroke: PAL[3] });
      }
      steps.push({ d: 700, say: "钟声要敲 " + n + " 下。",
        frame: function(c){ c.circle(ccx, ccy, R, { fill: "none", stroke: PAL[0], "stroke-width": 3 }); c.text(ccx, ccy + 5, "钟", { "font-size": 16, fill: PAL[0] }); } });
      steps.push({ d: 1500, say: "每两下钟声之间有一个间隔；敲 " + n + " 下，一共有 " + actions + " 个间隔。",
        frame: function(c, p){
          c.circle(ccx, ccy, R, { fill: "none", stroke: PAL[0], "stroke-width": 3 });
          dots(c);
          var vis = Math.max(0, Math.round(actions * p));
          for (var a = 0; a < vis; a++) c.line(sx0 + a * gap, ccy - 13, sx0 + (a + 1) * gap, ccy - 13, { stroke: PAL[4], "stroke-width": 2 });
        } });
      steps.push({ d: 800, say: "敲钟 " + n + " 下，间隔数 = " + n + " - 1 = " + actions + " 个。",
        frame: function(c){
          c.circle(ccx, ccy, R, { fill: "none", stroke: PAL[0], "stroke-width": 3 });
          c.text(ccx, ccy + 5, "钟", { "font-size": 16, fill: PAL[0] });
          dots(c);
          for (var a = 0; a < actions; a++) c.line(sx0 + a * gap, ccy - 13, sx0 + (a + 1) * gap, ccy - 13, { stroke: PAL[4], "stroke-width": 2 });
          c.text(ccx, ccy + R + 22, "间隔 " + actions + " 个", { "font-size": 13, fill: INK });
        } });
    }
    return { vb: "0 0 360 190", steps: steps, final: "次数/层数/间隔 = " + actions, calc: { actions: actions } };
  };

  /* ---------- 6. cycle 周期：第 nth 个是谁 ---------- */
  T.cycle = function(s){
    var seq = s.seq, L = seq.length, nth = s.nth;
    var idx = (nth - 1) % L;
    var grp = Math.floor((nth - 1) / L);
    var W = 360, H = 150, cy = 80, r = 10;
    var nDraw = Math.max(2 * L, nth);
    var gap = (W - 40) / (nDraw - 1), sx0 = 20;
    function row(c, target){
      for (var i = 0; i < nDraw; i++) c.circle(sx0 + i * gap, cy, r, { fill: seq[i % L], stroke: seq[i % L] });
      if (target) {
        var tx = sx0 + (nth - 1) * gap;
        c.circle(tx, cy, r + 6, { fill: "none", stroke: PAL[4], "stroke-width": 3 });
      }
    }
    var steps = [
      { d: 800, say: "按一组 " + L + " 个的规律重复排列，颜色循环出现。",
        frame: function(c){ row(c, false); c.text(W / 2, cy + 34, "每组 " + L + " 个", { "font-size": 12, fill: SUB }); } },
      { d: 1300, say: "找第 " + nth + " 个：" + nth + " ÷ " + L + " = " + (grp + 1) + " 组余 " + (idx + 1) + "，所以看一组里第 " + (idx + 1) + " 个。",
        frame: function(c, p){
          row(c, false);
          var tx = sx0 + (nth - 1) * gap;
          var probe = sx0 + (tx - sx0) * p;
          c.circle(probe, cy, r + 4, { fill: "none", stroke: PAL[2], "stroke-width": 2 });
          if (p > 0.6) c.text(tx, cy - 26, "第" + nth + "个", { "font-size": 12, fill: PAL[2] });
        } },
      { d: 800, say: "第 " + nth + " 个和一组里第 " + (idx + 1) + " 个相同，是这一组的第 " + (idx + 1) + " 种颜色。",
        frame: function(c){ row(c, true); c.text(sx0 + (nth - 1) * gap, cy - 26, "就是它！", { "font-size": 13, fill: PAL[4] }); } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: "第" + nth + "个 idx=" + idx,
      calc: { idx: idx, posInGroup: idx, group: grp } };
  };

  /* ---------- 7. cutmove 割补：平行四边形→长方形，面积不变 ---------- */
  T.cutmove = function(s){
    var base = s.base || 10, height = s.height || 6;
    var area = base * height;
    var W = 360, H = 190;
    var x0 = 70, yTop = 60, yBot = 150, basePx = 190, shear = 36, hPx = yBot - yTop;
    function tri(c, dx, fill){
      c.el("polygon", { points: (x0 + dx) + "," + yBot + " " + (x0 + shear + dx) + "," + yBot + " " + (x0 + shear + dx) + "," + yTop,
        fill: fill, stroke: fill, "stroke-width": 2 });
    }
    var steps = [
      { d: 800, say: "这是一个平行四边形，底是 " + base + "，高是 " + height + "。沿高把左边的直角三角形剪下来。",
        frame: function(c){
          c.el("polygon", { points: x0 + "," + yBot + " " + (x0 + basePx) + "," + yBot + " " + (x0 + basePx + shear) + "," + yTop + " " + (x0 + shear) + "," + yTop,
            fill: PAL[5], stroke: PAL[0], "stroke-width": 2 });
          c.line(x0 + shear, yTop, x0 + shear, yBot, { stroke: PAL[4], "stroke-width": 2, "stroke-dasharray": "5 4" });
          c.text((x0 + x0 + basePx) / 2, yBot + 18, "底 " + base, { "font-size": 12, fill: SUB });
        } },
      { d: 1600, say: "把剪下来的三角形向右平移，正好补到右边的缺口，拼成一个长方形。",
        frame: function(c, p){
          c.el("polygon", { points: (x0 + shear) + "," + yTop + " " + (x0 + basePx + shear) + "," + yTop + " " + (x0 + basePx) + "," + yBot + " " + (x0 + shear) + "," + yBot,
            fill: PAL[5], stroke: PAL[0], "stroke-width": 2 });
          tri(c, basePx * p, PAL[2]);
        } },
      { d: 900, say: "形状变了，面积没有变！长方形面积 = 底 × 高 = " + base + " × " + height + " = " + area + "。",
        frame: function(c){
          c.rect(x0 + shear, yTop, basePx, hPx, { fill: PAL[3], stroke: PAL[3] });
          c.text(x0 + shear + basePx / 2, yTop + hPx / 2 + 5, "面积 " + area, { "font-size": 15, fill: "#ffffff" });
        } }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: "平行四边形面积=" + area,
      calc: { area: area, base: base, height: height } };
  };
});
