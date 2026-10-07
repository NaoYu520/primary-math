/* 数据：四年级 g4-11~20（全局 L_G4B） */
var L_G4B = [
{
  id: "g4-11", grade: 4, idx: 11, title: "加法原理", tag: "规律推理",
  goal: "理解分类计数的加法原理，会把完成一件事分成几类，把各类方法数相加。",
  points: [
    "加法原理：做一件事可以分成几类办法，各类办法数相加就是总方法数。",
    "分类要不重不漏：各类之间互相独立，完成任一类即做完这件事。",
    "先分类，再分别数出每类的方法数，最后相加。",
    "与乘法原理区分：一步完成、二选一用加法；分多步、步步完成用乘法。"
  ],
  examples: [
    {
      lead: "例1 分类取书",
      html: "<img class='scene' src='assets/scenes/blackboard.png' alt='黑板上的分类计数'>书架上层有6本故事书，下层有5本科普书。任取一本书，有多少种不同取法？",
      steps: [
        "这是分类问题：取故事书是一类，取科普书是另一类。",
        "两类互相独立，任取一本即完成任务。",
        "把两类方法数相加：6＋5＝11。"
      ],
      answer: "11种。",
      anim: { type: "count", kind: "line", grid: [6, 5] },
      variants: [
        { type: "fill", html: "文具店有铅笔8支、钢笔4支。任取一支笔，有多少种取法？", answer: "12",
          analysis: "两类相加：8＋4＝12。" },
        { type: "fill", html: "一年级有3个班、二年级有4个班。选一个班做值日，有多少种选法？", answer: "7",
          analysis: "两类相加：3＋4＝7。" }
      ]
    },
    {
      lead: "例2 分类乘车",
      html: "<img class='scene' src='assets/scenes/train.png' alt='火车站'>从甲地到乙地，每天有2班火车、4班汽车。一天中乘这些交通工具从甲到乙，有多少种不同走法？",
      steps: [
        "乘火车是一类，有2种选择；乘汽车是一类，有4种选择。",
        "任选一班即到达乙地，两类互相独立。",
        "相加：2＋4＝6。"
      ],
      answer: "6种。",
      variants: [
        { type: "fill", html: "从A城到B城有3班飞机、5班轮船。一天中共有多少种走法？", answer: "8",
          analysis: "3＋5＝8。" },
        { type: "fill", html: "食堂有荤菜5种、素菜4种。买一种菜，有多少种买法？", answer: "9",
          analysis: "5＋4＝9。" }
      ]
    },
    {
      lead: "例3 按颜色分类",
      html: "<img class='scene' src='assets/scenes/mall-clothes.png' alt='商场里的上衣'>商店有红色上衣3件、蓝色上衣2件、黄色上衣4件。买一件上衣，有多少种不同买法？",
      steps: [
        "按颜色分三类：红色3件、蓝色2件、黄色4件。",
        "三类互相独立，任买一件即完成。",
        "相加：3＋2＋4＝9。"
      ],
      answer: "9种。",
      variants: [
        { type: "fill", html: "篮子里有红苹果5个、绿苹果3个、黄苹果2个。拿一个苹果，有多少种拿法？", answer: "10",
          analysis: "5＋3＋2＝10。" },
        { type: "fill", html: "图书角有漫画6本、童话4本、科普3本。借一本，有多少种借法？", answer: "13",
          analysis: "6＋4＋3＝13。" }
      ]
    }
  ],
  practice: [
    { type: "fill", html: "书包里有数学书5本、语文书3本。任取一本书，有多少种取法？", answer: "8",
      analysis: "5＋3＝8。" },
    { type: "fill", html: "停车场有小轿车7辆、摩托车3辆。开走一辆，有多少种走法？", answer: "10",
      analysis: "7＋3＝10。" },
    { type: "fill", html: "一班有男生12人、女生10人。选一人当代表，有多少种选法？", answer: "22",
      analysis: "12＋10＝22。" },
    { type: "fill", html: "菜单有炒菜6种、汤3种。点一种菜，有多少种点法？", answer: "9",
      analysis: "6＋3＝9。" },
    { type: "fill", html: "口袋里有5个红球、4个白球。摸一个球，有多少种可能？", answer: "9",
      analysis: "5＋4＝9。" },
    { type: "fill", html: "学校有篮球队4队、足球队3队。选一队参加比赛，有多少种选法？", answer: "7",
      analysis: "4＋3＝7。" },
    { type: "fill", html: "书架上有小说8本、传记2本。借一本，有多少种借法？", answer: "10",
      analysis: "8＋2＝10。" }
  ],
  quiz: [
    { type: "fill", html: "桌上有苹果3个、梨4个。拿一个水果，有多少种拿法？", answer: "7",
      analysis: "3＋4＝7。" },
    { type: "choice", html: "从家到公园有2条大路、3条小路，共有多少种走法？", options: ["5种", "6种", "1种", "2种"], answer: 0,
      analysis: "2＋3＝5。" },
    { type: "judge", html: "加法原理中，分类之间可以有重叠，对吗？", answer: false,
      analysis: "分类要不重不漏，各类之间不能重叠。" },
    { type: "fill", html: "盒子里有铅笔6支、钢笔2支、毛笔1支。取一支笔，有多少种取法？", answer: "9",
      analysis: "6＋2＋1＝9。" },
    { type: "fill", html: "一年级4个班、二年级3个班。选一个班参加活动，有多少种选法？", answer: "7",
      analysis: "4＋3＝7。" }
  ],
  peiyou: [
    { type: "fill", html: "思维挑战：1到20的自然数中，能被2整除或能被5整除的数共有多少个？", answer: "12",
      analysis: "能被2整除的有10个，能被5整除的有4个(5,10,15,20)，其中10和20重复算了两次，要减去：10＋4－2＝12。" },
    { type: "fill", html: "思维挑战：用1,2,3三个数字可以组成多少个没有重复数字的一位数和两位数？", answer: "9",
      analysis: "一位数有3个(1,2,3)；两位数有6个(12,13,21,23,31,32)。共3＋6＝9个。" },
    { type: "fill", html: "思维挑战：一次测验共3题，做对第1题得3分、第2题得4分、第3题得5分。至少做对一题，有多少种不同得分？", answer: "7",
      analysis: "做对一题：3,4,5共3种；做对两题：3＋4＝7, 3＋5＝8, 4＋5＝9共3种；做对三题：3＋4＋5＝12共1种。合计3＋3＋1＝7种。" }
  ]
}
,
{
  id: "g4-12", grade: 4, idx: 12, title: "乘法原理", tag: "规律推理",
  goal: "理解分步计数的乘法原理，会把完成一件事分成几步，把每步方法数相乘。",
  points: [
    "乘法原理：做一件事需要分成几步完成，每步方法数相乘就是总方法数。",
    "分步要步步完成：做完第一步才能做第二步，缺一步都不行。",
    "与加法原理区分：分类相加用加法原理，分步相乘用乘法原理。",
    "搭配问题：第一步选一样，第二步选另一样，两步相乘。"
  ],
  examples: [
    {
      lead: "例1 衣服搭配",
      html: "<img class='scene' src='assets/scenes/mall-clothes.png' alt='商场里的衣服'>小红有3件上衣、2条裤子。一件上衣配一条裤子，有多少种不同穿法？",
      steps: [
        "第一步选上衣：有3种选择。",
        "第二步选裤子：有2种选择。",
        "两步相乘：3×2＝6。"
      ],
      answer: "6种。",
      anim: { type: "link", up: ["上衣A", "上衣B", "上衣C"], down: ["裤子①", "裤子②"] },
      variants: [
        { type: "fill", html: "小明有4件上衣、3条裤子。一件上衣配一条裤子，有多少种穿法？", answer: "12",
          analysis: "4×3＝12。" },
        { type: "fill", html: "食堂有3种主食、4种菜。各选一种，有多少种搭配？", answer: "12",
          analysis: "3×4＝12。" }
      ]
    },
    {
      lead: "例2 组两位数",
      html: "<img class='scene' src='assets/scenes/bookstore.png' alt='书店'>用1,2,3三个数字，可以组成多少个没有重复数字的两位数？",
      steps: [
        "第一步选十位：有3种选择(1,2,3)。",
        "第二步选个位：十位用掉一个数字后，还剩2个数字，有2种选择。",
        "两步相乘：3×2＝6。"
      ],
      answer: "6个(12,13,21,23,31,32)。",
      variants: [
        { type: "fill", html: "用4,5,6三个数字组成没有重复数字的两位数，有多少个？", answer: "6",
          analysis: "3×2＝6。" },
        { type: "fill", html: "用1,2,3,4四个数字组成没有重复数字的两位数，有多少个？", answer: "12",
          analysis: "4×3＝12。" }
      ]
    },
    {
      lead: "例3 路线问题",
      html: "从甲村到乙村有2条路，从乙村到丙村有3条路。从甲村经过乙村到丙村，有多少种不同走法？",
      steps: [
        "第一步甲村→乙村：有2条路可选。",
        "第二步乙村→丙村：有3条路可选。",
        "两步相乘：2×3＝6。"
      ],
      answer: "6种。",
      variants: [
        { type: "fill", html: "从A到B有3条路，从B到C有4条路。A经B到C有多少种走法？", answer: "12",
          analysis: "3×4＝12。" },
        { type: "fill", html: "书架上有4本故事书、3本科技书。各取一本，有多少种取法？", answer: "12",
          analysis: "4×3＝12。" }
      ]
    }
  ],
  practice: [
    { type: "fill", html: "5件上衣、3条裤子，一件上衣配一条裤子，有多少种穿法？", answer: "15",
      analysis: "5×3＝15。" },
    { type: "fill", html: "用1,2,3,4组成没有重复数字的两位数，有多少个？", answer: "12",
      analysis: "4×3＝12。" },
    { type: "fill", html: "食堂有2种汤、3种主食。各选一种，有多少种搭配？", answer: "6",
      analysis: "2×3＝6。" },
    { type: "fill", html: "从家到学校有2条路，从学校到公园有3条路。家经学校到公园有多少种走法？", answer: "6",
      analysis: "2×3＝6。" },
    { type: "fill", html: "有4本故事书、5本漫画书。各取一本，有多少种取法？", answer: "20",
      analysis: "4×5＝20。" },
    { type: "fill", html: "用5,6,7,8组成没有重复数字的两位数，有多少个？", answer: "12",
      analysis: "4×3＝12。" },
    { type: "fill", html: "有3个男生、2个女生。选一男一女做主持人，有多少种选法？", answer: "6",
      analysis: "3×2＝6。" }
  ],
  quiz: [
    { type: "fill", html: "3件上衣、4条裤子，一件上衣配一条裤子，有多少种穿法？", answer: "12",
      analysis: "3×4＝12。" },
    { type: "choice", html: "用1,2,3组成没有重复数字的两位数，共有多少个？", options: ["3个", "6个", "9个", "12个"], answer: 1,
      analysis: "3×2＝6个。" },
    { type: "judge", html: "乘法原理是分类相加，对吗？", answer: false,
      analysis: "乘法原理是分步相乘；分类相加是加法原理。" },
    { type: "fill", html: "从A到B有3条路，从B到C有2条路。A经B到C有多少种走法？", answer: "6",
      analysis: "3×2＝6。" },
    { type: "fill", html: "有2种饮料、4种点心。各选一种，有多少种搭配？", answer: "8",
      analysis: "2×4＝8。" }
  ],
  peiyou: [
    { type: "fill", html: "思维挑战：用0,1,2三个数字可以组成多少个没有重复数字的三位数？", answer: "4",
      analysis: "百位不能为0：百位有2种(1,2)，十位有2种(剩下两个数字含0)，个位有1种。2×2×1＝4个(102,120,201,210)。" },
    { type: "fill", html: "思维挑战：用1,2,3,4四个数字可以组成多少个没有重复数字的三位数？", answer: "24",
      analysis: "百位4种、十位3种、个位2种：4×3×2＝24。" },
    { type: "fill", html: "思维挑战：4个人排成一排照相，有多少种不同排法？", answer: "24",
      analysis: "第1位4种、第2位3种、第3位2种、第4位1种：4×3×2×1＝24。" }
  ]
}
,
{
  id: "g4-13", grade: 4, idx: 13, title: "排列初步", tag: "规律推理",
  goal: "理解排列与顺序有关，会用分步相乘计算从n个元素中取m个的排列数。",
  points: [
    "排列：从n个不同元素中取出m个，按顺序排成一列，与顺序有关。",
    "排列数：第一步有n种，第二步有n－1种……第m步有n－m＋1种，全部相乘。",
    "排列与顺序有关：甲乙和乙甲是两种不同排列。",
    "全排列：n个元素全部排列，n×(n－1)×…×1。"
  ],
  examples: [
    {
      lead: "例1 排队照相",
      html: "<img class='scene' src='assets/scenes/classroom.png' alt='教室里排队'>从4个同学中选2个排成一排照相，有多少种排法？",
      steps: [
        "第一步选左边位置：4个同学都可以站，4种选择。",
        "第二步选右边位置：左边站了1人，还剩3人，3种选择。",
        "两步相乘：4×3＝12。"
      ],
      answer: "12种。",
      anim: { type: "link", up: ["同学A", "同学B", "同学C", "同学D"], down: ["左边位置", "右边位置"] },
      variants: [
        { type: "fill", html: "从5个同学中选2人排成一排，有多少种排法？", answer: "20",
          analysis: "5×4＝20。" },
        { type: "fill", html: "从3个字母A,B,C中选2个排成一排，有多少种？", answer: "6",
          analysis: "3×2＝6。" }
      ]
    },
    {
      lead: "例2 组三位数",
      html: "用1,2,3,4四个数字组成没有重复数字的三位数，有多少个？",
      steps: [
        "百位：4个数字都可选，4种。",
        "十位：百位用掉1个数字，还剩3个，3种。",
        "个位：百位十位各用掉1个，还剩2个，2种。4×3×2＝24。"
      ],
      answer: "24个。",
      variants: [
        { type: "fill", html: "用1,2,3,4,5组成没有重复数字的三位数，有多少个？", answer: "60",
          analysis: "5×4×3＝60。" },
        { type: "fill", html: "用0,1,2,3组成没有重复数字的三位数(百位不为0)，有多少个？", answer: "18",
          analysis: "百位3种(1,2,3)，十位3种(含0)，个位2种：3×3×2＝18。" }
      ]
    },
    {
      lead: "例3 全排列",
      html: "5个人排成一排照相，有多少种排法？",
      steps: [
        "第1个位置：5种选择。",
        "第2个位置：剩下4人，4种；第3位3种，第4位2种，第5位1种。",
        "5×4×3×2×1＝120。"
      ],
      answer: "120种。",
      variants: [
        { type: "fill", html: "4个人排成一排，有多少种排法？", answer: "24",
          analysis: "4×3×2×1＝24。" },
        { type: "fill", html: "3个小朋友排成一排，有多少种排法？", answer: "6",
          analysis: "3×2×1＝6。" }
      ]
    }
  ],
  practice: [
    { type: "fill", html: "从3个同学中选2人排成一排，有多少种排法？", answer: "6",
      analysis: "3×2＝6。" },
    { type: "fill", html: "从5个同学中选2人排成一排，有多少种？", answer: "20",
      analysis: "5×4＝20。" },
    { type: "fill", html: "用1,2,3,4,5组成没有重复数字的两位数，有多少个？", answer: "20",
      analysis: "5×4＝20。" },
    { type: "fill", html: "4人排成一排，有多少种排法？", answer: "24",
      analysis: "4×3×2×1＝24。" },
    { type: "fill", html: "从6个同学中选2人排成一排，有多少种？", answer: "30",
      analysis: "6×5＝30。" },
    { type: "fill", html: "用2,3,4,5,6组成没有重复数字的三位数，有多少个？", answer: "60",
      analysis: "5×4×3＝60。" },
    { type: "fill", html: "3人排成一排，有多少种排法？", answer: "6",
      analysis: "3×2×1＝6。" }
  ],
  quiz: [
    { type: "fill", html: "从4个同学中选2人排成一排，有多少种？", answer: "12",
      analysis: "4×3＝12。" },
    { type: "choice", html: "3人排成一排照相，有多少种排法？", options: ["3种", "6种", "9种", "12种"], answer: 1,
      analysis: "3×2×1＝6。" },
    { type: "judge", html: "排列与顺序无关，对吗？", answer: false,
      analysis: "排列与顺序有关，甲乙和乙甲算两种。" },
    { type: "fill", html: "用1,2,3,4组成没有重复数字的三位数，有多少个？", answer: "24",
      analysis: "4×3×2＝24。" },
    { type: "fill", html: "5人排成一排，有多少种排法？", answer: "120",
      analysis: "5×4×3×2×1＝120。" }
  ],
  peiyou: [
    { type: "fill", html: "思维挑战：从5个同学中选3人排成一排，有多少种排法？", answer: "60",
      analysis: "第1位5种、第2位4种、第3位3种：5×4×3＝60。" },
    { type: "fill", html: "思维挑战：用0,1,2,3,4组成没有重复数字的三位数(百位不为0)，有多少个？", answer: "48",
      analysis: "百位4种(1,2,3,4)，十位4种(含0)，个位3种：4×4×3＝48。" },
    { type: "fill", html: "思维挑战：4个人排成一排，其中甲必须站在第一位，有多少种排法？", answer: "6",
      analysis: "甲固定在第1位，剩下3人全排列：3×2×1＝6。" }
  ]
}
,
{
  id: "g4-14", grade: 4, idx: 14, title: "组合初步", tag: "规律推理",
  goal: "理解组合与顺序无关，会先算排列再除以排列数来求组合数。",
  points: [
    "组合：从n个不同元素中取出m个组成一组，与顺序无关。",
    "组合数＝排列数÷m的全排列：先算n×(n-1)×…再÷(m×(m-1)×…×1)。",
    "排列讲顺序(排队、排数)，组合不讲顺序(选代表、选球队)。",
    "小学阶段常用列举法或两步走：先排后除。"
  ],
  examples: [
    {
      lead: "例1 选组长",
      html: "<img class='scene' src='assets/scenes/restaurant.png' alt='餐厅里选代表'>从4个同学中选2个做值日组长，有多少种选法？",
      steps: [
        "先按排列算：4×3＝12。",
        "但选甲乙和选乙甲是同一组，每一组被算了2次。",
        "组合数＝12÷2＝6。"
      ],
      answer: "6种。",
      anim: { type: "link", up: ["同学A", "同学B", "同学C", "同学D"], down: ["组长甲", "组长乙"] },
      variants: [
        { type: "fill", html: "从5个同学中选2人做班委，有多少种选法？", answer: "10",
          analysis: "5×4÷2＝10。" },
        { type: "fill", html: "从3个同学中选2人参加会议，有多少种？", answer: "3",
          analysis: "3×2÷2＝3。" }
      ]
    },
    {
      lead: "例2 取球",
      html: "从5个不同颜色的球中取2个，有多少种取法？",
      steps: [
        "先按排列算：5×4＝20。",
        "每2个球一组被算了2次(先红后蓝和先蓝后红是同一组)。",
        "20÷2＝10。"
      ],
      answer: "10种。",
      variants: [
        { type: "fill", html: "从6个同学中选2人，有多少种选法？", answer: "15",
          analysis: "6×5÷2＝15。" },
        { type: "fill", html: "从4本书中选2本，有多少种选法？", answer: "6",
          analysis: "4×3÷2＝6。" }
      ]
    },
    {
      lead: "例3 画直线",
      html: "平面上有5个点，任意3点不共线。过每两点画一条直线，共能画多少条直线？",
      steps: [
        "两点确定一条直线，选2个点不考虑顺序。",
        "先排列：5×4＝20。",
        "每两个点一组被算了2次：20÷2＝10。"
      ],
      answer: "10条。",
      variants: [
        { type: "fill", html: "平面上4个点，过两点画直线，共几条？", answer: "6",
          analysis: "4×3÷2＝6。" },
        { type: "fill", html: "6个球队每两队踢一场比赛，共几场？", answer: "15",
          analysis: "6×5÷2＝15。" }
      ]
    }
  ],
  practice: [
    { type: "fill", html: "从3个同学中选2人，有多少种选法？", answer: "3",
      analysis: "3×2÷2＝3。" },
    { type: "fill", html: "从5个同学中选2人，有多少种？", answer: "10",
      analysis: "5×4÷2＝10。" },
    { type: "fill", html: "从4本书中选2本，有多少种选法？", answer: "6",
      analysis: "4×3÷2＝6。" },
    { type: "fill", html: "6个球队每两队赛一场，共几场？", answer: "15",
      analysis: "6×5÷2＝15。" },
    { type: "fill", html: "从6个同学中选2人，有多少种？", answer: "15",
      analysis: "6×5÷2＝15。" },
    { type: "fill", html: "平面上4个点过两点画直线，共几条？", answer: "6",
      analysis: "4×3÷2＝6。" },
    { type: "fill", html: "从7个同学中选2人，有多少种？", answer: "21",
      analysis: "7×6÷2＝21。" }
  ],
  quiz: [
    { type: "fill", html: "从4个同学中选2人，有多少种选法？", answer: "6",
      analysis: "4×3÷2＝6。" },
    { type: "choice", html: "5个球队每两队踢一场比赛，共几场？", options: ["5场", "10场", "15场", "20场"], answer: 1,
      analysis: "5×4÷2＝10场。" },
    { type: "judge", html: "组合与顺序有关，对吗？", answer: false,
      analysis: "组合与顺序无关，甲乙和乙甲算同一种。" },
    { type: "fill", html: "从6个同学中选2人做代表，有多少种？", answer: "15",
      analysis: "6×5÷2＝15。" },
    { type: "fill", html: "从4个球中取2个，有多少种取法？", answer: "6",
      analysis: "4×3÷2＝6。" }
  ],
  peiyou: [
    { type: "fill", html: "思维挑战：从5个同学中选3人参加活动，有多少种选法？", answer: "10",
      analysis: "先排列5×4×3＝60，3人全排列3×2×1＝6，60÷6＝10。" },
    { type: "fill", html: "思维挑战：平面上6个点任意3点不共线，过两点画直线共几条？", answer: "15",
      analysis: "6×5÷2＝15条。" },
    { type: "fill", html: "思维挑战：从4名男生和3名女生中选2名男生和1名女生，有多少种选法？", answer: "18",
      analysis: "男生4选2：4×3÷2＝6；女生3选1：3。共6×3＝18。" }
  ]
}
,
{
  id: "g4-15", grade: 4, idx: 15, title: "整除特征", tag: "数与计算",
  gen: { type: "divisibility", n: 3 },
  goal: "掌握被2、3、5、9整除的数的特征，会快速判断一个数能否被这些数整除。",
  points: [
    "被2整除：个位是0,2,4,6,8的数。",
    "被5整除：个位是0或5的数。",
    "被3整除：各位数字之和能被3整除。",
    "被9整除：各位数字之和能被9整除。",
    "个位是0的数既能被2整除又能被5整除。"
  ],
  examples: [
    {
      lead: "例1 被2和5整除",
      html: "<img class='scene' src='assets/scenes/blackboard.png' alt='黑板上的整除判断'>判断下面哪些数能被2整除，哪些能被5整除：24, 35, 120, 37, 200。",
      steps: [
        "被2整除看个位：24(个位4)✓，120(个位0)✓，200(个位0)✓。",
        "被5整除看个位：35(个位5)✓，120(个位0)✓，200(个位0)✓。",
        "37个位是7，既不能被2整除也不能被5整除。"
      ],
      answer: "被2整除：24,120,200；被5整除：35,120,200。",
      anim: { type: "count", kind: "line", grid: [24, 35, 120, 37, 200] },
      variants: [
        { type: "fill", html: "下面哪些数能被2整除：18,23,40,57。写出能被2整除的数。", answer: "18,40",
          analysis: "个位是偶数的能被2整除：18(个位8)、40(个位0)。" },
        { type: "fill", html: "下面哪些数能被5整除：15,22,30,48。写出能被5整除的数。", answer: "15,30",
          analysis: "个位是0或5的能被5整除：15(个位5)、30(个位0)。" }
      ]
    },
    {
      lead: "例2 被3整除",
      html: "判断 135 能否被3整除。",
      steps: [
        "把各位数字相加：1＋3＋5＝9。",
        "9能被3整除。",
        "所以135能被3整除。"
      ],
      answer: "135能被3整除。",
      variants: [
        { type: "fill", html: "判断234能否被3整除：能或不能？", answer: "能",
          analysis: "2＋3＋4＝9，9能被3整除。" },
        { type: "fill", html: "判断123能否被3整除：能或不能？", answer: "能",
          analysis: "1＋2＋3＝6，6能被3整除。" }
      ]
    },
    {
      lead: "例3 填数字",
      html: "在□里填一个数字，使 4□2 能被3整除。□里可以填哪些数字？",
      steps: [
        "各位数字之和＝4＋□＋2＝6＋□。",
        "6已经能被3整除，所以□填的数也必须能被3整除。",
        "□可以填0,3,6,9。"
      ],
      answer: "□可填0,3,6,9。",
      variants: [
        { type: "fill", html: "在□里填数字使 3□5 能被3整除，写出一个。", answer: "1或4或7",
          analysis: "3＋5＝8，8＋□要能被3整除：□＝1(8+1=9), 4(8+4=12), 7(8+7=15)。" },
        { type: "fill", html: "判断 72 能否被9整除：能或不能？", answer: "能",
          analysis: "7＋2＝9，9能被9整除。" }
      ]
    }
  ],
  practice: [
    { type: "fill", html: "下面哪个数能被2整除：13,24,35？", answer: "24",
      analysis: "24的个位是4，是偶数。" },
    { type: "fill", html: "下面哪个数能被5整除：18,23,30？", answer: "30",
      analysis: "30的个位是0。" },
    { type: "fill", html: "判断 246 能否被3整除：能或不能？", answer: "能",
      analysis: "2＋4＋6＝12，12能被3整除。" },
    { type: "fill", html: "在□里填一个数字使 5□1 能被3整除，写出一个。", answer: "0或3或6或9",
      analysis: "5＋1＝6，6＋□要能被3整除：□＝0,3,6,9。" },
    { type: "fill", html: "下面哪个数能被9整除：123,456,189？", answer: "189",
      analysis: "189各位和1＋8＋9＝18，能被9整除。" },
    { type: "fill", html: "判断 315 能否同时被2和3整除：能或不能？", answer: "不能",
      analysis: "个位是5不能被2整除；虽然3＋1＋5＝9能被3整除，但不能同时被2整除。" }
  ],
  quiz: [
    { type: "fill", html: "124的个位是4，所以能被___整除。", answer: "2",
      analysis: "个位是偶数的数能被2整除。" },
    { type: "choice", html: "下面哪个数能被3整除？", options: ["13", "23", "33", "43"], answer: 2,
      analysis: "33各位和3＋3＝6，能被3整除。" },
    { type: "judge", html: "个位是0的数既能被2整除又能被5整除，对吗？", answer: true,
      analysis: "个位0是偶数能被2整除，个位0或5能被5整除。" },
    { type: "fill", html: "在□里填一个数字使 2□4 能被3整除，写出一个。", answer: "0或3或6或9",
      analysis: "2＋4＝6，6＋□要能被3整除：□＝0,3,6,9。" },
    { type: "fill", html: "36的各位数字和是___，所以能被3整除。", answer: "9",
      analysis: "3＋6＝9。" }
  ],
  peiyou: [
    { type: "fill", html: "思维挑战：一个三位数 4□6 既能被2整除又能被3整除，□里可以填哪些数字？", answer: "2,5,8",
      analysis: "个位6已能被2整除；4＋6＝10，10＋□要能被3整除：□＝2(12),5(15),8(18)。" },
    { type: "fill", html: "思维挑战：用0,1,5三个数字组成没有重复数字的三位数，其中能被5整除的有几个？", answer: "3",
      analysis: "能被5整除个位是0或5。个位0：150,510；个位5：105。共3个。" },
    { type: "fill", html: "思维挑战：判断 12345 能否被3整除：能或不能？", answer: "能",
      analysis: "1＋2＋3＋4＋5＝15，15能被3整除。" }
  ]
}
,
{
  id: "g4-16", grade: 4, idx: 16, title: "质数合数", tag: "数与计算",
  goal: "理解质数与合数的概念，会判断一个数是质数还是合数，熟记20以内的质数。",
  points: [
    "质数：只有1和它本身两个因数的数(如2,3,5,7,11…)。",
    "合数：除了1和本身还有别的因数的数(如4,6,8,9,10…)。",
    "1既不是质数也不是合数。",
    "2是最小的质数，也是唯一的偶质数。",
    "判断质数：看能否被2,3,5,7等小质数整除。"
  ],
  examples: [
    {
      lead: "例1 判断质数合数",
      html: "<img class='scene' src='assets/scenes/blackboard.png' alt='黑板上的质数合数'>下面各数中，哪些是质数？哪些是合数？ 7, 9, 11, 15, 17, 21。",
      steps: [
        "7的因数只有1和7→质数；9的因数有1,3,9→合数。",
        "11的因数只有1和11→质数；15的因数有1,3,5,15→合数。",
        "17的因数只有1和17→质数；21的因数有1,3,7,21→合数。"
      ],
      answer: "质数：7,11,17；合数：9,15,21。",
      anim: { type: "count", kind: "line", grid: [7, 9, 11, 15, 17, 21] },
      variants: [
        { type: "fill", html: "下面哪些是质数：5,8,13,18。写出质数。", answer: "5,13",
          analysis: "5和13的因数只有1和本身；8=2×4、18=2×9是合数。" },
        { type: "fill", html: "下面哪些是质数：19,25,31,35。写出质数。", answer: "19,31",
          analysis: "19和31是质数；25=5×5、35=5×7是合数。" }
      ]
    },
    {
      lead: "例2 找20以内的质数",
      html: "20以内的质数有哪些？",
      steps: [
        "1既不是质数也不是合数。",
        "划去2的倍数：4,6,8,10,12,14,16,18,20；划去3的倍数：9,15。",
        "剩下的质数：2,3,5,7,11,13,17,19。"
      ],
      answer: "2,3,5,7,11,13,17,19。",
      variants: [
        { type: "fill", html: "10以内的质数有哪些？", answer: "2,3,5,7",
          analysis: "1不是质数，4,6,8,9,10是合数。" },
        { type: "fill", html: "15以内的质数有哪些？", answer: "2,3,5,7,11,13",
          analysis: "15以内：2,3,5,7,11,13。" }
      ]
    },
    {
      lead: "例3 判断49",
      html: "判断 49 是质数还是合数。",
      steps: [
        "试除小质数：49÷2不整除，÷3不整除，÷5不整除。",
        "49÷7＝7，除尽了。",
        "49＝7×7，除了1和49还有因数7，所以是合数。"
      ],
      answer: "49是合数。",
      variants: [
        { type: "fill", html: "判断23是质数还是合数。", answer: "质数",
          analysis: "23÷2,3,5都不整除，因数只有1和23。" },
        { type: "fill", html: "判断51是质数还是合数。", answer: "合数",
          analysis: "51＝3×17，是合数。" }
      ]
    }
  ],
  practice: [
    { type: "fill", html: "下面哪个是质数：4,6,7,8？", answer: "7",
      analysis: "7的因数只有1和7。" },
    { type: "fill", html: "下面哪个是合数：3,5,9,11？", answer: "9",
      analysis: "9＝3×3，是合数。" },
    { type: "fill", html: "20以内最大的质数是几？", answer: "19",
      analysis: "20以内质数最大是19。" },
    { type: "fill", html: "最小的质数是几？", answer: "2",
      analysis: "2是最小的质数。" },
    { type: "fill", html: "判断27是质数还是合数。", answer: "合数",
      analysis: "27＝3×9。" },
    { type: "fill", html: "判断13是质数还是合数。", answer: "质数",
      analysis: "13的因数只有1和13。" },
    { type: "fill", html: "10以内既是偶数又是质数的数是几？", answer: "2",
      analysis: "唯一的偶质数是2。" }
  ],
  quiz: [
    { type: "fill", html: "最小的质数是___。", answer: "2",
      analysis: "2是最小的质数。" },
    { type: "choice", html: "下面哪个是质数？", options: ["9", "11", "15", "21"], answer: 1,
      analysis: "11的因数只有1和11；9=3×3, 15=3×5, 21=3×7都是合数。" },
    { type: "judge", html: "1是质数，对吗？", answer: false,
      analysis: "1既不是质数也不是合数。" },
    { type: "fill", html: "最小的合数是___。", answer: "4",
      analysis: "4＝2×2，是最小的合数。" },
    { type: "fill", html: "20以内的质数中，唯一的偶数是___。", answer: "2",
      analysis: "2是唯一的偶质数。" }
  ],
  peiyou: [
    { type: "fill", html: "思维挑战：两个质数的和是10，这两个质数可能是几？写出一组。", answer: "3和7或5和5",
      analysis: "3＋7＝10，5＋5＝10。" },
    { type: "fill", html: "思维挑战：一个两位质数，十位和个位数字之和是10，这个数可能是几？写出一个。", answer: "19或37或73",
      analysis: "1+9=10→19(质)，3+7=10→37(质)，7+3=10→73(质)；91=7×13是合数。" },
    { type: "fill", html: "思维挑战：判断91是质数还是合数。", answer: "合数",
      analysis: "91＝7×13，容易误认为是质数。" }
  ]
}
,
{
  id: "g4-17", grade: 4, idx: 17, title: "分解质因数", tag: "数与计算",
  gen: { type: "primeFactor", n: 3 },
  goal: "学会用短除法把一个合数分解成质因数相乘的形式。",
  points: [
    "质因数：一个数的因数是质数，这个因数叫它的质因数。",
    "分解质因数：把一个合数用质因数相乘的形式表示。",
    "方法：用短除法，从小到大除以质数，直到商为质数。",
    "任何合数都能唯一分解成若干质因数相乘。"
  ],
  examples: [
    {
      lead: "例1 分解12",
      html: "<img class='scene' src='assets/scenes/blackboard.png' alt='黑板上的短除法'>把 12 分解质因数。",
      steps: [
        "用短除法：12÷2＝6。",
        "6÷2＝3。",
        "3是质数。所以12＝2×2×3。"
      ],
      answer: "12＝2×2×3。",
      anim: { type: "vertical", cells: [{ pos: "12÷2", val: 6 }, { pos: "6÷2", val: 3 }] },
      variants: [
        { type: "fill", html: "把18分解质因数。", answer: "18=2×3×3",
          analysis: "18÷2=9，9÷3=3，3是质数。" },
        { type: "fill", html: "把20分解质因数。", answer: "20=2×2×5",
          analysis: "20÷2=10，10÷2=5，5是质数。" }
      ]
    },
    {
      lead: "例2 分解60",
      html: "把 60 分解质因数。",
      steps: [
        "60÷2＝30。",
        "30÷2＝15。",
        "15÷3＝5，5是质数。60＝2×2×3×5。"
      ],
      answer: "60＝2×2×3×5。",
      variants: [
        { type: "fill", html: "把24分解质因数。", answer: "24=2×2×2×3",
          analysis: "24÷2=12，12÷2=6，6÷2=3。" },
        { type: "fill", html: "把45分解质因数。", answer: "45=3×3×5",
          analysis: "45÷3=15，15÷3=5。" }
      ]
    },
    {
      lead: "例3 分解100",
      html: "把 100 分解质因数。",
      steps: [
        "100÷2＝50。",
        "50÷2＝25。",
        "25÷5＝5。100＝2×2×5×5。"
      ],
      answer: "100＝2×2×5×5。",
      variants: [
        { type: "fill", html: "把36分解质因数。", answer: "36=2×2×3×3",
          analysis: "36÷2=18，18÷2=9，9÷3=3。" },
        { type: "fill", html: "把50分解质因数。", answer: "50=2×5×5",
          analysis: "50÷2=25，25÷5=5。" }
      ]
    }
  ],
  practice: [
    { type: "fill", html: "把8分解质因数。", answer: "8=2×2×2",
      analysis: "8÷2=4，4÷2=2。" },
    { type: "fill", html: "把15分解质因数。", answer: "15=3×5",
      analysis: "15÷3=5，5是质数。" },
    { type: "fill", html: "把28分解质因数。", answer: "28=2×2×7",
      analysis: "28÷2=14，14÷2=7。" },
    { type: "fill", html: "把48分解质因数。", answer: "48=2×2×2×2×3",
      analysis: "48÷2=24，24÷2=12，12÷2=6，6÷2=3。" },
    { type: "fill", html: "把72分解质因数。", answer: "72=2×2×2×3×3",
      analysis: "72÷2=36，36÷2=18，18÷2=9，9÷3=3。" },
    { type: "fill", html: "把90分解质因数。", answer: "90=2×3×3×5",
      analysis: "90÷2=45，45÷3=15，15÷3=5。" }
  ],
  quiz: [
    { type: "fill", html: "12＝2×2×___，横线上填几？", answer: "3",
      analysis: "12÷2÷2=3。" },
    { type: "choice", html: "把18分解质因数，正确的是？", options: ["18=2×9", "18=2×3×3", "18=3×6", "18=1×2×3×3"], answer: 1,
      analysis: "分解质因数必须全是质数：18=2×3×3。" },
    { type: "judge", html: "分解质因数时，1也是质因数，对吗？", answer: false,
      analysis: "1不是质数，不能出现在质因数分解中。" },
    { type: "fill", html: "20＝2×2×___，横线上填几？", answer: "5",
      analysis: "20÷2÷2=5。" },
    { type: "fill", html: "把16分解质因数：16＝___。", answer: "16=2×2×2×2",
      analysis: "16÷2=8，8÷2=4，4÷2=2。" }
  ],
  peiyou: [
    { type: "fill", html: "思维挑战：三个连续自然数的积是210，这三个数分别是几？", answer: "5,6,7",
      analysis: "210＝2×3×5×7＝5×6×7。" },
    { type: "fill", html: "思维挑战：把84分解质因数。", answer: "84=2×2×3×7",
      analysis: "84÷2=42，42÷2=21，21÷3=7。" },
    { type: "fill", html: "思维挑战：一个数分解质因数后是2×2×3×5，这个数是几？", answer: "60",
      analysis: "2×2×3×5＝4×15＝60。" }
  ]
}
,
{
  id: "g4-18", grade: 4, idx: 18, title: "最大公因数", tag: "数与计算",
  gen: { type: "gcf", n: 3 },
  goal: "理解公因数和最大公因数，会用短除法求两个数的最大公因数。",
  points: [
    "公因数：几个数公有的因数。最大公因数：其中最大的一个。",
    "短除法：用公有的质因数连续除，直到商互质，所有除数相乘。",
    "倍数关系的两个数，最大公因数是较小数。",
    "互质的两个数，最大公因数是1。"
  ],
  examples: [
    {
      lead: "例1 短除法求GCD",
      html: "<img class='scene' src='assets/scenes/blackboard.png' alt='黑板上的短除法'>求 12 和 18 的最大公因数。",
      steps: [
        "12和18都除以2，得6和9。",
        "6和9再除以3，得2和3。2和3互质。",
        "所有除数相乘：2×3＝6。"
      ],
      answer: "6。",
      anim: { type: "vertical", cells: [{ pos: "÷2", val: 6 }, { pos: "÷3", val: 2 }] },
      variants: [
        { type: "fill", html: "求16和24的最大公因数。", answer: "8",
          analysis: "÷2得8和12，÷2得4和6，÷2得2和3。除数相乘2×2×2＝8。" },
        { type: "fill", html: "求15和25的最大公因数。", answer: "5",
          analysis: "÷5得3和5互质。最大公因数＝5。" }
      ]
    },
    {
      lead: "例2 倍数关系",
      html: "求 8 和 16 的最大公因数。",
      steps: [
        "16是8的倍数。",
        "倍数关系的两个数，最大公因数是较小数。",
        "所以最大公因数是8。"
      ],
      answer: "8。",
      variants: [
        { type: "fill", html: "求5和15的最大公因数。", answer: "5",
          analysis: "15是5的倍数，最大公因数是5。" },
        { type: "fill", html: "求7和21的最大公因数。", answer: "7",
          analysis: "21是7的倍数，最大公因数是7。" }
      ]
    },
    {
      lead: "例3 互质",
      html: "求 7 和 9 的最大公因数。",
      steps: [
        "7的因数：1,7。9的因数：1,3,9。",
        "公有的因数只有1。",
        "7和9互质，最大公因数是1。"
      ],
      answer: "1。",
      variants: [
        { type: "fill", html: "求8和15的最大公因数。", answer: "1",
          analysis: "8和15互质，最大公因数是1。" },
        { type: "fill", html: "求4和9的最大公因数。", answer: "1",
          analysis: "4和9互质，最大公因数是1。" }
      ]
    }
  ],
  practice: [
    { type: "fill", html: "求6和9的最大公因数。", answer: "3",
      analysis: "÷3得2和3互质。最大公因数＝3。" },
    { type: "fill", html: "求10和15的最大公因数。", answer: "5",
      analysis: "÷5得2和3互质。最大公因数＝5。" },
    { type: "fill", html: "求12和24的最大公因数。", answer: "12",
      analysis: "24是12的倍数，最大公因数是12。" },
    { type: "fill", html: "求9和10的最大公因数。", answer: "1",
      analysis: "9和10互质，最大公因数是1。" },
    { type: "fill", html: "求18和27的最大公因数。", answer: "9",
      analysis: "÷3得6和9，÷3得2和3。除数相乘3×3＝9。" },
    { type: "fill", html: "求14和21的最大公因数。", answer: "7",
      analysis: "÷7得2和3互质。最大公因数＝7。" }
  ],
  quiz: [
    { type: "fill", html: "6和9的最大公因数是___。", answer: "3",
      analysis: "÷3得2和3，最大公因数是3。" },
    { type: "choice", html: "8和16的最大公因数是？", options: ["1", "8", "16", "2"], answer: 1,
      analysis: "16是8的倍数，最大公因数是8。" },
    { type: "judge", html: "互质的两个数最大公因数是1，对吗？", answer: true,
      analysis: "互质即只有公因数1。" },
    { type: "fill", html: "7和14的最大公因数是___。", answer: "7",
      analysis: "14是7的倍数，最大公因数是7。" },
    { type: "fill", html: "5和7的最大公因数是___。", answer: "1",
      analysis: "5和7互质。" }
  ],
  peiyou: [
    { type: "fill", html: "思维挑战：有两根铁丝，一根长24厘米，一根长36厘米。要截成同样长的小段且没有剩余，每段最长几厘米？", answer: "12",
      analysis: "求24和36的最大公因数：÷2得12和18，÷2得6和9，÷3得2和3。2×2×3＝12厘米。" },
    { type: "fill", html: "思维挑战：求12、18和24的最大公因数。", answer: "6",
      analysis: "÷2得6,9,12，÷3得2,3,4互质。2×3＝6。" },
    { type: "fill", html: "思维挑战：甲数＝2×3×5，乙数＝2×3×7，甲乙两数的最大公因数是几？", answer: "6",
      analysis: "公有质因数是2和3，2×3＝6。" }
  ]
}
,
{
  id: "g4-19", grade: 4, idx: 19, title: "最小公倍数", tag: "数与计算",
  gen: { type: "lcm", n: 3 },
  goal: "理解公倍数和最小公倍数，会用短除法求两个数的最小公倍数。",
  points: [
    "公倍数：几个数公有的倍数。最小公倍数：其中最小的一个。",
    "短除法：除到商互质，所有除数和最后的商都相乘。",
    "倍数关系的两个数，最小公倍数是较大数。",
    "互质的两个数，最小公倍数是它们的乘积。"
  ],
  examples: [
    {
      lead: "例1 短除法求LCM",
      html: "<img class='scene' src='assets/scenes/blackboard.png' alt='黑板上的短除法'>求 4 和 6 的最小公倍数。",
      steps: [
        "4和6除以2，得2和3。2和3互质。",
        "最小公倍数＝除数×最后的商＝2×2×3。",
        "2×2×3＝12。"
      ],
      answer: "12。",
      anim: { type: "vertical", cells: [{ pos: "÷2", val: 2 }, { pos: "×3", val: 3 }] },
      variants: [
        { type: "fill", html: "求6和8的最小公倍数。", answer: "24",
          analysis: "÷2得3和4互质。2×3×4＝24。" },
        { type: "fill", html: "求3和5的最小公倍数。", answer: "15",
          analysis: "3和5互质，最小公倍数＝3×5＝15。" }
      ]
    },
    {
      lead: "例2 倍数关系",
      html: "求 3 和 6 的最小公倍数。",
      steps: [
        "6是3的倍数。",
        "倍数关系的两个数，最小公倍数是较大数。",
        "所以最小公倍数是6。"
      ],
      answer: "6。",
      variants: [
        { type: "fill", html: "求4和12的最小公倍数。", answer: "12",
          analysis: "12是4的倍数，最小公倍数是12。" },
        { type: "fill", html: "求5和10的最小公倍数。", answer: "10",
          analysis: "10是5的倍数，最小公倍数是10。" }
      ]
    },
    {
      lead: "例3 8和12",
      html: "求 8 和 12 的最小公倍数。",
      steps: [
        "8和12除以2，得4和6。",
        "4和6再除以2，得2和3。2和3互质。",
        "最小公倍数＝2×2×2×3＝24。"
      ],
      answer: "24。",
      variants: [
        { type: "fill", html: "求6和10的最小公倍数。", answer: "30",
          analysis: "÷2得3和5互质。2×3×5＝30。" },
        { type: "fill", html: "求9和12的最小公倍数。", answer: "36",
          analysis: "÷3得3和4互质。3×3×4＝36。" }
      ]
    }
  ],
  practice: [
    { type: "fill", html: "求4和8的最小公倍数。", answer: "8",
      analysis: "8是4的倍数，最小公倍数是8。" },
    { type: "fill", html: "求3和4的最小公倍数。", answer: "12",
      analysis: "3和4互质，3×4＝12。" },
    { type: "fill", html: "求6和9的最小公倍数。", answer: "18",
      analysis: "÷3得2和3互质。3×2×3＝18。" },
    { type: "fill", html: "求5和6的最小公倍数。", answer: "30",
      analysis: "5和6互质，5×6＝30。" },
    { type: "fill", html: "求10和15的最小公倍数。", answer: "30",
      analysis: "÷5得2和3互质。5×2×3＝30。" },
    { type: "fill", html: "求4和10的最小公倍数。", answer: "20",
      analysis: "÷2得2和5互质。2×2×5＝20。" }
  ],
  quiz: [
    { type: "fill", html: "3和4的最小公倍数是___。", answer: "12",
      analysis: "互质，3×4＝12。" },
    { type: "choice", html: "4和8的最小公倍数是？", options: ["4", "8", "16", "32"], answer: 1,
      analysis: "8是4的倍数，最小公倍数是8。" },
    { type: "judge", html: "互质的两个数最小公倍数是它们的乘积，对吗？", answer: true,
      analysis: "互质即没有公有质因数，LCM＝两数乘积。" },
    { type: "fill", html: "6和12的最小公倍数是___。", answer: "12",
      analysis: "12是6的倍数。" },
    { type: "fill", html: "5和7的最小公倍数是___。", answer: "35",
      analysis: "互质，5×7＝35。" }
  ],
  peiyou: [
    { type: "fill", html: "思维挑战：一些同学排队，每8人一排或每10人一排都正好排完。这些同学至少有多少人？", answer: "40",
      analysis: "求8和10的最小公倍数：÷2得4和5互质。2×4×5＝40人。" },
    { type: "fill", html: "思维挑战：求4、6和8的最小公倍数。", answer: "24",
      analysis: "÷2得2,3,4，÷2得1,3,2。2×2×1×3×2＝24。" },
    { type: "fill", html: "思维挑战：甲数＝2×3，乙数＝2×5，甲乙两数的最小公倍数是几？", answer: "30",
      analysis: "公有质因数2，甲独有3，乙独有5。2×3×5＝30。" }
  ]
}
,
{
  id: "g4-20", grade: 4, idx: 20, title: "余数与周期", tag: "规律推理",
  goal: "掌握用除法余数解决周期问题，会根据余数判断第几个是什么。",
  points: [
    "余数：除法中除不尽剩下的数，余数必须比除数小。",
    "周期问题：用总数÷周期长度，余数是几就对应周期里第几个，没余数对应最后一个。",
    "被除数＝除数×商＋余数。",
    "星期几、数字串、图形排列都是周期问题。"
  ],
  examples: [
    {
      lead: "例1 彩灯周期",
      html: "<img class='scene' src='assets/scenes/festival.png' alt='节日彩灯'>彩灯按\"3红2黄1绿\"排列，第40盏是什么颜色？",
      steps: [
        "一个周期共3＋2＋1＝6盏灯。",
        "40÷6＝6组余4。",
        "一组中第4盏是黄色(前3盏红，第4、5盏黄，第6盏绿)。"
      ],
      answer: "黄色。",
      anim: { type: "cycle", seq: ["红", "红", "红", "黄", "黄", "绿"], nth: 40, count: 40 },
      variants: [
        { type: "fill", html: "彩灯按\"2红2黄\"排列，第15盏是什么颜色？", answer: "黄",
          analysis: "周期4，15÷4＝3组余3，第3个是黄。" },
        { type: "fill", html: "彩旗按\"红黄绿\"排列，第25面是什么颜色？", answer: "红",
          analysis: "周期3，25÷3＝8组余1，第1个是红。" }
      ]
    },
    {
      lead: "例2 星期几",
      html: "今天是星期三，再过20天是星期几？",
      steps: [
        "一周有7天。20÷7＝2周余6天。",
        "从星期三往后数6天：四(1)、五(2)、六(3)、日(4)、一(5)、二(6)。",
        "所以是星期二。"
      ],
      answer: "星期二。",
      variants: [
        { type: "fill", html: "今天星期一，再过15天是星期几？", answer: "星期二",
          analysis: "15÷7＝2周余1天，星期一往后数1天是星期二。" },
        { type: "fill", html: "今天星期五，再过10天是星期几？", answer: "星期一",
          analysis: "10÷7＝1周余3天：六(1)、日(2)、一(3)。" }
      ]
    },
    {
      lead: "例3 数列周期",
      html: "有一列数 2,0,1,2,0,1,2,0,1……第25个数是几？",
      steps: [
        "观察发现2,0,1三个一组重复，周期长度是3。",
        "25÷3＝8组余1。",
        "余数是1，对应一组里第1个，即2。"
      ],
      answer: "2。",
      variants: [
        { type: "fill", html: "数列3,1,2,3,1,2……第20个是几？", answer: "1",
          analysis: "周期3，20÷3＝6组余2，第2个是1。" },
        { type: "fill", html: "数列1,4,7,1,4,7……第30个是几？", answer: "7",
          analysis: "周期3，30÷3＝10组余0，对应最后一个7。" }
      ]
    }
  ],
  practice: [
    { type: "fill", html: "○△□○△□……第20个是什么图形？", answer: "△",
      analysis: "周期3，20÷3＝6组余2，第2个是△。" },
    { type: "fill", html: "今天星期二，再过10天是星期几？", answer: "星期五",
      analysis: "10÷7＝1周余3天：三(1)、四(2)、五(3)。" },
    { type: "fill", html: "数列1,3,5,1,3,5……第17个是几？", answer: "3",
      analysis: "周期3，17÷3＝5组余2，第2个是3。" },
    { type: "fill", html: "彩旗\"红黄蓝\"循环，第28面是什么颜色？", answer: "红",
      analysis: "周期3，28÷3＝9组余1，第1个是红。" },
    { type: "fill", html: "100个3相乘，积的个位数字是几？(提示：3的幂个位按3,9,7,1循环)", answer: "1",
      analysis: "周期4，100÷4＝25组余0，对应最后一个1。" },
    { type: "fill", html: "今天星期日，再过15天是星期几？", answer: "星期一",
      analysis: "15÷7＝2周余1天，星期日往后1天是星期一。" },
    { type: "fill", html: "数列2,4,6,8,2,4,6,8……第33个是几？", answer: "2",
      analysis: "周期4，33÷4＝8组余1，第1个是2。" }
  ],
  quiz: [
    { type: "fill", html: "○△○△……第15个是什么？", answer: "○",
      analysis: "周期2，15÷2＝7组余1，第1个是○。" },
    { type: "choice", html: "数列1,2,3,1,2,3……第20个是？", options: ["1", "2", "3", "无法确定"], answer: 1,
      analysis: "周期3，20÷3＝6组余2，第2个是2。" },
    { type: "judge", html: "周期问题中余数为0时对应周期最后一个，对吗？", answer: true,
      analysis: "没有余数说明正好排完整周期，就是最后一个。" },
    { type: "fill", html: "今天星期三，再过7天是星期___。", answer: "三",
      analysis: "7天正好一周，还是星期三。" },
    { type: "fill", html: "彩旗\"红黄\"循环，第11面是什么颜色？", answer: "红",
      analysis: "周期2，11÷2＝5组余1，第1个是红。" }
  ],
  peiyou: [
    { type: "fill", html: "思维挑战：有一列数1,4,7,10,1,4,7,10……第50个数是几？", answer: "4",
      analysis: "周期4(1,4,7,10)，50÷4＝12组余2，第2个是4。" },
    { type: "fill", html: "思维挑战：今天是星期三，从今天算起第50天是星期几？", answer: "星期三",
      analysis: "周期7，50÷7＝7周余1，第1天就是星期三。" },
    { type: "fill", html: "思维挑战：2026年10月7日是星期三。再过100天是星期几？", answer: "星期五",
      analysis: "100÷7＝14周余2天，星期三往后数2天：四(1)、五(2)。" }
    ]
}
];
