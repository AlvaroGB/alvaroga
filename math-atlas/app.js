const topics = [
  {
    id: 'number-sense',
    title: 'Number Sense',
    icon: '🔢',
    age: '7+',
    short: 'Spot patterns, compare numbers, and build number confidence.',
    deep: 'Numbers are not just “answers.” They have size, order, place value, and patterns hiding inside them.',
    levels: [
      'Starter: count, compare, and find odd/even numbers.',
      'Builder: place value, skip counting, and number lines.',
      'Explorer: factor pairs, multiples, and tricky comparisons.'
    ],
    generator(level) {
      if (level === 0) {
        return makeQuestion({
          prompt: 'Which number is bigger?',
          answers: [12, 20, 15, 9],
          correct: 1,
          explain: '20 is bigger than 12 because it has more tens.',
          deep: 'Place value helps you compare numbers fast: first tens, then ones.'
        });
      }
      if (level === 1) {
        return makeQuestion({
          prompt: 'What comes next? 5, 10, 15, __',
          answers: [18, 20, 21, 25],
          correct: 1,
          explain: 'The pattern adds 5 each time, so the next number is 20.',
          deep: 'Skip counting is the start of multiplication thinking.'
        });
      }
      return makeQuestion({
        prompt: 'Which number is a factor of 12?',
        answers: [5, 7, 4, 9],
        correct: 2,
        explain: '4 is a factor because 12 ÷ 4 = 3 with no remainder.',
        deep: 'Factors are numbers that fit into another number exactly.'
      });
    }
  },
  {
    id: 'arithmetic',
    title: 'Addition & Subtraction',
    icon: '➕',
    age: '7+',
    short: 'Add, subtract, and notice how numbers move.',
    deep: 'Addition and subtraction are about combining and separating amounts. The same idea works with tiny or huge numbers.',
    levels: [
      'Starter: easy sums and differences.',
      'Builder: two-digit problems and regrouping ideas.',
      'Explorer: missing numbers and mental math tricks.'
    ],
    generator(level) {
      if (level === 0) {
        return makeQuestion({
          prompt: 'What is 7 + 5?',
          answers: [10, 11, 12, 13],
          correct: 2,
          explain: '7 + 5 = 12.',
          deep: 'You can think of 7 + 5 as 7 + 3 + 2, which lands on 12.'
        });
      }
      if (level === 1) {
        return makeQuestion({
          prompt: 'What is 14 - 6?',
          answers: [6, 7, 8, 9],
          correct: 2,
          explain: '14 - 6 = 8.',
          deep: 'Subtraction asks: how many are left after taking away some?' 
        });
      }
      return makeQuestion({
        prompt: 'What number makes 18 - __ = 11?',
        answers: [5, 6, 7, 8],
        correct: 2,
        explain: '18 - 7 = 11, so the missing number is 7.',
        deep: 'Missing-number problems are just subtraction in disguise.'
      });
    }
  },
  {
    id: 'multiplication',
    title: 'Multiply & Divide',
    icon: '✖️',
    age: '8+',
    short: 'Learn equal groups, sharing, and quick facts.',
    deep: 'Multiplication is repeated addition. Division is the reverse idea: sharing or grouping fairly.',
    levels: [
      'Starter: equal groups and easy facts.',
      'Builder: times-table practice and simple division.',
      'Explorer: arrays, remainders, and fact families.'
    ],
    generator(level) {
      if (level === 0) {
        return makeQuestion({
          prompt: 'What is 3 × 4?',
          answers: [7, 8, 12, 14],
          correct: 2,
          explain: '3 groups of 4 is 12.',
          deep: '3 × 4 means 4 + 4 + 4, which equals 12.'
        });
      }
      if (level === 1) {
        return makeQuestion({
          prompt: 'What is 12 ÷ 3?',
          answers: [2, 3, 4, 6],
          correct: 2,
          explain: '12 split into 3 equal groups gives 4 in each group.',
          deep: 'Division is “how many in each group?” or “how many groups?”'
        });
      }
      return makeQuestion({
        prompt: 'Which fact matches 5 × 6?',
        answers: ['5 + 6', '6 + 6 + 6 + 6 + 6', '5 + 5 + 5 + 5 + 5 + 5', '30 - 6'],
        correct: 2,
        explain: '5 × 6 is five groups of 6, which is 6 + 6 + 6 + 6 + 6.',
        deep: 'Arrays and skip counting help you see multiplication as a structure.'
      });
    }
  },
  {
    id: 'fractions',
    title: 'Fractions',
    icon: '🍕',
    age: '8+',
    short: 'Parts of a whole, fair sharing, and simple comparisons.',
    deep: 'Fractions tell you how many equal parts you have and how many parts make the whole.',
    levels: [
      'Starter: halves, thirds, and quarters.',
      'Builder: fraction size and simple equivalence.',
      'Explorer: compare, add, and think about units.'
    ],
    generator(level) {
      if (level === 0) {
        return makeQuestion({
          prompt: 'Which is bigger?',
          answers: ['1/2', '1/4', '1/8', '1/6'],
          correct: 0,
          explain: 'Half is bigger than a quarter, an eighth, or a sixth.',
          deep: 'When the whole is the same, fewer pieces means bigger pieces.'
        });
      }
      if (level === 1) {
        return makeQuestion({
          prompt: 'How many quarters make one whole?',
          answers: [2, 3, 4, 5],
          correct: 2,
          explain: '4 quarters make one whole.',
          deep: 'The denominator tells you how many equal parts the whole has.'
        });
      }
      return makeQuestion({
        prompt: 'Which is the same as 1/2?',
        answers: ['2/4', '1/3', '3/5', '4/6'],
        correct: 0,
        explain: '2/4 is the same size as 1/2.',
        deep: 'Equivalent fractions look different but have the same value.'
      });
    }
  },
  {
    id: 'geometry',
    title: 'Geometry',
    icon: '🔺',
    age: '7+',
    short: 'Shapes, space, turns, and visual thinking.',
    deep: 'Geometry is the math of shape, position, and motion in space.',
    levels: [
      'Starter: name common shapes.',
      'Builder: count sides, corners, and lines of symmetry.',
      'Explorer: angles, area, and shape rules.'
    ],
    generator(level) {
      if (level === 0) {
        return makeQuestion({
          prompt: 'How many sides does a triangle have?',
          answers: [2, 3, 4, 5],
          correct: 1,
          explain: 'A triangle has 3 sides.',
          deep: 'Shapes can be described by sides, corners, and angles.'
        });
      }
      if (level === 1) {
        return makeQuestion({
          prompt: 'Which shape has 4 equal sides?',
          answers: ['Rectangle', 'Square', 'Triangle', 'Pentagon'],
          correct: 1,
          explain: 'A square has 4 equal sides.',
          deep: 'A square is a special rectangle with all sides the same.'
        });
      }
      return makeQuestion({
        prompt: 'How many right angles are in a square?',
        answers: [2, 3, 4, 5],
        correct: 2,
        explain: 'A square has 4 right angles.',
        deep: 'A right angle is a 90° corner. Four of them make a square.'
      });
    }
  },
  {
    id: 'patterns',
    title: 'Patterns & Algebra',
    icon: '🧩',
    age: '8+',
    short: 'Find rules, missing numbers, and hidden machines.',
    deep: 'Algebra begins when you describe patterns with rules instead of just examples.',
    levels: [
      'Starter: simple patterns.',
      'Builder: missing numbers and rule finding.',
      'Explorer: input-output machines and early equations.'
    ],
    generator(level) {
      if (level === 0) {
        return makeQuestion({
          prompt: 'What comes next? 2, 4, 6, __',
          answers: [7, 8, 9, 10],
          correct: 1,
          explain: 'The pattern adds 2 each time, so the next number is 8.',
          deep: 'A pattern is a rule hiding inside a list.'
        });
      }
      if (level === 1) {
        return makeQuestion({
          prompt: 'If the rule is “add 3”, what goes after 5?',
          answers: [6, 7, 8, 9],
          correct: 2,
          explain: '5 + 3 = 8.',
          deep: 'A rule is like a recipe for numbers.'
        });
      }
      return makeQuestion({
        prompt: 'A machine turns 4 into 10. Which rule could fit?',
        answers: ['add 6', 'add 4', 'multiply by 2', 'subtract 6'],
        correct: 0,
        explain: '4 + 6 = 10, so “add 6” fits.',
        deep: 'Algebra asks: can you describe what the machine does?' 
      });
    }
  },
  {
    id: 'measurement',
    title: 'Measurement',
    icon: '📏',
    age: '7+',
    short: 'Length, time, mass, capacity, and comparing sizes.',
    deep: 'Measurement is about choosing a unit and comparing the world to that unit.',
    levels: [
      'Starter: compare length, time, and weight.',
      'Builder: read rulers and clocks.',
      'Explorer: unit conversion and estimation.'
    ],
    generator(level) {
      if (level === 0) {
        return makeQuestion({
          prompt: 'Which is longer?',
          answers: ['1 meter', '1 centimeter', '1 millimeter', '1 second'],
          correct: 0,
          explain: 'A meter is longer than a centimeter or millimeter.',
          deep: 'Choosing the right unit is a big part of measurement.'
        });
      }
      if (level === 1) {
        return makeQuestion({
          prompt: 'How many minutes are in 1 hour?',
          answers: [30, 45, 50, 60],
          correct: 3,
          explain: 'There are 60 minutes in an hour.',
          deep: 'Time is a measurement system with its own units.'
        });
      }
      return makeQuestion({
        prompt: 'About how many centimeters are in 1 meter?',
        answers: [10, 50, 100, 1000],
        correct: 2,
        explain: '1 meter is about 100 centimeters.',
        deep: 'Estimation helps when you do not need an exact answer.'
      });
    }
  },
  {
    id: 'logic',
    title: 'Logic & Problem Solving',
    icon: '🧠',
    age: '8+',
    short: 'Think carefully, use clues, and solve multi-step puzzles.',
    deep: 'Logic means using clues and rules to rule out wrong answers and keep the right ones.',
    levels: [
      'Starter: simple clue puzzles.',
      'Builder: choose the right path through a problem.',
      'Explorer: multi-step reasoning and careful checking.'
    ],
    generator(level) {
      if (level === 0) {
        return makeQuestion({
          prompt: 'If you have 2 red apples and 1 green apple, how many apples total?',
          answers: [2, 3, 4, 5],
          correct: 1,
          explain: '2 + 1 = 3 apples.',
          deep: 'Logic problems often hide a simple math sentence.'
        });
      }
      if (level === 1) {
        return makeQuestion({
          prompt: 'A box has 3 blue balls and 3 yellow balls. Which is true?',
          answers: ['There are 5 balls', 'There are 6 balls', 'There are 7 balls', 'There are 9 balls'],
          correct: 1,
          explain: '3 + 3 = 6.',
          deep: 'Break the story into pieces, then add them together.'
        });
      }
      return makeQuestion({
        prompt: 'Which clue solves the puzzle: “I am a number bigger than 5, smaller than 8, and even.”',
        answers: ['6', '7', '8', '5'],
        correct: 0,
        explain: '6 is bigger than 5, smaller than 8, and even.',
        deep: 'Logic often means eliminating choices one by one.'
      });
    }
  }
];

