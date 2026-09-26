const STORAGE_KEY = "freshmanCodexCourseV1";

const weeks = [
  {
    title: "第 1 周 · 会说清",
    description: "先熟悉工作区和任务沟通方式。目标不是写很多代码，而是让每一次请求都清楚、可检查。",
    outcome: "结业物：一份合格的任务请求",
    days: [
      { day: 1, title: "认识 ChatGPT Work 窗口", learn: "找到顶部菜单、左侧工作区、中央任务标题、对话区和底部输入区。", task: "对照截图示意图，用自己的话说出 8 个带编号位置的作用。" },
      { day: 2, title: "工作区与项目入口", learn: "理解 ChatGPT Work 是宿主工作区，项目用于组织任务、仓库和本地目录。", task: "在截图中找出 computer learn 项目、项目行右侧按钮和新聊天入口。" },
      { day: 3, title: "读懂项目弹层", learn: "区分任务数量、GitHub 仓库、本地路径等可见信息，不把路径当作自动授权。", task: "把项目弹层中的信息分成“它告诉我什么”和“我还需要确认什么”。" },
      { day: 4, title: "新聊天与当前任务", learn: "知道什么时候新建聊天，什么时候回到已有任务继续补充上下文。", task: "为“只读认识项目结构”写一条新任务，并说明为什么不接着无关任务。" },
      { day: 5, title: "看懂对话与执行记录", learn: "识别用户气泡、Codex 计划、用时和结果，把执行过程当作可复核记录。", task: "从一段对话中找出请求、计划、状态和结果各一处。" },
      { day: 6, title: "输入区与完全访问", learn: "学会在输入区写请求、添加相关文件，并理解权限提示的风险。", task: "先发送一条只读请求，再解释“完全访问”出现时你会检查哪些事项。" },
      { day: 7, title: "模型选择与第一周复盘", learn: "知道模型名称会变化，最终质量仍靠范围、复核和验证来保证。", task: "把“帮我改好网页”重写成可验收请求，并列出发送后要检查的三项证据。" }
    ]
  },
  {
    title: "第 2 周 · 会完成",
    description: "从一个安全的小改动开始，完整经历检查、修改、复核和验证，而不是只等待最终答案。",
    outcome: "结业物：一个经过验证的小功能",
    days: [
      { day: 8, title: "先读懂现有项目", learn: "让 Codex 找入口文件、运行方式和现有设计习惯。", task: "请 Codex 只读检查一个项目，并总结文件分工。" },
      { day: 9, title: "完成一次文字改动", learn: "从范围最小、容易检查的任务开始。", task: "修改一处页面文字，要求保留其他内容不变。" },
      { day: 10, title: "完成一次样式改动", learn: "描述具体元素、状态和屏幕尺寸，不只说“更好看”。", task: "调整一个按钮的间距，并在桌面和手机尺寸检查。" },
      { day: 11, title: "看懂文件差异", learn: "认识新增、修改和删除，确认改动没有超出范围。", task: "让 Codex 总结每个变更文件的原因，再亲自打开核对。" },
      { day: 12, title: "要求运行验证", learn: "验证可以是测试、构建、控制台检查或实际操作流程。", task: "为昨天的改动写出至少 3 条可执行验收标准。" },
      { day: 13, title: "理解权限与风险", learn: "知道读文件、写文件、联网、安装和删除的风险不同。", task: "遇到一个看不懂的命令时，先让 Codex 逐段解释影响。" },
      { day: 14, title: "两周小项目", learn: "把前七天方法应用到一个完整小功能。", task: "为网页增加一个简单区块，完成计划、实现、检查和验证。" }
    ]
  },
  {
    title: "第 3 周 · 会排错",
    description: "把错误当成信息。你将练习保留现场、缩小范围、检查假设，并让 Codex 用证据说明原因。",
    outcome: "结业物：一份可复用的排错记录",
    days: [
      { day: 15, title: "保留原始错误", learn: "不要只说“打不开”，要提供原文、操作步骤和发生时间。", task: "用“预期、实际、步骤、原文”记录一次虚构故障。" },
      { day: 16, title: "查看控制台与日志", learn: "区分错误、警告和普通信息，先找最早的关键错误。", task: "请 Codex 解释一条控制台错误可能涉及的文件和原因。" },
      { day: 17, title: "Git 基础安全网", learn: "理解提交、工作区和差异，改动前留下可比较版本。", task: "在练习仓库查看状态并创建一次说明清楚的提交。" },
      { day: 18, title: "代码审查思维", learn: "从功能、风险、边界情况和缺失测试四个角度检查。", task: "让 Codex 审查一个小改动，并按严重程度列出问题。" },
      { day: 19, title: "网页视觉验证", learn: "真实打开页面，检查不同尺寸、交互和控制台。", task: "在桌面与手机尺寸分别检查导航、文字和按钮。" },
      { day: 20, title: "有效追问", learn: "指出哪个结果不符合预期，并提供新的证据，不必重开任务。", task: "针对一个不理想结果写出包含证据的追问。" },
      { day: 21, title: "排错挑战", learn: "一次只改变一个假设，修复后再运行相同验证。", task: "让 Codex 定位并修复 3 个小问题，逐个记录原因与验证。" }
    ]
  },
  {
    title: "第 4 周 · 会负责",
    description: "独立主导一个小项目。Codex 负责执行与分析，你负责范围、取舍、验收和最终决定。",
    outcome: "结业物：可展示的完整小项目",
    days: [
      { day: 22, title: "选择结业项目", learn: "项目应真实有用、范围小，并能在一周内完成。", task: "从学习网站、记账工具或成绩计算器中选一个方向。" },
      { day: 23, title: "写需求与验收", learn: "把想法拆成必须有、可以有和暂不做。", task: "写 5 条功能要求、3 条验收标准和明确的不做范围。" },
      { day: 24, title: "分阶段实现", learn: "先完成最小可用版本，再逐步增加功能。", task: "请 Codex 制定计划并完成第一阶段，结束后立即验证。" },
      { day: 25, title: "处理手机与无障碍", learn: "检查窄屏、键盘操作、标签和文字可读性。", task: "要求 Codex 检查手机布局和常用无障碍问题。" },
      { day: 26, title: "补齐测试", learn: "让测试覆盖主要流程、边界输入和失败情况。", task: "列出测试清单并实际执行，记录通过与失败项。" },
      { day: 27, title: "最终审查与说明", learn: "确认无秘密、无无关改动，并让别人知道如何运行。", task: "完成最终审查，更新 README 或使用说明。" },
      { day: 28, title: "演示与复盘", learn: "能解释目标、关键决定、验证证据和下一步，才算真正掌握。", task: "向同学演示项目，并写下 3 个学会的能力和 1 个下一步。" }
    ]
  }
];

