const lessons = [
  {
    day: 1,
    kicker: "FOUNDATION / DAY 01",
    title: "认识你的电脑",
    summary: "今天先建立安全感：知道电脑各部分在做什么，并完成一次完整的开机、打开程序和关机流程。",
    duration: "60 分钟",
    goals: ["说出屏幕、键盘、触控板和电源键的作用", "打开并关闭记事本", "用正确方式关机，不直接拔电源"],
    concepts: [
      ["硬件", "你能摸到的部分，例如屏幕、键盘、处理器和电池。"],
      ["软件", "电脑里运行的程序，例如浏览器、记事本和播放器。"],
      ["桌面", "开机进入 Windows 后看到的工作区域，图标是程序或文件的入口。"],
      ["电源", "短按通常是唤醒，关机要从开始菜单选择“关机”，不要强制断电。"]
    ],
    steps: [
      ["找到电源键", "观察键盘右上角或机身侧边，带有电源符号的按键就是电源键。连接充电器后短按一次。", "已找到"],
      ["认识桌面", "等 Windows 完全进入后，观察底部任务栏、左下角开始按钮和桌面上的图标。不要急着双击陌生图标。", "我看到了"],
      ["打开记事本", "点击开始按钮，输入“记事本”，按 Enter。打开后输入自己的名字，再用右上角关闭按钮关闭窗口。", "试试看"],
      ["正常关机", "再次打开开始菜单，点击电源图标，选择“关机”。等待屏幕完全熄灭再合上盖子。", "完成关机"]
    ],
    practice: {
      title: "第一次完整流程",
      intro: "请把下面的每一步真实做一遍，完成后再勾选。",
      tasks: ["连接充电器并确认电脑正在充电", "打开记事本，输入一行文字后关闭", "从开始菜单选择“关机”，等待电脑完全关闭"],
      challenge: "小挑战：找出键盘上的 F、J 键。它们通常有小凸起，是盲打时定位左右手食指的位置。"
    },
    quiz: [
      ["什么是软件？", ["屏幕和键盘", "电脑中运行的程序", "电源适配器"], 1, "浏览器、记事本等可以运行的程序都属于软件。"],
      ["最安全的关机方式是？", ["直接合上盖子", "长按电源键", "从开始菜单选择关机"], 2, "正常关机会让 Windows 保存状态并关闭程序。"],
      ["桌面图标更像什么？", ["进入程序或文件的入口", "电脑的电池", "网络密码"], 0, "双击图标通常会打开对应的程序或文件。"]
    ]
  },
  {
    day: 2,
    kicker: "WINDOWS / DAY 02",
    title: "掌握窗口和快捷键",
    summary: "窗口是 Windows 的基本工作单元。今天练习同时打开多个程序，并用快捷键让操作更快。",
    duration: "60 分钟",
    goals: ["最大化、最小化和调整窗口", "在两个程序之间切换", "使用复制、粘贴、撤销等高频快捷键"],
    concepts: [["窗口", "每个程序打开后都有自己的边框和标题栏。"], ["任务栏", "底部区域会显示正在运行的程序，点击图标就能切换。"], ["快捷键", "同时按下多个键完成命令，例如 Ctrl+C 复制。"], ["设置", "开始菜单里的齿轮图标可调整显示、声音和网络。"]],
    steps: [["打开两个窗口", "同时打开记事本和浏览器。注意每个程序的窗口标题和任务栏图标。", "已打开"], ["练习窗口按钮", "分别点击右上角的最小化、最大化和关闭按钮，观察窗口发生什么变化。", "练习按钮"], ["练习切换", "按住 Alt 再连续按 Tab，在记事本和浏览器之间切换。", "切换窗口"], ["记住四个快捷键", "在记事本里输入文字，练习 Ctrl+A 全选、Ctrl+C 复制、Ctrl+V 粘贴、Ctrl+Z 撤销。", "记住了"]],
    practice: { title: "窗口整理挑战", intro: "把两个窗口安排成适合对照学习的样子。", tasks: ["让浏览器和记事本同时可见", "用 Alt+Tab 在两个程序间切换三次", "在记事本中完成一次复制、粘贴和撤销"], challenge: "小挑战：按 Win+向左箭头，把当前窗口贴到屏幕左侧；再选择另一个窗口填满右侧。" },
    quiz: [["Alt+Tab 的作用是？", ["关闭电脑", "切换正在运行的窗口", "打开设置"], 1, "它会在已打开的窗口之间循环切换。"], ["Ctrl+Z 通常表示？", ["撤销上一步操作", "保存文件", "放大文字"], 0, "发现误操作时，先试试 Ctrl+Z。"], ["任务栏主要显示？", ["正在运行的程序和系统状态", "电脑内部零件", "所有网页密码"], 0, "任务栏是快速切换程序和查看系统状态的地方。"]]
  },
  {
    day: 3,
    kicker: "FILES / DAY 03",
    title: "建立你的文件秩序",
    summary: "文件管理是大学学习的地基。今天建立一个清晰的“大学学习”文件夹，并学会找回资料。",
    duration: "60 分钟",
    goals: ["理解文件、文件夹和路径", "完成新建、重命名、复制、移动和删除", "用搜索快速找回文件"],
    concepts: [["文件", "一份具体内容，例如照片、文档、PDF 或程序。"], ["文件夹", "装文件的容器，可以继续套文件夹。"], ["路径", "描述文件在哪里，例如“文档\大学学习\第 1 天”。"], ["回收站", "删除的普通文件会暂时放在这里，误删时可以还原。"]],
    steps: [["打开文件资源管理器", "按 Win+E，左侧找到“文档”。这里适合存放自己的学习资料。", "打开资源管理器"], ["建立层级", "在文档中创建“大学学习”，再创建“电脑课”和“Python”两个子文件夹。", "创建文件夹"], ["保存练习文件", "打开记事本，输入“我的第一份电脑课笔记”，另存为到“电脑课”文件夹，文件名写成 Day01-笔记.txt。", "保存笔记"], ["复制、移动和恢复", "右键文件分别试试复制和移动；再删除一个测试文件，打开回收站把它还原。", "整理一次"]],
    practice: { title: "资料库搭建", intro: "把下面这套结构真实建出来，它会成为接下来 15 天的学习空间。", tasks: ["在文档中建立 大学学习\电脑课、大学学习\Python", "把 Day01-笔记.txt 保存进电脑课文件夹", "搜索 Day01-笔记.txt，并从回收站还原一个测试文件"], challenge: "小挑战：给文件名加上日期或版本号，例如“Day03-文件练习-v1”，以后更容易找到最新版本。" },
    quiz: [["路径用来描述什么？", ["文件所在的位置", "屏幕的亮度", "电池的容量"], 0, "路径像地址，告诉你文件位于哪一层文件夹。"], ["删除的普通文件先去了哪里？", ["永久消失", "回收站", "浏览器下载页"], 1, "清空回收站后才更难恢复，所以删除前要确认。"], ["最适合大学资料的命名方式是？", ["新建文档(7)", "aaaa", "课程-日期-内容"], 2, "有信息量的名字能显著降低寻找成本。"]]
  },
  {
    day: 4,
    kicker: "INPUT / DAY 04",
    title: "输入、复制与截图",
    summary: "今天把键盘变成可靠的工具：练习中文输入、常见标点、剪贴板和截图。",
    duration: "60 分钟",
    goals: ["用拼音输入中文和常见标点", "理解剪贴板的一次复制机制", "截取并保存当前窗口或屏幕区域"],
    concepts: [["输入法", "把键盘按键转换成中文、英文或符号的工具。"], ["剪贴板", "复制或剪切的内容会临时放在这里，下一次复制会覆盖它。"], ["截图", "把屏幕当前画面保存成图片，Win+Shift+S 可选择区域。"], ["光标", "文字输入时闪烁的竖线，表示下一字符会出现的位置。"]],
    steps: [["切换输入法", "按 Win+空格，在中文和英文键盘之间切换。打开记事本，输入一句中文。", "输入中文"], ["练习标点", "用中文输入法输入逗号、句号和问号，再切到英文输入法输入文件名。", "练习标点"], ["使用剪贴板", "选中一句话按 Ctrl+C，移动光标后按 Ctrl+V 粘贴两次；再用 Ctrl+X 试试剪切。", "复制粘贴"], ["截取区域", "按 Win+Shift+S，拖出一个区域，点击右下角通知，再把截图保存到电脑课文件夹。", "截一张图"]],
    practice: { title: "制作一张操作卡", intro: "用记事本写下四个快捷键，再把这份卡片截图保存。", tasks: ["输入并保存一段 50 字左右的中文文字", "完成复制、剪切、粘贴各一次", "用 Win+Shift+S 截取一块屏幕并保存"], challenge: "小挑战：在浏览器和记事本之间复制一段文字，观察不同程序如何处理同一份剪贴板内容。" },
    quiz: [["Win+Shift+S 通常做什么？", ["截取屏幕区域", "关机", "打开回收站"], 0, "它会调出 Windows 截图工具。"], ["下一次复制会怎样？", ["把剪贴板内容替换掉", "自动关机", "复制到所有文件夹"], 0, "剪贴板一般只保留你最近复制或剪切的内容。"], ["输入文件名时更适合使用？", ["中文输入法", "英文输入法", "不需要键盘"], 1, "英文、数字和短横线适合文件名，也便于搜索。"]]
  },
  {
    day: 5,
    kicker: "WEB / DAY 05",
    title: "浏览器与互联网",
    summary: "浏览器是你的资料入口。今天学习搜索、标签页、收藏和下载，同时建立第一道安全判断。",
    duration: "60 分钟",
    goals: ["理解网址、搜索词和标签页", "判断搜索结果是否值得信任", "安全下载并找到下载的文件"],
    concepts: [["网址", "浏览器地址栏里的地址，通常以 https:// 开头。"], ["搜索词", "告诉搜索引擎你想找什么，越具体越容易得到好结果。"], ["标签页", "一个浏览器窗口里的多个页面，可以用 Ctrl+T 新建。"], ["下载", "把网络上的文件保存到电脑；下载前先确认来源和文件类型。"]],
    steps: [["认识地址栏", "打开浏览器，点击顶部地址栏，输入一个你熟悉的官方网站地址。地址栏也可以直接作为搜索框。", "打开网址"], ["搜索一个问题", "搜索“大学新生电脑文件整理方法”，对比前三个结果的来源、日期和内容。", "搜索资料"], ["管理标签页", "用 Ctrl+T 新建标签页，Ctrl+W 关闭，Ctrl+Shift+T 恢复刚关闭的标签页。", "管理标签"], ["找到下载文件", "下载一个来自可信官网的 PDF，按 Ctrl+J 查看下载记录，再在文件资源管理器的“下载”中找到它。", "找回下载"]],
    practice: { title: "搜索与判断", intro: "完成一次小型资料检索，不要只看第一个结果。", tasks: ["用三个不同关键词搜索同一个问题", "打开两个来源，记录作者、日期和网站域名", "在下载记录和下载文件夹中找到一个 PDF"], challenge: "小挑战：看到“免费领取”“立即输入验证码”等字样时，先关闭页面，不要提交个人信息。" },
    quiz: [["地址栏还可以用来做什么？", ["直接搜索关键词", "清理键盘", "显示电池内部结构"], 0, "现代浏览器会把非网址文字交给搜索引擎。"], ["一个可信资料来源通常有？", ["作者、日期和清晰来源", "只有巨大标题", "要求你先输入验证码"], 0, "来源信息越完整，越方便你核查。"], ["Ctrl+Shift+T 的用途是？", ["恢复刚关闭的标签页", "打开任务管理器", "保存 PDF"], 0, "误关页面时可以用它恢复。"]]
  },
  {
    day: 6,
    kicker: "SECURITY / DAY 06",
    title: "账号与电脑安全",
    summary: "安全不是吓自己，而是养成几个稳定动作：独立密码、双重验证、识别诱导和及时更新。",
    duration: "60 分钟",
    goals: ["为不同服务使用不同密码", "识别常见钓鱼诱导", "知道 Windows Defender 和更新的作用"],
    concepts: [["密码管理", "密码越长越好，重要账号不要复用同一个密码。"], ["双重验证", "除密码外再用手机或验证器确认身份。"], ["钓鱼", "伪装成学校、银行或平台，诱导你点击链接或交出信息。"], ["更新", "修复已知漏洞并改善稳定性，通常应及时安装。"]],
    steps: [["检查密码习惯", "列出你使用的三个重要账号，确认它们没有共用完全相同的密码；不要把真实密码发给我。", "做一次检查"], ["学会看域名", "观察网址中真正的域名位置。拼写、后缀、https 和页面内容都要一起判断。", "看懂域名"], ["认识 Defender", "在 Windows 设置中搜索“Windows 安全中心”，查看病毒和威胁防护是否正常。", "查看安全中心"], ["建立更新习惯", "设置中搜索 Windows 更新，查看是否有待处理更新；更新前保存正在编辑的文件。", "查看更新"]],
    practice: { title: "安全判断练习", intro: "下面三项都完成后，你会有一套可重复的安全动作。", tasks: ["为一个重要账号开启双重验证（如果服务支持）", "检查 Windows 安全中心的防护状态", "在不打开链接的前提下，比较两个网址的域名"], challenge: "小挑战：任何人通过聊天索要密码、验证码或远程控制权限，都先停止沟通并通过官方渠道核实。" },
    quiz: [["重要账号的密码应该？", ["全部使用同一个", "尽量独立且足够长", "只用生日"], 1, "密码复用会让一个泄露影响多个账号。"], ["钓鱼信息最常见的目的？", ["帮助你学习", "诱导你交出信息或点击危险链接", "自动整理文件"], 1, "紧迫感和恐吓是常见诱导手段。"], ["系统更新通常为什么重要？", ["修复漏洞和改善稳定性", "让键盘变重", "删除所有文件"], 0, "更新前保存文件并使用官方更新入口即可。"]]
  },
  {
    day: 7,
    kicker: "SOFTWARE / DAY 07",
    title: "安装、卸载与更新软件",
    summary: "学会软件生命周期：从可信来源安装，确认权限，保持更新，不需要时干净卸载。",
    duration: "60 分钟",
    goals: ["区分官网、应用商店和可疑下载站", "读懂安装程序中的选项", "从设置中卸载软件"],
    concepts: [["来源", "优先选择开发者官网或 Microsoft Store，避开捆绑下载器。"], ["权限", "安装程序可能请求管理员权限，先确认软件确实来自你信任的来源。"], ["默认应用", "Windows 可以指定打开 PDF、网页等文件的默认程序。"], ["卸载", "设置 > 应用 > 已安装的应用，是最稳妥的卸载入口。"]],
    steps: [["确认来源", "在搜索结果中找到一个软件的官方网站，比较网址、开发者名称和下载按钮，不点击广告下载。", "查来源"], ["安装前阅读", "安装时选择自定义或仔细阅读每一页，取消不需要的附加软件和开机启动项。", "读安装项"], ["查看已安装应用", "打开设置 > 应用 > 已安装的应用，按名称或安装日期查看软件列表。", "查看列表"], ["练习卸载", "找到一个你确定不需要的测试软件（不要卸载系统组件），点击三点菜单 > 卸载。", "练习卸载"]],
    practice: { title: "软件体检", intro: "做一次不改变重要数据的软件体检。", tasks: ["找到一个软件的官方来源并记录开发者名称", "查看已安装应用列表，认出两个自己安装的软件", "确认一个软件是否有待更新提示"], challenge: "小挑战：安装窗口出现“推荐安装浏览器/清理工具”时，不要盲目点下一步，先读清每个勾选框。" },
    quiz: [["安装软件优先选择？", ["搜索结果里的第一个广告", "开发者官网或 Microsoft Store", "陌生网盘链接"], 1, "来源比下载速度更重要。"], ["安装时看到附加软件勾选框应该？", ["先阅读并取消不需要的选项", "全部勾上", "直接关机"], 0, "认真阅读可以减少捆绑软件。"], ["Windows 推荐的卸载入口是？", ["设置 > 应用 > 已安装的应用", "桌面右键 > 刷新", "回收站"], 0, "从设置卸载更容易清理注册信息和快捷方式。"]]
  },
  {
    day: 8,
    kicker: "DOCUMENTS / DAY 08",
    title: "做一份清晰的学习笔记",
    summary: "文档的核心不是装饰，而是让别人能快速读懂。今天练习标题、层级、列表、保存和导出 PDF。",
    duration: "60 分钟",
    goals: ["使用标题和段落组织内容", "插入列表并进行基础排版", "保存源文件并导出 PDF"],
    concepts: [["源文件", "可以继续编辑的原始文档，例如 .docx 或 WPS 文档。"], ["PDF", "适合提交和分享的固定版式文件，接收方打开后不容易变形。"], ["样式", "标题、正文等预设格式，比逐字调字体更稳定。"], ["版本", "文件名加日期或 v1、v2，能避免覆盖重要修改。"]],
    steps: [["建立文档", "打开 Word、WPS 或其他文档软件，新建空白文档，先保存为 Day08-学习笔记。", "新建文档"], ["组织结构", "输入标题、三个小标题和正文；用编号列表写出今天学到的三个要点。", "排版结构"], ["加入信息", "在文档底部写上日期和资料来源，检查标题层级、行距和拼写。", "补充信息"], ["导出 PDF", "先保存可编辑源文件，再使用“导出/另存为 PDF”，打开 PDF 检查分页和中文显示。", "导出 PDF"]],
    practice: { title: "一页学习笔记", intro: "围绕“我今天学会的三个电脑操作”写一页笔记。", tasks: ["使用一个主标题和至少三个小标题", "加入一个编号列表和一个项目符号列表", "同时保存源文件和 PDF 两个版本"], challenge: "小挑战：把文件命名为“Day08-学习笔记-日期”，并保存到电脑课文件夹。" },
    quiz: [["为什么要保留源文件？", ["之后还可以编辑", "让电脑更快", "自动获得密码"], 0, "PDF 适合提交，源文件适合继续修改。"], ["更稳定的排版方式是？", ["每行手动调字号", "使用标题和正文样式", "全部使用空格对齐"], 1, "样式能保持层级清晰，也更容易修改。"], ["导出 PDF 后应当？", ["直接删除源文件", "打开检查分页和内容", "重启路由器"], 1, "快速检查可以避免提交空白页或错位内容。"]]
  },
  {
    day: 9,
    kicker: "SPREADSHEETS / DAY 09",
    title: "用表格处理数据",
    summary: "表格把零散信息变成可计算的结构。今天从单元格、公式、排序和筛选开始。",
    duration: "60 分钟",
    goals: ["理解行、列和单元格", "写出加法和平均值公式", "按条件排序并筛选数据"],
    concepts: [["单元格", "行和列交叉的位置，每个格子都有地址，如 A1。"], ["公式", "以 = 开头的计算表达式，例如 =SUM(B2:B5)。"], ["引用", "公式引用其他单元格，修改原始数据后结果会自动更新。"], ["筛选", "暂时隐藏不符合条件的行，不会删除原始数据。"]],
    steps: [["输入小表格", "新建表格，在 A1:C5 输入课程、平时分、期末分。第一行写表头。", "输入数据"], ["计算总评", "在 D1 写总评，在 D2 输入 =B2*0.4+C2*0.6，然后向下填充。", "写一个公式"], ["排序", "选中整张表，按总评从高到低排序，注意要让软件扩展到整行。", "排序数据"], ["筛选", "打开筛选，试试只显示总评大于 80 的课程；清除筛选后数据仍然存在。", "筛选数据"]],
    practice: { title: "成绩小表格", intro: "用虚构数据做表，不要录入真实隐私信息。", tasks: ["创建至少 5 行课程数据", "计算每门课的加权总评", "完成一次排序和一次筛选"], challenge: "小挑战：用 =AVERAGE(范围) 算出平均分，并给低于 60 的单元格加醒目颜色。" },
    quiz: [["单元格地址 A1 表示？", ["第 A 列第 1 行", "第 1 列第 A 行", "一个文件夹"], 0, "列通常用字母表示，行用数字表示。"], ["公式通常以什么开头？", ["#", "=", "@"], 1, "等号告诉表格软件后面的内容需要计算。"], ["筛选会不会删除不符合条件的数据？", ["会永久删除", "不会，只是暂时隐藏", "会关闭文件"], 1, "清除筛选即可恢复全部行。"]]
  },
  {
    day: 10,
    kicker: "PRESENT / DAY 10",
    title: "演示文稿与大学任务",
    summary: "从写作到展示，再到提交文件。今天练习一页一观点、图文层级和发送附件。",
    duration: "60 分钟",
    goals: ["做出结构清晰的 3 页 PPT", "控制每页信息量", "正确提交附件并检查文件格式"],
    concepts: [["一页一观点", "每张幻灯片只服务一个主要结论，听众更容易跟上。"], ["视觉层级", "标题最大，说明次之，细节最小，颜色只用来强调。"], ["附件", "发送邮件时要确认文件已上传，并检查文件名和大小。"], ["云盘", "适合在不同设备访问文件，但重要资料仍要保留本机或备份。"]],
    steps: [["搭建三页结构", "第 1 页写主题和姓名，第 2 页写三个要点，第 3 页写总结和下一步。", "搭建结构"], ["减少文字", "把长段落改成短句和关键词，保证远处也能读到标题。", "压缩文字"], ["检查展示", "从头播放一次，检查动画是否干扰内容、图片是否清晰、字体是否超出边界。", "播放检查"], ["模拟提交", "新建一封草稿邮件，添加 PDF 或 PPT 附件，确认附件名称后再删除草稿。不要发送给陌生人。", "模拟提交"]],
    practice: { title: "三页自我介绍", intro: "用虚构或公开信息制作三页“我的大学学习计划”。", tasks: ["完成三页内容，每页都有清晰标题", "播放检查一次，并修正超出边界的文字", "把演示文稿导出为 PDF，检查附件名称"], challenge: "小挑战：让同学只看标题就能说出每页的主要结论。" },
    quiz: [["一页一观点的好处是？", ["信息更容易理解", "文件一定更大", "不需要标题"], 0, "清晰的单一重点比堆满文字更有效。"], ["发送附件前应当？", ["确认上传完成和文件名", "把密码写进文件名", "删除源文件"], 0, "附件没上传完成是最常见的提交失误之一。"], ["云盘能解决什么问题？", ["在不同设备访问资料", "替你完成作业", "保证永远不丢文件"], 0, "云盘是同步方式，重要资料仍建议保留备份。"]]
  },
  {
    day: 11,
    kicker: "TROUBLESHOOT / DAY 11",
    title: "遇到问题先排查",
    summary: "电脑出问题时不要乱点。今天建立一条从简单到复杂的排查顺序，并认识任务管理器。",
    duration: "60 分钟",
    goals: ["用重启、检查连接和更新处理常见故障", "查看任务管理器中的 CPU、内存和磁盘", "知道何时应该求助专业人员"],
    concepts: [["重启", "重新加载系统和程序状态，能解决很多临时故障。"], ["任务管理器", "查看程序是否卡住以及资源使用情况的工具。"], ["资源", "CPU、内存、磁盘和网络是程序运行时使用的主要资源。"], ["记录", "求助时提供错误原文、发生时间和刚才的操作，效率更高。"]],
    steps: [["先做安全检查", "确认电脑有电、网络线或 Wi-Fi 正常，保存正在编辑的文件，不要立刻强制关机。", "检查基础"], ["查看任务管理器", "按 Ctrl+Shift+Esc，观察哪个程序占用 CPU 或内存较高。不要结束不认识的系统进程。", "看资源"], ["按顺序排查", "关闭卡住的程序，重新打开；仍有问题就重启；再检查更新和磁盘空间。", "走一遍顺序"], ["学会描述问题", "记录“什么时候发生、做了什么、看到什么提示、重启后是否还存在”。", "写故障记录"]],
    practice: { title: "排查演练", intro: "不制造故障，只练习工具和记录方式。", tasks: ["打开任务管理器并找到 CPU、内存、磁盘列", "查看 Windows 设置中的存储空间", "在记事本写一份四行故障记录模板"], challenge: "小挑战：以后遇到弹窗，先截屏或记下原文，再搜索完整错误信息，不要只搜索“电脑坏了”。" },
    quiz: [["程序卡住时第一步更合适是？", ["保存其他文件并尝试关闭或等待", "拔掉电源", "删除系统文件"], 0, "先保护未保存的工作，再处理程序。"], ["任务管理器可以查看？", ["程序和资源使用情况", "家里的电费", "所有账号密码"], 0, "CPU、内存和磁盘列能帮助定位卡顿原因。"], ["向别人求助时最有用的是？", ["完整错误原文和发生步骤", "只说电脑坏了", "隐藏所有细节"], 0, "上下文越完整，越容易复现和解决。"]]
  },
  {
    day: 12,
    kicker: "COMMAND LINE / DAY 12",
    title: "用 PowerShell 说清路径",
    summary: "命令行不是神秘黑框，而是一种精确操作文件的方式。今天只掌握安全、可解释的基础命令。",
    duration: "60 分钟",
    goals: ["打开 PowerShell 并看懂当前路径", "使用 cd、dir、mkdir 完成文件夹操作", "知道命令执行前要核对目标路径"],
    concepts: [["命令行", "通过输入文字命令与系统交互，不等于编程本身。"], ["当前目录", "命令默认工作的文件夹，可以用 pwd 查看。"], ["参数", "跟在命令后面的补充信息，例如 mkdir Python。"], ["Tab 补全", "输入路径开头后按 Tab，减少拼写错误。"]],
    steps: [["打开 PowerShell", "点击开始菜单，输入 PowerShell，打开普通用户窗口。看到闪烁光标就说明它在等待命令。", "打开终端"], ["查看位置", "输入 <code>pwd</code> 查看当前路径，再输入 <code>dir</code> 列出当前目录内容。", "看当前目录"], ["进入和返回", "输入 <code>cd 文档\大学学习</code>（如果名称不同，使用 Tab 补全），再用 <code>cd ..</code> 返回上一级。", "练习路径"], ["创建练习目录", "确认当前位于自己的学习目录后，输入 <code>mkdir TerminalPractice</code>，再用 <code>dir</code> 验证。", "创建目录"]],
    practice: { title: "安全终端练习", intro: "只在自己的学习文件夹里执行以下操作，先看路径再输入命令。", tasks: ["用 pwd 确认当前位置", "用 dir 查看内容并用 cd 进入电脑课文件夹", "创建 TerminalPractice 文件夹并用 dir 验证"], challenge: "小挑战：输入 <code>Get-Help mkdir</code> 查看命令帮助。不要运行来源不明的复制粘贴命令。" },
    quiz: [["pwd 用来做什么？", ["显示当前路径", "删除文件", "打开浏览器"], 0, "知道自己在哪里，是安全使用命令行的第一步。"], ["cd .. 通常表示？", ["进入上一级目录", "删除上一级目录", "复制全部文件"], 0, "两个点代表当前目录的父级。"], ["运行命令前最重要的习惯是？", ["确认当前路径和目标", "随便粘贴命令", "关闭显示器"], 0, "路径核对能避免误操作别人的文件。"]]
  },
  {
    day: 13,
    kicker: "PYTHON / DAY 13",
    title: "让 Python 运行起来",
    summary: "今天正式写第一行代码：安装 Python 和 VS Code，理解文件、运行和输入输出之间的关系。",
    duration: "60 分钟",
    goals: ["从官方来源安装 Python 和 VS Code", "创建并运行 .py 文件", "使用变量、input 和 print"],
    concepts: [["解释器", "把 Python 代码逐步翻译给电脑执行的程序。"], ["脚本", "保存为 .py 的文本文件，里面写着 Python 指令。"], ["变量", "给数据起一个名字，后面可以重复使用。"], ["输入输出", "input 获取信息，print 把结果显示在屏幕上。"]],
    steps: [["确认安装来源", "只从 python.org 和 code.visualstudio.com 获取安装程序。安装时勾选“Add Python to PATH”后再继续。", "确认来源"], ["建立项目文件夹", "在“文档\大学学习\Python”中创建 Day13 文件夹，用 VS Code 打开这个文件夹。", "建立项目"], ["写第一段代码", "新建 hello.py，输入下面示例，保存后点击右上角运行按钮，观察终端输出。", "运行代码"], ["改动再运行", "把名字改成自己的昵称，再运行一次。看到不同结果，就说明你已经完成了第一次程序修改。", "修改程序"]],
    code: { filename: "hello.py", content: 'name = input("你的名字是：")\nprint("你好，" + name + "！")\nprint("欢迎开始 Python 学习。")' },
    practice: { title: "第一份 Python 作品", intro: "在自己的 Day13 文件夹中创建 hello.py，并至少修改一处文字。", tasks: ["从官方来源安装并打开 Python 或 VS Code", "成功运行 hello.py 并看到输出", "修改程序中的问候语，再运行一次"], challenge: '小挑战：增加一行 <code>print("今天是我的第 13 天")</code>，观察每一行输出的顺序。' },
    quiz: [[".py 文件通常是什么？", ["Python 脚本", "图片文件", "系统驱动"], 0, "扩展名 .py 表示里面通常保存 Python 代码。"], ["input 的作用是？", ["获取用户输入", "关机", "创建文件夹"], 0, "input 会暂停程序，等待用户输入文字。"], ["变量更像什么？", ["给数据起的名字", "电源插头", "网页地址"], 0, "变量名让代码可以引用和修改数据。"]]
  },
  {
    day: 14,
    kicker: "PYTHON / DAY 14",
    title: "让程序做判断和重复",
    summary: "程序的力量来自逻辑。今天学习条件、循环、列表和函数，完成一个可修改的小练习。",
    duration: "60 分钟",
    goals: ["用 if/else 做条件判断", "用 for 重复处理数据", "用列表保存多个值并写一个函数"],
    concepts: [["条件", "if 让程序根据真假选择不同分支。"], ["循环", "for 让同一段操作依次处理多个数据。"], ["列表", "按顺序保存多个值，例如一组课程成绩。"], ["函数", "把一段有名字的逻辑封装起来，需要时重复调用。"]],
    steps: [["运行判断", "把下面示例保存为 score.py，输入不同分数，观察 if 和 else 的结果。", "运行判断"], ["读懂循环", "观察 for score in scores：程序会把列表里的每个分数依次交给变量 score。", "读懂循环"], ["改变数据", "把列表里的分数换成三组自己的虚构数据，再运行。", "改数据"], ["封装函数", "尝试把判断部分放进函数 check_score(score)，在主程序里调用它。", "写函数"]],
    code: { filename: "score.py", content: 'scores = [88, 76, 92]\n\nfor score in scores:\n    if score >= 60:\n        print(score, "及格")\n    else:\n        print(score, "需要复习")\n\ndef average(numbers):\n    return sum(numbers) / len(numbers)\n\nprint("平均分：", average(scores))' },
    practice: { title: "成绩检查器", intro: "把示例改成你能解释的版本，重点是理解每一行，不是追求代码长。", tasks: ["修改 scores 列表并运行", "加入一个低于 60 的分数，观察输出", "解释 average 函数返回的是什么"], challenge: "小挑战：给分数增加等级判断：90 以上 A，80–89 B，其余 C。" },
    quiz: [["if 用来做什么？", ["根据条件选择分支", "保存图片", "安装软件"], 0, "if 后面的条件为真时，执行对应代码。"], ["for 循环最适合？", ["重复处理一组数据", "修改系统注册表", "输入密码"], 0, "循环可以避免为每个数据重复手写相同代码。"], ["函数的好处是？", ["封装可重复使用的逻辑", "自动连接 Wi-Fi", "替代电脑硬件"], 0, "给逻辑命名后，代码更容易理解和复用。"]]
  },
  {
    day: 15,
    kicker: "CAPSTONE / DAY 15",
    title: "完成你的第一个小项目",
    summary: "把 15 天的知识串起来：创建文件、运行 Python、调试错误，并为大学生活留下可继续扩展的作品。",
    duration: "60 分钟",
    goals: ["独立拆分一个小问题", "完成并运行一个 Python 小项目", "知道接下来如何系统学习"],
    concepts: [["需求", "先说清楚程序要接收什么、处理什么、输出什么。"], ["调试", "让程序运行、观察错误、定位一行，再小步修改。"], ["迭代", "先完成能运行的版本，再逐步增加功能。"], ["学习路线", "基础语法后可以学习文件处理、数据分析、网页或自动化。"]],
    steps: [["写清需求", "项目：成绩计算器。输入三门成绩，计算平均分，并告诉用户是否达到 60 分。", "写需求"], ["拆成三块", "输入数据、计算平均值、输出判断。先让最小版本运行，再添加提示。", "拆分问题"], ["运行和调试", "输入正常数字，再故意输入一次不符合预期的内容，记录错误并逐行排查。", "调试一次"], ["留下下一步", "把项目保存到 Python 文件夹，写下三个想增加的功能，例如保存成绩、增加课程名、输出等级。", "保存作品"]],
    code: { filename: "grade_calculator.py", content: 'print("=== 成绩计算器 ===")\nfirst = float(input("第一门成绩："))\nsecond = float(input("第二门成绩："))\nthird = float(input("第三门成绩："))\n\naverage = (first + second + third) / 3\nprint("平均分：", round(average, 1))\n\nif average >= 60:\n    print("结果：达到及格线")\nelse:\n    print("结果：需要继续复习")' },
    practice: { title: "15 天结课项目", intro: "完成成绩计算器，或用同样结构做一个你真正感兴趣的微型工具。", tasks: ["先写出输入、处理、输出三步", "运行至少三次，使用不同的虚构成绩", "给程序增加一个自己的改动并保存"], challenge: "毕业挑战：把作品和一页学习笔记一起放进 Day15 文件夹，写下你接下来想学的方向。" },
    quiz: [["做项目时最稳妥的顺序是？", ["先做最小可运行版本，再逐步增加功能", "一次写完所有功能", "先删除 Python"], 0, "小步迭代能更快发现问题，也更容易理解。"], ["调试时最有用的动作是？", ["观察完整错误信息并缩小范围", "反复重启不看提示", "删掉所有代码"], 0, "错误信息通常会告诉你文件、行号和问题类型。"], ["15 天之后适合怎样继续？", ["按兴趣选择方向并持续做小项目", "只背快捷键", "不再使用电脑"], 0, "持续完成小作品，比一次看完大量教程更有效。"]]
  }
];

