const TOPICOS_ESTUDO = {
  DOM_IMPERATIVO_VS_DECLARATIVO: {
    nome: "Manipulação do DOM: JavaScript Puro vs. React",
    descricao: "Revise seletores nativos (getElementById), addEventListener e a diferença do modelo declarativo com estado no React."
  },
  SINTAXE_JSX: {
    nome: "Sintaxe e Estrutura do JSX",
    descricao: "Revise regras do JSX (className, htmlFor e estilos inline com objetos style={{ color: 'blue' }})."
  },
  HOOK_USESTATE: {
    nome: "O Hook useState (Estado)",
    descricao: "Revise a sintaxe do useState, retorno em array [valor, setValor] e como a reatividade/re-renderização funciona."
  },
  COMPONENTES_E_ESTRUTURA: {
    nome: "Componentes e Organização de Projetos React",
    descricao: "Revise a modularização de componentes, pasta src/components, main.jsx (createRoot), App.jsx e React.StrictMode."
  },
  INPUTS_E_EVENTOS: {
    nome: "Inputs Controlados e Manipulação de Eventos",
    descricao: "Revise componentes controlados (value + onChange), tratamento de cliques e validações de lógica/conversão de tipos."
  },
  ECOSSISTEMA_CSS_TOOLS: {
    nome: "CSS e Ferramentas do Ecossistema (Vite / NPM)",
    descricao: "Revise reaproveitamento de CSS com className/id e comandos do terminal (npm create vite, npm run build, etc.)."
  }
};
const questions = [
  {
    question: "1. No JavaScript puro, como o script original pegava um elemento da página para manipulá-lo (ex: o botão de saudação)?",
    options: ["A) document.getElementById(\"btnSaudacao\")", "B) useState(\"btnSaudacao\")", "C) <button id=\"btnSaudacao\">", "D) React.createElement(\"button\")"],
    correct: 0,
    topic: "DOM_IMPERATIVO_VS_DECLARATIVO",
    explanation: "No JS puro, o método document.getElementById() é o padrão para selecionar elementos pelo atributo id."
  },
  {
    question: "2. No script.js original, qual propriedade era usada para trocar o texto exibido na tela (ex: a mensagem de saudação)?",
    options: ["A) element.value", "B) element.textContent", "C) element.innerHTML.render()", "D) setMensagem()"],
    correct: 1,
    topic: "DOM_IMPERATIVO_VS_DECLARATIVO",
    explanation: "A propriedade textContent altera o conteúdo de texto puro de um elemento no DOM nativo."
  },
  {
    question: "3. Como um clique de botão era tratado no JavaScript puro do projeto original?",
    options: ["A) onClick={handleClick} dentro do JSX", "B) btn.addEventListener(\"click\", funcao)", "C) btn.onPress(funcao)", "D) useEffect(() => {...}, [])"],
    correct: 1,
    topic: "DOM_IMPERATIVO_VS_DECLARATIVO",
    explanation: "No JS puro, registra-se escutadores de eventos via addEventListener()."
  },
  {
    question: "4. No script.js original, como a cor do texto era alterada diretamente?",
    options: ["A) texto.style.color = \"blue\"", "B) texto.className = \"azul\"", "C) setCorAzul(true)", "D) texto.color.set(\"blue\")"],
    correct: 0,
    topic: "DOM_IMPERATIVO_VS_DECLARATIVO",
    explanation: "Estilos inline nativos são alterados acessando a propriedade style do elemento DOM."
  },
  {
    question: "5. Qual é a principal diferença de raciocínio entre o JS puro e o React ao atualizar a interface?",
    options: [
      "A) No JS puro cada ação manipula o DOM diretamente; no React, uma ação atualiza o estado e o React se encarrega de atualizar a tela",
      "B) No React não existem eventos de clique",
      "C) No JS puro não é possível usar funções",
      "D) Não há diferença nenhuma entre os dois"
    ],
    correct: 0,
    topic: "DOM_IMPERATIVO_VS_DECLARATIVO",
    explanation: "O JS puro é imperativo (altera o DOM diretamente). O React é declarativo (mudanças no estado disparam atualizações da interface)."
  },
  {
    question: "6. No HTML/JSX, o atributo class do HTML puro vira qual atributo dentro de um componente React?",
    options: ["A) styleClass", "B) className", "C) classes", "D) cssName"],
    correct: 1,
    topic: "SINTAXE_JSX",
    explanation: "Como 'class' é uma palavra reservada no JavaScript, o JSX utiliza 'className'."
  },
  {
    question: "7. Como um estilo inline (ex: cor do texto) é escrito dentro de um componente React, diferente do CSS puro?",
    options: [
      "A) style=\"color: blue\" (string, como no HTML)",
      "B) style={{ color: \"blue\" }} (um objeto JavaScript)",
      "C) css={color: blue}",
      "D) colorStyle=\"blue\""
    ],
    correct: 1,
    topic: "SINTAXE_JSX",
    explanation: "Em JSX, a propriedade style recebe um objeto JS delimitado por chaves duplas: {{ }}."
  },
  {
    question: "8. No JS puro, uma variável guardava o valor do contador manualmente (ex: let contador = 0). Qual é o equivalente em React?",
    options: ["A) const contador = 0;", "B) const [contador, setContador] = useState(0);", "C) var contador = new State(0);", "D) props.contador = 0;"],
    correct: 1,
    topic: "HOOK_USESTATE",
    explanation: "A reatividade no React exige o uso do Hook useState para armazenar valores mutáveis que afetam a interface."
  },
  {
    question: "9. No JS puro, o HTML e o JavaScript ficavam em arquivos separados. No React, como o HTML da interface é escrito?",
    options: [
      "A) Sempre em um arquivo .html separado",
      "B) Em JSX, misturado com a lógica dentro do próprio componente .jsx",
      "C) Como uma string dentro de um arquivo .css",
      "D) React não usa HTML de forma alguma"
    ],
    correct: 1,
    topic: "SINTAXE_JSX",
    explanation: "O JSX permite combinar marcação de interface e lógica JavaScript no mesmo arquivo de componente."
  },
  {
    question: "10. O que aconteceu com o arquivo style.css ao migrar o projeto de JS puro para React?",
    options: [
      "A) Foi reescrito inteiramente em JSX",
      "B) Foi copiado para src/style.css sem nenhuma alteração",
      "C) Foi transformado em um objeto de estilos JavaScript",
      "D) Foi removido, pois o React não aceita CSS"
    ],
    correct: 1,
    topic: "ECOSSISTEMA_CSS_TOOLS",
    explanation: "CSS tradicional pode ser reutilizado sem alterações bastando importá-lo no componente."
  },
  {
    question: "11. O que useState(0) retorna quando chamado dentro de um componente?",
    options: [
      "A) Apenas o número 0",
      "B) Um array com dois itens: o valor atual e uma função para atualizá-lo",
      "C) Um componente React",
      "D) Uma promise"
    ],
    correct: 1,
    topic: "HOOK_USESTATE",
    explanation: "O useState retorna um array [valorAtual, funcaoAtualizadora]."
  },
  {
    question: "12. Por que os inputs da Calculadora.jsx usam value={numero1} junto com onChange, em vez de deixar o navegador controlar o campo sozinho?",
    options: [
      "A) Porque isso é obrigatório em qualquer HTML",
      "B) Para tornar o input \"controlado\": o valor do campo fica sincronizado com o estado do React",
      "C) Porque inputs numéricos exigem essa sintaxe especial",
      "D) Isso apenas melhora a performance visual"
    ],
    correct: 1,
    topic: "INPUTS_E_EVENTOS",
    explanation: "Inputs controlados sincronizam a interface e o estado do React através da combinação de 'value' e 'onChange'."
  },
  {
    question: "13. Por que o id='contador' foi mantido dentro do <p> em Contador.jsx, mesmo já estando dentro de um componente React?",
    options: [
      "A) Porque o React exige um id em toda tag <p>",
      "B) Para que a regra #contador do CSS original continuasse funcionando",
      "C) Não tem motivo, é só um resquício de código",
      "D) Porque useState precisa de um id correspondente"
    ],
    correct: 1,
    topic: "ECOSSISTEMA_CSS_TOOLS",
    explanation: "Os IDs e classes originais foram preservados para manter a compatibilidade com o CSS existente."
  },
  {
    question: "14. Qual é a principal vantagem de dividir a interface em componentes, em vez de um único arquivo?",
    options: [
      "A) Cada componente cuida da sua própria parte da interface e do seu próprio estado, de forma isolada e reutilizável",
      "B) Componentes deixam o projeto mais lento",
      "C) É a única forma de usar CSS no React",
      "D) Componentes eliminam a necessidade de useState"
    ],
    correct: 0,
    topic: "COMPONENTES_E_ESTRUTURA",
    explanation: "A componentização isola responsabilidades, estados e melhora a manutenibilidade do código."
  },
  {
    question: "15. O que acontece na tela quando chamamos setContador(contador + 1) dentro de Contador.jsx?",
    options: [
      "A) Nada muda até a página ser recarregada",
      "B) O React atualiza o estado e re-renderiza automaticamente o componente com o novo valor",
      "C) É preciso chamar document.getElementById depois, manualmente",
      "D) O componente é destruído e recriado do zero"
    ],
    correct: 1,
    topic: "HOOK_USESTATE",
    explanation: "Chamar a função de atualização do estado notifica o React para realizar a re-renderização com os novos dados."
  },
  {
    question: "16. Se o componente Contador fosse usado duas vezes na página (<Contador /><Contador />), o que aconteceria com o estado de cada um?",
    options: [
      "A) Os dois compartilhariam o mesmo valor de contador",
      "B) Cada instância do componente teria seu próprio estado, independente da outra",
      "C) Isso causaria um erro, pois um componente só pode ser usado uma vez",
      "D) O segundo Contador sobrescreveria o primeiro"
    ],
    correct: 1,
    topic: "HOOK_USESTATE",
    explanation: "Cada instância de um componente no React mantém seu próprio estado de forma totalmente isolada."
  },
  {
    question: "17. O que é o JSX usado dentro dos componentes (ex: <section className=\"card\">...</section>)?",
    options: [
      "A) Uma linguagem de template separada do JavaScript, como o Handlebars",
      "B) Uma sintaxe que permite escrever algo parecido com HTML dentro do próprio código JavaScript",
      "C) Um arquivo de configuração do Vite",
      "D) Um tipo de CSS especial do React"
    ],
    correct: 1,
    topic: "SINTAXE_JSX",
    explanation: "JSX é uma extensão de sintaxe que permite estruturar elementos visuais de forma declarativa dentro do arquivo JS."
  },
  {
    question: "18. Por que o useState de corAzul em MudarCor.jsx começa como false, e não true?",
    options: [
      "A) Porque false sempre é o padrão de qualquer useState",
      "B) Para reproduzir o comportamento original: o primeiro clique é que deixava o texto azul",
      "C) Porque o React não aceita true como valor inicial de booleano",
      "D) Não faz diferença, é uma escolha aleatória"
    ],
    correct: 1,
    topic: "HOOK_USESTATE",
    explanation: "O estado inicial deve refletir a condição padrão da aplicação antes da interação do usuário."
  },
  {
    question: "19. Qual é a função do <React.StrictMode> em torno de <App /> no arquivo main.jsx?",
    options: [
      "A) Deixa a aplicação mais rápida em produção",
      "B) Ajuda a detectar problemas durante o desenvolvimento, sem afetar o que o usuário final vê",
      "C) É obrigatório para o CSS funcionar",
      "D) Substitui a necessidade do ReactDOM.createRoot"
    ],
    correct: 1,
    topic: "COMPONENTES_E_ESTRUTURA",
    explanation: "O StrictMode do React realiza verificações adicionais durante o desenvolvimento para identificar possíveis bugs."
  },
  {
    question: "20. O que a função handleClick faz dentro de Saudacao.jsx?",
    options: [
      "A) Verifica se o campo nome está vazio e atualiza a mensagem de acordo, usando setMensagem",
      "B) Cria um novo componente Saudacao",
      "C) Modifica diretamente o texto no DOM com textContent",
      "D) Reinicia o valor de nome para \"\""
    ],
    correct: 0,
    topic: "INPUTS_E_EVENTOS",
    explanation: "Manipuladores de eventos aplicam as lógicas de validação e disparam as atualizações de estado."
  },
  {
    question: "21. Qual comando de terminal cria a estrutura inicial do projeto com Vite e o template de React?",
    options: [
      "A) npm create vite@latest meu-primeiro-javascript-react -- --template react",
      "B) npm install react",
      "C) node create-react-app",
      "D) npm run build react"
    ],
    correct: 0,
    topic: "ECOSSISTEMA_CSS_TOOLS",
    explanation: "O comando 'npm create vite@latest' com a flag '--template react' gera a estrutura inicial do projeto."
  },
  {
    question: "22. Na estrutura final do projeto, onde ficam os arquivos dos quatro componentes (Saudacao.jsx, Contador.jsx, MudarCor.jsx, Calculadora.jsx)?",
    options: [
      "A) Direto na raiz do projeto",
      "B) Dentro de src/components/",
      "C) Dentro de public/",
      "D) Dentro de index.html"
    ],
    correct: 1,
    topic: "COMPONENTES_E_ESTRUTURA",
    explanation: "Por organização, os componentes de uma aplicação React ficam armazenados na pasta 'src/components'."
  },
  {
    question: "23. Qual é o papel do arquivo App.jsx no projeto final?",
    options: [
      "A) Importar e organizar os quatro componentes dentro do header, main e footer da página",
      "B) Substituir o arquivo style.css",
      "C) Executar o servidor de desenvolvimento do Vite",
      "D) Guardar a configuração do npm"
    ],
    correct: 0,
    topic: "COMPONENTES_E_ESTRUTURA",
    explanation: "O App.jsx atua como componente raiz que agrupa e coordena os demais componentes."
  },
  {
    question: "24. No Calculadora.jsx, o que o objeto contas armazena dentro da função calcular?",
    options: [
      "A) O histórico de todos os cálculos já feitos",
      "B) O resultado das quatro operações (soma, subtracao, multiplicacao, divisao) já calculadas",
      "C) Os valores digitados antes de serem convertidos para número",
      "D) As mensagens de erro da calculadora"
    ],
    correct: 1,
    topic: "INPUTS_E_EVENTOS",
    explanation: "O objeto mapeia e realiza preventivamente o cálculo de todas as quatro operações fundamentais."
  },
  {
    question: "25. O que acontece na Calculadora.jsx se numero1 ou numero2 estiverem vazios quando um botão de operação é clicado?",
    options: [
      "A) O resultado exibido é \"Preencha os dois campos!\" e a função para com return",
      "B) O React trava e mostra um erro na tela",
      "C) O cálculo é feito considerando o valor vazio como zero",
      "D) Nada acontece, o botão fica desabilitado"
    ],
    correct: 0,
    topic: "INPUTS_E_EVENTOS",
    explanation: "As validações de formulário previnem o processamento caso falte informação nos inputs."
  },
  {
    question: "26. O que acontece se o usuário tentar dividir por zero na Calculadora.jsx?",
    options: [
      "A) O resultado exibido é Infinity",
      "B) A função mostra \"Não é possível dividir por zero!\" e interrompe o cálculo",
      "C) A aplicação para de funcionar",
      "D) O React converte automaticamente para zero"
    ],
    correct: 1,
    topic: "INPUTS_E_EVENTOS",
    explanation: "Verificações preventivas impedem divisão por zero para evitar resultados indesejados."
  },
  {
    question: "27. Qual arquivo é o \"ponto de entrada\" que conecta o React ao HTML da página (o <div id=\"root\">)?",
    options: [
      "A) src/App.jsx",
      "B) src/main.jsx",
      "C) src/style.css",
      "D) vite.config.js"
    ],
    correct: 1,
    topic: "COMPONENTES_E_ESTRUTURA",
    explanation: "O main.jsx é o script inicial que chama o ReactDOM.createRoot para renderizar a aplicação no HTML."
  },
  {
    question: "28. O que faz a linha ReactDOM.createRoot(document.getElementById(\"root\")).render(...)?",
    options: [
      "A) Cria uma raiz do React na div #root e manda renderizar o componente informado dentro dela",
      "B) Cria um novo arquivo HTML",
      "C) Instala as dependências do projeto",
      "D) Compila o CSS do projeto"
    ],
    correct: 0,
    topic: "COMPONENTES_E_ESTRUTURA",
    explanation: "Essa instrução define a raiz do Virtual DOM associada ao elemento #root do HTML."
  },
  {
    question: "29. Por que o style.css não precisou de nenhuma alteração ao migrar o projeto para React?",
    options: [
      "A) Porque o React ignora arquivos CSS",
      "B) Porque os componentes preservaram as mesmas classes e ids (.card, #contador, #textoCor) usados pelo CSS original",
      "C) Porque o CSS foi convertido automaticamente pelo Vite",
      "D) Porque o projeto não usa mais estilos"
    ],
    correct: 1,
    topic: "ECOSSISTEMA_CSS_TOOLS",
    explanation: "Mantendo-se os seletores e classes no JSX, os estilos nativos continuam válidos."
  },
  {
    question: "30. Antes de entregar o projeto, qual comando deve ser rodado para gerar a versão final e verificar se algo está quebrado?",
    options: [
      "A) npm run dev",
      "B) npm run build",
      "C) npm install react",
      "D) npm create vite"
    ],
    correct: 1,
    topic: "ECOSSISTEMA_CSS_TOOLS",
    explanation: "O comando 'npm run build' compila o código e detecta erros para a versão de produção."
  }
];