const STORAGE_KEY = 'math-atlas-progress-v1';

const state = {
  selectedTopicId: null,
  currentQuestion: null,
  locked: false,
  stars: 0,
  streak: 0,
  totalAnswered: 0,
  correctAnswered: 0,
  progress: {},
  showHint: false,
};

const els = {
  topicGrid: document.getElementById('topicGrid'),
  lessonTitle: document.getElementById('lessonTitle'),
  lessonPrompt: document.getElementById('lessonPrompt'),
  answerGrid: document.getElementById('answerGrid'),
  feedbackBox: document.getElementById('feedbackBox'),
  nextButton: document.getElementById('nextButton'),
  hintButton: document.getElementById('hintButton'),
  speakButton: document.getElementById('speakButton'),
  mixedButton: document.getElementById('mixedButton'),
  resetButton: document.getElementById('resetButton'),
  starsValue: document.getElementById('starsValue'),
  streakValue: document.getElementById('streakValue'),
  masteryValue: document.getElementById('masteryValue'),
  modeValue: document.getElementById('modeValue'),
  difficultyBadge: document.getElementById('difficultyBadge'),
  deepDiveTitle: document.getElementById('deepDiveTitle'),
  deepDiveText: document.getElementById('deepDiveText'),
};

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!stored) return;
    state.stars = stored.stars ?? 0;
    state.streak = stored.streak ?? 0;
    state.totalAnswered = stored.totalAnswered ?? 0;
    state.correctAnswered = stored.correctAnswered ?? 0;
    state.progress = stored.progress ?? {};
    state.selectedTopicId = stored.selectedTopicId ?? null;
  } catch {
    // ignore invalid storage
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      stars: state.stars,
      streak: state.streak,
      totalAnswered: state.totalAnswered,
      correctAnswered: state.correctAnswered,
      progress: state.progress,
      selectedTopicId: state.selectedTopicId,
    })
  );
}

