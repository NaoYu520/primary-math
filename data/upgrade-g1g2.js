/* 补丁：g1/g2 思维培优 + 动画挂载（v2 大升级）
 * 仅新增不改原数据。题号由外壳按 “讲id-py序” 自动生成。
 * 每讲 peiyou 2-4 道高难题（{type,html,answer,analysis}）；
 * 每讲 anim≥1 条，ei 为该讲 examples 下标（从0起），spec 与动画模板契约一致。 */
var UPG = {

/* ===================== 一年级 ===================== */

"g1-01": {
  peiyou: [
    {type:"fill", html:"图上左边有 3 个红苹果，右边有 5 个青苹果。青苹果比红苹果多几个？", answer:2, analysis:"青苹果多。用多的减少的：5－3＝2，所以多 2 个。"},
    {type:"choice", html:"小明有 7 支铅笔，小红有 4 支。小明比小红多几支？", options:["2 支","3 支","4 支"], answer:1, analysis:"7－4＝3，小明比小红多 3 支。"},
    {type:"judge", html:"两种东西比谁多谁少时，要用多的数量减去少的数量，得到多出的部分。", answer:true, analysis:"比多少就是求差：多的－少的＝多出来的，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"count", kind:"line", points:8, unit:"个"}} ]
},

"g1-02": {
  peiyou: [
    {type:"fill", html:"排队时，小华前面有 3 人，后面有 4 人。这一队一共有（ ）人。", answer:8, analysis:"前面 3 人＋小华自己 1 人＋后面 4 人：3＋1＋4＝8 人。"},
    {type:"choice", html:"书放在桌子上面，杯子放在桌子下面。杯子相对于桌子在？", options:["上面","下面","里面"], answer:1, analysis:"“下面”就是桌子的底下，杯子在桌子下面。"},
    {type:"judge", html:"小明在小红的左边，那么小红就在小明的右边。", answer:true, analysis:"左右是相对的：A 在 B 的左边，B 就在 A 的右边，说法正确。"}
  ],
  anim: [ {ei:1, spec:{type:"count", kind:"line", points:3, unit:"人"}} ]
},

"g1-03": {
  peiyou: [
    {type:"fill", html:"一排小动物，从左数小猫排第 4，它右边还有 3 个。一共有（ ）个小动物。", answer:7, analysis:"数到小猫是第 4 个，后面还有 3 个：4＋3＝7 个。"},
    {type:"choice", html:"5 个小朋友排队，从前往后数小亮排第 2。从后往前数他排第几？", options:["第 2","第 3","第 4"], answer:2, analysis:"小亮后面有 5－2＝3 人，从后数要数到他：3＋1＝第 4 个。"},
    {type:"judge", html:"“第 3 个”和“3 个”表示的意思是一样的。", answer:false, analysis:"“第 3 个”只指一个位置上的那一个；“3 个”指一共有 3 个，意思不同。"}
  ],
  anim: [ {ei:0, spec:{type:"count", kind:"line", points:5, unit:"只"}} ]
},

"g1-04": {
  peiyou: [
    {type:"fill", html:"8 可以分成 3 和（ ）。", answer:5, analysis:"8＝3＋（ ），8－3＝5，所以填 5。"},
    {type:"choice", html:"下面哪两个数合起来正好是 10？", options:["3 和 6","4 和 6","5 和 4"], answer:1, analysis:"4＋6＝10，正好合成 10。"},
    {type:"judge", html:"把 6 分成两份，每份一定是 3。", answer:false, analysis:"6 可以分成 1 和 5、2 和 4、3 和 3 等，不一定每份都是 3。"}
  ],
  anim: [ {ei:0, spec:{type:"count", kind:"line", points:5, unit:"个"}} ]
},

"g1-05": {
  peiyou: [
    {type:"fill", html:"按规律填数：2，4，6，8，（ ）。", answer:10, analysis:"每次多 2：2→4→6→8，下一个是 8＋2＝10。"},
    {type:"choice", html:"● ○ ○ ● ○ ○ ● ，下一个应该是？", options:["●","○","△"], answer:1, analysis:"按 ●○○ 三个一组重复，● 后面轮到 ○。"},
    {type:"judge", html:"找规律时，只看一个地方就够了，不用多看几处。", answer:false, analysis:"规律要多看几处、一个对着一个比，才能确定，所以错。"}
  ],
  anim: [ {ei:0, spec:{type:"cycle", seq:["△","○"], nth:6}} ]
},

"g1-06": {
  peiyou: [
    {type:"fill", html:"一个长方形有（ ）条边。", answer:4, analysis:"长方形是四边形，上、下、左、右一共 4 条边。"},
    {type:"choice", html:"用两个同样大的正方形，可以拼成一个什么图形？", options:["正方形","长方形","三角形"], answer:1, analysis:"两个正方形并排拼在一起，长是宽的 2 倍，是长方形。"},
    {type:"judge", html:"球从任何方向看，看上去都是圆。", answer:true, analysis:"球无论从哪边看轮廓都是圆，说法正确。"}
  ],
  anim: [ {ei:2, spec:{type:"count", kind:"square", n:4, unit:"个"}} ]
},

"g1-07": {
  peiyou: [
    {type:"fill", html:"一堆小正方体，第一层 4 个，第二层 2 个，第三层 1 个。一共有（ ）个。", answer:7, analysis:"一层一层加起来：4＋2＋1＝7 个。"},
    {type:"choice", html:"数叠起来的方块时，被压在下面、看不见的方块要不要数？", options:["不要数","要数","只数一半"], answer:1, analysis:"上面有方块压着，下面一定有方块撑着，看不见也要数。"},
    {type:"judge", html:"数方块时，只要把看得见的数出来就行了。", answer:false, analysis:"看不见的支撑方块也要数，否则会数少，所以错。"}
  ],
  anim: [ {ei:0, spec:{type:"solid", layers:[[3],[1]], unit:1}} ]
},

"g1-08": {
  peiyou: [
    {type:"fill", html:"摆一个三角形用 3 根小棒，摆两个分开的三角形要用（ ）根。", answer:6, analysis:"两个三角形各自独立：3＋3＝6 根。"},
    {type:"choice", html:"摆一个正方形用 4 根小棒，摆两个分开的正方形要用几根？", options:["7 根","8 根","9 根"], answer:1, analysis:"两个分开的正方形：4＋4＝8 根。"},
    {type:"judge", html:"两个正方形挨在一起、共用一条边时，用的小棒比两个分开的要少。", answer:true, analysis:"共用的那条边只摆一次，所以少用 1 根，说法正确。"}
  ],
  anim: [ {ei:2, spec:{type:"count", kind:"square", n:3, unit:"个"}} ]
},

"g1-09": {
  peiyou: [
    {type:"fill", html:"从前往后数小丽排第 3，从后往前数小丽排第 4。这一队一共有（ ）人。", answer:6, analysis:"3＋4＝7，小丽被数了两次要减 1：7－1＝6 人。"},
    {type:"choice", html:"一队共 9 人，小明前面有 5 人。他后面有几人？", options:["3 人","4 人","5 人"], answer:0, analysis:"总人数去掉前面 5 人和小明自己：9－5－1＝3 人。"},
    {type:"judge", html:"排队求总人数时，如果自己被从前、从后各数了一次，就要减去重复的 1 次。", answer:true, analysis:"重复计数要减 1，这是排队问题的关键，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"count", kind:"line", points:6, unit:"人"}} ]
},

"g1-10": {
  peiyou: [
    {type:"fill", html:"第一盘有 8 个苹果，第二盘有 4 个。从第一盘拿（ ）个到第二盘，两盘就同样多。", answer:2, analysis:"相差 8－4＝4 个，把多出的一半移过去：4÷2＝2 个。"},
    {type:"choice", html:"哥哥给弟弟 3 张画片后两人一样多。原来哥哥比弟弟多几张？", options:["3 张","6 张","9 张"], answer:1, analysis:"原来相差＝移动数×2：3×2＝6 张。"},
    {type:"judge", html:"要让两人一样多，就把多出来的全部给少的那个人。", answer:false, analysis:"多出的部分只能分一半给少的人，全给过去反而会让少的人变多，所以错。"}
  ],
  anim: [ {ei:0, spec:{type:"bar", parts:[{n:10,color:"#D8664E",label:"第一盘10个"},{n:4,color:"#3E6FB2",label:"第二盘4个"}], total:14}} ]
},

"g1-11": {
  peiyou: [
    {type:"fill", html:"13 是单数还是双数？（填“单”或“双”）", answer:"单", analysis:"两个两个分，13 分到最后还多 1 个，所以是单数。"},
    {type:"choice", html:"下面哪个数是双数？", options:["7","9","10"], answer:2, analysis:"10 能两个两个分完，是双数；7、9 都多 1 个，是单数。"},
    {type:"judge", html:"单数加上单数，结果一定是双数。", answer:true, analysis:"两个单数都各多 1，多出来的两个正好凑成一对，所以和是双数，正确。"}
  ],
  anim: [ {ei:0, spec:{type:"cycle", seq:["单","双"], nth:7}} ]
},

"g1-12": {
  peiyou: [
    {type:"fill", html:"用凑十法算：8＋5＝（ ）。", answer:13, analysis:"把 5 分成 2 和 3：8＋2＝10，10＋3＝13。"},
    {type:"choice", html:"算 9＋6 时用凑十法，把 6 分成几和几最方便？", options:["1 和 5","2 和 4","3 和 3"], answer:0, analysis:"9 要凑成 10 缺 1，所以从 6 里拿出 1，把 6 分成 1 和 5。"},
    {type:"judge", html:"凑十法就是把其中一个数拆开，和另一个数凑成 10，再加剩下的。", answer:true, analysis:"凑十法的核心就是凑成 10 再加，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"roundnum", expr:"9+5=10+4", result:14}} ]
},

"g1-13": {
  peiyou: [
    {type:"fill", html:"一条路一边插彩旗，每隔 2 米插一面，两端都插，共插 5 面。路长（ ）米。", answer:8, analysis:"5 面旗有 5－1＝4 个间隔，每个 2 米：4×2＝8 米。"},
    {type:"choice", html:"把一根绳子剪 3 刀，剪成了几段？", options:["3 段","4 段","5 段"], answer:1, analysis:"段数＝刀数＋1：3＋1＝4 段。"},
    {type:"judge", html:"路的两端都种树时，树的棵数比间隔数多 1。", answer:true, analysis:"两端都种：棵数＝间隔数＋1，说法正确。"}
  ],
  anim: [ {ei:1, spec:{type:"plant", len:8, interval:2, mode:"both"}} ]
},

"g1-14": {
  peiyou: [
    {type:"fill", html:"今年姐姐 9 岁，弟弟 5 岁。姐姐比弟弟大（ ）岁。", answer:4, analysis:"年龄差＝9－5＝4 岁。"},
    {type:"choice", html:"上题中，3 年后姐姐比弟弟大几岁？", options:["4 岁","7 岁","2 岁"], answer:0, analysis:"两人都长 3 岁，年龄差不变，还是大 4 岁。"},
    {type:"judge", html:"哥哥比弟弟大 2 岁，再过 5 年，哥哥就比弟弟大 7 岁。", answer:false, analysis:"两人都长 5 岁，年龄差不变，还是大 2 岁，所以错。"}
  ],
  anim: [ {ei:0, spec:{type:"bar", parts:[{n:8,color:"#3E6FB2",label:"哥哥8岁"},{n:3,color:"#E9A23B",label:"弟弟3岁"}], total:11}} ]
},

"g1-15": {
  peiyou: [
    {type:"fill", html:"1 个△等于 2 个○，1 个○等于 3 个□。1 个△等于（ ）个□。", answer:6, analysis:"把 2 个○各换成 3 个□：2×3＝6 个□。"},
    {type:"choice", html:"1 支钢笔换 2 支铅笔，1 支铅笔换 3 块橡皮。1 支钢笔换几块橡皮？", options:["5 块","6 块","9 块"], answer:1, analysis:"2 支铅笔各换 3 块橡皮：2×3＝6 块。"},
    {type:"judge", html:"天平两边平衡时，两边的东西一样重。", answer:true, analysis:"天平平衡就是两边一样重，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"balance", chains:[{l:"苹果",ln:1,r:"橘子",rn:2},{l:"橘子",ln:1,r:"糖",rn:3}], result:6}} ]
},

"g1-16": {
  peiyou: [
    {type:"fill", html:"分针指着 12，时针指着 8，是（ ）时整。", answer:8, analysis:"分针指 12 是整时，时针指 8 就是 8 时整。"},
    {type:"choice", html:"分针指着 6，时针指在 3 和 4 之间，是几时半？", options:["3 时半","4 时半","6 时半"], answer:0, analysis:"分针指 6 是半时，时针走过 3 还没到 4，是 3 时半。"},
    {type:"judge", html:"钟面上分针走一大格是 5 分钟。", answer:true, analysis:"钟面一圈 60 分钟分 12 大格，每大格 60÷12＝5 分钟，正确。"}
  ],
  anim: [ {ei:1, spec:{type:"clock", sh:[3,0], eh:[3,30]}} ]
},

"g1-17": {
  peiyou: [
    {type:"fill", html:"1 元＝（ ）角。", answer:10, analysis:"人民币换算：1 元＝10 角。"},
    {type:"choice", html:"一支铅笔 8 角，付 1 元，应找回几角？", options:["2 角","3 角","8 角"], answer:0, analysis:"1 元＝10 角，10－8＝2 角。"},
    {type:"judge", html:"5 角＋5 角＝1 元。", answer:true, analysis:"5＋5＝10 角＝1 元，说法正确。"}
  ],
  anim: [ {ei:2, spec:{type:"bar", parts:[{n:5,color:"#E9A23B",label:"铅笔5角"},{n:6,color:"#D8664E",label:"本子6角"}], total:11}} ]
},

"g1-18": {
  peiyou: [
    {type:"fill", html:"有红气球 5 个、蓝气球 3 个、黄气球 4 个。一共有（ ）个气球。", answer:12, analysis:"三类合起来：5＋3＋4＝12 个。"},
    {type:"choice", html:"上面三种气球，哪种最多？", options:["红气球","蓝气球","黄气球"], answer:0, analysis:"5＞4＞3，红气球 5 个最多。"},
    {type:"judge", html:"把一堆东西按颜色分和按形状分，分出来的结果一定完全一样。", answer:false, analysis:"分类标准不同，结果一般不同，所以错。"}
  ],
  anim: [ {ei:0, spec:{type:"count", kind:"line", points:12, unit:"个"}} ]
},

"g1-19": {
  peiyou: [
    {type:"fill", html:"把一根木头锯成 5 段，要锯（ ）次。", answer:4, analysis:"次数＝段数－1：5－1＝4 次。"},
    {type:"choice", html:"从 1 楼走到 4 楼，一共走了几层楼梯？", options:["3 层","4 层","5 层"], answer:0, analysis:"楼梯层数＝4－1＝3 层（1 楼不用爬）。"},
    {type:"judge", html:"锯成的段数比锯的次数多 1。", answer:true, analysis:"段数＝次数＋1，段数比次数多 1，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"interval", kind:"wood", n:4}} ]
},

"g1-20": {
  peiyou: [
    {type:"fill", html:"在十字数阵里，中间的那个数横行、竖行都要用到，所以它会被数（ ）次。", answer:2, analysis:"中间数在横行算一次、竖行又算一次，共算 2 次。"},
    {type:"choice", html:"横行是 2＋（ ）＋6＝12，括号里应填几？", options:["3","4","5"], answer:1, analysis:"12－2－6＝4，中间填 4。"},
    {type:"judge", html:"数阵图里，处在交叉点（中间）的数会被两条线各算一次。", answer:true, analysis:"交叉点是两条线共用的，所以算两次，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"fillgrid", title:"十字数阵：填 1～5",
    cells:[
      {id:"t", row:1, col:2, val:2, say:"竖行上面填 2。"},
      {id:"l", row:2, col:1, val:1, say:"横行左边填 1。"},
      {id:"c", row:2, col:2, val:3, say:"中间的圈横行、竖行都要用到，先定中间：填 3。"},
      {id:"r", row:2, col:3, val:5, say:"横行右边填 5：1＋3＋5＝9。"},
      {id:"b", row:3, col:2, val:4, say:"竖行下面填 4：2＋3＋4＝9，每条线的和都是 9。"}
    ],
    edges:[{from:"c",to:"t"},{from:"c",to:"b"},{from:"c",to:"l"},{from:"c",to:"r"}],
    order:["c","t","b","l","r"],
    final:"中间填 3；横行 1、3、5，竖行 2、3、4，每条线的和都是 9。"
  }} ]
},

/* ===================== 二年级 ===================== */

"g2-01": {
  peiyou: [
    {type:"fill", html:"用凑整速算：45＋29＋5＝（ ）。", answer:79, analysis:"先算 45＋5＝50，再算 50＋29＝79。"},
    {type:"choice", html:"计算 38＋24＋62 时，先算哪两个数最简便？", options:["38＋24","24＋62","38＋62"], answer:2, analysis:"38＋62＝100 凑成整百，再加 24 最简便。"},
    {type:"judge", html:"连加时交换加数的位置，和不变。", answer:true, analysis:"加法交换律：交换位置和不变，凑整常用它，说法正确。"}
  ],
  anim: [ {ei:1, spec:{type:"roundnum", expr:"24+39+16", pairs:[[24,16]], result:79}} ]
},

"g2-02": {
  peiyou: [
    {type:"fill", html:"箭头按 上→右→下 的方向旋转，第 4 个箭头指向（ ）。", answer:"左", analysis:"顺时针每次转 90°：上→右→下，下一个从“下”再转 90°指向左。"},
    {type:"choice", html:"○ △ □ ○ △ □ ○ △ ？ 下一个是？", options:["○","△","□"], answer:2, analysis:"按 ○△□ 三个一组重复，△ 后面轮到 □。"},
    {type:"judge", html:"图形按固定方向旋转时，每次转动的角度可能不一样。", answer:false, analysis:"旋转规律要求方向不变、角度固定，每次转的角度一样，所以错。"}
  ],
  anim: [ {ei:2, spec:{type:"cycle", seq:["△","□","○"], nth:6}} ]
},

"g2-03": {
  peiyou: [
    {type:"fill", html:"找规律填数：1，4，7，10，（ ）。", answer:13, analysis:"每次多 3：1→4→7→10，下一个 10＋3＝13。"},
    {type:"choice", html:"找规律：2，4，8，16，下一个数是？", options:["20","24","32"], answer:2, analysis:"后一个是前一个的 2 倍：16×2＝32。"},
    {type:"judge", html:"数列 1，2，4，7，11 相邻两个数的差依次是 1，2，3，4。", answer:true, analysis:"2－1＝1，4－2＝2，7－4＝3，11－7＝4，差每次多 1，正确。"}
  ],
  anim: [ {ei:0, spec:{type:"count", kind:"line", points:5, unit:"个"}} ]
},

"g2-04": {
  peiyou: [
    {type:"fill", html:"一条路长 20 米，一边每隔 4 米种一棵树，两端都种，共种（ ）棵。", answer:6, analysis:"20÷4＝5 段，两端都种：5＋1＝6 棵。"},
    {type:"choice", html:"时钟敲 5 下，4 秒敲完（每两下间隔相等）。敲 8 下要几秒？", options:["7 秒","8 秒","9 秒"], answer:0, analysis:"敲 5 下有 4 个间隔＝4 秒，每个间隔 1 秒；敲 8 下有 7 个间隔＝7 秒。"},
    {type:"judge", html:"在圆形花坛边种树，种的棵数正好等于分成的段数。", answer:true, analysis:"封闭图形：棵数＝段数，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"plant", len:12, interval:3, mode:"both"}} ]
},

"g2-05": {
  peiyou: [
    {type:"fill", html:"从前数小军排第 4，从后数小军排第 4。这一队一共有（ ）人。", answer:7, analysis:"4＋4＝8，小军重复数了一次要减 1：8－1＝7 人。"},
    {type:"choice", html:"10 人排队，小华排第 2，小明排第 9。他们之间有几人？", options:["6 人","7 人","8 人"], answer:0, analysis:"9－2＝7，再减去两端的小明自己：7－1＝6 人。"},
    {type:"judge", html:"求两人之间有几人，要用后面的序数减去前面的序数，再减 1。", answer:true, analysis:"两端两人都不算在“之间”里，所以再减 1，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"count", kind:"line", points:8, unit:"人"}} ]
},

"g2-06": {
  peiyou: [
    {type:"fill", html:"甲有 15 张贴画，乙有 5 张。甲给乙（ ）张后两人一样多。", answer:5, analysis:"相差 15－5＝10 张，移动数＝10÷2＝5 张。"},
    {type:"choice", html:"小红给小兰 3 支笔后两人都是 8 支。小红原来有几支？", options:["5 支","8 支","11 支"], answer:2, analysis:"小红给出 3 支后剩 8 支，原来有 8＋3＝11 支。"},
    {type:"judge", html:"原来两人相差的数量＝移动数×2。", answer:true, analysis:"多出的部分被平均分成两份，移走一份，所以原来相差是移动数的 2 倍，正确。"}
  ],
  anim: [ {ei:0, spec:{type:"bar", parts:[{n:12,color:"#D8664E",label:"小明12个"},{n:4,color:"#3E6FB2",label:"小红4个"}], total:16}} ]
},

"g2-07": {
  peiyou: [
    {type:"fill", html:"两个数的和是 30，差是 6。较大的数是（ ）。", answer:18, analysis:"大数＝（和＋差）÷2＝（30＋6）÷2＝18。"},
    {type:"choice", html:"哥哥和弟弟共有 24 张，哥哥比弟弟多 4 张。弟弟有几张？", options:["10 张","14 张","20 张"], answer:0, analysis:"弟弟是小数：（24－4）÷2＝10 张。"},
    {type:"judge", html:"知道两数的和与差，用“（和＋差）÷2”求出来的是较小数。", answer:false, analysis:"（和＋差）÷2 求的是较大数；较小数要用（和－差）÷2，所以错。"}
  ],
  anim: [ {ei:0, spec:{type:"bar", parts:[{n:10,color:"#3E6FB2",label:"弟弟10张"},{n:14,color:"#E9A23B",label:"哥哥14张"}], total:24}} ]
},

"g2-08": {
  peiyou: [
    {type:"fill", html:"5 的 6 倍是（ ）。", answer:30, analysis:"求 6 个 5：5×6＝30。"},
    {type:"choice", html:"红花有 7 朵，黄花是红花的 3 倍。黄花有几朵？", options:["10 朵","21 朵","24 朵"], answer:1, analysis:"求 3 个 7：7×3＝21 朵。"},
    {type:"judge", html:"求一个数的几倍是多少，用乘法计算。", answer:true, analysis:"几倍就是几个相同的数连加，写成乘法，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"bar", parts:[{n:3,color:"#D8664E",label:"红花1份"},{n:12,color:"#E9A23B",label:"黄花4份"}], total:15}} ]
},

"g2-09": {
  peiyou: [
    {type:"fill", html:"爸爸今年 32 岁，儿子今年 4 岁。10 年后爸爸比儿子大（ ）岁。", answer:28, analysis:"年龄差不变：32－4＝28 岁。"},
    {type:"choice", html:"妈妈 28 岁，女儿 4 岁。女儿 10 岁时妈妈多少岁？", options:["34 岁","38 岁","42 岁"], answer:0, analysis:"妈妈比女儿大 28－4＝24 岁，女儿 10 岁时妈妈 10＋24＝34 岁。"},
    {type:"judge", html:"每过一年，爸爸和儿子两人的年龄和一共增加 2 岁。", answer:true, analysis:"两人各长 1 岁，年龄和增加 2 岁，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"bar", parts:[{n:35,color:"#3E6FB2",label:"爸爸35岁"},{n:7,color:"#E9A23B",label:"儿子7岁"}], total:42}} ]
},

"g2-10": {
  peiyou: [
    {type:"fill", html:"1 只狗＝2 只猫，1 只猫＝4 只鸟。1 只狗＝（ ）只鸟。", answer:8, analysis:"2 只猫各换成 4 只鸟：2×4＝8 只。"},
    {type:"choice", html:"已知 △＋○＝15，△＝○＋○。○＝？", options:["5","10","3"], answer:0, analysis:"把 △ 换成两个 ○：3 个 ○＝15，一个 ○＝5。"},
    {type:"judge", html:"天平平衡时，把左边一个物体换成和它一样重的物体，天平仍然平衡。", answer:true, analysis:"两边重量没变，天平仍平衡，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"balance", chains:[{l:"西瓜",ln:1,r:"菠萝",rn:3},{l:"菠萝",ln:1,r:"苹果",rn:2}], result:6}} ]
},

"g2-11": {
  peiyou: [
    {type:"fill", html:"甲、乙、丙三人比个子。甲不是最高，乙最矮。最高的是（ ）。", answer:"丙", analysis:"乙最矮，甲不是最高，那最高只能是丙。"},
    {type:"choice", html:"红、黄、蓝三个球，红球比黄球大，蓝球比红球大。最大的是？", options:["红球","黄球","蓝球"], answer:2, analysis:"蓝＞红＞黄，最大是蓝球。"},
    {type:"judge", html:"两句话正好相反时，它们一定一真一假。", answer:true, analysis:"互相矛盾的两句话必有一真一假，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"link", up:["小红","小青","小兰"], down:["红裙","黄裙","蓝裙"]}} ]
},

"g2-12": {
  peiyou: [
    {type:"fill", html:"一条线段上有 3 个点，一共有（ ）条线段。", answer:3, analysis:"3 个点按顺序数：2＋1＝3 条。"},
    {type:"choice", html:"一条线段上有 4 个点，一共可以数出几条线段？", options:["3 条","6 条","10 条"], answer:1, analysis:"按顺序数：3＋2＋1＝6 条。"},
    {type:"judge", html:"数线段要按顺序、一个端点一个端点数，才能不重复不遗漏。", answer:true, analysis:"有序计数是数图形不重不漏的关键，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"count", kind:"line", points:4, unit:"个点"}} ]
},

"g2-13": {
  peiyou: [
    {type:"fill", html:"两个同样大的三角形，可以拼成一个（ ）。", answer:"平行四边形", analysis:"把两个三角形等长边拼在一起，得到平行四边形。"},
    {type:"choice", html:"把平行四边形剪一刀拼成一个长方形，应该怎么剪？", options:["沿高剪","随便剪一刀","沿着边剪"], answer:0, analysis:"沿高剪下一个直角三角形，平移到另一边就拼成长方形。"},
    {type:"judge", html:"图形剪拼前后，它的总面积没有变。", answer:true, analysis:"只是换了形状，没有增加也没有减少，面积不变，说法正确。"}
  ],
  anim: [ {ei:1, spec:{type:"cutmove", base:6, height:4}} ]
},

"g2-14": {
  peiyou: [
    {type:"fill", html:"用火柴棒摆一个正方形要 4 根，摆两个挨在一起、共用一条边的正方形要用（ ）根。", answer:7, analysis:"第二个正方形和第一个共用一条边，只要再添 3 根：4＋3＝7 根。"},
    {type:"choice", html:"移动一根火柴使 9－3＝5 成立，应改成下面哪个？", options:["9－3＝6","9＋3＝6","8－3＝5"], answer:0, analysis:"9－3 本来就等于 6，把得数 5 改成 6 即可成立。"},
    {type:"judge", html:"移动火柴棒题目，通常只允许改变一根火柴的位置。", answer:true, analysis:"这类题的规则一般是“移动一根”，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"fillgrid", title:"移动一根火柴：9＋4＝1",
    cells:[
      {id:"n9", row:1, col:1, val:"9"},
      {id:"op", row:1, col:2, val:"－", say:"原式 9＋4＝1 不成立。把加号中间那根竖棒拿走，加号就变成减号：9－4。"},
      {id:"n4", row:1, col:3, val:"4"},
      {id:"eq", row:1, col:4, val:"="},
      {id:"res", row:1, col:5, val:"7", say:"把这根竖棒放到右边 1 的头顶，1 变成 7：9－4＝7。"}
    ],
    order:["op","res"],
    final:"把加号上的竖棒移到右边 1 上，变成 9－4＝7。"
  }} ]
},

"g2-15": {
  peiyou: [
    {type:"fill", html:"把 1、2、3、4、5 填进十字数阵，中间重叠的那个数填（ ）时，横行竖行三个数的和相等。", answer:3, analysis:"五数和是 15，中间数被两条线各算一次；中间填 3 时，横行 1＋3＋5＝9，竖行 2＋3＋4＝9，相等。"},
    {type:"choice", html:"上题中间填 3 时，每条线上三个数的和是多少？", options:["8","9","10"], answer:1, analysis:"1＋3＋5＝9，2＋3＋4＝9，每条线的和都是 9。"},
    {type:"judge", html:"数阵图里，处在交叉点的那个数会被两条线各计算一次。", answer:true, analysis:"交叉点被横行、竖行共用，所以算两次，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"fillgrid", title:"十字数阵：填 1～5",
    cells:[
      {id:"t", row:1, col:2, val:1, say:"竖行上面填 1。"},
      {id:"l", row:2, col:1, val:2, say:"横行左边填 2。"},
      {id:"c", row:2, col:2, val:3, say:"五个数总和 15，中间被两条线各算一次；试中间填 3。"},
      {id:"r", row:2, col:3, val:4, say:"横行右边填 4：2＋3＋4＝9。"},
      {id:"b", row:3, col:2, val:5, say:"竖行下面填 5：1＋3＋5＝9，每条线的和都是 9。"}
    ],
    edges:[{from:"c",to:"t"},{from:"c",to:"b"},{from:"c",to:"l"},{from:"c",to:"r"}],
    order:["c","t","b","l","r"],
    final:"中间填 3，上下填 1 和 5，左右填 2 和 4，每条线上三个数的和是 9。"
  }} ]
},

"g2-16": {
  peiyou: [
    {type:"fill", html:"有 23 个苹果，每个盘子最多装 5 个。至少要（ ）个盘子才能装完。", answer:5, analysis:"23÷5＝4 余 3，剩下 3 个也要一个盘子：4＋1＝5 个。"},
    {type:"choice", html:"一块布长 20 米，做一套衣服要用 3 米。最多能做几套？", options:["6 套","7 套","8 套"], answer:0, analysis:"20÷3＝6 余 2，余下 2 米不够做一套，最多 6 套。"},
    {type:"judge", html:"装东西、运东西有余数时要“进一”；做衣服、截材料有余数时要“去尾”。", answer:true, analysis:"装不下的也要一个容器，不够做一件的只能舍去，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"drawer", items:23, drawers:5}} ]
},

"g2-17": {
  peiyou: [
    {type:"fill", html:"彩灯按“红、黄、黄、蓝”的顺序循环，第 20 盏是（ ）色。", answer:"蓝", analysis:"4 盏一组，20÷4＝5 组正好分完，是每组最后一盏——蓝色。"},
    {type:"choice", html:"图形按 △ ○ ○ 循环排列，第 16 个是什么？", options:["△","○","□"], answer:0, analysis:"3 个一组，16÷3＝5 余 1，余数 1 就是每组第一个——△。"},
    {type:"judge", html:"周期问题里，余数是几就是周期里的第几个；没有余数就是周期里的最后一个。", answer:true, analysis:"这是周期问题的标准求法，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"cycle", seq:["红","黄","蓝"], nth:20}} ]
},

"g2-18": {
  peiyou: [
    {type:"fill", html:"有 2 件上衣和 3 条裤子，一共有（ ）种不同的穿法。", answer:6, analysis:"每件上衣都能配 3 条裤子：2×3＝6 种。"},
    {type:"choice", html:"3 个小朋友每两人握一次手，一共要握几次？", options:["3 次","6 次","9 次"], answer:0, analysis:"甲和乙、甲和丙、乙和丙，共 3 次。"},
    {type:"judge", html:"搭配时，上衣的件数乘裤子的条数，就是全部的搭配数。", answer:true, analysis:"乘法原理：每类数量相乘就是总数，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"link", up:["上衣A","上衣B"], down:["裤1","裤2","裤3"]}} ]
},

"g2-19": {
  peiyou: [
    {type:"fill", html:"用 1、2、3 三张数字卡片，能摆出（ ）个不同的两位数。", answer:6, analysis:"十位 3 种选法、个位剩下 2 种：3×2＝6 个。"},
    {type:"choice", html:"用 0、1、2 三张数字卡片，能摆出几个不同的两位数？", options:["4 个","6 个","3 个"], answer:0, analysis:"十位不能是 0：10、12、20、21，共 4 个。"},
    {type:"judge", html:"枚举所有答案时，按顺序一个一个写出来，能做到不重复、不遗漏。", answer:true, analysis:"有序枚举是不重不漏的好办法，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"count", kind:"line", points:6, unit:"个"}} ]
},

"g2-20": {
  peiyou: [
    {type:"fill", html:"一个三角形有 3 个顶点，每个点都连出 2 条线（都是双数点），它（ ）一笔画成。（填“能”或“不能”）", answer:"能", analysis:"全是双数点的连通图，可以从任一点出发一笔画回到起点。"},
    {type:"choice", html:"下面哪种图形一定能一笔画成？", options:["全是双数点的连通图","有 1 个单数点的图","有 3 个单数点的图"], answer:0, analysis:"全是双数点就能一笔画；单数点个数一定是偶数，1 个或 3 个本身就不可能。"},
    {type:"judge", html:"一个图里单数点的个数如果是单数，它就不能一笔画成。", answer:true, analysis:"任何图单数点个数必为偶数；单数个单数点的图不存在，更不能一笔画，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"count", kind:"tri", points:3, unit:"个点"}} ]
},

"g2-21": {
  peiyou: [
    {type:"fill", html:"一个数加上 5，再乘 2，结果是 16。这个数是（ ）。", answer:3, analysis:"倒推：16÷2＝8，8－5＝3。检验：3＋5＝8，8×2＝16。"},
    {type:"choice", html:"一个数减去 3 得 7，这个数是多少？", options:["4","10","21"], answer:1, analysis:"倒推：7＋3＝10。"},
    {type:"judge", html:"倒推时，原来是加的要改成减，原来是乘的要改成除。", answer:true, analysis:"倒推用逆运算：加变减、乘变除，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"fillgrid", title:"倒推：一个数＋5，再×2＝16",
    cells:[
      {id:"r16", row:1, col:1, val:16, label:"最后结果"},
      {id:"r8", row:1, col:2, val:8, label:"÷2", say:"结果 16 是乘 2 得到的，倒推除以 2：16÷2＝8。"},
      {id:"r3", row:1, col:3, val:3, label:"－5", say:"8 是加 5 得到的，倒推减去 5：8－5＝3。原来这个数是 3。"}
    ],
    edges:[{from:"r16",to:"r8"},{from:"r8",to:"r3"}],
    order:["r8","r3"],
    final:"倒推：16÷2＝8，8－5＝3。这个数是 3。"
  }} ]
},

"g2-22": {
  peiyou: [
    {type:"fill", html:"电影 20:30 开始，放映 1 小时 30 分，结束时间是（ ）。", answer:"22:00", analysis:"20:30＋1 小时 30 分＝22:00。"},
    {type:"choice", html:"一节课 40 分钟，8:50 上课，几点下课？", options:["9:20","9:30","9:40"], answer:1, analysis:"8:50 再过 10 分是 9:00，再 30 分是 9:30。"},
    {type:"judge", html:"经过的时间＝结束时刻－开始时刻。", answer:true, analysis:"求间隔时间就是用结束时刻减开始时刻，说法正确。"}
  ],
  anim: [ {ei:0, spec:{type:"clock", sh:[8,10], eh:[8,45]}} ]
},

"g2-23": {
  peiyou: [
    {type:"fill", html:"3 米＝（ ）厘米。", answer:300, analysis:"1 米＝100 厘米，3 米＝3×100＝300 厘米。"},
    {type:"choice", html:"2 千克等于多少克？", options:["200 克","2000 克","20000 克"], answer:1, analysis:"1 千克＝1000 克，2 千克＝2000 克。"},
    {type:"judge", html:"1 时＝60 分。", answer:true, analysis:"时间单位换算：1 时＝60 分，说法正确。"}
  ],
  anim: [ {ei:2, spec:{type:"balance", chains:[{l:"千克",ln:1,r:"袋",rn:2},{l:"袋",ln:1,r:"克",rn:1}], result:2}} ]
},

"g2-24": {
  peiyou: [
    {type:"fill", html:"条形图上：故事书 8 本、漫画书 5 本、科普书 6 本。故事书比漫画书多（ ）本。", answer:3, analysis:"8－5＝3 本。"},
    {type:"choice", html:"上面三类书一共有多少本？", options:["18 本","19 本","20 本"], answer:1, analysis:"8＋5＋6＝19 本。"},
    {type:"judge", html:"条形统计图里，直条画得越高，表示的数量越多。", answer:true, analysis:"条形图用直条长短表示数量多少，越高越多，说法正确。"}
  ],
  anim: [ {ei:1, spec:{type:"bar", parts:[{n:8,color:"#2B8A83",label:"故事书"},{n:5,color:"#E9A23B",label:"漫画书"},{n:6,color:"#3E6FB2",label:"科普书"}], total:19}} ]
},

"g2-25": {
  peiyou: [
    {type:"fill", html:"用简便方法算：56－28－12＝56－（28＋12）＝（ ）。", answer:16, analysis:"28＋12＝40，56－40＝16。"},
    {type:"choice", html:"从前数小明排第 4，从后数小明排第 5。这一队共几人？", options:["9 人","8 人","10 人"], answer:1, analysis:"4＋5＝9，小明重复数了一次要减 1：9－1＝8 人。"},
    {type:"judge", html:"一个数加上 6，再除以 2 得 8，这个数是 10。", answer:true, analysis:"倒推：8×2＝16，16－6＝10，正确。"}
  ],
  anim: [ {ei:0, spec:{type:"roundnum", expr:"56-28-12", pairs:[[28,12]], result:16}} ]
}

};