let currentIndex = 0;
let userAnswers = [];

const questionCountEl = document.getElementById("question-count");
const questionTitleEl = document.getElementById("question-title");
const optionsContainerEl = document.getElementById("options-container");
const explanationBoxEl = document.getElementById("explanation-box");
const explanationTextEl = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const quizBodyEl = document.getElementById("quiz-body");
const resultScreenEl = document.getElementById("result-screen");
const finalScoreEl = document.getElementById("final-score");
const studyRecommendationEl = document.getElementById("study-recommendation");
const restartQuizBtn = document.getElementById("restart-quiz-btn");

function initQuiz() {
  currentIndex = 0;
  userAnswers = [];
  quizBodyEl.classList.remove("hidden");
  resultScreenEl.classList.add("hidden");
  renderQuestion();
}

function renderQuestion() {
  const currentQ = questions[currentIndex];

  questionCountEl.textContent = `Pergunta ${currentIndex + 1} de ${questions.length}`;
  questionTitleEl.textContent = currentQ.question;

  optionsContainerEl.innerHTML = "";
  explanationBoxEl.classList.add("hidden");

  currentQ.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.textContent = optionText;
    button.className = "option-btn";
    button.onclick = () => handleSelectOption(index);
    optionsContainerEl.appendChild(button);
  });
}

