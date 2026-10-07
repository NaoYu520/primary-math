/* js/gen2-g34.js —— 3-4年级「计算巧算 + 数论」程序化生成器（8 类）。
 * 类型：g3addsub / g3muldiv / g4mulcalc / g4divcalc / divisibility / primeFactor / gcf / lcm
 * 沿用 js/gen.js 契约：Gen.get(type,n,rand) → 题对象（gen:true）；
 * html 尾部带不可见注释 <!--GIN{...}-->，只放出题输入，绝不含答案。
 * 本文件通过 Gen.register() 向后兼容挂接，不改动 gen.js。
 * UMD 包装由组织方冻结；浏览器端取全局 Gen，node 端 require ./gen.js。
 */
(function (root, factory) {
  var G = root.Gen || (typeof module !== "undefined" && module.parent ? require("./gen.js").Gen : null);
  factory(G);
})(typeof self !== "undefined" ? self : this, function (Gen) {
  if (!Gen || typeof Gen.register !== 'function') {
    throw new Error('gen2-g34.js 需要先加载 js/gen.js（Gen.register 缺失）');
  }

  /* ---------- 本模块私有小工具（不依赖 gen.js 内部） ---------- */
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

  /* ---------- 程序化内联 SVG（色板：#2B8A83 #3E6FB2 #E9A23B #53A06B #D8664E，禁紫色） ---------- */
  // 彩色数字块（巧算题面装饰）
  function chipsSVG(parts) {
    var gap = 8, x = 10, cells = '';
    for (var i = 0; i < parts.length; i++) {
      var w = Math.max(36, parts[i].t.length * 15 + 16);
      cells += "<rect x='" + x + "' y='6' width='" + w + "' height='32' rx='7' fill='" + parts[i].c +
        "' stroke='#26313A' stroke-width='1.5'/>";
      cells += "<text x='" + (x + w / 2) + "' y='28' font-size='16' fill='#FFFFFF' text-anchor='middle' font-weight='bold'>" +
        parts[i].t + "</text>";
      x += w + gap;
    }
    return "<svg class='fig' viewBox='0 0 " + (x - gap + 10) + " 44' xmlns='http://www.w3.org/2000/svg'>" + cells + "</svg>";
  }
  // 购物车（购物/超市情境）
  function cartSVG() {
    return "<svg class='fig' viewBox='0 0 130 60' xmlns='http://www.w3.org/2000/svg'>" +
      "<path d='M10 12 h14 l8 26 h62 l8 -18 h-56' fill='none' stroke='#3E6FB2' stroke-width='3' stroke-linejoin='round' stroke-linecap='round'/>" +
      "<rect x='30' y='30' width='14' height='10' rx='2' fill='#53A06B' stroke='#26313A' stroke-width='1'/>" +
      "<rect x='50' y='30' width='14' height='10' rx='2' fill='#D8664E' stroke='#26313A' stroke-width='1'/>" +
      "<circle cx='38' cy='47' r='5' fill='#E9A23B' stroke='#26313A' stroke-width='1.5'/>" +
      "<circle cx='78' cy='47' r='5' fill='#E9A23B' stroke='#26313A' stroke-width='1.5'/></svg>";
  }
  // 小组方阵（分组/排队情境）
  function groupSVG(groups, per) {
    var r = 7, gap = 8, y0 = 12, rowH = 2 * r + gap + 6;
    var w = per * (2 * r + gap) - gap + 20;
    var h = groups * rowH - 6 + y0;
    var cells = '';
    for (var gr = 0; gr < groups; gr++) {
      for (var c = 0; c < per; c++) {
        var cx = 10 + r + c * (2 * r + gap);
        var cy = y0 + r + gr * rowH;
        var col = (gr + c) % 2 === 0 ? '#2B8A83' : '#53A06B';
        cells += "<circle cx='" + cx + "' cy='" + cy + "' r='" + r + "' fill='" + col +
          "' stroke='#26313A' stroke-width='1.2'/>";
      }
    }
    return "<svg class='fig' viewBox='0 0 " + w + " " + h + "' xmlns='http://www.w3.org/2000/svg'>" + cells + "</svg>";
  }

  /* ========== 1. g3addsub：三/多位数加减凑整巧算（填空） ========== */
  function g_g3addsub(rand) {
    var mode = pick(rand, ['addRound', 'addFriends', 'subTogether', 'subRound']);
    var q;
    if (mode === 'addRound') {
      // 一个加数接近整百：多加要减 / 少加要补
      var B = ri(rand, 2, 9) * 100;
      var delta = ri(rand, 1, 15);
      var below = rand() < 0.5;
      var b = below ? B - delta : B + delta;
      var a = ri(rand, 150, 700);
      var ans = a + b;
      q = {
        type: 'fill',
        html: '用凑整法巧算：<b>' + a + '＋' + b + '</b>＝（ ）。' +
          chipsSVG([{ t: String(a), c: '#2B8A83' }, { t: '+' + b, c: '#E9A23B' }]),
        answer: ans,
        analysis: below
          ? b + ' 接近整百 ' + B + '，先看成 ' + a + '＋' + B + '＝' + (a + B) +
            '，多加了 ' + delta + '，要再减回去：' + (a + B) + '－' + delta + '＝' + ans + '。'
          : b + ' 比整百 ' + B + ' 多 ' + delta + '，先算 ' + a + '＋' + B + '＝' + (a + B) +
            '，少加了 ' + delta + '，要补上：' + (a + B) + '＋' + delta + '＝' + ans + '。'
      };
      q.html += gin({ t: 'g3addsub', mode: mode, a: a, b: b });
    } else if (mode === 'addFriends') {
      // 个位凑 10 的“好朋友数”先加
      var x = ri(rand, 1, 9);
      var a2 = ri(rand, 2, 8) * 10 + x;
      var c2 = ri(rand, 2, 8) * 10 + (10 - x);
      var b2 = ri(rand, 100, 500);
      var ans2 = a2 + b2 + c2;
      q = {
        type: 'fill',
        html: '找“好朋友”先凑整：<b>' + a2 + '＋' + b2 + '＋' + c2 + '</b>＝（ ）。',
        answer: ans2,
        analysis: a2 + ' 和 ' + c2 + ' 的个位合起来正好是 10，先把它们加起来：' +
          a2 + '＋' + c2 + '＝' + (a2 + c2) + '；再算 ' + (a2 + c2) + '＋' + b2 + '＝' + ans2 + '。'
      };
      q.html += gin({ t: 'g3addsub', mode: mode, a: a2, b: b2, c: c2 });
    } else if (mode === 'subTogether') {
      // 连减：两个减数先合起来凑整
      var sum = ri(rand, 3, 9) * 100;
      var b3 = ri(rand, 50, sum - 50);
      var c3 = sum - b3;
      var a3 = sum + ri(rand, 100, 500);
      var ans3 = a3 - sum;
      q = {
        type: 'fill',
        html: '连减巧算：<b>' + a3 + '－' + b3 + '－' + c3 + '</b>＝（ ）。',
        answer: ans3,
        analysis: '一个数连续减去两个数，可以先把两个减数加起来：' + b3 + '＋' + c3 + '＝' + sum +
          '；再算 ' + a3 + '－' + sum + '＝' + ans3 + '。'
      };
      q.html += gin({ t: 'g3addsub', mode: mode, a: a3, b: b3, c: c3 });
    } else {
      // subRound：减数接近整百，多减要加
      var B4 = ri(rand, 2, 9) * 100;
      var d4 = ri(rand, 1, 20);
      var b4 = B4 - d4;
      var a4 = b4 + ri(rand, 100, 500);
      var ans4 = a4 - b4;
      q = {
        type: 'fill',
        html: '巧算：<b>' + a4 + '－' + b4 + '</b>＝（ ）。',
        answer: ans4,
        analysis: '把减数 ' + b4 + ' 看成整百 ' + B4 + ' 来减：' + a4 + '－' + B4 + '＝' + (a4 - B4) +
          '；原本只减 ' + b4 + '，刚才多减了 ' + d4 + '，要加回来：' + (a4 - B4) + '＋' + d4 + '＝' + ans4 + '。'
      };
      q.html += gin({ t: 'g3addsub', mode: mode, a: a4, b: b4 });
    }
    return q;
  }

  /* ========== 2. g3muldiv：表内 / 整十整百乘除巧算与简单乘除应用（填空） ========== */
  function g_g3muldiv(rand) {
    var mode = pick(rand, ['roundMul', 'roundDiv', 'tableMul', 'tableDiv', 'appGroup']);
    var q;
    if (mode === 'roundMul') {
      var a = ri(rand, 2, 9) * 10, b = ri(rand, 2, 9) * 10;
      var ans = a * b;
      q = {
        type: 'fill',
        html: '口算巧算：<b>' + a + '×' + b + '</b>＝（ ）。',
        answer: ans,
        analysis: '先不看末尾的 0，用口诀算 ' + (a / 10) + '×' + (b / 10) + '＝' + (a * b / 100) +
          '；两个因数末尾一共添了两个 0，所以得数末尾也要补上两个 0，是 ' + ans + '。'
      };
      q.html += gin({ t: 'g3muldiv', mode: mode, a: a, b: b });
    } else if (mode === 'roundDiv') {
      var ds = ri(rand, 2, 9), qq = ri(rand, 2, 9);
      var d = ds * qq * 100;
      var ans2 = d / ds;
      q = {
        type: 'fill',
        html: '口算巧算：<b>' + d + '÷' + ds + '</b>＝（ ）。',
        answer: ans2,
        analysis: '先不看被除数末尾的两个 0，用口诀算 ' + (d / 100) + '÷' + ds + '＝' + qq +
          '；再把两个 0 补回去，得数是 ' + ans2 + '。'
      };
      q.html += gin({ t: 'g3muldiv', mode: mode, d: d, ds: ds });
    } else if (mode === 'tableMul') {
      var x = ri(rand, 2, 9), y = ri(rand, 2, 9);
      q = {
        type: 'fill',
        html: '背一背乘法口诀：<b>' + x + '×' + y + '</b>＝（ ）。',
        answer: x * y,
        analysis: '乘法口诀“' + (x <= y ? x : y) + (x <= y ? y : x) + (x * y) + '”，所以 ' +
          x + '×' + y + '＝' + (x * y) + '。'
      };
      q.html += gin({ t: 'g3muldiv', mode: mode, x: x, y: y });
    } else if (mode === 'tableDiv') {
      var ds2 = ri(rand, 2, 9), qq2 = ri(rand, 2, 9);
      var d2 = ds2 * qq2;
      q = {
        type: 'fill',
        html: '口算：<b>' + d2 + '÷' + ds2 + '</b>＝（ ）。',
        answer: qq2,
        analysis: '想口诀 ' + ds2 + '×几＝' + d2 + '：' + ds2 + '×' + qq2 + '＝' + d2 +
          '，所以 ' + d2 + '÷' + ds2 + '＝' + qq2 + '。'
      };
      q.html += gin({ t: 'g3muldiv', mode: mode, d: d2, ds: ds2 });
    } else {
      // 简单乘法应用（购物/分组情境）
      var groups = ri(rand, 2, 9), per = ri(rand, 2, 9);
      var useCart = rand() < 0.5;
      q = {
        type: 'fill',
        html: useCart
          ? '超市货架有 <b>' + groups + '</b> 层，每层放 <b>' + per + '</b> 盒牛奶，一共有（ ）盒。' + cartSVG()
          : '同学们排成 <b>' + groups + '</b> 组做操，每组 <b>' + per + '</b> 人，一共有（ ）人。' + groupSVG(groups, per),
        answer: groups * per, unit: useCart ? '盒' : '人',
        analysis: '求一共多少，就是求 ' + groups + ' 个 ' + per + ' 是多少：' +
          groups + '×' + per + '＝' + (groups * per) + (useCart ? ' 盒。' : ' 人。')
      };
      q.html += gin({ t: 'g3muldiv', mode: mode, groups: groups, per: per, useCart: useCart });
    }
    return q;
  }

  /* ========== 3. g4mulcalc：交换/结合/分配律乘法巧算（填空） ========== */
  function g_g4mulcalc(rand) {
    var mode = pick(rand, ['pair25', 'pair125', 'over102', 'under99', 'commonAdd']);
    var q;
    if (mode === 'pair25') {
      var k = ri(rand, 3, 12);
      q = {
        type: 'fill',
        html: '用乘法结合律巧算：<b>25×' + k + '×4</b>＝（ ）。',
        answer: 100 * k,
        analysis: '25 和 4 是好朋友，先把它们乘起来：25×4＝100；再算 100×' + k + '＝' + (100 * k) + '。'
      };
      q.html += gin({ t: 'g4mulcalc', mode: mode, k: k });
    } else if (mode === 'pair125') {
      var k2 = ri(rand, 3, 10);
      q = {
        type: 'fill',
        html: '用乘法结合律巧算：<b>125×' + k2 + '×8</b>＝（ ）。',
        answer: 1000 * k2,
        analysis: '125 和 8 是好朋友，先乘：125×8＝1000；再算 1000×' + k2 + '＝' + (1000 * k2) + '。'
      };
      q.html += gin({ t: 'g4mulcalc', mode: mode, k: k2 });
    } else if (mode === 'over102') {
      var a = ri(rand, 12, 45);
      q = {
        type: 'fill',
        html: '用乘法分配律巧算：<b>102×' + a + '</b>＝（ ）。',
        answer: 102 * a,
        analysis: '把 102 看成 100＋2：102×' + a + '＝100×' + a + '＋2×' + a + '＝' +
          (100 * a) + '＋' + (2 * a) + '＝' + (102 * a) + '。'
      };
      q.html += gin({ t: 'g4mulcalc', mode: mode, a: a });
    } else if (mode === 'under99') {
      var b = ri(rand, 12, 45);
      q = {
        type: 'fill',
        html: '用乘法分配律巧算：<b>99×' + b + '</b>＝（ ）。',
        answer: 99 * b,
        analysis: '把 99 看成 100－1：99×' + b + '＝100×' + b + '－1×' + b + '＝' +
          (100 * b) + '－' + b + '＝' + (99 * b) + '。'
      };
      q.html += gin({ t: 'g4mulcalc', mode: mode, b: b });
    } else {
      // commonAdd：a×c + b×c，且 a+b 凑整百
      var sum = ri(rand, 4, 9) * 100;
      var a2 = ri(rand, 12, sum - 24);
      var b2 = sum - a2;
      var c = pick(rand, [4, 5, 8, 25]);
      q = {
        type: 'fill',
        html: '提取相同因数巧算：<b>' + a2 + '×' + c + '＋' + b2 + '×' + c + '</b>＝（ ）。',
        answer: sum * c,
        analysis: '两个乘法里都有因数 ' + c + '，把它提出来：原式＝(' + a2 + '＋' + b2 + ')×' + c +
          '＝' + sum + '×' + c + '＝' + (sum * c) + '。'
      };
      q.html += gin({ t: 'g4mulcalc', mode: mode, a: a2, b: b2, c: c });
    }
    return q;
  }

  /* ========== 4. g4divcalc：商不变规律除法巧算（填空） ========== */
  function g_g4divcalc(rand) {
    var mode = pick(rand, ['by25', 'by125']);
    var q;
    if (mode === 'by25') {
      var qq = ri(rand, 4, 40);
      var d = qq * 25;
      q = {
        type: 'fill',
        html: '用商不变的规律巧算：<b>' + d + '÷25</b>＝（ ）。',
        answer: qq,
        analysis: '被除数和除数同时乘 4，商不变：' + d + '÷25＝(' + d + '×4)÷(25×4)＝' +
          (d * 4) + '÷100＝' + qq + '。'
      };
      q.html += gin({ t: 'g4divcalc', mode: mode, d: d });
    } else {
      var qq2 = ri(rand, 8, 64);
      var d2 = qq2 * 125;
      q = {
        type: 'fill',
        html: '用商不变的规律巧算：<b>' + d2 + '÷125</b>＝（ ）。',
        answer: qq2,
        analysis: '被除数和除数同时乘 8，商不变：' + d2 + '÷125＝(' + d2 + '×8)÷(125×8)＝' +
          (d2 * 8) + '÷1000＝' + qq2 + '。'
      };
      q.html += gin({ t: 'g4divcalc', mode: mode, d: d2 });
    }
    return q;
  }

  /* ========== 5. divisibility：2/3/5 整除特征（judge 或 choice） ========== */
  function g_divisibility(rand) {
    var d = pick(rand, [2, 3, 5]);
    var mode = pick(rand, ['judge', 'choice']);
    var q;
    if (mode === 'judge') {
      var n = ri(rand, 100, 999);
      var claimYes = rand() < 0.5;
      var actual = n % d === 0;
      q = {
        type: 'judge',
        html: '判断对错：<b>' + n + '</b> 能被 ' + d + ' 整除。',
        answer: actual === claimYes,
        analysis: d === 2
          ? '个位是 0、2、4、6、8 的数能被 2 整除。' + n + ' 的个位是 ' + (n % 10) + '，' +
            (actual ? '能被 2 整除。' : '不能被 2 整除。') + '题目说“能被 2 整除”，所以这句话' + (actual === claimYes ? '是对的' : '是错的') + '。'
          : d === 3
            ? '把各位上的数字加起来，和能被 3 整除，这个数就能被 3 整除。' + n + ' 各位数字和是 ' +
              digitSum(n) + '，' + (actual ? '能被 3 整除。' : '不能被 3 整除。') + '题目说“能被 3 整除”，所以这句话' + (actual === claimYes ? '是对的' : '是错的') + '。'
            : '个位是 0 或 5 的数能被 5 整除。' + n + ' 的个位是 ' + (n % 10) + '，' +
              (actual ? '能被 5 整除。' : '不能被 5 整除。') + '题目说“能被 5 整除”，所以这句话' + (actual === claimYes ? '是对的' : '是错的') + '。'
      };
      q.html += gin({ t: 'divisibility', mode: mode, n: n, d: d, claimYes: claimYes });
    } else {
      // choice：4 个选项中恰好一个能被 d 整除
      var lo = Math.ceil(100 / d), hi = Math.floor(999 / d);
      var correct = d * ri(rand, lo, hi);
      var used = {}; used[correct] = 1;
      var pool = [correct];
      while (pool.length < 4) {
        var x = ri(rand, 100, 999);
        if (used[x]) continue;
        if (x % d === 0) continue;           // 干扰项必须不能被 d 整除
        used[x] = 1; pool.push(x);
      }
      var opts = shuffle(rand, pool);
      q = {
        type: 'choice',
        html: d === 2 ? '下面哪个数能被 2 整除？' : d === 3 ? '下面哪个数能被 3 整除？' : '下面哪个数能被 5 整除？',
        options: opts.map(String),
        answer: opts.indexOf(correct),
        analysis: d === 2
          ? '看个位：个位是 0、2、4、6、8 的数能被 2 整除。' + correct + ' 的个位是 ' + (correct % 10) + '，所以它能被 2 整除。'
          : d === 3
            ? '看各位数字之和：' + correct + ' 各位数字和是 ' + digitSum(correct) + '，能被 3 整除，所以 ' + correct + ' 能被 3 整除。'
            : '看个位：个位是 0 或 5 的数能被 5 整除。' + correct + ' 的个位是 ' + (correct % 10) + '，所以它能被 5 整除。'
      };
      q.html += gin({ t: 'divisibility', mode: mode, opts: opts, d: d });
    }
    return q;
  }
  function digitSum(n) {
    var s = 0; while (n) { s += n % 10; n = Math.floor(n / 10); } return s;
  }

  /* ========== 6. primeFactor：分解质因数（填空；answer 为等价写法数组） ========== */
  var SUPER = { 2: '²', 3: '³', 4: '⁴' };
  function primeFactorize(n) {
    var counts = {};
    var m = n;
    var primes = [2, 3, 5, 7];
    for (var i = 0; i < primes.length; i++) {
      var p = primes[i];
      while (m % p === 0) { counts[p] = (counts[p] || 0) + 1; m = m / p; }
    }
    if (m !== 1) throw new Error('primeFactorize: 出现 >7 的质因数 ' + m);
    var flat = [], condensed = [];
    for (var j = 0; j < primes.length; j++) {
      var pp = primes[j], c = counts[pp] || 0;
      for (var k = 0; k < c; k++) flat.push(pp);
      if (c === 1) condensed.push(String(pp));
      else if (c > 1) condensed.push(pp + (SUPER[c] || ('^' + c)));
    }
    return { repeated: flat.join('×'), condensed: condensed.join('×') };
  }
  function g_primeFactor(rand) {
    var n;
    // 保证：合数、含质因数 2、大小适中（12~200）
    do {
      var a = ri(rand, 2, 3);           // 2 的指数
      var b = ri(rand, 0, 2);
      var c = ri(rand, 0, 1);
      var dd = ri(rand, 0, 1);
      n = Math.pow(2, a) * Math.pow(3, b) * Math.pow(5, c) * Math.pow(7, dd);
    } while (n < 12 || n > 200);
    var fact = primeFactorize(n);
    var q = {
      type: 'fill',
      html: '把合数 <b>' + n + '</b> 分解质因数（写成质数相乘的形式）：' + n + '＝（ ）。',
      answer: [fact.repeated, fact.condensed],
      analysis: '用短除式逐步分解：' + n + '＝' + fact.repeated +
        '（也可写作 ' + fact.condensed + '），每个乘数都是质数。'
    };
    q.html += gin({ t: 'primeFactor', n: n });
    return q;
  }

  /* ========== 7/8. gcf / lcm：最大公因数、最小公倍数（填空） ========== */
  function coprimePair(rand) {
    var f = ri(rand, 2, 9);
    var x = ri(rand, 2, 12), y = ri(rand, 2, 12);
    var guard = 0;
    while (gcd(x, y) !== 1 && guard < 60) { y = ri(rand, 2, 12); guard++; }
    if (gcd(x, y) !== 1) { x = 5; y = 7; }   // 兜底，保证互质
    return { f: f, x: x, y: y, a: f * x, b: f * y };
  }
  function g_gcf(rand) {
    var p = coprimePair(rand);
    var q = {
      type: 'fill',
      html: '求 <b>' + p.a + '</b> 和 <b>' + p.b + '</b> 的最大公因数（GCD）。',
      answer: p.f,
      unit: '',
      analysis: p.a + '＝' + p.f + '×' + p.x + '，' + p.b + '＝' + p.f + '×' + p.y +
        '，其中 ' + p.x + ' 和 ' + p.y + ' 互质，所以它们的最大公因数是 ' + p.f + '。'
    };
    q.html += gin({ t: 'gcf', a: p.a, b: p.b });
    return q;
  }
  function g_lcm(rand) {
    var p = coprimePair(rand);
    var lcm = p.f * p.x * p.y;
    var q = {
      type: 'fill',
      html: '求 <b>' + p.a + '</b> 和 <b>' + p.b + '</b> 的最小公倍数（LCM）。',
      answer: lcm,
      analysis: p.a + '＝' + p.f + '×' + p.x + '，' + p.b + '＝' + p.f + '×' + p.y +
        '，' + p.x + ' 与 ' + p.y + ' 互质，所以最小公倍数是 ' + p.f + '×' + p.x + '×' + p.y + '＝' + lcm + '。'
    };
    q.html += gin({ t: 'lcm', a: p.a, b: p.b });
    return q;
  }

  /* ---------- 向后兼容注册 ---------- */
  Gen.register({
    g3addsub: g_g3addsub,
    g3muldiv: g_g3muldiv,
    g4mulcalc: g_g4mulcalc,
    g4divcalc: g_g4divcalc,
    divisibility: g_divisibility,
    primeFactor: g_primeFactor,
    gcf: g_gcf,
    lcm: g_lcm
  }, {
    'g3-01': 'g3addsub',
    'g3-02': 'g3muldiv',
    'g4-03': 'g4mulcalc',
    'g4-04': 'g4divcalc',
    'g4-15': 'divisibility',
    'g4-17': 'primeFactor',
    'g4-18': 'gcf',
    'g4-19': 'lcm'
  });
});
