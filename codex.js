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
      { day: 6, title: "先计划再执行", learn: "任务稍复杂时，先让 Codex检查项目并列出步骤。", task: "让 Codex 为一个三步小改动拟计划，暂时不要改文件。" },
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

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const completed = Array.isArray(saved?.completed) ? saved.completed.filter(day => Number.isInteger(day) && day >= 1 && day <= 28) : [];
    const week = Number.isInteger(saved?.week) && saved.week >= 0 && saved.week <= 3 ? saved.week : 0;
    return { completed: [...new Set(completed)], week };
  } catch (_error) {
    return { completed: [], week: 0 };
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
    return `
      <article class="day-card ${done ? "done" : ""}">
        <div class="day-check">
          <input id="codex-day-${item.day}" type="checkbox" data-day="${item.day}" ${done ? "checked" : ""} />
          <label for="codex-day-${item.day}" aria-label="标记第 ${item.day} 天${done ? "未完成" : "完成"}">${done ? "✓" : item.day}</label>
        </div>
        <div><h3>第 ${item.day} 天 · ${item.title}</h3><p>${item.learn}</p><div class="day-task"><span>→</span>${item.task}</div></div>
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
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = "已复制，可以粘贴到 Codex 的输入区。";
  } catch (_error) {
    status.textContent = "浏览器未允许自动复制，请选中文字后手动复制。";
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
  if (answered < quizQuestions.length) result.textContent = `已答 ${answered}/5 题，请完成全部题目后再判断是否达标。`;
  else if (score >= 4) result.textContent = `${score}/5，知识测验达标。接下来完成 28 天结业项目。`;
  else result.textContent = `${score}/5，建议复习界面、任务描述、安全和验证四个板块后重试。`;
  document.getElementById("graduation").scrollIntoView({ behavior: "smooth", block: "start" });
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
  if (!window.confirm("确定重置 Codex 28 天学习进度吗？原 15 天电脑课进度不会受影响。")) return;
  state = { completed: [], week: 0 };
  saveState();
  updateProgress();
  renderWeek();
  showToast("Codex 学习进度已重置");
});

document.querySelectorAll("#promptForm textarea").forEach(input => input.addEventListener("input", buildPrompt));
document.getElementById("copyPrompt").addEventListener("click", copyPrompt);
document.getElementById("checkQuiz").addEventListener("click", checkQuiz);
document.getElementById("selectionHelper").addEventListener("click", useSelectedText);
document.addEventListener("pointerup", () => setTimeout(updateSelectionHelper, 0));
document.addEventListener("keyup", event => {
  if (event.key === "Shift" || event.key.startsWith("Arrow")) setTimeout(updateSelectionHelper, 0);
});
window.addEventListener("scroll", () => { document.getElementById("selectionHelper").hidden = true; }, { passive: true });

updateProgress();
renderWeek();
renderQuiz();
buildPrompt();
