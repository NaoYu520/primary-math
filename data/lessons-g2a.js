/* 数据：二年级 A 辑（g2-02 至 g2-06） */
var L_G2A = [
{
  id:"g2-02", grade:2, idx:2,
  title:"图形规律进阶",
  tag:"规律推理",
  goal:"学会从形状、颜色、方向、个数四个方面找图形的变化规律。",
  points:[
    "找图形规律时，先把图形按顺序排好，一个对着一个比，看是形状、颜色、方向还是个数在变。",
    "旋转规律：图形按固定方向（顺时针或逆时针）每次转固定角度，下一个接着往同一方向转。",
    "增减规律：图形的个数或大小每次多几、少几，按同样的变化接着画下一个。",
    "交替规律：几种形状、颜色按固定顺序重复出现，如 三角、正方、圆 轮流排。"
  ],
  examples:[
    {
      lead:"例1",
      html:"按规律，第4个图里的箭头应该指向哪个方向？<svg class='fig' viewBox='0 0 445 90' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='10' width='95' height='70' rx='8' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='118' y='10' width='95' height='70' rx='8' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='228' y='10' width='95' height='70' rx='8' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='338' y='10' width='95' height='70' rx='8' fill='#FCFDF9' stroke='#DFE2D6'/><polygon points='55,25 44,50 50,50 50,62 60,62 60,50 66,50' fill='#2B8A83'/><polygon points='185,45 160,34 160,40 148,40 148,50 160,50 160,56' fill='#2B8A83'/><polygon points='275,65 264,40 270,40 270,28 280,28 280,40 286,40' fill='#2B8A83'/><text x='385' y='55' font-size='30' fill='#8A949C' text-anchor='middle'>?</text></svg>",
      steps:[
        "看三个箭头的方向：第1个指向上，第2个指向右，第3个指向下。",
        "箭头是按顺时针方向转的：上 → 右 → 下，每次正好转了 90°。",
        "照这个规律，下一个要从“下”再顺时针转 90°，就指向左方。"
      ],
      answer:"第4个箭头指向左方。",
      variants:[
        {type:"choice", html:"上面这组箭头的规律是每次顺时针旋转，第4个箭头应指向？", options:["向上","向左","向下"], answer:1, analysis:"上→右→下，顺时针每次转90°，下一个从“下”再转90°就指向左。"},
        {type:"judge", html:"一组图形每次按同一个方向旋转时，下一个图形也要接着往同一个方向转。", answer:true, analysis:"旋转规律的关键就是方向不变、角度固定，所以说法正确。"}
      ]
    },
    {
      lead:"例2",
      html:"数一数每格里圆的个数，按规律第4格里应画几个圆？<svg class='fig' viewBox='0 0 445 90' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='10' width='95' height='70' rx='8' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='118' y='10' width='95' height='70' rx='8' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='228' y='10' width='95' height='70' rx='8' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='338' y='10' width='95' height='70' rx='8' fill='#FCFDF9' stroke='#DFE2D6'/><circle cx='55' cy='45' r='12' fill='#2B8A83'/><circle cx='157' cy='45' r='12' fill='#E9A23B'/><circle cx='173' cy='45' r='12' fill='#E9A23B'/><circle cx='264' cy='45' r='12' fill='#3E6FB2'/><circle cx='275' cy='45' r='12' fill='#3E6FB2'/><circle cx='286' cy='45' r='12' fill='#3E6FB2'/><text x='385' y='55' font-size='30' fill='#8A949C' text-anchor='middle'>?</text></svg>",
      steps:[
        "按顺序数每格里圆的个数：第1格 1 个，第2格 2 个，第3格 3 个。",
        "每往后一格，圆就多 1 个：1 → 2 → 3。",
        "所以第4格要比第3格再多 1 个，是 3＋1＝4 个。"
      ],
      answer:"第4格里应画 4 个圆。",
      variants:[
        {type:"fill", html:"按规律，下一个数是几？2，4，6，（ ）", answer:8, analysis:"每次多 2：2→4→6，下一个是 6＋2＝8。"},
        {type:"choice", html:"按规律，下一个数是几？10，8，6，（ ）", options:["2","1","0"], answer:2, analysis:"每次少 2：10→8→6，下一个是 6－2＝0。"}
      ]
    },
    {
      lead:"例3",
      html:"下面图形按固定顺序重复出现，第6个应该是什么？<svg class='fig' viewBox='0 0 440 60' xmlns='http://www.w3.org/2000/svg'><polygon points='40,15 27,40 53,40' fill='#2B8A83'/><rect x='103' y='18' width='24' height='24' fill='#E9A23B'/><circle cx='190' cy='30' r='13' fill='#3E6FB2'/><polygon points='265,15 252,40 278,40' fill='#2B8A83'/><rect x='328' y='18' width='24' height='24' fill='#E9A23B'/><text x='415' y='38' font-size='24' fill='#8A949C' text-anchor='middle'>?</text></svg>",
      steps:[
        "按顺序看形状：三角形、正方形、圆、三角形、正方形……",
        "三种形状按“三角、正方、圆”的顺序不断重复，是一组循环。",
        "同时颜色也跟着走：三角是蓝绿色、正方形是暖黄色、圆是靛蓝色。",
        "正方形后面正好又轮到“圆”，颜色是靛蓝色。"
      ],
      answer:"第6个是靛蓝色的圆。",
      variants:[
        {type:"choice", html:"按规律，下一个图形是什么？△ ○ □ △ ○ □ △ ○ ？", options:["△","○","□"], answer:2, analysis:"△○□ 三个一组重复，○ 后面是 □。"},
        {type:"judge", html:"找循环排列的下一个图形时，只要看颜色就够了，不用看形状。", answer:false, analysis:"循环规律里形状和颜色是绑在一起重复的，必须两个一起看，只看颜色会猜错。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"按规律填数：1，3，5，（ ）", answer:7, analysis:"每次多 2：1→3→5，下一个 5＋2＝7。"},
    {type:"choice", html:"一个小旗子按顺时针方向每次转一格，转到第4次时，旗子的方向和下面哪个一样？（第1次朝上）", options:["朝右","朝左","朝下"], answer:2, analysis:"上→右→下，顺时针转3次后第4次指向下。"},
    {type:"judge", html:"找图形规律时，把图形按顺序排好、一个对着一个比较，更容易发现变化。", answer:true, analysis:"排队对齐比较是找规律的好办法，说法正确。"},
    {type:"fill", html:"按规律，下一个图形是：□ △ ○ □ △ ○ □ △ ？（填 △、○ 或 □）", answer:"○", analysis:"□△○ 三个一组重复，△ 后面是 ○。"},
    {type:"choice", html:"灯笼按 蓝绿、暖黄、靛蓝、蓝绿、暖黄、？ 的顺序变色，下一盏是什么颜色？", options:["蓝绿","暖黄","靛蓝"], answer:2, analysis:"三种颜色循环，蓝绿→暖黄→靛蓝，暖黄后面是靛蓝。"},
    {type:"fill", html:"按规律填数：10，8，6，（ ）", answer:4, analysis:"每次少 2：10→8→6，下一个 6－2＝4。"},
    {type:"judge", html:"图形序列是 △ ○ △ ○ △，那么下一个一定是 △。", answer:false, analysis:"△ 和 ○ 交替出现，△ 后面应是 ○，不是 △。"}
  ],
  quiz:[
    {type:"choice", html:"箭头按 上→右→下 顺时针旋转，下一个箭头指向？", options:["向上","向左","向右"], answer:1, analysis:"顺时针再转90°，从“下”转到“左”。"},
    {type:"fill", html:"按规律填数：3，6，9，（ ）", answer:12, analysis:"每次多 3：3→6→9，下一个 9＋3＝12。"},
    {type:"judge", html:"一组图形按固定顺序重复出现时，同样的形状和颜色会反复出现。", answer:true, analysis:"循环规律就是按组重复，说法正确。"},
    {type:"fill", html:"按规律，下一个图形是：○ △ □ ○ △ □ ○ △ ？（填 △、○ 或 □）", answer:"□", analysis:"○△□ 三个一组重复，△ 后面是 □。"},
    {type:"choice", html:"方框里小圆的个数依次是 1、2、3、4，照这样第5个方框里有几个圆？", options:["4","5","6"], answer:1, analysis:"每次多1个，4后面是5。"}
  ],
  gen:null
},
{
  id:"g2-03", grade:2, idx:3,
  title:"数列规律",
  tag:"规律推理",
  goal:"学会找数列的排列规律，会按规律填出下一个数。",
  points:[
    "等差数列：相邻两个数的差都一样（每次加几或减几），先算相邻差，找到那个固定不变的差。",
    "相邻差在变化：差每次多 1（或少 1），如 1，2，4，7，11… 差是 1，2，3，4。",
    "等比雏形：后一个数是前一个数的 2 倍（或一半），如 1，2，4，8…",
    "隔项数列：单数位置、双数位置各成一组规律，要拆开分别看。"
  ],
  examples:[
    {
      lead:"例1",
      html:"找规律填数：2，5，8，11，（ ）",
      steps:[
        "先算相邻两个数的差：5－2＝3，8－5＝3，11－8＝3。",
        "每次的差都是 3，说明这是“每次加 3”的等差数列。",
        "下一个数用 11＋3＝14。"
      ],
      answer:"括号里填 14。",
      variants:[
        {type:"fill", html:"找规律填数：3，7，11，15，（ ）", answer:19, analysis:"相邻差都是 4：3→7→11→15，下一个 15＋4＝19。"},
        {type:"choice", html:"找规律填数：100，90，80，（ ）", options:["70","60","75"], answer:0, analysis:"每次少 10：100→90→80，下一个 80－10＝70。"}
      ]
    },
    {
      lead:"例2",
      html:"找规律填数：1，2，4，7，11，（ ）",
      steps:[
        "算相邻差：2－1＝1，4－2＝2，7－4＝3，11－7＝4。",
        "差依次是 1，2，3，4，每次比前一个差多 1。",
        "下一个差应是 5，所以括号里是 11＋5＝16。"
      ],
      answer:"括号里填 16。",
      variants:[
        {type:"fill", html:"找规律填数：1，3，6，10，（ ）", answer:15, analysis:"相邻差是 2，3，4，下一个差是 5，10＋5＝15。"},
        {type:"judge", html:"数列 1，2，4，8 的规律是每次加 1。", answer:false, analysis:"2＝1×2，4＝2×2，8＝4×2，是每次翻倍，不是每次加 1。"}
      ]
    },
    {
      lead:"例3",
      html:"找规律填数：1，2，4，8，（ ）",
      steps:[
        "看看后一个数和前一个数的关系：2＝1×2，4＝2×2，8＝4×2。",
        "后一个数总是前一个数的 2 倍（这就是“等比”的雏形）。",
        "下一个数是 8×2＝16。"
      ],
      answer:"括号里填 16。",
      variants:[
        {type:"fill", html:"找规律填数：3，6，12，（ ）", answer:24, analysis:"后一个是前一个的 2 倍：3→6→12，下一个 12×2＝24。"},
        {type:"choice", html:"找规律填数：1，5，2，5，3，5，（ ）", options:["4","5","6"], answer:0, analysis:"双数位置都是 5；单数位置是 1，2，3，下一个单数位置是 4。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"找规律填数：4，8，12，16，（ ）", answer:20, analysis:"每次加 4，16＋4＝20。"},
    {type:"fill", html:"找规律填数：2，3，5，8，（ ）", answer:12, analysis:"相邻差是 1，2，3，下一个差是 4，8＋4＝12。"},
    {type:"choice", html:"找规律填数：2，4，8，16，（ ）", options:["20","24","32"], answer:2, analysis:"后一个是前一个的 2 倍，16×2＝32。"},
    {type:"judge", html:"等差数列里，相邻两个数的差都相同。", answer:true, analysis:"这正是等差数列的特点，说法正确。"},
    {type:"fill", html:"找规律填数：20，17，14，11，（ ）", answer:8, analysis:"每次少 3，11－3＝8。"},
    {type:"fill", html:"找规律填数：2，10，4，10，6，10，（ ）", answer:8, analysis:"双数位置都是 10；单数位置 2，4，6，下一个是 8。"},
    {type:"choice", html:"找规律填数：5，10，15，20，（ ）", options:["22","25","30"], answer:1, analysis:"每次加 5，20＋5＝25。"}
  ],
  quiz:[
    {type:"fill", html:"找规律填数：6，12，18，（ ）", answer:24, analysis:"每次加 6，18＋6＝24。"},
    {type:"fill", html:"找规律填数：1，2，4，7，（ ）", answer:11, analysis:"相邻差是 1，2，3，下一个差是 4，7＋4＝11。"},
    {type:"choice", html:"找规律填数：1，3，9，（ ）", options:["12","18","27"], answer:2, analysis:"后一个是前一个的 3 倍，9×3＝27。"},
    {type:"judge", html:"数列 2，4，6，8，10 的规律是每次加 2。", answer:true, analysis:"相邻差都是 2，说法正确。"},
    {type:"fill", html:"找规律填数：100，95，90，（ ）", answer:85, analysis:"每次少 5，90－5＝85。"}
  ],
  gen:null
},
{
  id:"g2-04", grade:2, idx:4,
  title:"间隔问题综合（植树/锯木/敲钟/爬楼）",
  tag:"典型应用",
  goal:"分清不同间隔问题里“段数”和“个数”的关系，正确列式。",
  points:[
    "两端都种：棵数＝段数＋1（路的两头都有树）。",
    "一端种：棵数＝段数；两端都不种：棵数＝段数－1；封闭图形（圆、方形一圈）：棵数＝段数。",
    "锯木头：锯成的段数＝锯的次数＋1，所以次数＝段数－1。",
    "敲钟：敲的次数比间隔数多 1，敲 3 下中间只有 2 个间隔。",
    "爬楼梯：走的楼梯层数＝终点楼层－起点楼层，从 1 楼到 3 楼只走 2 层。"
  ],
  examples:[
    {
      lead:"例1",
      html:"一条小路长 12 米，在路的一边每隔 3 米种一棵树，两端都种。一共要种多少棵树？<svg class='fig' viewBox='0 0 400 90' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='55' x2='370' y2='55' stroke='#8A949C' stroke-width='2'/><polygon points='30,33 21,55 39,55' fill='#2B8A83'/><polygon points='115,33 106,55 124,55' fill='#2B8A83'/><polygon points='200,33 191,55 209,55' fill='#2B8A83'/><polygon points='285,33 276,55 294,55' fill='#2B8A83'/><polygon points='370,33 361,55 379,55' fill='#2B8A83'/><text x='72' y='76' font-size='11' fill='#8A949C' text-anchor='middle'>3米</text><text x='157' y='76' font-size='11' fill='#8A949C' text-anchor='middle'>3米</text><text x='242' y='76' font-size='11' fill='#8A949C' text-anchor='middle'>3米</text><text x='327' y='76' font-size='11' fill='#8A949C' text-anchor='middle'>3米</text></svg>",
      steps:[
        "先算段数：路长 12 米，每隔 3 米一段，12÷3＝4 段。",
        "两端都种树，棵数＝段数＋1（两头各多算一棵）。",
        "4＋1＝5，所以一共要种 5 棵树。"
      ],
      answer:"一共要种 5 棵树。",
      variants:[
        {type:"fill", html:"一条路长 20 米，在路的一边每隔 4 米插一面彩旗，两端都插，共插（ ）面。", answer:6, unit:"面", analysis:"20÷4＝5 段，两端都插：5＋1＝6 面。"},
        {type:"choice", html:"走廊长 9 米，每隔 3 米放一盆花，两端都放，共放几盆？", options:["3 盆","4 盆","5 盆"], answer:1, analysis:"9÷3＝3 段，两端都放：3＋1＝4 盆。"}
      ]
    },
    {
      lead:"例2",
      html:"把一根木头锯成 4 段，每锯一次要 2 分钟，一共要几分钟？<svg class='fig' viewBox='0 0 400 80' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='28' width='340' height='26' rx='6' fill='#F6D79E' stroke='#E9A23B' stroke-width='2'/><line x1='115' y1='22' x2='115' y2='60' stroke='#D8664E' stroke-width='2' stroke-dasharray='4 3'/><line x1='200' y1='22' x2='200' y2='60' stroke='#D8664E' stroke-width='2' stroke-dasharray='4 3'/><line x1='285' y1='22' x2='285' y2='60' stroke='#D8664E' stroke-width='2' stroke-dasharray='4 3'/><text x='115' y='18' font-size='11' fill='#D8664E' text-anchor='middle'>锯</text><text x='200' y='18' font-size='11' fill='#D8664E' text-anchor='middle'>锯</text><text x='285' y='18' font-size='11' fill='#D8664E' text-anchor='middle'>锯</text></svg>",
      steps:[
        "锯木头时，锯成的段数＝锯的次数＋1，反过来：次数＝段数－1。",
        "要锯成 4 段，需要锯 4－1＝3 次。",
        "每锯一次 2 分钟，3 次一共 3×2＝6 分钟。"
      ],
      answer:"一共要 6 分钟。",
      variants:[
        {type:"fill", html:"把一根木头锯成 5 段，要锯（ ）次。", answer:4, unit:"次", analysis:"次数＝段数－1，5－1＝4 次。"},
        {type:"choice", html:"一根木头锯成 3 段，每锯一次要 3 分钟，一共要几分钟？", options:["6 分钟","9 分钟","12 分钟"], answer:0, analysis:"锯 3 段要锯 3－1＝2 次，2×3＝6 分钟。"}
      ]
    },
    {
      lead:"例3",
      html:"小明从 1 楼走到 3 楼用了 2 分钟。照这样的速度，他从 1 楼走到 6 楼要几分钟？<svg class='fig' viewBox='0 0 280 110' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='92' width='90' height='6' fill='#8A949C'/><text x='65' y='86' font-size='12' fill='#26313A' text-anchor='middle'>1楼</text><rect x='100' y='57' width='90' height='6' fill='#8A949C'/><text x='145' y='51' font-size='12' fill='#26313A' text-anchor='middle'>2楼</text><rect x='180' y='22' width='90' height='6' fill='#8A949C'/><text x='225' y='16' font-size='12' fill='#26313A' text-anchor='middle'>3楼</text></svg>",
      steps:[
        "从 1 楼到 3 楼，走的楼梯层数＝3－1＝2 层，用了 2 分钟，所以走 1 层要 1 分钟。",
        "从 1 楼到 6 楼，走的楼梯层数＝6－1＝5 层。",
        "每层 1 分钟，5 层就要 5×1＝5 分钟。"
      ],
      answer:"从 1 楼走到 6 楼要 5 分钟。",
      variants:[
        {type:"fill", html:"从 1 楼走到 4 楼，要走（ ）层楼梯。", answer:3, unit:"层", analysis:"楼梯层数＝终点楼层－起点楼层，4－1＝3 层。"},
        {type:"choice", html:"时钟敲 4 下，3 秒钟敲完（每两下之间的停顿一样长）。照这样，敲 6 下要几秒？", options:["5 秒","6 秒","7 秒"], answer:0, analysis:"敲 4 下中间有 4－1＝3 个间隔，共 3 秒，每个间隔 1 秒；敲 6 下有 5 个间隔，要 5 秒。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"一条路长 18 米，在路的一边每隔 2 米种一棵树，两端都种，共种（ ）棵。", answer:10, unit:"棵", analysis:"18÷2＝9 段，两端都种：9＋1＝10 棵。"},
    {type:"fill", html:"把一根木头锯成 6 段，要锯（ ）次。", answer:5, unit:"次", analysis:"次数＝段数－1，6－1＝5 次。"},
    {type:"choice", html:"时钟敲 5 下，4 秒钟敲完。照这样，敲 8 下要几秒？", options:["7 秒","8 秒","9 秒"], answer:0, analysis:"敲 5 下有 4 个间隔＝4 秒，每个间隔 1 秒；敲 8 下有 7 个间隔，要 7 秒。"},
    {type:"judge", html:"路的两端都种树时，树的棵数比段数多 1。", answer:true, analysis:"两端都种：棵数＝段数＋1，说法正确。"},
    {type:"fill", html:"小亮从 2 楼走到 5 楼，要走（ ）层楼梯。", answer:3, unit:"层", analysis:"楼梯层数＝5－2＝3 层。"},
    {type:"choice", html:"一个圆形花坛周长 10 米，沿花坛边每隔 2 米摆一盆花，共摆几盆？", options:["4 盆","5 盆","6 盆"], answer:1, analysis:"封闭图形一圈，盆数＝段数，10÷2＝5 段＝5 盆。"},
    {type:"judge", html:"锯木头时，锯成的段数和锯的次数一样多。", answer:false, analysis:"段数＝次数＋1，段数比次数多 1，所以错。"}
  ],
  quiz:[
    {type:"fill", html:"一条路长 15 米，在路的一边每隔 5 米种一棵树，两端都种，共种（ ）棵。", answer:4, unit:"棵", analysis:"15÷5＝3 段，两端都种：3＋1＝4 棵。"},
    {type:"fill", html:"把一根木头锯成 8 段，要锯（ ）次。", answer:7, unit:"次", analysis:"次数＝段数－1，8－1＝7 次。"},
    {type:"choice", html:"从 1 楼到 4 楼走了 3 层楼梯，照这样，从 1 楼到 7 楼要走几层？", options:["6 层","7 层","8 层"], answer:0, analysis:"楼梯层数＝终点－起点，7－1＝6 层。"},
    {type:"judge", html:"在圆形池塘边种树，种的棵数正好等于分成的段数。", answer:true, analysis:"封闭图形：棵数＝段数，说法正确。"},
    {type:"choice", html:"时钟敲 3 下，2 秒钟敲完。照这样，敲 5 下要几秒？", options:["4 秒","5 秒","6 秒"], answer:0, analysis:"敲 3 下有 2 个间隔＝2 秒，每个间隔 1 秒；敲 5 下有 4 个间隔，要 4 秒。"}
  ],
  gen:null
},
{
  id:"g2-05", grade:2, idx:5,
  title:"排队问题图解",
  tag:"典型应用",
  goal:"学会画圆圈图，分清重复计数要减 1、漏算要补，正确求排队人数。",
  points:[
    "画圆圈图：用 ○ 表示同学，把题目里说的那个小朋友涂色标出，前面、后面分开数。",
    "从前数排第几、从后数排第几求总数：总人数＝从前数到的第几个＋从后数到的第几个－1（自己被算了两次，要减 1）。",
    "求两人之间有几人：后面的序数－前面的序数－1（两端的两个人都不算）。",
    "知道排第几、后面还有几人求总数：总人数＝排第几＋后面的人数（两部分不重复，就不用减 1）。"
  ],
  examples:[
    {
      lead:"例1",
      html:"小朋友排队买冰淇淋。从前数小明排第 4，从后数小明排第 5。这一队一共有多少人？<svg class='fig' viewBox='0 0 400 70' xmlns='http://www.w3.org/2000/svg'><circle cx='30' cy='35' r='13' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='72' cy='35' r='13' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='114' cy='35' r='13' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='156' cy='35' r='13' fill='#E9A23B'/><text x='156' y='39' font-size='11' fill='#fff' text-anchor='middle'>明</text><circle cx='198' cy='35' r='13' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='240' cy='35' r='13' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='282' cy='35' r='13' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='324' cy='35' r='13' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><text x='30' y='62' font-size='11' fill='#8A949C' text-anchor='middle'>前</text><text x='324' y='62' font-size='11' fill='#8A949C' text-anchor='middle'>后</text></svg>",
      steps:[
        "画图：从前数到小明有 4 人，从后数到小明有 5 人。",
        "先把两个数加起来：4＋5＝9。",
        "但小明自己被从前数了一次、又从后数了一次，多算了 1 次，要减去：9－1＝8 人。"
      ],
      answer:"这一队一共有 8 人。",
      variants:[
        {type:"fill", html:"从前数小红排第 3，从后数小红排第 6，这一队共有（ ）人。", answer:8, unit:"人", analysis:"3＋6＝9，小红重复数了一次要减 1，9－1＝8 人。"},
        {type:"choice", html:"从前数小刚排第 5，从后数小刚排第 2，这一队共几人？", options:["6 人","7 人","8 人"], answer:0, analysis:"5＋2＝7，减重复数的 1 次，7－1＝6 人。"}
      ]
    },
    {
      lead:"例2",
      html:"15 个小朋友排成一队。从前往后数小红排第 3，小刚排第 10。小红和小刚之间有几人？<svg class='fig' viewBox='0 0 560 70' xmlns='http://www.w3.org/2000/svg'><circle cx='20' cy='35' r='11' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='56' cy='35' r='11' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='92' cy='35' r='11' fill='#E9A23B'/><text x='92' y='39' font-size='10' fill='#fff' text-anchor='middle'>红</text><circle cx='128' cy='35' r='11' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='164' cy='35' r='11' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='200' cy='35' r='11' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='236' cy='35' r='11' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='272' cy='35' r='11' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='308' cy='35' r='11' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='344' cy='35' r='11' fill='#3E6FB2'/><text x='344' y='39' font-size='10' fill='#fff' text-anchor='middle'>刚</text><circle cx='380' cy='35' r='11' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='416' cy='35' r='11' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='452' cy='35' r='11' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='488' cy='35' r='11' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='524' cy='35' r='11' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/></svg>",
      steps:[
        "画图标出：小红在第 3 个，小刚在第 10 个。",
        "先算 10－3＝7，这里把小刚自己也算进去了。",
        "求“之间”的人，小红和小刚两端都不算，再减 1：7－1＝6 人。"
      ],
      answer:"小红和小刚之间有 6 人。",
      variants:[
        {type:"fill", html:"排队时小华排第 2，小军排第 9，他们之间有（ ）人。", answer:6, unit:"人", analysis:"9－2＝7，再减去两端的小军自己，7－1＝6 人。"},
        {type:"judge", html:"求两人之间有几人，要用后面的序数减去前面的序数，再减 1。", answer:true, analysis:"两端的两个人都不算在“之间”里，所以要再减 1，说法正确。"}
      ]
    },
    {
      lead:"例3",
      html:"小朋友排队。从前往后数小丽排第 5，她后面还有 6 人。这一队一共有多少人？<svg class='fig' viewBox='0 0 480 70' xmlns='http://www.w3.org/2000/svg'><circle cx='25' cy='35' r='12' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='65' cy='35' r='12' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='105' cy='35' r='12' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='145' cy='35' r='12' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='185' cy='35' r='12' fill='#E9A23B'/><text x='185' y='39' font-size='11' fill='#fff' text-anchor='middle'>丽</text><circle cx='225' cy='35' r='12' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='265' cy='35' r='12' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='305' cy='35' r='12' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='345' cy='35' r='12' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='385' cy='35' r='12' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/><circle cx='425' cy='35' r='12' fill='#FCFDF9' stroke='#8A949C' stroke-width='2'/></svg>",
      steps:[
        "从前往后数到小丽是 5 人，小丽自己就在这 5 人里面。",
        "小丽后面还有 6 人，这 6 人和前面的 5 人没有重复。",
        "把两部分合起来：5＋6＝11 人。"
      ],
      answer:"这一队一共有 11 人。",
      variants:[
        {type:"fill", html:"从前往后数小明排第 4，他后面还有 5 人，这一队共有（ ）人。", answer:9, unit:"人", analysis:"前面 4 人（含小明）加上后面 5 人，4＋5＝9 人。"},
        {type:"choice", html:"从前往后数小芳排第 6，她后面还有 3 人，这一队共几人？", options:["8 人","9 人","10 人"], answer:1, analysis:"6＋3＝9 人。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"从前数小军排第 4，从后数小军排第 4，这一队共有（ ）人。", answer:7, unit:"人", analysis:"4＋4＝8，小军重复数了一次，8－1＝7 人。"},
    {type:"choice", html:"12 人排队，从前往后数小华排第 2，小刚排第 8，他们之间有几人？", options:["5 人","6 人","7 人"], answer:0, analysis:"8－2＝6，再减两端的小刚自己，6－1＝5 人。"},
    {type:"judge", html:"从前数第 3、从后数第 3，这一队一共 6 人。", answer:false, analysis:"3＋3＝6，再减重复的 1 次，实际是 5 人，不是 6 人。"},
    {type:"fill", html:"从前往后数小亮排第 7，他后面还有 4 人，这一队共有（ ）人。", answer:11, unit:"人", analysis:"7＋4＝11 人。"},
    {type:"choice", html:"从前数小燕排第 5，从后数小燕排第 3，这一队共几人？", options:["7 人","8 人","9 人"], answer:0, analysis:"5＋3＝8，减重复的 1 次，8－1＝7 人。"},
    {type:"fill", html:"一队共 10 人，从前往后数小月排第 4，那么从后往前数小月排第（ ）。", answer:7, analysis:"她后面有 10－4＝6 人，从后数就要数到她是第 6＋1＝7 个。"},
    {type:"judge", html:"算总人数时，如果自己被从前、从后各数了一次，就要减去重复的那 1 次。", answer:true, analysis:"重复计数要减 1，这是排队问题的关键，说法正确。"}
  ],
  quiz:[
    {type:"fill", html:"从前数小涛排第 6，从后数小涛排第 3，这一队共有（ ）人。", answer:8, unit:"人", analysis:"6＋3＝9，减重复的 1 次，9－1＝8 人。"},
    {type:"choice", html:"8 人排队，从前往后数小红排第 1，小明排第 8，他们之间有几人？", options:["6 人","7 人","8 人"], answer:0, analysis:"8－1＝7，再减两端的小明自己，7－1＝6 人。"},
    {type:"fill", html:"从前往后数小琴排第 5，她后面还有 5 人，这一队共有（ ）人。", answer:10, unit:"人", analysis:"5＋5＝10 人。"},
    {type:"judge", html:"求两人之间有几人时，要把这两个人自己也算进去。", answer:false, analysis:"“之间”指两人中间的人，两端不算，所以错。"},
    {type:"choice", html:"一队共 9 人，从前往后数小刚排第 3，那么从后往前数小刚排第几？", options:["第 6","第 7","第 8"], answer:1, analysis:"他后面有 9－3＝6 人，从后数是第 6＋1＝7 个。"}
  ],
  gen:null
},
{
  id:"g2-06", grade:2, idx:6,
  title:"移多补少",
  tag:"典型应用",
  goal:"学会把多出来的部分平均分，让两人变得同样多。",
  points:[
    "先算两人相差多少：多的－少的＝相差数。",
    "要让两人一样多，只要把相差数的一半给少的一方：移动数＝相差数÷2。",
    "反过来：知道给了几个后两人一样多，原来就相差“移动数×2”。",
    "画图一一对应，把多出的部分平分成两份，一份移走，两人就相等。"
  ],
  examples:[
    {
      lead:"例1",
      html:"小明有 12 个玻璃球，小红有 4 个。小明给小红几个后，两人的玻璃球就同样多？<svg class='fig' viewBox='0 0 420 100' xmlns='http://www.w3.org/2000/svg'><text x='14' y='29' font-size='12' fill='#26313A'>小明</text><circle cx='55' cy='25' r='11' fill='#2B8A83'/><circle cx='87' cy='25' r='11' fill='#2B8A83'/><circle cx='119' cy='25' r='11' fill='#2B8A83'/><circle cx='151' cy='25' r='11' fill='#2B8A83'/><circle cx='183' cy='25' r='11' fill='#2B8A83'/><circle cx='215' cy='25' r='11' fill='#2B8A83'/><circle cx='247' cy='25' r='11' fill='#2B8A83'/><circle cx='279' cy='25' r='11' fill='#2B8A83'/><circle cx='311' cy='25' r='11' fill='#F6D79E' stroke='#E9A23B' stroke-width='2'/><circle cx='343' cy='25' r='11' fill='#F6D79E' stroke='#E9A23B' stroke-width='2'/><circle cx='375' cy='25' r='11' fill='#F6D79E' stroke='#E9A23B' stroke-width='2'/><circle cx='407' cy='25' r='11' fill='#F6D79E' stroke='#E9A23B' stroke-width='2'/><text x='14' y='79' font-size='12' fill='#26313A'>小红</text><circle cx='55' cy='75' r='11' fill='#E9A23B'/><circle cx='87' cy='75' r='11' fill='#E9A23B'/><circle cx='119' cy='75' r='11' fill='#E9A23B'/><circle cx='151' cy='75' r='11' fill='#E9A23B'/></svg>",
      steps:[
        "先算相差：12－4＝8 个，小明比小红多 8 个。",
        "多出的 8 个不能都给小红，要平均分成两份：8÷2＝4。",
        "把其中 4 个给小红：小明剩 12－4＝8 个，小红有 4＋4＝8 个，两人一样多。"
      ],
      answer:"小明给小红 4 个后，两人同样多。",
      variants:[
        {type:"fill", html:"甲有 15 张贴画，乙有 5 张，甲给乙（ ）张后两人一样多。", answer:5, unit:"张", analysis:"相差 15－5＝10 张，移动数＝10÷2＝5 张。"},
        {type:"choice", html:"小红有 10 块糖，小丽有 6 块，小红给小丽几块后两人一样多？", options:["2 块","4 块","6 块"], answer:0, analysis:"相差 10－6＝4 块，4÷2＝2 块。"}
      ]
    },
    {
      lead:"例2",
      html:"从第一个篮子里拿 6 个鸡蛋放到第二个篮子后，两个篮子的鸡蛋就同样多。原来第一个篮子比第二个篮子多几个鸡蛋？",
      steps:[
        "给 6 个后两边一样多，说明原来多出来的部分被平均分成了两份。",
        "给出去的这一份正好是 6 个，另一份还留在原来那个篮子里。",
        "所以原来相差：6×2＝12 个。"
      ],
      answer:"原来第一个篮子比第二个篮子多 12 个鸡蛋。",
      variants:[
        {type:"fill", html:"哥哥给弟弟 3 本书后两人书同样多，原来哥哥比弟弟多（ ）本。", answer:6, unit:"本", analysis:"原来相差＝移动数×2，3×2＝6 本。"},
        {type:"judge", html:"小明给小红 4 个球后两人球同样多，原来两人相差 8 个。", answer:true, analysis:"相差＝移动数×2，4×2＝8 个，说法正确。"}
      ]
    },
    {
      lead:"例3",
      html:"第一筐有 28 个苹果，第二筐有 16 个苹果。从第一筐拿几个到第二筐，两筐就同样多？这时每筐有几个？<svg class='fig' viewBox='0 0 380 100' xmlns='http://www.w3.org/2000/svg'><text x='10' y='30' font-size='12' fill='#26313A'>第一筐</text><rect x='70' y='18' width='200' height='22' fill='#2B8A83'/><text x='170' y='34' font-size='12' fill='#fff' text-anchor='middle'>28个</text><text x='10' y='75' font-size='12' fill='#26313A'>第二筐</text><rect x='70' y='63' width='115' height='22' fill='#E9A23B'/><text x='127' y='79' font-size='12' fill='#fff' text-anchor='middle'>16个</text></svg>",
      steps:[
        "先算相差：28－16＝12 个。",
        "移动数＝相差数÷2：12÷2＝6 个。",
        "拿完后每筐：28－6＝22 个（用 16＋6＝22 个验算，两边相等）。"
      ],
      answer:"从第一筐拿 6 个到第二筐；这时每筐有 22 个苹果。",
      variants:[
        {type:"fill", html:"两堆棋子，一堆 18 个、一堆 10 个，从多的一堆拿（ ）个到少的一堆，两堆就同样多。", answer:4, unit:"个", analysis:"相差 18－10＝8 个，8÷2＝4 个。"},
        {type:"choice", html:"小军给小海 2 张邮票后，两人邮票同样多，这时小海有 10 张。小海原来有几张？", options:["8 张","10 张","12 张"], answer:0, analysis:"小海拿到 2 张后才有 10 张，原来有 10－2＝8 张。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"小华有 14 块饼干，小乐有 8 块，小华给小乐（ ）块后两人一样多。", answer:3, unit:"块", analysis:"相差 14－8＝6 块，6÷2＝3 块。"},
    {type:"choice", html:"一班图书角有 30 本，二班有 20 本，一班给二班几本后两班一样多？", options:["5 本","10 本","15 本"], answer:0, analysis:"相差 30－20＝10 本，10÷2＝5 本。"},
    {type:"judge", html:"要让两人一样多，就把多出来的全部给少的人。", answer:false, analysis:"多出的部分只能分一半给少的人，全给过去反而会让少的人变多，所以错。"},
    {type:"fill", html:"姐姐给妹妹 4 颗糖后两人糖同样多，原来姐姐比妹妹多（ ）颗。", answer:8, unit:"颗", analysis:"原来相差＝移动数×2，4×2＝8 颗。"},
    {type:"choice", html:"小军有 12 张邮票，给小海 2 张后两人一样多，小海原来有几张？", options:["8 张","10 张","14 张"], answer:0, analysis:"小军给完后剩 12－2＝10 张，等于小海原来的加 2 张，所以小海原来有 10－2＝8 张。"},
    {type:"fill", html:"两箱牛奶，一箱 24 盒、一箱 18 盒，从多的一箱拿（ ）盒到少的一箱，两箱同样多。", answer:3, unit:"盒", analysis:"相差 24－18＝6 盒，6÷2＝3 盒。"},
    {type:"judge", html:"移动数＝相差数÷2。", answer:true, analysis:"把多出来的平均分成两份，移走一份，公式正确。"}
  ],
  quiz:[
    {type:"fill", html:"小白兔有 16 个萝卜，小黑兔有 10 个，小白兔给小黑兔（ ）个后两人一样多。", answer:3, unit:"个", analysis:"相差 16－10＝6 个，6÷2＝3 个。"},
    {type:"choice", html:"甲给乙 7 个苹果后两人一样多，原来甲比乙多几个？", options:["7 个","14 个","21 个"], answer:1, analysis:"原来相差＝移动数×2，7×2＝14 个。"},
    {type:"judge", html:"小明有 9 个、小红有 5 个，小明给小红 2 个后两人都是 7 个。", answer:true, analysis:"相差 4 个，4÷2＝2；9－2＝7，5＋2＝7，两人都是 7 个，正确。"},
    {type:"fill", html:"哥哥有 20 元，弟弟有 12 元，哥哥给弟弟（ ）元后两人钱同样多。", answer:4, unit:"元", analysis:"相差 20－12＝8 元，8÷2＝4 元。"},
    {type:"choice", html:"小红给小兰 3 支笔后两人都是 8 支，小红原来有几支？", options:["5 支","8 支","11 支"], answer:2, analysis:"小红给出去 3 支后剩 8 支，原来有 8＋3＝11 支。"}
  ],
  gen:null
}

];