const extraQuiz = {
  1: [
    ["打开不认识的桌面图标前应该？", ["先确认名称和来源", "把所有图标都双击一遍", "直接删除图标"], 0, "先确认入口对应的程序，避免误打开陌生文件。"],
    ["Alt+F4 通常会？", ["关闭当前窗口", "复制选中文字", "打开开始菜单"], 0, "它会关闭当前获得焦点的窗口，关闭前要先保存工作。"]
  ],
  2: [
    ["Win+D 的作用通常是？", ["显示桌面", "保存文档", "切换输入法"], 0, "再次按 Win+D 可以回到之前的窗口布局。"],
    ["把两个窗口并排的好处是？", ["方便对照资料", "自动删除文件", "让电脑关机"], 0, "并排窗口很适合一边看资料、一边做笔记。"]
  ],
  3: [
    ["复制一个文件后，原文件会怎样？", ["原文件仍然保留", "原文件自动删除", "原文件变成快捷方式"], 0, "复制会生成一份副本，移动才会改变原来的位置。"],
    ["搜索文件时最有用的线索是？", ["文件名、类型或所在位置", "屏幕颜色", "电池电量"], 0, "先回忆文件名、扩展名或大概位置，搜索会更快。"]
  ],
  4: [
    ["Ctrl+X 的作用是？", ["复制", "剪切", "撤销"], 1, "剪切会把内容放入剪贴板，粘贴后通常会从原位置移走。"],
    ["截图准备分享前应该？", ["不检查直接发送", "把所有密码也截进去", "检查是否包含隐私信息"], 2, "截图可能包含账号、通知或文件名，分享前要先检查。"]
  ],
  5: [
    ["下载的 .exe 文件通常是什么？", ["可执行或安装程序", "图片", "纯文本"], 0, "运行 .exe 前必须确认来源可信。"],
    ["网址中的 HTTPS 说明什么？", ["连接使用了加密传输", "网站永远不会骗人", "电脑已经离线"], 0, "HTTPS 是重要信号，但仍要结合域名和页面内容判断。"]
  ],
  6: [
    ["别人向你索要短信验证码时应该？", ["直接告诉对方", "拒绝提供并通过官方渠道核实", "把验证码发到群里"], 1, "验证码相当于临时钥匙，任何人都不应向你索要。"],
    ["密码管理器的主要作用是？", ["生成并保存独立密码", "自动公开密码", "关闭防病毒软件"], 0, "它可以减少重复密码和记忆负担，但主密码必须保护好。"]
  ],
  7: [
    ["搜索结果里的“高速下载”广告应该？", ["优先点击", "输入身份证后再点", "避开并寻找官方来源"], 2, "广告下载按钮可能捆绑额外软件，官方来源更可靠。"],
    ["更新软件前最好先？", ["保存正在编辑的文件", "删除旧文件夹", "关闭所有安全防护"], 0, "保存工作可以避免更新或重启时丢失内容。"]
  ],
  8: [
    ["PDF 最适合用来？", ["提交和分享固定版式的文档", "继续编辑复杂排版", "替代所有源文件"], 0, "提交 PDF 前仍应保留可编辑的源文件。"],
    ["Ctrl+S 通常表示？", ["搜索网页", "保存当前文件", "打开截图工具"], 1, "编辑过程中经常按 Ctrl+S，可以减少意外丢失。"]
  ],
  9: [
    ["把公式向下填充时，表格通常会？", ["按行调整相对引用", "删除全部数据", "关闭表格"], 0, "填充能快速套用同一计算逻辑，但要检查引用是否正确。"],
    ["对表格排序前最重要的是？", ["选中完整数据区域并确认是否有表头", "只选一个单元格", "先删除表头"], 0, "选完整区域能避免姓名、成绩等列错位。"]
  ],
  10: [
    ["演示文稿的正文文字最好？", ["短句、关键词且易于远距离阅读", "整页复制长文章", "全部使用最小字号"], 0, "演示时由你讲解细节，幻灯片保留结构和重点。"],
    ["提交作业附件前应该？", ["确认文件已上传且能正常打开", "只看文件图标颜色", "把文件改成无意义的名字"], 0, "上传完成和可打开是提交前的两个基本检查。"]
  ],
  11: [
    ["磁盘空间不足时可以先？", ["检查下载和回收站中的无用个人文件", "删除 Windows 文件夹", "格式化整块磁盘"], 0, "先处理自己确认不需要的文件，不要碰系统目录。"],
    ["什么时候才考虑强制关机？", ["程序稍慢时立刻强制关机", "看到广告弹窗时", "系统完全无响应且常规方式无效时"], 2, "强制关机可能丢失未保存内容，应作为最后手段。"]
  ],
  12: [
    ["dir 命令通常显示？", ["当前目录的内容", "电脑密码", "屏幕亮度"], 0, "它可以帮助你确认当前目录有哪些文件和文件夹。"],
    ["cd 命令主要用来？", ["切换当前目录", "删除系统", "打开摄像头"], 0, "cd 是 change directory 的缩写。"]
  ],
  13: [
    ["print 的作用是？", ["把内容显示到终端", "创建硬盘分区", "关闭 Python"], 0, "print 是最常用的输出函数之一。"],
    ["为什么常写 float(input(...))？", ["把输入的文字转换成小数", "把电脑关机", "把图片变成文件夹"], 0, "input 得到的是文字，计算成绩前需要转换为数字。"]
  ],
  14: [
    ["Python 列表的第一个位置通常是？", ["1", "0", "-1"], 1, "Python 使用从 0 开始的索引，第三个元素的索引是 2。"],
    ["return 在函数中通常表示？", ["把结果交还给调用者", "重复运行电脑", "删除函数"], 0, "return 可以结束函数并把一个值传出去。"]
  ],
  15: [
    ["拆分一个小项目时，最先要写清楚？", ["输入、处理和输出", "所有颜色细节", "最终宣传文案"], 0, "先明确程序接收什么、怎么处理、要得到什么结果。"],
    ["给项目增加新功能时，最稳妥的做法是？", ["一次加入很多功能", "每次只加一项并测试", "删除原来的可运行版本"], 1, "小步迭代更容易定位错误，也能保留可运行版本。"]
  ]
};