const lessonDetails = {
  1: {
    concept: "你看到的截图属于 ChatGPT Work，Codex 是其中负责处理项目任务的能力。先认识顶部菜单、左侧工作区、中央任务和底部输入区，再开始发送请求。",
    steps: ["打开当前 Codex/ChatGPT Work 窗口，先不要输入密码、验证码或私人文件。", "依次指出顶部菜单、左侧导航、任务标题、对话记录和底部输入框。", "观察图中的编号 1–8，先只说出每个位置“显示什么”，不要点击示意按钮。", "在纸上写下一个只读请求：请只解释当前项目结构，不要修改任何文件。"],
    expected: "你能用自己的话说出至少 6 个编号位置，并知道任务文字应该写在底部输入区。",
    help: "如果你的按钮名称不同，截取整个 Codex 窗口并提问：请只帮我找出工作区侧栏、任务标题和输入区，不要执行操作。"
  },
  2: {
    concept: "ChatGPT Work 是宿主工作区；项目是组织任务、仓库和本地目录的入口。项目行右侧的按钮可能用于更多操作或编辑项目，但位置会随版本变化。",
    steps: ["在左侧找到 ChatGPT Work、‘新聊天’和‘项目’这几个区域。", "找到示例中的 computer learn 项目，观察项目行右侧的更多和编辑图标。", "区分‘新聊天’和项目中的已有任务：前者开始新上下文，后者可以继续原目标。", "只读描述你看到的项目名称和任务数量，不要修改项目设置。"],
    expected: "你能解释宿主工作区、项目和任务的区别，并能指出项目行的更多操作入口。",
    help: "如果没有看到相同项目名，使用你自己的练习项目；不要为了复刻截图创建或连接陌生仓库。"
  },
  3: {
    concept: "项目弹层里常见任务数、GitHub 仓库、本地目录和‘编辑项目’。它告诉你当前关联了什么，不等于你已经批准任何写入、联网或安装操作。",
    steps: ["打开项目弹层，先找‘任务数’、仓库名和本地路径。", "把看到的信息分成两列：‘可以确认的事实’和‘还需要问清的权限/范围’。", "检查路径中是否包含私人姓名或账号；公开提问前要遮住这些部分。", "向 Codex 提问：请解释这个项目关联的目录，但不要读取或修改文件。"],
    expected: "你能说出弹层至少 3 项信息，并明确路径信息与可执行权限不是一回事。",
    help: "项目弹层在你的版本中可能从右键或项目菜单打开；找不到时只描述当前屏幕，不要随意点击‘编辑项目’。"
  },
  4: {
    concept: "新聊天适合全新的目标；已有任务适合继续同一个目标。保持同一任务能保留上下文，但完全无关的问题应该另开任务，避免互相干扰。",
    steps: ["用‘新聊天’创建一个只读任务，写明‘只查看，不修改’。", "等待或查看 Codex 的计划后，在同一任务追问一个相关问题。", "想象一个完全无关的问题，说明为什么应该另开任务。", "区分普通任务与定时任务：一个是现在对话，一个按计划重复运行。"],
    expected: "你能为一个目标选择合适的入口，并能说明什么时候继续原任务、什么时候新建任务。",
    help: "如果发送后页面没有立即显示结果，先查看任务标题和执行状态，不要连续重复发送相同请求。"
  },
  5: {
    concept: "对话区会同时出现你的请求、Codex 的计划、用时提示和结果。把这些记录留下，之后才能复核它读了什么、为什么这样做。",
    steps: ["在示意图中圈出用户消息、Codex 回复和‘用时’状态。", "只发送一个解释请求：请说明项目入口文件，不要修改。", "观察 Codex 是否先给计划或说明读取范围；遇到陌生命令先要求解释。", "把请求、计划、状态和结果各抄一条，作为今天的学习证据。"],
    expected: "你能从对话中找出四类信息，并能用一句话说明‘用时’记录的作用。",
    help: "如果状态折叠或名称不同，先截图保存当前记录，再描述你看到的文字；不要凭猜测填写结果。"
  },
  6: {
    concept: "底部输入区是你交代目标的地方，旁边可能有添加文件/图片、权限提示和模型选择。‘完全访问’意味着需要更谨慎地检查影响范围。",
    steps: ["在输入区先写一个只读请求，并在末尾加上‘不要修改文件’。", "找到添加按钮，说明什么截图或文件与问题直接相关，什么不应该上传。", "看到‘完全访问’时，先问 Codex：需要哪些权限、目标路径是什么、如何恢复。", "模型名称只做记录，不把‘6 Sol Ultra’当作所有账号都会显示的固定选项。"],
    expected: "你能写出一条只读请求，并能说出批准权限前要检查的目标、影响和恢复方式。",
    help: "任何删除、覆盖、安装或发送私人数据的请求都先停下；把原提示文字发来，等待解释。"
  },
  7: {
    concept: "模型选择不会替你完成复核。第一周最后要把截图中的‘目标—执行—权限—模型—验证’串起来，用证据而不是‘看起来完成’做判断。",
    steps: ["把‘帮我改好网页’改写成目标、范围、约束和验收四段式请求。", "列出发送后要查看的三项证据：变更文件、实际页面和测试/错误信息。", "补充一句权限边界：不要删除、安装或修改项目外文件。", "回到界面图，口头复述 1–8 号位置各自帮助你做什么。"],
    expected: "请求达到 4/4 清晰度；你能列出至少 3 项可核验证据，并能说明模型名称可能变化。",
    help: "卡住时从验收倒推：先写最后准备点击或看到什么，再补目标、范围、约束和权限边界。"
  },
  8: {
    concept: "修改陌生项目前，先找到入口文件、运行方式、数据保存位置和现有风格。只读检查能降低误改风险。",
    steps: ["打开一个可恢复的练习项目。", "要求 Codex 只读检查目录，不安装软件、不修改文件。", "让它列出入口文件、主要文件分工、启动方法和测试方法。", "亲自在文件区打开它提到的入口文件，核对文件确实存在。"],
    expected: "得到简短项目地图；其中的文件名都能在项目中找到，且变更文件数量仍为 0。",
    help: "如果项目太大，限定只检查根目录、README 和配置文件，不要一次读取全部内容。"
  },
  9: {
    concept: "第一次修改应选择影响小、肉眼容易验证的内容。任务越小，越容易分辨 Codex 是否按要求执行。",
    steps: ["选定页面上的一处练习文字，并找到它所在文件。", "请求只修改这句话，明确其他文字和布局保持不变。", "执行后查看变更文件列表和差异。", "打开页面，确认新文字出现，其他相邻内容没有改变。"],
    expected: "只有预期文件和文字行发生变化；刷新页面后新文字正确显示。",
    help: "页面没变化时先强制刷新，再让 Codex 检查你打开的地址是否对应当前项目，不要重复修改同一句。"
  },
  10: {
    concept: "样式任务要指出对象、属性、状态和屏幕尺寸。用“间距增加到 12px”比“更好看”更容易验收。",
    steps: ["选择一个按钮，记录它当前在桌面和手机上的样子。", "请求只调整按钮内边距或文字大小，保持颜色与功能不变。", "查看 CSS 变更，确认没有全局修改大量元素。", "分别在桌面和约 390 像素宽度下查看按钮。"],
    expected: "按钮在两种宽度下文字完整、不遮挡其他内容；只出现与目标相关的样式改动。",
    help: "若出现横向滚动，告诉 Codex 具体屏幕宽度和溢出的元素，请先定位原因再修复。"
  },
  11: {
    concept: "变更审查回答三个问题：新增、修改或删除了什么；为什么要改；是否超出任务范围。绿色或加号通常表示新增，红色或减号通常表示删除。",
    steps: ["打开刚完成任务的文件或审查视图。", "让 Codex 按文件列出每项改动及原因。", "亲自对照差异，逐项确认新增和删除的行。", "发现无关改动时，要求只撤回那一项并再次展示差异。"],
    expected: "你能指出每个变更文件的用途，并确认没有意外删除或与任务无关的修改。",
    help: "差异太多时暂停任务，让 Codex 按文件逐个解释；先从你明确要求修改的文件开始。"
  },
  12: {
    concept: "验证必须与目标对应。常见证据包括测试命令通过、构建成功、控制台无错误，以及亲自完成关键操作流程。",
    steps: ["为昨天的改动写三条验收：正常情况、手机情况、一个边界情况。", "要求 Codex 说明每条验收准备怎样验证。", "允许执行与项目已有方式一致的测试，不随意安装新工具。", "亲自完成至少一条手动操作，并记录看到的结果。"],
    expected: "三条验收都有结果和证据，不只写“看起来正常”；失败项被明确保留。",
    help: "项目没有自动测试时，用可重复的手动步骤验证，例如“打开网址→点击按钮→看到指定文字”。"
  },
  13: {
    concept: "读文件通常风险较低；写入会改变内容；联网会发送或下载数据；安装改变环境；删除可能难以恢复。权限提示是在让你判断范围和必要性。",
    steps: ["找到一次权限请求或让 Codex 给出一个安全示例，不实际执行。", "要求逐段解释命令、目标路径、会改变什么和能否恢复。", "核对目标是否位于你的练习项目中。", "询问是否有只读、范围更小或可恢复的替代方案。"],
    expected: "你能说出操作类型、准确目标、影响和恢复方式；看不懂时会选择暂停。",
    help: "路径指向系统目录、私人文件或项目外部，或命令包含删除/覆盖而目的不明时，不要批准。"
  },
  14: {
    concept: "一个完整小功能要经历目标、计划、实现、审查和验证五步。是否完成由验收证据决定，而不是由改动数量决定。",
    steps: ["选择一个小区块，例如课程提醒或联系信息。", "写出四段式请求并要求先给计划。", "确认范围后让 Codex 实现，期间观察文件和命令。", "审查差异，在桌面与手机上验证，再记录结果。"],
    expected: "小功能真实可用；你保存了请求、变更文件列表、桌面与手机验证结果。",
    help: "当天无法完成时，停在一个可运行状态，记录已完成、未完成和下一步，不要为了赶进度扩大修改。"
  },
  15: {
    concept: "高质量故障记录包含预期、实际、复现步骤和原始错误。先保留现场，再尝试修复，能避免关键证据消失。",
    steps: ["选择一次真实小故障，或假设“点击保存后没有反应”。", "写下你原本期待看到的结果。", "按顺序记录从打开页面到故障发生的每一步。", "粘贴实际现象和完整错误原文，再交给 Codex 只分析。"],
    expected: "别人按照记录能够复现问题；错误内容没有被“好像坏了”之类的概括替代。",
    help: "故障已经消失时也可写记录，明确标注“暂时无法复现”，不要编造错误信息。"
  },
  16: {
    concept: "日志按时间记录程序行为。排错时先找最早出现的关键错误，因为后面的多条错误可能只是它造成的连锁结果。",
    steps: ["打开浏览器开发者工具或项目终端中的错误输出。", "区分 Error、Warning 和普通信息，先复制第一条 Error。", "同时记录错误涉及的文件名和行号（如果有）。", "让 Codex 解释错误含义、可能原因和最小验证办法，暂不改代码。"],
    expected: "你能指出第一条关键错误及关联文件，并得到一个先验证假设、再修改的排错方案。",
    help: "控制台内容太多时清空后只重复一次故障操作；不要一次贴入包含个人数据的全部日志。"
  },
  17: {
    concept: "Git 提交像项目存档点，工作区是尚未存档的变化，差异是两者之间的比较。提交前要确认没有密码和无关文件。",
    steps: ["在练习仓库查看 Git 状态。", "让 Codex 解释已修改和未跟踪文件，但先不要提交。", "检查差异和文件内容，排除秘密与无关改动。", "使用能说明原因的提交信息创建一次提交，再确认工作区状态。"],
    expected: "产生一个只包含本次练习改动的提交；提交信息说明改了什么，工作区状态可被解释。",
    help: "如果当前文件夹不是 Git 仓库，先让 Codex 解释初始化的影响；不确定时改用已存在的练习仓库。"
  },
  18: {
    concept: "代码审查不是问“好不好”，而是寻找功能错误、风险、边界情况和缺失验证，并按严重程度说明证据。",
    steps: ["选择一个最近的小改动并打开差异。", "要求 Codex 以审查方式检查，不要直接修复。", "要求问题按严重程度排列，并引用具体文件位置。", "对每个问题判断：能否复现、是否属于本次改动、需要什么测试。"],
    expected: "审查结果聚焦具体风险；即使没有发现问题，也明确说明尚未覆盖的测试或剩余风险。",
    help: "收到笼统建议时追问：请指出会导致什么实际错误、如何复现、对应哪段改动。"
  },
  19: {
    concept: "网页验证需要真实渲染。桌面正常不代表手机正常，还要检查文字、导航、按钮、交互、图片和页面是否横向溢出。",
    steps: ["在 Edge 打开练习网页，先完成主要操作流程。", "把视口切换到约 390×844，或缩窄浏览器窗口。", "从页面顶部滚到底部，操作导航、按钮和表单。", "记录控制台错误，并保存一张桌面和一张手机截图作为证据。"],
    expected: "两种尺寸都能完成主要流程；文字没有重叠或截断，页面没有整体横向滚动，控制台无新错误。",
    help: "发现问题时提供屏幕宽度、截图、操作步骤和对应元素，不只说“手机上不好看”。"
  },
  20: {
    concept: "有效追问沿用原任务上下文，指出哪条验收失败，并提供新的证据和期望。不要把同一问题拆成多个缺少上下文的新任务。",
    steps: ["从最近任务中选择一个未达预期的结果。", "引用原验收标准，说明哪一条未通过。", "附上实际现象、截图或错误原文。", "要求先解释原因和修复范围，完成后重复原验证。"],
    expected: "追问包含失败验收、新证据和明确下一步；Codex 能在原上下文中继续定位。",
    help: "如果 Codex 重复旧方案，追问它“新证据排除了哪些假设”，要求换一个可验证假设。"
  },
  21: {
    concept: "系统排错一次只验证一个假设。改变多个地方后即使问题消失，也很难知道真正原因，并可能引入新错误。",
    steps: ["准备一个含 2 到 3 个小问题的练习项目。", "让 Codex 先列问题和优先级，不立即一次性修完。", "每次只修一个问题，记录原因和改动文件。", "每次运行同一套验证，通过后再处理下一个。"],
    expected: "得到三段独立记录，每段都有现象、原因、最小改动和验证结果。",
    help: "修复导致新错误时先回看刚才的差异；保持其他假设不变，判断是否需要撤回这一步。"
  },
  22: {
    concept: "合适的结业项目应真实有用、范围小、可在一周完成并能展示。首选你已经理解内容结构的项目。",
    steps: ["列出学习网站、成绩计算器、记账工具三个候选方向。", "分别写出目标用户、一个核心问题和最小功能。", "排除需要登录、支付、真实隐私数据或复杂服务器的方案。", "选择一个项目，写出一句话项目目标。"],
    expected: "项目只服务一个明确用户问题，最小版本包含 1 到 3 个核心功能，一周内可以验证。",
    help: "难以取舍时选最容易用假数据演示、且不需要账号系统的项目。"
  },
  23: {
    concept: "需求分为必须有、可以有和暂不做。主动写“不做什么”可以阻止项目在实现过程中不断膨胀。",
    steps: ["写出 5 条用户能感知的功能要求。", "把它们分成必须有与可以有。", "写 3 条包含具体操作和结果的验收标准。", "写出至少 3 项暂不做范围，再让 Codex 检查是否存在歧义。"],
    expected: "需求、优先级、验收和不做范围齐全；最小版本不依赖“可以有”的功能也能使用。",
    help: "需求过多时只保留能解决核心问题的功能，其余移到“以后再做”。"
  },
  24: {
    concept: "分阶段实现先建立能运行的骨架，再增加核心功能，最后改善体验。每阶段结束都要处于可打开、可验证的状态。",
    steps: ["让 Codex 根据需求提出 2 到 4 个实现阶段。", "检查第一阶段只包含最小可运行骨架。", "允许完成第一阶段，审查变更文件。", "立即运行启动或页面验证，通过后再决定是否进入下一阶段。"],
    expected: "第一阶段可以独立运行；计划明确记录已完成、下一阶段和当前限制。",
    help: "第一阶段失败时不要继续叠加功能，先把范围缩到能打开的最小页面或能运行的最小程序。"
  },
  25: {
    concept: "手机与无障碍检查关注能否使用，而不只是外观。要检查键盘焦点、表单标签、对比度、文字缩放和窄屏布局。",
    steps: ["在约 390 像素宽度下检查全部页面。", "只用 Tab 和 Enter 完成主要操作，观察焦点是否可见。", "检查每个输入框是否有可读标签，按钮文字是否说明动作。", "让 Codex 修复确认存在的问题，再重复同一操作。"],
    expected: "手机无整体横向溢出；键盘能到达主要控件；输入、按钮和状态提示可被理解。",
    help: "一次只报告一个问题并附截图或操作路径，避免用“把无障碍都做好”这种无法验收的要求。"
  },
  26: {
    concept: "测试清单要覆盖主要流程、边界输入和失败情况。测试失败是信息，不能为了显示全绿而删除有价值的测试。",
    steps: ["列出用户最常完成的 2 到 3 个主要流程。", "为输入准备正常值、空值和一个边界值。", "运行项目已有测试，并按清单手动验证。", "记录每项通过、失败或未执行，以及对应证据。"],
    expected: "测试记录至少包含主要流程、一个边界输入和一个失败情况；失败项有后续处理决定。",
    help: "没有测试框架时不要急着安装复杂工具，先建立可重复的手动清单并保存结果。"
  },
  27: {
    concept: "最终审查确认功能、范围、安全和可交接性。使用说明应让第一次看到项目的人知道用途、打开方法和限制。",
    steps: ["检查 Git 状态与全部差异，确认没有秘密和临时文件。", "让 Codex 做最终审查，优先报告错误、风险和缺失测试。", "亲自复查关键文件并处理高风险问题。", "更新 README，写明用途、运行步骤、验证方法和已知限制。"],
    expected: "仓库内容与项目有关且无秘密；README 让同学按步骤打开项目；剩余限制被诚实记录。",
    help: "发现不认识的文件不要直接删除，先确认来源、是否被引用以及删除后的验证办法。"
  },
  28: {
    concept: "真正掌握意味着你能解释目标、关键决定、改动范围和验证证据，也知道哪些部分仍不确定。演示和复盘能暴露遗漏。",
    steps: ["用 3 分钟演示项目解决的问题和主要流程。", "展示任务请求、变更文件和至少一项验证证据。", "请同学完成一次操作，记录他卡住的位置。", "写下 3 个已经掌握的能力、1 个仍需练习的问题和下一步项目。"],
    expected: "别人能按你的说明使用项目；你能回答为什么这样做、如何证明正常、下一步准备改什么。",
    help: "演示失败也可以结业复盘：保留现场，记录失败步骤和证据，把修复作为下一个独立任务。"
  }
};

