/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Funds to Spend:": "支出资金：",
    "Hover Over An Achievement to See its Description": "将鼠标悬停在成就上以查看其描述",
    "Import Save": "导入保存",
    "Insignias from:": "徽章来自：",
    "Lobby The Government": "政府大厅",
    "Manpower": "人手",
    "Manual Save": "手动保存",
    "Medal Gain 2x": "勋章增益 2x",
    "Medal Gain 4x": "勋章增益 4x",
    "Must be promoted once to Unlock Upgrades": "必须升级一次才能解锁升级",
    "Name your Army!": "命名你的军队！",
    "New things have been added since last time": "自上次以来已添加新内容",
    "On": "开启",
    "ON": "开启",
    "Notation: Mixed Sci": "符号：混合科学",
    "Officers": "长官",
    "One Star Upgrades": "一星升级",
    "Player": "播放器",
    "Promote": "推动",
    "Promotions": "促销活动",
    "Propaganda only costs 25% of Funds": "宣传只花费25%的资金",
    "Propaganda only Costs 50% of Funds": "宣传只花费50%的资金",
    "Release Propaganda": "发布宣传",
    "Rename your Army": "重命名你的军队",
    "Submit": "提交",
    "Thanks!": "谢谢！",
    "This game is still in very early development so expect bugs and bad balancing.": "该游戏仍处于早期开发阶段，因此预计会出现错误和糟糕的平衡。",
    "Three Star Upgrades": "三星级升级",
    "Two Star Upgrades": "两星升级",
    "US army vs the void - coming soonTM": "美军VS虚空——即将到来TM",
    "Welcome back gamer!": "欢迎回来游戏玩家！",
    "Welcome to Incremental Army!": "欢迎加入增量军团！",
    "You may be good at this so far but can you beat Elite Master Legend difficulty?": "到目前为止，您可能很擅长这一点，但您能击败精英大师传奇难度吗？",
    "You need at least 1 Pvt to Fight": "您需要至少 1 个 Pvt 才能战斗",
    "Your mom says hi": "你妈妈说：嗨",
    "Equipment": "装备",
    "Export Save": "导出存档",
    "Finances": "财政",
    "Five Star Upgrades": "五星级升级",
    "Four Star Upgrades": "四星升级",
    "If you have the newsticker hidden you can't see this": "如果你隐藏了新贴纸，你就看不到这个",
    "Lol among US": "在美国大声笑",
    "This is a certified Void Moment": "这是经过认证的虚空时刻",
    ":texas:": "：德克萨斯州：",
    "[Locked]": "[未解锁]",
    "Anyways once you hide this popup you will be able to name your army.": "无论如何，一旦您隐藏此弹出窗口，您将能够命名您的军队。",
    "Army": "军队",
    "Automated Acquisition": "自动采集",
    "Automated Enlistment": "自动入伍",
    "Automated Fabrication": "自动化制造",
    "Automated Hiring": "自动招聘",
    "Automated Propaganda": "自动化宣传",
    "Battleground": "战场",
    "Begin the Battle": "开始战斗",
    "Being Researched": "正在研究",
    "Beta Versions": "测试版",
    "can this be a newticker?": "这可以是一个新行情吗？",
    "Current Tiebreaker status": "当前的决胜局状态",
    "Decrease Cost Scaling on Enlisted": "降低入伍成本比例",
    "Delete Save": "删除存档",
    "Discord Invite!": "Discord邀请！",
    "Enlisted": "征召",
    "OFF": "关闭",
    "Enemy": "敌人",
    "[Unlocked]": "[已解锁]",
    "gamening": "博弈",
    "01: Enlist a Private": "01：招募列兵",
    "01: Fabricate Infantry Equipment": "01：制造步兵装备",
    "03: Enlist a Sergeant": "03：征募一名中士",
    "04: Enlist a Staff Sergeant": "04：招募一名上士",
    "04: Fabricate a Transport": "04：制造运输工具",
    "05: Fabricate 100 Infantry Equipment": "05：制造100个步兵装备",
    "05: Hire a 2nd Lieutenant": "05：雇用一名第二中尉",
    "06: Fabricate 100 Anti Tank Guns": "06：制造100支反坦克炮",
    "06: Hire a 1st Lieutenant": "06：雇用一名中尉",
    "07: Fabricate 100 Artillery Guns": "07：制造100门火炮",
    "07: Hire a Captain": "07：聘请船长",
    "08: Fabricate 100 Transports": "08: 制造 100 辆运输车",
    "08: Hire a Major": "08：聘请专业",
    "10x Base Funding": "10x 基础资金",
    "5x Base Funding": "5x 基础资金",
    "I am your friendly news ticker, I tick when there is news. I'm like a Geiger counter, but for news!": "我是您友好的新闻播报员，有新闻时我会报答。 我就像一个盖革计数器，但对于新闻！",
    "Lobby Congress": "游说大会",
    "Newsticker Moment": "新贴时刻",
    "Promote to Brigadier General": "晋升准将",
    "Tanks in 5 hours": "5 小时内的坦克",
    "VoidCloud sends his regards": "虚空云 发送他的问候",
    "Ω-01: Unlock all non Omega Achievements": "Ω-01：解锁所有非欧米茄成就",
    "Ω-02: Execute Order 66 (66 Wins)": "Ω-02：执行命令 66（66 胜）",
    "02: Enlist a Corporal": "02：招募下士",
    "02: Fabricate an Anti Tank Gun": "02：制作反坦克炮",
    "03: Fabricate an Artillery Gun": "03：制造火炮",
    "Bravo Six going dark": "勇敢的六人要黑了",
    "Charlie-01: Release Propaganda": "Charlie-01：发布宣传",
    "Charlie-02: Lobby Congress": "Charlie-02：游说大会",
    "Charlie-03: Reach Max Approval": "Charlie-03：达到最大认可",
    "Communism Doesn't Work": "资本主义行不通",
    "Delta-08: Reach Grand Master Difficulty (260 Wins)": "Delta-08：达到大师难度（260 胜）",
    "Echo-01: Achieve Brigadier General Rank": "Echo-01：获得准将军衔",
    "Echo-02: Achieve Major General Rank": "Echo-02：获得少将军衔",
    "Echo-03: Achieve Lieutenant General Rank": "Echo-03：获得中将军衔",
    "Echo-04: Achieve General Rank": "Echo-04：达到一般等级",
    "Echo-05: Achieve General of the Army Rank": "Echo-05：获得陆军将军衔",
    "Echo-06: Unlock All Promotion Upgrades": "Echo-06：解锁所有促销升级",
    "Fact Check - False": "事实核查 - 错误",
    "I don't know what I've been told, but the 5 hour joke is getting old!": "我不知道我被告知了什么，但 5 小时的笑话已经过时了！",
    "Incremental Game without Newsticker Challenge - [Failed]": "没有新贴纸挑战的增量游戏 - [失败]",
    "never gonna give you a rickroll": "永远不会给你一个人力车",
    "The Void is coming": "虚空降临",
    "Soldiers": "士兵",
    "The 16th Mechanized Division is far superior to you": "机械化十六师远胜于你",
    "Win": "胜利",
    "Conscript": "征募",
    "Victory!": "胜利！",
    "Stalemate!": "相持不下！",
    "This Battle ended in a Stalemate.": "这场战斗以胶着告终。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Funds: $": "资金: $",
    "Newsticker: ": "滚动新闻：",
    "Private: ": "列兵：",
    "Major: ": "少校：",
    "Medals: ": "勋章：",
    "Transport: ": "运输：",
    "Transports: ": "运输：",
    "Sergeant: ": "中士：",
    "Staff Sergeant: ": "参谋长：",
    "Infantry Equipment: ": "步兵装备：",
    "Input Minimum Req to Acquire (Current: ": "输入要获取的最低要求（当前：",
    "Input Minimum Req to Acquire Funds (Current: ": "输入要获取资金  的最低要求（当前：",
    "Anti-Tank Gun: ": "反坦克炮：",
    "Anti-Tank Guns: ": "反坦克炮：",
    "Artillery Gun: ": "火炮：",
    "Artillery Guns: ": "火炮：",
    "Buy Amount: ": "购买数量：",
    "Changelog :": "更新日志：",
    "Current Version: v": "当前版本：v",
    "1st Lieutenant: ": "1 中尉：",
    "2nd Lieutenant: ": "2 中尉：",
    "Automator: ": "自动化：",
    "Captain: ": "队长：",
    "Congressional Approval: ": "国会认可：",
    "Corporal: ": "下士：",
    "[Locked - Req: ": "[未解锁 - 要求: ",
    "Current Rank: Colonel | Medals: ": "当前军衔：上校 | 勋章：",
    "Equipment: ": "装备：",
    "Today is ": "今天是 ",
    "Attack Power: ": "攻击力：",
    "Difficulty Rating: ": "难度等级：",
    "Manpower: ": "人手：",
    "Maj: ": "少校：",
    "Tie Breaker Status: ": "决胜局状态：",
    "[Funding Base ": "[资金基础",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    " Damage to Armor]": " 装甲伤害]",
    " Damage to Infantry]": " 步兵伤害]",
    " More Troops]": " 更多部队]",
    " to Cpl Attack": " Cpl 攻击",
    " to Cpl Attack]": " Cpl 攻击]",
    " to Sgt Attack": " Sgt 攻击",
    " to Sgt Attack]": " Sgt 攻击]",
    " to SSgt Attack": " SSgt 攻击",
    " to SSgt Attack]": " SSgt 攻击]",
    " to Pvt Attack": " Pvt 攻击",
    " to Pvt Attack]": " Pvt 攻击]",
    " Approval]": " 认可]",
    " Mechanized Division": "机械化师",
    " Airborne Division": " 空降师",
    " Infantry Division": " 步兵师",
    " Recon Division": " 侦察部",
    " Motorized Division": " 机动事业部",
    " Armored Division": " 装甲师",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^Bravo\-([\d\.,]+)$/,
    /^Alpha\-([\d\.,]+)$/,
    /^Charlie\-([\d\.,]+)$/,
    /^Echo\-([\d\.,]+)$/,
    /^Delta\-([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^You have completed (.+) achievements$/, '您已完成 $1 成就'],
    [/^Fabricate (.+) Anti-Tank Gun \| Cost: (.+)$/, '制造 $1 反坦克炮 \| 成本：$2'],
    [/^Fabricate (.+) Artillery Gun \| Cost: (.+)$/, '制造 $1 火炮 \| 成本：$2'],
    [/^Fabricate (.+) Infantry Equipment \| Cost: (.+)$/, '制造 $1 步兵装备 \| 成本：$2'],
    [/^Fabricate (.+) Transport \| Cost: (.+)$/, '制造 $1 交通工具 \| 成本：$2'],
    [/^Hire (.+) Maj \| Cost: (.+) Medals$/, '雇佣 $1 少校 \| 成本：$2 勋章'],
    [/^Hire (.+) 1st Lt \| Cost: (.+) Medal$/, '雇佣 $1 1st 中尉 \| 成本：$2 勋章'],
    [/^Hire (.+) 1st Lt \| Cost: (.+) Medals$/, '雇佣 $1 1st 中尉 \| 成本：$2 勋章'],
    [/^Hire (.+) 2nd Lt \| Cost: (.+) Medal$/, '雇佣 $1 2nd 中尉 \| 成本：$2 勋章'],
    [/^Hire (.+) 2nd Lt \| Cost: (.+) Medals$/, '雇佣 $1 2nd 中尉 \| 成本：$2 勋章'],
    [/^Hire (.+) Cpt \| Cost: (.+) Medal$/, '雇佣 $1 队长 \| 成本：$2 勋章'],
    [/^Hire (.+) Cpt \| Cost: (.+) Medals$/, '雇佣 $1 队长 \| 成本：$2 勋章'],
    [/^Enlist (.+) CPL \| Cost: (.+) Infantry Equipment$/, '征募 $1 CPL \| 成本：$2 步兵装备'],
    [/^Enlist (.+) Cpl \| Cost: (.+) Infantry Equipment$/, '征募 $1 CPL \| 成本：$2 步兵装备'],
    [/^Enlist (.+) PVT \| Cost: (.+) Infantry Equipment$/, '征募 $1 PVT \| 成本：$2 步兵装备'],
    [/^Enlist (.+) Pvt \| Cost: (.+) Infantry Equipment$/, '征募 $1 PVT \| 成本：$2 步兵装备'],
    [/^Enlist (.+) SSGT \| Cost: (.+) Infantry Equipment$/, '征募 $1 上士 \| 成本：$2 步兵装备'],
    [/^Enlist (.+) SSgt \| Cost: (.+) Infantry Equipment$/, '征募 $1 上士 \| 成本：$2 步兵装备'],
    [/^Enlist (.+) SGT \| Cost: (.+) Infantry Equipment$/, '征募 $1 中士 \| 成本：$2 步兵装备'],
    [/^Enlist (.+) Sgt \| Cost: (.+) Infantry Equipment$/, '征募 $1 中士 \| 成本：$2 步兵装备'],
    [/^Acquire Funding \((.+) \| (.+) Approval\)$/, '获得资金（$1 \| $2 认可）'],
    [/^Colonel \=\=Progress to promotion: (.+) Medals\)\=\> Bridgadier General$/, '上校 \=\=晋升进度：$1 勋章）\=\> 准将'],
    [/^Colonel \=\=Progress to promotion: (.+)\=\> Bridgadier General$/, '上校 \=\=晋升进度：$1\=\> 准将'],
    [/^(.+) has won (.+) battles GG!$/, '$1 赢得了 $2 场战斗GG！'],
    [/^Delta\-(.+): Win (.+) Battle$/, 'Delta\-$1：赢得 $2 场战斗'],
    [/^Deployed at (.+) Wins$/, '部署在 $1 场胜利'],
    [/^Rewards: Medals: (.+) \| Approval: (.+) \| Morale (.+)$/, '奖励：勋章：$1 \| 认可：$2 \| 士气 $3'],
    [/^Total Wins: (.+) \| Difficulty Scale (.+)$/, '总胜数：$1 \| 难度比例 $2'],
    [/^Rewards: (.+) Medals \| (.+) Approval$/, '奖励：$1 勋章 \| $2 认可'],
    [/^You have defeated the enemy and earned (.+) Medals and (.+) Approval$/, '您已击败敌人并获得 $1 勋章和 $2 认可'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^The (.+) Airborne Division is far superior to you$/, '第 $1 空降师远胜于你'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) Medals$/, '成本：$1 勋章'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);