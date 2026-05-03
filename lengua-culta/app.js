const priorities = [
  {
    id: 'conceptos',
    name: 'Nuevos conceptos',
    score: 100,
    badge: 'Base',
    description: 'Palabras para nombrar ideas recientes, técnicas o sociales que el español necesita absorber bien.',
    examples: ['sesgo', 'agente', 'prompt', 'copiloto', 'verificación'],
    lesson: {
      title: 'Nombrar antes que adornar',
      body: 'Cuando aparece una realidad nueva, la prioridad no es sonar “culto”: es nombrarla con precisión. Primero el concepto, luego la forma.',
      hint: 'Piensa en palabras que te ayuden a explicar el mundo actual sin rodeos.',
      quiz: ['¿Cuál de estas palabras nombra una idea nueva?', 'sesgo', 'empero', 'parco'],
    },
  },
  {
    id: 'precision',
    name: 'Precisión conceptual',
    score: 88,
    badge: 'Clave',
    description: 'Verbos y sustantivos que recortan ruido: dicen exactamente lo que quieres decir.',
    examples: ['delimitar', 'matizar', 'inferir', 'constatar', 'requerir'],
    lesson: {
      title: 'Elegir el verbo correcto',
      body: 'La diferencia entre una frase mediocre y una buena suele estar en el verbo. Preciso es mejor que pomposo.',
      hint: 'Busca verbos que reduzcan ambigüedad y aumenten foco.',
      quiz: ['¿Qué verbo es más preciso?', 'hacer', 'llevar a cabo', 'trastear'],
    },
  },
  {
    id: 'registro',
    name: 'Registro natural',
    score: 74,
    badge: 'Uso',
    description: 'Expresiones sobrias y adecuadas al contexto: ni barrocas ni planas.',
    examples: ['conviene', 'en rigor', 'de entrada', 'a efectos de', 'sin embargo'],
    lesson: {
      title: 'Sonar natural en el contexto correcto',
      body: 'No toda palabra elegante encaja en cualquier frase. El registro es saber cuánto brillo conviene.',
      hint: 'Pregunta: ¿lo dirías así en una reunión, una carta o un ensayo?',
      quiz: ['¿Qué fórmula suena más sobria?', 'está guay', 'conviene', 'flipante'],
    },
  },
  {
    id: 'matices',
    name: 'Matices y sinónimos útiles',
    score: 56,
    badge: 'Capa 2',
    description: 'Sinónimos que cambian el tono, el foco o la intención de una frase.',
    examples: ['afirmar', 'sugerir', 'incidir', 'percibir', 'subrayar'],
    lesson: {
      title: 'Un sinónimo solo sirve si cambia algo',
      body: 'La sinonimia vale cuando modifica el foco: matiza, subraya o recorta. Si no cambia nada, no aporta mucho.',
      hint: 'Elige la palabra que cambia la intención, no solo el diccionario.',
      quiz: ['¿Qué palabra añade matiz?', 'decir', 'sugerir', 'coser'],
    },
  },
  {
    id: 'ornamento',
    name: 'Sinónimos raros y ornamento',
    score: 34,
    badge: 'Estilo',
    description: 'Palabras bonitas que conviene conocer, pero que rara vez mejoran la idea principal.',
    examples: ['lisonjero', 'luciente', 'esbelto', 'nimio', 'inmarcesible'],
    lesson: {
      title: 'Bonito no siempre es mejor',
      body: 'Aquí entran las palabras que adornan. Son valiosas en lectura y estilo, pero no deberían mandar sobre la claridad.',
      hint: 'Si la palabra impresiona pero no aclara, va al final de la cola.',
      quiz: ['¿Qué palabra es más ornamental?', 'luciente', 'requerir', 'sistema'],
    },
  },
  {
    id: 'arcaicos',
    name: 'Arcaísmos y relicarios',
    score: 14,
    badge: 'Final',
    description: 'Palabras históricas o literarias: conviene reconocerlas, pero solo usarlas con intención.',
    examples: ['empero', 'mas', 'soez', 'faste', 'acápite'],
    lesson: {
      title: 'Usar el pasado con criterio',
      body: 'Los arcaísmos ayudan a leer clásicos y a entender registros antiguos. Para hablar claro hoy, son la última capa.',
      hint: 'Reconocer no es priorizar.',
      quiz: ['¿Qué palabra suena más arcaica?', 'empero', 'requerir', 'constatar'],
    },
  },
];

const rewriteMap = [
  ['la cosa', 'el asunto / la cuestión / el punto'],
  ['hacer', 'llevar a cabo / realizar / formular'],
  ['muy', 'sumamente / bastante / especialmente'],
  ['bueno', 'sólido / favorable / notable'],
  ['malo', 'desfavorable / frágil / problemático'],
  ['decir', 'afirmar / sostener / señalar'],
  ['tener', 'contar con / disponer de'],
  ['ver', 'observar / constatar / advertir'],
  ['problema', 'dificultad / obstáculo'],
  ['cosa', 'asunto / elemento / cuestión'],
  ['rápido', 'ágil / veloz / inmediato'],
  ['importante', 'relevante / decisivo / crucial'],
];

const extraWords = [
  { word: 'sesgo', note: 'Detecta desviaciones de percepción o de datos.', tip: 'Útil en debate, análisis y tecnología.' },
  { word: 'matizar', note: 'Ajusta una idea sin destruirla.', tip: 'Sirve para evitar blancos y negros.' },
  { word: 'conviene', note: 'Marca recomendación con sobriedad.', tip: 'Muy útil en escritura formal.' },
  { word: 'subrayar', note: 'Hace visible la parte importante.', tip: 'Mejor que repetir por insistencia.' },
  { word: 'empero', note: 'Conector arcaico equivalente a “sin embargo”.', tip: 'Leer sí; abusar, no.' },
];