const practicalKeys = ["brief", "scope", "review", "verify"];

const quizQuestions = [
  {
    question: "下面哪条请求最容易让 Codex 正确执行？",
    options: ["帮我把项目弄好", "只修改登录页标题，保留布局；完成后检查桌面和手机，并列出改动文件", "随便改，越多越好"],
    answer: 1,
    explanation: "可执行的请求说明了目标、范围、约束和验收方式。"
  },
  {
    question: "Codex 准备执行一个你看不懂的删除命令时，应该怎么做？",
    options: ["直接允许", "关闭电脑", "先暂停，让它解释目标路径、影响范围和替代方案"],
    answer: 2,
    explanation: "删除和覆盖可能难以恢复，确认准确目标与影响后再决定。"
  },
  {
    question: "Codex 说“已完成”后，最可靠的下一步是什么？",
    options: ["检查变更文件并运行相关测试或实际操作", "只看最后一句话", "马上删除旧版本"],
    answer: 0,
    explanation: "完成状态只是说明，文件差异、测试和实际页面才是证据。"
  },
  {
    question: "网页打不开时，怎样向 Codex 提供最有效的信息？",
    options: ["只说网页坏了", "提供操作步骤、预期结果、实际现象和完整错误原文", "连续发送问号"],
    answer: 1,
    explanation: "完整现场信息能帮助 Codex 缩小原因范围，避免猜测。"
  },
  {
    question: "什么时候适合创建一个新任务？",
    options: ["每补充一句话都新建", "目标完全无关或需要独立上下文时", "Codex 正在执行当前任务时"],
    answer: 1,
    explanation: "同一目标的补充应留在原任务；无关目标使用新任务更清晰。"
  }
];

