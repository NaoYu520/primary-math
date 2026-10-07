/* ============================================================
   Anime —— 程序化 SVG 动画讲解引擎（闹闹鱼奥数训练课堂）
   纯原生 JS + SVG，无 AI 视频、无公式库。
   契约：Anime.ensureCss(); Anime.mount(el, spec) -> {play,pause,step,reset,destroy}
   模板：Anime.TEMPLATES[type](spec) -> {vb, steps:[{d,say,frame}], final, calc}
   ============================================================ */
var Anime = (function () {
  var SVGNS = "http://www.w3.org/2000/svg";
  var TEMPLATES = {};
  var cssInjected = false;

  function ensureCss () {
    if (cssInjected || typeof document === "undefined") return;
    cssInjected = true;
    var st = document.createElement("style");
    st.textContent = [
      ".an-player{border:1px solid var(--line);border-radius:14px;background:var(--card);padding:12px;margin:10px 0;box-shadow:var(--shadow);}",
      ".an-stage svg.an-svg{display:block;width:100%;height:auto;border-radius:8px;background:linear-gradient(180deg,#FBFDFC,#F1F6F4);}",
      ".an-caption{min-height:46px;margin:8px 2px;font-size:15px;color:var(--ink);background:var(--teal-soft);border-left:4px solid var(--teal);border-radius:8px;padding:8px 12px;}",
      ".an-ctrl{display:flex;flex-wrap:wrap;align-items:center;gap:8px;}",
      ".an-btn{min-height:38px;padding:7px 14px;border-radius:9px;border:1px solid var(--line);background:var(--card);color:var(--ink-soft);font-size:14px;}",
      ".an-btn:hover{border-color:var(--teal);color:var(--teal);}",
      ".an-btn.primary{background:var(--teal);color:#fff;border-color:var(--teal);}",
      ".an-prog{margin-left:auto;font-size:13px;color:var(--ink-faint);}",
      "@media (max-width:560px){.an-caption{font-size:14px;}.an-btn{padding:7px 10px;min-height:40px;}}"
    ].join("\n");
    document.head.appendChild(st);
  }

  /* 每个 frame(ctx,p) 是纯函数：p∈[0..1]，由 ctx 工具即时绘制该帧 */
  function makeCtx (svg) {
    function node (tag, at) {
      var e = document.createElementNS(SVGNS, tag);
      if (at) for (var k in at) e.setAttribute(k, at[k]);
      svg.appendChild(e); return e;
    }
    return {
      el: node,
      line: function (x1, y1, x2, y2, at) { at = at || {};
        at.x1 = x1; at.y1 = y1; at.x2 = x2; at.y2 = y2;
        if (!at.stroke) at.stroke = "var(--ink)";
        if (!at["stroke-width"]) at["stroke-width"] = 2;
        if (!at["stroke-linecap"]) at["stroke-linecap"] = "round";
        return node("line", at);
      },
      circle: function (cx, cy, r, at) { at = at || {};
        at.cx = cx; at.cy = cy; at.r = r; return node("circle", at);
      },
      rect: function (x, y, w, h, at) { at = at || {};
        at.x = x; at.y = y; at.width = w; at.height = h;
        if (!at.rx) at.rx = 4; return node("rect", at);
      },
      text: function (x, y, s, at) { at = at || {};
        at.x = x; at.y = y;
        if (!at["font-size"]) at["font-size"] = 13;
        if (!at["text-anchor"]) at["text-anchor"] = "middle";
        if (!at.fill) at.fill = "var(--ink)";
        var t = node("text", at); t.textContent = s; return t;
      },
      group: function (at) { return node("g", at || {}); }
    };
  }

  function mount (el, spec) {
    ensureCss();
    var b = TEMPLATES[spec.type](spec);
    var wrap = document.createElement("div");
    wrap.className = "an-player";
    wrap.innerHTML =
      '<div class="an-stage"></div>' +
      '<div class="an-caption"></div>' +
      '<div class="an-ctrl">' +
      '<button type="button" class="an-btn primary" data-a="play">▶ 播放</button>' +
      '<button type="button" class="an-btn" data-a="pause">⏸ 暂停</button>' +
      '<button type="button" class="an-btn" data-a="step">⏭ 单步</button>' +
      '<button type="button" class="an-btn" data-a="reset">⟲ 重播</button>' +
      '<span class="an-prog"></span></div>';
    el.appendChild(wrap);

    var svg = document.createElementNS(SVGNS, "svg");
    svg.setAttribute("viewBox", b.vb);
    svg.setAttribute("class", "an-svg");
    wrap.querySelector(".an-stage").appendChild(svg);
    var ctx = makeCtx(svg);

    var idx = 0, playing = false, raf = 0;
    function cancelRaf () { if (raf) cancelAnimationFrame(raf); raf = 0; }
    function clearSvg () { while (svg.firstChild) svg.removeChild(svg.firstChild); }
    function draw (p) { clearSvg(); b.steps[idx].frame(ctx, p); }
    function syncCaption () {
      wrap.querySelector(".an-caption").textContent = b.steps[idx].say;
      wrap.querySelector(".an-prog").textContent = (idx + 1) + " / " + b.steps.length;
    }
    function showEnd () { syncCaption(); draw(1); }

    function tweenStep (i) {
      return new Promise(function (res) {
        idx = i; syncCaption();
        var st = b.steps[i], dur = st.d || 800, t0 = performance.now();
        draw(0);
        function loop (now) {
          if (!playing || !svg.isConnected) { res(); return; }
          var p = Math.min(1, (now - t0) / dur);
          draw(p);
          if (p < 1) raf = requestAnimationFrame(loop); else res();
        }
        raf = requestAnimationFrame(loop);
      });
    }
    function play () {
      if (playing) return;
      playing = true;
      (async function () {
        var i = idx;
        while (playing && i < b.steps.length) {
          await tweenStep(i);
          if (i < b.steps.length - 1) i++;
          else { playing = false; }
        }
      })();
    }
    function pause () { playing = false; cancelRaf(); showEnd(); }
    function step () { playing = false; cancelRaf();
      if (idx < b.steps.length - 1) { idx++; showEnd(); } }
    function reset () { playing = false; cancelRaf(); idx = 0; showEnd(); }
    function destroy () { playing = false; cancelRaf(); }

    wrap.querySelectorAll(".an-btn").forEach(function (bt) {
      bt.addEventListener("click", function () {
        var a = bt.getAttribute("data-a");
        if (a === "play") play();
        else if (a === "pause") pause();
        else if (a === "step") step();
        else reset();
      });
    });
    showEnd();
    return { play: play, pause: pause, step: step, reset: reset, destroy: destroy };
  }

  /* ============================================================
     模板：bar —— 线段图伸缩（和差倍 / 分数 / 百分数）
     spec:{ parts:[{n,color,label}], total:'合计/一共' }
     ============================================================ */
  TEMPLATES.bar = function (s) {
    var W = 320, H = 170, X = 30, Y = 70, BH = 34;
    var palette = ["#2B8A83", "#3E6FB2", "#E9A23B", "#53A06B", "#D8664E", "#7FC3B8"];
    var parts = s.parts.map(function (p, i) {
      return { n: p.n, color: p.color || palette[i % palette.length], label: p.label || ("第" + (i + 1) + "段") };
    });
    var total = parts.reduce(function (a, p) { return a + p.n; }, 0);
    var scale = (W - 2 * X) / total;
    var starts = [];
    parts.reduce(function (acc, p) { starts.push(acc); return acc + p.n * scale; }, X);

    var steps = [];
    /* 每一段生长 */
    parts.forEach(function (p, k) {
      steps.push({
        d: 750,
        say: "画出" + p.label + "：" + p.n + "，长度对应数量 " + p.n + "。",
        frame: function (c, t) {
          c.line(X, Y + BH + 8, X + total * scale, Y + BH + 8, { stroke: "var(--line)" });
          for (var j = 0; j < k; j++) {
            c.rect(starts[j], Y, parts[j].n * scale, BH, { fill: parts[j].color, stroke: parts[j].color });
            c.text(starts[j] + parts[j].n * scale / 2, Y + 22, String(parts[j].n), { fill: "#fff", "font-size": 14 });
          }
          var w = Math.max(1, parts[k].n * scale * t);
          c.rect(starts[k], Y, w, BH, { fill: parts[k].color, stroke: parts[k].color });
          if (t > 0.4) c.text(starts[k] + parts[k].n * scale / 2, Y + 22, String(parts[k].n), { fill: "#fff", "font-size": 14 });
        }
      });
    });
    /* 合计 */
    steps.push({
      d: 700,
      say: (s.total || "合计") + " = " + parts.map(function (p) { return p.n; }).join(" + ") + " = " + total + "。",
      frame: function (c, t) {
        c.line(X, Y + BH + 8, X + total * scale, Y + BH + 8, { stroke: "var(--line)" });
        parts.forEach(function (p, j) {
          c.rect(starts[j], Y, p.n * scale, BH, { fill: p.color, stroke: p.color });
          c.text(starts[j] + p.n * scale / 2, Y + 22, String(p.n), { fill: "#fff", "font-size": 14 });
        });
        var braceY = Y - 16;
        c.line(X, braceY, X + total * scale, braceY, { stroke: "var(--amber)", "stroke-width": 2.5 });
        c.line(X, braceY - 5, X, braceY + 5, { stroke: "var(--amber)" });
        c.line(X + total * scale, braceY - 5, X + total * scale, braceY + 5, { stroke: "var(--amber)" });
        c.text(X + total * scale / 2, braceY - 6, (s.total || "合计") + " " + total, { fill: "var(--teal-dark)", "font-size": 15 });
      }
    });
    return { vb: "0 0 " + W + " " + H, steps: steps, final: String(total),
      calc: { total: total, parts: parts.map(function (p) { return p.n; }) } };
  };

  /* ============================================================
     模板：meet —— 相遇问题
     spec:{ a,b,va,vb,total, unit:'米' }
     ============================================================ */
  TEMPLATES.meet = function (s) {
    var W = 340, H = 190, X0 = 34, X1 = W - 34, RY = 96;
    var meetT = s.total / (s.va + s.vb);
    var scale = (X1 - X0) / s.total;
    var meetX = X0 + s.va * meetT * scale;
    function road (c) {
      c.line(X0, RY, X1, RY, { stroke: "var(--line)", "stroke-width": 3, "stroke-dasharray": "6 6" });
    }
    function person (c, x, color, name) {
      c.circle(x, RY - 16, 9, { fill: color, stroke: color });
      c.text(x, RY + 24, name, { "font-size": 13, fill: "var(--ink-soft)" });
    }
    var steps = [
      { d: 800,
        say: "两地相距 " + s.total + " " + s.unit + "，" + s.a + "和" + s.b + "分别从两端同时出发，相向而行。",
        frame: function (c) {
          road(c);
          c.text((X0 + X1) / 2, RY - 46, "两地相距 " + s.total + " " + s.unit, { fill: "var(--teal-dark)", "font-size": 15 });
          person(c, X0, "#2B8A83", s.a); person(c, X1, "#3E6FB2", s.b);
        }
      },
      { d: 1600,
        say: s.a + "速度 " + s.va + "、" + s.b + "速度 " + s.vb + "（" + s.unit + "/单位时间）。相遇时间 = " +
          s.total + " ÷ (" + s.va + "+" + s.vb + ") = " + meetT + "。",
        frame: function (c, t) {
          road(c);
          var xa = X0 + s.va * meetT * scale * t;
          var xb = X1 - s.vb * meetT * scale * t;
          person(c, xa, "#2B8A83", s.a); person(c, xb, "#3E6FB2", s.b);
        }
      },
      { d: 900,
        say: "经过 " + meetT + " 个单位时间，两人在途中相遇；相遇点距" + s.a + "出发端 " +
          (s.va * meetT) + " " + s.unit + "。",
        frame: function (c) {
          road(c);
          c.circle(meetX, RY - 16, 10, { fill: "var(--teal)", stroke: "var(--teal)" });
          c.circle(meetX, RY - 16, 15, { fill: "none", stroke: "var(--amber)", "stroke-width": 3 });
          c.text(meetX, RY - 46, "相遇点", { fill: "var(--amber)", "font-size": 14 });
          c.text(meetX, RY + 24, s.a + "·" + s.b, { "font-size": 13, fill: "var(--ink-soft)" });
        }
      }
    ];
    return { vb: "0 0 " + W + " " + H, steps: steps, final: "相遇时间=" + meetT,
      calc: { meetT: meetT, meetDistA: s.va * meetT, meetDistB: s.vb * meetT } };
  };

  return { ensureCss: ensureCss, mount: mount, TEMPLATES: TEMPLATES };
})();
if (typeof module !== "undefined" && module.exports) module.exports = { Anime: Anime };
