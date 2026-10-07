/* 数据：二年级 g2-12 至 g2-16 */
var L_G2C = [
{
  id:"g2-12", grade:2, idx:12,
  title:"数图形（线段/三角形/正方形计数）",
  tag:"图形几何",
  goal:"学会按大小、按顺序分类数线段、三角形和正方形，做到不重复、不遗漏。",
  points:[
    "数线段：一条直线上有几个点，线段总数＝(点数-1)+(点数-2)+…+1，也就是先数基本线段，再数由两段拼成的、三段拼成的……最后加起来。",
    "数三角形：从同一个顶点看底边，底边被分成几段，三角形个数就和数线段一样：基本块数+两块拼成的+三块拼成的……",
    "数正方形：按大小分类，先数最小的，再数由几个小正方形拼成的大正方形，按从左到右、从上到下的顺序数，做到不重不漏。"
  ],
  examples:[
    {
      lead:"例1",
      html:"下图是一条直线，上面有 A、B、C、D 四个点。数一数，图中一共有多少条线段？<svg class='fig' viewBox='0 0 260 50' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='28' x2='240' y2='28' stroke='#26313A' stroke-width='2'/><circle cx='30' cy='28' r='5' fill='#2B8A83'/><circle cx='90' cy='28' r='5' fill='#2B8A83'/><circle cx='150' cy='28' r='5' fill='#2B8A83'/><circle cx='210' cy='28' r='5' fill='#2B8A83'/><text x='30' y='14' font-size='13' fill='#26313A' text-anchor='middle'>A</text><text x='90' y='14' font-size='13' fill='#26313A' text-anchor='middle'>B</text><text x='150' y='14' font-size='13' fill='#26313A' text-anchor='middle'>C</text><text x='210' y='14' font-size='13' fill='#26313A' text-anchor='middle'>D</text></svg>",
      steps:[
        "先数最基本的小线段（相邻两点之间）：AB、BC、CD，共 3 条。",
        "再数由两段小线段拼成的：AC、BD，共 2 条。",
        "最后数由三段小线段拼成的：AD，共 1 条。",
        "合起来：3＋2＋1＝6 条。"
      ],
      answer:"一共有 6 条线段。",
      variants:[
        {type:"fill", html:"一条直线上有 3 个点（如下图），一共有（ ）条线段。<svg class='fig' viewBox='0 0 180 40' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='22' x2='160' y2='22' stroke='#26313A' stroke-width='2'/><circle cx='40' cy='22' r='5' fill='#2B8A83'/><circle cx='90' cy='22' r='5' fill='#2B8A83'/><circle cx='140' cy='22' r='5' fill='#2B8A83'/></svg>", answer:3, unit:"条", analysis:"基本线段 2 条，两段拼成的 1 条，2＋1＝3，共 3 条。"},
        {type:"choice", html:"一条直线上有 4 个点，一共可以数出多少条线段？", options:["3 条","6 条","10 条"], answer:1, analysis:"基本线段 3 条＋两段拼成的 2 条＋三段拼成的 1 条，3＋2＋1＝6 条。"}
      ]
    },
    {
      lead:"例2",
      html:"下图是一个大三角形，从顶点向底边画了两条线，把底边分成了 3 小段。数一数，图中一共有多少个三角形？<svg class='fig' viewBox='0 0 240 90' xmlns='http://www.w3.org/2000/svg'><line x1='120' y1='12' x2='20' y2='78' stroke='#26313A' stroke-width='2'/><line x1='120' y1='12' x2='80' y2='78' stroke='#26313A' stroke-width='2'/><line x1='120' y1='12' x2='140' y2='78' stroke='#26313A' stroke-width='2'/><line x1='120' y1='12' x2='200' y2='78' stroke='#26313A' stroke-width='2'/><line x1='20' y1='78' x2='200' y2='78' stroke='#26313A' stroke-width='2'/><circle cx='20' cy='78' r='3.5' fill='#3E6FB2'/><circle cx='80' cy='78' r='3.5' fill='#3E6FB2'/><circle cx='140' cy='78' r='3.5' fill='#3E6FB2'/><circle cx='200' cy='78' r='3.5' fill='#3E6FB2'/></svg>",
      steps:[
        "先数最小的三角形（一块一块的）：3 个。",
        "再数由两个小三角形拼成的：左边两个合起来、右边两个合起来，共 2 个。",
        "最后数由三个小三角形拼成的最大三角形：1 个。",
        "合起来：3＋2＋1＝6 个。"
      ],
      answer:"一共有 6 个三角形。",
      variants:[
        {type:"fill", html:"一个三角形从顶点向底边画了 1 条线，把底边分成 2 小段，一共有（ ）个三角形。", answer:3, unit:"个", analysis:"小三角形 2 个，两个拼成的大三角形 1 个，2＋1＝3 个。"},
        {type:"judge", html:"数三角形时，只要数出最小的三角形有几个就够了，不用数合起来的大三角形。", answer:false, analysis:"大三角形也是三角形，必须一起数，否则会漏掉，所以这句话错。"}
      ]
    },
    {
      lead:"例3",
      html:"下图是一个“田”字格（2×2 的小方格）。数一数，图中一共有多少个正方形？<svg class='fig' viewBox='0 0 130 130' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='20' width='90' height='90' fill='none' stroke='#26313A' stroke-width='2'/><line x1='65' y1='20' x2='65' y2='110' stroke='#26313A' stroke-width='2'/><line x1='20' y1='65' x2='110' y2='65' stroke='#26313A' stroke-width='2'/></svg>",
      steps:[
        "先数最小的正方形（边长 1 格）：左上、右上、左下、右下，共 4 个。",
        "再数由 4 个小正方形拼成的大正方形（边长 2 格）：整个外框，共 1 个。",
        "合起来：4＋1＝5 个。"
      ],
      answer:"一共有 5 个正方形。",
      variants:[
        {type:"choice", html:"在 2×2 的“田”字格中，一共有多少个正方形？", options:["4 个","5 个","8 个"], answer:1, analysis:"小正方形 4 个，再加上整个大正方形 1 个，4＋1＝5 个。"},
        {type:"fill", html:"一个 3×3 的方格图里，最小的正方形有 9 个，由 4 个小正方形拼成的有 4 个，由 9 个拼成的大正方形有 1 个，一共有（ ）个正方形。", answer:14, unit:"个", analysis:"按大小分类：9＋4＋1＝14 个。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"一条直线上有 5 个点，一共有（ ）条线段。", answer:10, unit:"条", analysis:"4＋3＋2＋1＝10 条。"},
    {type:"choice", html:"一个三角形从顶点向底边画了两条线（底边分成 3 段），一共有几个三角形？", options:["3 个","5 个","6 个"], answer:2, analysis:"3＋2＋1＝6 个。"},
    {type:"fill", html:"3×3 的方格图里，一共有（ ）个正方形。", answer:14, unit:"个", analysis:"小的 9 个＋4 格拼成的 4 个＋最大的 1 个，9＋4＋1＝14。"},
    {type:"judge", html:"数图形时，按大小一类一类地数，再把各类合起来，可以做到不重复、不遗漏。", answer:true, analysis:"分类、按顺序数是数图形的基本方法，能避免重数和漏数。"},
    {type:"fill", html:"一条直线上只有 2 个端点，一共有（ ）条线段。", answer:1, unit:"条", analysis:"两个端点之间只有 1 条线段。"},
    {type:"choice", html:"在 2×2 的“田”字格里，最小的小正方形有几个？", options:["4 个","5 个","1 个"], answer:0, analysis:"左上、右上、左下、右下，共 4 个小正方形。"},
    {type:"fill", html:"一个三角形的底边被分成 4 小段（从顶点画了 3 条线），一共有（ ）个三角形。", answer:10, unit:"个", analysis:"4＋3＋2＋1＝10 个。"}
  ],
  quiz:[
    {type:"fill", html:"一条直线上有 4 个点，一共有（ ）条线段。", answer:6, unit:"条", analysis:"3＋2＋1＝6 条。"},
    {type:"fill", html:"2×2 的“田”字格里，一共有（ ）个正方形。", answer:5, unit:"个", analysis:"小正方形 4 个＋大正方形 1 个＝5 个。"},
    {type:"choice", html:"底边被分成 3 段的三角形图，一共有多少个三角形？", options:["3 个","6 个","10 个"], answer:1, analysis:"3＋2＋1＝6 个。"},
    {type:"judge", html:"数正方形时，外面那个大正方形不用数，只要数里面的小正方形就行。", answer:false, analysis:"大正方形也是正方形，必须一起数，所以这句话错。"},
    {type:"fill", html:"一条直线上有 3 个点，一共有（ ）条线段。", answer:3, unit:"条", analysis:"2＋1＝3 条。"}
  ],
  gen:null
}
,{
  id:"g2-13", grade:2, idx:13,
  title:"图形剪拼",
  tag:"图形几何",
  goal:"学会沿直线把图形剪开，再拼一拼，认识图形之间是可以互相变化的。",
  points:[
    "沿一条直线把图形剪开，剪痕用虚线表示；剪开后的几块还能再拼回去或拼成别的图形。",
    "两个完全一样的三角形，可以拼成一个平行四边形（直角三角形还能拼成长方形）。",
    "把平行四边形沿高剪开，把剪下的三角形平移到另一边，就能拼成长方形；剪拼前后图形的总面积（大小）不变。"
  ],
  examples:[
    {
      lead:"例1",
      html:"一张长方形纸，沿下面图中的虚线（对角线）剪一刀，会得到两个什么样的图形？<svg class='fig' viewBox='0 0 220 120' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='25' width='160' height='70' fill='#F6D79E' stroke='#26313A' stroke-width='2'/><line x1='30' y1='25' x2='190' y2='95' stroke='#D8664E' stroke-width='2' stroke-dasharray='6 5'/></svg>",
      steps:[
        "观察虚线：它从长方形的一个角斜着对角到另一个角，就是长方形的对角线。",
        "沿这条对角线剪一刀，长方形被分成两块。",
        "这两块三角形完全一样（大小、形状都相同），把它们翻一翻还能再拼回长方形。"
      ],
      answer:"沿对角线剪一刀，得到两个完全一样的直角三角形。",
      variants:[
        {type:"judge", html:"把一个长方形沿对角线剪开，得到的两个三角形完全一样。", answer:true, analysis:"长方形对角线把它分成两个一样大、一样形状的直角三角形，说法正确。"},
        {type:"choice", html:"两个完全一样的三角形，可以拼成下面哪种图形？", options:["圆","平行四边形","球"], answer:1, analysis:"把两个三角形等长的边对在一起，可以拼成一个平行四边形；圆和球是曲面图形，拼不出来。"}
      ]
    },
    {
      lead:"例2",
      html:"把下面左边的平行四边形，沿虚线（一条高）剪一刀，再把剪下的三角形移到右边，能拼成什么图形？<svg class='fig' viewBox='0 0 300 120' xmlns='http://www.w3.org/2000/svg'><polygon points='30,95 60,25 150,25 120,95' fill='#7FC3B8' stroke='#26313A' stroke-width='2'/><line x1='60' y1='25' x2='60' y2='95' stroke='#D8664E' stroke-width='2' stroke-dasharray='6 5'/><text x='90' y='112' font-size='12' fill='#51606A' text-anchor='middle'>剪一刀</text><line x1='160' y1='60' x2='195' y2='60' stroke='#2B8A83' stroke-width='2'/><polygon points='195,55 203,60 195,65' fill='#2B8A83'/><rect x='210' y='25' width='80' height='70' fill='#F6D79E' stroke='#26313A' stroke-width='2'/><text x='250' y='112' font-size='12' fill='#51606A' text-anchor='middle'>拼成长方形</text></svg>",
      steps:[
        "平行四边形左右两边是斜的。沿虚线（从上面一个角垂直画到底边）剪一刀。",
        "剪下左边一个直角三角形，把它平移到右边斜边上。",
        "三角形的斜边正好对齐右边的斜边，两块合起来就是一个长方形。",
        "剪拼前后纸的总大小（面积）没有变，只是形状变了。"
      ],
      answer:"沿高剪一刀，把左边的三角形移到右边，就能拼成长方形。",
      variants:[
        {type:"judge", html:"把平行四边形剪一刀拼成长方形，形状变了，但图形的总面积（大小）没有变。", answer:true, analysis:"纸还是原来那张纸，只是位置移动了，面积不变。"},
        {type:"fill", html:"平行四边形沿高剪开拼成了长方形，它的面积（大小）（ ）。（填“变”或“不变”）", answer:"不变", analysis:"只是把剪下来的三角形平移了一下，纸没有多也没有少，面积不变。"}
      ]
    },
    {
      lead:"例3",
      html:"一张长方形纸，沿下图中虚线剪一刀，能分成两个什么样的图形？<svg class='fig' viewBox='0 0 220 120' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='25' width='160' height='70' fill='#F6D79E' stroke='#26313A' stroke-width='2'/><line x1='110' y1='25' x2='110' y2='95' stroke='#D8664E' stroke-width='2' stroke-dasharray='6 5'/></svg>",
      steps:[
        "虚线从上面一条边的中点垂直画到下面一条边的中点。",
        "沿这条虚线剪一刀，长方形被分成左右两块。",
        "两块的长和宽都一样，是两个完全一样的小长方形。"
      ],
      answer:"沿长边中点的竖直线剪一刀，得到两个完全一样的小长方形。",
      variants:[
        {type:"choice", html:"把一张正方形纸剪一刀，不能分成下面哪一种？", options:["两个一样的长方形","两个一样的三角形","一个圆"], answer:2, analysis:"直线一刀剪不出圆（圆边是弯的），所以选“一个圆”。"},
        {type:"fill", html:"把一张长方形纸对折后沿折痕剪开，得到两个（ ）的小长方形。（填“完全一样”或“不同”）", answer:"完全一样", analysis:"对折后两边重合，沿折痕剪开，两块大小形状都相同。"}
      ]
    }
  ],
  practice:[
    {type:"judge", html:"把长方形沿对角线剪开，得到的两个三角形可以再拼成一个平行四边形。", answer:true, analysis:"把两个三角形等长的边对在一起，就能拼成平行四边形。"},
    {type:"choice", html:"把平行四边形剪一刀拼成长方形，什么发生了变化？", options:["面积","形状","纸的总大小"], answer:1, analysis:"只是形状从斜的变成了方的，面积和总大小都没变。"},
    {type:"fill", html:"把一张正方形纸对折后沿折痕剪开，得到两个完全一样的（ ）形。", answer:"长方", analysis:"正方形对折剪开后，两块都是长方形。"},
    {type:"judge", html:"图形经过剪拼以后，它的面积（大小）不变。", answer:true, analysis:"剪拼只是改变形状，纸的总量没有变，面积不变。"},
    {type:"choice", html:"下面哪种剪法能把长方形分成两个完全一样的三角形？", options:["沿对角线剪","沿中间横一条直线剪","随便斜着剪一刀"], answer:0, analysis:"只有沿对角线剪，才能把长方形分成两个一样的直角三角形。"},
    {type:"fill", html:"两个完全一样的三角形，把相等的一条边对在一起，可以拼成一个（ ）四边形。", answer:"平行", analysis:"两组对边分别平行，拼出的是平行四边形。"},
    {type:"judge", html:"把一个正方形剪一刀，一定能得到两个圆。", answer:false, analysis:"一刀直线剪不出圆，圆的边是曲线，所以这句话错。"}
  ],
  quiz:[
    {type:"judge", html:"沿长方形的对角线剪一刀，可以得到两个完全一样的三角形。", answer:true, analysis:"长方形对角线分成长度、形状都相同的两个直角三角形。"},
    {type:"choice", html:"平行四边形剪拼成长方形后，保持不变的是什么？", options:["形状","面积","边的方向"], answer:1, analysis:"纸没有多也没有少，面积不变；形状和边的方向都变了。"},
    {type:"fill", html:"把长方形对折后沿折痕剪开，得到两个完全一样的小长方形，说明原来的长方形被（ ）分成了两份。", answer:"平均", analysis:"对折就是从正中间平分，所以是平均分。"},
    {type:"choice", html:"把一张正方形纸剪一刀，可以分成两个完全一样的什么图形？", options:["三角形","圆","球"], answer:0, analysis:"沿对角线剪一刀得到两个一样的三角形；圆和球剪不出来。"},
    {type:"judge", html:"在剪拼示意图里，剪痕通常用虚线画出来。", answer:true, analysis:"虚线表示“要从这里剪”，是示意图的约定画法。"}
  ],
  gen:null
}
,{
  id:"g2-14", grade:2, idx:14,
  title:"火柴棒算式",
  tag:"数学游戏",
  goal:"学会通过移动、添上或去掉一根火柴棒，让不成立的算式变得成立。",
  points:[
    "算式里的数字是用火柴棒摆成的“七段数字”，动一根火柴，数字常常会变成另一个数字。",
    "“移动一根”是把火柴从一处搬到另一处，火柴总数不变；“添上一根”总数变多；“去掉一根”总数变少。",
    "先算一算等式两边差多少，再想：哪个数字动一根能变成另一个数字，动手摆一摆、算一算，确认两边相等。"
  ],
  examples:[
    {
      lead:"例1（移动一根）",
      html:"下面的算式是用火柴棒摆成的，并不成立。只移动一根火柴棒，让等式成立：9＋4＝1。<svg class='fig' viewBox='0 0 230 74' xmlns='http://www.w3.org/2000/svg'><rect x='17' y='10' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='33' y='17' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='33' y='37' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='17' y='57' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='10' y='17' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='17' y='34' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='69' y='20' width='6' height='34' rx='2' fill='#E9A23B'/><rect x='60' y='33' width='24' height='6' rx='2' fill='#E9A23B'/><rect x='100' y='17' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='107' y='34' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='123' y='17' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='123' y='37' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='144' y='28' width='28' height='5' rx='2' fill='#E9A23B'/><rect x='144' y='40' width='28' height='5' rx='2' fill='#E9A23B'/><rect x='213' y='17' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='213' y='37' width='7' height='20' rx='2' fill='#E9A23B'/></svg>",
      steps:[
        "先算一算：左边 9＋4＝13，右边是 1，两边差很多，不相等。",
        "观察加号“＋”：把它中间那根竖棒拿走，加号就变成了减号“－”。",
        "把这根竖棒放到右边的“1”上，在“1”头顶加一横，“1”就变成了“7”。",
        "新算式是 9－4＝7，9－4＝7，两边相等。"
      ],
      answer:"把加号上的竖棒移到右边 1 上，变成 9－4＝7。",
      variants:[
        {type:"choice", html:"移动一根火柴，9＋4＝1 可以变成下面哪个正确的算式？", options:["9－4＝7","9＋4＝11","5＋4＝1"], answer:0, analysis:"加号变减号，右边 1 加一横变成 7，9－4＝7 成立。"},
        {type:"judge", html:"“移动一根火柴”以后，算式里火柴棒的总根数和原来一样多。", answer:true, analysis:"移动只是把火柴搬个位置，没有添也没有拿走，总数不变。"}
      ]
    },
    {
      lead:"例2（添上一根）",
      html:"下面的算式不成立。只添上一根火柴棒，让等式成立：5－3＝3。<svg class='fig' viewBox='0 0 230 74' xmlns='http://www.w3.org/2000/svg'><rect x='17' y='10' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='10' y='17' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='17' y='34' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='33' y='37' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='17' y='57' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='60' y='33' width='24' height='6' rx='2' fill='#E9A23B'/><rect x='107' y='10' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='123' y='17' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='107' y='34' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='123' y='37' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='107' y='57' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='144' y='28' width='28' height='5' rx='2' fill='#E9A23B'/><rect x='144' y='40' width='28' height='5' rx='2' fill='#E9A23B'/><rect x='197' y='10' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='213' y='17' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='197' y='34' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='213' y='37' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='197' y='57' width='16' height='7' rx='2' fill='#E9A23B'/></svg>",
      steps:[
        "先算：左边 5－3＝2，右边是 3，不相等。",
        "看左边的被减数“5”：在它左下角的位置添上一根竖棒，“5”就变成了“6”。",
        "新算式是 6－3＝3，6－3＝3，两边相等。"
      ],
      answer:"在 5 的左下角添一根，变成 6－3＝3。",
      variants:[
        {type:"fill", html:"添上一根火柴，3＋3＝5 可以变成 3＋3＝（ ）。", answer:6, analysis:"在 5 的左下角添一根竖棒，5 变成 6，3＋3＝6。"},
        {type:"choice", html:"添上一根火柴棒，数字“3”能变成下面哪个数字？", options:["9","7","1"], answer:0, analysis:"在 3 的左上角添一根竖棒，就变成 9。"}
      ]
    },
    {
      lead:"例3（去掉一根）",
      html:"下面的算式不成立。只去掉一根火柴棒，让等式成立：8－3＝9。<svg class='fig' viewBox='0 0 230 74' xmlns='http://www.w3.org/2000/svg'><rect x='17' y='10' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='33' y='17' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='33' y='37' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='17' y='57' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='10' y='37' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='10' y='17' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='17' y='34' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='60' y='33' width='24' height='6' rx='2' fill='#E9A23B'/><rect x='107' y='10' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='123' y='17' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='107' y='34' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='123' y='37' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='107' y='57' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='144' y='28' width='28' height='5' rx='2' fill='#E9A23B'/><rect x='144' y='40' width='28' height='5' rx='2' fill='#E9A23B'/><rect x='197' y='10' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='213' y='17' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='213' y='37' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='197' y='57' width='16' height='7' rx='2' fill='#E9A23B'/><rect x='190' y='17' width='7' height='20' rx='2' fill='#E9A23B'/><rect x='197' y='34' width='16' height='7' rx='2' fill='#E9A23B'/></svg>",
      steps:[
        "先算：左边 8－3＝5，右边是 9，不相等。",
        "看右边的“9”：去掉它右上角那根竖棒，“9”就变成了“5”。",
        "新算式是 8－3＝5，8－3＝5，两边相等。"
      ],
      answer:"去掉 9 右上角的竖棒，变成 8－3＝5。",
      variants:[
        {type:"fill", html:"去掉一根火柴，7－4＝9 可以变成 7－4＝（ ）。", answer:3, analysis:"去掉 9 左上角那根竖棒，9 就变成 3，7－4＝3。"},
        {type:"judge", html:"去掉一根火柴以后，算式里火柴棒的总根数变少了。", answer:true, analysis:"去掉就是拿走一根，总数当然变少。"}
      ]
    }
  ],
  practice:[
    {type:"choice", html:"移动一根火柴，9＋4＝1 可以变成下面哪个正确算式？", options:["9－4＝7","9＋4＝11","19－4＝1"], answer:0, analysis:"加号变减号，右边 1 加一横变成 7，9－4＝7。"},
    {type:"fill", html:"添上一根火柴，4＋3＝1 可以变成 4＋3＝（ ）。", answer:7, analysis:"在右边 1 头顶加一横，1 变成 7，4＋3＝7。"},
    {type:"fill", html:"去掉一根火柴，8－5＝9 可以变成 8－5＝（ ）。", answer:3, analysis:"去掉 9 左上角那根竖棒，9 变成 3，8－5＝3。"},
    {type:"judge", html:"把加号“＋”上的竖棒去掉，它就变成了减号“－”。", answer:true, analysis:"加号由一横一竖组成，去掉竖棒只剩一横，就是减号。"},
    {type:"choice", html:"数字“8”去掉中间那根横棒，会变成哪个数字？", options:["0","6","9"], answer:0, analysis:"8 中间一横去掉后，上下两个圈连起来，就是 0。"},
    {type:"judge", html:"添上一根火柴以后，算式里火柴棒的总根数变多了。", answer:true, analysis:"添上就是多放一根，总数变多。"},
    {type:"fill", html:"移动一根火柴，8＋1＝1 可以变成 8－1＝（ ）。", answer:7, analysis:"加号竖棒移到右边 1 上，1 变成 7，8－1＝7。"}
  ],
  quiz:[
    {type:"choice", html:"移动一根火柴，9＋4＝1 变成下面哪个等式就成立了？", options:["9－4＝7","9＋4＝11","5＋4＝1"], answer:0, analysis:"加号变减号，右边 1 加一横成 7，9－4＝7。"},
    {type:"fill", html:"添上一根火柴，5－3＝3 可以变成（ ）－3＝3。", answer:6, analysis:"在 5 左下角添一根竖棒，5 变成 6。"},
    {type:"fill", html:"去掉一根火柴，8－3＝9 可以变成 8－3＝（ ）。", answer:5, analysis:"去掉 9 右上角竖棒，9 变成 5。"},
    {type:"judge", html:"在 0 到 9 这些数字里，数字“8”用的火柴棒根数最多。", answer:true, analysis:"8 用了全部 7 根火柴，别的数字都少于 7 根。"},
    {type:"choice", html:"去掉一根火柴棒，数字“7”会变成下面哪个数字？", options:["1","4","0"], answer:0, analysis:"7 由上面一横和右边两根竖棒组成，去掉上面一横就剩 1。"}
  ],
  gen:null
}
,{
  id:"g2-15", grade:2, idx:15,
  title:"数阵图",
  tag:"数学游戏",
  goal:"学会把数填进圆圈里，使每条线上几个数的和都相等。",
  points:[
    "数阵图就是把数填在图形的圆圈里，让每条线上几个数加起来的和都相等。",
    "辐射型（如十字）：中间的圆圈被好几条线共用，叫“重叠数”；先算所有数的总和，再试中间填几。",
    "封闭型（如三角形）：顶点上的数被两条边共用；每条边的和 × 边数 ＝ 所有数的总和 ＋ 顶点重叠数之和。"
  ],
  examples:[
    {
      lead:"例1（十字辐射型）",
      html:"把 1、2、3、4、5 这五个数，填到下面五个圆圈里（中间一个，上下左右各一个），使每条直线上三个数的和相等。中间应该填几？每条线的和是几？<svg class='fig' viewBox='0 0 200 110' xmlns='http://www.w3.org/2000/svg'><line x1='100' y1='20' x2='100' y2='90' stroke='#26313A' stroke-width='2'/><line x1='55' y1='55' x2='145' y2='55' stroke='#26313A' stroke-width='2'/><circle cx='100' cy='20' r='12' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><circle cx='100' cy='90' r='12' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><circle cx='55' cy='55' r='12' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><circle cx='145' cy='55' r='12' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><circle cx='100' cy='55' r='13' fill='#F6D79E' stroke='#E9A23B' stroke-width='2'/></svg>",
      steps:[
        "先算五个数的总和：1＋2＋3＋4＋5＝15。",
        "中间的数被横着、竖着两条线都用到，算了两次；两条线的和加起来＝15＋中间数。",
        "要能分成两个一样的和，15＋中间数必须是双数，所以中间填单数 1、3 或 5。",
        "试中间填 3：剩下 1 和 5、2 和 4，1＋5＝6，2＋4＝6；每条线的和＝3＋6＝9，正好相等。"
      ],
      answer:"中间填 3，上下填 1 和 5，左右填 2 和 4，每条线上三个数的和是 9。",
      variants:[
        {type:"fill", html:"十字数阵中间填 3，一对手臂上两个数要凑成 6，1 和 5 是一对，2 和（ ）是一对。", answer:4, analysis:"2＋4＝6，和 1＋5＝6 一样，所以另一对是 2 和 4。"},
        {type:"choice", html:"把 1～5 填进十字数阵，中间的重叠数不能是下面哪个？", options:["1","3","4"], answer:2, analysis:"15＋4＝19，是单数，不能分成两个一样的整数和，所以中间不能填 4。"}
      ]
    },
    {
      lead:"例2（三角形封闭型）",
      html:"把 1、2、3、4、5、6 填到三角形的三个顶点和三条边中点里，使每条边上三个数的和相等。顶点已经填好 1、2、3，每条边的和是几？边上的小圆圈分别填几？<svg class='fig' viewBox='0 0 200 110' xmlns='http://www.w3.org/2000/svg'><polygon points='100,15 25,90 175,90' fill='none' stroke='#26313A' stroke-width='2'/><circle cx='100' cy='15' r='11' fill='#F6D79E' stroke='#E9A23B' stroke-width='2'/><text x='100' y='19' font-size='12' fill='#26313A' text-anchor='middle'>1</text><circle cx='25' cy='90' r='11' fill='#F6D79E' stroke='#E9A23B' stroke-width='2'/><text x='25' y='94' font-size='12' fill='#26313A' text-anchor='middle'>2</text><circle cx='175' cy='90' r='11' fill='#F6D79E' stroke='#E9A23B' stroke-width='2'/><text x='175' y='94' font-size='12' fill='#26313A' text-anchor='middle'>3</text><circle cx='62' cy='52' r='10' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><circle cx='138' cy='52' r='10' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><circle cx='100' cy='90' r='10' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/></svg>",
      steps:[
        "先算六个数的总和：1＋2＋3＋4＋5＋6＝21。",
        "三个顶点的数被两条边都用到，多算了一次；三条边的和加起来＝21＋(1＋2＋3)＝27。",
        "每条边的和＝27÷3＝9。",
        "底边 2—？—3：中间要填 9－2－3＝4；左边 1—？—2：中间填 9－1－2＝6；右边 1—？—3：中间填 9－1－3＝5，正好用掉 4、5、6。"
      ],
      answer:"每条边的和是 9；2 和 3 之间填 4，1 和 2 之间填 6，1 和 3 之间填 5。",
      variants:[
        {type:"fill", html:"三角形数阵顶点是 1、2、3，每条边的和是 9，那么 2 和 3 之间的小圆圈应填（ ）。", answer:4, analysis:"9－2－3＝4。"},
        {type:"judge", html:"在三角形数阵里，顶点上的数被两条边共用。", answer:true, analysis:"每个顶点同时属于两条边，所以会被算两次，这是封闭型数阵的关键。"}
      ]
    },
    {
      lead:"例3（三轮辐辐射型）",
      html:"把 1～7 这七个数填到下面三个轮辐的圆圈里（中心一个，三条线上各再填两个），使每条线上三个数的和相等。中心应该填几？每条线的和是几？<svg class='fig' viewBox='0 0 200 125' xmlns='http://www.w3.org/2000/svg'><line x1='100' y1='55' x2='100' y2='12' stroke='#26313A' stroke-width='2'/><line x1='100' y1='55' x2='55' y2='105' stroke='#26313A' stroke-width='2'/><line x1='100' y1='55' x2='145' y2='105' stroke='#26313A' stroke-width='2'/><circle cx='100' cy='12' r='10' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><circle cx='55' cy='105' r='10' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><circle cx='145' cy='105' r='10' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><circle cx='100' cy='55' r='12' fill='#F6D79E' stroke='#E9A23B' stroke-width='2'/><circle cx='100' cy='33' r='9' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><circle cx='78' cy='80' r='9' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/><circle cx='122' cy='80' r='9' fill='#FCFDF9' stroke='#2B8A83' stroke-width='2'/></svg>",
      steps:[
        "先算七个数的总和：1＋2＋…＋7＝28。",
        "中心的数被三条线都用到，多算了两次；三条线的和加起来＝28＋2×中心数。",
        "试中心填 4：28＋2×4＝36，每条线的和＝36÷3＝12。",
        "剩下 1、2、3、5、6、7 配对：1＋7＝8，2＋6＝8，3＋5＝8，再加上中心 4，每条线都是 4＋8＝12。"
      ],
      answer:"中心填 4，三条线分别配 (1,7)、(2,6)、(3,5)，每条线上三个数的和是 12。",
      variants:[
        {type:"fill", html:"三轮辐数阵中心填 4，每条线和是 12，那么一条线上另两个数要凑成 8。2 和（ ）凑成 8。", answer:6, analysis:"2＋6＝8。"},
        {type:"choice", html:"把 1～7 填进三轮辐数阵，中心应该填几？", options:["4","1","7"], answer:0, analysis:"中心填 4 时，28＋2×4＝36，能被 3 整除，每条线和 12。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"十字数阵填 1～5，每条线上三个数的和是 9，中间应填（ ）。", answer:3, analysis:"15＋中间数要能分成两个 9，15＋3＝18，中间填 3。"},
    {type:"choice", html:"三角形数阵填 1～6，顶点填 1、2、3，每条边上三个数的和是多少？", options:["9","10","12"], answer:0, analysis:"(21＋1＋2＋3)÷3＝27÷3＝9。"},
    {type:"judge", html:"辐射型数阵里，中间那个圆圈的数会被好几条线同时用到。", answer:true, analysis:"中间的数是重叠数，会被横、竖等多条线共用，所以要先确定它。"},
    {type:"fill", html:"三轮辐数阵填 1～7，每条线上三个数的和是 12，中心应填（ ）。", answer:4, analysis:"28＋2×中心＝36，中心＝4。"},
    {type:"choice", html:"十字数阵填 1～5，中间为什么不能填 4？", options:["15＋4＝19，不能平均分成两个整数和","4 太大了","没有为什么"], answer:0, analysis:"两条线的和加起来是 15＋中间数，19 是单数，不能分成两个一样的整数。"},
    {type:"judge", html:"填好数阵图以后，每条线上几个数加起来的和都要相等。", answer:true, analysis:"这就是数阵图的要求：每条线的和相等。"},
    {type:"fill", html:"三角形数阵顶点是 1、2、3，每条边和是 9，那么 1 和 2 之间的小圆圈应填（ ）。", answer:6, analysis:"9－1－2＝6。"}
  ],
  quiz:[
    {type:"fill", html:"十字数阵填 1～5，中间填 3，每条线上三个数的和是（ ）。", answer:9, analysis:"(15＋3)÷2＝9。"},
    {type:"choice", html:"三轮辐数阵中心填 4，一条线上有 4＋2＋（ ）＝12。括号里填几？", options:["6","7","5"], answer:0, analysis:"12－4－2＝6。"},
    {type:"judge", html:"三角形数阵里，顶点上的数只被一条边用到。", answer:false, analysis:"顶点属于两条边，会被算两次，所以这句话错。"},
    {type:"fill", html:"三角形数阵顶点是 1、2、3，每条边和是 9，1 和 3 之间的小圆圈应填（ ）。", answer:5, analysis:"9－1－3＝5。"},
    {type:"choice", html:"填辐射型数阵时，一般先确定哪个位置的数？", options:["中间重叠的那个数","边上随便一个","最外面一个"], answer:0, analysis:"中间数被多次用到，先试出中间数，两边就好配了。"}
  ],
  gen:null
}
,{
  id:"g2-16", grade:2, idx:16,
  title:"有余数除法应用题",
  tag:"数与计算",
  goal:"学会用有余数的除法解决生活问题，分清“进一法”和“去尾法”。",
  points:[
    "平均分后还有剩余、剩下的不够再分一份，就写成：被除数÷除数＝商……余数。",
    "余数一定要比除数小；如果余数等于或大于除数，说明还能再分一份。",
    "装盘子、租车、坐船等“剩下也要算一份”的问题，用“进一法”：商再加 1；买东西、做衣服等“剩下不够用”的问题，用“去尾法”：商就是答案。"
  ],
  examples:[
    {
      lead:"例1（进一法）",
      html:"妈妈买了 23 个苹果，每盘放 5 个，至少需要几个盘子才能装完？<svg class='fig' viewBox='0 0 300 95' xmlns='http://www.w3.org/2000/svg'><ellipse cx='40' cy='62' rx='24' ry='7' fill='#F6D79E' stroke='#26313A' stroke-width='1.5'/><circle cx='28' cy='54' r='4.5' fill='#D8664E'/><circle cx='35' cy='54' r='4.5' fill='#D8664E'/><circle cx='42' cy='54' r='4.5' fill='#D8664E'/><circle cx='49' cy='54' r='4.5' fill='#D8664E'/><circle cx='56' cy='54' r='4.5' fill='#D8664E'/><ellipse cx='100' cy='62' rx='24' ry='7' fill='#F6D79E' stroke='#26313A' stroke-width='1.5'/><circle cx='88' cy='54' r='4.5' fill='#D8664E'/><circle cx='95' cy='54' r='4.5' fill='#D8664E'/><circle cx='102' cy='54' r='4.5' fill='#D8664E'/><circle cx='109' cy='54' r='4.5' fill='#D8664E'/><circle cx='116' cy='54' r='4.5' fill='#D8664E'/><ellipse cx='160' cy='62' rx='24' ry='7' fill='#F6D79E' stroke='#26313A' stroke-width='1.5'/><circle cx='148' cy='54' r='4.5' fill='#D8664E'/><circle cx='155' cy='54' r='4.5' fill='#D8664E'/><circle cx='162' cy='54' r='4.5' fill='#D8664E'/><circle cx='169' cy='54' r='4.5' fill='#D8664E'/><circle cx='176' cy='54' r='4.5' fill='#D8664E'/><ellipse cx='220' cy='62' rx='24' ry='7' fill='#F6D79E' stroke='#26313A' stroke-width='1.5'/><circle cx='208' cy='54' r='4.5' fill='#D8664E'/><circle cx='215' cy='54' r='4.5' fill='#D8664E'/><circle cx='222' cy='54' r='4.5' fill='#D8664E'/><circle cx='229' cy='54' r='4.5' fill='#D8664E'/><circle cx='236' cy='54' r='4.5' fill='#D8664E'/><circle cx='262' cy='54' r='4.5' fill='#D8664E'/><circle cx='272' cy='54' r='4.5' fill='#D8664E'/><circle cx='282' cy='54' r='4.5' fill='#D8664E'/><text x='272' y='80' font-size='11' fill='#51606A' text-anchor='middle'>剩3个</text></svg>",
      steps:[
        "列式：23÷5＝4（盘）……3（个），也就是装满 4 盘后还剩 3 个苹果。",
        "剩下的 3 个苹果虽然不够一盘，但也不能扔掉，还得再用一个盘子装。",
        "这是“进一法”：盘子数＝4＋1＝5（个）。"
      ],
      answer:"至少需要 5 个盘子。",
      variants:[
        {type:"fill", html:"25 个桃子，每个篮子装 6 个，至少需要（ ）个篮子才能装完。", answer:5, unit:"个", analysis:"25÷6＝4……1，剩下 1 个也要一个篮子，4＋1＝5。"},
        {type:"choice", html:"租船时，最后剩下几个人也得再租一条船，这种做法叫什么？", options:["进一法（商＋1）","去尾法（商就是答案）","不算他们了"], answer:0, analysis:"剩下的人也要一条船，所以商要再加 1，叫进一法。"}
      ]
    },
    {
      lead:"例2（去尾法）",
      html:"一匹布长 25 米，做一套衣服要用 3 米，最多能做几套衣服？<svg class='fig' viewBox='0 0 310 60' xmlns='http://www.w3.org/2000/svg'><rect x='8' y='18' width='28' height='22' fill='#7FC3B8' stroke='#26313A' stroke-width='1.5'/><rect x='42' y='18' width='28' height='22' fill='#7FC3B8' stroke='#26313A' stroke-width='1.5'/><rect x='76' y='18' width='28' height='22' fill='#7FC3B8' stroke='#26313A' stroke-width='1.5'/><rect x='110' y='18' width='28' height='22' fill='#7FC3B8' stroke='#26313A' stroke-width='1.5'/><rect x='144' y='18' width='28' height='22' fill='#7FC3B8' stroke='#26313A' stroke-width='1.5'/><rect x='178' y='18' width='28' height='22' fill='#7FC3B8' stroke='#26313A' stroke-width='1.5'/><rect x='212' y='18' width='28' height='22' fill='#7FC3B8' stroke='#26313A' stroke-width='1.5'/><rect x='246' y='18' width='28' height='22' fill='#7FC3B8' stroke='#26313A' stroke-width='1.5'/><rect x='280' y='18' width='9' height='22' fill='#F6D79E' stroke='#26313A' stroke-width='1.5'/><text x='155' y='55' font-size='11' fill='#51606A' text-anchor='middle'>每块代表一套衣服用布3米；最右边淡黄色是剩下的1米</text></svg>",
      steps:[
        "列式：25÷3＝8（套）……1（米），也就是做了 8 套后还剩 1 米布。",
        "剩下的 1 米布不够再做一套衣服（一套要 3 米），不能硬做。",
        "这是“去尾法”：最多做 8 套，不用再加 1。"
      ],
      answer:"最多能做 8 套衣服。",
      variants:[
        {type:"fill", html:"有 40 颗糖，每人分 6 颗，最多够分给（ ）人。", answer:6, unit:"人", analysis:"40÷6＝6……4，剩下 4 颗不够再分一人，去尾法，够 6 人。"},
        {type:"judge", html:"做衣服时剩下的布料不够做一套，就用去尾法，商就是答案。", answer:true, analysis:"剩下的不够用就丢掉不算，所以商就是套数。"}
      ]
    },
    {
      lead:"例3（余数要比除数小）",
      html:"一道除法算式：□÷6＝4……△。△（余数）最大是几？这时□是几？",
      steps:[
        "余数一定要比除数小，除数是 6，所以△可以是 1、2、3、4、5。",
        "其中最大的是 5。",
        "这时被除数□＝商×除数＋余数＝4×6＋5＝29。"
      ],
      answer:"△最大是 5，这时□是 29。",
      variants:[
        {type:"fill", html:"□÷5＝3……△，△最大是（ ）。", answer:4, unit:"", analysis:"余数要比除数 5 小，最大是 4。"},
        {type:"choice", html:"下面哪个算式的余数是错的？", options:["□÷4＝2……5","□÷4＝2……3","□÷4＝2……1"], answer:0, analysis:"除数是 4，余数 5 比除数还大，说明还能再分一份，是错的。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"20 个桔子，每袋装 6 个，至少需要（ ）个袋子才能装完。", answer:4, unit:"个", analysis:"20÷6＝3……2，剩下 2 个也要一个袋子，进一法，3＋1＝4。"},
    {type:"fill", html:"一根绳子长 30 米，每 4 米剪一根跳绳，最多能剪（ ）根。", answer:7, unit:"根", analysis:"30÷4＝7……2，剩下 2 米不够一根跳绳，去尾法，最多 7 根。"},
    {type:"choice", html:"每辆车坐 8 人，30 个同学去春游，至少要租几辆车？", options:["4 辆","3 辆","5 辆"], answer:0, analysis:"30÷8＝3……6，剩下 6 人也要一辆车，3＋1＝4 辆。"},
    {type:"judge", html:"除数是 7，余数可以是 8。", answer:false, analysis:"余数必须比除数小，8＞7，说明还能再分一份，所以错。"},
    {type:"fill", html:"□÷7＝5……△，△最大是（ ）。", answer:6, unit:"", analysis:"余数要比 7 小，最大是 6。"},
    {type:"fill", html:"有 17 颗星星，每 5 颗穿一串手链，最多能穿（ ）串。", answer:3, unit:"串", analysis:"17÷5＝3……2，剩下 2 颗不够一串，去尾法，最多 3 串。"}
  ],
  quiz:[
    {type:"fill", html:"22 个鸡蛋，每盒装 6 个，至少要（ ）个盒子才能装完。", answer:4, unit:"个", analysis:"22÷6＝3……4，剩下 4 个也要一个盒子，3＋1＝4。"},
    {type:"fill", html:"50 张纸，每 8 张订一个本子，最多能订（ ）个本子。", answer:6, unit:"个", analysis:"50÷8＝6……2，剩下 2 张不够订一本，去尾法，6 个。"},
    {type:"judge", html:"在有余数的除法里，余数一定比除数小。", answer:true, analysis:"如果余数大于或等于除数，说明还能再分一份，所以余数一定小于除数。"},
    {type:"choice", html:"□÷5＝3……△，△最大是几？", options:["4","5","6"], answer:0, analysis:"余数要比 5 小，最大是 4。"},
    {type:"fill", html:"19 个同学去划船，每条船坐 4 人，至少要租（ ）条船。", answer:5, unit:"条", analysis:"19÷4＝4……3，剩下 3 人也要一条船，4＋1＝5 条。"}
  ],
  gen:{type:"division", n:2}
}
];