function createEmptyPractical() {
  return Object.fromEntries(practicalKeys.map(key => [key, { done: false, evidence: "" }]));
}

function normalizeState(candidate = {}) {
  if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) candidate = {};
  const completed = Array.isArray(candidate.completed)
    ? candidate.completed.filter(day => Number.isInteger(day) && day >= 1 && day <= 28)
    : [];
  const week = Number.isInteger(candidate.week) && candidate.week >= 0 && candidate.week <= 3 ? candidate.week : 0;
  const practical = createEmptyPractical();
  practicalKeys.forEach(key => {
    const savedItem = candidate.practical?.[key];
    if (!savedItem || typeof savedItem !== "object") return;
    practical[key] = {
      done: savedItem.done === true,
      evidence: typeof savedItem.evidence === "string" ? savedItem.evidence.slice(0, 2000) : ""
    };
  });
  const practicalPassed = practicalKeys.every(key => practical[key].done && practical[key].evidence.trim().length >= 10);
  const quizScore = Number.isInteger(candidate.quizScore) && candidate.quizScore >= 0 && candidate.quizScore <= quizQuestions.length
    ? candidate.quizScore
    : null;
  return { completed: [...new Set(completed)].sort((a, b) => a - b), week, practical, practicalPassed, quizScore };
}