function ensureProgress(topicId) {
  if (!state.progress[topicId]) {
    state.progress[topicId] = {
      correct: 0,
      seen: 0,
      mastery: 0,
      level: 0,
    };
  }
  return state.progress[topicId];
}

function getTopic(topicId) {
  return topics.find((t) => t.id === topicId);
}

function getSelectedTopic() {
  return getTopic(state.selectedTopicId) ?? topics[0];
}

function getModeLabel() {
  return state.selectedTopicId ? getSelectedTopic().title : 'Mixed review';
}

function getDifficultyLabel(level) {
  return ['Starter', 'Builder', 'Explorer'][level] ?? 'Starter';
}

function getDifficultyLevel(topicId) {
  const progress = ensureProgress(topicId);
  if (progress.mastery >= 70) return 2;
  if (progress.mastery >= 35) return 1;
  return 0;
}

function getMasteryAverage() {
  const values = topics.map((topic) => ensureProgress(topic.id).mastery);
  return Math.round(values.reduce((a, b) => a + b, 0) / values.length);
}

function renderTopics() {
  els.topicGrid.innerHTML = topics
    .map((topic) => {
      const progress = ensureProgress(topic.id);
      const active = topic.id === state.selectedTopicId ? 'active' : '';
      return `
        <button class="topic-card ${active}" data-topic="${topic.id}">
          <div class="topic-top">
            <div>
              <p class="topic-title">${topic.title}</p>
              <p class="topic-desc">${topic.short}</p>
            </div>
            <div class="topic-icon" aria-hidden="true">${topic.icon}</div>
          </div>
          <div class="progress-mini" aria-hidden="true"><span style="width:${progress.mastery}%"></span></div>
          <div class="topic-meta">
            <span>${topic.age}</span>
            <span>${progress.mastery}% mastered</span>
          </div>
        </button>
      `;
    })
    .join('');

  document.querySelectorAll('.topic-card').forEach((button) => {
    button.addEventListener('click', () => {
      startTopic(button.dataset.topic);
    });
  });
}

