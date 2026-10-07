/* js/gen2-g56.js —— 5-6年级「小数 / 分数 / 百分数 / 圆与立体」程序化生成器（10 类）。
 * 类型：decimalMul / decimalCalc / fracAddSub / fracMul / fracDiv / fracMix /
 *       percentConv / circleLen / circleArea / solidVol
 * 契约同 js/gen.js：Gen.get(type,n,rand) → 题对象（gen:true）；
 * html 尾 <!--GIN{...}--> 只放出题输入，绝不含答案；Gen.register() 向后兼容挂接。
 * 色板：#2B8A83 #3E6FB2 #E9A23B #53A06B #D8664E，禁紫色。
 */
(function (root, factory) {
  var G = root.Gen || (typeof module !== "undefined" && module.parent ? require("./gen.js").Gen : null);
  factory(G);
})(typeof self !== "undefined" ? self : this, function (Gen) {
  if (!Gen || typeof Gen.register !== 'function') {
    throw new Error('gen2-g56.js 需要先加载 js/gen.js（Gen.register 缺失）');
  }

  function ri(rand, min, max) { return min + Math.floor(rand() * (max - min + 1)); }
  function pick(rand, arr) { return arr[Math.floor(rand() * arr.length)]; }
  function shuffle(rand, arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rand() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function gin(o) { return "<!--GIN" + JSON.stringify(o) + "-->"; }
  function gcd(x, y) {
    x = Math.abs(x); y = Math.abs(y);
    while (y) { var t = x % y; x = y; y = t; }
    return x || 1;
  }
  function reduce(n, d) { var g = gcd(n, d); return [n / g, d / g]; }
  function fracStr(n, d) { var r = reduce(n, d); return r[0] + '/' + r[1]; }

  /* ---------- 程序化内联 SVG ---------- */
  // 分数饼图：圆均分 denom 份，前 numer 份涂色
  function pieSVG(numer, denom) {
    var cx = 60, cy = 60, r = 48;
    var cells = "<circle cx='" + cx + "' cy='" + cy + "' r='" + r + "' fill='#FCFDF9' stroke='#26313A' stroke-width='2.5'/>";
    for (var i = 0; i < denom; i++) {
      var a1 = (i * 360 / denom - 90) * Math.PI / 180;
      var a2 = ((i + 1) * 360 / denom - 90) * Math.PI / 180;
      var x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      var x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
      var large = 0;
      cells += "<line x1='" + cx + "' y1='" + cy + "' x2='" + x1.toFixed(1) + "' y2='" + y1.toFixed(1) +
        "' stroke='#26313A' stroke-width='1.5'/>";
      if (i < numer) {
        cells += "<path d='M" + cx + " " + cy + " L" + x1.toFixed(1) + " " + y1.toFixed(1) +
          " A" + r + " " + r + " 0 " + large + " 1 " + x2.toFixed(1) + " " + y2.toFixed(1) + " Z' fill='#53A06B' fill-opacity='0.85'/>";
      }
    }
    return "<svg class='fig' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'>" + cells + "</svg>";
  }
  // 圆（求周长/面积示意）
  function circleSVG() {
    return "<svg class='fig' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'>" +
      "<circle cx='70' cy='70' r='55' fill='#7FC3B8' fill-opacity='0.5' stroke='#2B8A83' stroke-width='3'/>" +
      "<line x1='70' y1='70' x2='125' y2='70' stroke='#D8664E' stroke-width='2.5' stroke-dasharray='4 3'/>" +
      "<circle cx='70' cy='70' r='3' fill='#26313A'/></svg>";
  }
  // 长方体堆叠（体积示意）
  function boxSVG(a, b, c) {
    // 画 a×b×c 个小立方块的斜示意（简化：正面 a×c 网格，顶面 b 排）
    var s = 12, off = 6;
    var w = a * s + b * off + 10, h = c * s + b * off + 10;
    var cells = '';
    var ox = 8, oy = 8 + b * off;
    // 正面
    for (var i = 0; i < a; i++) for (var j = 0; j < c; j++) {
      cells += "<rect x='" + (ox + i * s) + "' y='" + (oy + j * s) + "' width='" + (s - 1.5) + "' height='" + (s - 1.5) +
        "' fill='#2B8A83' stroke='#26313A' stroke-width='0.8'/>";
    }
    // 顶面
    for (var k = 0; k < b; k++) for (var i2 = 0; i2 < a; i2++) {
      cells += "<rect x='" + (ox + i2 * s + k * off) + "' y='" + (oy - k * off) + "' width='" + (s - 1.5) + "' height='" + (s - 1.5) +
        "' fill='#E9A23B' stroke='#26313A' stroke-width='0.8'/>";
    }
    // 侧面
    for (var k2 = 0; k2 < b; k2++) for (var j2 = 0; j2 < c; j2++) {
      cells += "<rect x='" + (ox + a * s + k2 * off) + "' y='" + (oy + j2 * s - k2 * off) + "' width='" + (s - 1.5) + "' height='" + (s - 1.5) +
        "' fill='#3E6FB2' stroke='#26313A' stroke-width='0.8'/>";
    }
    return "<svg class='fig' viewBox='0 0 " + w + " " + h + "' xmlns='http://www.w3.org/2000/svg'>" + cells + "</svg>";
  }
  // 小数筹码（元角分示意）
  function decimalChip(text, color) {
    var w = Math.max(40, text.length * 14 + 16);
    return "<svg class='fig' viewBox='0 0 " + w + " 40' xmlns='http://www.w3.org/2000/svg'>" +
      "<rect x='4' y='5' width='" + (w - 8) + "' height='30' rx='8' fill='" + color + "' stroke='#26313A' stroke-width='1.5'/>" +
      "<text x='" + (w / 2) + "' y='27' font-size='16' fill='#fff' text-anchor='middle' font-weight='bold'>" + text + "</text></svg>";
  }

  /* ========== 1. decimalMul：小数乘法（填空） ========== */
  function g_decimalMul(rand) {
    var mode = pick(rand, ['tenthTenth', 'wholeTenth', 'tenthHundred']);
    var q;
    if (mode === 'tenthTenth') {
      var a1 = ri(rand, 2, 9), b1 = ri(rand, 2, 9);
      var a = a1 / 10, b = b1 / 10;
      var ans = a * b;
      q = {
        type: 'fill',
        html: '竖式计算：<b>' + a.toFixed(1) + '×' + b.toFixed(1) + '</b>＝（ ）。' +
          decimalChip(a.toFixed(1), '#2B8A83') + decimalChip('×' + b.toFixed(1), '#E9A23B'),
        answer: Math.round(ans * 100) / 100,
        analysis: '先按整数算 ' + a1 + '×' + b1 + '＝' + (a1 * b1) +
          '；两个因数各有 1 位小数，积一共是 2 位小数，从 ' + (a1 * b1) + ' 的右边数出 2 位点上小数点，得 ' +
          (Math.round(ans * 100) / 100).toFixed(2) + '。'
      };
      q.html += gin({ t: 'decimalMul', mode: mode, a1: a1, b1: b1 });
    } else if (mode === 'wholeTenth') {
      var w = ri(rand, 3, 25), tenths = ri(rand, 2, 9);
      var a2 = w, b2 = tenths / 10;
      var ans2 = w * tenths / 10;
      q = {
        type: 'fill',
        html: '竖式计算：<b>' + a2 + '×' + b2.toFixed(1) + '</b>＝（ ）。',
        answer: Math.round(ans2 * 10) / 10,
        analysis: '先按整数算 ' + a2 + '×' + tenths + '＝' + (a2 * tenths) +
          '；因数 ' + b2.toFixed(1) + ' 有 1 位小数，积也取 1 位小数，得 ' + (Math.round(ans2 * 10) / 10).toFixed(1) + '。'
      };
      q.html += gin({ t: 'decimalMul', mode: mode, w: w, ten: tenths });
    } else {
      var a3 = ri(rand, 2, 9), b3 = ri(rand, 1, 9);
      var ans3 = a3 * b3 / 1000;
      q = {
        type: 'fill',
        html: '竖式计算：<b>' + (a3 / 10).toFixed(1) + '×0.0' + b3 + '</b>＝（ ）。',
        answer: Math.round(ans3 * 1000) / 1000,
        analysis: '先按整数算 ' + a3 + '×' + b3 + '＝' + (a3 * b3) +
          '；一个因数 1 位小数、另一个 2 位小数，积一共 3 位小数，得 ' + (Math.round(ans3 * 1000) / 1000).toFixed(3) + '。'
      };
      q.html += gin({ t: 'decimalMul', mode: mode, a1: a3, b1: b3 });
    }
    return q;
  }

  /* ========== 2. decimalCalc：小数加减 / 简便运算（填空） ========== */
  function g_decimalCalc(rand) {
    var mode = pick(rand, ['addBorrow', 'subBorrow', 'addFriends', 'subTogether']);
    var q;
    if (mode === 'addBorrow') {
      var a = ri(rand, 12, 89) / 10, b = ri(rand, 11, 59) / 10;
      var ans = a + b;
      q = {
        type: 'fill',
        html: '竖式计算：<b>' + a.toFixed(1) + '＋' + b.toFixed(1) + '</b>＝（ ）。',
        answer: Math.round(ans * 10) / 10,
        analysis: '小数点对齐再相加：' + a.toFixed(1) + '＋' + b.toFixed(1) + '＝' + (Math.round(ans * 10) / 10).toFixed(1) + '。'
      };
      q.html += gin({ t: 'decimalCalc', mode: mode, a: a, b: b });
    } else if (mode === 'subBorrow') {
      var a2 = ri(rand, 21, 99) / 10, b2 = ri(rand, 11, Math.floor(a2 * 10) - 1) / 10;
      var ans2 = a2 - b2;
      q = {
        type: 'fill',
        html: '竖式计算：<b>' + a2.toFixed(1) + '－' + b2.toFixed(1) + '</b>＝（ ）。',
        answer: Math.round(ans2 * 10) / 10,
        analysis: '小数点对齐，不够减向前一位借 1：' + a2.toFixed(1) + '－' + b2.toFixed(1) + '＝' + (Math.round(ans2 * 10) / 10).toFixed(1) + '。'
      };
      q.html += gin({ t: 'decimalCalc', mode: mode, a: a2, b: b2 });
    } else if (mode === 'addFriends') {
      // 两个加数的小数部分凑成 1，先加简便
      var t1 = ri(rand, 1, 9), t2 = 10 - t1;
      var i1 = ri(rand, 2, 9), i2 = ri(rand, 2, 9);
      var a3 = i1 + t1 / 10, c3 = i2 + t2 / 10, b3 = ri(rand, 10, 50);
      var ans3 = a3 + b3 + c3;
      q = {
        type: 'fill',
        html: '用凑整法巧算：<b>' + a3.toFixed(1) + '＋' + b3 + '＋' + c3.toFixed(1) + '</b>＝（ ）。',
        answer: Math.round(ans3 * 10) / 10,
        analysis: a3.toFixed(1) + ' 和 ' + c3.toFixed(1) + ' 的小数部分合起来正好是 1，先加：' +
          a3.toFixed(1) + '＋' + c3.toFixed(1) + '＝' + (a3 + c3) + '；再算 ' + (a3 + c3) + '＋' + b3 + '＝' +
          (Math.round(ans3 * 10) / 10).toFixed(1) + '。'
      };
      q.html += gin({ t: 'decimalCalc', mode: mode, a: a3, b: b3, c: c3 });
    } else {
      // 连减：两个减数合起来凑整
      var sum = ri(rand, 30, 90) / 10;
      var b4 = ri(rand, 11, Math.floor(sum * 10) - 11) / 10;
      var c4 = sum - b4;
      var a4 = sum + ri(rand, 20, 60) / 10;
      var ans4 = a4 - sum;
      q = {
        type: 'fill',
        html: '巧算：<b>' + a4.toFixed(1) + '－' + b4.toFixed(1) + '－' + c4.toFixed(1) + '</b>＝（ ）。',
        answer: Math.round(ans4 * 10) / 10,
        analysis: '两个减数先合起来：' + b4.toFixed(1) + '＋' + c4.toFixed(1) + '＝' + sum.toFixed(1) +
          '；再算 ' + a4.toFixed(1) + '－' + sum.toFixed(1) + '＝' + (Math.round(ans4 * 10) / 10).toFixed(1) + '。'
      };
      q.html += gin({ t: 'decimalCalc', mode: mode, a: a4, b: b4, c: c4 });
    }
    return q;
  }

  /* ========== 3. fracAddSub：同 / 可通分分数加减（填空，answer 为等价写法数组） ========== */
  function g_fracAddSub(rand) {
    var mode = pick(rand, ['sameDen', 'diffDen', 'mixed']);
    var q;
    if (mode === 'sameDen') {
      var d = ri(rand, 5, 12);
      var n1 = ri(rand, 1, d - 1), n2 = ri(rand, 1, d - 1);
      var op = rand() < 0.5 ? '+' : '-';
      if (op === '-' && n2 > n1) { var t = n1; n1 = n2; n2 = t; }
      var nn = op === '+' ? n1 + n2 : n1 - n2;
      var raw = nn + '/' + d;
      var red = fracStr(nn, d);
      q = {
        type: 'fill',
        html: '计算：<b>' + n1 + '/' + d + ' ' + op + ' ' + n2 + '/' + d + '</b>＝（ ）。' +
          (op === '+' ? pieSVG(Math.min(nn, d), d) : ''),
        answer: raw === red ? [red] : [red, raw],
        analysis: '同分母分数相加减，分母不变、分子相加减：(' + n1 + (op === '+' ? '＋' : '－') + n2 + ')/' + d +
          '＝' + raw + (raw === red ? '' : '，约成最简是 ' + red) + '。'
      };
      q.html += gin({ t: 'fracAddSub', mode: mode, n1: n1, n2: n2, d: d, op: op });
    } else if (mode === 'diffDen') {
      // 一分母是另一分母的倍数，便于通分
      var d1 = ri(rand, 2, 6), k = ri(rand, 2, 4), d2 = d1 * k;
      var a1 = ri(rand, 1, d1 - 1);
      var op2 = rand() < 0.5 ? '+' : '-';
      // 减法时令 a2 ≤ a1*k，保证通分后被减数为正，无需交换分母
      var a2 = op2 === '-' ? ri(rand, 1, a1 * k) : ri(rand, 1, d2 - 1);
      var nn2 = op2 === '+' ? a1 * k + a2 : a1 * k - a2;
      var raw2 = nn2 + '/' + d2;
      var red2 = fracStr(nn2, d2);
      q = {
        type: 'fill',
        html: '计算（先通分）：<b>' + a1 + '/' + d1 + ' ' + op2 + ' ' + a2 + '/' + d2 + '</b>＝（ ）。',
        answer: raw2 === red2 ? [red2] : [red2, raw2],
        analysis: d2 + ' 是 ' + d1 + ' 的 ' + k + ' 倍，把 ' + a1 + '/' + d1 + ' 通分成 ' + (a1 * k) + '/' + d2 +
          '，再' + (op2 === '+' ? '加' : '减') + '：(' + (a1 * k) + (op2 === '+' ? '＋' : '－') + a2 + ')/' + d2 +
          '＝' + raw2 + (raw2 === red2 ? '' : '，约成最简 ' + red2) + '。'
      };
      q.html += gin({ t: 'fracAddSub', mode: mode, n1: a1, n2: a2, d1: d1, d2: d2, op: op2 });
    } else {
      // 带分数加减：整数 + 真分数 ± 真分数
      var i3 = ri(rand, 1, 3);
      var d3 = ri(rand, 3, 8);
      var n3 = ri(rand, 1, d3 - 1);
      var n4 = ri(rand, 1, d3 - 1);
      var whole = i3;
      var fracSum = n3 + n4;
      var carry = 0;
      var fracPart = fracSum;
      if (fracSum >= d3) { carry = 1; fracPart = fracSum - d3; }
      var num = (whole + carry) * d3 + fracPart;
      var red3 = fracStr(num, d3);
      q = {
        type: 'fill',
        html: '计算：<b>' + whole + '又' + n3 + '/' + d3 + ' ＋ ' + n4 + '/' + d3 + '</b>＝（ ）。',
        answer: [red3],
        analysis: '整数部分 ' + whole + ' 不变，分数部分同分母相加：' + n3 + '＋' + n4 + '＝' + fracSum +
          (carry ? '，满 ' + d3  + ' 向整数进 1' : '') + '，结果是 ' + (whole + carry) + '又' + fracPart + '/' + d3 +
          '，写作假分数即 ' + red3 + '。'
      };
      q.html += gin({ t: 'fracAddSub', mode: mode, whole: whole, d: d3, n1: n3, n2: n4 });
    }
    return q;
  }

  /* ========== 4. fracMul：分数乘法（先约分再乘） ========== */
  function g_fracMul(rand) {
    var a = ri(rand, 1, 9), b = ri(rand, 2, 9), c = ri(rand, 1, 9), d = ri(rand, 2, 9);
    // 保证约分后结果为真分数或整数
    var num = a * c, den = b * d;
    var raw = num + '/' + den;
    var red = fracStr(num, den);
    var q = {
      type: 'fill',
      html: '计算：<b>' + a + '/' + b + ' × ' + c + '/' + d + '</b>＝（ ）。' + pieSVG(Math.min(a, b), b),
      answer: raw === red ? [red] : [red, raw],
      analysis: '分子乘分子、分母乘分母：(' + a + '×' + c + ')/(' + b + '×' + d + ')＝' + raw +
        (raw === red ? '' : '，约成最简 ' + red) + '。能约分的可以先交叉约分再乘。'
    };
    q.html += gin({ t: 'fracMul', a: a, b: b, c: c, d: d });
    return q;
  }

  /* ========== 5. fracDiv：分数除法（乘倒数） ========== */
  function g_fracDiv(rand) {
    var a = ri(rand, 1, 9), b = ri(rand, 2, 9), c = ri(rand, 1, 9), d = ri(rand, 2, 9);
    // (a/b) ÷ (c/d) = a*d / (b*c)
    var num = a * d, den = b * c;
    var raw = num + '/' + den;
    var red = fracStr(num, den);
    var q = {
      type: 'fill',
      html: '计算：<b>' + a + '/' + b + ' ÷ ' + c + '/' + d + '</b>＝（ ）。',
      answer: raw === red ? [red] : [red, raw],
      analysis: '除以一个分数等于乘它的倒数：' + a + '/' + b + ' × ' + d + '/' + c +
        '＝(' + a + '×' + d + ')/(' + b + '×' + c + ')＝' + raw + (raw === red ? '' : '，约成最简 ' + red) + '。'
    };
    q.html += gin({ t: 'fracDiv', a: a, b: b, c: c, d: d });
    return q;
  }

  /* ========== 6. fracMix：分数乘除混合 / 简便 ========== */
  function g_fracMix(rand) {
    var mode = pick(rand, ['chain', 'easy']);
    var q;
    if (mode === 'chain') {
      var a = ri(rand, 1, 9), b = ri(rand, 2, 9), c = ri(rand, 1, 9), d = ri(rand, 2, 9), e = ri(rand, 1, 9), f = ri(rand, 2, 9);
      // (a/b)×(c/d)÷(e/f) = a*c*f / (b*d*e)
      var num = a * c * f, den = b * d * e;
      var raw = num + '/' + den;
      var red = fracStr(num, den);
      q = {
        type: 'fill',
        html: '计算：<b>' + a + '/' + b + ' × ' + c + '/' + d + ' ÷ ' + e + '/' + f + '</b>＝（ ）。',
        answer: raw === red ? [red] : [red, raw],
        analysis: '把除法变乘法：×' + e + '/' + f + ' 改成 ×' + f + '/' + e +
          '，分子 ' + a + '×' + c + '×' + f + '＝' + num + '，分母 ' + b + '×' + d + '×' + e + '＝' + den +
          '，得 ' + raw + (raw === red ? '' : '，约成最简 ' + red) + '。'
      };
      q.html += gin({ t: 'fracMix', mode: mode, a: a, b: b, c: c, d: d, e: e, f: f });
    } else {
      // 简便：(a/b)÷c = a/(b*c)
      var a2 = ri(rand, 1, 9), b2 = ri(rand, 2, 9), c2 = ri(rand, 2, 9);
      var num2 = a2, den2 = b2 * c2;
      var raw2 = num2 + '/' + den2;
      var red2 = fracStr(num2, den2);
      q = {
        type: 'fill',
        html: '简便计算：<b>' + a2 + '/' + b2 + ' ÷ ' + c2 + '</b>＝（ ）。',
        answer: raw2 === red2 ? [red2] : [red2, raw2],
        analysis: '分数除以整数，等于分子不变、分母乘这个整数：' + a2 + '/' + b2 + ' ÷ ' + c2 +
          '＝' + a2 + '/' + (b2 + '×' + c2) + '＝' + raw2 + (raw2 === red2 ? '' : '，约成最简 ' + red2) + '。'
      };
      q.html += gin({ t: 'fracMix', mode: mode, a: a2, b: b2, c: c2 });
    }
    return q;
  }

  /* ========== 7. percentConv：百分数 ↔ 小数 ↔ 分数（填空 / choice） ========== */
  function g_percentConv(rand) {
    var mode = pick(rand, ['pct2dec', 'dec2pct', 'pct2frac', 'choice']);
    var q;
    if (mode === 'pct2dec') {
      var p = ri(rand, 1, 99);
      var ans = p / 100;
      q = {
        type: 'fill',
        html: '把百分数化成小数：<b>' + p + '%</b>＝（ ）。',
        answer: Math.round(ans * 1000) / 1000,
        analysis: '百分数化小数，去掉百分号、小数点向左移动两位：' + p + '%＝' + (Math.round(ans * 1000) / 1000) + '。'
      };
      q.html += gin({ t: 'percentConv', mode: mode, p: p });
    } else if (mode === 'dec2pct') {
      var d2 = ri(rand, 1, 99) / 100;
      q = {
        type: 'fill',
        html: '把小数化成百分数：<b>' + d2.toFixed(2) + '</b>＝（ ）%。',
        answer: Math.round(d2 * 100),
        analysis: '小数化百分数，小数点向右移动两位、添上百分号：' + d2.toFixed(2) + '＝' + Math.round(d2 * 100) + '%。'
      };
      q.html += gin({ t: 'percentConv', mode: mode, d: Math.round(d2 * 1000) / 1000 });
    } else if (mode === 'pct2frac') {
      var nice = pick(rand, [10, 20, 25, 40, 50, 60, 75, 80]);
      var red = fracStr(nice, 100);
      q = {
        type: 'fill',
        html: '把百分数化成最简分数：<b>' + nice + '%</b>＝（ ）。',
        answer: [red],
        analysis: nice + '%＝' + nice + '/100' + (nice === parseInt(red.split('/')[0]) * (100 / parseInt(red.split('/')[1])) ? '' : '') +
          '，约成最简分数是 ' + red + '。'
      };
      q.html += gin({ t: 'percentConv', mode: mode, p: nice });
    } else {
      // choice：与某百分数相等的数
      var p3 = pick(rand, [15, 35, 45, 60, 85]);
      var correct = p3 / 100;
      var distract = shuffle(rand, [correct * 10, correct / 10, p3 / 10]).slice(0, 3);
      var opts = shuffle(rand, [correct].concat(distract));
      q = {
        type: 'choice',
        html: '下面哪个数与 <b>' + p3 + '%</b> 相等？',
        options: opts.map(function (x) { return (Math.round(x * 1000) / 1000).toString(); }),
        answer: opts.indexOf(correct),
        analysis: p3 + '% 化成小数是 ' + (Math.round(correct * 1000) / 1000) +
          '；' + (p3 * 10) + '.0 和 0.0' + p3 + ' 都不等于它，所以选 ' + (Math.round(correct * 1000) / 1000) + '。'
      };
      q.html += gin({ t: 'percentConv', mode: mode, p: p3, opts: opts });
    }
    return q;
  }

  /* ========== 8. circleLen：圆周长（π=3.14） ========== */
  function g_circleLen(rand) {
    var mode = pick(rand, ['radius', 'diameter']);
    var q;
    if (mode === 'radius') {
      var r = ri(rand, 1, 10);
      var ans = 2 * 3.14 * r;
      q = {
        type: 'fill',
        html: '一个圆的半径是 <b>' + r + '</b> 厘米，它的周长是（ ）厘米。（π 取 3.14）' + circleSVG(),
        answer: Math.round(ans * 100) / 100,
        analysis: '圆周长 C＝2πr＝2×3.14×' + r + '＝' + (Math.round(ans * 100) / 100).toFixed(2) + ' 厘米。'
      };
      q.html += gin({ t: 'circleLen', mode: mode, r: r });
    } else {
      var d = ri(rand, 2, 20);
      var ans2 = 3.14 * d;
      q = {
        type: 'fill',
        html: '一个圆的直径是 <b>' + d + '</b> 厘米，它的周长是（ ）厘米。（π 取 3.14）' + circleSVG(),
        answer: Math.round(ans2 * 100) / 100,
        analysis: '圆周长 C＝πd＝3.14×' + d + '＝' + (Math.round(ans2 * 100) / 100).toFixed(2) + ' 厘米。'
      };
      q.html += gin({ t: 'circleLen', mode: mode, d: d });
    }
    return q;
  }

  /* ========== 9. circleArea：圆面积（π=3.14） ========== */
  function g_circleArea(rand) {
    var r = ri(rand, 1, 10);
    var ans = 3.14 * r * r;
    var q = {
      type: 'fill',
      html: '一个圆的半径是 <b>' + r + '</b> 厘米，它的面积是（ ）平方厘米。（π 取 3.14）' + circleSVG(),
      answer: Math.round(ans * 100) / 100,
      analysis: '圆面积 S＝πr²＝3.14×' + r + '²＝3.14×' + (r * r) + '＝' + (Math.round(ans * 100) / 100).toFixed(2) + ' 平方厘米。'
    };
    q.html += gin({ t: 'circleArea', r: r });
    return q;
  }

  /* ========== 10. solidVol：长方体 / 正方体体积 ========== */
  function g_solidVol(rand) {
    var mode = pick(rand, ['cuboid', 'cube']);
    var q;
    if (mode === 'cuboid') {
      var a = ri(rand, 2, 9), b = ri(rand, 2, 9), c = ri(rand, 2, 9);
      q = {
        type: 'fill',
        html: '一个长方体，长 <b>' + a + '</b> 厘米、宽 <b>' + b + '</b> 厘米、高 <b>' + c + '</b> 厘米，体积是（ ）立方厘米。' + boxSVG(a, b, c),
        answer: a * b * c,
        analysis: '长方体体积 V＝长×宽×高＝' + a + '×' + b + '×' + c + '＝' + (a * b * c) + ' 立方厘米。'
      };
      q.html += gin({ t: 'solidVol', mode: mode, a: a, b: b, c: c });
    } else {
      var a2 = ri(rand, 2, 9);
      q = {
        type: 'fill',
        html: '一个正方体的棱长是 <b>' + a2 + '</b> 厘米，它的体积是（ ）立方厘米。' + boxSVG(a2, a2, a2),
        answer: a2 * a2 * a2,
        analysis: '正方体体积 V＝棱长³＝' + a2 + '×' + a2 + '×' + a2 + '＝' + (a2 * a2 * a2) + ' 立方厘米。'
      };
      q.html += gin({ t: 'solidVol', mode: mode, a: a2 });
    }
    return q;
  }

  /* ---------- 注册 ---------- */
  Gen.register({
    decimalMul: g_decimalMul,
    decimalCalc: g_decimalCalc,
    fracAddSub: g_fracAddSub,
    fracMul: g_fracMul,
    fracDiv: g_fracDiv,
    fracMix: g_fracMix,
    percentConv: g_percentConv,
    circleLen: g_circleLen,
    circleArea: g_circleArea,
    solidVol: g_solidVol
  }, {
    'g5-01': 'decimalMul',
    'g5-02': 'decimalCalc',
    'g5-13': 'fracAddSub',
    'g5-14': 'fracAddSub',
    'g6-01': 'fracMul',
    'g6-02': 'fracDiv',
    'g6-03': 'fracMix',
    'g6-11': 'percentConv',
    'g6-12': 'percentConv',
    'g6-16': 'circleLen',
    'g6-17': 'circleArea',
    'g5-19': 'solidVol',
    'g6-20': 'solidVol'
  });
});
