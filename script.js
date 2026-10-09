const questions = [
 {
    question: "1. O conceito de banco de dados nasceu junto com a invenção dos computadores eletrônicos no século XX?",
    options: [
      "(A) Sim, pois sem eletricidade e memória digital é impossível existir um banco de dados.",
      "(B) Não, pois o banco de dados nasce da necessidade ancestral humana de registrar e recuperar informações",
      "(C) Sim, foi criado pela IBM em 1970 junto com a linguagem SQL.",
      "(D) Não, foi criado nos anos 1960 exclusivamente para rodar em discos magnéticos."
    ],
    correct: 1,
    explanation: "aO conceito de banco de dados antecede o computador. Pinturas rupestres (registrando caça) e hieróglifos egípcios (registrando colheitas e impostos do Faraó) já eram formas primitivas de armazenamento e recuperação de dados"
  },
  [
  {
    question: "6. O Sistema Gerenciador de Banco de Dados (SGBD) foi criado para resolver as limitações e problemas do modelo de arquivos isolados. Qual das opções a seguir define corretamente o que é um SGBD e apresenta três de seus principais benefícios?",
    options: [
      "A) É um hardware especializado para armazenamento físico de dados. Benefícios: maior velocidade de processamento, consumo reduzido de energia e dispensa do uso de backups.",
      "B) É um software de aplicação final utilizado diretamente pelo usuário para criar planilhas. Benefícios: automatização de fórmulas, geração de gráficos 3D e impressão rápida.",
      "C) É uma camada de software centralizada responsável por gerenciar, organizar, controlar e proteger o acesso à base de dados. Benefícios: controle de acesso e segurança, garantia de integridade dos dados e controle de concorrência.",
      "D) É uma linguagem de programação usada para desenvolver interfaces web. Benefícios: suporte a componentes gráficos, facilidade na estilização CSS e integração nativa com navegadores."
    ],
    correct: 2,
    explanation: "O SGBD isola a aplicação da complexidade do armazenamento físico, permitindo que múltiplos sistemas e usuários acessem uma base unificada com segurança, consistência, controle de concorrência e facilidade de backup/recuperação."
  },
  {
    question: "7. Qual é a diferença entre \"Dado\" e \"Informação\"?",
    options: [
      "A) Dado é o resultado de uma consulta SQL; Informação é o valor digitado pelo usuário.",
      "B) Dado é um elemento bruto e sem contexto; Informação é o dado processado e contextualizado com valor de negócio.",
      "C) Não há diferença, ambos representam a mesma coisa na modelagem.",
      "D) Dado é armazenado em arquivo físico; Informação é armazenada em banco relacional."
    ],
    correct: 1,
    explanation: "O número 10 isolado é apenas um dado bruto. Dizer \"O cliente comprou 10 unidades do produto P01 no dia 10/08\" transforma o dado em informação com significado."
  },
  {
    question: "8. No Diagrama Entidade-Relacionamento (DER) de Peter Chen, como são representados graficamente as Entidades, os Relacionamentos e os Atributos?",
    options: [
      "A) Entidades = Círculos | Relacionamentos = Retângulos | Atributos = Losangos",
      "B) Entidades = Retângulos | Relacionamentos = Losangos | Atributos = Elipses/Círculos",
      "C) Entidades = Tabelas | Relacionamentos = Chaves | Atributos = Linhas",
      "D) Entidades = Losangos | Relacionamentos = Triângulos | Atributos = Quadrados"
    ],
    correct: 1,
    explanation: "Na notação clássica de Chen, os retângulos representam os objetos de negócio (Entidades), os losangos representam as ações/conexões (Relacionamentos) e as elipses/bolinhas contêm os dados (Atributos)."
  },
  {
    question: "9. O que é um Atributo Derivado?",
    options: [
      "A) Um atributo que contém subpartes como Rua, Número e Bairro.",
      "B) Um atributo que aceita múltiplos valores para o mesmo usuário.",
      "C) Um atributo cujo valor pode ser calculado a partir de outro dado.",
      "D) Um atributo que identifica unicamente a linha da tabela."
    ],
    correct: 2,
    explanation: "Atributos derivados não precisam ser gravados no banco para não gerar redundância. Exemplo: a Idade pode ser calculada instantaneamente subtraindo a Data_Nascimento da data atual."
  },
  {
    question: "10. Na cardinalidade de um relacionamento, o que representam a Cardinalidade Mínima e a Cardinalidade Máxima?",
    options: [
      "A) Mínima = quantidade de colunas; Máxima = quantidade de tabelas.",
      "B) Mínima = participação opcional (0) ou obrigatória (1); Máxima = limite de conexões (1 ou N).",
      "C) Mínima = quantidade de chaves primárias; Máxima = quantidade de chaves estrangeiras.",
      "D) Mínima = número de caracteres do texto; Máxima = tamanho do campo inteiro."
    ],
    correct: 1,
    explanation: "A cardinalidade mínima (0 ou 1) diz se a instância precisa obrigatoriamente participar do relacionamento; a máxima (1 ou N) define se ela pode se conectar com apenas uma ou com várias instâncias."
  },
  {
    question: "11. No modelamento de dados, alguns atributos exigem atenção especial por violarem a regra de atomicidade das tabelas se não forem devidamente tratados na migração para o modelo lógico. Qual opção define corretamente um Atributo Multivalorado e apresenta um exemplo prático de um contexto de negócio?",
    options: [
      "A) É aquele que não pode conter nenhum valor nulo no banco de dados. Exemplo: O atributo CPF na entidade PESSOA.",
      "B) É aquele que pode possuir mais de um valor associado a uma única instância de entidade. Exemplo: O atributo TELEFONE na entidade CLIENTE, pois um cliente pode ter telefone residencial, celular e de recado.",
      "C) É aquele cujo valor é obtido a partir do cálculo de outro atributo. Exemplo: O atributo IDADE calculado a partir da DATA_NASCIMENTO.",
      "D) É aquele composto por várias partes independentes que formam um único dado. Exemplo: O atributo ENDEREÇO dividido em RUA, NÚMERO e CEP."
    ],
    correct: 1,
    explanation: "Atributos multivalorados (como telefone ou e-mail) permitem múltiplos valores para um único registro, exigindo a criação de uma nova tabela associada no modelo lógico para manter a 1ª Forma Normal (1FN) e a atomicidade dos dados."
  }
]
[
  {
    question: "12. Na conversão do Modelo Conceitual para o Modelo Lógico, qual é a regra básica para transformar Entidades, Atributos e Identificadores?",
    options: [
      "A) Entidade -> Coluna | Atributo -> Tabela | Identificador -> Chave Estrangeira",
      "B) Entidade -> Tabela | Atributo -> Coluna | Identificador -> Chave Primária (PK)",
      "C) Entidade -> Banco | Atributo -> Registro | Identificador -> Índice",
      "D) Entidade -> Schema | Atributo -> DDL | Identificador -> Constraints"
    ],
    correct: 1,
    explanation: "Esta é a regra clássica de transposição: cada objeto vira uma Tabela, cada característica vira uma Coluna dessa tabela e o identificador vira a Chave Primária (PK) que garante a unicidade."
  },
  {
    question: "13. Como deve ser mapeado no modelo lógico um relacionamento de cardinalidade 1:N (Um-para-Muitos), como entre DEPARTAMENTO (1) e FUNCIONARIO (N)?",
    options: [
      "A) Cria-se uma nova tabela intermediária com as duas chaves primárias.",
      "B) A Chave Estrangeira (FK) obrigatoriamente vai para a tabela do lado N (FUNCIONARIO).",
      "C) A Chave Estrangeira (FK) obrigatoriamente vai para a tabela do lado 1 (DEPARTAMENTO).",
      "D) Não se utiliza chave estrangeira em relacionamentos 1:N."
    ],
    correct: 1,
    explanation: "No relacionamento 1:N, para evitar a duplicação de linhas no lado '1', a Chave Primária da tabela pai (lado 1) é herdada como Chave Estrangeira (FK) na tabela filho (lado N)."
  },
  {
    question: "14. O que acontece ao mapear um relacionamento N:M (Muitos-para-Muitos) do modelo conceitual para o lógico?",
    options: [
      "A) A FK é colocada em qualquer uma das duas tabelas originais.",
      "B) Gera-se obrigatoriamente uma nova Tabela Associativa com a PK composta pelas FKs das duas tabelas.",
      "C) O relacionamento é descartado pois bancos relacionais não suportam cardinalidade N:M.",
      "D) Os atributos de uma tabela são copiados integralmente para a outra tabela."
    ],
    correct: 1,
    explanation: "Bancos relacionais não conseguem ligar diretamente duas tabelas em relação N:M. Cria-se uma tabela de ligação no meio, transformando o relacionamento em dois relacionamentos 1:N."
  },
  {
    question: "15. Se o modelo conceitual tiver um Atributo Multivalorado (ex: TELEFONE na entidade CLIENTE), como ele é representado no modelo lógico?",
    options: [
      "A) Vira uma coluna do tipo texto contendo todos os telefones separados por vírgula na mesma célula.",
      "B) Vira uma nova tabela auxiliar dedicada com a sua própria PK e uma FK referenciando a tabela CLIENTE.",
      "C) É eliminado da modelagem por não ser um valor atômico.",
      "D) Permanece como atributo composto dentro da própria tabela CLIENTE."
    ],
    correct: 1,
    explanation: "Tentar colocar múltiplos valores em um único campo violaria a 1ª Forma Normal. A solução relacional é criar uma tabela auxiliar (ex: TELEFONE) apontando para o cliente via FK."
  },
  {
    question: "16. Considere o seguinte cenário: 'Um PROFESSOR (id_prof, nome) ministra várias DISCIPLINAS (id_disc, nome), e uma DISCIPLINA pode ser ministrada por vários PROFESSORES. O sistema grava o semestre em que o professor ministrou a disciplina.' Qual é a estrutura do Modelo Lógico correto resultante dessa relação?",
    options: [
      "A) PROFESSOR (PK id_prof, nome, FK id_disc) | DISCIPLINA (PK id_disc, nome, semestre)",
      "B) PROFESSOR (PK id_prof, nome) | DISCIPLINA (PK id_disc, nome, FK id_prof, semestre)",
      "C) PROFESSOR (PK id_prof, nome) | DISCIPLINA (PK id_disc, nome) | MINISTRA (PK/FK id_prof, PK/FK id_disc, semestre)",
      "D) PROFESSOR_DISCIPLINA (PK id_prof, PK id_disc, nome_prof, nome_disc, semestre)"
    ],
    correct: 2,
    explanation: "Como a relação é de cardinalidade Muitos-para-Muitos (N:M), é obrigatório criar uma tabela associativa (MINISTRA ou PROFESSOR_DISCIPLINA). A Chave Primária dessa tabela é composta pelas duas Chaves Estrangeiras (id_prof e id_disc), e o atributo da relação (semestre) passa a ser uma coluna nessa nova tabela."
  }
]
[
  {
    question: "17. Qual é a regra mandatória para que uma tabela esteja na Primeira Forma Normal (1FN)?",
    options: [
      "A) Não possuir chaves primárias compostas.",
      "B) Não possuir dependências transitivas entre atributos não-chave.",
      "C) Todos os atributos devem possuir valores atômicos (indivisíveis) e não existir grupos repetitivos.",
      "D) Todos os determinantes devem ser chaves candidatas."
    ],
    correct: 2,
    explanation: "A 1FN garante a atomicidade dos dados: cada célula armazena apenas um único valor e não existem colunas repetidas (como Tel1, Tel2, Tel3)."
  },
  {
    question: "18. Quando uma tabela que já está na 1FN viola a Segunda Forma Normal (2FN)?",
    options: [
      "A) Quando possui campos do tipo texto com mais de 255 caracteres.",
      "B) Quando possui uma chave primária composta e um atributo não-chave depende de apenas UMA PARTE dessa chave.",
      "C) Quando não possui chave estrangeira cadastrada.",
      "D) Quando um atributo não-chave depende de outro atributo não-chave."
    ],
    correct: 1,
    explanation: "A 2FN ataca a 'Dependência Parcial'. Se a chave é composta por (A+B), todos os outros atributos devem depender de (A+B) juntos, e não apenas de A ou apenas de B."
  },
  {
    question: "19. O que é uma Dependência Transitiva (que é proibida na Terceira Forma Normal - 3FN)?",
    options: [
      "A) Quando uma coluna do tipo data depende do horário do sistema.",
      "B) Quando um atributo não-chave depende de outro atributo que também NÃO é chave na tabela.",
      "C) Quando a chave primária muda de valor durante uma transação.",
      "D) Quando uma chave estrangeira aponta para uma tabela inexistente."
    ],
    correct: 1,
    explanation: "Na 3FN, todos os atributos não-chave devem depender direta e exclusivamente da Chave Primária. Se Nome_Cliente depende de Cod_Cliente, e Cod_Cliente está solto em uma tabela de PEDIDO, há dependência transitiva."
  },
  {
    question: "20. Dada a tabela não-normalizada de Vendas abaixo: TABELA_PEDIDO (NumPedido, DataPedido, CodCliente, NomeCliente, UF). Qual Forma Normal está sendo violada e qual é a solução normalizada correta para este banco de dados?",
    options: [
      "A) Viola a 1ª Forma Normal (1FN). Solução: Unir todas as colunas em um único campo de texto separado por vírgulas.",
      "B) Viola a 2ª Forma Normal (2FN). Solução: Criar uma tabela separada para UF contendo todas as cidades do país.",
      "C) Viola a 3ª Forma Normal (3FN), pois NomeCliente e UF dependem do CodCliente (dependência transitiva) e não da chave primária NumPedido. Solução: CLIENTE (PK CodCliente, NomeCliente, UF) e PEDIDO (PK NumPedido, DataPedido, FK CodCliente).",
      "D) Não há nenhuma violação; a tabela já se encontra perfeitamente normalizada."
    ],
    correct: 2,
    explanation: "Os atributos NomeCliente e UF dependem diretamente de CodCliente, e não da PK NumPedido. Essa dependência transitiva viola a 3FN. Ao isolar os dados do cliente em sua própria tabela, elimina-se a redundância de repetir o nome e a UF a cada novo pedido realizado."
  },
  {
    question: "21. Qual é a diferença prática de armazenamento entre os tipos de dados CHAR(20) e VARCHAR(20) no MySQL?",
    options: [
      "A) CHAR armazena apenas números; VARCHAR armazena letras e números.",
      "B) CHAR(20) ocupa sempre 20 bytes fixos na memória; VARCHAR(20) ocupa apenas o tamanho do texto digitado (até 20).",
      "C) VARCHAR aceita apenas letras maiúsculas; CHAR aceita minúsculas.",
      "D) Não há diferença prática, ambos alocam a memória de forma idêntica."
    ],
    correct: 1,
    explanation: "CHAR é de tamanho estático (se gravar 'Ana', usará os 20 espaços). VARCHAR é de tamanho dinâmico (se gravar 'Ana', usará apenas 3 bytes + byte de controle)."
  },
  {
    question: "22. Qual comando DDL é utilizado para alterar a estrutura de uma tabela já existente (como adicionar ou excluir uma coluna)?",
    options: [
      "A) UPDATE TABLE",
      "B) MODIFY TABLE",
      "C) ALTER TABLE",
      "D) CHANGE TABLE"
    ],
    correct: 2,
    explanation: "O comando DDL ALTER TABLE é o padrão SQL para modificar a definição de uma tabela (ex.: ADD para criar coluna, DROP COLUMN para remover)."
  },
  {
    question: "23. Para apagar completamente uma tabela e todos os seus dados de forma permanente do banco de dados, qual comando DDL deve ser executado?",
    options: [
      "A) DELETE FROM nome_tabela;",
      "B) REMOVE TABLE nome_tabela;",
      "C) DROP TABLE nome_tabela;",
      "D) ERASE TABLE nome_tabela;"
    ],
    correct: 2,
    explanation: "O comando DDL DROP TABLE remove a tabela e toda a sua estrutura do dicionário de dados do banco. Já o DELETE é um comando DML que apaga apenas as linhas."
  }
]
[
  {
    question: "24. Escreva o script SQL DDL para criar o banco de dados chamado SISTEMA_FACULDADE e em seguida selecione-o para uso.",
    type: "script",
    expectedCode: "CREATE DATABASE SISTEMA_FACULDADE;\nUSE SISTEMA_FACULDADE;",
    keywords: ["CREATE DATABASE", "SISTEMA_FACULDADE", "USE"],
    explanation: "O comando CREATE DATABASE cria o ambiente de armazenamento do banco de dados e o USE altera o contexto da sessão, informando ao MySQL qual base receberá os próximos comandos SQL."
  },
  {
    question: "25. Escreva o script SQL DDL completo para criar a tabela CURSO contendo:\n- id_curso: inteiro, auto-incremento, Chave Primária\n- nome_curso: texto de até 100 caracteres, obrigatório\n- sigla: texto de 5 caracteres, valor único\n- valor_mensalidade: decimal com 8 dígitos no total e 2 casas decimais.",
    type: "script",
    expectedCode: "CREATE TABLE CURSO (\n    id_curso INT AUTO_INCREMENT PRIMARY KEY,\n    nome_curso VARCHAR(100) NOT NULL,\n    sigla VARCHAR(5) UNIQUE,\n    valor_mensalidade DECIMAL(8,2)\n);",
    keywords: ["CREATE TABLE", "CURSO", "AUTO_INCREMENT", "PRIMARY KEY", "NOT NULL", "UNIQUE", "DECIMAL(8,2)"],
    explanation: "INT AUTO_INCREMENT PRIMARY KEY define o identificador mestre numérico automático. VARCHAR(100) NOT NULL cria a coluna obrigatória. UNIQUE garante a unicidade da sigla e DECIMAL(8,2) configura a precisão monetária de ponto fixo."
  },
  {
    question: "26. Escreva o script SQL DDL para criar a tabela ALUNO conectando-a à tabela CURSO através de uma Chave Estrangeira (FK):\n- rgm: inteiro, Chave Primária\n- nome_aluno: texto de até 80 caracteres, obrigatório\n- id_curso: inteiro, obrigatório\n- Restrição de Chave Estrangeira com o nome 'fk_aluno_curso'.",
    type: "script",
    expectedCode: "CREATE TABLE ALUNO (\n    rgm INT PRIMARY KEY,\n    nome_aluno VARCHAR(80) NOT NULL,\n    id_curso INT NOT NULL,\n    CONSTRAINT fk_aluno_curso FOREIGN KEY (id_curso) REFERENCES CURSO(id_curso)\n);",
    keywords: ["CREATE TABLE", "ALUNO", "PRIMARY KEY", "CONSTRAINT", "fk_aluno_curso", "FOREIGN KEY", "REFERENCES"],
    explanation: "A sintaxe CONSTRAINT fk_aluno_curso FOREIGN KEY (id_curso) REFERENCES CURSO(id_curso) estabelece a regra de integridade referencial física, impedindo o cadastro de alunos vinculados a cursos inexistentes."
  },
  {
    question: "27. Escreva o comando SQL DDL para adicionar a coluna email (texto até 60 caracteres, valor único) na tabela ALUNO criada anteriormente.",
    type: "script",
    expectedCode: "ALTER TABLE ALUNO ADD email VARCHAR(60) UNIQUE;",
    keywords: ["ALTER TABLE", "ALUNO", "ADD", "email", "VARCHAR(60)", "UNIQUE"],
    explanation: "O comando DDL ALTER TABLE juntamente com a instrução ADD permite modificar a estrutura de uma tabela existente adicionando novos campos e constraints sem apagar os dados existentes."
  }
]
];

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
    button.classList.add("option-btn");
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

  if (explanationText && currentQuestion.explanation) {
    explanationText.textContent = currentQuestion.explanation;
    explanationBox.classList.remove("hidden");
  }

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
