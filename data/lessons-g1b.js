/* 数据：一年级 第 g1-07 至 g1-11 讲 */
var L_G1B = [
{
  id:"g1-07", grade:1, idx:7,
  title:"数小正方体",
  tag:"图形几何",
  goal:"学会分层数堆叠的小正方体，包括被挡住、看不见的方块。",
  points:[
    "数方块要一层一层数：先数最下面第一层，再往上数第二层、第三层……最后把每层的块数加起来。",
    "上面的方块下面一定垫着方块；被前面挡住、看不见的方块，也要在脑子里想出来，一起数进去。",
    "数的时候要有顺序（从前到后、从左到右），做到不重复、不遗漏；数完可以再核对一遍。"
  ],
  examples:[
    {
      lead:"例1",
      html:"下图这堆积木，一共有多少个小正方体？<svg class='fig' viewBox='0 0 116 78' xmlns='http://www.w3.org/2000/svg'><polygon points='12,44 22,36 48,36 38,44' fill='#7FC3B8'/><polygon points='38,44 48,36 48,62 38,70' fill='#3E6FB2'/><rect x='12' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,44 56,36 82,36 72,44' fill='#7FC3B8'/><polygon points='72,44 82,36 82,62 72,70' fill='#3E6FB2'/><rect x='46' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='80,44 90,36 116,36 106,44' fill='#7FC3B8'/><polygon points='106,44 116,36 116,62 106,70' fill='#3E6FB2'/><rect x='80' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,18 22,10 48,10 38,18' fill='#7FC3B8'/><polygon points='38,18 48,10 48,36 38,44' fill='#3E6FB2'/><rect x='12' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>",
      steps:[
        "分层看：最下面第一层，从左到右摆了 3 个方块。",
        "第二层（上面）只有最左边叠着 1 个方块，中间和右边都没有。",
        "把两层合起来：3＋1＝4，一共有 4 个小正方体。"
      ],
      answer:"一共有 4 个小正方体。",
      variants:[
        {type:"fill", html:"数一数，下图一共有（ ）个小正方体。<svg class='fig' viewBox='0 0 116 78' xmlns='http://www.w3.org/2000/svg'><polygon points='12,44 22,36 48,36 38,44' fill='#7FC3B8'/><polygon points='38,44 48,36 48,62 38,70' fill='#3E6FB2'/><rect x='12' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,44 56,36 82,36 72,44' fill='#7FC3B8'/><polygon points='72,44 82,36 82,62 72,70' fill='#3E6FB2'/><rect x='46' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='80,44 90,36 116,36 106,44' fill='#7FC3B8'/><polygon points='106,44 116,36 116,62 106,70' fill='#3E6FB2'/><rect x='80' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,18 56,10 82,10 72,18' fill='#7FC3B8'/><polygon points='72,18 82,10 82,36 72,44' fill='#3E6FB2'/><rect x='46' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>", answer:4, unit:"个", analysis:"第一层从左到右 3 个，第二层中间叠着 1 个，3＋1＝4，共 4 个。"},
        {type:"judge", html:"数这堆积木时，只数看得见的方块就行，被挡住看不见的不用数。", answer:false, analysis:"上面的方块下面一定垫着方块，被挡住看不见的也要想出来数进去，所以这句话错。"}
      ]
    },
    {
      lead:"例2",
      html:"下图这堆积木，一共有多少个小正方体？（被挡住的地方也要想出来）<svg class='fig' viewBox='0 0 92 86' xmlns='http://www.w3.org/2000/svg'><polygon points='22,44 32,36 58,36 48,44' fill='#7FC3B8'/><polygon points='48,44 58,36 58,62 48,70' fill='#3E6FB2'/><rect x='22' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='56,44 66,36 92,36 82,44' fill='#7FC3B8'/><polygon points='82,44 92,36 92,62 82,70' fill='#3E6FB2'/><rect x='56' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,52 22,44 48,44 38,52' fill='#7FC3B8'/><polygon points='38,52 48,44 48,70 38,78' fill='#3E6FB2'/><rect x='12' y='52' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,52 56,44 82,44 72,52' fill='#7FC3B8'/><polygon points='72,52 82,44 82,70 72,78' fill='#3E6FB2'/><rect x='46' y='52' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,26 22,18 48,18 38,26' fill='#7FC3B8'/><polygon points='38,26 48,18 48,44 38,52' fill='#3E6FB2'/><rect x='12' y='26' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>",
      steps:[
        "分层数：先看最下面第一层。它是前后两排、每排 2 个；前排 2 个看得见，后排 2 个被挡住一部分，但它们也是真的方块，所以第一层共 4 个。",
        "再看第二层，上面摞着 1 个方块，它下面正好垫着前排左边的那个方块。",
        "把两层合起来：4＋1＝5。"
      ],
      answer:"一共有 5 个小正方体。",
      variants:[
        {type:"fill", html:"数一数，下图一共有（ ）个小正方体。<svg class='fig' viewBox='0 0 92 86' xmlns='http://www.w3.org/2000/svg'><polygon points='22,44 32,36 58,36 48,44' fill='#7FC3B8'/><polygon points='48,44 58,36 58,62 48,70' fill='#3E6FB2'/><rect x='22' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='56,44 66,36 92,36 82,44' fill='#7FC3B8'/><polygon points='82,44 92,36 92,62 82,70' fill='#3E6FB2'/><rect x='56' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,52 22,44 48,44 38,52' fill='#7FC3B8'/><polygon points='38,52 48,44 48,70 38,78' fill='#3E6FB2'/><rect x='12' y='52' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,52 56,44 82,44 72,52' fill='#7FC3B8'/><polygon points='72,52 82,44 82,70 72,78' fill='#3E6FB2'/><rect x='46' y='52' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,26 22,18 48,18 38,26' fill='#7FC3B8'/><polygon points='38,26 48,18 48,44 38,52' fill='#3E6FB2'/><rect x='12' y='26' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,26 56,18 82,18 72,26' fill='#7FC3B8'/><polygon points='72,26 82,18 82,44 72,52' fill='#3E6FB2'/><rect x='46' y='26' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>", answer:6, unit:"个", analysis:"第一层前后两排共 4 个；第二层前排左右各摞 1 个，共 2 个；4＋2＝6。"},
        {type:"choice", html:"数堆叠的方块时，看到第二层有 1 个方块，那么它下面那个位置上（ ）。", options:["一定也有 1 个方块垫着","是空的，没有方块","有可能没有方块"], answer:0, analysis:"上面的方块不能悬空，下面一定垫着一个方块，所以选第一个。"}
      ]
    },
    {
      lead:"例3",
      html:"下图这堆积木，一共有多少个小正方体？<svg class='fig' viewBox='0 0 116 104' xmlns='http://www.w3.org/2000/svg'><polygon points='12,70 22,62 48,62 38,70' fill='#7FC3B8'/><polygon points='38,70 48,62 48,88 38,96' fill='#3E6FB2'/><rect x='12' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,70 56,62 82,62 72,70' fill='#7FC3B8'/><polygon points='72,70 82,62 82,88 72,96' fill='#3E6FB2'/><rect x='46' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='80,70 90,62 116,62 106,70' fill='#7FC3B8'/><polygon points='106,70 116,62 116,88 106,96' fill='#3E6FB2'/><rect x='80' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,44 56,36 82,36 72,44' fill='#7FC3B8'/><polygon points='72,44 82,36 82,62 72,70' fill='#3E6FB2'/><rect x='46' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,18 56,10 82,10 72,18' fill='#7FC3B8'/><polygon points='72,18 82,10 82,36 72,44' fill='#3E6FB2'/><rect x='46' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>",
      steps:[
        "按列数更清楚：左边一列高 1 个，中间一列高 3 个，右边一列高 1 个。",
        "也可以分层：第一层 3 个（三列都有），第二层 1 个（中间），第三层 1 个（中间）。",
        "合起来：1＋3＋1＝5（或 3＋1＋1＝5）。"
      ],
      answer:"一共有 5 个小正方体。",
      variants:[
        {type:"fill", html:"数一数，下图一共有（ ）个小正方体。<svg class='fig' viewBox='0 0 116 104' xmlns='http://www.w3.org/2000/svg'><polygon points='12,70 22,62 48,62 38,70' fill='#7FC3B8'/><polygon points='38,70 48,62 48,88 38,96' fill='#3E6FB2'/><rect x='12' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,70 56,62 82,62 72,70' fill='#7FC3B8'/><polygon points='72,70 82,62 82,88 72,96' fill='#3E6FB2'/><rect x='46' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='80,70 90,62 116,62 106,70' fill='#7FC3B8'/><polygon points='106,70 116,62 116,88 106,96' fill='#3E6FB2'/><rect x='80' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,44 22,36 48,36 38,44' fill='#7FC3B8'/><polygon points='38,44 48,36 48,62 38,70' fill='#3E6FB2'/><rect x='12' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,44 56,36 82,36 72,44' fill='#7FC3B8'/><polygon points='72,44 82,36 82,62 72,70' fill='#3E6FB2'/><rect x='46' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,18 22,10 48,10 38,18' fill='#7FC3B8'/><polygon points='38,18 48,10 48,36 38,44' fill='#3E6FB2'/><rect x='12' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>", answer:6, unit:"", analysis:"按列数：左边一列 3 个、中间一列 2 个、右边一列 1 个，3＋2＋1＝6。"},
        {type:"fill", html:"数一数，下图一共有（ ）个小正方体。<svg class='fig' viewBox='0 0 116 52' xmlns='http://www.w3.org/2000/svg'><polygon points='12,18 22,10 48,10 38,18' fill='#7FC3B8'/><polygon points='38,18 48,10 48,36 38,44' fill='#3E6FB2'/><rect x='12' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,18 56,10 82,10 72,18' fill='#7FC3B8'/><polygon points='72,18 82,10 82,36 72,44' fill='#3E6FB2'/><rect x='46' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='80,18 90,10 116,10 106,18' fill='#7FC3B8'/><polygon points='106,18 116,10 116,36 106,44' fill='#3E6FB2'/><rect x='80' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>", answer:3, unit:"个", analysis:"这是平平的一层，从左到右 3 个方块，没有叠高，共 3 个。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"数一数，下图这堆积木一共有（ ）个小正方体。<svg class='fig' viewBox='0 0 116 78' xmlns='http://www.w3.org/2000/svg'><polygon points='12,44 22,36 48,36 38,44' fill='#7FC3B8'/><polygon points='38,44 48,36 48,62 38,70' fill='#3E6FB2'/><rect x='12' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,44 56,36 82,36 72,44' fill='#7FC3B8'/><polygon points='72,44 82,36 82,62 72,70' fill='#3E6FB2'/><rect x='46' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='80,44 90,36 116,36 106,44' fill='#7FC3B8'/><polygon points='106,44 116,36 116,62 106,70' fill='#3E6FB2'/><rect x='80' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,18 22,10 48,10 38,18' fill='#7FC3B8'/><polygon points='38,18 48,10 48,36 38,44' fill='#3E6FB2'/><rect x='12' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,18 56,10 82,10 72,18' fill='#7FC3B8'/><polygon points='72,18 82,10 82,36 72,44' fill='#3E6FB2'/><rect x='46' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>", answer:5, unit:"个", analysis:"按列数：左列 2 个、中列 2 个、右列 1 个，2＋2＋1＝5。"},
    {type:"fill", html:"数一数，下图这堆积木一共有（ ）个小正方体。<svg class='fig' viewBox='0 0 92 86' xmlns='http://www.w3.org/2000/svg'><polygon points='22,18 32,10 58,10 48,18' fill='#7FC3B8'/><polygon points='48,18 58,10 58,36 48,44' fill='#3E6FB2'/><rect x='22' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='22,44 32,36 58,36 48,44' fill='#7FC3B8'/><polygon points='48,44 58,36 58,62 48,70' fill='#3E6FB2'/><rect x='22' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='56,44 66,36 92,36 82,44' fill='#7FC3B8'/><polygon points='82,44 92,36 92,62 82,70' fill='#3E6FB2'/><rect x='56' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,52 22,44 48,44 38,52' fill='#7FC3B8'/><polygon points='38,52 48,44 48,70 38,78' fill='#3E6FB2'/><rect x='12' y='52' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,52 56,44 82,44 72,52' fill='#7FC3B8'/><polygon points='72,52 82,44 82,70 72,78' fill='#3E6FB2'/><rect x='46' y='52' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>", answer:5, unit:"个", analysis:"第一层前后两排共 4 个；第二层在后排左边摞着 1 个；4＋1＝5。"},
    {type:"fill", html:"数一数，下图这堆积木一共有（ ）个小正方体。<svg class='fig' viewBox='0 0 116 104' xmlns='http://www.w3.org/2000/svg'><polygon points='12,70 22,62 48,62 38,70' fill='#7FC3B8'/><polygon points='38,70 48,62 48,88 38,96' fill='#3E6FB2'/><rect x='12' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,70 56,62 82,62 72,70' fill='#7FC3B8'/><polygon points='72,70 82,62 82,88 72,96' fill='#3E6FB2'/><rect x='46' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='80,70 90,62 116,62 106,70' fill='#7FC3B8'/><polygon points='106,70 116,62 116,88 106,96' fill='#3E6FB2'/><rect x='80' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,44 56,36 82,36 72,44' fill='#7FC3B8'/><polygon points='72,44 82,36 82,62 72,70' fill='#3E6FB2'/><rect x='46' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='80,44 90,36 116,36 106,44' fill='#7FC3B8'/><polygon points='106,44 116,36 116,62 106,70' fill='#3E6FB2'/><rect x='80' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='80,18 90,10 116,10 106,18' fill='#7FC3B8'/><polygon points='106,18 116,10 116,36 106,44' fill='#3E6FB2'/><rect x='80' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>", answer:6, unit:"个", analysis:"按列数：左列 1 个、中列 2 个、右列 3 个，1＋2＋3＝6。"},
    {type:"choice", html:"一堆方块里，一列高 3 层，旁边一列高 1 层，另一列高 2 层，这堆积木一共多少个？", options:["6 个","5 个","7 个"], answer:0, analysis:"按列数相加：3＋1＋2＝6，所以一共 6 个。"},
    {type:"judge", html:"一个方块摞在另一个方块上面，上面的方块是悬空的，下面不需要再垫方块。", answer:false, analysis:"上面的方块不能悬空，下面一定垫着一个方块，所以这句话错。"},
    {type:"fill", html:"堆积木时，最下面一层摆了 4 个方块，上面一层摆了 1 个方块，一共有（ ）个小正方体。", answer:5, unit:"个", analysis:"两层合起来：4＋1＝5，共 5 个。"},
    {type:"choice", html:"数小正方体时，下面哪种做法最好？", options:["只数看得见的方块","分层数，看不见的也想出来数进去","随便数几个算几个"], answer:1, analysis:"分层数、把被挡住看不见的也想出来，才能不重复不遗漏，所以选第二种。"}
  ],
  quiz:[
    {type:"fill", html:"数一数，下图这堆积木一共有（ ）个小正方体。<svg class='fig' viewBox='0 0 82 78' xmlns='http://www.w3.org/2000/svg'><polygon points='12,44 22,36 48,36 38,44' fill='#7FC3B8'/><polygon points='38,44 48,36 48,62 38,70' fill='#3E6FB2'/><rect x='12' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,44 56,36 82,36 72,44' fill='#7FC3B8'/><polygon points='72,44 82,36 82,62 72,70' fill='#3E6FB2'/><rect x='46' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,18 22,10 48,10 38,18' fill='#7FC3B8'/><polygon points='38,18 48,10 48,36 38,44' fill='#3E6FB2'/><rect x='12' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>", answer:3, unit:"个", analysis:"第一层 2 个，第二层左边叠着 1 个，2＋1＝3。"},
    {type:"fill", html:"数一数，下图这堆积木一共有（ ）个小正方体。<svg class='fig' viewBox='0 0 92 86' xmlns='http://www.w3.org/2000/svg'><polygon points='22,44 32,36 58,36 48,44' fill='#7FC3B8'/><polygon points='48,44 58,36 58,62 48,70' fill='#3E6FB2'/><rect x='22' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='56,44 66,36 92,36 82,44' fill='#7FC3B8'/><polygon points='82,44 92,36 92,62 82,70' fill='#3E6FB2'/><rect x='56' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,52 22,44 48,44 38,52' fill='#7FC3B8'/><polygon points='38,52 48,44 48,70 38,78' fill='#3E6FB2'/><rect x='12' y='52' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,52 56,44 82,44 72,52' fill='#7FC3B8'/><polygon points='72,52 82,44 82,70 72,78' fill='#3E6FB2'/><rect x='46' y='52' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,26 22,18 48,18 38,26' fill='#7FC3B8'/><polygon points='38,26 48,18 48,44 38,52' fill='#3E6FB2'/><rect x='12' y='26' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>", answer:5, unit:"个", analysis:"第一层前后两排共 4 个，第二层摞着 1 个，4＋1＝5。"},
    {type:"fill", html:"数一数，下图这堆积木一共有（ ）个小正方体。<svg class='fig' viewBox='0 0 116 104' xmlns='http://www.w3.org/2000/svg'><polygon points='12,70 22,62 48,62 38,70' fill='#7FC3B8'/><polygon points='38,70 48,62 48,88 38,96' fill='#3E6FB2'/><rect x='12' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,70 56,62 82,62 72,70' fill='#7FC3B8'/><polygon points='72,70 82,62 82,88 72,96' fill='#3E6FB2'/><rect x='46' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='80,70 90,62 116,62 106,70' fill='#7FC3B8'/><polygon points='106,70 116,62 116,88 106,96' fill='#3E6FB2'/><rect x='80' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,44 56,36 82,36 72,44' fill='#7FC3B8'/><polygon points='72,44 82,36 82,62 72,70' fill='#3E6FB2'/><rect x='46' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,18 56,10 82,10 72,18' fill='#7FC3B8'/><polygon points='72,18 82,10 82,36 72,44' fill='#3E6FB2'/><rect x='46' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>", answer:5, unit:"个", analysis:"按列数：左列 1 个、中列 3 个、右列 1 个，1＋3＋1＝5。"},
    {type:"fill", html:"数一数，下图这堆积木一共有（ ）个小正方体。<svg class='fig' viewBox='0 0 82 104' xmlns='http://www.w3.org/2000/svg'><polygon points='12,70 22,62 48,62 38,70' fill='#7FC3B8'/><polygon points='38,70 48,62 48,88 38,96' fill='#3E6FB2'/><rect x='12' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='46,70 56,62 82,62 72,70' fill='#7FC3B8'/><polygon points='72,70 82,62 82,88 72,96' fill='#3E6FB2'/><rect x='46' y='70' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,44 22,36 48,36 38,44' fill='#7FC3B8'/><polygon points='38,44 48,36 48,62 38,70' fill='#3E6FB2'/><rect x='12' y='44' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/><polygon points='12,18 22,10 48,10 38,18' fill='#7FC3B8'/><polygon points='38,18 48,10 48,36 38,44' fill='#3E6FB2'/><rect x='12' y='18' width='26' height='26' fill='#2B8A83' stroke='#1F6E68' stroke-width='1.5'/></svg>", answer:4, unit:"个", analysis:"左边一列高 3 个，右边一列高 1 个，3＋1＝4。"},
    {type:"judge", html:"数方块时，被前面方块挡住、看不见的方块，也要想出来数进去。", answer:true, analysis:"上面的方块下面一定垫着方块，被挡住的部分也要数，这样才不遗漏，说法正确。"}
  ],
  gen:null
},
{
  id:"g1-08", grade:1, idx:8,
  title:"火柴棒摆图形",
  tag:"数学游戏",
  goal:"会用火柴棒摆三角形、正方形，知道两个图形共用一条边能省火柴。",
  points:[
    "摆 1 个三角形要 3 根火柴，摆 1 个正方形要 4 根火柴。",
    "两个图形紧紧挨在一起、共用一条边时，这条边只摆 1 根火柴就够了，能省下 1 根。",
    "数火柴时可以先数横着的、再数斜着的；图形挨得越紧、共用的边越多，用的火柴就越少。"
  ],
  examples:[
    {
      lead:"例1",
      html:"摆 1 个三角形要 3 根火柴。像下图这样摆 2 个三角形，让它们共用中间一条边，一共要几根火柴？<svg class='fig' viewBox='0 0 152 92' xmlns='http://www.w3.org/2000/svg'><line x1='28' y1='74' x2='60' y2='18' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='60' y1='18' x2='92' y2='74' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='28' y1='74' x2='92' y2='74' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='92' y1='74' x2='124' y2='74' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='60' y1='18' x2='124' y2='74' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/></svg>",
      steps:[
        "先想：如果两个三角形分开摆，每个要 3 根，一共要 3＋3＝6 根。",
        "现在让它们紧紧挨在一起、共用中间那条边，那条边只摆 1 根火柴就够了。",
        "所以省了 1 根：6－1＝5 根。"
      ],
      answer:"一共要 5 根火柴。",
      variants:[
        {type:"fill", html:"照样子摆 2 个共用一条边的三角形，一共用了（ ）根火柴。", answer:5, unit:"根", analysis:"两个三角形共用 1 条边，3＋3－1＝5，共 5 根。"},
        {type:"choice", html:"摆 2 个分开、不挨在一起的三角形，一共要几根火柴？", options:["5 根","6 根","4 根"], answer:1, analysis:"分开摆不共用边，每个 3 根，3＋3＝6 根。"}
      ]
    },
    {
      lead:"例2",
      html:"摆 1 个正方形要 4 根火柴。像下图这样把 2 个正方形并排挨在一起，一共要几根火柴？<svg class='fig' viewBox='0 0 136 84' xmlns='http://www.w3.org/2000/svg'><line x1='24' y1='20' x2='24' y2='64' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='68' y1='20' x2='68' y2='64' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='112' y1='20' x2='112' y2='64' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='24' y1='20' x2='68' y2='20' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='68' y1='20' x2='112' y2='20' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='24' y1='64' x2='68' y2='64' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='68' y1='64' x2='112' y2='64' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/></svg>",
      steps:[
        "分开摆 2 个正方形要 4＋4＝8 根。",
        "并排后中间那条竖边是两个正方形共用的，只摆 1 根就够了，省了 1 根。",
        "8－1＝7 根。"
      ],
      answer:"一共要 7 根火柴。",
      variants:[
        {type:"fill", html:"并排挨在一起摆 2 个正方形，一共用了（ ）根火柴。", answer:7, unit:"根", analysis:"4＋4－1＝7，共用中间一条竖边，共 7 根。"},
        {type:"judge", html:"两个正方形挨在一起、共用一条边，比分开摆要用更多火柴。", answer:false, analysis:"共用一条边能省 1 根火柴，挨在一起反而用得更少，所以这句话错。"}
      ]
    },
    {
      lead:"例3",
      html:"像这样并排摆 3 个正方形，一共要几根火柴？<svg class='fig' viewBox='0 0 180 84' xmlns='http://www.w3.org/2000/svg'><line x1='24' y1='20' x2='24' y2='64' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='68' y1='20' x2='68' y2='64' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='112' y1='20' x2='112' y2='64' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='156' y1='20' x2='156' y2='64' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='24' y1='20' x2='68' y2='20' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='68' y1='20' x2='112' y2='20' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='112' y1='20' x2='156' y2='20' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='24' y1='64' x2='68' y2='64' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='68' y1='64' x2='112' y2='64' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/><line x1='112' y1='64' x2='156' y2='64' stroke='#E9A23B' stroke-width='6' stroke-linecap='round'/></svg>",
      steps:[
        "先看规律：摆 1 个正方形要 4 根；并排摆 2 个要 7 根。",
        "每多拼一个正方形，只要再添 3 根火柴（上面、下面和右边各一根，左边已经有了）。",
        "摆 3 个正方形：4＋3＋3＝10 根。"
      ],
      answer:"一共要 10 根火柴。",
      variants:[
        {type:"fill", html:"并排摆 1 个正方形要 4 根，每多拼一个添 3 根。并排摆 3 个正方形要（ ）根火柴。", answer:10, unit:"根", analysis:"4＋3＋3＝10，共 10 根。"},
        {type:"choice", html:"并排摆正方形时，每多拼一个正方形，只要再添几根火柴？", options:["3 根","4 根","1 根"], answer:0, analysis:"新正方形的左边已经有了，只要再添上面、下面、右边 3 根。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"摆 1 个三角形要（ ）根火柴。", answer:3, unit:"根", analysis:"三角形有 3 条边，每条边用 1 根火柴，共 3 根。"},
    {type:"fill", html:"摆 1 个正方形要（ ）根火柴。", answer:4, unit:"根", analysis:"正方形有 4 条边，每条边用 1 根火柴，共 4 根。"},
    {type:"fill", html:"并排挨在一起摆 2 个三角形、共用一条边，一共用（ ）根火柴。", answer:5, unit:"根", analysis:"两个三角形共用 1 条边，3＋3－1＝5。"},
    {type:"choice", html:"下面哪种摆法用的火柴最少？", options:["2 个分开的正方形","2 个并排挨在一起的正方形","3 个分开的三角形"], answer:1, analysis:"2 个分开正方形要 8 根，并排挨在一起只要 7 根，3 个分开三角形要 9 根，所以并排的最少。"},
    {type:"judge", html:"两个图形共用一条边，能少用火柴。", answer:true, analysis:"共用的那条边只摆 1 根就够了，确实能省火柴，说法正确。"},
    {type:"fill", html:"并排挨在一起摆 3 个正方形，一共要（ ）根火柴。", answer:10, unit:"根", analysis:"4＋3＋3＝10，共 10 根。"},
    {type:"choice", html:"用 7 根火柴，正好可以摆出（ ）。", options:["1 个正方形","2 个并排挨在一起的正方形","2 个分开的三角形"], answer:1, analysis:"1 个正方形要 4 根；2 个并排正方形要 7 根；2 个分开三角形要 6 根，所以选第二个。"}
  ],
  quiz:[
    {type:"fill", html:"摆 1 个三角形要 3 根，摆 1 个正方形要（ ）根火柴。", answer:4, unit:"根", analysis:"正方形 4 条边，共 4 根。"},
    {type:"fill", html:"并排挨在一起摆 2 个正方形，一共要（ ）根火柴。", answer:7, unit:"根", analysis:"4＋4－1＝7，共用中间一条竖边。"},
    {type:"judge", html:"图形挨得越紧、共用的边越多，用的火柴就越少。", answer:true, analysis:"共用的边越多省得越多，这种说法正确。"},
    {type:"choice", html:"并排摆正方形时，每多拼一个正方形，只要再添（ ）根火柴。", options:["3 根","4 根","2 根"], answer:0, analysis:"新正方形左边已有，再添上、下、右 3 根即可。"},
    {type:"fill", html:"分开摆 2 个三角形要 6 根，挨在一起共用一条边只要 5 根，少用了（ ）根。", answer:1, unit:"根", analysis:"6－5＝1，共用一条边省了 1 根。"}
  ],
  gen:null
},
{
  id:"g1-09", grade:1, idx:9,
  title:"排队问题",
  tag:"典型应用",
  goal:"分清“第几个”和“几个”，会算一队一共有多少人、两人之间有几人。",
  points:[
    "“从前往后数，小明排第 3”表示连小明一起算，他是第 3 个；小明前面有 2 个人。",
    "求一队总人数，可以用：从前数的位次＋从后数的位次－1（因为自己被数了两次）。",
    "“两个人之间有几个人”要把这两个人都去掉再数，不包括他们自己。"
  ],
  examples:[
    {
      lead:"例1",
      html:"小朋友排队买票。从前往后数，小红排第 4；从后往前数，小红排第 3。这一队一共有多少个小朋友？<svg class='fig' viewBox='0 0 220 60' xmlns='http://www.w3.org/2000/svg'><circle cx='20' cy='30' r='13' fill='#2B8A83'/><circle cx='56' cy='30' r='13' fill='#2B8A83'/><circle cx='92' cy='30' r='13' fill='#2B8A83'/><circle cx='128' cy='30' r='13' fill='#E9A23B'/><text x='128' y='35' font-size='12' fill='#fff' text-anchor='middle'>红</text><circle cx='164' cy='30' r='13' fill='#2B8A83'/><circle cx='200' cy='30' r='13' fill='#2B8A83'/></svg>",
      steps:[
        "从前往后数小红是第 4，说明连小红在内，她前面一共是 4 个人。",
        "从后往前数小红是第 3，说明连小红在内，她后面一共是 3 个人。",
        "小红被前后算了两次，要减去 1 次：4＋3－1＝6。"
      ],
      answer:"这一队一共有 6 个小朋友。",
      variants:[
        {type:"fill", html:"一队小朋友排队，从前往后数小华排第 2，从后往前数小华排第 3。这一队一共（ ）人。", answer:4, unit:"人", analysis:"2＋3－1＝4，小华被算了两次要减 1，共 4 人。"},
        {type:"choice", html:"“从前往后数小丽排第 5”这句话，下面哪个说对了？", options:["小丽前面有 5 个人","连小丽一起是第 5 个，她前面有 4 个人","小丽后面有 5 个人"], answer:1, analysis:"排第 5 表示连自己是第 5 个，前面有 5－1＝4 个人。"}
      ]
    },
    {
      lead:"例2",
      html:"一队小朋友共有 8 人。从前往后数，小明排第 3。小明后面还有几人？",
      steps:[
        "从前往后数小明排第 3，说明连小明在内，前面有 3 个人。",
        "求小明后面有几人，就要把前面这 3 个人（连小明）去掉。",
        "8－3＝5，小明后面还有 5 人。"
      ],
      answer:"小明后面还有 5 人。",
      variants:[
        {type:"fill", html:"一队有 10 人，从前往后数小刚排第 4。小刚后面有（ ）人。", answer:6, unit:"人", analysis:"前面连小刚共 4 人，10－4＝6，后面有 6 人。"},
        {type:"judge", html:"“小明排第 3”和“小明后面有 3 人”，意思是一样的。", answer:false, analysis:"“排第 3”是连小明在内前面有 3 人；“后面有 3 人”不包括小明，意思不同，所以错。"}
      ]
    },
    {
      lead:"例3",
      html:"10 个小朋友排成一队。从前往后数，小华排第 2，小丽排第 7。小华和小丽之间有几个人？",
      steps:[
        "从前往后数：小华在第 2 个，小丽在第 7 个。",
        "“之间”的人不包括小华和小丽自己。",
        "中间是第 3、4、5、6 个，共 4 个：7－2－1＝4。"
      ],
      answer:"小华和小丽之间有 4 个人。",
      variants:[
        {type:"fill", html:"一队共 9 人，从前往后数小明排第 1，小红排第 5。他俩之间有（ ）人。", answer:3, unit:"人", analysis:"中间是第 2、3、4 个，5－1－1＝3。"},
        {type:"choice", html:"求两个人之间有几个人，应该怎样算？", options:["把这两个人也算进去","把这两个人都去掉再数","只数前面那个人"], answer:1, analysis:"“之间”不包括这两人，要把他们都去掉再数。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"小朋友排队，从前往后数小军排第 3，小军前面有（ ）人。", answer:2, unit:"人", analysis:"排第 3 是连小军在内前面有 3 人，去掉小军自己，前面有 2 人。"},
    {type:"fill", html:"从前往后数小红排第 3，从后往前数小红排第 2。这一队一共（ ）人。", answer:4, unit:"人", analysis:"3＋2－1＝4，小红被数了两次要减 1。"},
    {type:"fill", html:"一队共 7 人，从前往后数小丽排第 5。小丽后面有（ ）人。", answer:2, unit:"人", analysis:"前面连小丽共 5 人，7－5＝2，后面有 2 人。"},
    {type:"choice", html:"从前往后数小明排第 4，小明后面还有 4 人，这一队一共多少人？", options:["8 人","7 人","9 人"], answer:0, analysis:"前面连小明 4 人，加上后面 4 人，4＋4＝8。"},
    {type:"fill", html:"一队共 8 人，从前往后数小华排第 2，小刚排第 6。他俩之间有（ ）人。", answer:3, unit:"人", analysis:"中间是第 3、4、5 个，6－2－1＝3。"},
    {type:"judge", html:"排队时，“第 3 个”和“3 个人”是一个意思。", answer:false, analysis:"“第 3 个”是位置，连自己算；“3 个人”是数量，意思不同，所以错。"},
    {type:"choice", html:"从前往后数小芳排第 5，小芳前面有几人？", options:["5 人","4 人","6 人"], answer:1, analysis:"排第 5 连小芳在内是 5 个，去掉小芳自己，前面有 4 人。"}
  ],
  quiz:[
    {type:"fill", html:"从前往后数小强排第 4，小强前面有（ ）人。", answer:3, unit:"人", analysis:"排第 4 连小强在内前面有 4 人，去掉小强，前面有 3 人。"},
    {type:"fill", html:"从前往后数小英排第 3，从后往前数小英排第 4。这一队一共（ ）人。", answer:6, unit:"人", analysis:"3＋4－1＝6，小英被数了两次要减 1。"},
    {type:"fill", html:"一队共 9 人，从前往后数小亮排第 4。小亮后面有（ ）人。", answer:5, unit:"人", analysis:"前面连小亮共 4 人，9－4＝5，后面有 5 人。"},
    {type:"fill", html:"一队共 7 人，从前往后数小林排第 1，小娟排第 5。她俩之间有（ ）人。", answer:3, unit:"人", analysis:"中间是第 2、3、4 个，5－1－1＝3。"},
    {type:"judge", html:"求两个人之间有几人时，要把这两个人也数进去。", answer:false, analysis:"“之间”不包括这两个人，要把他们都去掉再数，所以错。"}
  ],
  gen:null
},
{
  id:"g1-10", grade:1, idx:10,
  title:"移多补少",
  tag:"典型应用",
  goal:"学会把多出来的东西分一半给少的那组，让两组变得同样多。",
  points:[
    "两组东西不一样多时，先找出相差几个（多的那组比少的那组多出来的部分）。",
    "把多出来的部分平均分一分：一半留下、一半给少的那组，两组就同样多。",
    "多出来 6 个只要移 3 个，多出来 4 个只要移 2 个——移过去的是相差数的一半。"
  ],
  examples:[
    {
      lead:"例1",
      html:"第一盘有 10 个苹果，第二盘有 4 个苹果。从第一盘拿几个到第二盘，两盘苹果就同样多？<svg class='fig' viewBox='0 0 272 72' xmlns='http://www.w3.org/2000/svg'><text x='6' y='26' font-size='12' fill='#51606A'>第一盘</text><circle cx='58' cy='22' r='9' fill='#E9A23B'/><circle cx='80' cy='22' r='9' fill='#E9A23B'/><circle cx='102' cy='22' r='9' fill='#E9A23B'/><circle cx='124' cy='22' r='9' fill='#E9A23B'/><circle cx='146' cy='22' r='9' fill='#E9A23B'/><circle cx='168' cy='22' r='9' fill='#E9A23B'/><circle cx='190' cy='22' r='9' fill='#E9A23B'/><circle cx='212' cy='22' r='9' fill='#E9A23B'/><circle cx='234' cy='22' r='9' fill='#E9A23B'/><circle cx='256' cy='22' r='9' fill='#E9A23B'/><text x='6' y='58' font-size='12' fill='#51606A'>第二盘</text><circle cx='58' cy='54' r='9' fill='#7FC3B8'/><circle cx='80' cy='54' r='9' fill='#7FC3B8'/><circle cx='102' cy='54' r='9' fill='#7FC3B8'/><circle cx='124' cy='54' r='9' fill='#7FC3B8'/></svg>",
      steps:[
        "先算相差：第一盘比第二盘多 10－4＝6 个。",
        "把多出来的 6 个平均分一分，一边留 3 个、给第二盘 3 个。",
        "拿完以后：第一盘 10－3＝7，第二盘 4＋3＝7，两盘都是 7 个，同样多。"
      ],
      answer:"从第一盘拿 3 个到第二盘，两盘就同样多。",
      variants:[
        {type:"fill", html:"小明有 8 颗糖，小红有 4 颗糖。小明给小红（ ）颗，两人就同样多。", answer:2, unit:"颗", analysis:"相差 8－4＝4 颗，把 4 颗平均分，给小红 2 颗；小明 8－2＝6，小红 4＋2＝6。"},
        {type:"choice", html:"第一队比第二队多 6 个人，从第一队调几个人到第二队，两队就同样多？", options:["6 人","3 人","2 人"], answer:1, analysis:"多出来的 6 人分一半，调 3 人过去，两队就同样多。"}
      ]
    },
    {
      lead:"例2",
      html:"哥哥有 9 本书，弟弟有 5 本书。哥哥给弟弟几本，两人的书就同样多？",
      steps:[
        "先算相差：9－5＝4 本。",
        "把多出来的 4 本平均分，一半 2 本给弟弟。",
        "给完：哥哥 9－2＝7，弟弟 5＋2＝7，两人都是 7 本，同样多。"
      ],
      answer:"哥哥给弟弟 2 本，两人就同样多。",
      variants:[
        {type:"fill", html:"左边有 7 个球，右边有 3 个球。从左边拿（ ）个到右边，两边就同样多。", answer:2, unit:"个", analysis:"相差 7－3＝4 个，分一半拿 2 个；左边 7－2＝5，右边 3＋2＝5。"},
        {type:"judge", html:"两组相差 8 个，只要把多的那组的 8 个全部给少的那组，两组就同样多了。", answer:false, analysis:"应该给相差数的一半，也就是 4 个；全给过去少的那组反而变多了，所以错。"}
      ]
    },
    {
      lead:"例3",
      html:"小明有 12 张贴画，他给了小红 2 张后，两人的贴画就同样多。小红原来有几张贴画？",
      steps:[
        "小明给出 2 张后还剩 12－2＝10 张。",
        "这时两人同样多，说明小红这时也有 10 张。",
        "小红这 10 张里有 2 张是小明刚给的，所以小红原来有 10－2＝8 张。"
      ],
      answer:"小红原来有 8 张贴画。",
      variants:[
        {type:"fill", html:"小华有 10 支铅笔，给小强 1 支后两人就同样多。小强原来有（ ）支。", answer:8, unit:"支", analysis:"小华给出后剩 9 支，小强这时也是 9 支，去掉小华刚给的 1 支，小强原来有 8 支。"},
        {type:"choice", html:"小东给小西 3 块积木后两人一样多，原来小东比小西多几块？", options:["3 块","6 块","9 块"], answer:1, analysis:"给出去的是相差数的一半，所以原来相差 3×2＝6 块。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"第一行有 6 个圆，第二行有 2 个圆。从第一行移（ ）个到第二行，两行就同样多。", answer:2, unit:"个", analysis:"相差 6－2＝4 个，分一半移 2 个；移完两行都是 4 个。"},
    {type:"fill", html:"一班有 8 盆花，二班有 4 盆花。一班给二班（ ）盆，两班就同样多。", answer:2, unit:"盆", analysis:"相差 8－4＝4 盆，给二班一半 2 盆；给完两班都是 6 盆。"},
    {type:"choice", html:"小刚比小芳多 6 张贴纸，小刚给小芳几张两人就同样多？", options:["6 张","3 张","2 张"], answer:1, analysis:"多出来的 6 张分一半，给小芳 3 张。"},
    {type:"judge", html:"两组相差 4 个，把多的那组多出来的 4 个全给少的那组，两组就同样多。", answer:false, analysis:"应该给一半也就是 2 个；4 个全给过去，少的那组反而更多了，所以错。"},
    {type:"fill", html:"姐姐有 11 块巧克力，妹妹有 5 块。姐姐给妹妹（ ）块，两人就同样多。", answer:3, unit:"块", analysis:"相差 11－5＝6 块，分一半给 3 块；给完两人都是 8 块。"},
    {type:"choice", html:"小宁给小静 2 块橡皮后两人一样多，原来小宁比小静多几块？", options:["2 块","4 块","6 块"], answer:1, analysis:"给出去的 2 块是相差数的一半，原来相差 2×2＝4 块。"},
    {type:"fill", html:"有两筐橘子，第一筐 9 个，第二筐 5 个。从第一筐拿（ ）个到第二筐，两筐就同样多。", answer:2, unit:"个", analysis:"相差 9－5＝4 个，拿一半 2 个；拿完两筐都是 7 个。"}
  ],
  quiz:[
    {type:"fill", html:"小红有 7 个苹果，小明有 3 个。小红给小明（ ）个，两人就同样多。", answer:2, unit:"个", analysis:"相差 7－3＝4 个，给一半 2 个；给完两人都是 5 个。"},
    {type:"choice", html:"甲盒比乙盒多 8 块饼干，从甲盒拿几块到乙盒，两盒就同样多？", options:["8 块","4 块","2 块"], answer:1, analysis:"多出来的 8 块分一半，拿 4 块到乙盒。"},
    {type:"judge", html:"移多补少时，只要把多出来的部分分一半给少的那组，两组就同样多。", answer:true, analysis:"把相差数的一半移过去，两边就相等，说法正确。"},
    {type:"fill", html:"哥哥有 8 颗糖，给妹妹 1 颗后两人就同样多。妹妹原来有（ ）颗。", answer:6, unit:"颗", analysis:"哥哥给出后剩 7 颗，妹妹这时也是 7 颗，去掉刚给的 1 颗，妹妹原来有 6 颗。"},
    {type:"choice", html:"强强给乐乐 4 辆玩具车后两人一样多，原来强强比乐乐多几辆？", options:["4 辆","8 辆","12 辆"], answer:1, analysis:"给出去的 4 辆是相差数的一半，原来相差 4×2＝8 辆。"}
  ],
  gen:null
},
{
  id:"g1-11", grade:1, idx:11,
  title:"单数和双数",
  tag:"数与计算",
  goal:"认识单数和双数，会看个位判断一个数是单数还是双数。",
  points:[
    "双数：2 个 2 个地分正好分完，如 2、4、6、8、10；单数：分完还多 1 个，如 1、3、5、7、9。",
    "看个位就能判断：个位是 1、3、5、7、9 的是单数；个位是 0、2、4、6、8 的是双数。",
    "单数＋单数＝双数，双数＋双数＝双数，单数＋双数＝单数（先结合具体的数感知）。"
  ],
  examples:[
    {
      lead:"例1",
      html:"把铅笔 2 支装一袋。6 支铅笔能正好装完吗？7 支呢？<svg class='fig' viewBox='0 0 160 80' xmlns='http://www.w3.org/2000/svg'><circle cx='20' cy='22' r='8' fill='#2B8A83'/><circle cx='36' cy='22' r='8' fill='#2B8A83'/><circle cx='60' cy='22' r='8' fill='#2B8A83'/><circle cx='76' cy='22' r='8' fill='#2B8A83'/><circle cx='100' cy='22' r='8' fill='#2B8A83'/><circle cx='116' cy='22' r='8' fill='#2B8A83'/><text x='132' y='26' font-size='11' fill='#8A949C'>6支</text><circle cx='20' cy='58' r='8' fill='#2B8A83'/><circle cx='36' cy='58' r='8' fill='#2B8A83'/><circle cx='60' cy='58' r='8' fill='#2B8A83'/><circle cx='76' cy='58' r='8' fill='#2B8A83'/><circle cx='100' cy='58' r='8' fill='#2B8A83'/><circle cx='116' cy='58' r='8' fill='#2B8A83'/><circle cx='140' cy='58' r='8' fill='#E9A23B'/><text x='132' y='76' font-size='11' fill='#8A949C'>7支多1</text></svg>",
      steps:[
        "6 支 2 支一组：2、4、6，正好分成 3 组，没有剩余，所以 6 是双数。",
        "7 支 2 支一组：2、4、6 分了 3 组，还多 1 支装不下，所以 7 是单数。",
        "结论：2 个 2 个分完没剩余的是双数，还多 1 个的是单数。"
      ],
      answer:"6 是双数，能正好装完；7 是单数，装完还多 1 支。",
      variants:[
        {type:"fill", html:"8 个橘子，2 个装一袋，（ ）正好装完。（填“能”或“不能”）", answer:"能", analysis:"8 个 2 个一组正好分 4 组，没有剩余，所以能正好装完。"},
        {type:"choice", html:"下面哪个数，2 个 2 个地分会正好分完？", options:["5","6","7"], answer:1, analysis:"6 是双数，2 个一组正好分完；5 和 7 分完都多 1 个。"}
      ]
    },
    {
      lead:"例2",
      html:"判断一下：5、8、11，哪些是单数？哪些是双数？",
      steps:[
        "看个位：5 的个位是 5，是单数。",
        "8 的个位是 8，是双数。",
        "11 的个位是 1，是单数。"
      ],
      answer:"5 和 11 是单数，8 是双数。",
      variants:[
        {type:"fill", html:"9 是（ ）数。（填“单”或“双”）", answer:"单", analysis:"9 的个位是 9，属于 1、3、5、7、9，是单数。"},
        {type:"choice", html:"下面哪个数是双数？", options:["3","10","7"], answer:1, analysis:"10 的个位是 0，是双数；3 和 7 的个位是单数。"}
      ]
    },
    {
      lead:"例3",
      html:"先不着急算得数，想一想：3＋4 的和是单数还是双数？",
      steps:[
        "3 是单数，4 是双数。",
        "单数＋双数，结果是单数。",
        "算一下核对：3＋4＝7，7 是单数，想对了。"
      ],
      answer:"3＋4＝7，和是单数。",
      variants:[
        {type:"fill", html:"2＋4＝6，6 是（ ）数。（填“单”或“双”）", answer:"双", analysis:"2 和 4 都是双数，双数＋双数＝双数，6 是双数。"},
        {type:"judge", html:"两个双数相加，得数一定还是双数。", answer:true, analysis:"双数＋双数＝双数，如 2＋4＝6，说法正确。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"6 是（ ）数。（填“单”或“双”）", answer:"双", analysis:"6 的个位是 6，属于 0、2、4、6、8，是双数。"},
    {type:"choice", html:"下面哪个数是单数？", options:["2","8","9"], answer:2, analysis:"9 的个位是 9，是单数；2 和 8 是双数。"},
    {type:"judge", html:"10 是双数。", answer:true, analysis:"10 的个位是 0，2 个 2 个分正好分完，是双数，说法正确。"},
    {type:"fill", html:"有 7 块糖，2 块装一袋，装完还多（ ）块。", answer:1, unit:"块", analysis:"7 块 2 块一组：2、4、6 装了 3 袋，还多 1 块。"}
  ],
  quiz:[
    {type:"fill", html:"4 是（ ）数。（填“单”或“双”）", answer:"双", analysis:"4 的个位是 4，是双数。"},
    {type:"choice", html:"下面哪个数是双数？", options:["5","6","9"], answer:1, analysis:"6 的个位是 6，是双数；5 和 9 是单数。"},
    {type:"judge", html:"个位是 1、3、5、7、9 的数都是单数。", answer:true, analysis:"这正是判断单数的方法，说法正确。"},
    {type:"fill", html:"3＋5＝8，8 是（ ）数。（填“单”或“双”）", answer:"双", analysis:"3 和 5 都是单数，单数＋单数＝双数，8 是双数。"},
    {type:"choice", html:"9 个苹果，2 个装一盘，结果怎样？", options:["正好装完","装完还多 1 个","一盘也装不满"], answer:1, analysis:"9 是单数，2 个一盘装 4 盘用掉 8 个，还多 1 个。"}
  ],
  gen:{type:"oddEven", n:4}
}
];