function renderStats() {
  els.starsValue.textContent = String(state.stars);
  els.streakValue.textContent = String(state.streak);
  els.masteryValue.textContent = `${getMasteryAverage()}%`;
  els.modeValue.textContent = getModeLabel();
}

function renderDeepDive(topic, unlocked = false) {
  els.deepDiveTitle.textContent = unlocked ? `Deep dive: ${topic.title}` : `Unlock ${topic.title} to see the deeper idea`;
  els.deepDiveText.textContent = unlocked ? topic.deep : 'When you’re ready, the app will show the bigger pattern behind the answer, not just the answer itself.';
}

function setFeedback(message, tone = '') {
  els.feedbackBox.className = `feedback-box ${tone}`.trim();
  els.feedbackBox.innerHTML = message;
}

function getWeightedTopicForMixed() {
  const scored = topics.map((topic) => {
    const progress = ensureProgress(topic.id);
    return {
      topic,
      weight: Math.max(1, 100 - progress.mastery + (progress.seen < 3 ? 20 : 0)),
    };
  });
  const total = scored.reduce((sum, item) => sum + item.weight, 0);
  let roll = Math.random() * total;
  for (const item of scored) {
    roll -= item.weight;
    if (roll <= 0) return item.topic;
  }
  return topics[0];
}

