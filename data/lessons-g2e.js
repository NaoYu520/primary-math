/* 数据：二年级 第22-25讲（g2-22 时间计算；g2-23 单位换算；g2-24 统计初步；g2-25 综合复习） */
var L_G2E = [
{
  id:"g2-22", grade:2, idx:22,
  title:"时间计算",
  tag:"生活数学",
  goal:"认识时和分的关系，会算简单的经过时间和结束、开始时刻。",
  points:[
    "钟面上时针走 1 大格是 1 时，分针走 1 圈是 60 小格，也就是 60 分，所以 1 时＝60 分。",
    "看时刻：先看时针走过数字几，就是几时多；再看分针从 12 起走了几小格，就是几分。",
    "求经过时间＝结束时刻－开始时刻；分钟不够减时，从“时”借 1 时当作 60 分再减。",
    "跨整时的经过时间可以分段算：先算到下一个整时过了几分，再加上后面的几分。"
  ],
  examples:[
    {
      lead:"例1",
      html:"小明 8:10 开始早读，8:45 早读结束。他早读了多长时间？开始时刻的钟表如下图。<svg class='fig' viewBox='0 0 220 200' xmlns='http://www.w3.org/2000/svg'><circle cx='110' cy='100' r='85' fill='#FCFDF9' stroke='#DFE2D6' stroke-width='2'/><line x1='110' y1='20' x2='110' y2='30' stroke='#8A949C' stroke-width='2'/><line x1='150' y1='30.7' x2='145' y2='39.4' stroke='#8A949C' stroke-width='2'/><line x1='179.3' y1='60' x2='170.6' y2='65' stroke='#8A949C' stroke-width='2'/><line x1='190' y1='100' x2='180' y2='100' stroke='#8A949C' stroke-width='2'/><line x1='179.3' y1='140' x2='170.6' y2='135' stroke='#8A949C' stroke-width='2'/><line x1='150' y1='169.3' x2='145' y2='160.6' stroke='#8A949C' stroke-width='2'/><line x1='110' y1='180' x2='110' y2='170' stroke='#8A949C' stroke-width='2'/><line x1='70' y1='169.3' x2='75' y2='160.6' stroke='#8A949C' stroke-width='2'/><line x1='40.7' y1='140' x2='49.4' y2='135' stroke='#8A949C' stroke-width='2'/><line x1='30' y1='100' x2='40' y2='100' stroke='#8A949C' stroke-width='2'/><line x1='40.7' y1='60' x2='49.4' y2='65' stroke='#8A949C' stroke-width='2'/><line x1='70' y1='30.7' x2='75' y2='39.4' stroke='#8A949C' stroke-width='2'/><text x='110' y='46' font-size='14' fill='#26313A' text-anchor='middle'>12</text><text x='173' y='105' font-size='14' fill='#26313A' text-anchor='middle'>3</text><text x='110' y='167' font-size='14' fill='#26313A' text-anchor='middle'>6</text><text x='47' y='105' font-size='14' fill='#26313A' text-anchor='middle'>9</text><line x1='110' y1='100' x2='160.2' y2='71' stroke='#E9A23B' stroke-width='3' stroke-linecap='round'/><line x1='110' y1='100' x2='75.6' y2='116.1' stroke='#2B8A83' stroke-width='4' stroke-linecap='round'/><circle cx='110' cy='100' r='4' fill='#26313A'/></svg>",
      steps:[
        "看钟表：时针走过 8，分针从 12 走到 2，走了 10 小格，所以开始时刻是 8:10。",
        "结束时刻是 8:45，时针还在 8 和 9 之间，说明开始和结束在同一小时内。",
        "同一小时内求经过时间，直接用分钟相减：45－10＝35（分）。"
      ],
      answer:"他早读了 35 分钟。",
      variants:[
        {type:"fill", html:"一节课 9:20 开始，9:55 下课，这节课上了（ ）分钟。", answer:35, unit:"分钟", analysis:"开始和结束都在 9 点多，直接用分钟相减：55－20＝35，上了 35 分钟。"},
        {type:"choice", html:"从 3:05 到 3:50 经过了多长时间？", options:["40 分","45 分","55 分"], answer:1, analysis:"同一小时内，50－5＝45，经过了 45 分钟。"}
      ]
    },
    {
      lead:"例2",
      html:"火车 9:40 从甲站开出，10:15 到达乙站。路上用了多长时间？时间轴如下。<svg class='fig' viewBox='0 0 320 130' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='70' x2='295' y2='70' stroke='#26313A' stroke-width='2'/><polygon points='295,70 287,66 287,74' fill='#26313A'/><line x1='50' y1='62' x2='50' y2='78' stroke='#26313A' stroke-width='2'/><line x1='170' y1='62' x2='170' y2='78' stroke='#26313A' stroke-width='2'/><line x1='250' y1='62' x2='250' y2='78' stroke='#26313A' stroke-width='2'/><text x='50' y='98' font-size='13' fill='#26313A' text-anchor='middle'>9:40</text><text x='170' y='98' font-size='13' fill='#26313A' text-anchor='middle'>10:00</text><text x='250' y='98' font-size='13' fill='#26313A' text-anchor='middle'>10:15</text><line x1='50' y1='45' x2='170' y2='45' stroke='#2B8A83' stroke-width='2'/><line x1='50' y1='41' x2='50' y2='49' stroke='#2B8A83' stroke-width='2'/><line x1='170' y1='41' x2='170' y2='49' stroke='#2B8A83' stroke-width='2'/><text x='110' y='38' font-size='13' fill='#2B8A83' text-anchor='middle'>20分</text><line x1='170' y1='22' x2='250' y2='22' stroke='#E9A23B' stroke-width='2'/><line x1='170' y1='18' x2='170' y2='26' stroke='#E9A23B' stroke-width='2'/><line x1='250' y1='18' x2='250' y2='26' stroke='#E9A23B' stroke-width='2'/><text x='210' y='15' font-size='13' fill='#E9A23B' text-anchor='middle'>15分</text></svg>",
      steps:[
        "先看从 9:40 到下一个整时 10:00 经过几分：60－40＝20（分）。",
        "再看从 10:00 到 10:15 经过几分：15－0＝15（分）。",
        "把两段合起来：20＋15＝35（分）。"
      ],
      answer:"路上用了 35 分钟。",
      variants:[
        {type:"fill", html:"动画片 6:50 开始，7:20 结束，播放了（ ）分钟。", answer:30, unit:"分钟", analysis:"从 6:50 到 7:00 是 10 分，从 7:00 到 7:20 是 20 分，合起来 10＋20＝30 分。"},
        {type:"judge", html:"从 2:50 到 3:10，一共经过了 20 分钟。", answer:true, analysis:"2:50 到 3:00 是 10 分，3:00 到 3:10 是 10 分，合起来 20 分，所以这句话对。"}
      ]
    },
    {
      lead:"例3",
      html:"妈妈 4:30 开始做饭，做饭一共用了 40 分钟。什么时候能做好？",
      steps:[
        "从 4:30 开始先往后加：再加 30 分钟就到了 5:00。",
        "40 分钟里已经用掉 30 分钟凑到整时，还剩 40－30＝10（分）。",
        "从 5:00 再往后过 10 分钟，就是 5:10。"
      ],
      answer:"5:10 能做好。",
      variants:[
        {type:"fill", html:"小明 7:15 出门上学，路上走了 25 分钟，他到校的时间是（ ）。", answer:["7:40","7时40分"], analysis:"7:15 往后加 25 分：15＋25＝40，时不变，所以是 7:40。"},
        {type:"fill", html:"电影 3:50 开始放映，放了 1 小时 30 分，电影结束的时间是（ ）。", answer:["5:20","5时20分"], analysis:"先加 1 小时到 4:50，再加 30 分：4:50 过 30 分到 5:20。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"1 时＝（ ）分。", answer:60, unit:"分", analysis:"分针走一圈是 60 分，时针正好走 1 大格，所以 1 时＝60 分。"},
    {type:"choice", html:"钟面上分针走 1 大格，是走了几分钟？", options:["1 分","5 分","60 分"], answer:1, analysis:"钟面上 1 大格里有 5 小格，每小格 1 分，所以走 1 大格是 5 分。"},
    {type:"fill", html:"小红 8:20 开始写作业，8:55 写完，写作业用了（ ）分钟。", answer:35, unit:"分钟", analysis:"都在 8 点多，直接相减：55－20＝35 分。"},
    {type:"fill", html:"从 7:45 到 8:10，经过了（ ）分钟。", answer:25, unit:"分钟", analysis:"分段算：7:45 到 8:00 是 15 分，8:00 到 8:10 是 10 分，合起来 25 分。"},
    {type:"fill", html:"一节课 40 分钟，9:50 下课，这节课开始的时间是（ ）。", answer:["9:10","9时10分"], analysis:"从下课时间往前退 40 分：9:50 退 40 分就是 9:10。"}
  ],
  quiz:[
    {type:"fill", html:"2 时＝（ ）分。", answer:120, unit:"分", analysis:"1 时是 60 分，2 时就是 2 个 60 分：60＋60＝120 分。"},
    {type:"fill", html:"从 1:15 到 1:50，经过了（ ）分钟。", answer:35, unit:"分钟", analysis:"同一小时内：50－15＝35 分。"},
    {type:"fill", html:"从 5:40 到 6:10，经过了（ ）分钟。", answer:30, unit:"分钟", analysis:"5:40 到 6:00 是 20 分，6:00 到 6:10 是 10 分，合起来 30 分。"},
    {type:"choice", html:"时针在 4 和 5 之间，分针指向 6，这时是几时几分？", options:["4:06","4:30","5:30"], answer:1, analysis:"时针在 4 和 5 之间说明是 4 点多；分针指向 6，走了 6×5＝30 分，所以是 4:30。"},
    {type:"judge", html:"分针走一圈的时候，时针正好走 1 大格。", answer:true, analysis:"分针走一圈是 60 分即 1 时，这时时针正好走 1 大格，所以这句话对。"}
  ],
  gen:{type:"timeCalc", n:3}
}
,
{
  id:"g2-23", grade:2, idx:23,
  title:"单位换算",
  tag:"生活数学",
  goal:"认识米和厘米、克和千克，会换算并能统一单位后再比较。",
  points:[
    "长度单位：1 米＝100 厘米。量较长的物体（教室、大树）常用米，量较短的（铅笔、手指）常用厘米。",
    "质量单位：1 千克＝1000 克。称较重的东西（大米、体重）常用千克，较轻的（硬币、鸡蛋）常用克。",
    "比较长短或轻重前，先把它们化成相同的单位，再比较数字的大小。",
    "大单位化小单位要添 0（米化厘米添两个 0，千克化克添三个 0）；小单位聚成大单位要去掉相应的 0。"
  ],
  examples:[
    {
      lead:"例1",
      html:"填一填：3 米＝（ ）厘米；500 厘米＝（ ）米。刻度尺如下图。<svg class='fig' viewBox='0 0 320 95' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='35' width='280' height='28' fill='#FCFDF9' stroke='#DFE2D6' stroke-width='2'/><line x1='20' y1='35' x2='20' y2='50' stroke='#26313A' stroke-width='2'/><line x1='34' y1='35' x2='34' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='48' y1='35' x2='48' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='62' y1='35' x2='62' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='76' y1='35' x2='76' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='90' y1='35' x2='90' y2='50' stroke='#26313A' stroke-width='2'/><line x1='104' y1='35' x2='104' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='118' y1='35' x2='118' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='132' y1='35' x2='132' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='146' y1='35' x2='146' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='160' y1='35' x2='160' y2='50' stroke='#26313A' stroke-width='2'/><line x1='174' y1='35' x2='174' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='188' y1='35' x2='188' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='202' y1='35' x2='202' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='216' y1='35' x2='216' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='230' y1='35' x2='230' y2='50' stroke='#26313A' stroke-width='2'/><line x1='244' y1='35' x2='244' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='258' y1='35' x2='258' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='272' y1='35' x2='272' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='286' y1='35' x2='286' y2='43' stroke='#8A949C' stroke-width='1.5'/><line x1='300' y1='35' x2='300' y2='50' stroke='#26313A' stroke-width='2'/><text x='20' y='62' font-size='11' fill='#51606A' text-anchor='middle'>0</text><text x='90' y='62' font-size='11' fill='#51606A' text-anchor='middle'>5</text><text x='160' y='62' font-size='11' fill='#51606A' text-anchor='middle'>10</text><text x='230' y='62' font-size='11' fill='#51606A' text-anchor='middle'>15</text><text x='300' y='62' font-size='11' fill='#51606A' text-anchor='middle'>20</text><text x='308' y='62' font-size='11' fill='#51606A' text-anchor='start'>厘米</text><rect x='20' y='10' width='196' height='14' rx='3' fill='#E9A23B'/><text x='118' y='21' font-size='11' fill='#fff' text-anchor='middle'>铅笔长 14 厘米</text></svg>",
      steps:[
        "记住 1 米＝100 厘米。3 米就是 3 个 100 厘米，即 300 厘米。",
        "反过来想：100 厘米＝1 米，500 厘米里有 5 个 100 厘米。",
        "所以 500 厘米就是 5 米。"
      ],
      answer:"3 米＝300 厘米；500 厘米＝5 米。",
      variants:[
        {type:"fill", html:"7 米＝（ ）厘米。", answer:700, unit:"厘米", analysis:"1 米是 100 厘米，7 米就是 7 个 100，即 700 厘米。"},
        {type:"fill", html:"200 厘米＝（ ）米。", answer:2, unit:"米", analysis:"100 厘米是 1 米，200 厘米里有 2 个 100，就是 2 米。"}
      ]
    },
    {
      lead:"例2",
      html:"有两根绳子，一根长 1 米，另一根长 90 厘米。哪根长？长多少厘米？",
      steps:[
        "两根绳子单位不一样，先化成相同的单位：1 米＝100 厘米。",
        "现在比数字：100 厘米和 90 厘米，100＞90，所以 1 米那根长。",
        "求长多少，用减法：100－90＝10（厘米）。"
      ],
      answer:"1 米的那根长，长 10 厘米。",
      variants:[
        {type:"choice", html:"在 ○ 里填上合适的符号：90 厘米 ○ 1 米。", options:["＞","＜","＝"], answer:1, analysis:"1 米＝100 厘米，90＜100，所以 90 厘米＜1 米，选“＜”。"},
        {type:"fill", html:"小明身高 1 米 20 厘米，也就是（ ）厘米。", answer:120, unit:"厘米", analysis:"1 米＝100 厘米，再加上 20 厘米：100＋20＝120 厘米。"}
      ]
    },
    {
      lead:"例3",
      html:"一袋食盐重 500 克。几袋这样的食盐正好重 1 千克？",
      steps:[
        "先统一单位：1 千克＝1000 克。",
        "一袋 500 克，两袋就是 500＋500＝1000 克。",
        "1000 克正好是 1 千克，所以需要 2 袋。"
      ],
      answer:"2 袋正好重 1 千克。",
      variants:[
        {type:"fill", html:"3 千克＝（ ）克。", answer:3000, unit:"克", analysis:"1 千克是 1000 克，3 千克就是 3 个 1000，即 3000 克。"},
        {type:"choice", html:"称一个鸡蛋有多重，用哪个单位合适？", options:["克","千克","米"], answer:0, analysis:"鸡蛋很轻，用“克”作单位；千克用来称较重的东西，米是长度单位。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"1 米＝（ ）厘米。", answer:100, unit:"厘米", analysis:"米和厘米的进率是 100，1 米＝100 厘米。"},
    {type:"fill", html:"1 千克＝（ ）克。", answer:1000, unit:"克", analysis:"千克和克的进率是 1000，1 千克＝1000 克。"},
    {type:"fill", html:"4 米＝（ ）厘米。", answer:400, unit:"厘米", analysis:"1 米＝100 厘米，4 米就是 4 个 100，即 400 厘米。"},
    {type:"choice", html:"2 米 和 180 厘米相比，哪个长？", options:["2 米长","180 厘米长","一样长"], answer:0, analysis:"2 米＝200 厘米，200＞180，所以 2 米长。"},
    {type:"fill", html:"2000 克＝（ ）千克。", answer:2, unit:"千克", analysis:"1000 克是 1 千克，2000 克里有 2 个 1000 克，就是 2 千克。"}
  ],
  quiz:[
    {type:"fill", html:"800 厘米＝（ ）米。", answer:8, unit:"米", analysis:"100 厘米是 1 米，800 厘米里有 8 个 100，就是 8 米。"},
    {type:"choice", html:"一支新铅笔大约长 18（ ）。", options:["厘米","米","千克"], answer:0, analysis:"铅笔比较短，用厘米；18 米太长了，千克是质量单位。"},
    {type:"judge", html:"1 千克的铁比 1000 克的棉花重。", answer:false, analysis:"1 千克＝1000 克，铁和棉花都是 1000 克，一样重，只是棉花体积大。所以这句话错。"},
    {type:"fill", html:"3 米比 250 厘米长（ ）厘米。", answer:50, unit:"厘米", analysis:"先统一单位：3 米＝300 厘米，300－250＝50 厘米。"},
    {type:"fill", html:"妈妈买了 2 千克苹果，也就是（ ）克。", answer:2000, unit:"克", analysis:"1 千克＝1000 克，2 千克就是 2 个 1000，即 2000 克。"}
  ],
  gen:{type:"unitConvert", n:3}
}
,
{
  id:"g2-24", grade:2, idx:24,
  title:"统计初步",
  tag:"生活数学",
  goal:"会用画“正”字收集数据，能看统计表和条形图回答简单问题。",
  points:[
    "收集数量时常用画“正”字的方法：每一笔代表 1 个，一个“正”字正好 5 笔，代表 5 个。",
    "把数出的结果填进统计表，能整齐地看出每种各有多少、谁最多谁最少。",
    "条形统计图用直条的高矮表示数量多少；每一格代表同样多，直条越高数量越多。",
    "看条形图回答问题时，先看横条各代表什么，再对着左边刻度读出数量，最后比多少、算相差。"
  ],
  examples:[
    {
      lead:"例1",
      html:"二（1）班同学最喜欢的水果调查记录如下：苹果是“正”，香蕉是“正 下”，梨是“正 一”。请把人数填出来，并说说喜欢哪种水果的人最多。",
      steps:[
        "一个“正”字是 5 笔。苹果正好 1 个正字，就是 5 人。",
        "香蕉是 1 个正字多 3 笔（“下”）：5＋3＝8 人。",
        "梨是 1 个正字多 1 笔：5＋1＝6 人。",
        "比较 5、8、6，8 最大，所以喜欢香蕉的人最多。"
      ],
      answer:"苹果 5 人、香蕉 8 人、梨 6 人；喜欢香蕉的人最多。",
      variants:[
        {type:"fill", html:"用画“正”字的方法记录时，一个“正”字代表（ ）个。", answer:5, unit:"个", analysis:"一个正字有 5 笔，每笔 1 个，所以代表 5 个。"},
        {type:"choice", html:"记录结果是“正 正 丁”，一共表示多少个？", options:["10 个","12 个","14 个"], answer:1, analysis:"两个正字是 10 个，“丁”是 2 笔即 2 个，合起来 10＋2＝12 个。"}
      ]
    },
    {
      lead:"例2",
      html:"下面条形图表示二（2）班同学最喜欢的课外书，一格代表 1 人。（1）喜欢哪类书的人最多？（2）喜欢故事书的比漫画书的多几人？<svg class='fig' viewBox='0 0 320 200' xmlns='http://www.w3.org/2000/svg'><line x1='50' y1='20' x2='50' y2='160' stroke='#26313A' stroke-width='2'/><line x1='50' y1='160' x2='300' y2='160' stroke='#26313A' stroke-width='2'/><line x1='50' y1='132' x2='300' y2='132' stroke='#DFE2D6' stroke-width='1'/><line x1='50' y1='104' x2='300' y2='104' stroke='#DFE2D6' stroke-width='1'/><line x1='50' y1='76' x2='300' y2='76' stroke='#DFE2D6' stroke-width='1'/><line x1='50' y1='48' x2='300' y2='48' stroke='#DFE2D6' stroke-width='1'/><text x='42' y='164' font-size='11' fill='#51606A' text-anchor='end'>0</text><text x='42' y='108' font-size='11' fill='#51606A' text-anchor='end'>4</text><text x='42' y='52' font-size='11' fill='#51606A' text-anchor='end'>8</text><rect x='80' y='48' width='44' height='112' fill='#2B8A83'/><rect x='150' y='90' width='44' height='70' fill='#E9A23B'/><rect x='220' y='76' width='44' height='84' fill='#3E6FB2'/><text x='102' y='178' font-size='12' fill='#26313A' text-anchor='middle'>故事书</text><text x='172' y='178' font-size='12' fill='#26313A' text-anchor='middle'>漫画书</text><text x='242' y='178' font-size='12' fill='#26313A' text-anchor='middle'>科普书</text></svg>",
      steps:[
        "先看纵轴，一格代表 1 人。对着刻度读直条高度：故事书到 8，漫画书到 5，科普书到 6。",
        "比较 8、5、6，8 最大，故事书的直条最高，所以喜欢故事书的人最多。",
        "故事书 8 人，漫画书 5 人，相差 8－5＝3（人）。"
      ],
      answer:"喜欢故事书的人最多；喜欢故事书的比漫画书的多 3 人。",
      variants:[
        {type:"fill", html:"从上面的条形图看，喜欢科普书的有（ ）人。", answer:6, unit:"人", analysis:"科普书的直条对着刻度 6，所以是 6 人。"},
        {type:"choice", html:"三类书一共调查了多少人？", options:["18 人","19 人","20 人"], answer:1, analysis:"把三类人数合起来：8＋5＋6＝19 人。"}
      ]
    },
    {
      lead:"例3",
      html:"气象小组记录了本月前 10 天的天气：晴天 6 天，阴天 3 天，雨天 1 天。先检查数得对不对，再算晴天比雨天多几天。",
      steps:[
        "把三种天气的天数填进统计表：晴天 6、阴天 3、雨天 1。",
        "先检查合计：6＋3＋1＝10，正好是记录的 10 天，说明没有数错或数漏。",
        "求晴天比雨天多几天，用减法：6－1＝5（天）。"
      ],
      answer:"晴天比雨天多 5 天。",
      variants:[
        {type:"fill", html:"上面统计中，阴天和雨天一共有（ ）天。", answer:4, unit:"天", analysis:"阴天 3 天加雨天 1 天：3＋1＝4 天。"},
        {type:"judge", html:"把分类数出的数量加起来，应该正好等于调查的总数，可以用来检查有没有数错。", answer:true, analysis:"各类数量合起来等于总数，这是检查统计是否正确的好办法，所以这句话对。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"一个“正”字一共有（ ）笔。", answer:5, unit:"笔", analysis:"正字笔画是横、竖、横、竖、横，共 5 笔。"},
    {type:"fill", html:"调查记录写着“正 正”，一共表示（ ）个。", answer:10, unit:"个", analysis:"一个正字 5 个，两个正字就是 5＋5＝10 个。"},
    {type:"choice", html:"要想清楚地看出各种数量的多少，最好用（ ）。", options:["统计表或条形图","随便写一句话","画一个圈"], answer:0, analysis:"统计表和条形图能整齐地看出数量多少，随便写一句话比较不出多少。"},
    {type:"fill", html:"二（3）班喜欢红色的有 12 人，喜欢蓝色的有 9 人，喜欢红色的比蓝色的多（ ）人。", answer:3, unit:"人", analysis:"求相差用减法：12－9＝3 人。"},
    {type:"fill", html:"图书角有故事书 15 本、科技书 8 本、画册 6 本，一共有（ ）本书。", answer:29, unit:"本", analysis:"把三类合起来：15＋8＋6＝29 本。"},
    {type:"judge", html:"条形图里，直条画得越高，表示数量越多。", answer:true, analysis:"条形图用直条高矮表示数量，越高数量越多，所以这句话对。"},
    {type:"choice", html:"同学们上学方式：步行 11 人、乘车 8 人、家长接送 5 人。步行的比乘车的多几人？", options:["2 人","3 人","4 人"], answer:1, analysis:"步行 11 人、乘车 8 人，相差 11－8＝3 人。"}
  ],
  quiz:[
    {type:"fill", html:"记录“正 下”一共是（ ）笔。", answer:8, unit:"笔", analysis:"一个正字 5 笔，“下”是 3 笔，合起来 5＋3＝8 笔。"},
    {type:"fill", html:"统计表里男生 22 人、女生 18 人，全班一共有（ ）人。", answer:40, unit:"人", analysis:"把男女生合起来：22＋18＝40 人。"},
    {type:"choice", html:"要统计全班同学最喜欢的运动，收集数据最合适的办法是（ ）。", options:["举手数一数并记录","猜一猜","随便写几个"], answer:0, analysis:"举手一一数并记录，才能得到真实、准确的数据；猜和随便写都不可靠。"},
    {type:"judge", html:"画条形图时，每一格代表的数量可以随便画，不一定相同。", answer:false, analysis:"条形图每一格必须代表同样多，这样直条高矮才能正确比较数量，所以这句话错。"},
    {type:"choice", html:"下面条形图表示喜欢各项运动的人数（一格代表 1 人）：跑步 7 人、跳绳 5 人、打球 4 人。喜欢人数最多的比最少的多几人？", options:["2 人","3 人","4 人"], answer:1, analysis:"最多是跑步 7 人，最少是打球 4 人，相差 7－4＝3 人。"}
  ],
  gen:null
}
,
{
  id:"g2-25", grade:2, idx:25,
  title:"综合复习",
  tag:"综合",
  goal:"把二年级学过的速算、典型应用、找规律、图形计数等知识综合起来灵活运用。",
  points:[
    "速算：连加先找能凑整的好朋友，连减先把两个减数凑整再一次减。",
    "典型应用：和差问题先把不相等的两数变成相等（去掉或补上相差的部分），再平分。",
    "找规律：先观察相邻两数的差或倍数，再按规律填数。",
    "图形计数：按大小分类数（小的、拼起来大的），数完再合起来，做到不重复不遗漏。"
  ],
  examples:[
    {
      lead:"例1（速算）",
      html:"用简便方法计算：56－28－12＝？",
      steps:[
        "观察两个减数：28 和 12 合起来正好凑成 40。",
        "一个数连续减去两个数，等于减去这两个数的和：56－（28＋12）。",
        "先算 28＋12＝40，再算 56－40＝16。"
      ],
      answer:"56－28－12＝16。",
      variants:[
        {type:"fill", html:"用简便方法计算：38＋25＋12＝（ ）。", answer:75, analysis:"38 和 12 凑成 50，先算 38＋12＝50，再算 50＋25＝75。"},
        {type:"choice", html:"简便计算 45＋19，正确的想法是哪一个？", options:["把 19 看成 20：45＋20－1＝64","45＋19＝59","把 19 看成 20：45＋20＋1＝66"], answer:0, analysis:"19 接近 20，45＋20＝65，多加了 1 要减 1，得 64。"}
      ]
    },
    {
      lead:"例2（和差问题）",
      html:"两筐苹果共 30 个，第一筐比第二筐多 6 个。两筐各有多少个苹果？",
      steps:[
        "一共 30 个，第一筐比第二筐多 6 个，也就是两筐不相等。",
        "从总数里先去掉多出来的 6 个：30－6＝24（个），这时两筐同样多。",
        "把 24 个平均分成两份：24 的一半是 12，这就是较少的第二筐。",
        "第一筐是 12＋6＝18（个）。检验：18＋12＝30，正好。"
      ],
      answer:"第一筐 18 个，第二筐 12 个。",
      variants:[
        {type:"fill", html:"兄妹俩共有书 20 本，哥哥比妹妹多 4 本。妹妹有（ ）本。", answer:8, unit:"本", analysis:"先去掉多的 4 本：20－4＝16，平分后妹妹有 16÷2＝8 本。"},
        {type:"choice", html:"两根绳子共长 15 米，短绳比长绳短 3 米。短绳长几米？", options:["5 米","6 米","9 米"], answer:1, analysis:"先去掉相差的 3 米：15－3＝12，平分后短绳 12÷2＝6 米。"}
      ]
    },
    {
      lead:"例3（图形计数）",
      html:"数一数，下图中一共有多少个正方形？<svg class='fig' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='120' height='120' fill='#FCFDF9' stroke='#26313A' stroke-width='2'/><line x1='80' y1='20' x2='80' y2='140' stroke='#2B8A83' stroke-width='2'/><line x1='20' y1='80' x2='140' y2='80' stroke='#2B8A83' stroke-width='2'/></svg>",
      steps:[
        "先数小正方形：一行有 2 个，一共 2 行，2×2＝4（个）。",
        "再数由 4 个小正方形拼成的大正方形：整个外圈合起来就是 1 个大正方形。",
        "合起来：4＋1＝5（个）。"
      ],
      answer:"一共有 5 个正方形。",
      variants:[
        {type:"fill", html:"上面的图中，小正方形有（ ）个。", answer:4, unit:"个", analysis:"一行 2 个，共 2 行，2×2＝4 个小正方形。"},
        {type:"choice", html:"一个 3 行 3 列的小方格图里，小正方形一共有多少个？", options:["6 个","9 个","12 个"], answer:1, analysis:"每行 3 个，共 3 行，3×3＝9 个小正方形。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"用凑整法计算：67＋29＝（ ）。", answer:96, analysis:"把 29 看成 30：67＋30＝97，多加了 1 再减 1，97－1＝96。"},
    {type:"fill", html:"找规律填数：2，4，6，8，（ ），12。", answer:10, analysis:"相邻两数都多 2：8＋2＝10，后面是 12，符合规律。"},
    {type:"fill", html:"把一根木头锯成 4 段，一共要锯（ ）次。", answer:3, unit:"次", analysis:"锯 1 次得 2 段，锯的次数比段数少 1：4－1＝3 次。"},
    {type:"fill", html:"从 10:30 到 11:10，经过了（ ）分钟。", answer:40, unit:"分钟", analysis:"10:30 到 11:00 是 30 分，11:00 到 11:10 是 10 分，合起来 40 分。"},
    {type:"choice", html:"1 米 和 99 厘米相比，哪个长？", options:["1 米长","99 厘米长","一样长"], answer:0, analysis:"1 米＝100 厘米，100＞99，所以 1 米长。"},
    {type:"fill", html:"两个数的和是 18，差是 4。较大的数是（ ）。", answer:11, analysis:"较大数＝(和＋差)÷2：(18＋4)÷2＝11，较小数是 7，11＋7＝18 对。"},
    {type:"choice", html:"上衣有 2 件，裤子有 3 条，一件上衣配一条裤子，一共有几种不同穿法？", options:["5 种","6 种","9 种"], answer:1, analysis:"每件上衣都能配 3 条裤子，2×3＝6 种穿法。"}
  ],
  quiz:[
    {type:"fill", html:"用简便方法计算：93－34－26＝（ ）。", answer:33, analysis:"两个减数凑整：34＋26＝60，再算 93－60＝33。"},
    {type:"fill", html:"找规律填数：1，2，4，8，（ ）。", answer:16, analysis:"后一个数都是前一个数的 2 倍：8×2＝16。"},
    {type:"choice", html:"时钟 3 点敲 3 下用了 6 秒，照这样敲 6 下要用几秒？", options:["12 秒","15 秒","18 秒"], answer:1, analysis:"敲 3 下之间有 2 个间隔，每个间隔 6÷2＝3 秒；敲 6 下有 5 个间隔，5×3＝15 秒。"},
    {type:"fill", html:"5 米＝（ ）厘米。", answer:500, unit:"厘米", analysis:"1 米＝100 厘米，5 米就是 5 个 100，即 500 厘米。"},
    {type:"fill", html:"用画“正”字记录，“正 正 正”一共表示（ ）个。", answer:15, unit:"个", analysis:"一个正字 5 个，三个正字就是 5＋5＋5＝15 个。"},
    {type:"choice", html:"12 个同学排成一队做操，小明前面有 5 人，小明后面有几人？", options:["6 人","7 人","8 人"], answer:0, analysis:"从总数里去掉前面 5 人，还要去掉小明自己：12－5－1＝6 人。"}
  ],
  gen:null
}
];
