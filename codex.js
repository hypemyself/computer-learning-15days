const STORAGE_KEY = "freshmanCodexCourseV1";

const weeks = [
  {
    title: "第 1 周 · 会说清",
    description: "先熟悉工作区和任务沟通方式。目标不是写很多代码，而是让每一次请求都清楚、可检查。",
    outcome: "结业物：一份合格的任务请求",
    days: [
      { day: 1, title: "认识 Codex 工作区", learn: "找到项目、任务、对话、输入区、文件与验证结果的位置。", task: "对照标注图，用自己的话说出 6 个区域的作用。" },
      { day: 2, title: "项目与任务", learn: "理解项目是工作范围，任务是一次有明确目标的对话。", task: "为练习文件夹创建一个任务，只要求 Codex 读取并解释目录。" },
      { day: 3, title: "四段式请求", learn: "练习“目标、范围、约束、验收”结构。", task: "用本页提问练习生成一条完整任务请求。" },
      { day: 4, title: "提供有效上下文", learn: "学会引用文件、粘贴原始错误，并说明自己已经尝试过什么。", task: "准备一个含文件名、错误原文和预期结果的问题。" },
      { day: 5, title: "让 Codex 解释代码", learn: "要求它按零基础程度解释，不急着修改。", task: "选择一段 10–20 行代码，让 Codex 逐段说明输入、处理和输出。" },
      { day: 6, title: "先计划再执行", learn: "任务稍复杂时，先让 Codex 检查项目并列出步骤。", task: "让 Codex 为一个三步小改动拟计划，暂时不要改文件。" },
      { day: 7, title: "第一周复盘", learn: "区分模糊请求和可执行请求。", task: "把“帮我改好网页”重写成可验收的任务请求。" }
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
    concept: "Codex 桌面应用把一个文件夹当作项目，把围绕同一目标的对话当作任务。界面名称可能更新，但项目、对话、执行过程、输入和验证这几类信息不会消失。",
    steps: ["打开 Codex，先不要输入任何密码或私人信息。", "寻找项目或打开文件夹的入口，选择一个专门练习用的空文件夹。", "新建任务并输入：请只查看这个文件夹，不要修改，告诉我当前有哪些文件。", "对照上方图解，找出项目、对话、执行动态、输入区和结果区域。"],
    expected: "Codex 能说明练习文件夹的内容；你能指出至少 5 个主要区域，并知道输入文字的位置。",
    help: "如果按钮名称不同，截取整个 Codex 窗口并提问：我正在找“打开项目/文件夹”的入口，请根据截图只告诉我下一步。"
  },
  2: {
    concept: "项目限定 Codex 可以工作的文件范围；任务记录一个目标的上下文。补充同一目标时继续原任务，目标完全无关时再开新任务。",
    steps: ["在练习项目中新建任务，命名或描述为“认识项目结构”。", "要求 Codex 只读检查并用一句话解释每个文件的用途。", "在同一任务追问：哪个文件最可能是网页入口？请说明判断依据。", "再新建一个无关的练习任务，观察两个任务记录如何分开。"],
    expected: "你能在两个任务间切换，并能解释“项目是范围，任务是一次目标明确的工作记录”。",
    help: "若看不到任务列表，不要反复点击；先描述屏幕左侧和顶部的文字，让 Codex 帮你识别当前版本的入口。"
  },
  3: {
    concept: "四段式请求由目标、范围、约束和验收组成。它们分别回答“做什么、动哪里、必须守什么、怎样算完成”。",
    steps: ["向下进入提问练习，先只填写目标，观察清晰度得分。", "依次补充范围、约束和验收，直到显示 4/4。", "复制生成的请求，在练习项目的新任务中发送。", "阅读 Codex 的计划，确认它准备操作的文件没有超出范围。"],
    expected: "清晰度显示 4/4；生成内容包含四个标题，并且验收标准能通过实际操作或测试判断。",
    help: "如果某项一直未通过，查看分数下方的改进建议。验收中加入“打开、运行、测试、显示正常”等可检查动作。"
  },
  4: {
    concept: "上下文是解决问题所需的现场信息。最有用的内容通常是文件名、完整错误原文、复现步骤、预期结果和已经尝试的操作。",
    steps: ["找一段练习错误信息，或使用课程给出的虚构错误。", "记录错误发生在哪个文件或页面、你刚才做了什么。", "原样保留错误文字，不要只改写成“打不开”。", "把预期、实际、步骤和错误原文组成一条问题，但先要求只分析原因。"],
    expected: "问题中至少出现一个具体文件或页面、一段错误原文、复现步骤和预期结果。",
    help: "无法复制错误时可以截图，但要遮住姓名、账号、路径中的私人信息和任何密钥。"
  },
  5: {
    concept: "让 Codex 解释代码时，可以指定自己的基础、解释顺序和禁止修改。先理解输入、处理和输出，再决定是否改动。",
    steps: ["选择练习项目中 10 到 20 行代码，不要选择包含密码的内容。", "要求：按零基础解释，每次解释一个小段，暂时不要修改。", "继续追问这段代码接收什么输入、做了什么处理、产生什么输出。", "用自己的话写三句话复述，再让 Codex 检查理解是否正确。"],
    expected: "你能不看原解释，说出代码的输入、主要处理和输出；项目文件没有被修改。",
    help: "遇到陌生术语时选中它，使用页面右侧出现的问号按钮，把术语送入提问练习。"
  },
  6: {
    concept: "计划把复杂任务拆成可检查的小步骤。计划阶段应说明会读哪些文件、改哪些文件、如何验证，以及可能的风险。",
    steps: ["写一个包含三步的小改动，例如增加标题、按钮和点击提示。", "明确要求：先检查项目并给计划，此时不要修改文件。", "检查计划是否写明文件范围、实现顺序和验证方法。", "若范围太大，追问：请缩小到一次只完成最小可用版本。"],
    expected: "得到 3 到 6 步计划，至少包含检查、修改和验证，而且在你同意前没有文件变化。",
    help: "如果 Codex 已直接修改，要求它暂停并列出已改文件；不要急着删除，先打开变更审查确认影响。"
  },
  7: {
    concept: "可执行请求不等于写得很长，而是边界清楚、结果可验证。复盘的目的是找到自己最容易遗漏的一项。",
    steps: ["把“帮我改好网页”写在纸上或文档中。", "补充一个具体目标和允许修改的文件。", "补充必须保留的内容与明确不做的事项。", "写出至少两条可以亲自操作的验收标准，并在提问练习中检查。"],
    expected: "改写后的请求获得 4/4；同学只看请求就能判断哪些文件可改、什么结果算完成。",
    help: "卡住时从验收倒推：先写你最后准备点击或看到什么，再补目标、范围和约束。"
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
let toastTimer;

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function updateProgress() {
  const count = state.completed.length;
  const percent = Math.round((count / 28) * 100);
  document.getElementById("progressText").textContent = `已完成 ${count} / 28 天`;
  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressBar").style.width = `${percent}%`;
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
      if (input.checked) state.completed = [...new Set([...state.completed, day])].sort((a, b) => a - b);
      else state.completed = state.completed.filter(item => item !== day);
      saveState();
      updateProgress();
      renderWeek();
    });
  });
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

async function copyPrompt() {
  const text = document.getElementById("promptOutput").textContent;
  const status = document.getElementById("copyStatus");
  if (text === "请先填写左侧四项内容。") {
    status.textContent = "请先填写任务信息。";
    return;
  }
  status.textContent = "正在复制…";
  try {
    if (!navigator.clipboard?.writeText) throw new Error("clipboard-unavailable");
    await Promise.race([
      navigator.clipboard.writeText(text),
      new Promise((_, reject) => setTimeout(() => reject(new Error("clipboard-timeout")), 1200))
    ]);
    status.textContent = "已复制，可以粘贴到 Codex 的输入区。";
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
    status.textContent = copied
      ? "已复制，可以粘贴到 Codex 的输入区。"
      : "浏览器未允许自动复制，请选中文字后手动复制。";
  }
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

updateProgress();
renderWeek();
renderPractical();
renderQuiz();
buildPrompt();
