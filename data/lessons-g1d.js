/* 数据：一年级 g1-17 ~ g1-20 */
var L_G1D = [
{
  id:"g1-17", grade:1, idx:17,
  title:"认识人民币",
  tag:"生活数学",
  goal:"认识元、角、分，会做简单的单位换算和购物找钱。",
  points:[
    "人民币的单位有元、角、分。要记住：1 元＝10 角，1 角＝10 分。",
    "几元就是几十角；几十角里面有几个 10 角，就是几元。满 10 角可以换成 1 元。",
    "买东西时，一共要付的钱是把几样东西的价钱合起来；付的钱减去价钱，就是应找回的钱。单位不同时，要先化成相同单位再算。"
  ],
  examples:[
    {
      lead:"例1",
      html:"想一想：3 元＝（ ）角？下面是 3 张 1 元的纸币。<svg class='fig' viewBox='0 0 300 74' xmlns='http://www.w3.org/2000/svg'><rect x='12' y='12' width='84' height='50' rx='6' fill='#2B8A83' stroke='#1F6E68' stroke-width='2'/><text x='54' y='44' font-size='20' fill='#FCFDF9' text-anchor='middle' font-weight='bold'>1元</text><rect x='108' y='12' width='84' height='50' rx='6' fill='#2B8A83' stroke='#1F6E68' stroke-width='2'/><text x='150' y='44' font-size='20' fill='#FCFDF9' text-anchor='middle' font-weight='bold'>1元</text><rect x='204' y='12' width='84' height='50' rx='6' fill='#2B8A83' stroke='#1F6E68' stroke-width='2'/><text x='246' y='44' font-size='20' fill='#FCFDF9' text-anchor='middle' font-weight='bold'>1元</text></svg>",
      steps:[
        "人民币换算的规定是：1 元＝10 角。",
        "1 张 1 元就是 10 角，那么 3 张 1 元就是 3 个 10 角。",
        "3 个 10 角合起来是 30 角，所以 3 元＝30 角。"
      ],
      answer:"3 元＝30 角。",
      variants:[
        {type:"fill", html:"5 元＝（ ）角。", answer:50, unit:"角", analysis:"1 元＝10 角，5 元就是 5 个 10 角，5×10＝50，所以是 50 角。"},
        {type:"choice", html:"下面哪个钱数正好等于 40 角？", options:["4 元","4 角","4 分"], answer:0, analysis:"10 角＝1 元，40 角里面有 4 个 10 角，所以 40 角＝4 元。"}
      ]
    },
    {
      lead:"例2",
      html:"一块橡皮 7 角，小红付给售货员 1 元，应找回几角？<svg class='fig' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'><circle cx='60' cy='60' r='40' fill='#E9A23B' stroke='#C9821F' stroke-width='3'/><circle cx='60' cy='60' r='30' fill='none' stroke='#FCFDF9' stroke-width='2'/><text x='60' y='70' font-size='22' fill='#FCFDF9' text-anchor='middle' font-weight='bold'>1元</text></svg>",
      steps:[
        "先把付的钱换成相同单位：1 元＝10 角。",
        "橡皮的价钱是 7 角。",
        "找回的钱＝付的钱－价钱：10 角－7 角＝3 角。"
      ],
      answer:"应找回 3 角。",
      variants:[
        {type:"fill", html:"一把尺子 8 角，付 1 元，应找回（ ）角。", answer:2, unit:"角", analysis:"1 元＝10 角，付了 10 角，花掉 8 角，10－8＝2，找回 2 角。"},
        {type:"judge", html:"付 1 元买一块 6 角的糖，应找回 4 角。", answer:true, analysis:"1 元＝10 角，10－6＝4 角，所以这句话是对的。"}
      ]
    },
    {
      lead:"例3",
      html:"买一支铅笔 5 角、一本本子 6 角，一共要付多少钱？<svg class='fig' viewBox='0 0 230 80' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='40' r='28' fill='#7FC3B8' stroke='#2B8A83' stroke-width='2'/><text x='50' y='48' font-size='16' fill='#1F6E68' text-anchor='middle' font-weight='bold'>5角</text><circle cx='150' cy='40' r='28' fill='#E9A23B' stroke='#C9821F' stroke-width='2'/><text x='150' y='48' font-size='16' fill='#FCFDF9' text-anchor='middle' font-weight='bold'>6角</text><text x='205' y='47' font-size='20' fill='#26313A' text-anchor='middle'>＝</text></svg>",
      steps:[
        "求一共要付多少，把两样东西的价钱合起来：5 角＋6 角。",
        "5＋6＝11，所以一共是 11 角。",
        "11 角里面有 1 个 10 角，可以换成 1 元，还多 1 角。",
        "所以 11 角＝1 元 1 角。"
      ],
      answer:"一共要付 11 角，也就是 1 元 1 角。",
      variants:[
        {type:"fill", html:"买一块糖 3 角、一根冰棒 9 角，一共要付（ ）角。", answer:12, unit:"角", analysis:"把两样价钱合起来：3＋9＝12，一共 12 角。"},
        {type:"choice", html:"12 角等于下面哪一个钱数？", options:["1 元 2 角","2 元 1 角","12 元"], answer:0, analysis:"12 角里有 1 个 10 角＝1 元，还剩 2 角，所以是 1 元 2 角。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"2 元＝（ ）角。", answer:20, unit:"角", analysis:"1 元＝10 角，2 元就是 2 个 10 角，等于 20 角。"},
    {type:"fill", html:"60 角＝（ ）元。", answer:6, unit:"元", analysis:"10 角＝1 元，60 角里面有 6 个 10 角，所以是 6 元。"},
    {type:"fill", html:"一支圆珠笔 9 角，付 1 元，应找回（ ）角。", answer:1, unit:"角", analysis:"1 元＝10 角，10－9＝1，找回 1 角。"},
    {type:"choice", html:"下面哪种付钱方法正好是 5 元？", options:["5 张 1 元","1 张 5 角","5 张 1 角"], answer:0, analysis:"5 张 1 元合起来是 5 元；5 角和 5 张 1 角都只有 5 角，不对。"},
    {type:"fill", html:"买一盒彩笔要 12 元，付给售货员 20 元，应找回（ ）元。", answer:8, unit:"元", analysis:"付的钱减去价钱：20－12＝8，找回 8 元。"}
  ],
  quiz:[
    {type:"fill", html:"1 角＝（ ）分。", answer:10, unit:"分", analysis:"人民币换算规定：1 角＝10 分，要记住。"},
    {type:"fill", html:"80 角＝（ ）元。", answer:8, unit:"元", analysis:"10 角＝1 元，80 角里有 8 个 10 角，所以是 8 元。"},
    {type:"fill", html:"一块橡皮 4 角，付 1 元，应找回（ ）角。", answer:6, unit:"角", analysis:"1 元＝10 角，10－4＝6，找回 6 角。"},
    {type:"judge", html:"1 元等于 100 分。", answer:true, analysis:"1 元＝10 角，1 角＝10 分，10 个 10 分就是 100 分，所以 1 元＝100 分。"},
    {type:"choice", html:"一支铅笔 6 角、一块橡皮 5 角，一共要付多少钱？", options:["11 角","1 角","1 元 11 角"], answer:0, analysis:"把两样价钱合起来：6＋5＝11，一共 11 角。"}
  ],
  gen:{type:"money", n:3}
}
,
{
  id:"g1-18", grade:1, idx:18,
  title:"分类与整理",
  tag:"生活数学",
  goal:"学会按一定标准给物体分类，并能用象形图或涂色块把结果表示出来。",
  points:[
    "分类就是把有相同特点的东西放在一起。先要想好按什么标准分，比如颜色、形状、用途、大小。",
    "同一堆东西，按不同的标准分，分法和结果可能不一样；分的时候每次只能按一个标准，不要同时用好几个标准。",
    "分好以后数一数每类有几个，可以画象形图（一个对着一个画）或涂色块来表示，这样一眼就能看出哪类多、哪类少。"
  ],
  examples:[
    {
      lead:"例1",
      html:"下面一堆图形混在一起，先按形状分一分，再数一数圆、三角形、正方形各有几个。<svg class='fig' viewBox='0 0 300 130' xmlns='http://www.w3.org/2000/svg'><circle cx='25' cy='30' r='13' fill='#2B8A83'/><circle cx='75' cy='30' r='13' fill='#2B8A83'/><polygon points='125,17 112,41 138,41' fill='#E9A23B'/><rect x='163' y='18' width='24' height='24' fill='#3E6FB2'/><circle cx='225' cy='30' r='13' fill='#2B8A83'/><rect x='263' y='18' width='24' height='24' fill='#3E6FB2'/><rect x='13' y='83' width='24' height='24' fill='#3E6FB2'/><circle cx='75' cy='95' r='13' fill='#2B8A83'/><polygon points='125,82 112,106 138,106' fill='#E9A23B'/><circle cx='175' cy='95' r='13' fill='#2B8A83'/><polygon points='225,82 212,106 238,106' fill='#E9A23B'/><rect x='263' y='83' width='24' height='24' fill='#3E6FB2'/></svg>",
      steps:[
        "先按形状把圆挑出来，一个一个点着数：一共有 5 个。",
        "再把三角形挑出来数：一共有 3 个。",
        "最后数正方形：一共有 4 个。",
        "把三类合起来：5＋3＋4＝12，一共有 12 个图形。"
      ],
      answer:"圆有 5 个，三角形有 3 个，正方形有 4 个；一共有 12 个图形。",
      variants:[
        {type:"fill", html:"盘子里有 4 个苹果、3 个梨、2 个桃，一共有（ ）个水果。", answer:9, unit:"个", analysis:"把三类合起来：4＋3＋2＝9，一共有 9 个水果。"},
        {type:"judge", html:"数混在一起的图形时，应该随便乱数，不用分类。", answer:false, analysis:"先按形状分好一类一类地数，才不容易重复或漏掉，所以这句话错。"}
      ]
    },
    {
      lead:"例2",
      html:"下面有 8 个图形，想一想：按颜色可以分成几类？按形状又可以分成几类？<svg class='fig' viewBox='0 0 260 120' xmlns='http://www.w3.org/2000/svg'><circle cx='40' cy='35' r='14' fill='#D8664E'/><circle cx='100' cy='35' r='14' fill='#3E6FB2'/><rect x='158' y='23' width='24' height='24' fill='#D8664E'/><rect x='206' y='23' width='24' height='24' fill='#3E6FB2'/><circle cx='40' cy='90' r='14' fill='#D8664E'/><circle cx='100' cy='90' r='14' fill='#3E6FB2'/><rect x='158' y='78' width='24' height='24' fill='#D8664E'/><rect x='206' y='78' width='24' height='24' fill='#3E6FB2'/></svg>",
      steps:[
        "先按颜色分：红色的放在一起、蓝色的放在一起，分成 2 类。",
        "再按形状分：圆放在一起、正方形放在一起，也分成 2 类。",
        "这说明同一堆东西，按的标准不同，分法可能不同，但东西的总数不变。"
      ],
      answer:"按颜色分 2 类（红、蓝）；按形状分 2 类（圆、正方形）。",
      variants:[
        {type:"choice", html:"把全班同学分成“男生、女生”两组，是按什么标准分的？", options:["性别","年龄","高矮"], answer:0, analysis:"男生、女生是按性别来分的。"},
        {type:"judge", html:"同一堆积木，按颜色分和按形状分，分得的结果一定完全相同。", answer:false, analysis:"分类的标准不同，结果一般也不同，只是总数不变，所以这句话错。"}
      ]
    },
    {
      lead:"例3",
      html:"二（1）班同学最喜欢的运动情况画成了下面的涂色块图（一格表示 1 人）。哪种运动喜欢的人最多？<svg class='fig' viewBox='0 0 260 150' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='120' x2='240' y2='120' stroke='#8A949C' stroke-width='2'/><rect x='35' y='48' width='46' height='72' fill='#2B8A83'/><rect x='105' y='12' width='46' height='108' fill='#E9A23B'/><rect x='175' y='66' width='46' height='54' fill='#3E6FB2'/><text x='58' y='138' font-size='13' fill='#26313A' text-anchor='middle'>跳绳</text><text x='128' y='138' font-size='13' fill='#26313A' text-anchor='middle'>踢球</text><text x='198' y='138' font-size='13' fill='#26313A' text-anchor='middle'>跑步</text></svg>",
      steps:[
        "看图：跳绳涂了 4 格，踢球涂了 6 格，跑步涂了 3 格。",
        "一格表示 1 人，所以喜欢跳绳的有 4 人、踢球的有 6 人、跑步的有 3 人。",
        "比一比格数：6＞4＞3，涂格最多的是踢球。"
      ],
      answer:"喜欢踢球的人最多。",
      variants:[
        {type:"fill", html:"涂色块图中，苹果涂了 5 格、梨涂了 3 格，苹果比梨多涂了（ ）格。", answer:2, unit:"格", analysis:"求相差用减法：5－3＝2，多涂 2 格。"},
        {type:"choice", html:"在涂色块图里，涂的格子最多的那一类，表示它的数量怎样？", options:["最多","最少","和别的一样"], answer:0, analysis:"一格表示 1 个，涂的格越多，数量就越多。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"花瓶里有红花 5 朵、黄花 4 朵、白花 2 朵，一共有（ ）朵花。", answer:11, unit:"朵", analysis:"把三类合起来：5＋4＋2＝11，一共 11 朵。"},
    {type:"choice", html:"把一堆铅笔分成“长的、短的”两组，是按什么标准分的？", options:["长短","颜色","花纹"], answer:0, analysis:"按“长的、短的”分，就是按长短来分。"},
    {type:"judge", html:"分类的时候，可以一会儿按颜色分，一会儿按形状分。", answer:false, analysis:"一次分类只能按一个标准，不能同时用好几个标准，所以这句话错。"},
    {type:"fill", html:"象形图中，小猫涂了 6 格、小狗涂了 4 格，小猫和小狗一共涂了（ ）格。", answer:10, unit:"格", analysis:"把两类合起来：6＋4＝10，一共 10 格。"},
    {type:"choice", html:"按“水果”这一类来分，下面哪个和苹果是同一类？", options:["香蕉","白菜","面包"], answer:0, analysis:"香蕉也是水果；白菜是蔬菜，面包是主食，都和苹果不是一类。"},
    {type:"fill", html:"一堆图形里，圆有 7 个、三角形有 5 个，圆比三角形多（ ）个。", answer:2, unit:"个", analysis:"求相差用减法：7－5＝2，多 2 个。"},
    {type:"judge", html:"用象形图表示数量时，先要规定好一格表示几个。", answer:true, analysis:"一格表示几必须先定清楚，图才能看明白，所以这句话对。"}
  ],
  quiz:[
    {type:"fill", html:"袋子里有红球 3 个、蓝球 6 个、黄球 2 个，一共有（ ）个球。", answer:11, unit:"个", analysis:"把三类合起来：3＋6＋2＝11，一共 11 个球。"},
    {type:"choice", html:"把图形分成“有角的、没角的”两组，是按什么来分的？", options:["形状特点","颜色","大小"], answer:0, analysis:"有没有角是图形形状上的特点，所以是按形状特点分。"},
    {type:"judge", html:"同一堆积木，按颜色分和按形状分，东西的总数是一样的。", answer:true, analysis:"只是分类的标准和分法不同，东西没有多也没有少，总数不变。"},
    {type:"fill", html:"涂色块图上，看书涂了 5 格、画画涂了 8 格，画画比看书多涂了（ ）格。", answer:3, unit:"格", analysis:"8－5＝3，多涂 3 格。"},
    {type:"choice", html:"下面是涂色块图：苹果 4 格、梨 7 格、桃 5 格。哪一类数量最多？<svg class='fig' viewBox='0 0 240 120' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='100' x2='220' y2='100' stroke='#8A949C' stroke-width='2'/><rect x='35' y='40' width='40' height='60' fill='#D8664E'/><rect x='100' y='0' width='40' height='100' fill='#E9A23B'/><rect x='165' y='25' width='40' height='75' fill='#3E6FB2'/><text x='55' y='116' font-size='12' fill='#26313A' text-anchor='middle'>苹果</text><text x='120' y='116' font-size='12' fill='#26313A' text-anchor='middle'>梨</text><text x='185' y='116' font-size='12' fill='#26313A' text-anchor='middle'>桃</text></svg>", options:["苹果","梨","桃"], answer:1, analysis:"梨涂了 7 格最多，所以梨的数量最多。"}
  ],
  gen:null
}
,
{
  id:"g1-19", grade:1, idx:19,
  title:"锯木头与爬楼梯",
  tag:"典型应用",
  goal:"通过画图理解锯木头和爬楼梯中的“次数/层数”关系。",
  points:[
    "锯木头：锯 1 次木头分成 2 段。段数总比次数多 1，即 段数＝次数＋1，反过来 次数＝段数－1。",
    "爬楼梯：1 楼就在地面，不用爬。从 1 楼到 n 楼，实际只爬了 (n－1) 层楼梯；起点不是 1 楼时，爬的层数＝到达楼层－起点楼层。",
    "遇到这类题先画线段图或楼层图，看清楚“次数/层数”和“段数/楼层”的关系，不要直接把题目里两个数相加。"
  ],
  examples:[
    {
      lead:"例1",
      html:"把一根木头锯成 4 段，要锯几次？<svg class='fig' viewBox='0 0 280 90' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='45' x2='260' y2='45' stroke='#2B8A83' stroke-width='7' stroke-linecap='round'/><line x1='80' y1='28' x2='80' y2='62' stroke='#D8664E' stroke-width='3'/><line x1='140' y1='28' x2='140' y2='62' stroke='#D8664E' stroke-width='3'/><line x1='200' y1='28' x2='200' y2='62' stroke='#D8664E' stroke-width='3'/><text x='50' y='80' font-size='12' fill='#51606A' text-anchor='middle'>段1</text><text x='110' y='80' font-size='12' fill='#51606A' text-anchor='middle'>段2</text><text x='170' y='80' font-size='12' fill='#51606A' text-anchor='middle'>段3</text><text x='230' y='80' font-size='12' fill='#51606A' text-anchor='middle'>段4</text></svg>",
      steps:[
        "看线段图：锯 1 次多出 1 段。锯 1 次是 2 段，锯 2 次是 3 段。",
        "照这样想，锯成 4 段，就要锯 3 次（图上 3 道红色锯痕）。",
        "记住：段数总比次数多 1，所以 次数＝段数－1＝4－1＝3。"
      ],
      answer:"要锯 3 次。",
      variants:[
        {type:"fill", html:"一根木头锯成 5 段，要锯（ ）次。", answer:4, unit:"次", analysis:"次数＝段数－1，5－1＝4，要锯 4 次。"},
        {type:"choice", html:"一根木头锯了 2 次，被分成了几段？", options:["2 段","3 段","4 段"], answer:1, analysis:"段数＝次数＋1，2＋1＝3，分成 3 段。"}
      ]
    },
    {
      lead:"例2",
      html:"小明从 1 楼走到 4 楼，一共要爬几层楼梯？<svg class='fig' viewBox='0 0 200 160' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='20' x2='170' y2='20' stroke='#2B8A83' stroke-width='4'/><text x='180' y='25' font-size='13' fill='#26313A'>4楼</text><line x1='30' y1='60' x2='170' y2='60' stroke='#2B8A83' stroke-width='4'/><text x='180' y='65' font-size='13' fill='#26313A'>3楼</text><line x1='30' y1='100' x2='170' y2='100' stroke='#2B8A83' stroke-width='4'/><text x='180' y='105' font-size='13' fill='#26313A'>2楼</text><line x1='30' y1='140' x2='170' y2='140' stroke='#8A949C' stroke-width='4'/><text x='180' y='145' font-size='13' fill='#26313A'>1楼</text><path d='M 45 138 L 45 22' stroke='#E9A23B' stroke-width='2.5' stroke-dasharray='5 4' fill='none'/></svg>",
      steps:[
        "1 楼就在地面，爬楼梯是从 1 楼开始往上走，1 楼本身不用爬。",
        "从 1 楼到 2 楼爬 1 层，2 楼到 3 楼爬 1 层，3 楼到 4 楼爬 1 层。",
        "实际爬的层数＝到达楼层－起点楼层＝4－1＝3 层。"
      ],
      answer:"一共要爬 3 层楼梯。",
      variants:[
        {type:"fill", html:"从 1 楼走到 6 楼，要爬（ ）层楼梯。", answer:5, unit:"层", analysis:"实际爬 6－1＝5 层。"},
        {type:"judge", html:"从 1 楼走到 3 楼，要爬 3 层楼梯。", answer:false, analysis:"1 楼不用爬，实际爬 3－1＝2 层，不是 3 层，所以错。"}
      ]
    },
    {
      lead:"例3",
      html:"把一根木头锯成 5 段，每锯一次要 2 分钟，一共要几分钟？",
      steps:[
        "先求要锯几次：次数＝段数－1＝5－1＝4 次。",
        "每锯一次要 2 分钟，锯 4 次就是 4 个 2 分钟。",
        "2＋2＋2＋2＝8，所以一共要 8 分钟。"
      ],
      answer:"一共要 8 分钟。",
      variants:[
        {type:"fill", html:"把一根木头锯成 4 段，每锯一次要 3 分钟，一共要（ ）分钟。", answer:9, unit:"分钟", analysis:"先求次数 4－1＝3 次，3＋3＋3＝9 分钟。"},
        {type:"choice", html:"从 1 楼走到 5 楼，每上一层要 1 分钟，从 1 楼到 5 楼要几分钟？", options:["4 分钟","5 分钟","6 分钟"], answer:0, analysis:"实际爬 5－1＝4 层，4 个 1 分钟＝4 分钟。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"一根木头锯成 6 段，要锯（ ）次。", answer:5, unit:"次", analysis:"次数＝段数－1，6－1＝5 次。"},
    {type:"fill", html:"从 1 楼走到 5 楼，要爬（ ）层楼梯。", answer:4, unit:"层", analysis:"1 楼不用爬，5－1＝4 层。"},
    {type:"choice", html:"一根木头锯了 3 次，被分成了几段？", options:["3 段","4 段","5 段"], answer:1, analysis:"段数＝次数＋1，3＋1＝4 段。"},
    {type:"judge", html:"把一根木头锯成 2 段，只要锯 1 次。", answer:true, analysis:"段数＝次数＋1，2 段就对应 1 次，这句话对。"},
    {type:"fill", html:"把木头锯成 3 段，每锯一次要 2 分钟，一共要（ ）分钟。", answer:4, unit:"分钟", analysis:"次数＝3－1＝2 次，2＋2＝4 分钟。"},
    {type:"fill", html:"从 2 楼走到 6 楼，要爬（ ）层楼梯。", answer:4, unit:"层", analysis:"起点不是 1 楼，直接算楼层差：6－2＝4 层。"},
    {type:"choice", html:"小红从 1 楼爬楼梯回家，一共爬了 4 层，她家在几楼？", options:["4 楼","5 楼","3 楼"], answer:1, analysis:"从 1 楼往上爬 4 层：1＋4＝5 楼。"}
  ],
  quiz:[
    {type:"fill", html:"一根木头锯成 7 段，要锯（ ）次。", answer:6, unit:"次", analysis:"次数＝段数－1，7－1＝6 次。"},
    {type:"fill", html:"从 1 楼走到 8 楼，要爬（ ）层楼梯。", answer:7, unit:"层", analysis:"8－1＝7 层。"},
    {type:"choice", html:"把木头锯成 4 段，每锯一次 1 分钟，一共要几分钟？", options:["3 分钟","4 分钟","5 分钟"], answer:0, analysis:"次数＝4－1＝3 次，每次 1 分钟，共 3 分钟。"},
    {type:"judge", html:"从 3 楼走到 7 楼，要爬 4 层楼梯。", answer:true, analysis:"楼层差＝7－3＝4 层，这句话对。"},
    {type:"fill", html:"一根木头锯了 2 次，一共分成（ ）段。", answer:3, unit:"段", analysis:"段数＝次数＋1，2＋1＝3 段。"}
  ],
  gen:null
}
,
{
  id:"g1-20", grade:1, idx:20,
  title:"数阵图初步",
  tag:"数学游戏",
  goal:"学会把数填进圆圈里，使每条线上几个数的和都相等。",
  points:[
    "数阵图就是把数填进圆圈或方格里，使每条线上几个数的和都相等。",
    "几条线共用的那个数（中间数或顶点数）会被重复计算。想清楚哪个数重复用，常常能先把它定下来。",
    "填好以后要验算：把每条线上的数分别加一加，和都相等，才算填对。"
  ],
  examples:[
    {
      lead:"例1",
      html:"把 1、2、3、4、5 这五个数，分别填进中间和上下左右五个圆圈里，使横行三个数的和与竖行三个数的和相等。<svg class='fig' viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'><line x1='110' y1='30' x2='110' y2='190' stroke='#7FC3B8' stroke-width='2'/><line x1='30' y1='110' x2='190' y2='110' stroke='#7FC3B8' stroke-width='2'/><circle cx='110' cy='30' r='20' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2.5'/><circle cx='110' cy='190' r='20' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2.5'/><circle cx='30' cy='110' r='20' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2.5'/><circle cx='190' cy='110' r='20' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2.5'/><circle cx='110' cy='110' r='20' fill='#F6D79E' stroke='#E9A23B' stroke-width='2.5'/></svg>",
      steps:[
        "横行 3 个数、竖行 3 个数，中间那个圈是两条线共用的，会被算两次。",
        "五个数的总和是 1＋2＋3＋4＋5＝15。把中间填 3：横行和＋竖行和＝15＋3＝18，每条线就是 18 的一半，等于 9。",
        "试填：横行 1＋3＋5＝9；竖行 2＋3＋4＝9，两条线的和相等。"
      ],
      answer:"中间填 3；横行从左到右填 1、3、5，竖行从上到下填 2、3、4，每条线的和都是 9。",
      variants:[
        {type:"fill", html:"十字中间已经填 3，横行左边填 1、右边填 5，横行三个数的和是（ ）。", answer:9, analysis:"横行三个数相加：1＋3＋5＝9。"},
        {type:"judge", html:"数阵里中间那个数，在算横行和竖行时各被算了一次，一共被算了两次。", answer:true, analysis:"中间的圈两条线共用，所以横行算一次、竖行又算一次，共两次。"}
      ]
    },
    {
      lead:"例2",
      html:"十字中间已经填 4，竖行上面填 2、下面填 6。把 3 和 5 分别填进左、右两个圈，使横行和竖行的和相等。<svg class='fig' viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'><line x1='110' y1='30' x2='110' y2='190' stroke='#7FC3B8' stroke-width='2'/><line x1='30' y1='110' x2='190' y2='110' stroke='#7FC3B8' stroke-width='2'/><circle cx='110' cy='30' r='20' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2.5'/><text x='110' y='37' font-size='16' fill='#26313A' text-anchor='middle'>2</text><circle cx='110' cy='190' r='20' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2.5'/><text x='110' y='197' font-size='16' fill='#26313A' text-anchor='middle'>6</text><circle cx='30' cy='110' r='20' fill='#FCFDF9' stroke='#E9A23B' stroke-width='2.5'/><text x='30' y='117' font-size='15' fill='#C9821F' text-anchor='middle'>?</text><circle cx='190' cy='110' r='20' fill='#FCFDF9' stroke='#E9A23B' stroke-width='2.5'/><text x='190' y='117' font-size='15' fill='#C9821F' text-anchor='middle'>?</text><circle cx='110' cy='110' r='20' fill='#F6D79E' stroke='#E9A23B' stroke-width='2.5'/><text x='110' y='117' font-size='16' fill='#26313A' text-anchor='middle'>4</text></svg>",
      steps:[
        "先算竖行的和：2＋4＋6＝12。",
        "横行也要等于 12，中间已经有 4，左右两个数合起来就要是 12－4＝8。",
        "剩下两个数是 3 和 5，3＋5＝8，正好。所以左填 3、右填 5（左右可以互换）。"
      ],
      answer:"左右分别填 3 和 5（可互换）：横行 3＋4＋5＝12，竖行 2＋4＋6＝12。",
      variants:[
        {type:"fill", html:"十字中间填 2，横行左边填 1、右边填 5，横行三个数的和是（ ）。", answer:8, analysis:"横行相加：1＋2＋5＝8。"},
        {type:"choice", html:"横行的和要等于 10，中间已经是 4，左右两个数合起来应是几？", options:["6","14","4"], answer:0, analysis:"左右合起来＝10－4＝6。"}
      ]
    },
    {
      lead:"例3",
      html:"三角形三个顶点圈和三条边中间圈，一共 6 个圈。把 1、2、3、4、5、6 分别填进去，使每条边上三个数的和都是 9。<svg class='fig' viewBox='0 0 220 210' xmlns='http://www.w3.org/2000/svg'><line x1='110' y1='30' x2='45' y2='180' stroke='#7FC3B8' stroke-width='2'/><line x1='110' y1='30' x2='175' y2='180' stroke='#7FC3B8' stroke-width='2'/><line x1='45' y1='180' x2='175' y2='180' stroke='#7FC3B8' stroke-width='2'/><circle cx='110' cy='30' r='18' fill='#F6D79E' stroke='#E9A23B' stroke-width='2.5'/><circle cx='45' cy='180' r='18' fill='#F6D79E' stroke='#E9A23B' stroke-width='2.5'/><circle cx='175' cy='180' r='18' fill='#F6D79E' stroke='#E9A23B' stroke-width='2.5'/><circle cx='77' cy='105' r='16' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2.5'/><circle cx='143' cy='105' r='16' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2.5'/><circle cx='110' cy='180' r='16' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2.5'/></svg>",
      steps:[
        "每条边的和都是 9，三条边的和合起来是 9＋9＋9＝27。",
        "六个数的总和是 1＋2＋3＋4＋5＋6＝21。三个顶点被两条边共用、多算了一次，所以三个顶点的和＝27－21＝6。",
        "在 1~6 里挑三个不同的数凑成 6，只能是 1、2、3，把它们放在三个顶点。",
        "再补边中间的数：一条边两端是 1 和 2，中间就填 9－1－2＝6；另两条边中间分别填 4 和 5。验算每边都是 9。"
      ],
      answer:"三个顶点填 1、2、3，三条边中间分别填 6、4、5（凑成每边 9），每条边的和都是 9。",
      variants:[
        {type:"fill", html:"三角形每条边的和都等于 10，三条边的和合起来是（ ）。", answer:30, analysis:"三条边：10＋10＋10＝30。"},
        {type:"judge", html:"数阵填好以后，应该把每条线上的和都加一遍检查。", answer:true, analysis:"只有每条线的和都相等，数阵才算填对，所以要逐条验算。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"十字中间填 5，横行左边填 1、右边填 9，横行三个数的和是（ ）。", answer:15, analysis:"横行相加：1＋5＋9＝15。"},
    {type:"choice", html:"十字数阵里，横行和竖行共用的是哪个圈？", options:["中间的圈","最上面的圈","最左边的圈"], answer:0, analysis:"中间的圈既在横行上、又在竖行上，被两条线共用。"},
    {type:"fill", html:"横行的和要等于 8，中间已经填 3，左右两个数合起来是（ ）。", answer:5, analysis:"左右合起来＝8－3＝5。"},
    {type:"judge", html:"数阵只要有一条线上的和对了，就算填好了。", answer:false, analysis:"必须每条线上的和都相等才对，所以错。"},
    {type:"fill", html:"把 2、4、6 三个数填在一条直线的三个圈上，这三个数的和是（ ）。", answer:12, analysis:"2＋4＋6＝12。"},
    {type:"choice", html:"十字数阵用 1~5 五个数，中间填 3 时，每条线的和是多少？", options:["9","8","10"], answer:0, analysis:"五数总和 15，中间 3 被算两次：15＋3＝18，每条线是 18 的一半＝9。"},
    {type:"fill", html:"把 1、2、3、4、5、6 这六个数合起来，一共是（ ）。", answer:21, analysis:"1＋2＋3＋4＋5＋6＝21。"}
  ],
  quiz:[
    {type:"fill", html:"十字中间填 4，竖行上面填 1、下面填 7，竖行三个数的和是（ ）。", answer:12, analysis:"竖行相加：1＋4＋7＝12。"},
    {type:"choice", html:"数阵里被重复计算、要先确定的数，通常放在哪里？", options:["中间或顶点","随便一个圈","最边上的圈"], answer:0, analysis:"中间或顶点的圈被多条线共用，会重复算，常常先确定它。"},
    {type:"fill", html:"横行的和要等于 9，中间已经填 2，左右两个数合起来是（ ）。", answer:7, analysis:"左右合起来＝9－2＝7。"},
    {type:"judge", html:"每条线上的和都相等，这个数阵才算填对。", answer:true, analysis:"这是数阵图的要求，必须每条线和都相等。"},
    {type:"fill", html:"把 3、4、5 三个数填在一条直线的三个圈上，它们的和是（ ）。", answer:12, analysis:"3＋4＋5＝12。"}
  ],
  gen:null
}
];