lessons.forEach((lesson) => lesson.quiz.push(...(extraQuiz[lesson.day] || [])));
lessons.forEach((lesson) => lesson.quiz.push(...((window.questionBankExtras && window.questionBankExtras[lesson.day]) || [])));

const STORAGE_KEY = "freshman-computer-course-v1";
const QUIZ_SIZE = 5;
const createDefaultSimulations = () => ({
  files: { folderCreated: false, fileName: "新建文本文档.txt", location: "下载", completed: false },
  browser: { parsed: false, url: "", protocol: "", host: "", path: "", completed: false },
  powershell: { step: 0, cwd: "C:\\Users\\Student", folderCreated: false, history: [], completed: false }
});
const createDefaultState = () => ({ schemaVersion: 4, assessmentVersion: 3, currentDay: 1, tab: "learn", stepDone: {}, taskDone: {}, answers: {}, quizResults: {}, quizSets: {}, completed: [], mastery: {}, reviewItems: {}, assistantHistory: [], notes: {}, simulations: createDefaultSimulations() });
let state = loadState();
let toastTimer;
let noteSaveTimer;

function recordOrEmpty(value) { return value && typeof value === "object" && !Array.isArray(value) ? value : {}; }

function hydrateState(saved) {
  const base = createDefaultState();
  const source = recordOrEmpty(saved);
  const assessmentChanged = Number(source.assessmentVersion) !== base.assessmentVersion;
  const simulations = createDefaultSimulations();
  const savedSimulations = recordOrEmpty(source.simulations);
  Object.keys(simulations).forEach(key => { simulations[key] = { ...simulations[key], ...recordOrEmpty(savedSimulations[key]) }; });
  const completed = Array.isArray(source.completed) ? [...new Set(source.completed.map(Number).filter(day => day >= 1 && day <= 15))] : [];
  return {
    ...base,
    ...source,
    schemaVersion: base.schemaVersion,
    assessmentVersion: base.assessmentVersion,
    currentDay: Math.min(15, Math.max(1, Number(source.currentDay) || 1)),
    tab: ["learn", "practice", "notes", "quiz"].includes(source.tab) ? source.tab : "learn",
    stepDone: recordOrEmpty(source.stepDone),
    taskDone: recordOrEmpty(source.taskDone),
    answers: assessmentChanged ? {} : recordOrEmpty(source.answers),
    quizResults: assessmentChanged ? {} : recordOrEmpty(source.quizResults),
    quizSets: assessmentChanged ? {} : recordOrEmpty(source.quizSets),
    completed,
    mastery: recordOrEmpty(source.mastery),
    reviewItems: assessmentChanged ? {} : recordOrEmpty(source.reviewItems),
    assistantHistory: Array.isArray(source.assistantHistory) ? source.assistantHistory.slice(0, 30) : [],
    notes: recordOrEmpty(source.notes),
    simulations
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return createDefaultState();
    return hydrateState(saved);
  } catch { return createDefaultState(); }
}