function loadState() {
  try {
    return normalizeState(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  } catch (_error) {
    return normalizeState();
  }
}

let state = loadState();
let selectedCourseText = "";
let activeDay = null;
let toastTimer;

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_error) {
    // Private browsing or a blocked storage policy should not stop the lesson UI.
  }
}

function updateProgress() {
  const count = state.completed.length;
  const percent = Math.round((count / 28) * 100);
  document.getElementById("progressText").textContent = `已完成 ${count} / 28 天`;
  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressBar").style.width = `${percent}%`;
}

function getDayData(dayNumber) {
  for (let weekIndex = 0; weekIndex < weeks.length; weekIndex += 1) {
    const item = weeks[weekIndex].days.find(day => day.day === dayNumber);
    if (item) return { item, lesson: lessonDetails[dayNumber], week: weeks[weekIndex], weekIndex };
  }
  return null;
}

function setDayCompleted(day, completed) {
  if (completed) state.completed = [...new Set([...state.completed, day])].sort((a, b) => a - b);
  else state.completed = state.completed.filter(item => item !== day);
  saveState();
  updateProgress();
  renderWeek();
}

function renderRoadmapMap() {
  const phaseNames = ["会说清", "会完成", "会排错", "会负责"];
  const phaseOutcomes = ["表达任务", "完成改动", "定位问题", "独立交付"];
  document.getElementById("roadmapMapStatus").textContent = `${state.completed.length} / 28`;
  document.getElementById("roadmapMap").innerHTML = weeks.map((week, weekIndex) => `
    <section class="roadmap-lane week-${weekIndex + 1}" aria-label="第 ${weekIndex + 1} 周：${phaseNames[weekIndex]}">
      <header><span>W${weekIndex + 1}</span><div><h4>${phaseNames[weekIndex]}</h4><p>${phaseOutcomes[weekIndex]}</p></div></header>
      <div class="roadmap-days">
        ${week.days.map(day => {
          const done = state.completed.includes(day.day);
          const current = activeDay === day.day;
          return `<a class="roadmap-day ${done ? "done" : ""} ${current ? "current" : ""}" href="#day-${day.day}" data-open-day="${day.day}" aria-label="进入第 ${day.day} 天：${day.title}${done ? "，已完成" : ""}"><span>${done ? "✓" : day.day}</span><strong>${day.title}</strong></a>`;
        }).join("")}
      </div>
    </section>
  `).join("");
}

function buildDailyAgenda(item, lesson) {
  return [
    { time: "00–10", phase: "理解", action: `阅读“今天先懂”，然后用一句自己的话解释：${item.learn}` },
    { time: "10–15", phase: "跟做 1", action: lesson.steps[0] },
    { time: "15–20", phase: "跟做 2", action: lesson.steps[1] },
    { time: "20–25", phase: "跟做 3", action: lesson.steps[2] },
    { time: "25–30", phase: "跟做 4", action: lesson.steps[3] },
    { time: "30–45", phase: "独立任务", action: item.task },
    { time: "45–55", phase: "验收", action: `停止继续修改，按这条标准亲自检查：${lesson.expected}` },
    { time: "55–60", phase: "保存记录", action: "保存今天的请求、截图或命令结果；写下“完成了什么、证据在哪里、还有什么不懂”。" }
  ];
}