function makeQuestion({ prompt, answers, correct, explain, deep }) {
  const answerData = answers.map((answer, index) => ({
    text: String(answer),
    correct: index === correct,
  }));
  return {
    prompt,
    answers: shuffle(answerData),
    explain,
    deep,
  };
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startTopic(topicId, isMixed = false) {
  const topic = isMixed ? getWeightedTopicForMixed() : getTopic(topicId) ?? topics[0];
  state.selectedTopicId = isMixed ? null : topic.id;
  const progress = ensureProgress(topic.id);
  progress.level = getDifficultyLevel(topic.id);
  state.currentQuestion = {
    topicId: topic.id,
    level: progress.level,
    ...topic.generator(progress.level),
  };
  state.locked = false;
  state.showHint = false;
  els.nextButton.disabled = true;
  els.hintButton.disabled = false;
  els.speakButton.disabled = false;
  renderLesson();
  renderTopics();
  renderStats();
  saveState();
}

function renderLesson() {
  if (!state.currentQuestion) {
    const topic = state.selectedTopicId ? getSelectedTopic() : null;
    els.lessonTitle.textContent = topic ? topic.title : 'Pick a world to begin';
    els.lessonPrompt.textContent = topic
      ? 'Tap Next question to keep going.'
      : 'Choose a math world above. The app will ask one question at a time.';
    els.answerGrid.innerHTML = '';
    setFeedback('Your progress will save automatically in this browser.');
    els.difficultyBadge.textContent = topic ? getDifficultyLabel(getDifficultyLevel(topic.id)) : 'Starter';
    els.speakButton.disabled = true;
    if (topic) renderDeepDive(topic, ensureProgress(topic.id).mastery >= 40);
    return;
  }

  const topic = getTopic(state.currentQuestion.topicId);
  const progress = ensureProgress(topic.id);
  els.lessonTitle.textContent = topic.title;
  els.lessonPrompt.textContent = state.currentQuestion.prompt;
  els.difficultyBadge.textContent = getDifficultyLabel(state.currentQuestion.level);
  els.answerGrid.innerHTML = state.currentQuestion.answers
    .map(
      (answer, index) => `
        <button class="answer-btn" data-index="${index}">${answer.text}</button>
      `
    )
    .join('');

  document.querySelectorAll('.answer-btn').forEach((button) => {
    button.addEventListener('click', () => chooseAnswer(Number(button.dataset.index)));
  });

  setFeedback(
    state.showHint
      ? `<strong>Hint:</strong> ${topic.levels[state.currentQuestion.level]}`
      : `You are in <strong>${topic.title}</strong>. Answer one small step at a time.`
  );
  renderDeepDive(topic, progress.mastery >= 40);
}

function chooseAnswer(index) {
  if (!state.currentQuestion || state.locked) return;
  state.locked = true;
  const topic = getTopic(state.currentQuestion.topicId);
  const selected = state.currentQuestion.answers[index];
  const correctIndex = state.currentQuestion.answers.findIndex((answer) => answer.correct);
  const correct = selected?.correct === true;
  const progress = ensureProgress(topic.id);

  progress.seen += 1;
  state.totalAnswered += 1;

  if (correct) {
    state.correctAnswered += 1;
    state.streak += 1;
    state.stars += 1 + Math.floor(state.streak / 3);
    progress.correct += 1;
    const skillScore = Math.min(100, Math.round((progress.correct / progress.seen) * 100));
    progress.mastery = Math.min(
      100,
      Math.round(progress.mastery * 0.7 + skillScore * 0.3 + Math.min(10, state.streak * 2))
    );
    setFeedback(
      `<strong>Great job!</strong> ${state.currentQuestion.explain}<br /><br />` +
        `<strong>Deep idea:</strong> ${state.currentQuestion.deep}`,
      'feedback-good'
    );
    markAnswers(correctIndex, index, true);
  } else {
    state.streak = 0;
    progress.mastery = Math.max(0, Math.round(progress.mastery * 0.92));
    setFeedback(
      `<strong>Not quite.</strong> ${state.currentQuestion.explain}<br /><br />` +
        `Try again after tapping <strong>Next question</strong>.`,
      'feedback-bad'
    );
    markAnswers(correctIndex, index, false);
  }

  if (progress.seen >= 2) {
    const raw = (progress.correct / progress.seen) * 100;
    progress.mastery = Math.max(progress.mastery, Math.round(raw));
  }
  progress.level = getDifficultyLevel(topic.id);

  els.nextButton.disabled = false;
  els.hintButton.disabled = true;
  state.currentQuestion = {
    ...state.currentQuestion,
    correct,
  };
  renderStats();
  renderTopics();
  saveState();
}

function markAnswers(correctIndex, pickedIndex, correct) {
  document.querySelectorAll('.answer-btn').forEach((button, index) => {
    button.disabled = true;
    if (index === correctIndex) button.classList.add('correct');
    if (index === pickedIndex && !correct) button.classList.add('wrong');
  });
}

function nextQuestion() {
  if (!state.currentQuestion) {
    startTopic(state.selectedTopicId ?? topics[0].id);
    return;
  }
  const topic = getTopic(state.currentQuestion.topicId);
  const progress = ensureProgress(topic.id);
  progress.level = getDifficultyLevel(topic.id);
  state.currentQuestion = {
    topicId: topic.id,
    level: progress.level,
    ...topic.generator(progress.level),
  };
  state.locked = false;
  state.showHint = false;
  els.nextButton.disabled = true;
  els.hintButton.disabled = false;
  els.speakButton.disabled = false;
  renderLesson();
  saveState();
}

function toggleHint() {
  if (!state.currentQuestion) return;
  state.showHint = !state.showHint;
  renderLesson();
}

function speakPrompt() {
  if (!state.currentQuestion || !('speechSynthesis' in window)) return;
  const topic = getTopic(state.currentQuestion.topicId);
  const hint = state.showHint ? ` Hint: ${topic.levels[state.currentQuestion.level]}.` : '';
  const text = `${topic.title}. ${state.currentQuestion.prompt}.${hint}`;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1.05;
  window.speechSynthesis.speak(utterance);
}

function resetProgress() {
  if (!confirm('Reset stars and progress?')) return;
  localStorage.removeItem(STORAGE_KEY);
  state.selectedTopicId = null;
  state.currentQuestion = null;
  state.locked = false;
  state.stars = 0;
  state.streak = 0;
  state.totalAnswered = 0;
  state.correctAnswered = 0;
  state.progress = {};
  state.showHint = false;
  init();
}

function init() {
  loadState();
  topics.forEach((topic) => ensureProgress(topic.id));
  if (!('speechSynthesis' in window)) {
    els.speakButton.disabled = true;
  }
  renderTopics();
  renderStats();
  renderLesson();
  const topic = getSelectedTopic();
  renderDeepDive(topic, ensureProgress(topic.id).mastery >= 40);
}

els.nextButton.addEventListener('click', nextQuestion);
els.hintButton.addEventListener('click', toggleHint);
els.speakButton.addEventListener('click', speakPrompt);
els.mixedButton.addEventListener('click', () => {
  state.selectedTopicId = null;
  state.currentQuestion = null;
  startTopic(null, true);
});
els.resetButton.addEventListener('click', resetProgress);

init();
