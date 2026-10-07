/* 数据：种子课（g1-01 数一数与比多少；g2-01 凑整速算） */
var L_SEED = [
{
  id:"g1-01", grade:1, idx:1,
  title:"数一数与比多少",
  tag:"数与计算",
  goal:"学会按顺序数数，用一一对应的方法比较物体的多少。",
  points:[
    "数数时要按一定的顺序，用手指或笔尖点一个、数一个，做到不重复、不遗漏。",
    "比较两种物体谁多谁少时，把它们一个对着一个摆好（一一对应），有多余的那种就多。",
    "多种图形混在一起，可以先分类，一种一种分别数，再合起来。"
  ],
  examples:[
    {
      lead:"例1",
      html:"数一数，下图中一共有多少个小球？<svg class='fig' viewBox='0 0 300 56' xmlns='http://www.w3.org/2000/svg'><circle cx='24' cy='28' r='14' fill='#2B8A83'/><circle cx='60' cy='28' r='14' fill='#2B8A83'/><circle cx='96' cy='28' r='14' fill='#2B8A83'/><circle cx='132' cy='28' r='14' fill='#2B8A83'/><circle cx='168' cy='28' r='14' fill='#2B8A83'/><circle cx='204' cy='28' r='14' fill='#2B8A83'/><circle cx='240' cy='28' r='14' fill='#2B8A83'/><circle cx='276' cy='28' r='14' fill='#2B8A83'/></svg>",
      steps:[
        "从左边第一个小球开始，点一个数一个：1、2、3、4。",
        "接着按顺序往右数：5、6、7、8。",
        "最后一个小球数到 8，没有重复也没有漏掉，所以一共有 8 个小球。"
      ],
      answer:"一共有 8 个小球。",
      variants:[
        {type:"fill", html:"数一数，下图中一共有（ ）个小球。<svg class='fig' viewBox='0 0 228 56' xmlns='http://www.w3.org/2000/svg'><circle cx='24' cy='28' r='14' fill='#2B8A83'/><circle cx='60' cy='28' r='14' fill='#2B8A83'/><circle cx='96' cy='28' r='14' fill='#2B8A83'/><circle cx='132' cy='28' r='14' fill='#2B8A83'/><circle cx='168' cy='28' r='14' fill='#2B8A83'/><circle cx='204' cy='28' r='14' fill='#2B8A83'/></svg>", answer:6, unit:"个", analysis:"从左往右点一个数一个：1、2、3、4、5、6，一共有 6 个。"},
        {type:"judge", html:"数一排物体时，从左边开始或从右边开始都可以，只要按顺序数，做到不重复、不遗漏就行。", answer:true, analysis:"数数的关键是按顺序、不重复、不遗漏，起点可以自己定，所以这句话是对的。"}
      ]
    },
    {
      lead:"例2",
      html:"比一比，下面的小兔和胡萝卜，谁多谁少？多几个？<svg class='fig' viewBox='0 0 320 104' xmlns='http://www.w3.org/2000/svg'><circle cx='30' cy='30' r='15' fill='#2B8A83'/><text x='30' y='35' font-size='13' fill='#fff' text-anchor='middle'>兔</text><circle cx='86' cy='30' r='15' fill='#2B8A83'/><text x='86' y='35' font-size='13' fill='#fff' text-anchor='middle'>兔</text><circle cx='142' cy='30' r='15' fill='#2B8A83'/><text x='142' y='35' font-size='13' fill='#fff' text-anchor='middle'>兔</text><circle cx='198' cy='30' r='15' fill='#2B8A83'/><text x='198' y='35' font-size='13' fill='#fff' text-anchor='middle'>兔</text><circle cx='254' cy='30' r='15' fill='#2B8A83'/><text x='254' y='35' font-size='13' fill='#fff' text-anchor='middle'>兔</text><polygon points='30,60 19,88 41,88' fill='#E9A23B'/><text x='30' y='83' font-size='11' fill='#fff' text-anchor='middle'>卜</text><polygon points='86,60 75,88 97,88' fill='#E9A23B'/><text x='86' y='83' font-size='11' fill='#fff' text-anchor='middle'>卜</text><polygon points='142,60 131,88 153,88' fill='#E9A23B'/><text x='142' y='83' font-size='11' fill='#fff' text-anchor='middle'>卜</text><polygon points='198,60 187,88 209,88' fill='#E9A23B'/><text x='198' y='83' font-size='11' fill='#fff' text-anchor='middle'>卜</text><polygon points='254,60 243,88 265,88' fill='#E9A23B'/><text x='254' y='83' font-size='11' fill='#fff' text-anchor='middle'>卜</text><polygon points='300,60 289,88 311,88' fill='#E9A23B'/><text x='300' y='83' font-size='11' fill='#fff' text-anchor='middle'>卜</text></svg>",
      steps:[
        "把小兔和胡萝卜一个对着一个（一一对应）：上面每只小兔的正下方都放一个胡萝卜。",
        "5 只小兔正好对应了 5 个胡萝卜，这部分两边同样多。",
        "对应完以后，胡萝卜还多出 1 个（最右边），所以胡萝卜多。",
        "求多几个，用减法：6－5＝1，胡萝卜多 1 个。"
      ],
      answer:"胡萝卜多，多 1 个。",
      variants:[
        {type:"choice", html:"小明有 3 块糖，小红有 5 块糖。谁的糖多？", options:["小明多","小红多","两人一样多"], answer:1, analysis:"把糖一一对应，小红的糖还有多余，5＞3，所以小红多。"},
        {type:"fill", html:"红花有 4 朵，黄花有 7 朵。黄花比红花多（ ）朵。", answer:3, unit:"朵", analysis:"一一对应后黄花有多余，求多几朵用 7－4＝3，所以多 3 朵。"}
      ]
    },
    {
      lead:"例3",
      html:"下图中的图形混在一起，先分类再数一数：圆、三角形、正方形各有几个？一共有多少个图形？<svg class='fig' viewBox='0 0 280 140' xmlns='http://www.w3.org/2000/svg'><circle cx='35' cy='28' r='13' fill='#2B8A83'/><polygon points='105,15 92,39 118,39' fill='#E9A23B'/><rect x='163' y='16' width='24' height='24' fill='#3E6FB2'/><circle cx='245' cy='28' r='13' fill='#2B8A83'/><rect x='23' y='60' width='24' height='24' fill='#3E6FB2'/><circle cx='105' cy='72' r='13' fill='#2B8A83'/><polygon points='175,59 162,83 188,83' fill='#E9A23B'/><circle cx='245' cy='72' r='13' fill='#2B8A83'/><circle cx='35' cy='116' r='13' fill='#2B8A83'/><rect x='93' y='104' width='24' height='24' fill='#3E6FB2'/><circle cx='175' cy='116' r='13' fill='#2B8A83'/><rect x='233' y='104' width='24' height='24' fill='#3E6FB2'/></svg>",
      steps:[
        "按形状分类，先数圆（蓝绿色）：第一排 2 个、第二排 2 个、第三排 1 个，共 5 个。",
        "再数三角形（黄色）：第一排 1 个、第二排 1 个、第三排 0 个，共 3 个。",
        "最后数正方形（靛蓝色）：第一排 1 个、第二排 1 个、第三排 2 个，共 4 个。",
        "求一共多少个，把三类合起来：5＋3＋4＝12，一共有 12 个图形。"
      ],
      answer:"圆有 5 个，三角形有 3 个，正方形有 4 个；一共有 12 个图形。",
      variants:[
        {type:"fill", html:"数一数下图中一共有（ ）个图形。<svg class='fig' viewBox='0 0 180 56' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='16' width='24' height='24' fill='#3E6FB2'/><circle cx='82' cy='28' r='13' fill='#2B8A83'/><rect x='106' y='16' width='24' height='24' fill='#3E6FB2'/><circle cx='156' cy='28' r='13' fill='#2B8A83'/></svg>", answer:4, unit:"个", analysis:"正方形 2 个、圆 2 个，2＋2＝4，一共有 4 个图形。"},
        {type:"judge", html:"分类数数时，先一种一种分别数清楚，再把各类的个数合起来，这样不容易数错。", answer:true, analysis:"分类数、再合计，能避免重复和遗漏，这种方法是对的。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"数一数，下图中一共有（ ）个小球。<svg class='fig' viewBox='0 0 336 56' xmlns='http://www.w3.org/2000/svg'><circle cx='24' cy='28' r='14' fill='#2B8A83'/><circle cx='60' cy='28' r='14' fill='#2B8A83'/><circle cx='96' cy='28' r='14' fill='#2B8A83'/><circle cx='132' cy='28' r='14' fill='#2B8A83'/><circle cx='168' cy='28' r='14' fill='#2B8A83'/><circle cx='204' cy='28' r='14' fill='#2B8A83'/><circle cx='240' cy='28' r='14' fill='#2B8A83'/><circle cx='276' cy='28' r='14' fill='#2B8A83'/><circle cx='312' cy='28' r='14' fill='#2B8A83'/></svg>", answer:9, unit:"个", analysis:"从左往右按顺序点一个数一个，最后数到 9，共 9 个。"},
    {type:"choice", html:"下面三种水果，数量最多的是哪一种？", options:["5 个苹果","8 个梨","6 个桃"], answer:1, analysis:"比较 5、8、6，8 最大，所以数量最多的是 8 个梨。"},
    {type:"judge", html:"8 比 5 多 3。", answer:true, analysis:"8－5＝3，所以 8 比 5 多 3，这句话正确。"},
    {type:"fill", html:"公鸡有 6 只，母鸡有 4 只。公鸡比母鸡多（ ）只。", answer:2, unit:"只", analysis:"求相差用减法：6－4＝2，公鸡比母鸡多 2 只。"},
    {type:"fill", html:"数一数下图中一共有（ ）个图形。<svg class='fig' viewBox='0 0 220 56' xmlns='http://www.w3.org/2000/svg'><polygon points='30,15 17,39 43,39' fill='#E9A23B'/><polygon points='76,15 63,39 89,39' fill='#E9A23B'/><circle cx='126' cy='28' r='13' fill='#2B8A83'/><circle cx='162' cy='28' r='13' fill='#2B8A83'/><circle cx='198' cy='28' r='13' fill='#2B8A83'/></svg>", answer:5, unit:"个", analysis:"三角形 2 个、圆 3 个，2＋3＝5，共 5 个图形。"},
    {type:"choice", html:"从 1 数到 10，一共数了多少个数？", options:["9 个","10 个","11 个"], answer:1, analysis:"1、2、…、10，一共是 10 个数。"},
    {type:"judge", html:"两种物体一一对应以后，有多余的那种物体，数量更少。", answer:false, analysis:"一一对应后有多余的那种物体数量更“多”，不是更少，所以这句话错。"},
    {type:"fill", html:"小红有 7 支铅笔，用掉 2 支后，剩下的正好和小明同样多。小明有（ ）支铅笔。", answer:5, unit:"支", analysis:"小红用掉后剩 7－2＝5 支，和小明同样多，所以小明有 5 支。"}
  ],
  quiz:[
    {type:"fill", html:"数一数，下图中一共有（ ）个小球。<svg class='fig' viewBox='0 0 264 56' xmlns='http://www.w3.org/2000/svg'><circle cx='24' cy='28' r='14' fill='#2B8A83'/><circle cx='60' cy='28' r='14' fill='#2B8A83'/><circle cx='96' cy='28' r='14' fill='#2B8A83'/><circle cx='132' cy='28' r='14' fill='#2B8A83'/><circle cx='168' cy='28' r='14' fill='#2B8A83'/><circle cx='204' cy='28' r='14' fill='#2B8A83'/><circle cx='240' cy='28' r='14' fill='#2B8A83'/></svg>", answer:7, unit:"个", analysis:"按顺序点一个数一个，最后数到 7，共 7 个。"},
    {type:"fill", html:"正方形有 10 个，圆有 7 个。正方形比圆多（ ）个。", answer:3, unit:"个", analysis:"求相差用减法：10－7＝3，多 3 个。"},
    {type:"judge", html:"数数时，用手指点一个、数一个，就不会重复数。", answer:true, analysis:"点一个数一个能保证不重复、不遗漏，方法正确。"},
    {type:"fill", html:"一（1）班有男生 8 人、女生 5 人，一共有（ ）人。", answer:13, unit:"人", analysis:"把男女生合起来：8＋5＝13，一共 13 人。"},
    {type:"choice", html:"三角形有 4 个、正方形有 6 个、圆有 5 个，哪一种图形最多？", options:["三角形","正方形","圆"], answer:1, analysis:"比较 4、6、5，6 最大，所以正方形最多。"}
  ],
  gen:null
},
{
  id:"g2-01", grade:2, idx:1,
  title:"凑整速算",
  tag:"数与计算",
  goal:"学会把数凑成整十、整百，使加法和连减算得又对又快。",
  points:[
    "凑整就是把接近整十、整百的数，先当作整十、整百来算。",
    "加法凑整：多加了几，最后要减去几；少加了几，要再补上几。",
    "连加时先找能凑成整十、整百的“好朋友”相加；连减时可以先把两个减数合起来凑整再减。"
  ],
  examples:[
    {
      lead:"例1",
      html:"用简便方法计算：37＋28＝？",
      steps:[
        "观察加数 28，它接近整十数 30。",
        "先把 28 当作 30 来加：37＋30＝67。",
        "把 28 当成 30，多加了 30－28＝2，所以要减去 2。",
        "67－2＝65。"
      ],
      answer:"37＋28＝65。",
      variants:[
        {type:"fill", html:"用凑整法计算：56＋29＝（ ）", answer:85, analysis:"把 29 看成 30，56＋30＝86，多加了 1 再减 1，86－1＝85。"},
        {type:"choice", html:"计算 48＋33 时，把 33 看成 30 先加，接下来应该怎样？", options:["少加了 3，要再补 3","多加了 3，要减去 3","不用再调整"], answer:0, analysis:"33 看成 30，少加了 3，要补上：48＋30＝78，78＋3＝81。"}
      ]
    },
    {
      lead:"例2",
      html:"用简便方法计算：24＋39＋16＝？",
      steps:[
        "观察三个加数，找一找哪两个能凑成整十：24＋16 正好等于 40。",
        "先算这对“好朋友”：24＋16＝40。",
        "再用凑出的 40 加 39：40＋39＝79。"
      ],
      answer:"24＋39＋16＝79。",
      variants:[
        {type:"fill", html:"用凑整法计算：17＋28＋43＝（ ）", answer:88, analysis:"17 和 43 凑成 60，先算 17＋43＝60，再算 60＋28＝88。"},
        {type:"judge", html:"计算连加时，把能凑成整十、整百的两个数先加，可以使计算更简便。", answer:true, analysis:"凑整后再加能减少进位出错、算得更快，这种说法正确。"}
      ]
    },
    {
      lead:"例3",
      html:"用简便方法计算：83－29－21＝？",
      steps:[
        "观察两个减数 29 和 21，它们合起来正好凑成 50。",
        "一个数连续减去两个数，等于减去这两个数的和：83－（29＋21）。",
        "先算 29＋21＝50，再算 83－50＝33。"
      ],
      answer:"83－29－21＝33。",
      variants:[
        {type:"fill", html:"用凑整法计算：91－38－22＝（ ）", answer:31, analysis:"两个减数凑整：38＋22＝60，再算 91－60＝31。"},
        {type:"choice", html:"70－27－23＝（ ）", options:["20","30","40"], answer:0, analysis:"27＋23＝50，70－50＝20。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"用凑整法计算：47＋38＝（ ）", answer:85, analysis:"38 看成 40，47＋40＝87，多加 2 再减 2，87－2＝85。"},
    {type:"fill", html:"用凑整法计算：35＋27＋25＝（ ）", answer:87, analysis:"35 和 25 凑成 60，60＋27＝87。"},
    {type:"fill", html:"用凑整法计算：82－39－11＝（ ）", answer:32, analysis:"39＋11＝50，82－50＝32。"},
    {type:"choice", html:"计算 66＋29，下面最简便的想法是哪一个？", options:["把 29 看成 30，66＋30－1","先加 20 再加 9","从 66 往后数 29 个"], answer:0, analysis:"29 接近 30，66＋30＝96，多加 1 减 1 得 95，第一种最简便。"}
  ],
  quiz:[
    {type:"fill", html:"用凑整法计算：54＋37＝（ ）", answer:91, analysis:"37 看成 40，54＋40＝94，多加 3 减 3，94－3＝91。"},
    {type:"fill", html:"用凑整法计算：19＋26＋31＝（ ）", answer:76, analysis:"19 和 31 凑成 50，50＋26＝76。"},
    {type:"fill", html:"用凑整法计算：94－28－32＝（ ）", answer:34, analysis:"28＋32＝60，94－60＝34。"},
    {type:"judge", html:"计算 73－41－19 时，可以先算 41＋19＝60，再算 73－60。", answer:true, analysis:"连续减去两个数等于减去它们的和，41＋19＝60，73－60＝13，方法正确。"},
    {type:"choice", html:"用凑整法计算 29＋55，正确的是哪一个？", options:["把 29 看成 30：55＋30－1＝84","把 55 看成 60：29＋60＝89","29＋55＝74"], answer:0, analysis:"29 看成 30，55＋30＝85，多加 1 减 1 得 84。"}
  ],
  gen:{type:"roundCalc", n:4}
}
];
