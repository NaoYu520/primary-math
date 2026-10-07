/* 数据：二年级 第17-21讲 */
var L_G2D = [
{
  id:"g2-17", grade:2, idx:17,
  title:"周期问题",
  tag:"规律推理",
  goal:"会找重复出现的周期，用除法看余数来定位、算个数。",
  points:[
    "周期现象：物体或图形按一定规律不断重复出现，重复的一组叫一个“周期”，先数清一个周期里有几个。",
    "定位第几个：用它的位置数除以周期长度，余数是几就是周期里的第几个；没有余数（余数为0）就是周期里最后一个。",
    "算某样东西有几个：先看总数里有几个完整周期，每个周期里有几个就乘几，再看多出来的几个里有没有它。"
  ],
  examples:[
    {
      lead:"例1",
      html:"马路边的彩旗按 红、黄、蓝、红、黄、蓝…… 的顺序一直排下去。第 20 面彩旗是什么颜色？<svg class='fig' viewBox='0 0 300 56' xmlns='http://www.w3.org/2000/svg'><circle cx='28' cy='28' r='16' fill='#D8664E'/><circle cx='76' cy='28' r='16' fill='#E9A23B'/><circle cx='124' cy='28' r='16' fill='#3E6FB2'/><circle cx='172' cy='28' r='16' fill='#D8664E'/><circle cx='220' cy='28' r='16' fill='#E9A23B'/><circle cx='268' cy='28' r='16' fill='#3E6FB2'/></svg>",
      steps:[
        "观察排列：红、黄、蓝不断重复，一个周期有 3 面旗。",
        "用位置数 20 除以周期 3：20÷3＝6……2，说明有 6 个完整周期，还多出 2 面。",
        "多出来的第 1 面是周期里第 1 个（红），多出来的第 2 面是周期里第 2 个（黄）。",
        "余数是 2，所以第 20 面就是周期里的第 2 个，是黄色。"
      ],
      answer:"第 20 面彩旗是黄色。",
      variants:[
        {type:"choice", html:"彩旗按 红、黄、蓝 重复排列，第 26 面是什么颜色？", options:["红","黄","蓝"], answer:1, analysis:"周期是 3，26÷3＝8……2，余数是 2，对应周期里第 2 个，是黄色。"},
        {type:"judge", html:"珠子按 白、白、黑 重复串成一串，第 10 颗珠子是黑色。", answer:false, analysis:"周期是 3（白、白、黑），10÷3＝3……1，余数是 1，对应第 1 个，是白色，不是黑色，所以错。"}
      ]
    },
    {
      lead:"例2",
      html:"照上面 红、黄、蓝 的规律一直插彩旗，前 30 面彩旗里，红旗一共有多少面？<svg class='fig' viewBox='0 0 300 56' xmlns='http://www.w3.org/2000/svg'><circle cx='28' cy='28' r='16' fill='#D8664E'/><circle cx='76' cy='28' r='16' fill='#E9A23B'/><circle cx='124' cy='28' r='16' fill='#3E6FB2'/><circle cx='172' cy='28' r='16' fill='#D8664E'/><circle cx='220' cy='28' r='16' fill='#E9A23B'/><circle cx='268' cy='28' r='16' fill='#3E6FB2'/></svg>",
      steps:[
        "一个周期（红、黄、蓝）里有 1 面红旗。",
        "30 面正好是 30÷3＝10 个完整周期，没有剩余。",
        "每个周期 1 面红旗，10 个周期就是 10×1＝10 面红旗。"
      ],
      answer:"红旗一共有 10 面。",
      variants:[
        {type:"fill", html:"珠子按 红、红、白 重复串，前 20 颗里红珠子有（ ）颗。", answer:14, unit:"颗", analysis:"周期是 3，20÷3＝6……2；6 个周期每个有 2 颗红，共 6×2＝12 颗；多出的 2 颗是红、红，再加 2 颗，一共 12＋2＝14 颗。"},
        {type:"choice", html:"队伍按 男、男、女 重复排队，前 20 人里女生有几人？", options:["6 人","7 人","8 人"], answer:0, analysis:"周期是 3，20÷3＝6……2；每个周期有 1 个女生，6 个周期有 6 个；多出的 2 人是男、男，没有女生，所以共 6 人。"}
      ]
    },
    {
      lead:"例3",
      html:"今天是星期三，再过 10 天是星期几？<svg class='fig' viewBox='0 0 330 50' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='10' width='42' height='30' rx='6' fill='#FCFDF9' stroke='#DFE2D6' stroke-width='2'/><text x='29' y='30' font-size='14' fill='#26313A' text-anchor='middle'>一</text><rect x='56' y='10' width='42' height='30' rx='6' fill='#FCFDF9' stroke='#DFE2D6' stroke-width='2'/><text x='77' y='30' font-size='14' fill='#26313A' text-anchor='middle'>二</text><rect x='104' y='10' width='42' height='30' rx='6' fill='#E9A23B' stroke='#DFE2D6' stroke-width='2'/><text x='125' y='30' font-size='14' fill='#fff' text-anchor='middle'>三</text><rect x='152' y='10' width='42' height='30' rx='6' fill='#FCFDF9' stroke='#DFE2D6' stroke-width='2'/><text x='173' y='30' font-size='14' fill='#26313A' text-anchor='middle'>四</text><rect x='200' y='10' width='42' height='30' rx='6' fill='#FCFDF9' stroke='#DFE2D6' stroke-width='2'/><text x='221' y='30' font-size='14' fill='#26313A' text-anchor='middle'>五</text><rect x='248' y='10' width='42' height='30' rx='6' fill='#FCFDF9' stroke='#DFE2D6' stroke-width='2'/><text x='269' y='30' font-size='14' fill='#26313A' text-anchor='middle'>六</text><rect x='296' y='10' width='28' height='30' rx='6' fill='#FCFDF9' stroke='#DFE2D6' stroke-width='2'/><text x='310' y='30' font-size='14' fill='#26313A' text-anchor='middle'>日</text></svg>",
      steps:[
        "星期以 7 天为一个周期：一、二、三、四、五、六、日。",
        "10÷7＝1……3，说明过了 1 整周，还多 3 天。",
        "从星期三往后数 3 天：第 1 天星期四、第 2 天星期五、第 3 天星期六。"
      ],
      answer:"再过 10 天是星期六。",
      variants:[
        {type:"choice", html:"今天是星期一，再过 20 天是星期几？", options:["星期六","星期日","星期一"], answer:1, analysis:"20÷7＝2……6，从星期一往后数 6 天：二、三、四、五、六、日，所以是星期日。"},
        {type:"judge", html:"今天是星期五，再过 7 天还是星期五。", answer:true, analysis:"正好过了 1 整周（7 天），又回到星期五，所以这句话对。"}
      ]
    }
  ],
  practice:[
    {type:"choice", html:"彩旗按 红、黄、蓝 重复排列，第 22 面是什么颜色？", options:["红","黄","蓝"], answer:0, analysis:"周期是 3，22÷3＝7……1，余数是 1，对应周期里第 1 个，是红色。"},
    {type:"fill", html:"彩旗按 红、黄、蓝 重复排列，前 24 面里黄旗有（ ）面。", answer:8, unit:"面", analysis:"24÷3＝8 个完整周期，每个周期有 1 面黄旗，8×1＝8 面。"},
    {type:"choice", html:"今天是星期日，再过 15 天是星期几？", options:["星期一","星期二","星期日"], answer:0, analysis:"15÷7＝2……1，从星期日往后数 1 天是星期一。"},
    {type:"judge", html:"花按 红、红、红、黄、黄 重复摆放，第 18 盆是黄花。", answer:false, analysis:"周期是 5，18÷5＝3……3，余数是 3，对应第 3 个，是红花，不是黄花，所以错。"}
  ],
  quiz:[
    {type:"choice", html:"彩灯按 红、黄、蓝、绿 重复亮，第 30 盏是什么颜色？", options:["红","黄","蓝","绿"], answer:1, analysis:"周期是 4，30÷4＝7……2，余数是 2，对应第 2 个，是黄色。"},
    {type:"fill", html:"图形按 △、△、○ 重复排列，前 20 个里 ○ 有（ ）个。", answer:6, unit:"个", analysis:"周期是 3，20÷3＝6……2；6 个周期每个有 1 个○，共 6 个；多出的 2 个是△、△，没有○，所以共 6 个。"},
    {type:"judge", html:"一个周期有 4 个图形，第 25 个正好是这个周期里的第 1 个。", answer:true, analysis:"25÷4＝6……1，余数是 1，就是周期里的第 1 个，所以对。"},
    {type:"choice", html:"今天是星期二，再过 12 天是星期几？", options:["星期六","星期日","星期一"], answer:1, analysis:"12÷7＝1……5，从星期二往后数 5 天：三、四、五、六、日，是星期日。"},
    {type:"fill", html:"彩旗按 红、黄、蓝 重复排列，前 27 面里红旗有（ ）面。", answer:9, unit:"面", analysis:"27÷3＝9 个完整周期，每个周期 1 面红旗，9×1＝9 面。"}
  ],
  gen:{type:"period", n:4}
}
,{
  id:"g2-18", grade:2, idx:18,
  title:"搭配问题（乘法原理初步）",
  tag:"规律推理",
  goal:"会用连线图和乘法，把两类东西的所有搭配数出来。",
  points:[
    "搭配就是从两类东西里各选一个配在一起，比如一件上衣配一条裤子。",
    "分两步数：先数第一类有几种选法，再数第二类有几种选法，把两个数乘起来就是全部搭配数。",
    "用连线图或树状图能把每一种搭配都连出来，做到不重复、不遗漏。"
  ],
  examples:[
    {
      lead:"例1",
      html:"衣柜里有 2 件上衣、3 条裤子，每次穿一件上衣和一条裤子，一共有多少种不同的穿法？<svg class='fig' viewBox='0 0 300 130' xmlns='http://www.w3.org/2000/svg'><line x1='60' y1='35' x2='240' y2='20' stroke='#7FC3B8' stroke-width='2'/><line x1='60' y1='35' x2='240' y2='65' stroke='#7FC3B8' stroke-width='2'/><line x1='60' y1='35' x2='240' y2='110' stroke='#7FC3B8' stroke-width='2'/><line x1='60' y1='95' x2='240' y2='20' stroke='#7FC3B8' stroke-width='2'/><line x1='60' y1='95' x2='240' y2='65' stroke='#7FC3B8' stroke-width='2'/><line x1='60' y1='95' x2='240' y2='110' stroke='#7FC3B8' stroke-width='2'/><circle cx='60' cy='35' r='18' fill='#2B8A83'/><text x='60' y='40' font-size='13' fill='#fff' text-anchor='middle'>上A</text><circle cx='60' cy='95' r='18' fill='#2B8A83'/><text x='60' y='100' font-size='13' fill='#fff' text-anchor='middle'>上B</text><circle cx='240' cy='20' r='16' fill='#E9A23B'/><text x='240' y='25' font-size='12' fill='#fff' text-anchor='middle'>裤1</text><circle cx='240' cy='65' r='16' fill='#E9A23B'/><text x='240' y='70' font-size='12' fill='#fff' text-anchor='middle'>裤2</text><circle cx='240' cy='110' r='16' fill='#E9A23B'/><text x='240' y='115' font-size='12' fill='#fff' text-anchor='middle'>裤3</text></svg>",
      steps:[
        "选上衣有 2 种：上衣A、上衣B。",
        "选定上衣A后，可以配 3 条裤子，有 3 种穿法；上衣B同样也能配 3 条裤子。",
        "一共是 2 个 3，用乘法：2×3＝6 种。"
      ],
      answer:"一共有 6 种不同的穿法。",
      variants:[
        {type:"fill", html:"有 3 件上衣、2 条裙子，每次穿一件上衣和一条裙子，共有（ ）种穿法。", answer:6, unit:"种", analysis:"上衣 3 种、裙子 2 种，3×2＝6 种。"},
        {type:"choice", html:"早餐有 2 种饮料、3 种点心，各选一种，共有多少种搭配？", options:["5 种","6 种","9 种"], answer:1, analysis:"饮料 2 种、点心 3 种，2×3＝6 种。"}
      ]
    },
    {
      lead:"例2",
      html:"从家到学校有 2 条路，从学校到公园有 3 条路。从家经过学校到公园，一共有几条不同的路线？",
      steps:[
        "第一段（家→学校）有 2 条路可选。",
        "选第一条路到学校后，去公园还有 3 条路；选第二条路到学校，去公园同样有 3 条。",
        "一共是 2 个 3：2×3＝6 条路线。"
      ],
      answer:"一共有 6 条不同的路线。",
      variants:[
        {type:"fill", html:"食堂有 3 种荤菜、2 种素菜，选一荤一素，共有（ ）种搭配。", answer:6, unit:"种", analysis:"荤菜 3 种、素菜 2 种，3×2＝6 种。"},
        {type:"judge", html:"小明有 4 顶帽子和 2 条围巾，每天戴一顶帽子和一条围巾，共有 6 种不同戴法。", answer:false, analysis:"帽子 4 种、围巾 2 种，应是 4×2＝8 种，不是 6 种，所以错。"}
      ]
    },
    {
      lead:"例3",
      html:"妈妈买了 3 件上衣、2 条裤子、2 顶帽子，每次上衣、裤子、帽子各选一件，一共有多少种不同的穿法？",
      steps:[
        "先把上衣和裤子配起来：上衣 3 种、裤子 2 种，3×2＝6 种。",
        "上面每一种穿法，再去配 2 顶帽子，就又多出 2 种。",
        "6×2＝12 种。"
      ],
      answer:"一共有 12 种不同的穿法。",
      variants:[
        {type:"fill", html:"主食 2 种、菜 3 种、汤 2 种，各选一样，共有（ ）种搭配。", answer:12, unit:"种", analysis:"2×3×2＝12 种。"},
        {type:"choice", html:"从 3 本故事书和 2 本漫画书中各借 1 本，共有多少种借法？", options:["5 种","6 种","8 种"], answer:1, analysis:"故事书 3 种、漫画书 2 种，3×2＝6 种。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"有 2 件上衣、4 条裤子，每次各选一件，共有（ ）种穿法。", answer:8, unit:"种", analysis:"2×4＝8 种。"},
    {type:"choice", html:"早餐有 2 种粥、3 种包子，各选一种，共有多少种？", options:["5 种","6 种","8 种"], answer:1, analysis:"2×3＝6 种。"},
    {type:"fill", html:"从甲村到乙村有 3 条路，从乙村到丙村有 2 条路。经过乙村到丙村共有（ ）条路线。", answer:6, unit:"条", analysis:"3×2＝6 条。"},
    {type:"judge", html:"商店有 4 支笔和 3 个本子，各买一个，共有 7 种买法。", answer:false, analysis:"笔 4 种、本子 3 种，应是 4×3＝12 种，不是 7 种，所以错。"},
    {type:"fill", html:"有 2 双鞋、3 双袜子、2 顶帽子，各选一样，共有（ ）种搭配。", answer:12, unit:"种", analysis:"2×3×2＝12 种。"},
    {type:"choice", html:"菜单有 3 种荤菜、2 种素菜，选一荤一素，共有多少种？", options:["5 种","6 种","9 种"], answer:1, analysis:"3×2＝6 种。"},
    {type:"fill", html:"小红有 3 件外套和 2 条围巾，一共有（ ）种不同搭配。", answer:6, unit:"种", analysis:"3×2＝6 种。"}
  ],
  quiz:[
    {type:"fill", html:"有 3 件上衣、2 条裙子，每次各选一件，共有（ ）种穿法。", answer:6, unit:"种", analysis:"3×2＝6 种。"},
    {type:"choice", html:"饮料有 2 种、点心有 4 种，各选一种，共有多少种搭配？", options:["6 种","8 种","12 种"], answer:1, analysis:"2×4＝8 种。"},
    {type:"judge", html:"搭配时，把两类东西各自的选法数相乘，就是全部的搭配数。", answer:true, analysis:"这就是乘法原理，两类选法相乘，所以对。"},
    {type:"fill", html:"主食 2 种、菜 3 种、汤 1 种，各选一样，共有（ ）种搭配。", answer:6, unit:"种", analysis:"2×3×1＝6 种。"},
    {type:"choice", html:"从家到公园有 2 条路，从公园到图书馆有 4 条路。经过公园到图书馆共有几条路？", options:["6 条","8 条","12 条"], answer:1, analysis:"2×4＝8 条。"}
  ],
  gen:null
}
,{
  id:"g2-19", grade:2, idx:19,
  title:"简单枚举",
  tag:"规律推理",
  goal:"学会按顺序把所有可能一一列举出来，做到不重复、不遗漏。",
  points:[
    "枚举就是把所有可能的答案一个一个按顺序写出来，数清楚一共有多少个。",
    "列举时先固定第一个，再换第二个，可以用列表或树形图帮忙，这样不重复、不遗漏。",
    "列完要回头检查一遍：有没有漏掉的，有没有重复写的。"
  ],
  examples:[
    {
      lead:"例1",
      html:"用 1、2、3 三个数字，能组成多少个没有重复数字的两位数？<svg class='fig' viewBox='0 0 240 110' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='10' width='60' height='28' rx='5' fill='#FCFDF9' stroke='#DFE2D6' stroke-width='2'/><text x='40' y='29' font-size='14' fill='#26313A' text-anchor='middle'>十位1</text><rect x='90' y='10' width='50' height='28' rx='5' fill='#2B8A83'/><text x='115' y='29' font-size='14' fill='#fff' text-anchor='middle'>12</text><rect x='155' y='10' width='50' height='28' rx='5' fill='#2B8A83'/><text x='180' y='29' font-size='14' fill='#fff' text-anchor='middle'>13</text><rect x='10' y='42' width='60' height='28' rx='5' fill='#FCFDF9' stroke='#DFE2D6' stroke-width='2'/><text x='40' y='61' font-size='14' fill='#26313A' text-anchor='middle'>十位2</text><rect x='90' y='42' width='50' height='28' rx='5' fill='#3E6FB2'/><text x='115' y='61' font-size='14' fill='#fff' text-anchor='middle'>21</text><rect x='155' y='42' width='50' height='28' rx='5' fill='#3E6FB2'/><text x='180' y='61' font-size='14' fill='#fff' text-anchor='middle'>23</text><rect x='10' y='74' width='60' height='28' rx='5' fill='#FCFDF9' stroke='#DFE2D6' stroke-width='2'/><text x='40' y='93' font-size='14' fill='#26313A' text-anchor='middle'>十位3</text><rect x='90' y='74' width='50' height='28' rx='5' fill='#E9A23B'/><text x='115' y='93' font-size='14' fill='#fff' text-anchor='middle'>31</text><rect x='155' y='74' width='50' height='28' rx='5' fill='#E9A23B'/><text x='180' y='93' font-size='14' fill='#fff' text-anchor='middle'>32</text></svg>",
      steps:[
        "先固定十位。十位是 1 时，个位可以是 2 或 3：12、13。",
        "十位是 2 时：21、23；十位是 3 时：31、32。",
        "按顺序数一数，一共列出了 6 个不同的两位数。"
      ],
      answer:"能组成 6 个不同的两位数。",
      variants:[
        {type:"fill", html:"用 4、5 两个数字，能组成（ ）个没有重复数字的两位数。", answer:2, unit:"个", analysis:"十位是 4 有 45，十位是 5 有 54，共 2 个。"},
        {type:"choice", html:"用 1、2 两个数字能组成几个两位数？", options:["1 个","2 个","3 个"], answer:1, analysis:"12 和 21，共 2 个。"}
      ]
    },
    {
      lead:"例2",
      html:"有 A、B、C 三个小朋友，每两个人握一次手，一共要握多少次手？",
      steps:[
        "让 A 先和 B、C 握手：A-B、A-C，2 次。",
        "B 已经和 A 握过，再和 C 握：B-C，1 次。",
        "C 和 A、B 都握过了。一共 2＋1＝3 次。"
      ],
      answer:"一共要握 3 次手。",
      variants:[
        {type:"fill", html:"4 个小朋友，每两人握一次手，一共要握（ ）次。", answer:6, unit:"次", analysis:"第一个人和其余 3 人握 3 次，第二人和剩下 2 人握 2 次，第三人再和最后 1 人握 1 次：3＋2＋1＝6 次。"},
        {type:"judge", html:"3 个球队，每两个队比赛一场，一共要赛 6 场。", answer:false, analysis:"和握手一样：2＋1＝3 场，不是 6 场，所以错。"}
      ]
    },
    {
      lead:"例3",
      html:"有 1 角、5 角两枚硬币，每次拿一枚或两枚，能组成多少种不同的钱数？",
      steps:[
        "只拿一枚：1 角、5 角，2 种。",
        "两枚一起拿：1 角＋5 角＝6 角，1 种。",
        "合起来一共 2＋1＝3 种不同钱数。"
      ],
      answer:"能组成 3 种不同的钱数。",
      variants:[
        {type:"fill", html:"有 5 角、1 元两枚硬币，每次拿一枚或两枚，能组成（ ）种不同钱数。", answer:3, unit:"种", analysis:"5 角、1 元、1 元 5 角，共 3 种。"},
        {type:"choice", html:"3 个人排成一排照相，一共有多少种不同排法？", options:["3 种","6 种","9 种"], answer:1, analysis:"排在最左边的有 3 种选择，中间 2 种，最右 1 种，3×2×1＝6 种（也可一一列举：ABC、ACB、BAC、BCA、CAB、CBA）。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"用 2、3、4 三个数字，能组成（ ）个没有重复数字的两位数。", answer:6, unit:"个", analysis:"十位是 2：23、24；十位是 3：32、34；十位是 4：42、43，共 6 个。"},
    {type:"choice", html:"4 个球队，每两个队比赛一场，一共要赛几场？", options:["4 场","6 场","8 场"], answer:1, analysis:"3＋2＋1＝6 场。"},
    {type:"fill", html:"有 5 角、1 元两枚硬币，每次拿一枚或两枚，能组成（ ）种不同钱数。", answer:3, unit:"种", analysis:"5 角、1 元、1 元 5 角，共 3 种。"},
    {type:"judge", html:"用 1、2、3 组成没有重复数字的两位数，十位是 1 的有 3 个。", answer:false, analysis:"十位是 1 的只有 12、13，共 2 个，不是 3 个，所以错。"},
    {type:"fill", html:"3 个小朋友排成一排，一共有（ ）种不同排法。", answer:6, unit:"种", analysis:"3×2×1＝6 种（ABC、ACB、BAC、BCA、CAB、CBA）。"},
    {type:"choice", html:"2 件上衣和 2 条裤子搭配，一共有多少种？", options:["3 种","4 种","6 种"], answer:1, analysis:"2×2＝4 种。"},
    {type:"fill", html:"5 个好朋友，每两个人通一次电话，一共要通（ ）次。", answer:10, unit:"次", analysis:"4＋3＋2＋1＝10 次。"}
  ],
  quiz:[
    {type:"fill", html:"用 3、5、7 三个数字，能组成（ ）个没有重复数字的两位数。", answer:6, unit:"个", analysis:"十位是 3：35、37；十位是 5：53、57；十位是 7：73、75，共 6 个。"},
    {type:"choice", html:"4 个小朋友，每两人握一次手，一共要握几次？", options:["4 次","6 次","8 次"], answer:1, analysis:"3＋2＋1＝6 次。"},
    {type:"judge", html:"列举所有答案时，按顺序先固定第一个、再换下一个，能防止重复和遗漏。", answer:true, analysis:"按顺序列举是枚举不重不漏的关键方法，所以对。"},
    {type:"fill", html:"有 1 克、5 克两个砝码（砝码放一边称），能称出（ ）种不同质量。", answer:3, unit:"种", analysis:"1 克、5 克、1＋5＝6 克，共 3 种。"},
    {type:"choice", html:"3 个人排成一排照相，一共有多少种排法？", options:["3 种","6 种","9 种"], answer:1, analysis:"3×2×1＝6 种。"}
  ],
  gen:null
}
,{
  id:"g2-20", grade:2, idx:20,
  title:"一笔画",
  tag:"数学游戏",
  goal:"会数单数点，判断一个图能不能一笔画，并知道从哪里画起。",
  points:[
    "一笔画就是笔不离开纸、每条线只画一次，把整个图画出来。",
    "从一个点连出去的线有几条，这个点就叫“几点”；线数是单数的点叫单数点（奇点），线数是双数的点叫双数点（偶点）。",
    "能不能一笔画，全看单数点的个数：单数点是 0 个或 2 个就能一笔画；超过 2 个就不能。有 2 个单数点时，要从其中一个单数点出发。"
  ],
  examples:[
    {
      lead:"例1",
      html:"下面这个三角形，能不能一笔画成？<svg class='fig' viewBox='0 0 300 130' xmlns='http://www.w3.org/2000/svg'><polygon points='60,105 150,25 240,105' fill='none' stroke='#2B8A83' stroke-width='2' stroke-linejoin='round'/><circle cx='60' cy='105' r='7' fill='#2B8A83'/><circle cx='150' cy='25' r='7' fill='#2B8A83'/><circle cx='240' cy='105' r='7' fill='#2B8A83'/><text x='60' y='125' font-size='12' fill='#51606A' text-anchor='middle'>连2条</text><text x='150' y='15' font-size='12' fill='#51606A' text-anchor='middle'>连2条</text><text x='240' y='125' font-size='12' fill='#51606A' text-anchor='middle'>连2条</text></svg>",
      steps:[
        "数每个点连了几条线：三角形三个顶点，每个点都连 2 条线。",
        "2 是双数，所以三个点都是双数点，单数点一共有 0 个。",
        "单数点是 0 个，符合“0 个或 2 个”，所以这个三角形能一笔画。"
      ],
      answer:"能一笔画成，从任意一点出发都可以。",
      variants:[
        {type:"judge", html:"一个圆圈（没有交叉点）能一笔画成。", answer:true, analysis:"圆圈是闭合曲线，没有奇点，单数点是 0 个，能一笔画，所以对。"},
        {type:"choice", html:"三角形每个顶点都连 2 条线，它的单数点有几个？", options:["0 个","1 个","2 个"], answer:0, analysis:"每个点连 2 条线，2 是双数，都是双数点，单数点 0 个。"}
      ]
    },
    {
      lead:"例2",
      html:"下面这条折线 A—B—C，能不能一笔画？应该从哪里开始？<svg class='fig' viewBox='0 0 300 90' xmlns='http://www.w3.org/2000/svg'><line x1='45' y1='50' x2='150' y2='50' stroke='#2B8A83' stroke-width='2'/><line x1='150' y1='50' x2='255' y2='50' stroke='#2B8A83' stroke-width='2'/><circle cx='45' cy='50' r='8' fill='#D8664E'/><text x='45' y='38' font-size='13' fill='#26313A' text-anchor='middle'>A</text><circle cx='150' cy='50' r='8' fill='#2B8A83'/><text x='150' y='38' font-size='13' fill='#26313A' text-anchor='middle'>B</text><circle cx='255' cy='50' r='8' fill='#D8664E'/><text x='255' y='38' font-size='13' fill='#26313A' text-anchor='middle'>C</text><text x='45' y='78' font-size='11' fill='#D8664E' text-anchor='middle'>奇点</text><text x='255' y='78' font-size='11' fill='#D8664E' text-anchor='middle'>奇点</text></svg>",
      steps:[
        "点 A 只连 1 条线（到 B），是单数点；点 C 只连 1 条线，也是单数点。",
        "中间点 B 连 2 条线，是双数点。",
        "单数点一共 2 个，能一笔画；有 2 个单数点时，要从其中一个单数点出发。"
      ],
      answer:"能一笔画，要从端点 A 或 C 出发。",
      variants:[
        {type:"fill", html:"一条线段有 2 个端点，每个端点连 1 条线，它一共有（ ）个单数点。", answer:2, unit:"个", analysis:"两个端点各连 1 条线，1 是单数，所以都是单数点，共 2 个。"},
        {type:"choice", html:"像 A—B—C 这样两个端点的折线，能一笔画吗？", options:["能","不能"], answer:0, analysis:"它有 2 个单数点，符合“0 个或 2 个”，能一笔画。"}
      ]
    },
    {
      lead:"例3",
      html:"下面这个“十字”形，能不能一笔画成？<svg class='fig' viewBox='0 0 300 130' xmlns='http://www.w3.org/2000/svg'><line x1='40' y1='65' x2='260' y2='65' stroke='#2B8A83' stroke-width='2'/><line x1='150' y1='15' x2='150' y2='115' stroke='#2B8A83' stroke-width='2'/><circle cx='40' cy='65' r='8' fill='#D8664E'/><circle cx='260' cy='65' r='8' fill='#D8664E'/><circle cx='150' cy='15' r='8' fill='#D8664E'/><circle cx='150' cy='115' r='8' fill='#D8664E'/><circle cx='150' cy='65' r='8' fill='#2B8A83'/><text x='40' y='90' font-size='11' fill='#D8664E' text-anchor='middle'>奇点</text><text x='260' y='90' font-size='11' fill='#D8664E' text-anchor='middle'>奇点</text></svg>",
      steps:[
        "十字有 4 个端点，每个端点只连 1 条线，都是单数点。",
        "中间交叉点连了 4 条线，4 是双数，是双数点。",
        "单数点一共有 4 个，超过了 2 个，所以不能一笔画。"
      ],
      answer:"不能一笔画成（单数点有 4 个）。",
      variants:[
        {type:"judge", html:"一个图如果有 4 个单数点，就不能一笔画。", answer:true, analysis:"能一笔画的图，单数点只能是 0 个或 2 个，4 个超过了，所以不能，这句话对。"},
        {type:"choice", html:"下面哪种情况一定能一笔画？", options:["单数点 0 个","单数点 3 个","单数点 4 个"], answer:0, analysis:"单数点是 0 个或 2 个才能一笔画，三个选项里只有“0 个”符合。"}
      ]
    }
  ],
  practice:[
    {type:"choice", html:"一个三角形的单数点有几个？", options:["0 个","1 个","3 个"], answer:0, analysis:"每个顶点连 2 条线，都是双数点，单数点 0 个。"},
    {type:"judge", html:"有 2 个单数点的图能一笔画，并且要从单数点出发。", answer:true, analysis:"这是一笔画的规则，所以对。"},
    {type:"fill", html:"一条线段有 2 个端点，它一共有（ ）个单数点。", answer:2, unit:"个", analysis:"两个端点各连 1 条线，都是单数点，共 2 个。"},
    {type:"choice", html:"“十字”形有 4 个端点，它有几个单数点？", options:["2 个","3 个","4 个"], answer:2, analysis:"4 个端点各连 1 条线，都是单数点，共 4 个。"},
    {type:"judge", html:"有 3 个单数点的图也能一笔画。", answer:false, analysis:"能一笔画的图，单数点只能是 0 个或 2 个，3 个不行，所以错。"},
    {type:"choice", html:"一个图有 0 个单数点，它能一笔画吗？", options:["能","不能"], answer:0, analysis:"单数点是 0 个或 2 个就能一笔画，0 个符合，能。"},
    {type:"choice", html:"下面哪个图不能一笔画？", options:["三角形（0 个单数点）","折线 A—B—C（2 个单数点）","十字形（4 个单数点）"], answer:2, analysis:"只有十字形有 4 个单数点，超过 2 个，不能一笔画。"}
  ],
  quiz:[
    {type:"choice", html:"能一笔画的图，它的单数点个数必须是多少？", options:["0 个或 2 个","3 个","4 个"], answer:0, analysis:"单数点是 0 个或 2 个才能一笔画。"},
    {type:"judge", html:"一个图有 2 个单数点时，要从其中一个单数点开始画。", answer:true, analysis:"这是一笔画的规定，从单数点出发才能不重复地画完，所以对。"},
    {type:"fill", html:"一个三角形一共有（ ）个单数点。", answer:0, unit:"个", analysis:"三个顶点各连 2 条线，都是双数点，单数点 0 个。"},
    {type:"choice", html:"十字形有 4 个单数点，它能一笔画吗？", options:["能","不能"], answer:1, analysis:"4 个单数点超过了 2 个，不能一笔画。"},
    {type:"judge", html:"一个圆圈能一笔画成。", answer:true, analysis:"圆圈没有奇点，单数点是 0 个，能一笔画，所以对。"}
  ],
  gen:null
}
,{
  id:"g2-21", grade:2, idx:21,
  title:"倒推法",
  tag:"规律推理",
  goal:"学会从最后结果出发，用相反的运算一步一步倒着求原来的数。",
  points:[
    "倒推法就是从最后知道的结果出发，反过来一步一步往前想，求原来的数。",
    "倒推时运算要反过来：原来是加，倒推用减；原来是减，倒推用加；原来是乘，倒推用除；原来是除，倒推用乘。",
    "把过程画成方框图，从结果往回算，每算一步都用相反的运算，最后再顺着验算一遍。"
  ],
  examples:[
    {
      lead:"例1",
      html:"一个数加上 5，再乘 2，结果是 16。这个数是几？<svg class='fig' viewBox='0 0 320 130' xmlns='http://www.w3.org/2000/svg'><rect x='10' y='12' width='70' height='30' rx='6' fill='#FCFDF9' stroke='#DFE2D6' stroke-width='2'/><text x='45' y='32' font-size='13' fill='#26313A' text-anchor='middle'>原数?</text><line x1='80' y1='27' x2='120' y2='27' stroke='#2B8A83' stroke-width='2'/><text x='100' y='20' font-size='12' fill='#2B8A83' text-anchor='middle'>+5</text><rect x='120' y='12' width='70' height='30' rx='6' fill='#FCFDF9' stroke='#DFE2D6' stroke-width='2'/><text x='155' y='32' font-size='13' fill='#26313A' text-anchor='middle'>?</text><line x1='190' y1='27' x2='230' y2='27' stroke='#2B8A83' stroke-width='2'/><text x='210' y='20' font-size='12' fill='#2B8A83' text-anchor='middle'>×2</text><rect x='230' y='12' width='70' height='30' rx='6' fill='#E9A23B'/><text x='265' y='32' font-size='13' fill='#fff' text-anchor='middle'>16</text><rect x='230' y='88' width='70' height='30' rx='6' fill='#53A06B'/><text x='265' y='108' font-size='13' fill='#fff' text-anchor='middle'>16</text><line x1='230' y1='103' x2='190' y2='103' stroke='#53A06B' stroke-width='2'/><text x='210' y='96' font-size='12' fill='#53A06B' text-anchor='middle'>÷2</text><rect x='120' y='88' width='70' height='30' rx='6' fill='#53A06B'/><text x='155' y='108' font-size='13' fill='#fff' text-anchor='middle'>8</text><line x1='120' y1='103' x2='80' y2='103' stroke='#53A06B' stroke-width='2'/><text x='100' y='96' font-size='12' fill='#53A06B' text-anchor='middle'>-5</text><rect x='10' y='88' width='70' height='30' rx='6' fill='#53A06B'/><text x='45' y='108' font-size='13' fill='#fff' text-anchor='middle'>3</text></svg>",
      steps:[
        "最后结果是 16，它是“乘 2”得到的，倒推就除以 2：16÷2＝8。",
        "8 是“加上 5”得到的，倒推就减去 5：8－5＝3。",
        "原来这个数是 3。验算：3＋5＝8，8×2＝16，对。"
      ],
      answer:"这个数是 3。",
      variants:[
        {type:"fill", html:"一个数加上 4，再乘 2，结果是 12。这个数是（ ）。", answer:2, analysis:"倒推：12÷2＝6，6－4＝2。验算：2＋4＝6，6×2＝12，对。"},
        {type:"choice", html:"一个数乘 2 得到 10，倒推时应该怎样算？", options:["10÷2＝5","10×2＝20","10－2＝8"], answer:0, analysis:"原来是乘 2，倒推就用除以 2：10÷2＝5。"}
      ]
    },
    {
      lead:"例2",
      html:"小明有一些糖，吃了 4 颗，妈妈又给了他 6 颗，现在有 10 颗。小明原来有几颗糖？",
      steps:[
        "现在有 10 颗，这是妈妈给了 6 颗以后的；倒推妈妈给之前有 10－6＝4 颗。",
        "这 4 颗又是吃了 4 颗以后剩下的；倒推吃之前有 4＋4＝8 颗。",
        "所以原来有 8 颗。验算：8－4＝4，4＋6＝10，对。"
      ],
      answer:"小明原来有 8 颗糖。",
      variants:[
        {type:"fill", html:"树上有一些小鸟，飞走 3 只，又飞来 5 只，现在有 9 只。原来有（ ）只。", answer:7, unit:"只", analysis:"倒推：9－5＝4（飞来前），4＋3＝7（飞往前走）。验算：7－3＝4，4＋5＝9，对。"},
        {type:"judge", html:"倒推时，“飞来 5 只”这一步，要倒推成“减去 5 只”。", answer:true, analysis:"飞来相当于加，倒推就用减，减去 5 只，所以对。"}
      ]
    },
    {
      lead:"例3",
      html:"一个数加上 6，再减去 4，等于 9。这个数是几？",
      steps:[
        "最后是 9，它是“减去 4”得到的，倒推就加 4：9＋4＝13。",
        "13 是“加上 6”得到的，倒推就减 6：13－6＝7。",
        "原来这个数是 7。验算：7＋6＝13，13－4＝9，对。"
      ],
      answer:"这个数是 7。",
      variants:[
        {type:"fill", html:"一个数加上 7，再减去 3，等于 8。这个数是（ ）。", answer:4, analysis:"倒推：8＋3＝11，11－7＝4。验算：4＋7＝11，11－3＝8，对。"},
        {type:"choice", html:"一个数减去 6 得到 5，这个数是几？", options:["11","1","30"], answer:0, analysis:"原来是减 6，倒推就加 6：5＋6＝11。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"一个数加上 5 得 12，这个数是（ ）。", answer:7, analysis:"倒推用减：12－5＝7。验算：7＋5＝12。"},
    {type:"fill", html:"一个数乘 4 得 20，这个数是（ ）。", answer:5, analysis:"倒推用除：20÷4＝5。验算：5×4＝20。"},
    {type:"choice", html:"一个数减去 8 得 6，这个数是几？", options:["14","2","48"], answer:0, analysis:"原来是减 8，倒推加 8：6＋8＝14。"},
    {type:"judge", html:"倒推法就是从最后的结果出发，反过来一步一步往前算。", answer:true, analysis:"这正是倒推法的含义，所以对。"},
    {type:"fill", html:"一个数加上 3，再乘 2，得 16。这个数是（ ）。", answer:5, analysis:"倒推：16÷2＝8，8－3＝5。验算：5＋3＝8，8×2＝16，对。"},
    {type:"choice", html:"小红有一些铅笔，借给同学 2 支，又买来 5 支，现在有 8 支。原来有几支？", options:["5","11","1"], answer:0, analysis:"倒推：8－5＝3（买来前），3＋2＝5（借走前）。验算：5－2＝3，3＋5＝8，对。"},
    {type:"fill", html:"一个数减去 4，再加 2，得 6。这个数是（ ）。", answer:8, analysis:"倒推：6－2＝4，4＋4＝8。验算：8－4＝4，4＋2＝6，对。"}
  ],
  quiz:[
    {type:"fill", html:"一个数加上 6 得 15，这个数是（ ）。", answer:9, analysis:"倒推：15－6＝9。验算：9＋6＝15。"},
    {type:"choice", html:"一个数除以 2 得 5，这个数是几？", options:["10","7","3"], answer:0, analysis:"原来是除以 2，倒推乘 2：5×2＝10。"},
    {type:"judge", html:"倒推时，原来是乘的运算，倒推就要用除法。", answer:true, analysis:"乘和除互为逆运算，倒推时乘变除，所以对。"},
    {type:"fill", html:"一个数加上 4，再减去 2，得 10。这个数是（ ）。", answer:8, analysis:"倒推：10＋2＝12，12－4＝8。验算：8＋4＝12，12－2＝10，对。"},
    {type:"choice", html:"鱼缸里有一些鱼，捞走 4 条，又放进 3 条，现在有 7 条。原来有几条？", options:["8","6","14"], answer:0, analysis:"倒推：7－3＝4（放进前），4＋4＝8（捞走前）。验算：8－4＝4，4＋3＝7，对。"}
  ],
  gen:null
}
];
