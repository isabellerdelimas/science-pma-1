const originalQuestions = [
  {
    topic: "Scientific Experiments",
    question: "A student writes a step-by-step list so another student can repeat the experiment exactly. What is that list called?",
    example: "Example: The directions say to measure 50 mL of water, place the seed in sunlight, and record height every Friday.",
    choices: ["Procedure", "Conclusion", "Line of best fit", "Outlier"],
    answer: "Procedure",
    explanation: "A procedure is the detailed step-by-step list for carrying out an experiment."
  },
  {
    topic: "Scientific Experiments",
    question: "In a controlled experiment, why should most factors be kept the same?",
    example: "Example: If you test how sunlight affects plant growth, the water, soil, pot size, and plant type should stay the same.",
    choices: ["So only the changed variable can explain the results", "So the experiment has no dependent variable", "So the data table is shorter", "So the hypothesis is automatically correct"],
    answer: "So only the changed variable can explain the results",
    explanation: "Constants help make sure the results are caused by the independent variable, not by other changes."
  },
  {
    topic: "Scientific Experiments",
    question: "Which choice is the independent variable in an experiment testing how fertilizer amount affects plant height?",
    example: "Example: One plant gets no fertilizer, one gets fertilizer once a week, and one gets fertilizer every day.",
    choices: ["The amount of fertilizer", "The final height of each plant", "The color of the data table", "The conclusion paragraph"],
    answer: "The amount of fertilizer",
    explanation: "The independent variable is the factor changed on purpose."
  },
  {
    topic: "Scientific Experiments",
    question: "Which choice is the dependent variable in an experiment testing how feeding schedule affects goldfish health?",
    example: "Example: One fish is fed every day, and another fish is fed every other day. After two weeks, their health is compared.",
    choices: ["The health of the fish after two weeks", "The type of fish", "The tank size", "The location of the tank"],
    answer: "The health of the fish after two weeks",
    explanation: "The dependent variable is the result measured in the experiment."
  },
  {
    topic: "Scientific Experiments",
    question: "What is the control in an experiment?",
    example: "Example: A plant that gets no fertilizer is compared with plants that get fertilizer.",
    choices: ["A standard trial used for comparison", "The variable changed on purpose", "A graph with bars", "A guess made after the experiment"],
    answer: "A standard trial used for comparison",
    explanation: "A control is the unchanged or standard setup used to compare results."
  },
  {
    topic: "Data and Graphs",
    question: "Why should observations be recorded during an experiment instead of long after it ends?",
    example: "Example: You write plant height down right after measuring it each week.",
    choices: ["To make the data more accurate and reliable", "To avoid using any measurements", "To make the graph unnecessary", "To change the hypothesis"],
    answer: "To make the data more accurate and reliable",
    explanation: "Recording data during the experiment reduces forgotten details and measurement mistakes."
  },
  {
    topic: "Data and Graphs",
    question: "Which display is best for recording exact measurements in rows and columns during an experiment?",
    example: "Example: Week 1, Week 2, and Week 3 plant heights are listed next to each plant number.",
    choices: ["Table", "Circle graph", "Outlier", "Inference"],
    answer: "Table",
    explanation: "Tables organize data in rows and columns so exact numbers can be compared quickly."
  },
  {
    topic: "Data and Graphs",
    question: "On a line graph, where does the independent variable usually go?",
    example: "Example: If plant height is measured each week, week number is the independent variable.",
    choices: ["On the x-axis", "On the y-axis", "Only in the title", "Inside the key"],
    answer: "On the x-axis",
    explanation: "The independent variable is usually plotted on the x-axis."
  },
  {
    topic: "Data and Graphs",
    question: "Which graph is best for showing continuous change over time?",
    example: "Example: A graph shows how a plant grows from week 1 to week 5.",
    choices: ["Line graph", "Circle graph", "Bar graph", "Answer key"],
    answer: "Line graph",
    explanation: "Line graphs are useful when data changes continuously, such as growth over time."
  },
  {
    topic: "Data and Graphs",
    question: "What does a scatter plot show?",
    example: "Example: Each point compares hours studied with a test score.",
    choices: ["The relationship between two sets of data", "Only the parts of a whole", "A step-by-step procedure", "A list of constants"],
    answer: "The relationship between two sets of data",
    explanation: "Scatter plots use ordered pairs to show whether two variables are related."
  },
  {
    topic: "Data and Graphs",
    question: "What is an outlier?",
    example: "Example: Most students who studied more scored higher, but one student studied a lot and scored much lower.",
    choices: ["A data point that does not fit the usual pattern", "The title of the graph", "The scale on the x-axis", "The control group"],
    answer: "A data point that does not fit the usual pattern",
    explanation: "An outlier is noticeably different from the general trend in the data."
  },
  {
    topic: "Data and Graphs",
    question: "What is the purpose of a line of best fit?",
    example: "Example: A straight line is drawn through a scatter plot to show the overall trend in the points.",
    choices: ["To describe the general relationship among the points", "To connect every point in order", "To erase outliers", "To label the dependent variable"],
    answer: "To describe the general relationship among the points",
    explanation: "A line of best fit shows the overall trend even if no single point lies exactly on it."
  },
  {
    topic: "Data and Graphs",
    question: "Which graph is best for comparing categories, such as favorite pets?",
    example: "Example: Dogs, cats, birds, and lizards are each shown with a different rectangle height.",
    choices: ["Bar graph", "Line graph", "Procedure", "Control"],
    answer: "Bar graph",
    explanation: "Bar graphs compare categories using rectangles of different heights."
  },
  {
    topic: "Data and Graphs",
    question: "Which graph shows parts of a whole, like slices of a pie?",
    example: "Example: A class survey shows what fraction of students chose each ice cream flavor.",
    choices: ["Circle graph", "Line graph", "Scatter plot", "Data table"],
    answer: "Circle graph",
    explanation: "Circle graphs, also called pie charts, show how a whole is divided into parts."
  },
  {
    topic: "Data and Graphs",
    question: "What does it mean to infer?",
    example: "Example: Scientists find crushed bones near a fossil and use that evidence to decide what an animal may have eaten.",
    choices: ["Use observations and facts to reach a conclusion", "Change all variables at once", "Copy a procedure exactly", "Make data less precise"],
    answer: "Use observations and facts to reach a conclusion",
    explanation: "To infer is to use evidence and background knowledge to reach a conclusion."
  },
  {
    topic: "Energy",
    question: "What does the law of conservation of energy state?",
    example: "Example: A moving ball slows down as its energy changes form instead of disappearing.",
    choices: ["Energy cannot be created or destroyed, only changed or transferred", "Energy can only exist as heat", "Energy disappears whenever objects stop moving", "Energy is created by every graph"],
    answer: "Energy cannot be created or destroyed, only changed or transferred",
    explanation: "Energy is conserved, meaning the total amount stays the same even when it changes form."
  },
  {
    topic: "Energy",
    question: "A moving soccer ball has which type of energy because it is in motion?",
    example: "Example: After someone kicks the ball, it rolls across the field.",
    choices: ["Kinetic energy", "Chemical energy", "Elastic energy", "Nuclear energy"],
    answer: "Kinetic energy",
    explanation: "Kinetic energy is the energy of motion."
  },
  {
    topic: "Energy",
    question: "A book sitting on a high shelf has more of which energy than the same book on a low shelf?",
    example: "Example: The higher book has farther to fall.",
    choices: ["Gravitational potential energy", "Sound energy", "Electric energy", "Thermal radiation"],
    answer: "Gravitational potential energy",
    explanation: "Gravitational potential energy is stored energy based on height."
  },
  {
    topic: "Energy",
    question: "What happens when a pen is dropped from a desk?",
    example: "Example: Before falling, the pen has stored energy because of its position. While falling, it is moving.",
    choices: ["Potential energy changes into kinetic energy", "Kinetic energy changes into nuclear energy", "Sound energy changes into chemical energy", "Thermal energy stops existing"],
    answer: "Potential energy changes into kinetic energy",
    explanation: "As an object falls, stored potential energy becomes motion energy."
  },
  {
    topic: "Energy",
    question: "Which object would have more kinetic energy if both are moving at the same speed?",
    example: "Example: Compare a bowling ball and a tennis ball rolling at the same speed.",
    choices: ["The object with more mass", "The object with less mass", "The object with no height", "The object that is colder"],
    answer: "The object with more mass",
    explanation: "Kinetic energy increases when mass increases, if speed stays the same."
  },
  {
    topic: "Energy",
    question: "Which type of energy is stored in stretched or compressed materials?",
    example: "Example: A stretched rubber band can snap back when released.",
    choices: ["Elastic energy", "Sound energy", "Electromagnetic energy", "Thermal energy"],
    answer: "Elastic energy",
    explanation: "Elastic energy is potential energy stored when a material is stretched or compressed."
  },
  {
    topic: "Energy",
    question: "Which type of energy is stored in chemical bonds?",
    example: "Example: Food, oil, gas, coal, and firewood store energy that can be released.",
    choices: ["Chemical energy", "Line energy", "Scatter energy", "Convection energy"],
    answer: "Chemical energy",
    explanation: "Chemical energy is stored in bonds and can be released when bonds change or break."
  },
  {
    topic: "Energy",
    question: "Which energy is produced by the flow of electrons?",
    example: "Example: A circuit powers a small light when electrons move through the wire.",
    choices: ["Electric energy", "Elastic energy", "Gravitational potential energy", "Nuclear energy"],
    answer: "Electric energy",
    explanation: "Electric energy comes from moving electrons."
  },
  {
    topic: "Thermal Energy",
    question: "What is temperature?",
    example: "Example: Hot cocoa molecules move faster on average than cold chocolate milk molecules.",
    choices: ["The average kinetic energy of molecules in a substance", "The total energy of every object in a room", "The transfer of heat by direct contact", "The amount of light waves in a substance"],
    answer: "The average kinetic energy of molecules in a substance",
    explanation: "Temperature measures the average kinetic energy of molecules."
  },
  {
    topic: "Thermal Energy",
    question: "How is thermal energy different from temperature?",
    example: "Example: A stack of bricks can have more total thermal energy than one brick, even if both are the same temperature.",
    choices: ["Thermal energy is the sum of kinetic and potential energies of all molecules", "Thermal energy is only the average kinetic energy", "Thermal energy only happens in solids", "Thermal energy is the same as a graph scale"],
    answer: "Thermal energy is the sum of kinetic and potential energies of all molecules",
    explanation: "Temperature is an average, while thermal energy is the total molecular energy in a substance."
  },
  {
    topic: "Thermal Energy",
    question: "What is heat?",
    example: "Example: A warm mug transfers energy to a cooler hand.",
    choices: ["The transfer of thermal energy from warmer to cooler objects", "The stored energy in chemical bonds", "The energy of a still object on a shelf", "The shape of a circle graph"],
    answer: "The transfer of thermal energy from warmer to cooler objects",
    explanation: "Heat is thermal energy moving from a warmer object to a cooler one."
  },
  {
    topic: "Thermal Energy",
    question: "Which example shows conduction?",
    example: "Example: Heat moves because objects are touching.",
    choices: ["A metal spoon getting hot in a pot of soup", "The sun warming Earth", "Warm air rising from a heater", "A flashlight shining across a room"],
    answer: "A metal spoon getting hot in a pot of soup",
    explanation: "Conduction is heat transfer through direct contact."
  },
  {
    topic: "Thermal Energy",
    question: "Which example shows radiation?",
    example: "Example: Energy travels through electromagnetic rays.",
    choices: ["Feeling warmth from sunlight", "Touching a hot pan", "Warm water circulating in a pot", "A table recording exact numbers"],
    answer: "Feeling warmth from sunlight",
    explanation: "Radiation transfers heat through electromagnetic waves, such as sunlight."
  },
  {
    topic: "Thermal Energy",
    question: "Which example shows convection?",
    example: "Example: Heat moves as a fluid such as air or water circulates.",
    choices: ["Warm air rising and cooler air sinking in a room", "A hand touching a hot stove", "A rubber band storing energy", "A test score plotted as an ordered pair"],
    answer: "Warm air rising and cooler air sinking in a room",
    explanation: "Convection transfers heat through movement of a fluid."
  },
  {
    topic: "Thermal Energy",
    question: "Thermal energy naturally moves in which direction?",
    example: "Example: A hot bowl of soup warms the cooler air around it.",
    choices: ["From warmer objects to cooler objects", "From cooler objects to warmer objects only", "From smaller objects to larger objects only", "From the x-axis to the y-axis"],
    answer: "From warmer objects to cooler objects",
    explanation: "Thermal energy transfers from higher energy to lower energy until temperatures become equal."
  }
];

