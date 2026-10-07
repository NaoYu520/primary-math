/* 数据：一年级 g1-12 ~ g1-16 */
var L_G1C = [
{
  id:"g1-12", grade:1, idx:12,
  title:"凑十法巧算",
  tag:"数与计算",
  goal:"学会用“凑十法”计算 20 以内的进位加法，算得又对又快。",
  points:[
    "凑十法四步口诀：看大数、拆小数、凑成十、加剩数。",
    "先看较大的数还差几就是 10，就把较小的数拆出“几”来和它凑成十。",
    "凑成 10 以后，再加上小数剩下的部分，就是最后的得数。"
  ],
  examples:[
    {
      lead:"例1",
      html:"用凑十法算一算：9＋5＝？<svg class='fig' viewBox='0 0 340 92' xmlns='http://www.w3.org/2000/svg'><circle cx='28' cy='32' r='11' fill='#2B8A83'/><circle cx='56' cy='32' r='11' fill='#2B8A83'/><circle cx='84' cy='32' r='11' fill='#2B8A83'/><circle cx='112' cy='32' r='11' fill='#2B8A83'/><circle cx='140' cy='32' r='11' fill='#2B8A83'/><circle cx='28' cy='62' r='11' fill='#2B8A83'/><circle cx='56' cy='62' r='11' fill='#2B8A83'/><circle cx='84' cy='62' r='11' fill='#2B8A83'/><circle cx='112' cy='62' r='11' fill='#2B8A83'/><circle cx='140' cy='62' r='11' fill='#E9A23B'/><rect x='14' y='16' width='140' height='62' rx='10' fill='none' stroke='#2B8A83' stroke-width='1.5' stroke-dasharray='5 4'/><circle cx='190' cy='32' r='11' fill='#E9A23B'/><circle cx='218' cy='32' r='11' fill='#E9A23B'/><circle cx='246' cy='32' r='11' fill='#E9A23B'/><circle cx='274' cy='32' r='11' fill='#E9A23B'/><text x='84' y='88' font-size='12' fill='#1F6E68' text-anchor='middle'>9＋1＝10</text><text x='232' y='88' font-size='12' fill='#E9A23B' text-anchor='middle'>还剩 4</text></svg>",
      steps:[
        "看大数：算式 9＋5 中，较大的数是 9。",
        "凑成十：9 再添上 1 正好是 10，所以要从 5 里分出 1。",
        "拆小数：把 5 拆成 1 和 4。",
        "加剩数：9＋1＝10，再用 10＋4＝14。"
      ],
      answer:"9＋5＝14。",
      variants:[
        {type:"fill", html:"用凑十法算一算：9＋4＝（ ）", answer:13, analysis:"9 添 1 是 10，把 4 拆成 1 和 3，9＋1＝10，10＋3＝13。"},
        {type:"choice", html:"计算 9＋5 时，要从 5 里分出几和 9 凑成 10？", options:["1","2","3"], answer:0, analysis:"9 再添 1 就是 10，所以从 5 里分出 1。"}
      ]
    },
    {
      lead:"例2",
      html:"用凑十法算一算：8＋6＝？<svg class='fig' viewBox='0 0 340 92' xmlns='http://www.w3.org/2000/svg'><circle cx='28' cy='32' r='11' fill='#2B8A83'/><circle cx='56' cy='32' r='11' fill='#2B8A83'/><circle cx='84' cy='32' r='11' fill='#2B8A83'/><circle cx='112' cy='32' r='11' fill='#2B8A83'/><circle cx='140' cy='32' r='11' fill='#2B8A83'/><circle cx='28' cy='62' r='11' fill='#2B8A83'/><circle cx='56' cy='62' r='11' fill='#2B8A83'/><circle cx='84' cy='62' r='11' fill='#2B8A83'/><circle cx='112' cy='62' r='11' fill='#E9A23B'/><circle cx='140' cy='62' r='11' fill='#E9A23B'/><rect x='14' y='16' width='140' height='62' rx='10' fill='none' stroke='#2B8A83' stroke-width='1.5' stroke-dasharray='5 4'/><circle cx='190' cy='32' r='11' fill='#E9A23B'/><circle cx='218' cy='32' r='11' fill='#E9A23B'/><circle cx='246' cy='32' r='11' fill='#E9A23B'/><circle cx='274' cy='32' r='11' fill='#E9A23B'/><text x='84' y='88' font-size='12' fill='#1F6E68' text-anchor='middle'>8＋2＝10</text><text x='232' y='88' font-size='12' fill='#E9A23B' text-anchor='middle'>还剩 4</text></svg>",
      steps:[
        "看大数：较大的数是 8。",
        "凑成十：8 再添 2 是 10，所以从 6 里分出 2。",
        "拆小数：把 6 拆成 2 和 4。",
        "加剩数：8＋2＝10，10＋4＝14。"
      ],
      answer:"8＋6＝14。",
      variants:[
        {type:"fill", html:"用凑十法算一算：8＋5＝（ ）", answer:13, analysis:"8 添 2 是 10，把 5 拆成 2 和 3，8＋2＝10，10＋3＝13。"},
        {type:"judge", html:"计算 8＋6 时，要从 6 里分出 2 和 8 凑成 10。", answer:true, analysis:"8 还差 2 就是 10，所以从 6 里分出 2，这句话正确。"}
      ]
    },
    {
      lead:"例3",
      html:"用凑十法算一算：7＋5＝？<svg class='fig' viewBox='0 0 340 92' xmlns='http://www.w3.org/2000/svg'><circle cx='28' cy='32' r='11' fill='#2B8A83'/><circle cx='56' cy='32' r='11' fill='#2B8A83'/><circle cx='84' cy='32' r='11' fill='#2B8A83'/><circle cx='112' cy='32' r='11' fill='#2B8A83'/><circle cx='140' cy='32' r='11' fill='#2B8A83'/><circle cx='28' cy='62' r='11' fill='#2B8A83'/><circle cx='56' cy='62' r='11' fill='#2B8A83'/><circle cx='84' cy='62' r='11' fill='#E9A23B'/><circle cx='112' cy='62' r='11' fill='#E9A23B'/><circle cx='140' cy='62' r='11' fill='#E9A23B'/><rect x='14' y='16' width='140' height='62' rx='10' fill='none' stroke='#2B8A83' stroke-width='1.5' stroke-dasharray='5 4'/><circle cx='190' cy='32' r='11' fill='#E9A23B'/><circle cx='218' cy='32' r='11' fill='#E9A23B'/><text x='84' y='88' font-size='12' fill='#1F6E68' text-anchor='middle'>7＋3＝10</text><text x='204' y='88' font-size='12' fill='#E9A23B' text-anchor='middle'>还剩 2</text></svg>",
      steps:[
        "看大数：较大的数是 7。",
        "凑成十：7 再添 3 是 10，所以从 5 里分出 3。",
        "拆小数：把 5 拆成 3 和 2。",
        "加剩数：7＋3＝10，10＋2＝12。"
      ],
      answer:"7＋5＝12。",
      variants:[
        {type:"fill", html:"用凑十法算一算：7＋6＝（ ）", answer:13, analysis:"7 添 3 是 10，把 6 拆成 3 和 3，7＋3＝10，10＋3＝13。"},
        {type:"fill", html:"用凑十法算一算：6＋5＝（ ）", answer:11, analysis:"6 添 4 是 10，把 5 拆成 4 和 1，6＋4＝10，10＋1＝11。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"用凑十法算一算：9＋6＝（ ）", answer:15, analysis:"9 添 1 是 10，把 6 拆成 1 和 5，9＋1＝10，10＋5＝15。"},
    {type:"fill", html:"用凑十法算一算：8＋4＝（ ）", answer:12, analysis:"8 添 2 是 10，把 4 拆成 2 和 2，8＋2＝10，10＋2＝12。"},
    {type:"fill", html:"用凑十法算一算：7＋4＝（ ）", answer:11, analysis:"7 添 3 是 10，把 4 拆成 3 和 1，7＋3＝10，10＋1＝11。"},
    {type:"choice", html:"计算 8＋7 时，要从 7 里分出几和 8 凑成 10？", options:["2","3","4"], answer:0, analysis:"8 还差 2 就是 10，所以从 7 里分出 2，凑成 10 后 10＋5＝15。"}
  ],
  quiz:[
    {type:"fill", html:"用凑十法算一算：9＋8＝（ ）", answer:17, analysis:"9 添 1 是 10，把 8 拆成 1 和 7，9＋1＝10，10＋7＝17。"},
    {type:"fill", html:"用凑十法算一算：8＋3＝（ ）", answer:11, analysis:"8 添 2 是 10，把 3 拆成 2 和 1，8＋2＝10，10＋1＝11。"},
    {type:"fill", html:"用凑十法算一算：7＋7＝（ ）", answer:14, analysis:"7 添 3 是 10，把 7 拆成 3 和 4，7＋3＝10，10＋4＝14。"},
    {type:"judge", html:"计算 8＋5 时，把 8 凑成 10，需要从 5 里分出 2。", answer:true, analysis:"8 还差 2 就是 10，所以从 5 里分出 2，剩下 3，10＋3＝13，说法正确。"},
    {type:"choice", html:"用凑十法算 6＋5，得数是多少？", options:["10","11","12"], answer:1, analysis:"6 添 4 是 10，5 拆成 4 和 1，10＋1＝11。"}
  ],
  gen:{type:"makeTen", n:4}
}
,{
  id:"g1-13", grade:1, idx:13,
  title:"间隔问题初步",
  tag:"典型应用",
  goal:"发现排成一排的物体中“物体个数”和“间隔个数”相差 1 的规律。",
  points:[
    "排成一排的物体，物体的个数比间隔的个数多 1：间隔数＝物体数－1。",
    "求“一共多长/相距多少米”，先数出有几个间隔，再用每个间隔的长度去乘间隔数。",
    "伸出自己的手数一数：5 根手指中间有 4 个“空”，这就是“相差 1”。"
  ],
  examples:[
    {
      lead:"例1",
      html:"伸出一只手，5 根手指伸直并拢。手指和手指之间一共有几个“空”（间隔）？<svg class='fig' viewBox='0 0 280 104' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='18' width='26' height='62' rx='10' fill='#2B8A83'/><rect x='75' y='18' width='26' height='62' rx='10' fill='#2B8A83'/><rect x='120' y='18' width='26' height='62' rx='10' fill='#2B8A83'/><rect x='165' y='18' width='26' height='62' rx='10' fill='#2B8A83'/><rect x='210' y='18' width='26' height='62' rx='10' fill='#2B8A83'/><text x='140' y='98' font-size='13' fill='#26313A' text-anchor='middle'>5 根手指 → 中间有 4 个间隔</text></svg>",
      steps:[
        "一根一根地数手指：大拇指、食指、中指、无名指、小指，一共 5 根。",
        "再数手指之间的空：大－食之间、食－中之间、中－无之间、无－小之间，一共 4 个。",
        "比较一下：5 根手指对应 4 个间隔，间隔数比物体数少 1。"
      ],
      answer:"5 根手指之间有 4 个间隔。",
      variants:[
        {type:"fill", html:"伸出 4 根手指并拢，手指之间有（ ）个间隔。", answer:3, unit:"个", analysis:"间隔数＝手指数－1，4－1＝3。"},
        {type:"judge", html:"一排有 10 个物体，那么它们之间正好有 10 个间隔。", answer:false, analysis:"间隔数＝物体数－1，10 个物体应是 9 个间隔，所以这句话错。"}
      ]
    },
    {
      lead:"例2",
      html:"路边从一头到另一头一共种了 5 棵树，相邻两棵树之间相隔 2 米。这条路长多少米？<svg class='fig' viewBox='0 0 320 104' xmlns='http://www.w3.org/2000/svg'><line x1='35' y1='70' x2='35' y2='86' stroke='#8A949C' stroke-width='3'/><circle cx='35' cy='56' r='15' fill='#53A06B'/><line x1='100' y1='70' x2='100' y2='86' stroke='#8A949C' stroke-width='3'/><circle cx='100' cy='56' r='15' fill='#53A06B'/><line x1='165' y1='70' x2='165' y2='86' stroke='#8A949C' stroke-width='3'/><circle cx='165' cy='56' r='15' fill='#53A06B'/><line x1='230' y1='70' x2='230' y2='86' stroke='#8A949C' stroke-width='3'/><circle cx='230' cy='56' r='15' fill='#53A06B'/><line x1='295' y1='70' x2='295' y2='86' stroke='#8A949C' stroke-width='3'/><circle cx='295' cy='56' r='15' fill='#53A06B'/><line x1='35' y1='22' x2='100' y2='22' stroke='#3E6FB2' stroke-width='1.5' stroke-dasharray='4 3'/><text x='67' y='16' font-size='12' fill='#3E6FB2' text-anchor='middle'>相隔 2 米</text><text x='165' y='98' font-size='12' fill='#26313A' text-anchor='middle'>5 棵树 → 4 个间隔</text></svg>",
      steps:[
        "先数间隔：5 棵树种成一排，间隔数＝5－1＝4 个。",
        "每个间隔长 2 米，4 个间隔就是 4 个 2 米。",
        "合起来：2＋2＋2＋2＝8 米。"
      ],
      answer:"这条路长 8 米。",
      variants:[
        {type:"fill", html:"路边种了 6 棵树，相邻两棵相隔 2 米，第 1 棵到第 6 棵一共长（ ）米。", answer:10, unit:"米", analysis:"间隔数＝6－1＝5 个，每个 2 米，2×5＝10 米。"},
        {type:"choice", html:"6 棵树排成一排，相邻两棵之间一共有几个间隔？", options:["5 个","6 个","7 个"], answer:0, analysis:"间隔数＝物体数－1，6－1＝5 个。"}
      ]
    },
    {
      lead:"例3",
      html:"8 个小朋友站成一队，相邻两人之间相隔 1 米。这列队伍长多少米？",
      steps:[
        "8 个小朋友排成一队，间隔数＝8－1＝7 个。",
        "每个间隔是 1 米，7 个间隔就是 7 个 1 米。",
        "合起来队伍长 7 米。"
      ],
      answer:"这列队伍长 7 米。",
      variants:[
        {type:"fill", html:"10 个小朋友站成一队，相邻两人相隔 1 米，队伍长（ ）米。", answer:9, unit:"米", analysis:"间隔数＝10－1＝9 个，每个 1 米，共 9 米。"},
        {type:"judge", html:"一队小朋友中，间隔的个数一定比小朋友的人数少 1。", answer:true, analysis:"排成一排时，间隔数＝人数－1，所以间隔个数总比人数少 1，说法正确。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"路边种了 7 棵树排成一排，相邻两棵相隔 1 米，第 1 棵到第 7 棵一共长（ ）米。", answer:6, unit:"米", analysis:"间隔数＝7－1＝6 个，每个 1 米，共 6 米。"},
    {type:"fill", html:"一排有 8 盏路灯，相邻两盏之间有（ ）个间隔。", answer:7, unit:"个", analysis:"间隔数＝物体数－1，8－1＝7。"},
    {type:"choice", html:"把 5 个△摆成一排，△和△之间一共有几个空？", options:["4 个","5 个","6 个"], answer:0, analysis:"间隔数＝5－1＝4 个。"},
    {type:"fill", html:"走廊一边摆了 9 盆花，相邻两盆相隔 2 米，第 1 盆到第 9 盆一共长（ ）米。", answer:16, unit:"米", analysis:"间隔数＝9－1＝8 个，每个 2 米，2×8＝16 米。"},
    {type:"judge", html:"排成一排的物体中，物体的个数总比间隔的个数多 1。", answer:true, analysis:"间隔数＝物体数－1，所以物体数＝间隔数＋1，说法正确。"},
    {type:"fill", html:"一根绳子上系了 6 个蝴蝶结排成一排，相邻两个相隔 1 分米，这根绳子长（ ）分米。", answer:5, unit:"分米", analysis:"间隔数＝6－1＝5 个，每个 1 分米，共 5 分米。"},
    {type:"choice", html:"路边插了 4 面彩旗，相邻两面相隔 3 米，第 1 面到第 4 面相距多少米？", options:["9 米","12 米","15 米"], answer:0, analysis:"间隔数＝4－1＝3 个，每个 3 米，3×3＝9 米。"}
  ],
  quiz:[
    {type:"fill", html:"6 棵树排成一排，相邻两棵相隔 1 米，第 1 棵到第 6 棵一共长（ ）米。", answer:5, unit:"米", analysis:"间隔数＝6－1＝5 个，每个 1 米，共 5 米。"},
    {type:"fill", html:"一只手 5 根手指，手指之间有（ ）个空。", answer:4, unit:"个", analysis:"间隔数＝5－1＝4。"},
    {type:"choice", html:"路边插了 10 面彩旗排成一排，相邻两面相隔 2 米，第 1 面到第 10 面一共长多少米？", options:["18 米","20 米","22 米"], answer:0, analysis:"间隔数＝10－1＝9 个，每个 2 米，2×9＝18 米。"},
    {type:"judge", html:"3 个小朋友站成一队，相邻两人相隔 2 米，这列队伍长 6 米。", answer:false, analysis:"间隔数＝3－1＝2 个，每个 2 米，队伍长 2×2＝4 米，不是 6 米。"},
    {type:"fill", html:"把 10 个○摆成一排，○和○之间有（ ）个空。", answer:9, unit:"个", analysis:"间隔数＝10－1＝9。"}
  ],
  gen:null
}
,{
  id:"g1-14", grade:1, idx:14,
  title:"年龄问题初步",
  tag:"典型应用",
  goal:"发现两个人的年龄差永远不变的规律，会算“大几岁、小几岁”。",
  points:[
    "每过一年，两个人都同时长大 1 岁，所以两人的年龄差永远不变。",
    "求谁比谁大几岁、小几岁，用较大的年龄减去较小的年龄。",
    "不管是几年前还是几年后，两人相差的岁数都和今年一样，这是年龄问题最重要的秘密。"
  ],
  examples:[
    {
      lead:"例1",
      html:"今年哥哥 8 岁，弟弟 3 岁。哥哥比弟弟大几岁？去年哥哥比弟弟大几岁呢？",
      steps:[
        "今年哥哥比弟弟大：8－3＝5 岁。",
        "去年哥哥 7 岁，弟弟 2 岁，两人都比今年小 1 岁。",
        "去年哥哥比弟弟大：7－2＝5 岁。",
        "比较发现：今年和去年，哥哥都比弟弟大 5 岁，相差的岁数没有变。"
      ],
      answer:"哥哥比弟弟大 5 岁；去年还是大 5 岁。",
      variants:[
        {type:"fill", html:"今年姐姐 7 岁，妹妹 2 岁，姐姐比妹妹大（ ）岁。", answer:5, unit:"岁", analysis:"求相差用减法：7－2＝5 岁。"},
        {type:"judge", html:"明年哥哥长 1 岁、弟弟也长 1 岁，所以两人相差的岁数会跟着变。", answer:false, analysis:"两人同时长大 1 岁，年龄差不变，所以这句话错。"}
      ]
    },
    {
      lead:"例2",
      html:"妈妈今年 30 岁，小红今年 6 岁。10 年以后，妈妈比小红大几岁？",
      steps:[
        "先算今年妈妈比小红大几岁：30－6＝24 岁。",
        "10 年以后，妈妈长 10 岁，小红也长 10 岁，两人都长大了同样多。",
        "所以 10 年后妈妈比小红大的岁数和今年一样，还是 24 岁。"
      ],
      answer:"10 年后妈妈比小红大 24 岁。",
      variants:[
        {type:"fill", html:"爸爸今年 35 岁，小明今年 5 岁，5 年后爸爸比小明大（ ）岁。", answer:30, unit:"岁", analysis:"年龄差不变，今年差 35－5＝30 岁，5 年后还是 30 岁。"},
        {type:"choice", html:"妈妈比小丽大 25 岁，10 年以后妈妈比小丽大几岁？", options:["25 岁","35 岁","15 岁"], answer:0, analysis:"年龄差永远不变，10 年后还是大 25 岁。"}
      ]
    },
    {
      lead:"例3",
      html:"哥哥比弟弟大 4 岁，弟弟今年 4 岁。哥哥今年几岁？",
      steps:[
        "哥哥比弟弟大 4 岁，也就是哥哥的岁数＝弟弟的岁数＋4。",
        "弟弟今年 4 岁，所以哥哥今年 4＋4＝8 岁。",
        "想一想：明年弟弟 5 岁，哥哥 9 岁，还是相差 4 岁。"
      ],
      answer:"哥哥今年 8 岁。",
      variants:[
        {type:"fill", html:"姐姐比妹妹大 3 岁，妹妹今年 5 岁，姐姐今年（ ）岁。", answer:8, unit:"岁", analysis:"姐姐岁数＝妹妹岁数＋3，5＋3＝8 岁。"},
        {type:"fill", html:"妈妈比爸爸小 2 岁，爸爸今年 30 岁，妈妈今年（ ）岁。", answer:28, unit:"岁", analysis:"妈妈比爸爸小 2 岁，用 30－2＝28 岁。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"今年小亮 6 岁，爸爸 30 岁，爸爸比小亮大（ ）岁。", answer:24, unit:"岁", analysis:"求相差用减法：30－6＝24 岁。"},
    {type:"judge", html:"今年甲比乙大 5 岁，明年甲就只比乙大 4 岁了。", answer:false, analysis:"两人同时长 1 岁，年龄差不变，明年还是大 5 岁，所以错。"},
    {type:"fill", html:"姐姐 9 岁，弟弟 4 岁，3 年后姐姐比弟弟大（ ）岁。", answer:5, unit:"岁", analysis:"年龄差不变，今年差 9－4＝5 岁，3 年后还是 5 岁。"},
    {type:"choice", html:"爷爷比奶奶大 3 岁，20 年以后爷爷比奶奶大几岁？", options:["3 岁","23 岁","17 岁"], answer:0, analysis:"年龄差永远不变，20 年后还是大 3 岁。"},
    {type:"fill", html:"东东 5 岁，西西比东东大 2 岁，西西今年（ ）岁。", answer:7, unit:"岁", analysis:"西西岁数＝东东岁数＋2，5＋2＝7 岁。"},
    {type:"fill", html:"妈妈今年 28 岁，宝宝今年 1 岁。宝宝 10 岁时，妈妈（ ）岁。", answer:37, unit:"岁", analysis:"两人相差 28－1＝27 岁，宝宝 10 岁时妈妈 10＋27＝37 岁。"},
    {type:"choice", html:"小明比小华小 3 岁，小华今年 8 岁，小明今年几岁？", options:["5 岁","11 岁","3 岁"], answer:0, analysis:"小明比小华小 3 岁，用 8－3＝5 岁。"}
  ],
  quiz:[
    {type:"fill", html:"爸爸 32 岁，女儿 2 岁，爸爸比女儿大（ ）岁。", answer:30, unit:"岁", analysis:"求相差用减法：32－2＝30 岁。"},
    {type:"judge", html:"两人相差 4 岁，再过 5 年，两人就相差 9 岁了。", answer:false, analysis:"两人同时长 5 岁，年龄差不变，还是相差 4 岁，所以错。"},
    {type:"fill", html:"哥哥 10 岁，妹妹 6 岁，2 年后哥哥比妹妹大（ ）岁。", answer:4, unit:"岁", analysis:"年龄差不变，今年差 10－6＝4 岁，2 年后还是 4 岁。"},
    {type:"choice", html:"姑姑比侄子大 20 岁，侄子今年 3 岁，姑姑今年几岁？", options:["23 岁","17 岁","20 岁"], answer:0, analysis:"姑姑岁数＝侄子岁数＋20，3＋20＝23 岁。"},
    {type:"fill", html:"妈妈 30 岁，儿子 5 岁。儿子 20 岁时，妈妈（ ）岁。", answer:45, unit:"岁", analysis:"两人相差 30－5＝25 岁，儿子 20 岁时妈妈 20＋25＝45 岁。"}
  ],
  gen:null
}
,{
  id:"g1-15", grade:1, idx:15,
  title:"等量代换初步",
  tag:"规律推理",
  goal:"会根据“一样重、一样多”的关系，把一种东西换成另一种东西来数一数。",
  points:[
    "天平两边平衡时，两边一样重，可以把一边换成和它同样重的另一边，这叫“等量代换”。",
    "换的时候要“相等才能换”，不能随便换；先找中间量，一步一步换过去。",
    "换完以后数一数，大的东西一共等于几个最小的东西。"
  ],
  examples:[
    {
      lead:"例1",
      html:"看下图：1 个苹果的重量等于 2 个橘子，1 个橘子又等于 3 颗糖。那么 1 个苹果等于几颗糖？<svg class='fig' viewBox='0 0 320 120' xmlns='http://www.w3.org/2000/svg'><rect x='14' y='14' width='44' height='30' rx='6' fill='#E9A23B'/><text x='36' y='34' font-size='13' fill='#fff' text-anchor='middle'>苹</text><text x='78' y='34' font-size='15' fill='#26313A' text-anchor='middle'>＝</text><rect x='100' y='14' width='44' height='30' rx='6' fill='#F6D79E'/><text x='122' y='34' font-size='13' fill='#26313A' text-anchor='middle'>橘</text><rect x='152' y='14' width='44' height='30' rx='6' fill='#F6D79E'/><text x='174' y='34' font-size='13' fill='#26313A' text-anchor='middle'>橘</text><rect x='14' y='54' width='44' height='30' rx='6' fill='#F6D79E'/><text x='36' y='74' font-size='13' fill='#26313A' text-anchor='middle'>橘</text><text x='78' y='74' font-size='15' fill='#26313A' text-anchor='middle'>＝</text><rect x='100' y='54' width='34' height='30' rx='6' fill='#7FC3B8'/><text x='117' y='74' font-size='12' fill='#fff' text-anchor='middle'>糖</text><rect x='142' y='54' width='34' height='30' rx='6' fill='#7FC3B8'/><text x='159' y='74' font-size='12' fill='#fff' text-anchor='middle'>糖</text><rect x='184' y='54' width='34' height='30' rx='6' fill='#7FC3B8'/><text x='201' y='74' font-size='12' fill='#fff' text-anchor='middle'>糖</text><text x='160' y='108' font-size='14' fill='#26313A' text-anchor='middle'>1 个苹果 ＝ ？颗糖</text></svg>",
      steps:[
        "先找中间量：1 个苹果等于 2 个橘子。",
        "再看 1 个橘子等于 3 颗糖，那么 2 个橘子就是 2 个 3 颗糖。",
        "数一数：3＋3＝6 颗糖，所以 1 个苹果等于 6 颗糖。"
      ],
      answer:"1 个苹果等于 6 颗糖。",
      variants:[
        {type:"fill", html:"已知 1 个苹果＝2 个橘子，1 个橘子＝2 颗糖。1 个苹果＝（ ）颗糖。", answer:4, unit:"颗", analysis:"1 个橘子换 2 颗糖，2 个橘子换 2 个 2 颗糖：2＋2＝4 颗。"},
        {type:"judge", html:"做等量代换时，只要两种东西看起来差不多，就可以互相替换。", answer:false, analysis:"必须两边相等（一样重、一样多）才能换，看着像不行，所以这句话错。"}
      ]
    },
    {
      lead:"例2",
      html:"已知：1 个△等于 3 个□，1 个□等于 2 个○。那么 1 个△等于几个○？<svg class='fig' viewBox='0 0 320 120' xmlns='http://www.w3.org/2000/svg'><rect x='14' y='14' width='44' height='30' rx='6' fill='#3E6FB2'/><text x='36' y='34' font-size='14' fill='#fff' text-anchor='middle'>△</text><text x='78' y='34' font-size='15' fill='#26313A' text-anchor='middle'>＝</text><rect x='100' y='14' width='38' height='30' rx='6' fill='#7FC3B8'/><text x='119' y='34' font-size='13' fill='#fff' text-anchor='middle'>□</text><rect x='146' y='14' width='38' height='30' rx='6' fill='#7FC3B8'/><text x='165' y='34' font-size='13' fill='#fff' text-anchor='middle'>□</text><rect x='192' y='14' width='38' height='30' rx='6' fill='#7FC3B8'/><text x='211' y='34' font-size='13' fill='#fff' text-anchor='middle'>□</text><rect x='14' y='54' width='44' height='30' rx='6' fill='#7FC3B8'/><text x='36' y='74' font-size='13' fill='#fff' text-anchor='middle'>□</text><text x='78' y='74' font-size='15' fill='#26313A' text-anchor='middle'>＝</text><rect x='100' y='54' width='38' height='30' rx='6' fill='#F6D79E'/><text x='119' y='74' font-size='13' fill='#26313A' text-anchor='middle'>○</text><rect x='146' y='54' width='38' height='30' rx='6' fill='#F6D79E'/><text x='165' y='74' font-size='13' fill='#26313A' text-anchor='middle'>○</text><text x='160' y='108' font-size='14' fill='#26313A' text-anchor='middle'>1 个△ ＝ ？个○</text></svg>",
      steps:[
        "1 个△等于 3 个□，这是第一组关系。",
        "1 个□等于 2 个○，那么 3 个□就是 3 个 2 个○。",
        "数一数：2＋2＋2＝6 个○，所以 1 个△等于 6 个○。"
      ],
      answer:"1 个△等于 6 个○。",
      variants:[
        {type:"fill", html:"已知 1 个△＝3 个□，1 个□＝2 个○。1 个△＝（ ）个○。", answer:6, unit:"个", analysis:"1 个□换 2 个○，3 个□换 3 个 2 个○：2＋2＋2＝6。"},
        {type:"choice", html:"已知 1 个△＝2 个□，1 个□＝4 个○。1 个△等于几个○？", options:["6 个","8 个","2 个"], answer:1, analysis:"1 个□换 4 个○，2 个□换 2 个 4 个○：4＋4＝8 个。"}
      ]
    },
    {
      lead:"例3",
      html:"已知：1 个西瓜等于 2 个菠萝，1 个菠萝等于 4 个苹果。那么 1 个西瓜等于几个苹果？<svg class='fig' viewBox='0 0 320 120' xmlns='http://www.w3.org/2000/svg'><rect x='14' y='14' width='48' height='30' rx='6' fill='#53A06B'/><text x='38' y='34' font-size='12' fill='#fff' text-anchor='middle'>西瓜</text><text x='80' y='34' font-size='15' fill='#26313A' text-anchor='middle'>＝</text><rect x='102' y='14' width='40' height='30' rx='6' fill='#E9A23B'/><text x='122' y='34' font-size='12' fill='#fff' text-anchor='middle'>菠萝</text><rect x='150' y='14' width='40' height='30' rx='6' fill='#E9A23B'/><text x='170' y='34' font-size='12' fill='#fff' text-anchor='middle'>菠萝</text><rect x='14' y='54' width='48' height='30' rx='6' fill='#E9A23B'/><text x='38' y='74' font-size='12' fill='#fff' text-anchor='middle'>菠萝</text><text x='80' y='74' font-size='15' fill='#26313A' text-anchor='middle'>＝</text><rect x='102' y='54' width='34' height='30' rx='6' fill='#F6D79E'/><text x='119' y='74' font-size='11' fill='#26313A' text-anchor='middle'>苹果</text><rect x='142' y='54' width='34' height='30' rx='6' fill='#F6D79E'/><text x='159' y='74' font-size='11' fill='#26313A' text-anchor='middle'>苹果</text><rect x='182' y='54' width='34' height='30' rx='6' fill='#F6D79E'/><text x='199' y='74' font-size='11' fill='#26313A' text-anchor='middle'>苹果</text><rect x='222' y='54' width='34' height='30' rx='6' fill='#F6D79E'/><text x='239' y='74' font-size='11' fill='#26313A' text-anchor='middle'>苹果</text><text x='160' y='108' font-size='14' fill='#26313A' text-anchor='middle'>1 个西瓜 ＝ ？个苹果</text></svg>",
      steps:[
        "1 个西瓜等于 2 个菠萝。",
        "1 个菠萝等于 4 个苹果，那么 2 个菠萝就是 2 个 4 个苹果。",
        "数一数：4＋4＝8 个苹果，所以 1 个西瓜等于 8 个苹果。"
      ],
      answer:"1 个西瓜等于 8 个苹果。",
      variants:[
        {type:"fill", html:"已知 1 个西瓜＝2 个菠萝，1 个菠萝＝3 个苹果。1 个西瓜＝（ ）个苹果。", answer:6, unit:"个", analysis:"1 个菠萝换 3 个苹果，2 个菠萝换 2 个 3 个苹果：3＋3＝6。"},
        {type:"fill", html:"已知 1 只兔＝2 只鸡，1 只鸡＝3 个蛋。1 只兔＝（ ）个蛋。", answer:6, unit:"个", analysis:"1 只鸡换 3 个蛋，2 只鸡换 2 个 3 个蛋：3＋3＝6。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"已知 1 个大球＝2 个中球，1 个中球＝3 个小球。1 个大球＝（ ）个小球。", answer:6, unit:"个", analysis:"1 个中球换 3 个小球，2 个中球换 2 个 3 个小球：3＋3＝6。"},
    {type:"judge", html:"天平两边平衡时，两边的东西可以互相替换。", answer:true, analysis:"平衡就是两边一样重，一样重才能互相替换，说法正确。"},
    {type:"fill", html:"已知 1 个☆＝3 个△，1 个△＝2 个○。1 个☆＝（ ）个○。", answer:6, unit:"个", analysis:"1 个△换 2 个○，3 个△换 3 个 2 个○：2＋2＋2＝6。"},
    {type:"choice", html:"已知 1 只羊＝2 只狗，1 只狗＝3 只猫。1 只羊等于几只猫？", options:["5 只","6 只","8 只"], answer:1, analysis:"1 只狗换 3 只猫，2 只狗换 2 个 3 只猫：3＋3＝6 只。"},
    {type:"fill", html:"已知 1 壶水＝2 瓶水，1 瓶水＝4 杯水。1 壶水＝（ ）杯水。", answer:8, unit:"杯", analysis:"1 瓶换 4 杯，2 瓶换 2 个 4 杯：4＋4＝8 杯。"},
    {type:"fill", html:"已知△＝○○，○＝□□。那么 1 个△＝（ ）个□。", answer:4, unit:"个", analysis:"1 个○换 2 个□，2 个○换 2 个 2 个□：2＋2＝4。"},
    {type:"choice", html:"已知 1 个汉堡＝2 份薯条，1 份薯条＝3 杯饮料。1 个汉堡能换几杯饮料？", options:["5 杯","6 杯","3 杯"], answer:1, analysis:"1 份薯条换 3 杯饮料，2 份薯条换 2 个 3 杯：3＋3＝6 杯。"}
  ],
  quiz:[
    {type:"fill", html:"已知 1 个书包＝2 个笔袋，1 个笔袋＝3 支笔。1 个书包＝（ ）支笔。", answer:6, unit:"支", analysis:"1 个笔袋换 3 支笔，2 个笔袋换 2 个 3 支笔：3＋3＝6。"},
    {type:"judge", html:"已知 1 个△等于 2 个□，那么 2 个△就等于 4 个□。", answer:true, analysis:"1 个△换 2 个□，2 个△换 2 个 2 个□：2＋2＝4，说法正确。"},
    {type:"fill", html:"已知 1 个☆＝4 个○，1 个○＝2 个△。1 个☆＝（ ）个△。", answer:8, unit:"个", analysis:"1 个○换 2 个△，4 个○换 4 个 2 个△：2×4＝8。"},
    {type:"choice", html:"已知 1 匹马＝2 头牛，1 头牛＝3 头羊。1 匹马等于几头羊？", options:["5 头","6 头","9 头"], answer:1, analysis:"1 头牛换 3 头羊，2 头牛换 2 个 3 头羊：3＋3＝6 头。"},
    {type:"fill", html:"已知 1 串葡萄＝2 个苹果，1 个苹果＝3 颗草莓。1 串葡萄＝（ ）颗草莓。", answer:6, unit:"颗", analysis:"1 个苹果换 3 颗草莓，2 个苹果换 2 个 3 颗草莓：3＋3＝6。"}
  ],
  gen:null
}
,{
  id:"g1-16", grade:1, idx:16,
  title:"认识钟表",
  tag:"生活数学",
  goal:"认识钟面上的时针和分针，会看整时和半时。",
  points:[
    "钟面上短针是时针，长针是分针；钟面上有 12 个数。",
    "分针指着 12，时针指着几，就是几时整。",
    "分针指着 6，时针走过几，就是几时半。"
  ],
  examples:[
    {
      lead:"例1",
      html:"看一看，钟面上是几时？<svg class='fig' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='100' r='82' fill='#FCFDF9' stroke='#26313A' stroke-width='2'/><text x='100' y='32' font-size='14' fill='#26313A' text-anchor='middle'>12</text><text x='168' y='105' font-size='14' fill='#26313A' text-anchor='middle'>3</text><text x='100' y='180' font-size='14' fill='#26313A' text-anchor='middle'>6</text><text x='32' y='105' font-size='14' fill='#26313A' text-anchor='middle'>9</text><line x1='100' y1='100' x2='100' y2='38' stroke='#2B8A83' stroke-width='2.5' stroke-linecap='round'/><line x1='100' y1='100' x2='152' y2='100' stroke='#26313A' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='3.5' fill='#26313A'/></svg>",
      steps:[
        "先看长针（分针）：它正好指着 12，说明是整时。",
        "再看短针（时针）：它指着 3。",
        "分针指 12、时针指 3，就是 3 时整。"
      ],
      answer:"钟面上是 3 时（3:00）。",
      variants:[
        {type:"fill", html:"分针指着 12，时针指着 8，是（ ）时整。", answer:8, unit:"时", analysis:"分针指 12 是整时，时针指几就是几时，所以是 8 时。"},
        {type:"choice", html:"分针指着 12，时针指着 5，是几时？", options:["5 时","12 时","5 时半"], answer:0, analysis:"分针指 12、时针指 5，就是 5 时整。"}
      ]
    },
    {
      lead:"例2",
      html:"再看一看，这个钟面上是几时半？<svg class='fig' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='100' r='82' fill='#FCFDF9' stroke='#26313A' stroke-width='2'/><text x='100' y='32' font-size='14' fill='#26313A' text-anchor='middle'>12</text><text x='168' y='105' font-size='14' fill='#26313A' text-anchor='middle'>3</text><text x='100' y='180' font-size='14' fill='#26313A' text-anchor='middle'>6</text><text x='32' y='105' font-size='14' fill='#26313A' text-anchor='middle'>9</text><line x1='100' y1='100' x2='100' y2='166' stroke='#2B8A83' stroke-width='2.5' stroke-linecap='round'/><line x1='100' y1='100' x2='153' y2='114' stroke='#26313A' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='3.5' fill='#26313A'/></svg>",
      steps:[
        "先看长针（分针）：它指着 6，说明是半时。",
        "再看短针（时针）：它走过了 3，在 3 和 4 中间。",
        "分针指 6、时针走过 3，就是 3 时半。"
      ],
      answer:"钟面上是 3 时半（3:30）。",
      variants:[
        {type:"fill", html:"分针指着 6，时针走过 7，是（ ）时半。", answer:7, unit:"时", analysis:"分针指 6 是半时，时针走过几就是几时半，所以是 7 时半。"},
        {type:"judge", html:"分针指着 6 的时候，钟面上正好是几时整。", answer:false, analysis:"分针指 6 时是几时半，不是几时整；分针指 12 才是整时，所以错。"}
      ]
    },
    {
      lead:"例3",
      html:"认一认这个钟面：它表示几时？<svg class='fig' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><circle cx='100' cy='100' r='82' fill='#FCFDF9' stroke='#26313A' stroke-width='2'/><text x='100' y='32' font-size='14' fill='#26313A' text-anchor='middle'>12</text><text x='168' y='105' font-size='14' fill='#26313A' text-anchor='middle'>3</text><text x='100' y='180' font-size='14' fill='#26313A' text-anchor='middle'>6</text><text x='32' y='105' font-size='14' fill='#26313A' text-anchor='middle'>9</text><line x1='100' y1='100' x2='100' y2='166' stroke='#2B8A83' stroke-width='2.5' stroke-linecap='round'/><line x1='100' y1='100' x2='47' y2='86' stroke='#26313A' stroke-width='4' stroke-linecap='round'/><circle cx='100' cy='100' r='3.5' fill='#26313A'/></svg>",
      steps:[
        "看长针（分针）：它指着 6，说明是半时。",
        "看短针（时针）：它走过了 9，在 9 和 10 中间。",
        "分针指 6、时针走过 9，就是 9 时半。"
      ],
      answer:"钟面上是 9 时半（9:30）。",
      variants:[
        {type:"fill", html:"时针指着 12，分针指着 12，是（ ）时整。", answer:12, unit:"时", analysis:"分针指 12 是整时，时针指 12，就是 12 时整。"},
        {type:"fill", html:"时针走过 9，分针指着 6，是（ ）时半。", answer:9, unit:"时", analysis:"分针指 6 是半时，时针走过 9，就是 9 时半。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"时针指着 2，分针指着 12，是（ ）时整。", answer:2, unit:"时", analysis:"分针指 12 是整时，时针指几就是几时，所以是 2 时。"},
    {type:"fill", html:"时针走过 4，分针指着 6，是（ ）时半。", answer:4, unit:"时", analysis:"分针指 6 是半时，时针走过 4，就是 4 时半。"},
    {type:"choice", html:"分针指着几，表示的是整时？", options:["12","6","3"], answer:0, analysis:"分针指着 12 时是整时，指着 6 时是半时。"},
    {type:"judge", html:"6 时半的时候，分针正好指着 6。", answer:true, analysis:"几时半的时候分针都指着 6，所以 6 时半分针指 6，说法正确。"}
  ],
  quiz:[
    {type:"fill", html:"时针指着 9，分针指着 12，是（ ）时整。", answer:9, unit:"时", analysis:"分针指 12 是整时，时针指 9，就是 9 时整。"},
    {type:"fill", html:"时针走过 10，分针指着 6，是（ ）时半。", answer:10, unit:"时", analysis:"分针指 6 是半时，时针走过 10，就是 10 时半。"},
    {type:"choice", html:"8 时整的时候，分针指着几？", options:["12","6","8"], answer:0, analysis:"几时整的时候分针都指着 12，所以 8 时整分针指 12。"},
    {type:"judge", html:"分针指着 6，时针走过几，就是几时半。", answer:true, analysis:"这是认半时的方法，分针指 6、时针走过几就是几时半，说法正确。"},
    {type:"fill", html:"时针指着 12，分针指着 6，是（ ）时半。", answer:12, unit:"时", analysis:"分针指 6 是半时，时针走过 12，就是 12 时半。"}
  ],
  gen:{type:"clock", n:4}
}
];