function buildDayEvidence(item, lesson, weekIndex) {
  const weeklyEvidence = [
    "你亲自写下的一段解释或完整任务请求",
    "变更文件清单，以及修改前后的页面截图",
    "原始错误、原因判断、最小改动和复测结果",
    "需求或阶段产物、最终审查记录和演示结果"
  ];
  return [
    weeklyEvidence[weekIndex],
    `独立任务结果：${item.task}`,
    `验收记录：${lesson.expected}`
  ];
}

function buildDayPrompt(item, lesson) {
  return `我正在学习 Codex 28 天入门课的第 ${item.day} 天：${item.title}。

今天目标：${item.learn}
今天的独立任务：${item.task}
完成标准：${lesson.expected}

请把我当作电脑和编程零基础新生，一次只告诉我一个操作步骤，等我回复“完成”或发来错误后再继续。不要假设我理解术语；第一次出现术语时用一句通俗的话解释。不要删除文件、覆盖原内容、安装软件或修改系统设置；确实需要时先解释目的、准确范围和可恢复方法。最后请带我按完成标准亲自验收，并提醒我保存证据。`;
}

function updateDayNavigation(link, targetDay, fallbackHash, label) {
  link.setAttribute("aria-label", label);
  if (targetDay) {
    link.href = `#day-${targetDay}`;
    link.dataset.openDay = String(targetDay);
  } else {
    link.href = fallbackHash;
    delete link.dataset.openDay;
  }
}

function renderDayWorkspace(dayNumber) {
  const data = getDayData(dayNumber);
  if (!data) return;
  const { item, lesson, weekIndex } = data;
  const workspace = document.getElementById("dayWorkspace");
  workspace.hidden = false;
  document.getElementById("dayWorkspacePhase").textContent = `第 ${weekIndex + 1} 周 · 第 ${item.day} 天 · 60 分钟`;
  document.getElementById("dayWorkspaceTitle").textContent = item.title;
  document.getElementById("dayWorkspaceLead").textContent = item.learn;
  document.getElementById("dayPosition").textContent = `${item.day} / 28`;
  document.getElementById("activeDayConcept").textContent = lesson.concept;
  document.getElementById("activeDayExpected").textContent = lesson.expected;
  document.getElementById("activeDayHelp").textContent = lesson.help;
  document.getElementById("activeDayPrompt").textContent = buildDayPrompt(item, lesson);
  document.getElementById("dayPromptStatus").textContent = "";
  document.getElementById("activeDayComplete").checked = state.completed.includes(item.day);
  document.getElementById("dailyAgenda").innerHTML = buildDailyAgenda(item, lesson).map(row => `
    <li><time>${row.time}</time><div><strong>${row.phase}</strong><p>${row.action}</p></div></li>
  `).join("");
  document.getElementById("activeDayEvidence").innerHTML = buildDayEvidence(item, lesson, weekIndex).map(evidence => `<li>${evidence}</li>`).join("");
  updateDayNavigation(document.getElementById("previousDay"), item.day > 1 ? item.day - 1 : null, "#roadmap", item.day > 1 ? `进入第 ${item.day - 1} 天` : "返回路线图");
  updateDayNavigation(document.getElementById("nextDay"), item.day < 28 ? item.day + 1 : null, "#graduation", item.day < 28 ? `进入第 ${item.day + 1} 天` : "前往结业验收");
}

function openDay(dayNumber, options = {}) {
  const data = getDayData(dayNumber);
  if (!data) return;
  activeDay = dayNumber;
  state.week = data.weekIndex;
  saveState();
  renderWeek();
  if (options.updateHash !== false && window.location.hash !== `#day-${dayNumber}`) history.pushState(null, "", `#day-${dayNumber}`);
  if (options.scroll !== false) requestAnimationFrame(() => document.getElementById("dayWorkspace").scrollIntoView({ behavior: "smooth", block: "start" }));
}