let questions = [...originalQuestions];
let currentIndex = 0;
let answers = [];
let flagged = [];
let submitted = false;
let lastShuffleMode = false;
let revealedExamples = [];
const maxQuestionCount = 200;

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultsScreen = document.querySelector("#results-screen");
const scorePill = document.querySelector("#score-pill");
const progressPill = document.querySelector("#progress-pill");
const questionCountInput = document.querySelector("#question-count");
const questionCountHelp = document.querySelector("#question-count-help");
const topicLabel = document.querySelector("#topic-label");
const questionText = document.querySelector("#question-text");
const exampleBtn = document.querySelector("#example-btn");
const exampleBox = document.querySelector("#example-box");
const answersNode = document.querySelector("#answers");
const dotsNode = document.querySelector("#question-dots");
const flagBtn = document.querySelector("#flag-btn");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const resultsTitle = document.querySelector("#results-title");
const resultsMessage = document.querySelector("#results-message");
const reviewList = document.querySelector("#review-list");

function shuffleList(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function setScreen(screen) {
  [startScreen, quizScreen, resultsScreen].forEach((item) => item.classList.remove("active"));
  screen.classList.add("active");
}

function getQuestionCount() {
  const requestedCount = Number.parseInt(questionCountInput.value, 10);
  const safeCount = Number.isFinite(requestedCount) ? requestedCount : 10;
  const questionCount = Math.min(Math.max(safeCount, 1), maxQuestionCount);
  questionCountInput.value = String(questionCount);
  questionCountHelp.textContent = `up to ${maxQuestionCount} questions`;
  return questionCount;
}

function buildQuestionSet(shouldShuffle) {
  const questionCount = getQuestionCount();
  const sourceQuestions = shouldShuffle ? shuffleList(originalQuestions) : [...originalQuestions];
  questions = Array.from({ length: questionCount }, (_, index) => {
    const question = sourceQuestions[index % sourceQuestions.length];
    return {
      ...question,
      choices: shouldShuffle || index >= sourceQuestions.length ? shuffleList(question.choices) : [...question.choices]
    };
  });
}

function startTest(shouldShuffle = false) {
  lastShuffleMode = shouldShuffle;
  buildQuestionSet(shouldShuffle);
  currentIndex = 0;
  answers = Array(questions.length).fill(null);
  flagged = Array(questions.length).fill(false);
  revealedExamples = Array(questions.length).fill(false);
  submitted = false;
  scorePill.textContent = "In progress";
  reviewList.classList.remove("active");
  reviewList.innerHTML = "";
  setScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentIndex];
  topicLabel.textContent = question.topic;
  questionText.textContent = `${currentIndex + 1}. ${question.question}`;
  exampleBox.textContent = question.example;
  exampleBtn.classList.toggle("hidden", revealedExamples[currentIndex]);
  exampleBox.classList.toggle("hidden", !revealedExamples[currentIndex]);
  progressPill.textContent = `${currentIndex + 1} / ${questions.length}`;
  flagBtn.setAttribute("aria-pressed", String(flagged[currentIndex]));
  flagBtn.title = flagged[currentIndex] ? "Unflag question" : "Flag question";

  answersNode.innerHTML = "";
  question.choices.forEach((choice, choiceIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-choice";
    if (answers[currentIndex] === choice) {
      button.classList.add("selected");
    }
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(answers[currentIndex] === choice));
    button.innerHTML = `<span class="choice-letter">${String.fromCharCode(65 + choiceIndex)}</span><span>${choice}</span>`;
    button.addEventListener("click", () => {
      answers[currentIndex] = choice;
      renderQuestion();
    });
    answersNode.appendChild(button);
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.textContent = currentIndex === questions.length - 1 ? "Submit" : "Next";
  renderDots();
}

function renderDots() {
  dotsNode.innerHTML = "";
  questions.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    dot.textContent = String(index + 1);
    dot.title = `Go to question ${index + 1}`;
    if (index === currentIndex) dot.classList.add("current");
    if (answers[index]) dot.classList.add("answered");
    if (flagged[index]) dot.classList.add("flagged");
    dot.addEventListener("click", () => {
      currentIndex = index;
      renderQuestion();
    });
    dotsNode.appendChild(dot);
  });
}