function persist() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function currentLesson() { return lessons[state.currentDay - 1]; }
function html(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function lessonKey(day, prefix) { return `${prefix}-${day}`; }
function isStepDone(day, index) { return Boolean(state.stepDone[lessonKey(day, index)]); }
function isTaskDone(day, index) { return Boolean(state.taskDone[lessonKey(day, index)]); }
function shuffled(values) {
  const result = [...values];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}
function createQuizSet(lesson, pinnedIndex) {
  const indices = lesson.quiz.map((_, index) => index);
  const pinned = Number.isInteger(Number(pinnedIndex)) && indices.includes(Number(pinnedIndex)) ? Number(pinnedIndex) : null;
  const remaining = shuffled(pinned === null ? indices : indices.filter(index => index !== pinned));
  return (pinned === null ? remaining : [pinned, ...remaining]).slice(0, QUIZ_SIZE);
}
function validQuizSet(lesson, set) {
  return Array.isArray(set) && set.length === QUIZ_SIZE && new Set(set).size === QUIZ_SIZE && set.every(index => Number.isInteger(index) && index >= 0 && index < lesson.quiz.length);
}
function ensureQuizSet(lesson) {
  if (validQuizSet(lesson, state.quizSets[lesson.day])) return state.quizSets[lesson.day];
  state.quizSets[lesson.day] = createQuizSet(lesson);
  state.answers[lesson.day] = [];
  state.quizResults[lesson.day] = [];
  persist();
  return state.quizSets[lesson.day];
}
function lessonQuizScore(day) {
  const lesson = lessons[day - 1];
  const set = lesson && state.quizSets[day];
  if (!lesson || !validQuizSet(lesson, set)) return 0;
  const results = state.quizResults[day] || [];
  return set.filter(index => results[index] === true).length;
}
function lessonReady(lesson) {
  const requiredCorrect = Math.ceil(QUIZ_SIZE * 0.6);
  return lessonQuizScore(lesson.day) >= requiredCorrect && lesson.practice.tasks.every((_, i) => isTaskDone(lesson.day, i));
}
function isComplete(day) { return state.completed.includes(day); }
function unresolvedReviews() { return Object.values(state.reviewItems || {}).filter(item => !item.resolved); }
function simulationCompletedCount() { return Object.values(state.simulations || {}).filter(item => item && item.completed).length; }
function masteryLabel(value) {
  return ({ needs_review: "需要复习", with_help: "有提示能完成", independent: "可以独立完成" })[value] || "尚未自评";
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function renderSidebar() {
  const list = document.getElementById("lessonList");
  list.innerHTML = lessons.map(lesson => `
    <button class="day-item ${lesson.day === state.currentDay ? "current" : ""} ${isComplete(lesson.day) ? "done" : ""}" data-day="${lesson.day}" type="button">
      <span class="day-number">${lesson.day}</span>
      <span class="day-item-text"><strong>${lesson.title}</strong><span>${lesson.kicker.split(" / ")[0]}</span></span>
      ${isComplete(lesson.day) ? '<span class="day-status">✓</span>' : ""}
    </button>`).join("");
  list.querySelectorAll(".day-item").forEach(button => button.addEventListener("click", () => {
    state.currentDay = Number(button.dataset.day); state.tab = "learn"; persist(); render();
    document.getElementById("sidebar").classList.remove("open");
  }));
  const completed = state.completed.length;
  document.getElementById("sidebarProgress").textContent = `${completed} / 15`;
  const percent = Math.round(completed / lessons.length * 100);
  document.getElementById("topProgressLabel").textContent = `${percent}%`;
  document.getElementById("topProgressBar").style.width = `${percent}%`;
  document.getElementById("reviewCount").textContent = unresolvedReviews().length;
  document.getElementById("labCount").textContent = `${simulationCompletedCount()}/3`;
}

function renderVisual(lesson) {
  let content = "";
  let caption = "用一个小示意，把今天的概念和真实操作连起来。";
  if (lesson.day <= 2) {
    content = `<div class="desktop-visual"><div class="desktop-wallpaper"></div><div class="desktop-window"><div class="window-bar"><span>${lesson.day === 1 ? "记事本" : "学习窗口"}</span><span class="window-dots"><i></i><i></i><i></i></span></div><div class="window-body"><div class="window-line"></div><div class="window-line short"></div><div class="window-line"></div></div></div><div class="desktop-taskbar"><button title="开始菜单">⊞</button><span>◉</span><span>▣</span><span>◌</span></div></div>`;
    caption = lesson.day === 1 ? "桌面是起点，窗口是工作区域，任务栏负责切换。" : "三个按钮管理窗口，任务栏帮你在程序之间切换。";
  } else if (lesson.day === 3) {
    content = `<div class="folder-visual"><div class="folder-node"><strong>▰</strong><span>文档</span></div><span class="folder-arrow">›</span><div class="folder-node"><strong>▰</strong><span>大学学习</span></div><span class="folder-arrow">›</span><div class="folder-node"><strong>▰</strong><span>电脑课</span></div></div>`;
    caption = "文件夹像抽屉，路径就是从外到内的地址。";
  } else if (lesson.day === 5) {
    content = `<div class="url-visual"><div class="url-bar">https://example.edu.cn/library</div><div class="url-parts"><span><b>https://</b>连接方式</span><span><b>example.edu.cn</b>网站域名</span><span><b>/library</b>页面路径</span></div></div>`;
    caption = "判断网页时先看真正的域名，再看页面内容和来源。";
  } else if (lesson.day >= 12) {
    content = `<div class="terminal-visual"><div><span class="prompt">PS C:\\Users\\Student&gt;</span> ${lesson.day === 12 ? "pwd" : "python hello.py"}</div><div>${lesson.day === 12 ? "Path  C:\\Users\\Student\\Documents" : "你好，准大一新生！"}</div><div><span class="prompt">&gt;</span> <span class="cursor"></span></div></div>`;
    caption = lesson.day === 12 ? "先确认 Path，再执行命令；终端会忠实地显示结果。" : "代码、文件和运行结果组成一个完整的小程序。";
  } else {
    content = `<div class="path-visual"><div class="path-steps"><div class="path-step"><i>1</i><span>输入</span></div><span class="path-line"></span><div class="path-step"><i>2</i><span>整理</span></div><span class="path-line"></span><div class="path-step"><i>3</i><span>提交</span></div></div></div>`;
    caption = lesson.day <= 7 ? "安全的电脑习惯，都从确认来源和保存结果开始。" : "学习任务可以拆成输入、处理、检查三个阶段。";
  }
  return `<div class="visual-label">FIELD NOTE / ${String(lesson.day).padStart(2, "0")}</div>${content}<div class="visual-caption">${caption}</div>`;
}

const sectionGuides = {
  learn: ["先建立地图，再开始操作", "这一板块把今天的关键词拆开讲。先展开概念卡，理解它是什么、为什么重要，再按步骤动手。"],
  practice: ["把知识变成一次真实操作", "这一板块不追求速度。每完成一项就勾选一项；遇到错误先记下屏幕上的原文，再回来提问。"],
  notes: ["把今天的理解留下来", "用自己的话记录收获、疑问和错误。内容会自动保存在本机，并随学习进度一起导出。"],
  quiz: ["用结果检查自己是否真的理解", "这一板块不是考试惩罚，而是定位薄弱点。提交后查看每题解析，答错的题可以重新作答。"]
};

function renderSectionGuide(type) {
  const guide = sectionGuides[type];
  return `<div class="section-guide" data-ask-title="${encodeURIComponent(guide[0])}" data-ask-body="${encodeURIComponent(guide[1])}"><span class="section-guide-mark">?</span><div><strong>${guide[0]}</strong><p>${guide[1]}</p></div></div>`;
}

function conceptExplanation(title, body) {
  const rules = [
    ["域名", "域名是网站在网络上的名字，像学校的校名；它帮助浏览器找到对应的网站。", "判断一个网站是否可信时，先看真正的域名，不要只看网页大标题。", "在 example.edu.cn/library 中，example.edu.cn 是域名，/library 是页面路径。", "看域名、拼写和后缀，再决定是否继续输入信息。"],
    ["网址", "网址是一条完整的网络地址，通常包含连接方式、域名和页面路径。", "把网址拆开看，能帮助你判断自己正在访问哪里。", "https://example.edu.cn/library 可以拆成 https://、域名和 /library。", "先看地址栏，再确认域名是否与官方来源一致。"],
    ["路径", "路径是文件或文件夹在电脑中的地址，告诉你从哪里一层层找到它。", "路径清楚，保存、查找和使用命令行都会更安全。", "文档\\大学学习\\电脑课\\Day01-笔记.txt 就是一条路径。", "先确认当前文件夹，再进行移动或删除。"],
    ["文件夹", "文件夹是存放文件的容器，可以像抽屉一样继续分层。", "好的文件夹结构能减少找资料的时间。", "大学学习里可以分出电脑课、Python、课程作业等文件夹。", "一个文件夹只承担一个清楚的主题。"],
    ["文件", "文件是有具体内容的资料，例如文档、图片、PDF 或程序。", "理解文件类型，才能知道应该用什么程序打开它。", "Day08-学习笔记.pdf 是文件名，.pdf 是文件类型。", "保存前给文件起有信息量的名字。"],
    ["窗口", "窗口是程序在屏幕上的工作区域，标题栏能告诉你当前打开的是什么。", "掌握窗口后，你可以同时参考资料和做笔记。", "把浏览器放左边、记事本放右边，就能边看边记。", "先保存内容，再关闭窗口。"],
    ["快捷键", "快捷键是用一组键快速执行命令的方式。", "高频快捷键能减少鼠标移动，让重复操作更快。", "Ctrl+C 复制，Ctrl+V 粘贴，Ctrl+Z 撤销。", "先记住 Ctrl+C、Ctrl+V、Ctrl+Z 和 Alt+Tab。"],
    ["输入法", "输入法把键盘按键转换成中文、英文或符号。", "切换输入法能避免中文文件名、英文代码和数字混在一起。", "写笔记用中文输入法，写 Python 代码和文件名用英文输入法。", "输入前看任务栏当前的中/英状态。"],
    ["剪贴板", "剪贴板是复制或剪切内容暂时停放的地方。", "理解它可以解释为什么下一次复制会替换上一次内容。", "复制一段网页文字，再粘贴到记事本中。", "复制敏感信息后，尽快复制普通内容覆盖它。"],
    ["截图", "截图是把屏幕上的画面保存为图片。", "它适合记录错误提示、提交操作证据或保存临时信息。", "Win+Shift+S 可以只截取错误弹窗的一部分。", "分享前检查截图里有没有密码和个人信息。"],
    ["标签页", "标签页让一个浏览器窗口同时放多个网页。", "它适合并排比较资料，也能避免开很多浏览器窗口。", "Ctrl+T 新建，Ctrl+W 关闭，Ctrl+Shift+T 恢复。", "用清楚的页面标题和收藏管理资料。"],
    ["下载", "下载是把网络上的文件保存到本机。", "下载前确认来源，下载后确认文件类型和保存位置。", "从学校官网下载 PDF 后，可在 Ctrl+J 和下载文件夹中找到它。", "不要运行来源不明的 .exe 文件。"],
    ["密码", "密码是证明账号属于你的秘密信息，应该足够长且不要重复使用。", "一个密码泄露时，独立密码可以避免其他账号一起失守。", "使用密码管理器生成不同服务的独立密码。", "不要把密码或验证码发给任何人。"],
    ["更新", "更新是安装软件或系统发布的修复和改进版本。", "更新常常会修复安全漏洞和稳定性问题。", "Windows 更新可能修复一个已经被发现的安全问题。", "更新前保存文件，并从官方入口进行更新。"],
    ["PDF", "PDF 是一种固定版式的文档格式，适合阅读、打印和提交。", "它能减少不同设备打开时的排版变化。", "保留可编辑源文件，同时导出一份 PDF 作为作业附件。", "导出后打开检查分页、字体和图片。"],
    ["单元格", "单元格是表格中行和列交叉的一个格子，每个格子都有地址。", "知道单元格地址，才能写出准确的公式。", "A1 表示 A 列第 1 行，B2 表示 B 列第 2 行。", "先看表头，再确认公式引用的范围。"],
    ["公式", "公式是以等号开始的计算表达式，结果会随着数据变化自动更新。", "公式可以减少手算错误，快速处理很多行数据。", "=B2*0.4+C2*0.6 可以计算加权成绩。", "输入等号后点击单元格，比手写地址更不容易错。"],
    ["任务管理器", "任务管理器能显示正在运行的程序和 CPU、内存、磁盘等资源使用情况。", "它能帮助你判断卡顿来自哪个程序或资源。", "Ctrl+Shift+Esc 可以打开任务管理器。", "不要结束看不懂的系统进程。"],
    ["命令行", "命令行是用文字命令与电脑交互的界面，不等于高深编程。", "它能精确地查看和管理文件，也为以后编程打基础。", "pwd 查看位置，dir 查看内容，cd 切换文件夹。", "每次运行命令前先核对当前路径。"],
    ["解释器", "解释器会把 Python 代码转换成电脑可以执行的动作。", "没有解释器，保存好的 .py 文件就无法运行。", "点击运行 hello.py 时，Python 解释器会依次执行每一行。", "看到终端输出，说明解释器已经正常工作。"],
    ["变量", "变量是给数据起的名字，程序可以通过这个名字读取或修改数据。", "变量让代码不必反复写同一个具体值。", "name = input(...) 把用户输入保存到 name。", "变量名要表达内容，避免使用 a、b 这类含义不清的名字。"],
    ["条件", "条件让程序根据真假选择不同的执行路线。", "现实中的“如果……就……”可以直接变成程序逻辑。", "if score >= 60: 表示分数达到 60 时执行对应代码。", "测试条件的真和假两种情况。"],
    ["循环", "循环让同一段代码依次处理多个数据，避免重复手写。", "处理成绩、文件或列表时，循环能显著减少代码。", "for score in scores 会依次处理 scores 中的每个分数。", "确认循环的范围和结束条件。"],
    ["列表", "列表按顺序保存多个值，程序可以逐个读取它们。", "一组课程、一组成绩或一批文件名都适合放进列表。", "scores = [88, 76, 92] 保存三门课的成绩。", "Python 列表的第一个索引是 0。"],
    ["函数", "函数是给一段逻辑起名字，调用它就能重复使用这段逻辑。", "函数能让长程序分成几个容易理解的小部分。", "average(numbers) 可以专门负责计算平均分。", "函数输入什么、返回什么要说清楚。"]
  ];
  const match = rules.find(([key]) => title.includes(key));
  if (match) return { simple: match[1], why: match[2], example: match[3], action: match[4] };
  return { simple: `${title} 可以先理解为：${body}`, why: `掌握“${title}”后，你能更准确地完成今天的操作，也更容易判断下一步该做什么。`, example: `在今天的“跟着做”步骤中，找到一个使用“${title}”的地方，观察它解决了什么问题。`, action: `先按课程步骤做一次，再用自己的话解释“${title}”是什么、什么时候使用。` };
}

function renderConceptCard([title, body]) {
  const detail = conceptExplanation(title, body);
  const context = encodeURIComponent(`${title}：${body}`);
  return `<article class="concept-card" data-ask-title="${encodeURIComponent(title)}" data-ask-body="${context}"><div class="concept-card-head"><div><span class="concept-tag">KEY CONCEPT</span><h4>${title}</h4></div><button class="explain-button" type="button" data-explain-title="${encodeURIComponent(title)}" title="就此概念提问" aria-label="就${title}提问">?</button></div><p>${body}</p><details class="concept-detail"><summary>展开详细解释</summary><div><div><strong>换句话说</strong><p>${detail.simple}</p></div><div><strong>为什么重要</strong><p>${detail.why}</p></div><div><strong>举个例子</strong><p>${detail.example}</p></div><div><strong>怎么判断掌握</strong><p>${detail.action}</p></div></div></details></article>`;
}

function renderLearn(lesson) {
  const stepsDone = lesson.steps.filter((_, i) => isStepDone(lesson.day, i)).length;
  const code = lesson.code ? `<div class="code-toolbar"><span>${lesson.code.filename}</span><button class="copy-button" type="button" data-copy="${encodeURIComponent(lesson.code.content)}">复制代码</button></div><pre class="code-block"><code>${html(lesson.code.content)}</code></pre>` : "";
  return `<div class="panel">
    ${renderSectionGuide("learn")}
    <div class="intro-card"><div class="intro-number">${String(lesson.day).padStart(2, "0")}</div><div><h3>今天的核心</h3><p>${lesson.summary}</p></div></div>
    <div class="concept-grid">${lesson.concepts.map(renderConceptCard).join("")}</div>
    ${code}
    <div class="steps-heading"><h3>跟着做</h3><span>${stepsDone} / ${lesson.steps.length} 步已完成</span></div>
    <div class="step-list">${lesson.steps.map(([title, body, action], index) => `<article class="step ${isStepDone(lesson.day,index) ? "done" : ""} ${!isStepDone(lesson.day,index) && index === stepsDone ? "current" : ""}"><div class="step-index">${isStepDone(lesson.day,index) ? "✓" : index + 1}</div><div><h4>${title}</h4><p>${body}</p></div><button class="step-action ${isStepDone(lesson.day,index) ? "done-action" : ""}" type="button" data-step="${index}">${isStepDone(lesson.day,index) ? "已完成" : action}</button></article>`).join("")}</div>
  </div>`;
}

function renderPractice(lesson) {
  const mastery = state.mastery[lesson.day] || "";
  return `<div class="panel practice-layout">${renderSectionGuide("practice")}<div class="practice-card" data-ask-title="${encodeURIComponent(lesson.practice.title)}" data-ask-body="${encodeURIComponent(lesson.practice.intro)}"><h3>${lesson.practice.title}</h3><p>${lesson.practice.intro}</p><div class="checklist">${lesson.practice.tasks.map((task, index) => `<div class="check-row"><input id="task-${lesson.day}-${index}" type="checkbox" data-task="${index}" ${isTaskDone(lesson.day,index) ? "checked" : ""}/><label for="task-${lesson.day}-${index}">${task}</label></div>`).join("")}</div></div><div class="mastery-card"><h4>我现在能做到什么程度？</h4><p>请选择最接近真实情况的一项。这个选择不会阻止结课，只用于安排复习。</p><div class="mastery-options"><button class="mastery-option ${mastery === "needs_review" ? "active" : ""}" data-mastery="needs_review" type="button">还需要复习</button><button class="mastery-option ${mastery === "with_help" ? "active" : ""}" data-mastery="with_help" type="button">有提示能完成</button><button class="mastery-option ${mastery === "independent" ? "active" : ""}" data-mastery="independent" type="button">可以独立完成</button></div></div><div class="challenge"><h4>可选挑战 · 让自己多走一步</h4><p>${lesson.practice.challenge}</p></div></div>`;
}

function noteText(value) { return String(value || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

function noteLength(note) { return [note.learned, note.unclear, note.errors].reduce((total, value) => total + String(value || "").length, 0); }

function renderNotes(lesson) {
  const note = recordOrEmpty(state.notes[lesson.day]);
  const savedAt = note.updatedAt ? new Date(note.updatedAt).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }) : "尚未记录";
  return `<div class="panel notes-panel">${renderSectionGuide("notes")}
    <div class="notes-heading"><div><h3>第 ${lesson.day} 天学习笔记</h3><p>不要求写得正式，重点是留下你自己的理解。</p></div><button class="secondary-button" id="copyDayNotes" type="button">复制本日笔记</button></div>
    <div class="note-fields">
      <label class="note-field"><span><strong>今天学会了什么</strong><small>尽量用自己的话写 1–3 点</small></span><textarea data-note-field="learned" maxlength="1200" placeholder="例如：我知道域名是网站真正的名字，下载前要先核对它。">${noteText(note.learned)}</textarea></label>
      <label class="note-field"><span><strong>哪里还不清楚</strong><small>可以稍后选中文字向理解助手提问</small></span><textarea data-note-field="unclear" maxlength="1200" placeholder="例如：我还分不清复制和移动文件的区别。">${noteText(note.unclear)}</textarea></label>
      <label class="note-field"><span><strong>遇到的错误或提醒</strong><small>保留错误原文和解决方法最有用</small></span><textarea data-note-field="errors" maxlength="1200" placeholder="例如：文件保存错了文件夹，下次先看地址栏。">${noteText(note.errors)}</textarea></label>
    </div>
    <div class="note-footer"><span id="noteSaveStatus">自动保存在本机 · ${savedAt}</span><span id="noteCharCount">${noteLength(note)} / 3600 字</span></div>
  </div>`;
}

function renderQuiz(lesson) {
  const activeSet = ensureQuizSet(lesson);
  const results = state.quizResults[lesson.day] || [];
  const answers = state.answers[lesson.day] || [];
  const requiredCorrect = Math.ceil(QUIZ_SIZE * 0.6);
  return `<div class="panel">${renderSectionGuide("quiz")}<div class="quiz-summary"><div><strong>${lesson.quiz.length} 题题库 · 本次随机抽取 ${QUIZ_SIZE} 题</strong><span>答对 ${requiredCorrect} 题即可通过，错题会进入复习中心。</span></div><button class="secondary-button quiz-refresh" id="refreshQuiz" type="button">换一组题</button></div><div class="quiz-list">${activeSet.map((poolIndex, displayIndex) => {
    const [question, options, answer, explain] = lesson.quiz[poolIndex];
    const result = results[poolIndex];
    return `<article class="quiz-card ${result === true ? "correct" : result === false ? "incorrect" : ""} ${result !== undefined ? "answered" : ""}"><p class="quiz-q">${displayIndex + 1}. ${question}</p>${options.map((option, optionIndex) => `<label class="quiz-option"><input type="radio" name="quiz-${lesson.day}-${poolIndex}" value="${optionIndex}" data-question="${poolIndex}" ${Number(answers[poolIndex]) === optionIndex ? "checked" : ""}/> <span>${option}</span></label>`).join("")}<div class="quiz-feedback">${result === true ? "回答正确。" : result === false ? `再想想：${explain}` : "提交后会看到解析。"}</div></article>`;
  }).join("")}</div><button class="primary-button quiz-submit" id="submitQuiz" type="button">提交答案</button></div>`;
}

let assistantContext = { text: "", title: "", detail: null };
let pendingSelection = { text: "", title: "", detail: null };

function findConcept(lesson, title) {
  const concept = lesson.concepts.find(([conceptTitle]) => conceptTitle === title);
  return concept ? conceptExplanation(concept[0], concept[1]) : null;
}

function openAssistant(context = {}) {
  const lesson = currentLesson();
  assistantContext = {
    text: context.text || "",
    title: context.title || `第 ${lesson.day} 天 · ${lesson.title}`,
    detail: context.detail || null
  };
  document.getElementById("selectedText").textContent = assistantContext.text || "还没有选中文字，将围绕当前课程回答";
  document.querySelector("#selectedQuote span").textContent = assistantContext.title;
  document.getElementById("askAnswer").hidden = true;
  document.getElementById("askAnswer").innerHTML = "";
  document.getElementById("askDrawer").classList.add("open");
  document.getElementById("askDrawer").setAttribute("aria-hidden", "false");
  document.getElementById("askBackdrop").hidden = false;
  document.getElementById("askInput").focus();
  document.getElementById("selectionAsk").hidden = true;
  renderAssistantHistory();
}

function closeAssistant() {
  document.getElementById("askDrawer").classList.remove("open");
  document.getElementById("askDrawer").setAttribute("aria-hidden", "true");
  document.getElementById("askBackdrop").hidden = true;
}

function renderAssistantHistory() {
  const history = (state.assistantHistory || []).slice(0, 6);
  const container = document.getElementById("askHistory");
  if (!history.length) {
    container.innerHTML = `<h3>最近提问</h3><p class="history-empty">你的提问会保存在当前浏览器，方便稍后继续复习。</p>`;
    return;
  }
  container.innerHTML = `<h3>最近提问</h3><div class="history-list">${history.map((item, index) => `<button class="history-item" data-history="${index}" type="button"><strong>${html(item.question)}</strong><span>第 ${item.day} 天 · ${html(item.title)}</span></button>`).join("")}</div>`;
  container.querySelectorAll("[data-history]").forEach(button => button.addEventListener("click", () => {
    const item = history[Number(button.dataset.history)];
    const historyLesson = lessons[item.day - 1];
    assistantContext = { text: item.selected || "", title: item.title, detail: historyLesson ? findConcept(historyLesson, item.title) : null };
    document.querySelector("#selectedQuote span").textContent = item.title;
    document.getElementById("selectedText").textContent = item.selected || "从历史记录继续追问";
    document.getElementById("askInput").value = item.question;
    document.getElementById("askAnswer").innerHTML = item.answerHtml;
    document.getElementById("askAnswer").hidden = false;
  }));
}

function selectedContextElement() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return null;
  const node = selection.anchorNode;
  const element = node && node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
  return element && element.closest ? element.closest("[data-ask-title]") : null;
}

function captureSelection() {
  const selection = window.getSelection();
  const text = selection ? selection.toString().trim().replace(/\s+/g, " ") : "";
  const button = document.getElementById("selectionAsk");
  if (text.length < 2 || document.getElementById("askDrawer").classList.contains("open")) {
    button.hidden = true;
    return;
  }
  const element = selectedContextElement();
  const title = element ? decodeURIComponent(element.dataset.askTitle || "选中的内容") : `第 ${currentLesson().day} 天 · ${currentLesson().title}`;
  const detail = element && element.classList.contains("concept-card") ? findConcept(currentLesson(), title) : null;
  pendingSelection = { text, title, detail };
  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  button.style.setProperty("--selection-left", `${rect.right + 8}px`);
  button.style.setProperty("--selection-top", `${rect.top - 4}px`);
  button.hidden = false;
}

function answerQuestion(question) {
  const lesson = currentLesson();
  const normalizedQuestion = question.trim() || "用更简单的话解释";
  let detail = assistantContext.detail;
  let title = assistantContext.title;
  if (!detail) {
    const matched = lesson.concepts.find(([conceptTitle]) => normalizedQuestion.includes(conceptTitle));
    if (matched) { title = matched[0]; detail = conceptExplanation(matched[0], matched[1]); }
  }
  if (!detail) {
    detail = { simple: "这段内容是在说明今天操作中的一个关键点。先把它拆成“是什么、为什么、怎么做”三部分理解。", why: "知道这个概念后，你会更容易判断下一步该点哪里、保存什么或检查什么。", example: `回到“${lesson.title}”的跟着做步骤，把这句话对应到屏幕上的一个具体动作。`, action: "先做一次，再用自己的话说出刚才发生了什么。" };
  }
  let heading = `关于“${title}”的解释`;
  let answer = detail.simple;
  if (/例子|举例|生活|比如/.test(normalizedQuestion)) { heading = "换一个具体例子"; answer = detail.example; }
  else if (/怎么|如何|操作|步骤|做/.test(normalizedQuestion)) { heading = "你可以这样做"; answer = detail.action; }
  else if (/为什么|重要|作用|用途/.test(normalizedQuestion)) { heading = "为什么要学它"; answer = detail.why; }
  else if (/区别|不同|比较/.test(normalizedQuestion)) { heading = "先抓住这个区别"; answer = `${detail.simple} 如果要比较两个词，请分别问“它表示什么”和“我什么时候使用它”，不要只看名称。`; }
  const selected = assistantContext.text ? `<p><strong>你选中的内容：</strong>${html(assistantContext.text)}</p>` : "";
  const answerHtml = `<h3>${heading}</h3>${selected}<p>${html(answer)}</p><p><strong>下一步：</strong>${html(detail.action)}</p>`;
  document.getElementById("askAnswer").innerHTML = answerHtml;
  document.getElementById("askAnswer").hidden = false;
  state.assistantHistory = [{ day: lesson.day, title, question: normalizedQuestion, selected: assistantContext.text, answerHtml, askedAt: new Date().toISOString() }, ...(state.assistantHistory || [])].slice(0, 30);
  persist();
  renderAssistantHistory();
}

const simulationCatalog = [
  { id: "files", label: "文件整理", subtitle: "创建、重命名、移动" },
  { id: "browser", label: "网址判断", subtitle: "拆解地址并识别可信来源" },
  { id: "powershell", label: "PowerShell", subtitle: "在虚拟目录中输入命令" }
];
let activeLab = "files";

function labProgress(id) {
  const item = state.simulations[id];
  if (id === "files") return item.completed ? 3 : item.location === "电脑课" ? 3 : item.fileName === "Day03-文件练习.txt" ? 2 : item.folderCreated ? 1 : 0;
  if (id === "browser") return item.completed ? 2 : item.parsed ? 1 : 0;
  return item.completed ? 4 : Math.min(4, Number(item.step) || 0);
}

function labStatus(id) {
  const total = id === "files" ? 3 : id === "browser" ? 2 : 4;
  return `${labProgress(id)} / ${total}`;
}

function renderFileLab() {
  const sim = state.simulations.files;
  const stage = sim.completed ? 3 : sim.location === "电脑课" ? 3 : sim.fileName === "Day03-文件练习.txt" ? 2 : sim.folderCreated ? 1 : 0;
  const tasks = ["创建名为“电脑课”的文件夹", "把文件重命名为 Day03-文件练习.txt", "把文件移动到“电脑课”文件夹"];
  const input = stage < 2 ? `<label class="sim-input-label" for="fileLabInput">${stage === 0 ? "新文件夹名称" : "新文件名"}</label><input class="sim-input" id="fileLabInput" autocomplete="off" value="${stage === 1 ? noteText(sim.fileName) : ""}" placeholder="${stage === 0 ? "输入：电脑课" : "输入：Day03-文件练习.txt"}" />` : "";
  const action = stage < 3 ? `<button class="primary-button" id="fileLabAction" type="button">${stage === 0 ? "新建文件夹" : stage === 1 ? "重命名文件" : "移动到“电脑课”"}</button>` : `<div class="lab-complete">✓ 文件整理实验已完成</div>`;
  return `<div class="lab-workspace"><div class="lab-task"><span>当前任务 ${Math.min(stage + 1, 3)} / 3</span><strong>${stage < 3 ? tasks[stage] : "你完成了创建、重命名和移动"}</strong></div>
    <div class="file-simulator"><div class="sim-window-bar"><span>文件资源管理器</span><span>— □ ×</span></div><div class="sim-toolbar"><span>新建</span><span>排序</span><span>查看</span></div><div class="sim-address">此电脑 › ${sim.location}</div><div class="sim-files">${sim.folderCreated ? `<div class="sim-file folder"><span>▰</span><strong>电脑课</strong></div>` : ""}<div class="sim-file document ${stage === 1 || stage === 2 ? "selected" : ""}"><span>▤</span><strong>${html(sim.fileName)}</strong><small>${sim.location}</small></div></div></div>
    <div class="sim-controls">${input}<div class="sim-action-row">${action}<button class="secondary-button" data-reset-lab="files" type="button">重新开始</button></div><p class="sim-feedback" id="labFeedback" aria-live="polite"></p></div></div>`;
}

function renderBrowserLab() {
  const sim = state.simulations.browser;
  const sites = [
    ["Microsoft Edge 官方下载", "https://www.microsoft.com/zh-cn/edge", true],
    ["账号紧急验证", "https://micros0ft-login.example.com", false],
    ["高速下载站", "http://edge-free-download.invalid", false]
  ];
  return `<div class="lab-workspace"><div class="lab-task"><span>当前任务 ${sim.parsed ? 2 : 1} / 2</span><strong>${sim.parsed ? "选择真正可信的软件来源" : "输入网址并把它拆成连接方式、域名和路径"}</strong></div>
    <div class="browser-simulator"><div class="browser-tabs"><span>新标签页</span><span>＋</span></div><div class="browser-address-row"><input id="browserLabUrl" aria-label="模拟浏览器地址栏" value="${noteText(sim.url || "https://learn.example.edu.cn/course/day5")}" /><button id="parseUrl" type="button">拆解网址</button></div>${sim.parsed ? `<div class="url-breakdown"><div><span>连接方式</span><strong>${html(sim.protocol)}</strong></div><div><span>网站域名</span><strong>${html(sim.host)}</strong></div><div><span>页面路径</span><strong>${html(sim.path)}</strong></div></div>` : `<div class="browser-page-placeholder">地址拆解结果会显示在这里</div>`}</div>
    ${sim.parsed ? `<div class="site-choices"><h4>哪一个更适合下载 Microsoft Edge？</h4>${sites.map(([name, url, correct], index) => `<button class="site-choice" data-safe-site="${correct ? "yes" : "no"}" type="button"><span>${index + 1}</span><div><strong>${name}</strong><small>${url}</small></div></button>`).join("")}</div>` : ""}
    <div class="sim-controls"><div class="sim-action-row">${sim.completed ? `<div class="lab-complete">✓ 网址判断实验已完成</div>` : ""}<button class="secondary-button" data-reset-lab="browser" type="button">重新开始</button></div><p class="sim-feedback" id="labFeedback" aria-live="polite"></p></div></div>`;
}

function renderPowerShellLab() {
  const sim = state.simulations.powershell;
  const commands = ["pwd", "dir", "mkdir computer-lab", "cd computer-lab"];
  const prompt = `PS ${sim.cwd}>`;
  const history = (sim.history || []).map(item => `<div class="terminal-entry"><div><span>${html(item.prompt)}</span> ${html(item.command)}</div>${item.output ? `<pre>${html(item.output)}</pre>` : ""}</div>`).join("");
  return `<div class="lab-workspace"><div class="lab-task"><span>当前任务 ${Math.min((sim.step || 0) + 1, 4)} / 4</span><strong>${sim.completed ? "你已经完成基础路径操作" : `尝试输入：${commands[sim.step || 0]}`}</strong></div>
    <div class="powershell-simulator"><div class="terminal-title">Windows PowerShell</div><div class="terminal-output">${history || `<div class="terminal-welcome">在下面输入第一条命令。这里不会执行真实命令。</div>`}${sim.completed ? `<div class="terminal-success">模拟目录已准备完成。</div>` : ""}</div>${sim.completed ? "" : `<div class="terminal-command"><span>${html(prompt)}</span><input id="powerShellInput" aria-label="PowerShell 模拟命令" autocomplete="off" spellcheck="false" /><button id="runPowerShell" type="button">运行</button></div>`}</div>
    <div class="sim-controls"><div class="sim-action-row">${sim.completed ? `<div class="lab-complete">✓ PowerShell 实验已完成</div>` : ""}<button class="secondary-button" data-reset-lab="powershell" type="button">重新开始</button></div><p class="sim-feedback" id="labFeedback" aria-live="polite"></p></div></div>`;
}

function setLabFeedback(message, success = false) {
  const feedback = document.getElementById("labFeedback");
  if (!feedback) return;
  feedback.textContent = message;
  feedback.classList.toggle("success", success);
}

function renderLabCenter() {
  const content = document.getElementById("labContent");
  const body = activeLab === "files" ? renderFileLab() : activeLab === "browser" ? renderBrowserLab() : renderPowerShellLab();
  content.innerHTML = `<div class="lab-tabs" role="tablist" aria-label="模拟实验类型">${simulationCatalog.map(item => `<button class="lab-tab ${activeLab === item.id ? "active" : ""} ${state.simulations[item.id].completed ? "done" : ""}" data-lab-id="${item.id}" role="tab" aria-selected="${activeLab === item.id}" type="button"><strong>${item.label}</strong><span>${item.subtitle}</span><small>${state.simulations[item.id].completed ? "已完成" : labStatus(item.id)}</small></button>`).join("")}</div>${body}`;
  content.querySelectorAll("[data-lab-id]").forEach(button => button.addEventListener("click", () => { activeLab = button.dataset.labId; renderLabCenter(); }));
  content.querySelectorAll("[data-reset-lab]").forEach(button => button.addEventListener("click", () => {
    const id = button.dataset.resetLab;
    state.simulations[id] = createDefaultSimulations()[id];
    persist(); renderSidebar(); renderLabCenter(); showToast("模拟实验已重新开始");
  }));

  const fileAction = document.getElementById("fileLabAction");
  if (fileAction) fileAction.addEventListener("click", () => {
    const sim = state.simulations.files;
    const stage = sim.fileName === "Day03-文件练习.txt" ? 2 : sim.folderCreated ? 1 : 0;
    const value = (document.getElementById("fileLabInput")?.value || "").trim();
    if (stage === 0 && value !== "电脑课") { setLabFeedback("文件夹名称还不对，请准确输入“电脑课”。"); return; }
    if (stage === 1 && value !== "Day03-文件练习.txt") { setLabFeedback("请保留 .txt 扩展名，并使用任务给出的完整文件名。"); return; }
    if (stage === 0) sim.folderCreated = true;
    else if (stage === 1) sim.fileName = value;
    else { sim.location = "电脑课"; sim.completed = true; }
    persist(); renderSidebar(); renderLabCenter(); showToast(stage === 2 ? "文件整理实验已完成" : "操作正确，继续下一步");
  });
  const fileInput = document.getElementById("fileLabInput");
  if (fileInput) fileInput.addEventListener("keydown", event => { if (event.key === "Enter") fileAction.click(); });

  const parseUrl = document.getElementById("parseUrl");
  if (parseUrl) parseUrl.addEventListener("click", () => {
    const value = document.getElementById("browserLabUrl").value.trim();
    try {
      const parsed = new URL(value);
      if (!["http:", "https:"].includes(parsed.protocol)) throw new Error("protocol");
      Object.assign(state.simulations.browser, { parsed: true, url: parsed.href, protocol: parsed.protocol.replace(":", ""), host: parsed.hostname, path: `${parsed.pathname}${parsed.search}` || "/" });
      persist(); renderLabCenter(); setLabFeedback("拆解成功。下一步请重点比较三个网站的真实域名。", true);
    } catch { setLabFeedback("这不是完整的网址。请确认以 http:// 或 https:// 开头。" ); }
  });
  content.querySelectorAll("[data-safe-site]").forEach(button => button.addEventListener("click", () => {
    if (button.dataset.safeSite !== "yes") { setLabFeedback("再看一次真正的域名。拼写相似或藏在 example.com 前面的文字都不能代表官方网站。"); return; }
    state.simulations.browser.completed = true;
    persist(); renderSidebar(); renderLabCenter(); setLabFeedback("判断正确：microsoft.com 才是这里需要核对的官方域名。", true); showToast("网址判断实验已完成");
  }));

  const runPowerShell = document.getElementById("runPowerShell");
  const shellInput = document.getElementById("powerShellInput");
  if (runPowerShell && shellInput) {
    const run = () => {
      const sim = state.simulations.powershell;
      const expected = ["pwd", "dir", "mkdir computer-lab", "cd computer-lab"][sim.step || 0];
      const command = shellInput.value.trim().replace(/\s+/g, " ").toLowerCase();
      if (command !== expected) { setLabFeedback(`当前步骤没有执行。请先尝试 ${expected}`); return; }
      const promptText = `PS ${sim.cwd}>`;
      let output = "";
      if (command === "pwd") output = `Path\n----\n${sim.cwd}`;
      else if (command === "dir") output = `Mode   Name\nd----  Documents\nd----  Downloads${sim.folderCreated ? "\nd----  computer-lab" : ""}`;
      else if (command === "mkdir computer-lab") { sim.folderCreated = true; output = "Directory: computer-lab"; }
      else { sim.cwd = `${sim.cwd}\\computer-lab`; output = `当前位置：${sim.cwd}`; }
      sim.history.push({ prompt: promptText, command, output });
      sim.step += 1;
      if (sim.step >= 4) sim.completed = true;
      persist(); renderSidebar(); renderLabCenter(); showToast(sim.completed ? "PowerShell 实验已完成" : "命令正确，继续下一条");
    };
    runPowerShell.addEventListener("click", run);
    shellInput.addEventListener("keydown", event => { if (event.key === "Enter") run(); });
  }
}

function openLabCenter() {
  renderLabCenter();
  document.getElementById("labModal").classList.add("open");
  document.getElementById("labModal").setAttribute("aria-hidden", "false");
  document.getElementById("labBackdrop").hidden = false;
}

function closeLabCenter() {
  document.getElementById("labModal").classList.remove("open");
  document.getElementById("labModal").setAttribute("aria-hidden", "true");
  document.getElementById("labBackdrop").hidden = true;
}

function renderReviewCenter() {
  const unresolved = unresolvedReviews().sort((a, b) => (b.lastWrongAt || "").localeCompare(a.lastWrongAt || ""));
  const masteryEntries = Object.entries(state.mastery || {}).filter(([, value]) => value !== "independent");
  const independentCount = Object.values(state.mastery || {}).filter(value => value === "independent").length;
  document.getElementById("reviewStats").innerHTML = `<div class="review-stat"><strong>${state.completed.length}</strong><span>已完成课程</span></div><div class="review-stat"><strong>${unresolved.length}</strong><span>待处理错题</span></div><div class="review-stat"><strong>${independentCount}</strong><span>可独立完成</span></div>`;

  const wrongHtml = unresolved.length ? `<div class="review-list">${unresolved.map(item => {
    const lesson = lessons[item.day - 1];
    const quiz = lesson && lesson.quiz[item.index];
    if (!lesson || !quiz) return "";
    return `<article class="review-item"><span class="review-day">${item.day}</span><div><h4>${html(quiz[0])}</h4><p>${html(quiz[3])} · 已错 ${item.misses || 1} 次</p></div><button class="review-action" data-review-day="${item.day}" data-review-tab="quiz" data-review-index="${item.index}" type="button">重新作答</button></article>`;
  }).join("")}</div>` : `<div class="review-empty">目前没有待处理错题。完成测验后，答错的题会自动出现在这里。</div>`;

  const masteryHtml = masteryEntries.length ? `<div class="review-list">${masteryEntries.map(([day, value]) => {
    const lesson = lessons[Number(day) - 1];
    return `<article class="review-item"><span class="review-day">${day}</span><div><h4>${html(lesson.title)}</h4><p>当前自评：${masteryLabel(value)}</p></div><button class="review-action" data-review-day="${day}" data-review-tab="practice" type="button">继续练习</button></article>`;
  }).join("")}</div>` : `<div class="review-empty">完成动手练习后选择掌握度，这里会为你整理需要加强的课程。</div>`;

  document.getElementById("reviewContent").innerHTML = `<section class="review-section"><h3>待处理错题</h3>${wrongHtml}</section><section class="review-section"><h3>需要加强的课程</h3>${masteryHtml}</section>`;
  document.querySelectorAll("[data-review-day]").forEach(button => button.addEventListener("click", () => {
    state.currentDay = Number(button.dataset.reviewDay);
    state.tab = button.dataset.reviewTab;
    if (state.tab === "quiz" && button.dataset.reviewIndex !== undefined) {
      const lesson = lessons[state.currentDay - 1];
      state.quizSets[state.currentDay] = createQuizSet(lesson, Number(button.dataset.reviewIndex));
      state.answers[state.currentDay] = [];
      state.quizResults[state.currentDay] = [];
    }
    persist();
    closeReviewCenter();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }));
}

function openReviewCenter() {
  renderReviewCenter();
  document.getElementById("reviewModal").classList.add("open");
  document.getElementById("reviewModal").setAttribute("aria-hidden", "false");
  document.getElementById("reviewBackdrop").hidden = false;
}

function closeReviewCenter() {
  document.getElementById("reviewModal").classList.remove("open");
  document.getElementById("reviewModal").setAttribute("aria-hidden", "true");
  document.getElementById("reviewBackdrop").hidden = true;
}

function exportProgress() {
  const payload = { app: "freshman-computer-course", exportedAt: new Date().toISOString(), version: 4, state };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `新生电脑课进度-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("学习进度已导出");
}

async function importProgress(file) {
  const parsed = JSON.parse(await file.text());
  const imported = parsed && parsed.app === "freshman-computer-course" ? parsed.state : parsed;
  if (!imported || typeof imported !== "object" || !Number.isInteger(Number(imported.currentDay)) || !Array.isArray(imported.completed)) throw new Error("invalid-progress");
  state = hydrateState(imported);
  persist();
  render();
  showToast("学习进度已恢复");
}

function render() {
  const lesson = currentLesson();
  renderSidebar();
  document.getElementById("crumbDay").textContent = `第 ${lesson.day} 天`;
  document.getElementById("lessonKicker").textContent = lesson.kicker;
  document.getElementById("lessonTitle").textContent = lesson.title;
  document.getElementById("lessonSummary").textContent = lesson.summary;
  document.getElementById("lessonDuration").textContent = lesson.duration;
  document.getElementById("lessonStatus").textContent = isComplete(lesson.day) ? "已完成" : lessonReady(lesson) ? "可以结课" : "进行中";
  document.getElementById("lessonStatus").previousElementSibling.textContent = isComplete(lesson.day) ? "✓" : "◎";
  document.getElementById("goalList").innerHTML = lesson.goals.map(goal => `<li>${goal}</li>`).join("");
  document.getElementById("visualCard").innerHTML = renderVisual(lesson);
  document.querySelectorAll(".tab").forEach(tab => { const active = tab.dataset.tab === state.tab; tab.classList.toggle("active", active); tab.setAttribute("aria-selected", active); });
  document.getElementById("tabContent").innerHTML = state.tab === "learn" ? renderLearn(lesson) : state.tab === "practice" ? renderPractice(lesson) : state.tab === "notes" ? renderNotes(lesson) : renderQuiz(lesson);
  document.getElementById("quizBadge").textContent = `${lessonQuizScore(lesson.day)}/${QUIZ_SIZE}`;
  const prev = document.getElementById("prevDay"); const next = document.getElementById("nextDay");
  prev.disabled = lesson.day === 1; prev.style.opacity = lesson.day === 1 ? ".45" : "1";
  next.textContent = isComplete(lesson.day) ? (lesson.day === 15 ? "已完成 ✓" : "下一天 →") : lessonReady(lesson) ? (lesson.day === 15 ? "完成课程 ✓" : "完成并进入下一天 →") : "下一天 →";
  document.getElementById("footerHint").textContent = lessonReady(lesson) ? (isComplete(lesson.day) ? "今天已经留下学习记录" : "练习和测验都达标了，可以结课") : "完成练习和测验后，可以标记今天完成";
  bindContentEvents(lesson);
}

function bindContentEvents(lesson) {
  document.querySelectorAll("[data-step]").forEach(button => button.addEventListener("click", () => {
    const index = Number(button.dataset.step); state.stepDone[lessonKey(lesson.day,index)] = true; persist(); render(); showToast("跟练步骤已记录");
  }));
  document.querySelectorAll("[data-task]").forEach(input => input.addEventListener("change", () => {
    state.taskDone[lessonKey(lesson.day, Number(input.dataset.task))] = input.checked; persist(); render();
  }));
  document.querySelectorAll("[data-question]").forEach(input => input.addEventListener("change", () => {
    if (!state.answers[lesson.day]) state.answers[lesson.day] = [];
    state.answers[lesson.day][Number(input.dataset.question)] = Number(input.value); persist();
  }));
  document.querySelectorAll("[data-note-field]").forEach(input => input.addEventListener("input", () => {
    if (!state.notes[lesson.day] || typeof state.notes[lesson.day] !== "object") state.notes[lesson.day] = {};
    state.notes[lesson.day][input.dataset.noteField] = input.value;
    state.notes[lesson.day].updatedAt = new Date().toISOString();
    persist();
    const count = document.getElementById("noteCharCount");
    const status = document.getElementById("noteSaveStatus");
    if (count) count.textContent = `${noteLength(state.notes[lesson.day])} / 3600 字`;
    if (status) status.textContent = "正在保存…";
    clearTimeout(noteSaveTimer);
    noteSaveTimer = setTimeout(() => { if (status) status.textContent = "已自动保存到本机"; }, 350);
  }));
  const copyDayNotes = document.getElementById("copyDayNotes");
  if (copyDayNotes) copyDayNotes.addEventListener("click", async () => {
    const note = recordOrEmpty(state.notes[lesson.day]);
    if (!noteLength(note)) { showToast("先写下一点学习笔记再复制"); return; }
    const value = `第 ${lesson.day} 天：${lesson.title}\n\n今天学会了什么\n${note.learned || "（未填写）"}\n\n哪里还不清楚\n${note.unclear || "（未填写）"}\n\n遇到的错误或提醒\n${note.errors || "（未填写）"}`;
    try { await navigator.clipboard.writeText(value); } catch { const area = document.createElement("textarea"); area.value = value; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove(); }
    showToast("本日笔记已复制");
  });
  document.querySelectorAll("[data-copy]").forEach(button => button.addEventListener("click", async () => {
    const value = decodeURIComponent(button.dataset.copy);
    try { await navigator.clipboard.writeText(value); } catch { const area = document.createElement("textarea"); area.value = value; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove(); }
    button.textContent = "已复制 ✓"; setTimeout(() => { button.textContent = "复制代码"; }, 1500); showToast("代码已复制到剪贴板");
  }));
  document.querySelectorAll(".explain-button").forEach(button => button.addEventListener("click", () => {
    const title = decodeURIComponent(button.dataset.explainTitle);
    const concept = lesson.concepts.find(([conceptTitle]) => conceptTitle === title);
    openAssistant({ title, text: concept ? `${title}：${concept[1]}` : title, detail: concept ? conceptExplanation(concept[0], concept[1]) : null });
    document.getElementById("askInput").value = "用更简单的话解释，并告诉我怎么判断自己掌握了？";
  }));
  document.querySelectorAll("[data-mastery]").forEach(button => button.addEventListener("click", () => {
    state.mastery[lesson.day] = button.dataset.mastery;
    persist();
    render();
    showToast(`已记录：${masteryLabel(button.dataset.mastery)}`);
  }));
  const refreshQuiz = document.getElementById("refreshQuiz");
  if (refreshQuiz) refreshQuiz.addEventListener("click", () => {
    const current = state.quizSets[lesson.day] || [];
    let next = createQuizSet(lesson);
    for (let attempt = 0; attempt < 5 && next.join(",") === current.join(","); attempt += 1) next = createQuizSet(lesson);
    state.quizSets[lesson.day] = next;
    state.answers[lesson.day] = [];
    state.quizResults[lesson.day] = [];
    persist(); render(); showToast("已经换成另一组随机题");
  });
  const submit = document.getElementById("submitQuiz");
  if (submit) submit.addEventListener("click", () => {
    const answers = state.answers[lesson.day] || [];
    const activeSet = ensureQuizSet(lesson);
    if (activeSet.some(index => answers[index] === undefined)) { showToast("请先完成本次的 5 道题"); return; }
    if (!state.quizResults[lesson.day]) state.quizResults[lesson.day] = [];
    activeSet.forEach(index => { state.quizResults[lesson.day][index] = Number(answers[index]) === lesson.quiz[index][2]; });
    activeSet.forEach(index => {
      const correct = state.quizResults[lesson.day][index];
      const key = `${lesson.day}-${index}`;
      if (correct && state.reviewItems[key]) state.reviewItems[key].resolved = true;
      if (!correct) {
        const existing = state.reviewItems[key] || { day: lesson.day, index, misses: 0 };
        state.reviewItems[key] = { ...existing, misses: (existing.misses || 0) + 1, lastWrongAt: new Date().toISOString(), resolved: false };
      }
    });
    persist(); render(); showToast(`测验完成：${lessonQuizScore(lesson.day)} / ${QUIZ_SIZE}`);
  });
}

document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => { state.tab = tab.dataset.tab; persist(); render(); }));
document.getElementById("askButton").addEventListener("click", () => openAssistant());
document.getElementById("closeAsk").addEventListener("click", closeAssistant);
document.getElementById("askBackdrop").addEventListener("click", closeAssistant);
document.getElementById("reviewCenterButton").addEventListener("click", openReviewCenter);
document.getElementById("closeReview").addEventListener("click", closeReviewCenter);
document.getElementById("reviewBackdrop").addEventListener("click", closeReviewCenter);
document.getElementById("labCenterButton").addEventListener("click", () => { document.getElementById("sidebar").classList.remove("open"); openLabCenter(); });
document.getElementById("closeLab").addEventListener("click", closeLabCenter);
document.getElementById("labBackdrop").addEventListener("click", closeLabCenter);
document.getElementById("exportProgress").addEventListener("click", exportProgress);
document.getElementById("importProgress").addEventListener("click", () => document.getElementById("progressFile").click());
document.getElementById("progressFile").addEventListener("change", async (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  try { await importProgress(file); } catch { showToast("进度文件无法识别"); }
  event.target.value = "";
});
document.getElementById("selectionAsk").addEventListener("click", () => {
  openAssistant(pendingSelection);
});
document.getElementById("askSubmit").addEventListener("click", () => answerQuestion(document.getElementById("askInput").value));
document.getElementById("askInput").addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") { event.preventDefault(); answerQuestion(event.target.value); }
});
document.querySelectorAll("[data-suggest]").forEach(button => button.addEventListener("click", () => {
  document.getElementById("askInput").value = button.dataset.suggest;
  answerQuestion(button.dataset.suggest);
}));
document.addEventListener("mouseup", captureSelection);
document.addEventListener("keyup", captureSelection);
document.addEventListener("selectionchange", () => window.setTimeout(captureSelection, 0));
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeAssistant();
  closeReviewCenter();
  closeLabCenter();
});
document.getElementById("prevDay").addEventListener("click", () => { if (state.currentDay > 1) { state.currentDay -= 1; state.tab = "learn"; persist(); render(); } });
document.getElementById("nextDay").addEventListener("click", () => {
  const lesson = currentLesson();
  if (!isComplete(lesson.day)) {
    if (!lessonReady(lesson)) { state.tab = "practice"; persist(); render(); showToast(`先完成练习，并在测验中答对至少 ${Math.ceil(QUIZ_SIZE * 0.6)} 题`); return; }
    state.completed.push(lesson.day); persist(); render(); showToast(lesson.day === 15 ? "恭喜完成 15 天课程" : "今天已完成，继续下一天");
  }
  if (lesson.day < lessons.length) { state.currentDay += 1; state.tab = "learn"; persist(); render(); }
});
document.getElementById("menuToggle").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("focusButton").addEventListener("click", () => { document.body.classList.toggle("focus-mode"); showToast(document.body.classList.contains("focus-mode") ? "已进入专注模式" : "已退出专注模式"); });
document.getElementById("resetProgress").addEventListener("click", () => {
  if (window.confirm("确定要清空 15 天学习进度吗？")) { state = createDefaultState(); persist(); render(); showToast("进度已清空"); }
});

render();
