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
    explanation: "No JavaScript nativo (Vanilla JS), o método getElementById() da interface document é o padrão para selecionar e retornar uma referência a um elemento do DOM usando seu atributo id. As opções B e D são sintaxes do React, e a opção C é a própria tag HTML."

  },
  {
    question: "2. No script.js original, qual propriedade era usada para trocar o texto exibido na tela (ex: a mensagem de saudação)?",
    options: [
        "A) element.value",
        "B) element.textContent",
        "C) element.innerHTML.render()",
        "D) setMensagem()"
    ],
    correct: 1,
    explanation: "A propriedade textContent altera ou retorna o conteúdo de texto puro de um nó e de seus descendentes no DOM. A opção A (.value) é usada para campos de formulário (como <input>), C traz uma função inexistente, e D é o disparador de estado do React."
  },
  {
    question: "3. Como um clique de botão era tratado no JavaScript puro do projeto original?",
    options: [
        "A) onClick={handleClick} dentro do JS",
        "B) btn.addEventListener('click', funcao)",
        "C) btn.onPress(funcao)",
        "D) useEffect(() => {...}, [])"
    ],
    correct: 1,
    explanation: "No JS puro, registramos ouvintes de eventos vinculando uma função ao elemento DOM via addEventListener(). A alternativa A é o padrão do JSX (React), C traz um método inexistente no DOM padrão, e D usa um Hook do React para efeitos colaterais."
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
    explanation: "No JS puro, acessamos o objeto inline style do elemento selecionado e modificamos diretamente a propriedade CSS desejada (color). A alternativa B altera a classe CSS (não o estilo direto), C é atualização de estado no React, e D possui uma sintaxe inválida."
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
    explanation: "O JS puro utiliza uma abordagem imperativa, onde você busca o elemento e altera sua estrutura passo a passo. O React usa uma abordagem declarativa, baseada no conceito de que a UI é uma função do estado (UI = f(State)): você altera os dados (estado) e a biblioteca atualiza o DOM virtual e real automaticamente."
  },
  {
    question: "6. No HTML/JSX, o atributo class do HTML puro vira qual atributo dentro de um componente React?",
    options: [
        "A) styleClass",                  
        "B) className",
        "C) classes",
        "D) cssName"
    ],
    correct: 1,
    explanation: "Como o JSX é uma extensão do JavaScript e class é uma palavra reservada da linguagem JS (usada para criar classes/objetos), o React adotou className para definir classes CSS de elementos HTML."
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
    explanation: "Em React/JSX, atributos style recebem um objeto JavaScript. O primeiro par de chaves {} indica a entrada de uma expressão JS no JSX, e o segundo par {} define o objeto com as propriedades CSS (em camelCase se houver hífen, como backgroundColor)."
  },
   {
    question: "8. No JS puro, uma variável guardava o valor do contador manualmente (ex: let contador = 0). Qual é o equivalente em React?",
    options: [
        "A) const contador = 0;",
        "B) const [contador, setContador] = useState(0);",
        "C) var contador = new State(0);",
        "D) props.contador = 0;"
    ],
    correct: 1,
    explanation: "Explicação: Para que uma alteração em uma variável faça o componente recarregar na tela no React, ela precisa ser um Estado. O Hook useState retorna um par contendo o valor atual do estado e a função que permite atualizá-lo."
  },
   {
    question: "9. No JS puro, o HTML e o JavaScript ficavam em arquivos separados (index.html e script.js). No React, como o HTML da interface é escrito?",
    options: [
        "A) Sempre em um arquivo .html separado",   
        "B) Em JSX, misturado com a lógica dentro do próprio componente .jsx",
        "C) Como uma string dentro de um arquivo .css",
        "D) React não usa HTML de forma alguma"
    ],
    correct: 1,
    explanation: "O React une a lógica do componente e a renderização visual em um único arquivo usando a sintaxe JSX (JavaScript XML), permitindo que estruturas semelhantes a HTML existam diretamente no código JS."
  },
   {
    question: "10. O que aconteceu com o arquivo style.css ao migrar o projeto de JS puro para React?",
    options: [
        "A) Foi reescrito inteiramente em JSX",
        "B) Foi copiado para src/style.css sem nenhuma alteração",
        "C) Foi transformado em um objeto de estilos JavaScript",
        "D) Foi removido, pois o React não aceita CSS "
    ],
    correct: 1,
    explanation: "O CSS tradicional pode continuar sendo reaproveitado da mesma forma. No React, basta importar o arquivo no componente principal ou na raiz (ex: import './style.css'), sem necessidade de reescrever as regras de estilo existentes."
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
    explanation: "O Hook useState do React retorna uma tupla (array de 2 elementos): o índice 0 contém o estado atual (iniciado com o parâmetro passado, neste caso 0), e o índice 1 contém a função responsável por alterar esse estado e disparar a re-renderização do componente. Por isso usamos desestruturação: const [valor, setValor] = useState(0)."
  },
  {
    question: "12. Por que os inputs da Calculadora.jsx usam value={numero1} junto com onChange, em vez de deixar o navegador controlar o campo sozinho?",
    options: [
        "A) Porque isso é obrigatório em qualquer HTML",
        "B) Para tornar o input 'controlado': o valor do campo fica sincronizado com o estado do React",
        "C) Porque inputs numéricos exigem essa sintaxe especial",
        "D) Isso apenas melhora a performance visual"
    ],
    correct: 1,
    explanation: "No React, o padrão de 'componente controlado' vincula a propriedade value do input diretamente ao valor de um state, e escuta o evento onChange para atualizar esse state. Isso garante uma 'fonte única da verdade' e permite validar ou reformatar o que é digitado em tempo real."
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
    question: "14. Qual é a principal vantagem de dividir a interface em componentes (Saudacao, Contador, MudarCor, Calculadora), em vez de um único arquivo?",
    options: [
      "A) Cada componente cuida da sua própria parte da interface e do seu próprio estado, de forma isolada e reutilizável",
      "B) Componentes deixam o projeto mais lento",
      "C) É a única forma de usar CSS no React",
      "D) Componentes eliminam a necessidade de useState"
    ],
    correct: 0,
    explanation: "A arquitetura baseada em componentes promove a modularidade e a responsabilidade única. Cada bloco isola sua lógica, estilos e estado interno, o que torna o código muito mais organizado, testável e reutilizável em diferentes partes da aplicação."
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
    explanation: "Chamar a função modificadora obtida via useState sinaliza ao React que aquele estado mudou. O React então calcula a diferença no Virtual DOM e re-renderiza eficientemente a parte da tela que depende desse valor."
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
    explanation: "Os estados criados com useState pertencem à instância específica do componente na árvore de renderização. Usar duas tags <Contador/> cria duas instâncias isoladas no DOM, permitindo que cada uma mantenha suas próprias variáveis sem interferir na outra."
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
    explanation: "O JSX (JavaScript XML) é uma extensão de sintaxe para JS. Ele permite descrever como a interface gráfica deve parecer usando uma marcação idêntica ao HTML, que ferramentas como Vite/Babel transformam internamente em chamadas de funções JavaScript."
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
    explanation: "O estado inicial passado para o useState define o estado do componente na primeira renderização. Como a aplicação começava com a cor padrão do texto e exigia a ação de um clique para mudar para azul, o valor booleano inicial precisava ser false."
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
    explanation: "O StrictMode é um wrapper utilitário exclusivo para o ambiente de desenvolvimento. Ele não renderiza interface visível, mas ativa verificações e avisos adicionais no console para detectar potenciais falhas."
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
    explanation: "Em manipuladores de eventos do React, a função lê o estado atual dos dados (o valor digitado no input nome), aplica a lógica de validação necessária e atualiza o estado correspondente da interface com o resultado final via setMensagem."
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
    explanation: "O pacote create-vite utiliza essa sintaxe de comando. A flag --template react instrui a ferramenta a scaffoldar diretamente uma estrutura pré-configurada para React com JavaScript."
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
    explanation: "Por convenção nas aplicações React, os componentes da interface são agrupados dentro de uma pasta dedicada chamada components situada no diretório do código-fonte (src/)."
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
    explanation: "O App.jsx atua como o componente raiz (ou container principal). Ele agrega e organiza a hierarquia de todos os subcomponentes dentro da estrutura semântica da página."
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
    explanation: "O objeto mapeia cada tipo de operação para seu cálculo numérico equivalente, facilitando a seleção direta do resultado correto de acordo com o botão clicado pelo usuário."
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
    explanation: "Uma validação prévia verifica se algum dos inputs está em branco. Se a condição for atendida, ela atualiza a mensagem com um aviso amigável e executa um return para interromper o processamento das operações matemáticas."
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
    explanation: "Para evitar resultados matematicamente inválidos (como Infinity ou NaN), a função inclui uma verificação lógica específica para a operação de divisão quando o segundo número é 0."
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
    explanation: "O main.jsx é referenciado na tag <script> do index.html. É nele que a inicialização do React ocorre, ligando a raiz da aplicação React ao nó DOM nativo identificável por #root."
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
    explanation: "O método createRoot estabelece o contêiner React associado ao elemento do DOM nativo (#root), enquanto o método .render() instrui a árvore de componentes a ser processada e desenhada na tela dentro dessa raiz."
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
    explanation: "Os seletores do CSS combinam com atributos do DOM (class e id). Como o JSX dos componentes React continuou emitindo os mesmos className e id na estrutura HTML final, as regras contidas em style.css mantiveram a mesma compatibilidade sem adaptações."
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
    explanation: "O comando npm run build executa o bundler (Vite) para compilar, minificar e otimizar o código em arquivos estáticos prontos para produção. Ele também executa checagens no código para garantir que não há erros de compilação ou sintaxe."
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

nextBtn.addEventListener("click", handleNextQuestion);
restartBtn.addEventListener("click", restartQuiz);

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

  totalQuestionsSpan.textContent = questions.length;
  if (currentQuestionIndex >= questions.length) {
    showResult();
  } else {
    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    showQuestion();
  }
}

function restartQuiz() {
  resetProgress();
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  questionText.textContent = currentQuestion.question;

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(button);
  });
}

function resetState() {
  nextBtn.classList.add("hidden");
  explanationBox.classList.add("hidden");
  optionsContainer.innerHTML = "";
}

function selectOption(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const buttons = optionsContainer.querySelectorAll(".option-btn");

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === currentQuestion.correct) {
      button.classList.add("correct");
    }
  });

  if (selectedIndex === currentQuestion.correct) {
    score++;
  } else {
    buttons[selectedIndex].classList.add("incorrect");
  }

  saveProgress();

  explanationText.textContent = currentQuestion.explanation;
  explanationBox.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
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
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  scoreSpan.textContent = score;
  scoreTotalSpan.textContent = questions.length;
}

initQuiz();
