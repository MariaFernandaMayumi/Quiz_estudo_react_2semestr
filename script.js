const questions = [
  {
    question: "1. No JavaScript puro, como o script original pegava um elemento da página para manipulá-lo (ex: o botão de saudação)?",
    options: [
      "A) document.getElementById('btnSaudacao')",
      "B) useState('btnSaudacao')",
      "C) <button id='btnSaudacao'>",
      "D) React.createElement('button')"
    ],
    correct: 0,
    explanation: "No JavaScript nativo (Vanilla JS), o método getElementById() da interface document é o padrão para selecionar e retornar uma referência a um elemento do DOM usando seu atributo id."
  },
  {
    question: "2. No script.js original, qual propriedade era usada para trocar o texto exibido na tela (ex: a mensagem de saudação)?",
    options: [
      "A) element.value",
      "B) element.innerHTML.render()",
      "C) setMensagem()",
      "D) element.textContent"
    ],
    correct: 3,
    explanation: "A propriedade textContent altera ou retorna o conteúdo de texto puro de um nó e de seus descendentes no DOM."
  },
  {
    question: "3. Como um clique de botão era tratado no JavaScript puro do projeto original?",
    options: [
      "A) onClick={handleClick} dentro do JS",
      "B) btn.onPress(funcao)",
      "C) btn.addEventListener('click', funcao)",
      "D) useEffect(() => {...}, [])"
    ],
    correct: 2,
    explanation: "No JS puro, registramos ouvintes de eventos vinculando uma função ao elemento DOM via addEventListener()."
  },
  {
    question: "4. No script.js original, como a cor do texto era alterada diretamente?",
    options: [
      "A) texto.style.color = 'blue'",
      "B) texto.className = 'azul'",
      "C) setCorAzul(true)",
      "D) texto.color.set('blue')"
    ],
    correct: 0,
    explanation: "No JS puro, acessamos o objeto inline style do elemento selecionado e modificamos diretamente a propriedade CSS desejada (color)."
  },
  {
    question: "5. Qual é a principal diferença de raciocínio entre o JS puro e o React ao atualizar a interface?",
    options: [
      "A) No React não existem eventos de clique",
      "B) No JS puro não é possível usar funções",
      "C) Não há diferença nenhuma entre os dois",
      "D) No JS puro cada ação manipula o DOM diretamente; no React, uma ação atualiza o estado e o React se encarrega de atualizar a tela"
    ],
    correct: 3,
    explanation: "O JS puro utiliza uma abordagem imperativa (manipulação direta do DOM). O React usa uma abordagem declarativa baseada em estados."
  },
  {
    question: "6. No HTML/JSX, o atributo class do HTML puro vira qual atributo dentro de um componente React?",
    options: [
      "A) styleClass",
      "B) classes",
      "C) className",
      "D) cssName"
    ],
    correct: 2,
    explanation: "Como class é palavra reservada no JS, o React adotou className."
  },
  {
    question: "7. Como um estilo inline é escrito dentro de um componente React?",
    options: [
      "A) style=\"color: blue\"",
      "B) css={color: blue}",
      "C) colorStyle=\"blue\"",
      "D) style={{ color: \"blue\" }}"
    ],
    correct: 3,
    explanation: "Em JSX, atributos style recebem um objeto JS dentro de chaves."
  },
  {
    question: "8. No JS puro, uma variável guardava o valor do contador manualmente. Qual é o equivalente em React?",
    options: [
      "A) const [contador, setContador] = useState(0);",
      "B) const contador = 0;",
      "C) var contador = new State(0);",
      "D) props.contador = 0;"
    ],
    correct: 0,
    explanation: "Para recarregar o componente na tela após alterações, o React exige o uso do Hook useState."
  },
  {
    question: "9. No React, como o HTML da interface é escrito?",
    options: [
      "A) Sempre em um arquivo .html separado",
      "B) Como uma string dentro de um arquivo .css",
      "C) Em JSX, misturado com a lógica dentro do próprio componente .jsx",
      "D) React não usa HTML de forma alguma"
    ],
    correct: 2,
    explanation: "O React une a lógica e a renderização em arquivos de extensão .jsx."
  },
  {
    question: "10. O que aconteceu com o arquivo style.css ao migrar o projeto para React?",
    options: [
      "A) Foi reescrito inteiramente em JSX",
      "B) Foi transformado em um objeto de estilos JavaScript",
      "C) Foi removido, pois o React não aceita CSS",
      "D) Foi copiado para src/style.css sem nenhuma alteração"
    ],
    correct: 3,
    explanation: "O CSS tradicional é totalmente reaproveitado em projetos React."
  },
  {
    question: "11. O que useState(0) retorna quando chamado dentro de um componente?",
    options: [
      "A) Um array com dois itens: o valor atual e uma função para atualizá-lo",
      "B) Apenas o número 0",
      "C) Um componente React",
      "D) Uma promise"
    ],
    correct: 0,
    explanation: "Retorna uma tupla: [valorAtual, funcaoParaAtualizar]."
  },
  {
    question: "12. Por que os inputs da Calculadora usam value={numero1} com onChange?",
    options: [
      "A) Porque é obrigatório em qualquer HTML",
      "B) Porque inputs numéricos exigem essa sintaxe",
      "C) Para tornar o input 'controlado', sincronizando-o ao estado",
      "D) Apenas por performance"
    ],
    correct: 2,
    explanation: "Componentes controlados sincronizam a interface diretamente ao estado da aplicação."
  },
  {
    question: "13. Por que o id='contador' foi mantido em Contador.jsx?",
    options: [
      "A) Porque o React exige id em tags <p>",
      "B) É só um resquício de código",
      "C) Porque useState precisa de id",
      "D) Para manter a regra #contador do CSS original funcionando"
    ],
    correct: 3,
    explanation: "Permite preservar as regras de estilização definidas no CSS."
  },
  {
    question: "14. Qual a vantagem de dividir a interface em componentes isolados?",
    options: [
      "A) Deixa o projeto mais lento",
      "B) Cada componente cuida da sua própria interface e estado, de forma modular",
      "C) É a única forma de usar CSS",
      "D) Elimina a necessidade de useState"
    ],
    correct: 1,
    explanation: "Promove modularidade, reutilização e facilidade na manutenção do código."
  },
  {
    question: "15. O que acontece na tela ao chamar setContador(contador + 1)?",
    options: [
      "A) Nada muda até recarregar",
      "B) É preciso chamar getElementById manualmente",
      "C) O React atualiza o estado e re-renderiza o componente",
      "D) O componente é destruído"
    ],
    correct: 2,
    explanation: "O React detecta a alteração no estado e re-renderiza eficientemente o componente."
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const explanationBox = document.getElementById("explanation-box");
const explanationText = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const scoreSpan = document.getElementById("score");
const scoreTotalSpan = document.getElementById("score-total");
const restartBtn = document.getElementById("restart-btn");
const resetInQuizBtn = document.getElementById("reset-in-quiz-btn");

if (nextBtn) nextBtn.addEventListener("click", handleNextQuestion);
if (restartBtn) restartBtn.addEventListener("click", restartQuiz);
if (resetInQuizBtn) resetInQuizBtn.addEventListener("click", restartQuiz);

function loadProgress() {
  const savedIndex = localStorage.getItem("quiz_current_index");
  const savedScore = localStorage.getItem("quiz_score");

  if (savedIndex !== null && savedScore !== null) {
    currentQuestionIndex = parseInt(savedIndex, 10);
    score = parseInt(savedScore, 10);
  }
}

function saveProgress() {
  localStorage.setItem("quiz_current_index", currentQuestionIndex);
  localStorage.setItem("quiz_score", score);
}

function resetProgress() {
  localStorage.removeItem("quiz_current_index");
  localStorage.removeItem("quiz_score");
  currentQuestionIndex = 0;
  score = 0;
}

function initQuiz() {
  loadProgress();

  if (totalQuestionsSpan) totalQuestionsSpan.textContent = questions.length;

  if (currentQuestionIndex >= questions.length) {
    showResult();
  } else {
    if (resultScreen) resultScreen.classList.add("hidden");
    if (quizScreen) quizScreen.classList.remove("hidden");
    showQuestion();
  }
}

function restartQuiz() {
  resetProgress();
  if (resultScreen) resultScreen.classList.add("hidden");
  if (quizScreen) quizScreen.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestionSpan) currentQuestionSpan.textContent = currentQuestionIndex + 1;
  if (questionText) questionText.textContent = currentQuestion.question;

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn", "btn");
    button.addEventListener("click", () => selectOption(index, button));
    optionsContainer.appendChild(button);
  });
}

function resetState() {
  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.classList.add("hidden");
  }
  if (explanationBox) explanationBox.classList.add("hidden");
  if (optionsContainer) optionsContainer.innerHTML = "";
}

function selectOption(selectedIndex, selectedButton) {
  const currentQuestion = questions[currentQuestionIndex];
  const allButtons = optionsContainer.querySelectorAll(".option-btn");

  allButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === currentQuestion.correct) {
      btn.classList.add("correct");
    }
  });

  if (selectedIndex === currentQuestion.correct) {
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  saveProgress();

  if (explanationText) explanationText.textContent = currentQuestion.explanation;
  if (explanationBox) explanationBox.classList.remove("hidden");
  
  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.classList.remove("hidden");
  }
}

function handleNextQuestion() {
  currentQuestionIndex++;
  saveProgress();

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  if (quizScreen) quizScreen.classList.add("hidden");
  if (resultScreen) resultScreen.classList.remove("hidden");
  if (scoreSpan) scoreSpan.textContent = score;
  if (scoreTotalSpan) scoreTotalSpan.textContent = questions.length;
}

initQuiz();
