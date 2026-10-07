/* js/gen.js —— 程序题生成器（客户端出题，答案与题面同步计算）。
 * 接口：
 *   Gen.get(type, n, rand)  返回 n 个题对象（题对象含 gen:true）
 *   Gen.pool(lessonId, n)  按讲 id 转发到对应 type
 * rand 为返回 [0,1) 的函数，缺省 Math.random；注入后可确定性复测。
 * 题面关键输入以不可见注释 <!--GIN{...}--> 携带（仅输入，不含答案），供独立复算。
 */
var Gen = (function () {
  'use strict';

  /* ---------- 随机与小工具 ---------- */
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

  /* ---------- 内联 SVG 小图（色板见 SPEC 第一节） ---------- */
  // n 个方块，前 given 个蓝绿色，其余暖黄色（分与合用）
  function blocksSVG(n, given) {
    var size = 26, gap = 8, y = 14;
    var w = n * (size + gap) - gap + 20;
    var cells = '';
    for (var i = 0; i < n; i++) {
      var x = 10 + i * (size + gap);
      var col = i < given ? '#2B8A83' : '#F6D79E';
      cells += "<rect x='" + x + "' y='" + y + "' width='" + size + "' height='" + size +
        "' rx='4' fill='" + col + "' stroke='#26313A' stroke-width='1.5'/>";
    }
    return "<svg class='fig' viewBox='0 0 " + w + " 54' xmlns='http://www.w3.org/2000/svg'>" + cells + "</svg>";
  }

  // 凑十圈：a 个红圆 + b 个绿圆，把前 10 个圈起来
  function tenFrameSVG(a, b) {
    var r = 15, gap = 10, rowW = 5 * (2 * r + gap) - gap;
    var total = a + b;
    var rows = Math.ceil(total / 5);
    var h = rows * (2 * r + gap) - gap + 24;
    var s = "<svg class='fig' viewBox='0 0 " + (rowW + 20) + " " + h + "' xmlns='http://www.w3.org/2000/svg'>";
    // 十个一组的圈（第一行 5 个 + 第二行前 5 个 = 10）
    s += "<rect x='6' y='6' width='" + (rowW + 8) + "' height='" + (2 * (2 * r + gap) - gap) +
      "' rx='10' fill='none' stroke='#E9A23B' stroke-width='2.5' stroke-dasharray='6 5'/>";
    var k = 0;
    for (var row = 0; row < rows; row++) {
      for (var c = 0; c < 5 && k < total; c++, k++) {
        var x = 16 + c * (2 * r + gap) + r;
        var y = 12 + row * (2 * r + gap) + r;
        var col = k < a ? '#D8664E' : '#7FC3B8';
        s += "<circle cx='" + x + "' cy='" + y + "' r='" + r + "' fill='" + col + "' stroke='#26313A' stroke-width='1.2'/>";
      }
    }
    s += "</svg>";
    return s;
  }

  // 钟表：h 时 m 分，指针角度由时间算出
  function clockSVG(h, m) {
    var cx = 110, cy = 110, r = 90;
    var ha = (h % 12) * 30 + m * 0.5;   // 时针：每小时30°，随分钟偏移
    var ma = m * 6;                     // 分针：每分钟6°
    function hand(angleDeg, len, w, color) {
      var rad = (angleDeg - 90) * Math.PI / 180; // 0° 在12点方向，顺时针
      var x2 = cx + len * Math.cos(rad);
      var y2 = cy + len * Math.sin(rad);
      return "<line x1='" + cx + "' y1='" + cy + "' x2='" + x2.toFixed(1) + "' y2='" + y2.toFixed(1) +
        "' stroke='" + color + "' stroke-width='" + w + "' stroke-linecap='round'/>";
    }
    var ticks = '';
    for (var t = 0; t < 12; t++) {
      var a = (t * 30 - 90) * Math.PI / 180;
      var x1 = cx + (r - 6) * Math.cos(a), y1 = cy + (r - 6) * Math.sin(a);
      var x2 = cx + (r - 16) * Math.cos(a), y2 = cy + (r - 16) * Math.sin(a);
      ticks += "<line x1='" + x1.toFixed(1) + "' y1='" + y1.toFixed(1) + "' x2='" + x2.toFixed(1) +
        "' y2='" + y2.toFixed(1) + "' stroke='#8A949C' stroke-width='2'/>";
    }
    return "<svg class='fig' viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'>" +
      "<circle cx='" + cx + "' cy='" + cy + "' r='" + r + "' fill='#FCFDF9' stroke='#26313A' stroke-width='3'/>" +
      ticks + hand(ha, 46, 6, '#26313A') + hand(ma, 66, 3.5, '#2B8A83') +
      "<circle cx='" + cx + "' cy='" + cy + "' r='5' fill='#D8664E'/></svg>";
  }

  // 硬币：圆内印面值
  function coinSVG(r, fill, label) {
    return "<svg class='fig' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'>" +
      "<circle cx='60' cy='60' r='" + r + "' fill='" + fill + "' stroke='#26313A' stroke-width='2'/>" +
      "<circle cx='60' cy='60' r='" + (r - 9) + "' fill='none' stroke='#FCFDF9' stroke-width='2'/>" +
      "<text x='60' y='69' font-size='24' fill='#FCFDF9' text-anchor='middle' font-weight='bold'>" + label + "</text></svg>";
  }
  // 纸币：矩形
  function billSVG(label, fill) {
    return "<svg class='fig' viewBox='0 0 160 90' xmlns='http://www.w3.org/2000/svg'>" +
      "<rect x='8' y='12' width='144' height='66' rx='8' fill='" + fill + "' stroke='#26313A' stroke-width='2'/>" +
      "<text x='80' y='55' font-size='26' fill='#FCFDF9' text-anchor='middle' font-weight='bold'>" + label + "</text></svg>";
  }

  // 周期图形：按 pattern 循环画 show 个圆
  var PAT_COLORS = ['#E9A23B', '#2B8A83', '#3E6FB2', '#7FC3B8'];
  var PAT_NAMES = ['黄', '绿', '蓝', '青'];
  function patternSVG(pattern, show) {
    var r = 16, gap = 14, y = r + 10;
    var w = show * (2 * r + gap) - gap + 20;
    var cells = '';
    for (var i = 0; i < show; i++) {
      var x = 10 + r + i * (2 * r + gap);
      cells += "<circle cx='" + x + "' cy='" + y + "' r='" + r + "' fill='" + PAT_COLORS[pattern[i % pattern.length]] +
        "' stroke='#26313A' stroke-width='1.5'/>";
    }
    return "<svg class='fig' viewBox='0 0 " + w + " " + (2 * r + 20) + "' xmlns='http://www.w3.org/2000/svg'>" + cells + "</svg>";
  }

  /* ---------- 各类型生成器：每个返回一个题对象（不含 gen 标记） ---------- */

  // 1. 分与合（10以内数分成两个数）
  function g_decompose(rand) {
    var n = ri(rand, 2, 10);
    var given = ri(rand, 1, n - 1);
    var other = n - given;
    var leftIsGiven = rand() < 0.5;
    var q;
    if (leftIsGiven) {
      q = {
        type: 'fill',
        html: '把 <b>' + n + '</b> 个小方块分成两堆。左边那堆有 <b>' + given + '</b> 个，右边那堆有几个？' +
          blocksSVG(n, given),
        answer: other, unit: '个',
        analysis: '一共有 ' + n + ' 个方块，左边是 ' + given + ' 个。' + given + '＋' + other + '＝' + n +
          '，所以右边那堆有 ' + other + ' 个。'
      };
    } else {
      q = {
        type: 'fill',
        html: '把 <b>' + n + '</b> 个小方块分成两堆。右边那堆有 <b>' + given + '</b> 个，左边那堆有几个？' +
          blocksSVG(n, n - given),
        answer: other, unit: '个',
        analysis: '一共有 ' + n + ' 个方块，右边是 ' + given + ' 个。' + other + '＋' + given + '＝' + n +
          '，所以左边那堆有 ' + other + ' 个。'
      };
    }
    q.html += gin({ t: 'decompose', n: n, given: given });
    return q;
  }

  // 2. 单数和双数
  function g_oddEven(rand) {
    var mode = pick(rand, ['judge', 'choice', 'fill']);
    var q;
    if (mode === 'judge') {
      var n = ri(rand, 1, 20);
      var claimOdd = rand() < 0.5;            // 声称是单数还是双数
      var isOdd = (n % 2 === 1);
      var claim = claimOdd ? '单数' : '双数';
      q = {
        type: 'judge',
        html: n + ' 是' + claim + '。',
        answer: (isOdd === claimOdd),
        analysis: n + (isOdd ? '不能被 2 整除，是单数；' : '能被 2 整除，是双数；') +
          '题目说它是' + claim + '，所以这句话' + (isOdd === claimOdd ? '是对的' : '是错的') + '。'
      };
      q.html += gin({ t: 'oddEven', mode: 'judge', n: n, claimOdd: claimOdd });
    } else if (mode === 'choice') {
      var wantOdd = rand() < 0.5;
      var label = wantOdd ? '单数' : '双数';
      // 生成4个互不相同的数，恰好一个符合目标奇偶
      var pool = [];
      var used = {};
      var correct = wantOdd ? (2 * ri(rand, 1, 9) + 1) : (2 * ri(rand, 1, 10));
      used[correct] = true; pool.push(correct);
      while (pool.length < 4) {
        var x = ri(rand, 1, 20);
        if (used[x]) continue;
        if ((x % 2 === 1) === wantOdd) continue; // 不符合目标，作干扰项
        used[x] = true; pool.push(x);
      }
      var opts = shuffle(rand, pool);
      var ansIdx = opts.indexOf(correct);
      q = {
        type: 'choice',
        html: '下面哪一个数是' + label + '？',
        options: opts.map(String),
        answer: ansIdx,
        analysis: '单数就是个位是 1、3、5、7、9 的数；双数就是个位是 0、2、4、6、8 的数。' +
          opts[ansIdx] + ' 的个位是 ' + (opts[ansIdx] % 10) + '，是' + label + '。'
      };
      q.html += gin({ t: 'oddEven', mode: 'choice', opts: opts, wantOdd: wantOdd });
    } else {
      // fill：n 后面第一个目标奇偶的数
      var nn = ri(rand, 1, 14);
      var targetOdd = rand() < 0.5;
      var k = nn + 1;
      while ((k % 2 === 1) !== targetOdd) k++;
      q = {
        type: 'fill',
        html: nn + ' 后面的第一个' + (targetOdd ? '单' : '双') + '数是（ ）。',
        answer: k,
        analysis: '从 ' + nn + ' 往后一个一个数：' + (nn + 1) + '、' + (nn + 2) +
          '……第一个是' + (targetOdd ? '单' : '双') + '数的是 ' + k + '。'
      };
      q.html += gin({ t: 'oddEven', mode: 'fill', n: nn, targetOdd: targetOdd });
    }
    return q;
  }

  // 3. 凑十法（9/8/7/6 加几的进位加法）
  function g_makeTen(rand) {
    var a = pick(rand, [9, 8, 7, 6]);
    var c = 10 - a;                 // 凑十还需要几个
    var d = ri(rand, 1, 9 - c);     // 凑十后剩下的
    var b = c + d;
    var sum = a + b;
    var mode = rand() < 0.6 ? 'sum' : 'break';
    var q;
    if (mode === 'sum') {
      q = {
        type: 'fill',
        html: '用凑十法算一算：' + a + '＋' + b + '＝（ ）。' + tenFrameSVG(a, b),
        answer: sum,
        analysis: a + ' 凑成 10 还需要 ' + c + '，从 ' + b + ' 里分出 ' + c + '：' + b + '＝' + c + '＋' + d +
          '。先算 ' + a + '＋' + c + '＝10，再算 10＋' + d + '＝' + sum + '。'
      };
      q.html += gin({ t: 'makeTen', mode: 'sum', a: a, b: b });
    } else {
      q = {
        type: 'fill',
        html: '想凑十法：计算 ' + a + '＋' + b + ' 时，先把 ' + b + ' 分成 ' + c + ' 和几？' +
          tenFrameSVG(a, b),
        answer: d,
        analysis: a + ' 要凑成 10 需要 ' + c + '，所以把 ' + b + ' 分成 ' + c + ' 和 ' + d +
          '：先 ' + a + '＋' + c + '＝10，再 10＋' + d + '＝' + sum + '。括号里填 ' + d + '。'
      };
      q.html += gin({ t: 'makeTen', mode: 'break', a: a, b: b });
    }
    return q;
  }

  // 4. 认识钟表（整时/半时/几时刚过）
  function g_clock(rand) {
    var h = ri(rand, 1, 12);
    var mode = pick(rand, ['whole', 'half', 'past']);
    var m = mode === 'whole' ? 0 : (mode === 'half' ? 30 : ri(rand, 3, 10));
    var ask;
    if (mode === 'whole') ask = '看一看钟面，这时是（ ）时。';
    else if (mode === 'half') ask = '看一看钟面，这时是（ ）时半。';
    else ask = '时针刚走过几、分针刚过 12 一点，钟面上大约是（ ）时刚过。';
    var q = {
      type: 'fill',
      html: ask + clockSVG(h, m),
      answer: h,
      analysis: mode === 'whole'
        ? '分针指着 12，时针指着 ' + h + '，说明正好 ' + h + ' 时整。'
        : (mode === 'half'
          ? '分针指着 6，时针走到 ' + h + ' 和 ' + (h % 12 + 1) + ' 的正中间，是 ' + h + ' 时半。'
          : '分针刚走过 12 一点点，时针刚走过 ' + h + '，所以是 ' + h + ' 时刚过。')
    };
    q.html += gin({ t: 'clock', h: h, m: m, mode: mode });
    return q;
  }

  // 5. 认识人民币（元角分换算与简单找付）
  function g_money(rand) {
    var mode = pick(rand, ['yuan2jiao', 'jiao2yuan', 'jiao2fen', 'change', 'add']);
    var q;
    if (mode === 'yuan2jiao') {
      var a = ri(rand, 1, 5);
      q = {
        type: 'fill',
        html: billSVG(a + ' 元', '#2B8A83') + a + ' 元＝（ ）角。',
        answer: a * 10, unit: '角',
        analysis: '1 元＝10 角，' + a + ' 元就是 ' + a + ' 个 10 角，等于 ' + (a * 10) + ' 角。'
      };
      q.html += gin({ t: 'money', mode: 'yuan2jiao', a: a });
    } else if (mode === 'jiao2yuan') {
      var b = ri(rand, 2, 9) * 10;
      q = {
        type: 'fill',
        html: b + ' 角＝（ ）元。',
        answer: b / 10, unit: '元',
        analysis: '10 角＝1 元，' + b + ' 角里面有 ' + (b / 10) + ' 个 10 角，所以是 ' + (b / 10) + ' 元。'
      };
      q.html += gin({ t: 'money', mode: 'jiao2yuan', b: b });
    } else if (mode === 'jiao2fen') {
      q = {
        type: 'fill',
        html: coinSVG(34, '#E9A23B', '1角') + '1 角＝（ ）分。',
        answer: 10, unit: '分',
        analysis: '1 角＝10 分，这是人民币的换算规定，要记住。'
      };
      q.html += gin({ t: 'money', mode: 'jiao2fen' });
    } else if (mode === 'change') {
      var price = ri(rand, 1, 9); // 角
      q = {
        type: 'fill',
        html: '一块橡皮 ' + price + ' 角，小明付给售货员 1 元，应找回（ ）角。' +
          coinSVG(30, '#E9A23B', '1角'),
        answer: 10 - price, unit: '角',
        analysis: '先把 1 元换成 10 角。付了 10 角，花掉 ' + price + ' 角，' +
          '10－' + price + '＝' + (10 - price) + '，所以找回 ' + (10 - price) + ' 角。'
      };
      q.html += gin({ t: 'money', mode: 'change', price: price });
    } else {
      var p1 = ri(rand, 2, 6), p2 = ri(rand, 2, 6);
      q = {
        type: 'fill',
        html: '买一支铅笔 ' + p1 + ' 角，一块橡皮 ' + p2 + ' 角，一共要付（ ）角。' +
          coinSVG(26, '#7FC3B8', ''),
        answer: p1 + p2, unit: '角',
        analysis: '求一共要付多少，把两样东西的价钱合起来：' + p1 + '＋' + p2 + '＝' + (p1 + p2) + ' 角。'
      };
      q.html += gin({ t: 'money', mode: 'add', p1: p1, p2: p2 });
    }
    return q;
  }

  // 6. 凑整速算
  function g_roundCalc(rand) {
    var mode = pick(rand, ['add', 'friends', 'sub']);
    var q;
    if (mode === 'add') {
      var nearTen = ri(rand, 3, 9) * 10;       // 整十参考
      var below = rand() < 0.6;
      var delta = ri(rand, 1, 3);
      var b = below ? nearTen - delta : nearTen + delta;
      var a = ri(rand, 20, 60);
      var ans = a + b;
      q = {
        type: 'fill',
        html: '用凑整法很快算：' + a + '＋' + b + '＝（ ）。',
        answer: ans,
        analysis: below
          ? b + ' 接近 ' + nearTen + '，先看成 ' + nearTen + ' 加：' + a + '＋' + nearTen + '＝' + (a + nearTen) +
            '，多加了 ' + delta + ' 再减回去：' + (a + nearTen) + '－' + delta + '＝' + ans + '。'
          : b + ' 接近 ' + nearTen + '，先按 ' + nearTen + ' 加：' + a + '＋' + nearTen + '＝' + (a + nearTen) +
            '，少加了 ' + delta + ' 再补上：' + (a + nearTen) + '＋' + delta + '＝' + ans + '。'
      };
      q.html += gin({ t: 'roundCalc', mode: 'add', a: a, b: b });
    } else if (mode === 'friends') {
      var x = ri(rand, 1, 8);
      var a2 = ri(rand, 2, 8) * 10 + x;
      var c2 = ri(rand, 2, 8) * 10 + (10 - x);
      var b2 = ri(rand, 20, 50);
      var ans2 = a2 + b2 + c2;
      q = {
        type: 'fill',
        html: '用凑整法很快算：' + a2 + '＋' + b2 + '＋' + c2 + '＝（ ）。',
        answer: ans2,
        analysis: a2 + ' 和 ' + c2 + ' 的个位合起来是 10，是一对“好朋友”，先加：' +
          a2 + '＋' + c2 + '＝' + (a2 + c2) + '；再算 ' + (a2 + c2) + '＋' + b2 + '＝' + ans2 + '。'
      };
      q.html += gin({ t: 'roundCalc', mode: 'friends', a: a2, b: b2, c: c2 });
    } else {
      var sum = ri(rand, 4, 9) * 10;           // 两个减数合起来凑整十
      var b3 = ri(rand, 11, sum - 11);
      var c3 = sum - b3;
      var a3 = sum + ri(rand, 10, 40);
      var ans3 = a3 - sum;
      q = {
        type: 'fill',
        html: '用凑整法很快算：' + a3 + '－' + b3 + '－' + c3 + '＝（ ）。',
        answer: ans3,
        analysis: '连续减去两个数，可以先把它们合起来：' + b3 + '＋' + c3 + '＝' + sum +
          '；再算 ' + a3 + '－' + sum + '＝' + ans3 + '。'
      };
      q.html += gin({ t: 'roundCalc', mode: 'sub', a: a3, b: b3, c: c3 });
    }
    return q;
  }

  // 7. 倍数的认识与表内乘法
  function g_multiply(rand) {
    var x = ri(rand, 2, 9), y = ri(rand, 2, 9);
    var mode = pick(rand, ['product', 'times', 'choice']);
    var q;
    if (mode === 'product') {
      q = {
        type: 'fill',
        html: '想一想乘法口诀：' + x + '×' + y + '＝（ ）。',
        answer: x * y,
        analysis: x + '×' + y + ' 表示 ' + y + ' 个 ' + x + ' 相加，用口诀“' +
          (x <= y ? x : y) + (x <= y ? y : x) + (x * y) + '”，得数是 ' + (x * y) + '。'
      };
      q.html += gin({ t: 'multiply', mode: 'product', x: x, y: y });
    } else if (mode === 'times') {
      q = {
        type: 'fill',
        html: '红花有 ' + x + ' 朵，黄花的朵数是红花的 ' + y + ' 倍，黄花有（ ）朵。',
        answer: x * y, unit: '朵',
        analysis: '黄花是红花的 ' + y + ' 倍，就是有 ' + y + ' 个 ' + x + ' 朵：' +
          x + '×' + y + '＝' + (x * y) + ' 朵。'
      };
      q.html += gin({ t: 'multiply', mode: 'times', x: x, y: y });
    } else {
      var opts = shuffle(rand, [x + '×' + y, x + '＋' + y, y + '－' + x, x + '－' + y]);
      var ansIdx = opts.indexOf(x + '×' + y);
      q = {
        type: 'choice',
        html: y + ' 个 ' + x + ' 相加，写成乘法算式是哪一个？',
        options: opts,
        answer: ansIdx,
        analysis: '求几个几相加，可以用乘法：' + y + ' 个 ' + x + ' 就是 ' + x + '×' + y +
          '，结果是 ' + (x * y) + '。'
      };
      q.html += gin({ t: 'multiply', mode: 'choice', x: x, y: y });
    }
    return q;
  }

  // 8. 表内有余数除法
  function g_division(rand) {
    var ds = ri(rand, 2, 9);
    var q = ri(rand, 1, 9);
    var forceRem = rand() < 0.75;             // 多数带余数
    var r = forceRem ? ri(rand, 1, ds - 1) : 0;
    var d = ds * q + r;
    var mode = pick(rand, ['choice', 'fillQ', 'fillR']);
    var qobj;
    if (mode === 'choice') {
      var correct = q + '……' + r;
      var distract = [
        (q + 1) + '……' + r,
        q + '……' + (r > 0 ? r - 1 : r + 1),
        (q - 1) + '……' + r
      ].filter(function (s) { return s !== correct; });
      // 去重
      var set = {}; var dd = [];
      distract.forEach(function (s) { if (!set[s]) { set[s] = 1; dd.push(s); } });
      while (dd.length < 3) {
        var s2 = (q + ri(rand, -2, 2)) + '……' + ri(rand, 0, ds - 1);
        if (s2 !== correct && !set[s2]) { set[s2] = 1; dd.push(s2); }
      }
      var opts = shuffle(rand, [correct].concat(dd.slice(0, 3)));
      qobj = {
        type: 'choice',
        html: '有 ' + d + ' 个苹果，平均放在 ' + ds + ' 个盘子里，每盘几个？还剩几个？',
        options: opts,
        answer: opts.indexOf(correct),
        analysis: d + '÷' + ds + '：想 ' + ds + ' 的乘法口诀，' + ds + '×' + q + '＝' + (ds * q) +
          (r > 0 ? '，还多 ' + r + ' 个（比 ' + ds + ' 小），所以 ' + d + '÷' + ds + '＝' + q + '……' + r + '。'
            : '，正好分完，所以 ' + d + '÷' + ds + '＝' + q + '。')
      };
      qobj.html += gin({ t: 'division', mode: 'choice', d: d, ds: ds });
    } else if (mode === 'fillQ') {
      qobj = {
        type: 'fill',
        html: '有 ' + d + ' 块饼干，每 ' + ds + ' 块装一袋，可以装满（ ）袋。',
        answer: q, unit: '袋',
        analysis: d + '÷' + ds + '＝' + q + '……' + r +
          (r > 0 ? '，装满 ' + q + ' 袋后还剩 ' + r + ' 块，不够再装一袋，所以装满 ' + q + ' 袋。' : '，正好装 ' + q + ' 袋。')
      };
      qobj.html += gin({ t: 'division', mode: 'fillQ', d: d, ds: ds });
    } else {
      qobj = {
        type: 'fill',
        html: '有 ' + d + ' 颗草莓，平均分给 ' + ds + ' 个小朋友，分完后还剩（ ）颗。',
        answer: r, unit: '颗',
        analysis: d + '÷' + ds + '＝' + q + '……' + r +
          '。余数 ' + r + (r > 0 ? ' 比除数 ' + ds + ' 小，是对的，所以还剩 ' + r + ' 颗。' : '，正好分完，没有剩余。')
      };
      qobj.html += gin({ t: 'division', mode: 'fillR', d: d, ds: ds });
    }
    return qobj;
  }

  // 9. 周期问题
  function g_period(rand) {
    var p = ri(rand, 2, 4);                 // 周期长度
    var usedIdx = shuffle(rand, [0, 1, 2, 3]).slice(0, ri(rand, 2, 3)); // 用到的颜色序号
    var pattern = [];
    for (var i = 0; i < p; i++) pattern.push(pick(rand, usedIdx));
    // 保证周期内不与前面完全重复（避免退化为更短周期），简单处理：允许重复出现
    var show = p * 2 + 1;
    var svg = patternSVG(pattern, show);
    var mode = pick(rand, ['which', 'count']);
    var q;
    if (mode === 'which') {
      var n = ri(rand, p + 1, 20);
      var opts = usedIdx.slice();           // 去重后的颜色选项
      var want = pattern[(n - 1) % p];
      q = {
        type: 'choice',
        html: '照这样的规律往下排，第 ' + n + ' 个圆圈是什么颜色？' + svg,
        options: opts.map(function (i) { return PAT_NAMES[i] + '色'; }),
        answer: opts.indexOf(want),
        analysis: '每 ' + p + ' 个圆圈为一组重复出现。用 ' + n + '÷' + p + '＝' +
          Math.floor(n / p) + ' 组余 ' + (n % p) + ' 个，余数是 ' + (n % p) +
          ' 就看一组里的第 ' + ((n % p) === 0 ? p : (n % p)) + ' 个，是' + PAT_NAMES[want] + '色。'
      };
      q.html += gin({ t: 'period', mode: 'which', pattern: pattern, used: opts, n: n });
    } else {
      var n2 = ri(rand, 6, 20);
      var tgt = pick(rand, usedIdx);
      var cnt = 0;
      for (var k = 1; k <= n2; k++) if (pattern[(k - 1) % p] === tgt) cnt++;
      q = {
        type: 'fill',
        html: '照这样排，前 ' + n2 + ' 个圆圈里，一共有（ ）个' + PAT_NAMES[tgt] + '色。' + svg,
        answer: cnt, unit: '个',
        analysis: '每 ' + p + ' 个一组，每组里有 ' +
          pattern.filter(function (i) { return i === tgt; }).length + ' 个' + PAT_NAMES[tgt] + '色。前 ' + n2 +
          ' 个里面数一数，一共是 ' + cnt + ' 个。'
      };
      q.html += gin({ t: 'period', mode: 'count', pattern: pattern, tgt: tgt, n: n2 });
    }
    return q;
  }

  // 10. 时间计算（时/分经过时间）
  function g_timeCalc(rand) {
    var mode = pick(rand, ['elapsed', 'laterHour']);
    var q;
    if (mode === 'elapsed') {
      var sh = ri(rand, 1, 11);
      var sm = ri(rand, 0, 8) * 5;                  // 开始分
      var dur = ri(rand, 2, 11) * 5;                // 经过分（不跨整点）
      if (sm + dur > 55) { dur = Math.max(5, 55 - sm); }
      var em = sm + dur;
      q = {
        type: 'fill',
        html: '一节课从 ' + sh + '时' + (sm === 0 ? '' : sm) + '分 开始，到 ' + sh + '时' + em + '分 下课，经过了（ ）分。',
        answer: dur, unit: '分',
        analysis: '从 ' + sm + ' 分到 ' + em + ' 分，分针走了 ' + em + '－' + sm + '＝' + dur + ' 小格，所以经过了 ' + dur + ' 分。'
      };
      q.html += gin({ t: 'timeCalc', mode: 'elapsed', sh: sh, sm: sm, dur: dur });
    } else {
      var hh = ri(rand, 1, 10);
      var add = ri(rand, 1, 2);
      q = {
        type: 'fill',
        html: '现在是 ' + hh + ' 时，过 ' + add + ' 时是（ ）时。',
        answer: hh + add, unit: '时',
        analysis: '从 ' + hh + ' 时往后数 ' + add + ' 个小时：' + hh + '＋' + add + '＝' + (hh + add) + '，所以是 ' + (hh + add) + ' 时。'
      };
      q.html += gin({ t: 'timeCalc', mode: 'laterHour', h: hh, add: add });
    }
    return q;
  }

  // 11. 单位换算（长度米/厘米、质量克/千克）
  function g_unitConvert(rand) {
    var mode = pick(rand, ['m2cm', 'cm2m', 'kg2g', 'compare']);
    var q;
    if (mode === 'm2cm') {
      var a = ri(rand, 1, 3);
      q = {
        type: 'fill',
        html: a + ' 米＝（ ）厘米。',
        answer: a * 100, unit: '厘米',
        analysis: '1 米＝100 厘米，' + a + ' 米就是 ' + a + ' 个 100 厘米，等于 ' + (a * 100) + ' 厘米。'
      };
      q.html += gin({ t: 'unitConvert', mode: 'm2cm', a: a });
    } else if (mode === 'cm2m') {
      var b = ri(rand, 2, 5);
      q = {
        type: 'fill',
        html: (b * 100) + ' 厘米＝（ ）米。',
        answer: b, unit: '米',
        analysis: '100 厘米＝1 米，' + (b * 100) + ' 厘米里有 ' + b + ' 个 100 厘米，所以是 ' + b + ' 米。'
      };
      q.html += gin({ t: 'unitConvert', mode: 'cm2m', b: b });
    } else if (mode === 'kg2g') {
      var c = ri(rand, 1, 3);
      q = {
        type: 'fill',
        html: c + ' 千克＝（ ）克。',
        answer: c * 1000, unit: '克',
        analysis: '1 千克＝1000 克，' + c + ' 千克就是 ' + c + ' 个 1000 克，等于 ' + (c * 1000) + ' 克。'
      };
      q.html += gin({ t: 'unitConvert', mode: 'kg2g', c: c });
    } else {
      // 比较：统一成厘米/克后比较
      var kind = rand() < 0.5 ? 'len' : 'mass';
      var leftCmp, rightCmp, txt;
      if (kind === 'len') {
        // 1米 vs X厘米；或 X厘米 vs Y米
        var m1 = ri(rand, 1, 2);
        var cm2 = ri(rand, 50, 250);
        leftCmp = m1 * 100; rightCmp = cm2;
        txt = m1 + ' 米　○　' + cm2 + ' 厘米';
      } else {
        var kg1 = ri(rand, 1, 2);
        var g2 = ri(rand, 500, 2500);
        leftCmp = kg1 * 1000; rightCmp = g2;
        txt = kg1 + ' 千克　○　' + g2 + ' 克';
      }
      var rel = leftCmp > rightCmp ? '＞' : (leftCmp < rightCmp ? '＜' : '＝');
      q = {
        type: 'choice',
        html: '在 ○ 里应该填什么符号？' + txt,
        options: ['＞', '＜', '＝'],
        answer: ['＞', '＜', '＝'].indexOf(rel),
        analysis: kind === 'len'
          ? '先统一成厘米：' + txt.split('　')[0] + '＝' + leftCmp + ' 厘米，再和 ' + rightCmp + ' 厘米比，' +
            leftCmp + (leftCmp > rightCmp ? '＞' : leftCmp < rightCmp ? '＜' : '＝') + rightCmp + '。'
          : '先统一成克：' + txt.split('　')[0] + '＝' + leftCmp + ' 克，再和 ' + rightCmp + ' 克比，' +
            leftCmp + (leftCmp > rightCmp ? '＞' : leftCmp < rightCmp ? '＜' : '＝') + rightCmp + '。'
      };
      q.html += gin({ t: 'unitConvert', mode: 'compare', kind: kind, l: leftCmp, r: rightCmp });
    }
    return q;
  }

  /* ---------- 注册表与对外接口 ---------- */
  var GENS = {
    decompose: g_decompose,
    oddEven: g_oddEven,
    makeTen: g_makeTen,
    clock: g_clock,
    money: g_money,
    roundCalc: g_roundCalc,
    multiply: g_multiply,
    division: g_division,
    period: g_period,
    timeCalc: g_timeCalc,
    unitConvert: g_unitConvert
  };

  var LESSON2TYPE = {
    'g1-04': 'decompose',
    'g1-11': 'oddEven',
    'g1-12': 'makeTen',
    'g1-16': 'clock',
    'g1-17': 'money',
    'g2-01': 'roundCalc',
    'g2-08': 'multiply',
    'g2-16': 'division',
    'g2-17': 'period',
    'g2-22': 'timeCalc',
    'g2-23': 'unitConvert'
  };

  function get(type, n, rand) {
    rand = rand || Math.random;
    var gen = GENS[type];
    if (!gen) throw new Error('Gen.get: 未知类型 ' + type);
    n = n | 0;
    var out = [];
    for (var i = 0; i < n; i++) {
      var q = gen(rand);
      q.gen = true;
      out.push(q);
    }
    return out;
  }

  function pool(lessonId, n, rand) {
    var type = LESSON2TYPE[lessonId];
    if (!type) throw new Error('Gen.pool: 该讲没有生成器 ' + lessonId);
    return get(type, n, rand);
  }

  return { get: get, pool: pool, TYPES: Object.keys(GENS) };
})();
