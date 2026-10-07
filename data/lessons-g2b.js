/* 数据：二年级 g2-07 ~ g2-11 */
var L_G2B = [
{
  id:"g2-07", grade:2, idx:7,
  title:"和差问题初步",
  tag:"典型应用",
  goal:"知道两个数的和与差，会画线段图求出这两个数。",
  points:[
    "知道两个数的“和”与“差”，求这两个数，叫和差问题。",
    "画线段图：先画一样长的两段表示两人同样多，再把大数多出的“差”补在那一段后面。",
    "大数＝（和＋差）÷2，小数＝（和－差）÷2；求出一个后，要用和或差再算一遍检验。"
  ],
  examples:[
    {
      lead:"例1",
      html:"哥哥和弟弟一共有邮票 24 张，哥哥比弟弟多 4 张。两人各有邮票多少张？<svg class='fig' viewBox='0 0 320 140' xmlns='http://www.w3.org/2000/svg'><text x='160' y='22' font-size='13' fill='#26313A' text-anchor='middle'>两人一共 24 张</text><text x='28' y='70' font-size='13' fill='#26313A' text-anchor='middle'>弟</text><rect x='50' y='55' width='130' height='22' rx='3' fill='#2B8A83'/><text x='28' y='110' font-size='13' fill='#26313A' text-anchor='middle'>哥</text><rect x='50' y='95' width='210' height='22' rx='3' fill='#E9A23B'/><line x1='180' y1='45' x2='180' y2='125' stroke='#8A949C' stroke-width='1.5' stroke-dasharray='4 3'/><text x='220' y='90' font-size='12' fill='#D8664E' text-anchor='middle'>多 4 张</text></svg>",
      steps:[
        "把哥哥多出的 4 张先“拿出来”，两人就一样多了，这时一共剩下 24－4＝20 张。",
        "20 张平均分成两份，每份就是弟弟的张数：20÷2＝10 张。",
        "哥哥比弟弟多 4 张，所以哥哥有 10＋4＝14 张。",
        "检验：14＋10＝24，正好等于和；14－10＝4，正好等于差。"
      ],
      answer:"弟弟有 10 张，哥哥有 14 张。",
      variants:[
        {type:"fill", html:"二（1）班和二（2）班一共有 42 人，二（1）班比二（2）班多 2 人。二（2）班有（ ）人。", answer:20, unit:"人", analysis:"把多出的 2 人去掉，42－2＝40，平均分成两份，二（2）班是较小的班：40÷2＝20 人。"},
        {type:"choice", html:"两个数的和是 30，差是 6。较大的数是几？", options:["12","18","24"], answer:1, analysis:"大数＝（和＋差）÷2＝（30＋6）÷2＝18。"}
      ]
    },
    {
      lead:"例2",
      html:"甲、乙两筐苹果共重 50 千克，甲筐比乙筐少 6 千克。两筐苹果各重多少千克？",
      steps:[
        "甲筐比乙筐少 6 千克，也就是乙筐比甲筐多 6 千克，乙筐是大数。",
        "把乙筐多出的 6 千克补到甲筐上，两筐就一样重，这时总重量变成 50＋6＝56 千克。",
        "56 千克平均分成两份，每份就是乙筐的重量：56÷2＝28 千克。",
        "甲筐比乙筐少 6 千克，甲筐重 28－6＝22 千克。检验：28＋22＝50，28－22＝6。"
      ],
      answer:"乙筐重 28 千克，甲筐重 22 千克。",
      variants:[
        {type:"fill", html:"大、小两桶水共重 30 升，大桶比小桶多装 6 升。大桶装（ ）升。", answer:18, unit:"升", analysis:"大桶是大数：（和＋差）÷2＝（30＋6）÷2＝18 升。"},
        {type:"judge", html:"知道两个数的和与差，求较小数，可以用“（和＋差）÷2”来算。", answer:false, analysis:"（和＋差）÷2 求出来的是较大数；较小数应该用（和－差）÷2，所以这句话错。"}
      ]
    },
    {
      lead:"例3",
      html:"两个数的和是 36，差是 12。这两个数分别是多少？",
      steps:[
        "先写公式：大数＝（和＋差）÷2，小数＝（和－差）÷2。",
        "大数＝（36＋12）÷2＝48÷2＝24。",
        "小数＝（36－12）÷2＝24÷2＝12。",
        "检验：24＋12＝36，24－12＝12，正好。"
      ],
      answer:"大数是 24，小数是 12。",
      variants:[
        {type:"fill", html:"两个数的和是 48，差是 8。较小的数是（ ）。", answer:20, analysis:"小数＝（和－差）÷2＝（48－8）÷2＝20。"},
        {type:"choice", html:"红球和黄球共 35 个，红球比黄球多 5 个。红球有几个？", options:["15","20","25"], answer:1, analysis:"红球是大数：（35＋5）÷2＝20 个。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"姐姐和妹妹共有课外书 32 本，姐姐比妹妹多 6 本。妹妹有（ ）本。", answer:13, unit:"本", analysis:"妹妹是小数：（32－6）÷2＝13 本。"},
    {type:"fill", html:"书架上、下两层共放书 80 本，下层比上层多放 10 本。上层放（ ）本。", answer:35, unit:"本", analysis:"上层是小数：（80－10）÷2＝35 本。"},
    {type:"choice", html:"两个数的和是 40，差是 10。较大的数是几？", options:["15","25","30"], answer:1, analysis:"大数＝（40＋10）÷2＝25。"},
    {type:"judge", html:"小明和小华一共有 18 颗弹珠，小明比小华多 2 颗，那么小明有 10 颗。", answer:true, analysis:"小明是大数：（18＋2）÷2＝10 颗，小华 8 颗，10＋8＝18，正确。"},
    {type:"fill", html:"两箱橘子共重 26 千克，第一箱比第二箱轻 4 千克。第二箱重（ ）千克。", answer:15, unit:"千克", analysis:"第二箱较重：（26＋4）÷2＝15 千克。"},
    {type:"choice", html:"花圃里红花和白花共 46 朵，红花比白花多 6 朵。白花有几朵？", options:["20","23","26"], answer:0, analysis:"白花是小数：（46－6）÷2＝20 朵。"},
    {type:"fill", html:"两个数的和是 54，差是 18。较大的数是（ ）。", answer:36, analysis:"大数＝（54＋18）÷2＝36。"}
  ],
  quiz:[
    {type:"fill", html:"哥哥和弟弟共有 30 元，哥哥比弟弟多 6 元。弟弟有（ ）元。", answer:12, unit:"元", analysis:"弟弟是小数：（30－6）÷2＝12 元。"},
    {type:"fill", html:"大、小两个数的和是 44，大数比小数多 8。大数是（ ）。", answer:26, analysis:"大数＝（44＋8）÷2＝26。"},
    {type:"choice", html:"两筐梨共 40 个，甲筐比乙筐多 8 个。乙筐有几个？", options:["16","24","20"], answer:0, analysis:"乙筐是小数：（40－8）÷2＝16 个。"},
    {type:"judge", html:"已知两个数的和与差，用“（和－差）÷2”求出来的是较大数。", answer:false, analysis:"（和－差）÷2 求出来的是较小数，较大数要用（和＋差）÷2，所以错。"},
    {type:"fill", html:"一篮苹果和一篮梨共重 22 千克，苹果比梨重 4 千克。苹果重（ ）千克。", answer:13, unit:"千克", analysis:"苹果较重：（22＋4）÷2＝13 千克。"}
  ],
  gen:null
}
,{
  id:"g2-08", grade:2, idx:8,
  title:"倍数的认识",
  tag:"数与计算",
  goal:"认识“倍”，会用乘法求一个数的几倍是多少。",
  points:[
    "把同样多的几个物体看作“一份”，有这样的几份，就是几倍。",
    "求一个数的几倍是多少，就是求几个这样的数连加，用乘法：一份数 × 倍数。",
    "看图求倍数时，先圈出“一份”有几个，再数有这样的几份，几份就是几倍。"
  ],
  examples:[
    {
      lead:"例1",
      html:"红花有 3 朵，黄花的朵数是红花的 4 倍。黄花有多少朵？<svg class='fig' viewBox='0 0 320 120' xmlns='http://www.w3.org/2000/svg'><text x='20' y='30' font-size='12' fill='#26313A'>红花</text><circle cx='70' cy='26' r='9' fill='#D8664E'/><circle cx='95' cy='26' r='9' fill='#D8664E'/><circle cx='120' cy='26' r='9' fill='#D8664E'/><text x='20' y='80' font-size='12' fill='#26313A'>黄花</text><circle cx='70' cy='76' r='9' fill='#E9A23B'/><circle cx='95' cy='76' r='9' fill='#E9A23B'/><circle cx='120' cy='76' r='9' fill='#E9A23B'/><circle cx='150' cy='76' r='9' fill='#E9A23B'/><circle cx='175' cy='76' r='9' fill='#E9A23B'/><circle cx='200' cy='76' r='9' fill='#E9A23B'/><circle cx='230' cy='76' r='9' fill='#E9A23B'/><circle cx='255' cy='76' r='9' fill='#E9A23B'/><circle cx='280' cy='76' r='9' fill='#E9A23B'/><text x='175' y='108' font-size='12' fill='#51606A' text-anchor='middle'>4 个 3 朵</text></svg>",
      steps:[
        "红花 3 朵是“一份”。黄花是红花的 4 倍，就是有这样的 4 份。",
        "求 4 个 3 是多少，用乘法：3×4＝12。",
        "所以黄花有 12 朵。"
      ],
      answer:"黄花有 12 朵。",
      variants:[
        {type:"fill", html:"一支铅笔 2 元，一个文具盒的价钱是铅笔的 5 倍。一个文具盒（ ）元。", answer:10, unit:"元", analysis:"求 2 的 5 倍：2×5＝10 元。"},
        {type:"choice", html:"3 的 6 倍是多少？", options:["9","18","24"], answer:1, analysis:"求 6 个 3：3×6＝18。"}
      ]
    },
    {
      lead:"例2",
      html:"小明有 2 张贴纸，姐姐的贴纸数是小明的 6 倍。姐姐有多少张贴纸？",
      steps:[
        "小明的 2 张是“一份”。姐姐是 6 倍，就是有这样的 6 份。",
        "求 6 个 2 是多少，列乘法：2×6＝12。",
        "所以姐姐有 12 张贴纸。"
      ],
      answer:"姐姐有 12 张贴纸。",
      variants:[
        {type:"fill", html:"一盒彩笔有 8 支，6 盒一共有（ ）支。", answer:48, unit:"支", analysis:"求 6 个 8：8×6＝48 支。"},
        {type:"judge", html:"求 5 的 4 倍是多少，就是求 4 个 5 相加，可以列成 5×4。", answer:true, analysis:"几倍就是几个相同的数连加，4 个 5 相加写成乘法就是 5×4＝20，正确。"}
      ]
    },
    {
      lead:"例3",
      html:"动物园里有 6 只梅花鹿，猴子的只数是梅花鹿的 4 倍。猴子有多少只？",
      steps:[
        "梅花鹿 6 只是“一份”。猴子是 4 倍，就是 4 个 6 只。",
        "列乘法：6×4＝24。",
        "所以猴子有 24 只。"
      ],
      answer:"猴子有 24 只。",
      variants:[
        {type:"fill", html:"小兔有 4 只，羊的只数是小兔的 5 倍。羊有（ ）只。", answer:20, unit:"只", analysis:"求 5 个 4：4×5＝20 只。"},
        {type:"choice", html:"红花有 7 朵，黄花是红花的 3 倍。黄花有几朵？", options:["10","21","24"], answer:1, analysis:"求 3 个 7：7×3＝21 朵。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"一只手有 5 根手指，3 只手一共有（ ）根手指。", answer:15, analysis:"求 3 个 5：5×3＝15 根。"},
    {type:"choice", html:"2 的 7 倍是多少？", options:["9","14","16"], answer:1, analysis:"求 7 个 2：2×7＝14。"},
    {type:"fill", html:"妈妈买了 3 个苹果，买的梨的个数是苹果的 4 倍。梨有（ ）个。", answer:12, unit:"个", analysis:"求 4 个 3：3×4＝12 个。"},
    {type:"judge", html:"求 6 的 3 倍是多少，可以写成 6＋6＋6，也可以写成 6×3。", answer:true, analysis:"3 个 6 连加与 6×3 都等于 18，意思一样，正确。"}
  ],
  quiz:[
    {type:"fill", html:"一个三角形有 3 个角，4 个三角形一共有（ ）个角。", answer:12, analysis:"求 4 个 3：3×4＝12 个角。"},
    {type:"fill", html:"小明今年 7 岁，爸爸的年龄是小明的 5 倍。爸爸今年（ ）岁。", answer:35, unit:"岁", analysis:"求 5 个 7：7×5＝35 岁。"},
    {type:"choice", html:"5 的 6 倍是多少？", options:["11","30","35"], answer:1, analysis:"求 6 个 5：5×6＝30。"},
    {type:"judge", html:"红花有 4 朵，黄花有 12 朵，黄花的朵数是红花的 3 倍。", answer:true, analysis:"12 里面有 3 个 4，所以黄花是红花的 3 倍，正确。"},
    {type:"fill", html:"摆一个三角形用 3 根小棒，摆 6 个独立的三角形要用（ ）根小棒。", answer:18, analysis:"求 6 个 3：3×6＝18 根。"}
  ],
  gen:{type:"multiply", n:4}
}
,{
  id:"g2-09", grade:2, idx:9,
  title:"年龄问题",
  tag:"典型应用",
  goal:"抓住“年龄差不变”，会解决几年后、几年前的年龄问题。",
  points:[
    "两个人的年龄差永远不变：你长一岁，我也长一岁，相差的岁数不变。",
    "每过一年，两个人的年龄和一共增加 2 岁（各长 1 岁）。",
    "画一条年龄轴（时间线），标上“今年、几年后、几年前”，关系就清楚了。"
  ],
  examples:[
    {
      lead:"例1",
      html:"爸爸今年 35 岁，儿子今年 7 岁。10 年后，爸爸比儿子大多少岁？<svg class='fig' viewBox='0 0 320 100' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='55' x2='290' y2='55' stroke='#51606A' stroke-width='2'/><polygon points='295,55 285,50 285,60' fill='#51606A'/><circle cx='80' cy='55' r='4' fill='#2B8A83'/><text x='80' y='40' font-size='12' fill='#26313A' text-anchor='middle'>今年</text><text x='80' y='78' font-size='11' fill='#51606A' text-anchor='middle'>爸35 儿7</text><circle cx='230' cy='55' r='4' fill='#E9A23B'/><text x='230' y='40' font-size='12' fill='#26313A' text-anchor='middle'>10年后</text><text x='230' y='78' font-size='11' fill='#51606A' text-anchor='middle'>爸45 儿17</text></svg>",
      steps:[
        "先算今年爸爸比儿子大几岁：35－7＝28 岁。",
        "10 年后爸爸长 10 岁，儿子也长 10 岁，两人相差的岁数不变。",
        "所以 10 年后爸爸还是比儿子大 28 岁。",
        "检验：10 年后爸爸 45 岁、儿子 17 岁，45－17＝28 岁。"
      ],
      answer:"10 年后爸爸比儿子大 28 岁。",
      variants:[
        {type:"fill", html:"今年姐姐 10 岁，妹妹 6 岁。5 年后姐姐比妹妹大（ ）岁。", answer:4, unit:"岁", analysis:"年龄差不变：10－6＝4 岁，5 年后还是大 4 岁。"},
        {type:"judge", html:"小明比小红大 3 岁，再过 5 年，小明就比小红大 8 岁。", answer:false, analysis:"两人都长 5 岁，年龄差不变，还是大 3 岁，所以错。"}
      ]
    },
    {
      lead:"例2",
      html:"小红今年 8 岁，妈妈今年 32 岁。当妈妈 40 岁时，小红多少岁？",
      steps:[
        "先算妈妈从 32 岁到 40 岁过了几年：40－32＝8 年。",
        "过了 8 年，小红也长 8 岁：8＋8＝16 岁。",
        "也可以用年龄差检验：妈妈比小红大 32－8＝24 岁，40－24＝16 岁。"
      ],
      answer:"小红 16 岁。",
      variants:[
        {type:"fill", html:"爸爸今年 30 岁，儿子今年 5 岁。爸爸 40 岁时，儿子（ ）岁。", answer:15, unit:"岁", analysis:"爸爸从 30 到 40 过了 10 年，儿子也长 10 岁：5＋10＝15 岁。"},
        {type:"choice", html:"妈妈今年 28 岁，女儿今年 4 岁。当女儿 10 岁时，妈妈多少岁？", options:["34","38","42"], answer:0, analysis:"妈妈比女儿大 28－4＝24 岁，女儿 10 岁时妈妈 10＋24＝34 岁。"}
      ]
    },
    {
      lead:"例3",
      html:"哥哥今年 12 岁，弟弟今年 6 岁。当两人年龄和是 30 岁时，是几年以后？",
      steps:[
        "先算今年两人的年龄和：12＋6＝18 岁。",
        "目标和是 30 岁，一共还要增加 30－18＝12 岁。",
        "每过一年，两人各长 1 岁，年龄和增加 2 岁。",
        "12 里面有几个 2，就是几年后：12÷2＝6 年。"
      ],
      answer:"6 年以后。",
      variants:[
        {type:"fill", html:"哥哥今年 9 岁，弟弟今年 5 岁。当两人年龄和是 20 岁时，是（ ）年以后。", answer:3, unit:"年", analysis:"今年和 9＋5＝14，还要增 20－14＝6，每年增 2，6÷2＝3 年。"},
        {type:"choice", html:"父子俩今年年龄和是 40 岁，几年后两人年龄和是 50 岁？", options:["5 年","10 年","20 年"], answer:0, analysis:"和要增加 50－40＝10 岁，每年增 2 岁，10÷2＝5 年。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"妈妈今年 30 岁，小芳今年 6 岁。10 年后妈妈比小芳大（ ）岁。", answer:24, unit:"岁", analysis:"年龄差不变：30－6＝24 岁。"},
    {type:"fill", html:"爸爸今年 32 岁，儿子今年 4 岁。爸爸 40 岁时，儿子（ ）岁。", answer:12, unit:"岁", analysis:"爸爸过了 40－32＝8 年，儿子也长 8 岁：4＋8＝12 岁。"},
    {type:"choice", html:"姐姐今年 11 岁，弟弟今年 7 岁。当两人年龄和是 26 岁时，是几年后？", options:["3 年","4 年","5 年"], answer:1, analysis:"今年和 11＋7＝18，还要增 26－18＝8，每年增 2，8÷2＝4 年。"},
    {type:"judge", html:"哥哥比弟弟大 4 岁，10 年后哥哥还是比弟弟大 4 岁。", answer:true, analysis:"两人都长 10 岁，年龄差不变，还是大 4 岁，正确。"},
    {type:"fill", html:"爷爷今年 60 岁，孙子今年 8 岁。爷爷 70 岁时，孙子（ ）岁。", answer:18, unit:"岁", analysis:"爷爷过了 70－60＝10 年，孙子也长 10 岁：8＋10＝18 岁。"},
    {type:"choice", html:"小红今年 5 岁，妈妈今年 33 岁。当小红 10 岁时，妈妈多少岁？", options:["38","43","48"], answer:0, analysis:"妈妈比小红大 33－5＝28 岁，小红 10 岁时妈妈 10＋28＝38 岁。"},
    {type:"fill", html:"今年兄弟俩年龄和是 16 岁，（ ）年后两人年龄和是 24 岁。", answer:4, unit:"年", analysis:"和要增加 24－16＝8 岁，每年增 2，8÷2＝4 年。"}
  ],
  quiz:[
    {type:"fill", html:"爸爸今年 34 岁，儿子今年 9 岁。20 年后爸爸比儿子大（ ）岁。", answer:25, unit:"岁", analysis:"年龄差不变：34－9＝25 岁。"},
    {type:"fill", html:"妈妈今年 29 岁，女儿今年 3 岁。妈妈 35 岁时，女儿（ ）岁。", answer:9, unit:"岁", analysis:"妈妈过了 35－29＝6 年，女儿也长 6 岁：3＋6＝9 岁。"},
    {type:"choice", html:"姐弟俩今年年龄和 18 岁，几年后年龄和是 24 岁？", options:["2 年","3 年","6 年"], answer:1, analysis:"和要增加 24－18＝6 岁，每年增 2，6÷2＝3 年。"},
    {type:"judge", html:"每过一年，爸爸和儿子两人的年龄和增加 1 岁。", answer:false, analysis:"两人各长 1 岁，年龄和一共增加 2 岁，不是 1 岁，所以错。"},
    {type:"fill", html:"哥哥今年 10 岁，弟弟今年 4 岁。当哥哥 15 岁时，弟弟（ ）岁。", answer:9, unit:"岁", analysis:"哥哥从 10 到 15 过了 5 年，弟弟也长 5 岁：4＋5＝9 岁。"}
  ],
  gen:null
}
,{
  id:"g2-10", grade:2, idx:10,
  title:"等量代换",
  tag:"规律推理",
  goal:"看懂天平，会把一种物体用和它一样重的物体换掉来求答案。",
  points:[
    "天平两边平衡，说明两边东西一样重。",
    "把一种物体用和它一样重的另一种物体“换”掉，就是等量代换。",
    "两个等式里有相同的部分，可以把相同部分消去，先求出不同的那一份。"
  ],
  examples:[
    {
      lead:"例1",
      html:"已知：1 个西瓜 ＝ 3 个菠萝，1 个菠萝 ＝ 2 个苹果。1 个西瓜等于几个苹果？<svg class='fig' viewBox='0 0 320 130' xmlns='http://www.w3.org/2000/svg'><line x1='160' y1='20' x2='160' y2='100' stroke='#51606A' stroke-width='2'/><polygon points='160,110 140,95 180,95' fill='#51606A'/><line x1='40' y1='30' x2='280' y2='30' stroke='#2B8A83' stroke-width='3'/><circle cx='40' cy='45' r='14' fill='#2B8A83'/><text x='40' y='49' font-size='11' fill='#fff' text-anchor='middle'>瓜</text><rect x='230' y='38' width='14' height='14' fill='#E9A23B'/><rect x='248' y='38' width='14' height='14' fill='#E9A23B'/><rect x='266' y='38' width='14' height='14' fill='#E9A23B'/><text x='160' y='125' font-size='12' fill='#26313A' text-anchor='middle'>1 瓜 ＝ 3 菠，1 菠 ＝ 2 苹</text></svg>",
      steps:[
        "1 个西瓜等于 3 个菠萝。",
        "把每个菠萝都换成 2 个苹果：3 个菠萝就换成 3 个 2 个苹果。",
        "3×2＝6，所以 1 个西瓜等于 6 个苹果。"
      ],
      answer:"1 个西瓜等于 6 个苹果。",
      variants:[
        {type:"fill", html:"1 只羊 ＝ 2 只猫，1 只猫 ＝ 3 只兔。1 只羊 ＝（ ）只兔。", answer:6, unit:"只", analysis:"把 2 只猫各换成 3 只兔：2×3＝6 只兔。"},
        {type:"choice", html:"1 大盒饼干 ＝ 4 小盒，1 小盒装 5 块。1 大盒装几块？", options:["9","20","25"], answer:1, analysis:"4 个小盒，每盒 5 块：4×5＝20 块。"}
      ]
    },
    {
      lead:"例2",
      html:"已知：△＋○＝15，△＝○＋○。△ 和 ○ 各是几？",
      steps:[
        "因为 △ 等于两个 ○，就把第一个式子中的 △ 换成 ○＋○。",
        "原式变成：○＋○＋○＝15，也就是 3 个 ○ 等于 15。",
        "一个 ○＝15÷3＝5。",
        "△＝○＋○＝5＋5＝10。检验：10＋5＝15。"
      ],
      answer:"△＝10，○＝5。",
      variants:[
        {type:"fill", html:"已知：□＋△＝18，□＝△＋△。△＝（ ）。", answer:6, analysis:"把 □ 换成两个 △：△＋△＋△＝18，3 个 △＝18，△＝6。"},
        {type:"judge", html:"如果 1 个汉堡 ＝ 2 杯牛奶，那么 2 个汉堡 ＝ 4 杯牛奶。", answer:true, analysis:"两边同时扩大：1 汉堡换 2 牛奶，2 汉堡就换 2 个 2 杯，即 4 杯，正确。"}
      ]
    },
    {
      lead:"例3",
      html:"天平左边放 2 个桃和 1 个柠檬，共重 12；又知道 1 个柠檬等于 2 个桃。1 个桃重多少？",
      steps:[
        "因为 1 个柠檬等于 2 个桃，把天平上的柠檬换成 2 个桃。",
        "原来的“2 桃＋1 柠檬”就变成“2 桃＋2 桃”，也就是 4 个桃。",
        "4 个桃重 12，所以 1 个桃重 12÷4＝3。"
      ],
      answer:"1 个桃重 3。",
      variants:[
        {type:"fill", html:"已知：☆＋☆＋○＝20，○＝6。☆＝（ ）。", answer:7, analysis:"○＝6，两个 ☆ 合起来是 20－6＝14，一个 ☆＝14÷2＝7。"},
        {type:"choice", html:"天平上 3 个橘子和 1 个橙子共重 12，1 个橙子等于 3 个橘子。1 个橘子重多少？", options:["1","2","3"], answer:1, analysis:"把橙子换成 3 个橘子，一共 3＋3＝6 个橘子重 12，一个橘子＝12÷6＝2。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"1 个皮球 ＝ 3 个羽毛球，1 个羽毛球 ＝ 2 个乒乓球。1 个皮球 ＝（ ）个乒乓球。", answer:6, unit:"个", analysis:"3 个羽毛球各换 2 个乒乓球：3×2＝6 个。"},
    {type:"fill", html:"已知：□＋△＝18，□＝△＋△。△＝（ ）。", answer:6, analysis:"把 □ 换成两个 △：3 个 △＝18，△＝6。"},
    {type:"choice", html:"1 瓶饮料 ＝ 3 杯水，6 瓶饮料等于几杯水？", options:["9","18","24"], answer:1, analysis:"6 个 3 杯：6×3＝18 杯。"},
    {type:"judge", html:"天平平衡时，把左边一个砝码换成和它一样重的另一个物体，天平仍然平衡。", answer:true, analysis:"换上去的和原来的一样重，两边重量没变，天平仍然平衡，正确。"},
    {type:"fill", html:"已知：☆＋☆＋○＝20，○＝6。☆＝（ ）。", answer:7, analysis:"两个 ☆＝20－6＝14，一个 ☆＝7。"},
    {type:"choice", html:"1 个西瓜等于 4 个菠萝，1 个菠萝等于 2 个苹果。1 个西瓜等于几个苹果？", options:["6","8","16"], answer:1, analysis:"4 个菠萝各换 2 个苹果：4×2＝8 个。"},
    {type:"fill", html:"1 只狗 ＝ 2 只猫，1 只猫 ＝ 4 只鸟。1 只狗 ＝（ ）只鸟。", answer:8, unit:"只", analysis:"2 只猫各换 4 只鸟：2×4＝8 只。"}
  ],
  quiz:[
    {type:"fill", html:"1 个文具盒 ＝ 2 支钢笔，1 支钢笔 ＝ 4 支铅笔。1 个文具盒 ＝（ ）支铅笔。", answer:8, unit:"支", analysis:"2 支钢笔各换 4 支铅笔：2×4＝8 支。"},
    {type:"fill", html:"已知：△＋○＝12，△＝○＋○。○＝（ ）。", answer:4, analysis:"把 △ 换成两个 ○：3 个 ○＝12，○＝4。"},
    {type:"choice", html:"天平上 3 个橘子和 1 个橙子共重 12，1 个橙子等于 3 个橘子。1 个橘子重多少？", options:["1","2","3"], answer:1, analysis:"橙子换成 3 个橘子，共 6 个橘子重 12，一个橘子＝2。"},
    {type:"judge", html:"如果 ○＝△＋△，△＝☆，那么 ○＝☆＋☆。", answer:true, analysis:"△ 就是 ☆，两个 △ 就是两个 ☆，所以 ○＝☆＋☆，正确。"},
    {type:"fill", html:"已知：□＋□＋△＝16，△＝6。□＝（ ）。", answer:5, analysis:"两个 □＝16－6＝10，一个 □＝5。"}
  ],
  gen:null
}
,{
  id:"g2-11", grade:2, idx:11,
  title:"逻辑推理",
  tag:"规律推理",
  goal:"会用列表、排除、找矛盾的方法进行简单推理。",
  points:[
    "把人和事物列成表格，用“√”表示对上了，用“×”表示不对。",
    "每行、每列里只能有一个“√”；一个地方打了 √，这一行和这一列其余都打 ×。",
    "两句话互相矛盾时，它们一定一真一假，从这里下手最快。"
  ],
  examples:[
    {
      lead:"例1",
      html:"小红、小青、小兰分别穿红、黄、蓝三件不同颜色的裙子。已知：小青穿的是黄裙子；小红穿的不是红裙子。三人各穿什么颜色？<svg class='fig' viewBox='0 0 300 130' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='15' width='70' height='28' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='110' y='15' width='70' height='28' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='180' y='15' width='70' height='28' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='40' y='43' width='70' height='28' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='110' y='43' width='70' height='28' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='180' y='43' width='70' height='28' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='40' y='71' width='70' height='28' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='110' y='71' width='70' height='28' fill='#FCFDF9' stroke='#DFE2D6'/><rect x='180' y='71' width='70' height='28' fill='#FCFDF9' stroke='#DFE2D6'/><text x='75' y='34' font-size='11' fill='#51606A' text-anchor='middle'>红</text><text x='145' y='34' font-size='11' fill='#51606A' text-anchor='middle'>黄</text><text x='215' y='34' font-size='11' fill='#51606A' text-anchor='middle'>蓝</text><text x='25' y='61' font-size='11' fill='#26313A' text-anchor='middle'>红</text><text x='25' y='89' font-size='11' fill='#26313A' text-anchor='middle'>青</text><text x='25' y='117' font-size='11' fill='#26313A' text-anchor='middle'>兰</text><text x='145' y='90' font-size='13' fill='#53A06B' text-anchor='middle'>√</text><text x='215' y='62' font-size='13' fill='#53A06B' text-anchor='middle'>√</text><text x='75' y='118' font-size='13' fill='#53A06B' text-anchor='middle'>√</text></svg>",
      steps:[
        "小青穿黄裙子，在小青这一行、黄这一列打 √，这一行和这一列其余都打 ×。",
        "小红穿的不是红裙子，又不能是黄（黄已是小青），所以小红穿蓝裙子。",
        "剩下的红裙子就只能是小兰穿了。",
        "检验：三人裙子颜色红、黄、蓝各一件，没有重复。"
      ],
      answer:"小红穿蓝裙子，小青穿黄裙子，小兰穿红裙子。",
      variants:[
        {type:"fill", html:"小明、小王、小李分别是班长、学习委员、体育委员。小王是学习委员，小明不是班长。那么班长是（ ）。", answer:"小李", analysis:"小王＝学习委员；小明不是班长，那小明只能是体育委员；剩下班长就是小李。"},
        {type:"choice", html:"三个小朋友分别拿红、黄、蓝气球。小丽拿黄气球，小芳拿的不是红气球。小明拿的是什么气球？", options:["红","黄","蓝"], answer:0, analysis:"小丽＝黄；小芳不是红，那小芳＝蓝；剩下红气球就是小明的。"}
      ]
    },
    {
      lead:"例2",
      html:"有红、黄、蓝三个球。已知：红球比黄球大，蓝球比红球大。请把三个球从大到小排一排。",
      steps:[
        "由“红球比黄球大”知道：红 ＞ 黄。",
        "由“蓝球比红球大”知道：蓝 ＞ 红。",
        "把两句连起来：蓝 ＞ 红 ＞ 黄。"
      ],
      answer:"从大到小：蓝球、红球、黄球。",
      variants:[
        {type:"fill", html:"三个数比大小：A 比 B 大，C 比 A 大。最大的是（ ）。", answer:"C", analysis:"C＞A＞B，所以最大的是 C。"},
        {type:"judge", html:"小红比小明重，小明比小丽重，那么小红比小丽重。", answer:true, analysis:"重的关系可以传下去：小红＞小明＞小丽，所以小红最重，正确。"}
      ]
    },
    {
      lead:"例3",
      html:"三个盒子里只有一个装着糖。A 盒写“糖在这里”，B 盒写“糖不在 A 盒”，C 盒写“糖不在这里”。已知三句话里只有一句是真的。糖在哪个盒子？",
      steps:[
        "A 说“糖在 A”，B 说“糖不在 A”，这两句话正好相反，一定一真一假。",
        "因为只有一句真话，这句真话就在 A、B 之中，所以 C 说的一定是假话。",
        "C 说“糖不在这里”是假的，说明糖就在 C 盒里。",
        "检验：糖在 C 时，A 假、B 真、C 假，正好一句真话。"
      ],
      answer:"糖在 C 盒里。",
      variants:[
        {type:"fill", html:"三个抽屉里只有一个放着钥匙。第一个写“钥匙在这”，第二个写“钥匙不在这”，第三个写“钥匙不在第一个”。已知只有一句真话，钥匙在第（ ）个抽屉。", answer:2, analysis:"第1句和第3句相反、一真一假，所以第2句“钥匙不在这”必假，钥匙就在第2个抽屉。"},
        {type:"choice", html:"甲、乙、丙中只有一人做了好事。甲说“是乙做的”，乙说“不是我做的”，丙说“也不是我做的”。只有一人说真话，是谁做的？", options:["甲","乙","丙"], answer:2, analysis:"甲、乙话相反一真一假，所以丙必假；丙说“不是我”是假的，就是丙做的。"}
      ]
    }
  ],
  practice:[
    {type:"fill", html:"小军、小丽、小云分别爱打乒乓球、跳绳、踢毽子。小丽爱踢毽子，小军不爱打乒乓球。那么爱打乒乓球的是（ ）。", answer:"小云", analysis:"小丽＝踢毽子；小军不爱乒乓球，那小军＝跳绳；剩下乒乓球就是小云。"},
    {type:"choice", html:"红盒比黄盒大，蓝盒比黄盒小。最大的盒子是哪个？", options:["红盒","黄盒","蓝盒"], answer:0, analysis:"红＞黄，蓝＜黄，即红＞黄＞蓝，最大是红盒。"},
    {type:"judge", html:"小明说“我比小红高”，小红说“我比小丽高”，那么小丽最矮。", answer:true, analysis:"小明＞小红＞小丽，小丽在最后，最矮，正确。"},
    {type:"fill", html:"桌上有苹果、香蕉、橘子三种水果。小明吃香蕉，小华不吃苹果。那么小华吃的是（ ）。", answer:"橘子", analysis:"小明＝香蕉；小华不吃苹果，那小华＝橘子。"},
    {type:"choice", html:"三个信封分别贴红、黄、蓝贴纸。第二个贴黄色，第一个不是红色。第三个是什么颜色？", options:["红","黄","蓝"], answer:0, analysis:"第二个＝黄；第一个不是红，那第一个＝蓝；剩下红色就是第三个。"},
    {type:"judge", html:"甲说“乙在说谎”，乙说“甲在说谎”。两人说的都是真话。", answer:false, analysis:"两人话相反，一定一真一假，不可能都是真话，所以错。"},
    {type:"fill", html:"三个口袋只有一个装着硬币。一号写“硬币在这”，二号写“硬币不在二号”，三号写“硬币不在一号”。只有一句真话，硬币在（ ）号口袋。", answer:2, analysis:"一号和三号的话相反、一真一假，所以二号的话“硬币不在二号”必假，硬币就在二号。"}
  ],
  quiz:[
    {type:"fill", html:"小刚、小力、小强分别穿白、黑、灰上衣。小力穿黑色，小刚不穿白色。小强穿（ ）色。", answer:"白", analysis:"小力＝黑；小刚不穿白，那小刚＝灰；剩下白色就是小强。"},
    {type:"choice", html:"三本书比厚薄：故事书比童话书厚，科技书比故事书厚。最厚的是哪本？", options:["故事书","童话书","科技书"], answer:2, analysis:"科技书＞故事书＞童话书，最厚是科技书。"},
    {type:"judge", html:"小丽比小芳高，小芳比小娟高，那么小娟最矮。", answer:true, analysis:"小丽＞小芳＞小娟，小娟最矮，正确。"},
    {type:"fill", html:"三个盒子只有一个装着玻璃球。A 写“球在这”，B 写“球不在 A”，C 写“球不在 C”。只有一句真话，球在（ ）盒。", answer:"C", analysis:"A、B 话相反一真一假，所以 C 必假；C 说“不在 C”是假的，球就在 C 盒。"},
    {type:"choice", html:"小王、小李、小张分别是医生、教师、司机。小李是教师，小王不是医生。小张是什么职业？", options:["医生","教师","司机"], answer:0, analysis:"小李＝教师；小王不是医生，那小王＝司机；剩下医生就是小张。"}
  ],
  gen:null
}
];