function handleSelectOption(selectedIndex) {
  const currentQ = questions[currentIndex];
  userAnswers.push(selectedIndex);

  const optionButtons = optionsContainerEl.querySelectorAll(".option-btn");

  optionButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === currentQ.correct) {
      btn.classList.add("correct");
    } else if (index === selectedIndex) {
      btn.classList.add("wrong");
    }
  });

  explanationTextEl.textContent = currentQ.explanation;
  explanationBoxEl.classList.remove("hidden");
}
nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
};

// Exibir Tela de Resultado
function showResults() {
  quizBodyEl.classList.add("hidden");
  resultScreenEl.classList.remove("hidden");

  let acertos = 0;
  const errosPorTopico = {
    DOM_IMPERATIVO_VS_DECLARATIVO: 0,
    SINTAXE_JSX: 0,
    HOOK_USESTATE: 0,
    COMPONENTES_E_ESTRUTURA: 0,
    INPUTS_E_EVENTOS: 0,
    ECOSSISTEMA_CSS_TOOLS: 0
  };

  userAnswers.forEach((answerIndex, qIndex) => {
    const q = questions[qIndex];
    if (answerIndex === q.correct) {
      acertos++;
    } else {
      errosPorTopico[q.topic]++;
    }
  });

  finalScoreEl.textContent = `Você acertou ${acertos} de ${questions.length} perguntas!`;

  let maxErros = 0;
  let piorTopicoKey = null;

  for (const [topico, qteErros] of Object.entries(errosPorTopico)) {
    if (qteErros > maxErros) {
      maxErros = qteErros;
      piorTopicoKey = topico;
    }
  }

  if (maxErros === 0) {
    studyRecommendationEl.innerHTML = `
      <h3>🌟 Desempenho Perfeito!</h3>
      <p>Parabéns! Você demonstrou domínio total sobre os conceitos de React e JS puro.</p>
    `;
  } else {
    const topicoInfo = TOPICOS_ESTUDO[piorTopicoKey];
    studyRecommendationEl.innerHTML = `
      <h3>📌 Recomendação de Foco de Estudo:</h3>
      <p><strong>Tópico com mais erros:</strong> ${topicoInfo.nome} (${maxErros} erro(s)).</p>
      <p style="margin-top: 8px;"><strong>O que revisar:</strong> ${topicoInfo.descricao}</p>
    `;
  }
}

restartBtn.onclick = initQuiz;
restartQuizBtn.onclick = initQuiz;

initQuiz();