const els = {
  priorityList: document.getElementById('priorityList'),
  lessonTitle: document.getElementById('lessonTitle'),
  lessonBadge: document.getElementById('lessonBadge'),
  lessonBody: document.getElementById('lessonBody'),
  choiceRow: document.getElementById('choiceRow'),
  rewriteInput: document.getElementById('rewriteInput'),
  feedbackBox: document.getElementById('feedbackBox'),
  wordBank: document.getElementById('wordBank'),
  shuffleButton: document.getElementById('shuffleButton'),
  rewriteButton: document.getElementById('rewriteButton'),
  applyRewrite: document.getElementById('applyRewrite'),
  showHint: document.getElementById('showHint'),
  nextLesson: document.getElementById('nextLesson'),
};

let currentIndex = 0;
let selectedChoice = null;

function renderPriorityList(activeId = priorities[currentIndex].id) {
  els.priorityList.innerHTML = priorities.map((item, index) => {
    const active = item.id === activeId;
    const chips = item.examples.map((example) => `<span class="pill">${example}</span>`).join('');
    return `
      <div class="priority-item ${active ? 'active' : ''}" data-id="${item.id}">
        <button type="button" aria-label="Abrir ${item.name}" data-action="open-priority" data-index="${index}">
          <div class="priority-name">${item.name}</div>
          <div class="priority-desc">${item.description}</div>
          <div class="priority-meta">${chips}</div>
        </button>
        <div class="priority-score">${item.score}<small>${item.badge}</small></div>
      </div>
    `;
  }).join('');
}

function renderWordBank() {
  els.wordBank.innerHTML = extraWords.map(({ word, note, tip }) => `
    <div class="word-card">
      <strong>${word}</strong>
      <span>${note}</span>
      <div style="margin-top:8px;color:#dfe7ff;font-size:0.9rem;opacity:.9;">${tip}</div>
    </div>
  `).join('');
}

function setLesson(index, { keepChoice = false } = {}) {
  currentIndex = (index + priorities.length) % priorities.length;
  const item = priorities[currentIndex];
  els.lessonTitle.textContent = item.lesson.title;
  els.lessonBadge.textContent = item.badge;
  els.lessonBody.textContent = item.lesson.body;
  els.feedbackBox.textContent = '';
  if (!keepChoice) selectedChoice = null;
  renderPriorityList(item.id);
  renderChoices(item.lesson.quiz);
}

function renderChoices([prompt, ...choices]) {
  els.choiceRow.innerHTML = choices.map((choice, idx) => `
    <button class="choice ${selectedChoice === choice ? 'active' : ''}" type="button" data-choice="${choice}">
      ${choice}
    </button>
  `).join('');
  els.feedbackBox.textContent = prompt;
}

function scoreChoice(choice) {
  const item = priorities[currentIndex];
  const good = item.lesson.quiz[1];
  selectedChoice = choice;
  renderChoices(item.lesson.quiz);
  const result = choice === good
    ? `Bien. ${good} es la opción más útil aquí porque ${item.lesson.hint.toLowerCase()}`
    : `Todavía no. La mejor opción es “${good}”. ${item.lesson.hint}`;
  els.feedbackBox.textContent = `${item.lesson.quiz[0]}\n\n${result}`;
}

function rewriteSentence(text) {
  const normalized = text.trim();
  if (!normalized) {
    return 'Escribe una frase primero.';
  }

  let improved = normalized;
  const applied = [];
  for (const [from, to] of rewriteMap) {
    const regex = new RegExp(`\\b${escapeRegex(from)}\\b`, 'gi');
    if (regex.test(improved)) {
      improved = improved.replace(regex, to);
      applied.push(`${from} → ${to}`);
    }
  }

  improved = improved
    .replace(/\s+/g, ' ')
    .replace(/\besta\b/gi, 'está')
    .replace(/\bmas\b/gi, 'más');

  const starter = 'Versión más precisa';
  const notes = applied.length
    ? `Cambios aplicados: ${applied.join(', ')}.`
    : 'No encontré sustituciones directas, pero puedes subir el verbo o concretar el sustantivo.';

  return `${starter}:\n${improved}\n\n${notes}`;
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function randomLesson() {
  const candidates = priorities.map((_, idx) => idx).filter((idx) => idx !== currentIndex);
  const next = candidates[Math.floor(Math.random() * candidates.length)] ?? 0;
  setLesson(next);
  els.feedbackBox.textContent = `Lección nueva: ${priorities[next].lesson.title}`;
  els.feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function attachEvents() {
  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-action="open-priority"]');
    if (target) {
      setLesson(Number(target.dataset.index || 0));
      return;
    }

    const choice = event.target.closest('.choice');
    if (choice) {
      scoreChoice(choice.dataset.choice);
    }
  });

  els.shuffleButton.addEventListener('click', randomLesson);
  els.nextLesson.addEventListener('click', () => setLesson(currentIndex + 1));
  els.rewriteButton.addEventListener('click', () => {
    els.rewriteInput.focus();
    els.feedbackBox.textContent = 'Escribe una frase y pulsa “Mejorar frase”.';
  });
  els.applyRewrite.addEventListener('click', () => {
    els.feedbackBox.textContent = rewriteSentence(els.rewriteInput.value);
  });
  els.showHint.addEventListener('click', () => {
    els.feedbackBox.textContent = priorities[currentIndex].lesson.hint;
  });
}

renderPriorityList();
renderWordBank();
attachEvents();
setLesson(0);
els.rewriteInput.value = 'La cosa esta muy mal y hay que hacer algo pronto.';