function submitTest() {
  submitted = true;
  const correctCount = questions.reduce((count, question, index) => {
    return count + (answers[index] === question.answer ? 1 : 0);
  }, 0);
  const percent = Math.round((correctCount / questions.length) * 100);
  scorePill.textContent = `${percent}%`;
  progressPill.textContent = `${correctCount} / ${questions.length}`;
  resultsTitle.textContent = `Score: ${correctCount} out of ${questions.length}`;
  resultsMessage.textContent = getResultsMessage(percent);
  setScreen(resultsScreen);
}

function getResultsMessage(percent) {
  if (percent >= 90) return "Strong work. Review the explanations anyway so the vocabulary stays sharp.";
  if (percent >= 75) return "Good progress. A quick review of the missed questions should tighten this up.";
  if (percent >= 60) return "You know some of the ideas. Focus on variables, graph types, and heat transfer examples.";
  return "Use the review as a study guide, then retake it. The explanations point to the exact concept each question checks.";
}

function renderReview() {
  reviewList.innerHTML = "";
  questions.forEach((question, index) => {
    const userAnswer = answers[index] || "No answer selected";
    const isCorrect = userAnswer === question.answer;
    const item = document.createElement("article");
    item.className = "review-item";
    item.innerHTML = `
      <h3>${index + 1}. ${question.question}</h3>
      <div class="status-text ${isCorrect ? "correct-text" : "wrong-text"}">${isCorrect ? "Correct" : "Incorrect"}</div>
      <p><strong>Your answer:</strong> ${userAnswer}</p>
      <p><strong>Correct answer:</strong> ${question.answer}</p>
      <p>${question.explanation}</p>
    `;
    reviewList.appendChild(item);
  });
  reviewList.classList.add("active");
}

document.querySelector("#start-btn").addEventListener("click", () => startTest(false));
document.querySelector("#shuffle-btn").addEventListener("click", () => startTest(true));

questionCountInput.addEventListener("change", () => {
  const questionCount = getQuestionCount();
  progressPill.textContent = `0 / ${questionCount}`;
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex === questions.length - 1) {
    submitTest();
    return;
  }
  currentIndex += 1;
  renderQuestion();
});

flagBtn.addEventListener("click", () => {
  flagged[currentIndex] = !flagged[currentIndex];
  renderQuestion();
});

exampleBtn.addEventListener("click", () => {
  revealedExamples[currentIndex] = true;
  renderQuestion();
});

document.querySelector("#review-btn").addEventListener("click", renderReview);
document.querySelector("#retry-btn").addEventListener("click", () => {
  startTest(lastShuffleMode);
});

progressPill.textContent = `0 / ${getQuestionCount()}`;