function renderWeek() {
  const week = weeks[state.week];
  document.querySelectorAll(".week-tab").forEach((button, index) => {
    const active = index === state.week;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });

  const completedThisWeek = week.days.filter(item => state.completed.includes(item.day)).length;
  document.getElementById("weekSummary").innerHTML = `
    <div><h3>${week.title}</h3><p>${week.description}</p></div>
    <span>${week.outcome} · ${completedThisWeek}/7</span>
  `;

  document.getElementById("dayGrid").innerHTML = week.days.map(item => {
    const done = state.completed.includes(item.day);
    const lesson = lessonDetails[item.day];
    return `
      <article class="day-card ${done ? "done" : ""}">
        <div class="day-check">
          <input id="codex-day-${item.day}" type="checkbox" data-day="${item.day}" ${done ? "checked" : ""} />
          <label for="codex-day-${item.day}" aria-label="标记第 ${item.day} 天${done ? "未完成" : "完成"}">${done ? "✓" : item.day}</label>
        </div>
        <div class="day-content">
          <h3>第 ${item.day} 天 · ${item.title}</h3>
          <p>${item.learn}</p>
          <div class="day-task"><span>→</span>${item.task}</div>
          <a class="open-day-task" href="#day-${item.day}" data-open-day="${item.day}">进入第 ${item.day} 天任务界面 <span>→</span></a>
          <details class="day-guide">
            <summary>打开今日引导</summary>
            <div class="lesson-block"><strong>今天先懂</strong><p>${lesson.concept}</p></div>
            <div class="lesson-block"><strong>跟着做</strong><ol>${lesson.steps.map(step => `<li>${step}</li>`).join("")}</ol></div>
            <div class="lesson-block expected"><strong>你应该看到</strong><p>${lesson.expected}</p></div>
            <div class="lesson-block help"><strong>卡住时怎么办</strong><p>${lesson.help}</p></div>
          </details>
        </div>
      </article>
    `;
  }).join("");

  document.querySelectorAll("[data-day]").forEach(input => {
    input.addEventListener("change", () => {
      const day = Number(input.dataset.day);
      setDayCompleted(day, input.checked);
    });
  });
  renderRoadmapMap();
  if (activeDay) renderDayWorkspace(activeDay);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function buildPrompt() {
  const fields = [
    ["任务目标", document.getElementById("goalInput").value.trim()],
    ["允许范围", document.getElementById("scopeInput").value.trim()],
    ["必须遵守", document.getElementById("constraintInput").value.trim()],
    ["验收标准", document.getElementById("acceptanceInput").value.trim()]
  ];
  const hasContent = fields.some(([, value]) => value);
  const output = document.getElementById("promptOutput");
  const checks = [
    { id: "qualityGoal", pass: fields[0][1].length >= 8, feedback: "把目标写得更具体，至少说明要得到什么结果。" },
    { id: "qualityScope", pass: fields[1][1].length >= 5, feedback: "补充允许查看或修改的文件、页面或项目范围。" },
    { id: "qualityConstraint", pass: fields[2][1].length >= 5, feedback: "写明必须保留的内容，或明确不能做的操作。" },
    { id: "qualityAcceptance", pass: fields[3][1].length >= 8 && /(检查|测试|打开|通过|正常|运行|显示|点击|没有|无错误)/.test(fields[3][1]), feedback: "把验收改成可以操作和观察的结果，例如“打开页面并检查按钮正常”。" }
  ];
  const score = checks.filter(check => check.pass).length;
  document.getElementById("promptScore").textContent = `${score} / 4`;
  checks.forEach(check => {
    const item = document.getElementById(check.id);
    item.classList.toggle("pass", check.pass);
    item.classList.toggle("fail", !check.pass);
  });
  document.getElementById("promptFeedback").textContent = score === 4
    ? "四项都清楚，可以复制使用。发送前再确认没有密码或私人信息。"
    : checks.find(check => !check.pass).feedback;
  document.getElementById("copyStatus").textContent = "";
  if (!hasContent) {
    output.textContent = "请先填写左侧四项内容。";
    return;
  }
  output.textContent = `${fields.map(([label, value]) => `${label}：${value || "待补充"}`).join("\n")}

请先检查现有项目并说明你的实施计划。完成后列出修改的文件、运行的验证以及仍存在的限制；如果需要执行删除、覆盖或安装操作，请先说明影响。`;
}

async function copyText(text) {
  try {
    if (!navigator.clipboard?.writeText) throw new Error("clipboard-unavailable");
    await Promise.race([
      navigator.clipboard.writeText(text),
      new Promise((_, reject) => setTimeout(() => reject(new Error("clipboard-timeout")), 1200))
    ]);
    return true;
  } catch (_error) {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    const copied = document.execCommand("copy");
    helper.remove();
    return copied;
  }
}

async function copyPrompt() {
  const text = document.getElementById("promptOutput").textContent;
  const status = document.getElementById("copyStatus");
  if (text === "请先填写左侧四项内容。") {
    status.textContent = "请先填写任务信息。";
    return;
  }
  status.textContent = "正在复制…";
  const copied = await copyText(text);
  status.textContent = copied
    ? "已复制，可以粘贴到 Codex 的输入区。"
    : "浏览器未允许自动复制，请选中文字后手动复制。";
}

async function copyDayPrompt() {
  const status = document.getElementById("dayPromptStatus");
  status.textContent = "正在复制…";
  const copied = await copyText(document.getElementById("activeDayPrompt").textContent);
  status.textContent = copied
    ? "已复制。现在打开 Codex 新任务并粘贴。"
    : "浏览器未允许自动复制，请选中上方请求后手动复制。";
}

function renderQuiz() {
  document.getElementById("quizForm").innerHTML = quizQuestions.map((item, questionIndex) => `
    <article class="quiz-question" data-question="${questionIndex}">
      <fieldset>
        <legend>${questionIndex + 1}. ${item.question}</legend>
        <div class="quiz-options">
          ${item.options.map((option, optionIndex) => `<label><input type="radio" name="quiz-${questionIndex}" value="${optionIndex}" /> <span>${option}</span></label>`).join("")}
        </div>
        <p class="quiz-explanation" hidden></p>
      </fieldset>
    </article>
  `).join("");
}

function checkQuiz() {
  let score = 0;
  let answered = 0;
  quizQuestions.forEach((item, index) => {
    const card = document.querySelector(`[data-question="${index}"]`);
    const selected = document.querySelector(`input[name="quiz-${index}"]:checked`);
    const explanation = card.querySelector(".quiz-explanation");
    card.classList.remove("correct", "incorrect");
    if (selected) {
      answered += 1;
      const correct = Number(selected.value) === item.answer;
      if (correct) score += 1;
      card.classList.add(correct ? "correct" : "incorrect");
      explanation.textContent = `${correct ? "回答正确。" : `正确答案：${item.options[item.answer]}。`} ${item.explanation}`;
    } else {
      explanation.textContent = "这一题尚未作答。";
    }
    explanation.hidden = false;
  });

  const result = document.getElementById("quizResult");
  if (answered < quizQuestions.length) {
    state.quizScore = null;
    result.textContent = `已答 ${answered}/${quizQuestions.length} 题，请完成全部题目后再判断是否达标。`;
  } else if (score >= 4) {
    state.quizScore = score;
    result.textContent = `${score}/${quizQuestions.length}，知识测验达标。再确认实践验收和 28 天进度。`;
  } else {
    state.quizScore = score;
    result.textContent = `${score}/${quizQuestions.length}，建议复习界面、任务描述、安全和验证四个板块后重试。`;
  }
  saveState();
  document.getElementById("graduation").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderPractical() {
  practicalKeys.forEach(key => {
    document.querySelector(`[data-practical-check="${key}"]`).checked = state.practical[key].done;
    document.querySelector(`[data-practical-evidence="${key}"]`).value = state.practical[key].evidence;
    document.querySelector(`[data-practical-card="${key}"]`).classList.remove("passed", "needs-work");
  });
  document.getElementById("practicalResult").textContent = state.practicalPassed
    ? "4/4，实践验收已达标。进度已保存在本机浏览器。"
    : "尚未检查";
}

function checkPractical() {
  let passed = 0;
  practicalKeys.forEach(key => {
    const item = state.practical[key];
    const isValid = item.done && item.evidence.trim().length >= 10;
    const card = document.querySelector(`[data-practical-card="${key}"]`);
    card.classList.toggle("passed", isValid);
    card.classList.toggle("needs-work", !isValid);
    if (isValid) passed += 1;
  });
  state.practicalPassed = passed === practicalKeys.length;
  saveState();
  document.getElementById("practicalResult").textContent = state.practicalPassed
    ? "4/4，实践验收已达标。请继续完成知识测验和 28 天项目。"
    : `${passed}/4 达标。未通过项需要同时勾选，并填写至少 10 个字的具体证据。`;
}

function exportProgress() {
  const payload = {
    schemaVersion: 2,
    course: "codex-28-day",
    exportedAt: new Date().toISOString(),
    state: normalizeState(state)
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `codex-learning-progress-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
  showToast("学习进度已导出");
}

async function importProgress(file) {
  try {
    const payload = JSON.parse(await file.text());
    if (payload?.course && payload.course !== "codex-28-day") throw new Error("course");
    const candidate = payload?.state ?? payload;
    const hasCourseFields = candidate && typeof candidate === "object" && !Array.isArray(candidate)
      && ["completed", "week", "practical", "quizScore"].some(key => Object.prototype.hasOwnProperty.call(candidate, key));
    if (!hasCourseFields) throw new Error("schema");
    const imported = normalizeState(candidate);
    if (!window.confirm("导入会覆盖当前 Codex 学习进度，是否继续？")) return;
    state = imported;
    saveState();
    updateProgress();
    renderWeek();
    renderPractical();
    renderQuiz();
    document.getElementById("quizResult").textContent = state.quizScore === null
      ? "尚未检查"
      : `上次知识测验得分：${state.quizScore}/${quizQuestions.length}。导入文件不包含每道题的选择，请重新作答后再检查。`;
    showToast("学习进度导入成功");
  } catch (_error) {
    window.alert("无法导入：请选择从本课程导出的 JSON 进度文件。");
  } finally {
    document.getElementById("codexProgressFile").value = "";
  }
}

function updateSelectionHelper() {
  const helper = document.getElementById("selectionHelper");
  const selection = window.getSelection();
  const text = selection ? selection.toString().trim().replace(/\s+/g, " ") : "";
  const activeTag = document.activeElement?.tagName;
  if (text.length < 2 || text.length > 240 || ["TEXTAREA", "INPUT"].includes(activeTag)) {
    helper.hidden = true;
    return;
  }
  const range = selection.rangeCount ? selection.getRangeAt(0) : null;
  if (!range) return;
  const rect = range.getBoundingClientRect();
  selectedCourseText = text;
  const left = Math.min(window.innerWidth - 44, Math.max(10, rect.right + 7));
  const top = Math.min(window.innerHeight - 44, Math.max(10, rect.bottom + 7));
  helper.style.setProperty("--selection-left", `${left}px`);
  helper.style.setProperty("--selection-top", `${top}px`);
  helper.hidden = false;
}

function useSelectedText() {
  if (!selectedCourseText) return;
  document.getElementById("goalInput").value = `请用适合电脑零基础新生的语言解释：“${selectedCourseText}”`;
  document.getElementById("scopeInput").value = "这段文字来自 Codex 入门课程，只解释这个概念并给一个简单例子。";
  document.getElementById("constraintInput").value = "不要假设我已经懂编程术语；不执行命令，也不修改文件。";
  document.getElementById("acceptanceInput").value = "我能用自己的话复述，并能判断什么时候会用到它。";
  buildPrompt();
  document.getElementById("selectionHelper").hidden = true;
  window.getSelection()?.removeAllRanges();
  document.getElementById("prompt-lab").scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("已把选中文字放入提问练习");
}

document.querySelectorAll(".week-tab").forEach(button => {
  button.addEventListener("click", () => {
    state.week = Number(button.dataset.week);
    saveState();
    renderWeek();
  });
});

document.getElementById("resetProgress").addEventListener("click", () => {
  if (!window.confirm("确定重置 Codex 28 天进度、实践证据和测验成绩吗？原 15 天电脑课进度不会受影响。")) return;
  state = normalizeState();
  saveState();
  updateProgress();
  renderWeek();
  renderPractical();
  renderQuiz();
  document.getElementById("quizResult").textContent = "尚未检查";
  showToast("Codex 学习进度已重置");
});

document.querySelectorAll("#promptForm textarea").forEach(input => input.addEventListener("input", buildPrompt));
document.querySelectorAll("[data-practical-check]").forEach(input => input.addEventListener("change", () => {
  const key = input.dataset.practicalCheck;
  state.practical[key].done = input.checked;
  state.practicalPassed = false;
  document.querySelector(`[data-practical-card="${key}"]`).classList.remove("passed", "needs-work");
  document.getElementById("practicalResult").textContent = "内容已保存，完成后点击“检查实践证据”。";
  saveState();
}));
document.querySelectorAll("[data-practical-evidence]").forEach(input => input.addEventListener("input", () => {
  const key = input.dataset.practicalEvidence;
  state.practical[key].evidence = input.value;
  state.practicalPassed = false;
  document.querySelector(`[data-practical-card="${key}"]`).classList.remove("passed", "needs-work");
  document.getElementById("practicalResult").textContent = "内容已保存，完成后点击“检查实践证据”。";
  saveState();
}));
document.getElementById("copyPrompt").addEventListener("click", copyPrompt);
document.getElementById("copyDayPrompt").addEventListener("click", copyDayPrompt);
document.getElementById("activeDayComplete").addEventListener("change", event => {
  if (activeDay) setDayCompleted(activeDay, event.target.checked);
});
document.addEventListener("click", event => {
  const dayLink = event.target.closest("[data-open-day]");
  if (!dayLink) return;
  const day = Number(dayLink.dataset.openDay);
  if (!Number.isInteger(day) || day < 1 || day > 28) return;
  event.preventDefault();
  openDay(day);
});
document.getElementById("exportCodexProgress").addEventListener("click", exportProgress);
document.getElementById("importCodexProgress").addEventListener("click", () => document.getElementById("codexProgressFile").click());
document.getElementById("codexProgressFile").addEventListener("change", event => {
  const [file] = event.target.files;
  if (file) importProgress(file);
});
document.getElementById("checkPractical").addEventListener("click", checkPractical);
document.getElementById("checkQuiz").addEventListener("click", checkQuiz);
document.getElementById("selectionHelper").addEventListener("click", useSelectedText);
document.addEventListener("pointerup", () => setTimeout(updateSelectionHelper, 0));
document.addEventListener("keyup", event => {
  if (event.key === "Shift" || event.key.startsWith("Arrow")) setTimeout(updateSelectionHelper, 0);
});
window.addEventListener("scroll", () => { document.getElementById("selectionHelper").hidden = true; }, { passive: true });
function syncDayFromHash() {
  const match = window.location.hash.match(/^#day-(\d{1,2})$/);
  if (match) openDay(Number(match[1]), { updateHash: false });
  else if (activeDay) {
    activeDay = null;
    document.getElementById("dayWorkspace").hidden = true;
    renderRoadmapMap();
  }
}
window.addEventListener("hashchange", syncDayFromHash);
window.addEventListener("popstate", syncDayFromHash);

updateProgress();
renderWeek();
renderPractical();
renderQuiz();
buildPrompt();
const initialDayMatch = window.location.hash.match(/^#day-(\d{1,2})$/);
if (initialDayMatch) openDay(Number(initialDayMatch[1]), { updateHash: false });
