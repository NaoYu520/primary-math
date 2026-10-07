/* 数据：一年级 g1-02~06 */
var L_G1A = [
{
  id:"g1-02", grade:1, idx:2,
  title:"位置与方向",
  tag:"图形几何",
  goal:"会用上、下、前、后、左、右描述物体所在的位置。",
  points:[
    "上、下：位置高的物体在“上面”，位置低的物体在“下面”。",
    "前、后：面对的方向是前，背对的方向是后。",
    "左、右：和自己右手同一边是右，和左手同一边是左。",
    "说位置时要说清楚“谁在谁的哪一面”，上下左右都是相对的。"
  ],
  examples:[
    {
      lead:"例1",
      html:"看图说一说：书在桌子的哪一面？球在桌子的哪一面？<svg class='fig' viewBox='0 0 300 160' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='95' width='180' height='10' rx='3' fill='#8A949C'/><rect x='75' y='105' width='8' height='40' fill='#8A949C'/><rect x='217' y='105' width='8' height='40' fill='#8A949C'/><rect x='110' y='72' width='46' height='18' rx='3' fill='#E9A23B'/><text x='133' y='85' font-size='11' fill='#fff' text-anchor='middle'>书</text><circle cx='190' cy='135' r='13' fill='#2B8A83'/><text x='190' y='139' font-size='11' fill='#fff' text-anchor='middle'>球</text></svg>",
      steps:[
        "先找到桌子，把它当作参照物。",
        "书放在桌面上，位置比桌子高，所以书在桌子的上面。",
        "球在桌子底下，位置比桌子低，所以球在桌子的下面。"
      ],
      answer:"书在桌子的上面，球在桌子的下面。",
      variants:[
        {type:"fill", html:"看图，小猫在桌子的（ ）面。<svg class='fig' viewBox='0 0 300 140' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='80' width='180' height='10' rx='3' fill='#8A949C'/><rect x='75' y='90' width='8' height='36' fill='#8A949C'/><rect x='217' y='90' width='8' height='36' fill='#8A949C'/><ellipse cx='150' cy='116' rx='18' ry='11' fill='#3E6FB2'/><circle cx='150' cy='100' r='9' fill='#3E6FB2'/></svg>", answer:"下", analysis:"小猫在桌子底下、位置比桌子低，所以小猫在桌子的下面。"},
        {type:"judge", html:"说一个物体在“上面”还是“下面”，要先说好以什么东西为标准。", answer:true, analysis:"上下是相对的，必须说清以谁为标准，比如“书在桌子上面”，所以这句话正确。"}
      ]
    },
    {
      lead:"例2",
      html:"小朋友排队滑滑梯，面朝箭头方向（箭头指的方向是前）。小方在小力的前面，那么小力在小方的哪一面？<svg class='fig' viewBox='0 0 300 90' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='50' r='18' fill='#E9A23B'/><text x='60' y='55' font-size='13' fill='#fff' text-anchor='middle'>华</text><circle cx='150' cy='50' r='18' fill='#3E6FB2'/><text x='150' y='55' font-size='13' fill='#fff' text-anchor='middle'>力</text><circle cx='240' cy='50' r='18' fill='#2B8A83'/><text x='240' y='55' font-size='13' fill='#fff' text-anchor='middle'>方</text><polygon points='290,50 275,42 275,58' fill='#51606A'/><text x='285' y='32' font-size='12' fill='#51606A' text-anchor='middle'>前</text></svg>",
      steps:[
        "箭头指的方向是前，越靠近箭头就排在越前面。",
        "小方在小力的前面，说明小方比小力更靠近箭头。",
        "反过来，小力就在小方相反的方向，也就是后面。"
      ],
      answer:"小力在小方的后面。",
      variants:[
        {type:"choice", html:"排队时，小红前面有 1 个人，后面有 2 个人。这队一共有几个人？", options:["3 人","4 人","5 人"], answer:1, analysis:"前面 1 人＋小红自己 1 人＋后面 2 人＝4 人。"},
        {type:"fill", html:"看图，从前往后数（箭头方向是前），最靠近箭头的小方排第（ ）个。<svg class='fig' viewBox='0 0 300 80' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='45' r='17' fill='#E9A23B'/><text x='60' y='50' font-size='13' fill='#fff' text-anchor='middle'>华</text><circle cx='150' cy='45' r='17' fill='#3E6FB2'/><text x='150' y='50' font-size='13' fill='#fff' text-anchor='middle'>力</text><circle cx='240' cy='45' r='17' fill='#2B8A83'/><text x='240' y='50' font-size='13' fill='#fff' text-anchor='middle'>方</text><polygon points='290,45 275,37 275,53' fill='#51606A'/></svg>", answer:1, analysis:"从箭头（前）那一端开始数，最靠近前面的小方是第 1 个。"}
      ]
    },
    {
      lead:"例3",
      html:"看这一排文具：从左往右看，铅笔在尺子的哪一边？<svg class='fig' viewBox='0 0 300 60' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='16' width='16' height='28' rx='3' fill='#E9A23B'/><text x='38' y='56' font-size='11' fill='#51606A' text-anchor='middle'>铅笔</text><rect x='120' y='22' width='60' height='16' rx='3' fill='#3E6FB2'/><text x='150' y='56' font-size='11' fill='#51606A' text-anchor='middle'>尺子</text><rect x='235' y='18' width='26' height='22' rx='3' fill='#2B8A83'/><text x='248' y='56' font-size='11' fill='#51606A' text-anchor='middle'>橡皮</text></svg>",
      steps:[
        "看图时，我们左手的方向就是图的左边，右手的方向就是图的右边。",
        "找到铅笔和尺子的位置：铅笔在最左边，尺子在中间。",
        "铅笔比尺子更靠近图的左边，所以铅笔在尺子的左边。"
      ],
      answer:"铅笔在尺子的左边。",
      variants:[
        {type:"choice", html:"上题中，橡皮在尺子的哪一边？（从左到右是铅笔、尺子、橡皮）", options:["左边","右边"], answer:1, analysis:"从左到右是铅笔、尺子、橡皮，橡皮在尺子的右边。"},
        {type:"judge", html:"我举起右手时，我的右边和我对面同学的右边是同一边。", answer:false, analysis:"面对面时左右正好相反：我的右边是他的左边，所以这句话错。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"看图，钟放在桌子的（ ）面。<svg class='fig' viewBox='0 0 300 120' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='85' width='180' height='10' rx='3' fill='#8A949C'/><rect x='75' y='95' width='8' height='20' fill='#8A949C'/><rect x='217' y='95' width='8' height='20' fill='#8A949C'/><circle cx='150' cy='55' r='20' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><line x1='150' y1='55' x2='150' y2='43' stroke='#26313A' stroke-width='2'/><line x1='150' y1='55' x2='160' y2='58' stroke='#26313A' stroke-width='2'/></svg>", answer:"上", analysis:"钟放在桌面上、位置比桌子高，所以钟在桌子的上面。"},
    {type:"choice", html:"上楼梯、下楼梯时，我们都要靠自己的（ ）边走。", options:["左","右"], answer:1, analysis:"上下楼梯靠右行，这样大家错开走才安全，所以选右边。"},
    {type:"judge", html:"把铅笔放在文具盒的上面，那么文具盒就在铅笔的下面。", answer:true, analysis:"上下是相对的：铅笔在文具盒上面，反过来文具盒就在铅笔下面，正确。"},
    {type:"fill", html:"排队时，从前往后数豆豆排第 3，他前面有（ ）个人。", answer:2, unit:"个", analysis:"排第 3 说明连他一起前面有 3 人，去掉他自己，前面有 3－1＝2 人。"},
    {type:"choice", html:"看图，从左往右数杯子排第 2；那么从右往左数，杯子排第几？<svg class='fig' viewBox='0 0 300 62' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='18' width='14' height='26' rx='3' fill='#E9A23B'/><text x='37' y='60' font-size='11' fill='#51606A' text-anchor='middle'>铅笔</text><rect x='105' y='14' width='22' height='30' rx='4' fill='#3E6FB2'/><text x='116' y='60' font-size='11' fill='#51606A' text-anchor='middle'>杯子</text><rect x='170' y='22' width='55' height='14' rx='3' fill='#8A949C'/><text x='197' y='60' font-size='11' fill='#51606A' text-anchor='middle'>尺子</text><rect x='250' y='18' width='24' height='20' rx='3' fill='#2B8A83'/><text x='262' y='60' font-size='11' fill='#51606A' text-anchor='middle'>橡皮</text></svg>", options:["第 2 个","第 3 个","第 4 个"], answer:1, analysis:"共 4 件，从右往左数：橡皮第 1、尺子第 2、杯子第 3，所以杯子排第 3。"},
    {type:"judge", html:"汽车前面的灯叫前车灯，那么车尾就在车的后面。", answer:true, analysis:"车头在前，车尾在后，前后相对，这句话正确。"},
    {type:"fill", html:"书架分上下两层，上层放故事书，下层放漫画书。漫画书在故事书的（ ）面。", answer:"下", analysis:"故事书在上层、位置高，漫画书在下层、位置低，所以漫画书在故事书的下面。"}
  ],
  quiz:[
    {type:"choice", html:"看图，小猫在桌子的哪一面？<svg class='fig' viewBox='0 0 300 130' xmlns='http://www.w3.org/2000/svg'><rect x='60' y='78' width='180' height='10' rx='3' fill='#8A949C'/><rect x='75' y='88' width='8' height='34' fill='#8A949C'/><rect x='217' y='88' width='8' height='34' fill='#8A949C'/><ellipse cx='150' cy='110' rx='18' ry='11' fill='#3E6FB2'/><circle cx='150' cy='95' r='9' fill='#3E6FB2'/></svg>", options:["上面","下面"], answer:1, analysis:"小猫在桌子底下，位置比桌子低，所以在下面。"},
    {type:"fill", html:"排队上车，从前往后数小林排第 4，他前面有（ ）人。", answer:3, unit:"人", analysis:"排第 4 连他共 4 人，去掉他自己，前面有 4－1＝3 人。"},
    {type:"judge", html:"站在我对面的同学举起他的左手，在我看来这只手在我的右边。", answer:true, analysis:"面对面时左右相反，他的左手正好对着我的右边，正确。"},
    {type:"choice", html:"四个水果从左到右是：苹果、香蕉、西瓜、葡萄。从右往左数，香蕉排第几？", options:["第 2 个","第 3 个","第 4 个"], answer:1, analysis:"从右数：葡萄 1、西瓜 2、香蕉 3，所以香蕉排第 3。"},
    {type:"fill", html:"花盆放在窗台上，花盆在窗台的上面；反过来，窗台在花盆的（ ）面。", answer:"下", analysis:"上下相对，花盆在窗台上面，窗台就在花盆的下面。"}
  ],
  gen:null
},
{
  id:"g1-03", grade:1, idx:3,
  title:"几和第几",
  tag:"数与计算",
  goal:"分清“几”表示总数、“第几”表示某个物体的位置。",
  points:[
    "“几”说的是物体一共有多少个，是一个总数。",
    "“第几”说的是其中某一个物体排在第几个位置。",
    "数“第几”之前，一定要先定好从哪边开始数（从左、从右或从前往后）。"
  ],
  examples:[
    {
      lead:"例1",
      html:"看图：一共有几只小动物？从左往右数，第 3 只是哪只？<svg class='fig' viewBox='0 0 320 60' xmlns='http://www.w3.org/2000/svg'><circle cx='40' cy='30' r='18' fill='#2B8A83'/><text x='40' y='35' font-size='13' fill='#fff' text-anchor='middle'>兔</text><circle cx='100' cy='30' r='18' fill='#E9A23B'/><text x='100' y='35' font-size='13' fill='#fff' text-anchor='middle'>猫</text><circle cx='160' cy='30' r='18' fill='#3E6FB2'/><text x='160' y='35' font-size='13' fill='#fff' text-anchor='middle'>狗</text><circle cx='220' cy='30' r='18' fill='#53A06B'/><text x='220' y='35' font-size='13' fill='#fff' text-anchor='middle'>熊</text><circle cx='280' cy='30' r='18' fill='#D8664E'/><text x='280' y='35' font-size='13' fill='#fff' text-anchor='middle'>鸭</text></svg>",
      steps:[
        "求“一共几只”，从左往右点着数：1、2、3、4、5，共 5 只。",
        "求“第 3 只”，从左边第 1 只开始数，数到 3 停下。",
        "数到的是正中间那只，也就是小狗。"
      ],
      answer:"一共 5 只；从左往右数第 3 只是小狗。",
      variants:[
        {type:"fill", html:"看图，从左往右数，小猫排在第（ ）个。<svg class='fig' viewBox='0 0 260 56' xmlns='http://www.w3.org/2000/svg'><circle cx='40' cy='28' r='17' fill='#3E6FB2'/><text x='40' y='33' font-size='13' fill='#fff' text-anchor='middle'>狗</text><circle cx='100' cy='28' r='17' fill='#2B8A83'/><text x='100' y='33' font-size='13' fill='#fff' text-anchor='middle'>兔</text><circle cx='160' cy='28' r='17' fill='#E9A23B'/><text x='160' y='33' font-size='13' fill='#fff' text-anchor='middle'>猫</text><circle cx='220' cy='28' r='17' fill='#53A06B'/><text x='220' y='33' font-size='13' fill='#fff' text-anchor='middle'>熊</text></svg>", answer:3, unit:"个", analysis:"从左往右数：狗第 1、兔第 2、猫第 3，所以小猫排第 3。"},
        {type:"choice", html:"一排小朋友从左数，小明排第 4。这里的“第 4”表示什么？", options:["一共有 4 人","小明排在第 4 个位置","小明后面有 4 人"], answer:1, analysis:"“第 4”是说位置，不是说总数，所以指小明排在第 4 个位置。"}
      ]
    },
    {
      lead:"例2",
      html:"小朋友排队做操，从前往后数小丽排第 4，她后面还有 3 人。这一队一共有多少人？",
      steps:[
        "从前往后数小丽排第 4，说明从队首到小丽一共是 4 个人（含小丽）。",
        "小丽后面还有 3 人。",
        "把两部分合起来：4＋3＝7（人）。"
      ],
      answer:"这一队一共有 7 人。",
      variants:[
        {type:"fill", html:"排队买票，从前往后数小刚排第 5，他后面还有 2 人，这队一共（ ）人。", answer:7, unit:"人", analysis:"前面到小刚共 5 人，加上后面 2 人：5＋2＝7 人。"},
        {type:"choice", html:"一队共 8 人，从前往后数小明排第 6，他后面有几人？", options:["1 人","2 人","3 人"], answer:1, analysis:"一共 8 人，去掉前面到小明的 6 人，后面有 8－6＝2 人。"}
      ]
    },
    {
      lead:"例3",
      html:"看图有 5 个球排成一排。从右往左数，红球是第 2 个；那么从左往右数，红球是第几个？<svg class='fig' viewBox='0 0 320 50' xmlns='http://www.w3.org/2000/svg'><circle cx='40' cy='25' r='15' fill='#F6D79E'/><circle cx='100' cy='25' r='15' fill='#F6D79E'/><circle cx='160' cy='25' r='15' fill='#F6D79E'/><circle cx='220' cy='25' r='15' fill='#D8664E'/><circle cx='280' cy='25' r='15' fill='#F6D79E'/></svg>",
      steps:[
        "先把 5 个球从左到右排好队。",
        "从右往左数：最右边的黄球是第 1 个，再往左数红球是第 2 个。",
        "再换从左往右数：黄、黄、黄、红……红球数到第 4 个。"
      ],
      answer:"从左往右数，红球是第 4 个。",
      variants:[
        {type:"fill", html:"一排有 6 个灯笼，从左数第 3 个是红灯笼；从右数它是第（ ）个。", answer:4, analysis:"共 6 个，从左第 3 说明它右边还有 6－3＝3 个，从右数就是 3＋1＝4。"},
        {type:"judge", html:"一排一共 5 个人，从左数小红排第 2，她左边有 2 个人。", answer:false, analysis:"排第 2 说明连她一起前面有 2 人，去掉她自己，左边只有 1 人，所以错。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"数一数，下图中一共有（ ）个水果。<svg class='fig' viewBox='0 0 320 44' xmlns='http://www.w3.org/2000/svg'><circle cx='30' cy='22' r='13' fill='#D8664E'/><circle cx='80' cy='22' r='13' fill='#53A06B'/><circle cx='130' cy='22' r='13' fill='#E9A23B'/><circle cx='180' cy='22' r='13' fill='#D8664E'/><circle cx='230' cy='22' r='13' fill='#53A06B'/><circle cx='280' cy='22' r='13' fill='#E9A23B'/></svg>", answer:6, unit:"个", analysis:"从左往右点一个数一个，最后数到 6，共 6 个。"},
    {type:"choice", html:"从左往右数，五角星排在第 4 个，它左边有几个图形？", options:["3 个","4 个","5 个"], answer:0, analysis:"排第 4 连它一起左边有 4 个，去掉它自己，左边有 3 个。"},
    {type:"fill", html:"一队同学共 9 人，从前往后数小华排第 5，他后面有（ ）人。", answer:4, unit:"人", analysis:"一共 9 人，去掉前面到小华的 5 人，后面有 9－5＝4 人。"},
    {type:"judge", html:"“把从左数第 2 个苹果涂红”和“把左边 2 个苹果涂红”意思一样。", answer:false, analysis:"前者只涂 1 个（第 2 个），后者要涂 2 个，意思不同，所以错。"},
    {type:"fill", html:"书架上一排书，从左数漫画书是第 3 本，从右数是第 4 本，这排书一共（ ）本。", answer:6, unit:"本", analysis:"左边到漫画书 3 本＋右边到漫画书 4 本，漫画书被算了两次，3＋4－1＝6 本。"},
    {type:"choice", html:"排队，从前往后数小方排第 3，从后往前数小方排第 4，这队一共几人？", options:["6 人","7 人","8 人"], answer:0, analysis:"3＋4 把小方算了两次，3＋4－1＝6 人。"},
    {type:"fill", html:"一排小鸡，从左数第 4 只是黄鸡，从右数它还是第 4 只，这排小鸡一共（ ）只。", answer:7, unit:"只", analysis:"4＋4 把黄鸡算了两次，4＋4－1＝7 只。"}
  ],
  quiz:[
    {type:"fill", html:"看图，从左往右数，小鸭排第（ ）。<svg class='fig' viewBox='0 0 240 56' xmlns='http://www.w3.org/2000/svg'><circle cx='40' cy='28' r='17' fill='#3E6FB2'/><text x='40' y='33' font-size='13' fill='#fff' text-anchor='middle'>猫</text><circle cx='100' cy='28' r='17' fill='#2B8A83'/><text x='100' y='33' font-size='13' fill='#fff' text-anchor='middle'>狗</text><circle cx='160' cy='28' r='17' fill='#E9A23B'/><text x='160' y='33' font-size='13' fill='#fff' text-anchor='middle'>鸭</text><circle cx='220' cy='28' r='17' fill='#53A06B'/><text x='220' y='33' font-size='13' fill='#fff' text-anchor='middle'>兔</text></svg>", answer:3, analysis:"从左往右数：猫第 1、狗第 2、鸭第 3，所以小鸭排第 3。"},
    {type:"choice", html:"“第 3 个”和“3 个”的意思一样吗？", options:["一样","不一样"], answer:1, analysis:"“第 3 个”指位置只有 1 个，“3 个”指数量是 3，意思不一样。"},
    {type:"fill", html:"一队共 7 人，从前往后数小军排第 4，他前面有（ ）人。", answer:3, unit:"人", analysis:"排第 4 连他共 4 人，去掉他自己，前面有 4－1＝3 人。"},
    {type:"judge", html:"一排共 5 人，从左数小红排第 2，从右数她排第 4。", answer:true, analysis:"共 5 人，从左第 2 说明右边有 5－2＝3 人，从右数就是 3＋1＝4，正确。"},
    {type:"fill", html:"小朋友排队，从前往后数小明排第 2，从后往前数小明排第 3，这队一共（ ）人。", answer:4, unit:"人", analysis:"2＋3 把小明算了两次，2＋3－1＝4 人。"}
  ],
  gen:null
},
{
  id:"g1-04", grade:1, idx:4,
  title:"分与合（数的组成）",
  tag:"数与计算",
  goal:"学会把一个数有序地分成两个数，知道几和几合成一个数。",
  points:[
    "分与合：把一个数分成两个数，这两个数合起来又等于原来的数。",
    "分时要按顺序从“1 和几”开始分，做到不重复、不遗漏。",
    "几和几合成一个数，就是把这两个数加起来。"
  ],
  examples:[
    {
      lead:"例1",
      html:"想一想：5 可以分成几和几？",
      steps:[
        "拿出 5 个圆片，分成左边一堆、右边一堆。",
        "按顺序分：左边 1 个、右边 4 个；再左边 2 个、右边 3 个。",
        "接着：左边 3 个、右边 2 个；左边 4 个、右边 1 个。",
        "按顺序写下来，就不会漏掉。"
      ],
      answer:"5 可以分成 1 和 4、2 和 3、3 和 2、4 和 1。",
      variants:[
        {type:"fill", html:"4 可以分成 2 和（ ）。", answer:2, analysis:"2＋2＝4，所以 4 可以分成 2 和 2。"},
        {type:"choice", html:"6 可以分成 1 和几？", options:["4","5","6"], answer:1, analysis:"1＋5＝6，所以 6 可以分成 1 和 5。"}
      ]
    },
    {
      lead:"例2",
      html:"看图，左边有 3 个桃，右边有 2 个桃。3 和 2 合成几？<svg class='fig' viewBox='0 0 260 60' xmlns='http://www.w3.org/2000/svg'><circle cx='30' cy='30' r='12' fill='#E9A23B'/><circle cx='60' cy='30' r='12' fill='#E9A23B'/><circle cx='90' cy='30' r='12' fill='#E9A23B'/><line x1='130' y1='12' x2='130' y2='48' stroke='#DFE2D6' stroke-width='2'/><circle cx='170' cy='30' r='12' fill='#E9A23B'/><circle cx='200' cy='30' r='12' fill='#E9A23B'/></svg>",
      steps:[
        "先看左边是 3 个桃，右边是 2 个桃。",
        "把两边合起来数一数：3、4、5。",
        "所以 3 和 2 合起来是 5。"
      ],
      answer:"3 和 2 合成 5。",
      variants:[
        {type:"fill", html:"4 和 1 合成（ ）。", answer:5, analysis:"4＋1＝5，所以 4 和 1 合成 5。"},
        {type:"choice", html:"下面哪两个数能合成 6？", options:["2 和 3","3 和 3","4 和 3"], answer:1, analysis:"3＋3＝6，所以 3 和 3 合成 6。"}
      ]
    },
    {
      lead:"例3",
      html:"妈妈有 4 颗糖，分给弟弟和妹妹两个人，一共有几种不同的分法？",
      steps:[
        "这就是把 4 分成两个数，要按顺序来分。",
        "4 可以分成 1 和 3、2 和 2、3 和 1。",
        "数一数，一共是 3 种分法。"
      ],
      answer:"有 3 种分法：1 和 3、2 和 2、3 和 1。",
      variants:[
        {type:"fill", html:"把 5 分成两个数，一共有（ ）种分法。", answer:4, analysis:"5 可分成 1 和 4、2 和 3、3 和 2、4 和 1，共 4 种。"},
        {type:"judge", html:"5 可以分成 2 和 3，那么 2 和 3 合起来还是 5。", answer:true, analysis:"分和合相反，2＋3＝5，所以合起来仍是 5，正确。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"7 可以分成 3 和（ ）。", answer:4, analysis:"3＋4＝7，所以 7 可以分成 3 和 4。"},
    {type:"choice", html:"2 和 5 合成几？", options:["6","7","8"], answer:1, analysis:"2＋5＝7，所以 2 和 5 合成 7。"},
    {type:"fill", html:"把 6 分成两个数，一共有（ ）种分法。", answer:5, analysis:"6 可分成 1 和 5、2 和 4、3 和 3、4 和 2、5 和 1，共 5 种。"},
    {type:"judge", html:"一个数分成两个数，这两个数合起来还等于原来的数。", answer:true, analysis:"分和合是相反的过程，合起来必然等于原来的数，正确。"}
  ],
  quiz:[
    {type:"fill", html:"8 可以分成 4 和（ ）。", answer:4, analysis:"4＋4＝8，所以 8 可以分成 4 和 4。"},
    {type:"fill", html:"3 和 4 合成（ ）。", answer:7, analysis:"3＋4＝7，所以 3 和 4 合成 7。"},
    {type:"choice", html:"下面哪种分法是正确的？", options:["5 分成 2 和 3","5 分成 1 和 3","5 分成 2 和 4"], answer:0, analysis:"2＋3＝5，只有第一种正确；1＋3＝4、2＋4＝6 都不等于 5。"},
    {type:"judge", html:"9 可以分成 5 和 4。", answer:true, analysis:"5＋4＝9，所以这种分法正确。"},
    {type:"fill", html:"把 10 分成两个相同的数，这两个数都是（ ）。", answer:5, analysis:"两个相同的数合起来是 10，5＋5＝10，所以都是 5。"}
  ],
  gen:{type:"decompose", n:4}
},
{
  id:"g1-05", grade:1, idx:5,
  title:"找规律（图形与数字）",
  tag:"规律推理",
  goal:"能发现图形和数字的简单排列规律，并照着规律接着画、接着写。",
  points:[
    "图形找规律：看形状、颜色、大小按什么样子一组一组重复出现。",
    "数字找规律：看相邻两个数每次多几或少几。",
    "找到规律后，照着规律接着画、接着写。"
  ],
  examples:[
    {
      lead:"例1",
      html:"看图找规律，横线上应该画什么？<svg class='fig' viewBox='0 0 300 50' xmlns='http://www.w3.org/2000/svg'><polygon points='30,15 18,38 42,38' fill='#E9A23B'/><circle cx='80' cy='28' r='13' fill='#2B8A83'/><polygon points='130,15 118,38 142,38' fill='#E9A23B'/><circle cx='180' cy='28' r='13' fill='#2B8A83'/><polygon points='230,15 218,38 242,38' fill='#E9A23B'/><rect x='262' y='15' width='26' height='26' rx='3' fill='none' stroke='#8A949C' stroke-width='2' stroke-dasharray='4 3'/></svg>",
      steps:[
        "按顺序看：一个三角形、一个圆，交替出现。",
        "规律是“三角形、圆”为一组，不断重复。",
        "最后一个是三角形，照规律下一个应该是圆。"
      ],
      answer:"接着画圆（○）。",
      variants:[
        {type:"choice", html:"☆ ★ ☆ ★ ☆ 后面应是哪一个？", options:["☆","★"], answer:1, analysis:"规律是一个☆一个★交替，最后一个是☆，下一个应是★。"},
        {type:"fill", html:"珠子按“红、黄、红、黄、红”排列，下一颗应是（ ）色。", answer:"黄", analysis:"红黄交替，最后一颗是红，下一颗应是黄。"}
      ]
    },
    {
      lead:"例2",
      html:"找规律填数：2、4、6、8、（ ）。",
      steps:[
        "看相邻两数：4 比 2 多 2，6 比 4 多 2，8 比 6 多 2。",
        "规律是每次都多 2。",
        "8 后面多 2：8＋2＝10。"
      ],
      answer:"填 10。",
      variants:[
        {type:"fill", html:"找规律填数：1、3、5、7、（ ）。", answer:9, analysis:"每次都多 2，7＋2＝9。"},
        {type:"choice", html:"找规律填数：5、10、15、20、（ ）。", options:["21","25","30"], answer:1, analysis:"每次都多 5，20＋5＝25。"}
      ]
    },
    {
      lead:"例3",
      html:"找规律填数：10、8、6、（ ）、（ ）。",
      steps:[
        "看相邻两数：8 比 10 少 2，6 比 8 少 2。",
        "规律是每次都少 2。",
        "6 少 2 是 4，4 再少 2 是 2。"
      ],
      answer:"填 4 和 2。",
      variants:[
        {type:"fill", html:"找规律填数：9、7、5、（ ）。", answer:3, analysis:"每次都少 2，5－2＝3。"},
        {type:"judge", html:"数列 1、2、3、5、8 的规律是每次多 1。", answer:false, analysis:"3 到 5 多了 2、5 到 8 多了 3，不是每次都多 1，所以错。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"找规律填数：3、6、9、（ ）。", answer:12, analysis:"每次都多 3，9＋3＝12。"},
    {type:"choice", html:"图形按 ○○● 为一组重复：○○● ○○● ○，接着应画什么？", options:["○","●"], answer:0, analysis:"一组是○○●，现在刚画到这一组的第 1 个○，下一个还是○。"},
    {type:"fill", html:"找规律填数：18、15、12、（ ）。", answer:9, analysis:"每次都少 3，12－3＝9。"},
    {type:"judge", html:"图形按“红、蓝、红、蓝”排列，最后一个是蓝，下一个一定是红色。", answer:true, analysis:"红蓝交替，蓝后面接着就是红，正确。"},
    {type:"fill", html:"珠子按“2 颗红、1 颗黄”穿成一组：红红黄 红红黄 红红，下一颗是（ ）色。", answer:"黄", analysis:"一组是红红黄，现在穿到这一组的第 2 颗红，下一颗是黄。"},
    {type:"choice", html:"找规律填数：1、4、7、10、（ ）。", options:["11","12","13"], answer:2, analysis:"每次都多 3，10＋3＝13。"},
    {type:"fill", html:"找规律填数：20、16、12、（ ）。", answer:8, analysis:"每次都少 4，12－4＝8。"}
  ],
  quiz:[
    {type:"fill", html:"找规律填数：2、5、8、（ ）。", answer:11, analysis:"每次都多 3，8＋3＝11。"},
    {type:"choice", html:"图形按 △△○ 为一组重复：△△○ △△○ △，接着应画什么？", options:["△","○"], answer:0, analysis:"一组是△△○，现在刚画到这一组的第 1 个△，下一个还是△。"},
    {type:"fill", html:"找规律填数：10、20、30、（ ）。", answer:40, analysis:"每次都多 10，30＋10＝40。"},
    {type:"judge", html:"数列 5、10、15、20 的规律是每次多 5。", answer:true, analysis:"10－5＝5、15－10＝5、20－15＝5，确实每次多 5，正确。"},
    {type:"fill", html:"找规律填数：19、17、15、（ ）。", answer:13, analysis:"每次都少 2，15－2＝13。"}
  ],
  gen:null
},
{
  id:"g1-06", grade:1, idx:6,
  title:"认识图形",
  tag:"图形几何",
  goal:"能辨认长方形、正方形、三角形和圆，知道它们各有什么特点。",
  points:[
    "长方形：长长方方，对着的两条边一样长。",
    "正方形：方方正正，四条边都一样长。",
    "三角形：有三条边、三个角。",
    "圆：圆圆的，没有角。"
  ],
  examples:[
    {
      lead:"例1",
      html:"看图分一分：哪个是长方形、正方形、三角形、圆？<svg class='fig' viewBox='0 0 300 55' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='16' width='52' height='26' rx='3' fill='#3E6FB2'/><rect x='112' y='14' width='32' height='32' rx='3' fill='#2B8A83'/><polygon points='192,14 180,42 204,42' fill='#E9A23B'/><circle cx='262' cy='29' r='16' fill='#D8664E'/></svg>",
      steps:[
        "先找方方正正、四条边一样长的 → 中间的正方形。",
        "再找长长方方、两条长边两条短边的 → 左边的长方形。",
        "有三条边、三个角的 → 黄色的三角形。",
        "圆圆的、没有角的 → 右边红色的圆。"
      ],
      answer:"左起：长方形、正方形、三角形、圆。",
      variants:[
        {type:"choice", html:"下面哪个图形是圆？", options:["方方正正四条边一样长","三条边三个角","圆圆的没有角"], answer:2, analysis:"圆是圆圆的、没有角的，所以选第三个。"},
        {type:"fill", html:"三角形有（ ）条边。", answer:3, unit:"条", analysis:"三角形由三条边围成，所以有 3 条边。"}
      ]
    },
    {
      lead:"例2",
      html:"摆一个三角形要用几根小棒？摆一个正方形呢？",
      steps:[
        "三角形有 3 条边，每条边用 1 根小棒。",
        "3 条边就要 3 根小棒。",
        "正方形有 4 条边，就要 4 根小棒。"
      ],
      answer:"三角形要 3 根，正方形要 4 根。",
      variants:[
        {type:"fill", html:"摆一个长方形最少要（ ）根小棒。", answer:4, unit:"根", analysis:"长方形也有 4 条边，最少要 4 根小棒。"},
        {type:"choice", html:"用同样长的小棒摆一个正方形，要几根？", options:["3 根","4 根","5 根"], answer:1, analysis:"正方形四条边一样长，每条边 1 根，共 4 根。"}
      ]
    },
    {
      lead:"例3",
      html:"用同样大的小正方形，拼一个更大的正方形，最少要用几个？",
      steps:[
        "先试 2 个：两个小正方形只能拼成长方形。",
        "再试 4 个：摆成 2 排、每排 2 个，正好拼成一个大正方形。",
        "所以最少要用 4 个小正方形。"
      ],
      answer:"最少要用 4 个小正方形。",
      variants:[
        {type:"fill", html:"用 4 个小正方形拼成的大正方形，每条边上有（ ）个小正方形。", answer:2, analysis:"摆成 2 排每排 2 个，每条边上正好有 2 个小正方形。"},
        {type:"judge", html:"两个同样的正方形，可以拼成一个大正方形。", answer:false, analysis:"两个正方形并排拼出来是长方形，要 4 个才能拼成大正方形，所以错。"}
      ]
    }
  ],
  practice:[
    {type:"choice", html:"数学书的封面，是什么形状？", options:["长方形","正方形","圆"], answer:0, analysis:"数学书封面长长方方，两条长边两条短边，是长方形。"},
    {type:"fill", html:"正方形有（ ）条一样长的边。", answer:4, unit:"条", analysis:"正方形方方正正，四条边都一样长。"},
    {type:"judge", html:"圆有很多个角。", answer:false, analysis:"圆是圆圆的、没有角的，所以错。"},
    {type:"choice", html:"下面哪个物体的面，最接近三角形？", options:["红领巾","硬币","黑板"], answer:0, analysis:"红领巾展开像三条边三个角，接近三角形；硬币是圆、黑板是长方形。"},
    {type:"fill", html:"摆两个独立的三角形，一共要用（ ）根小棒。", answer:6, unit:"根", analysis:"一个三角形 3 根，两个就是 3＋3＝6 根。"},
    {type:"judge", html:"长方形和正方形都有 4 条边。", answer:true, analysis:"长方形和正方形都是四边形，都有 4 条边，正确。"},
    {type:"choice", html:"用小正方形拼一个更大的正方形，下面哪个数量是可能的？", options:["2 个","4 个","3 个"], answer:1, analysis:"4 个小正方形摆成 2 排每排 2 个，能拼成大正方形；2 个、3 个不行。"}
  ],
  quiz:[
    {type:"fill", html:"三角形有（ ）个角。", answer:3, unit:"个", analysis:"三角形有三条边，也就有三个角。"},
    {type:"choice", html:"一块方方正正的手帕，是什么形状？", options:["正方形","长方形","三角形"], answer:0, analysis:"手帕方方正正、四条边一样长，是正方形。"},
    {type:"judge", html:"正方形的四条边都一样长。", answer:true, analysis:"这是正方形的特点，方方正正四条边一样长，正确。"},
    {type:"fill", html:"摆一个正方形，要用（ ）根同样长的小棒。", answer:4, unit:"根", analysis:"正方形四条边一样长，每条边 1 根，共 4 根。"},
    {type:"choice", html:"硬币的正面，是什么形状？", options:["圆","正方形","长方形"], answer:0, analysis:"硬币正面圆圆的、没有角，是圆。"}
  ],
  gen:null
}
];
