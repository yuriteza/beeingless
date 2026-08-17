/* =========================================================
   MENU
========================================================= */

document
    .getElementById("idhome")
    .addEventListener("click", function(event){

        event.preventDefault();

        window.location.href="../index.html";

    });


document
    .getElementById("idnivel")
    .addEventListener("click", function(event){

        event.preventDefault();

        window.location.href="../pages/niveis.html";

    });


document
    .getElementById("idblog")
    .addEventListener("click", function(event){

        event.preventDefault();

        window.location.href="../pages/blog.html";

    });


document
    .getElementById("idtopicos")
    .addEventListener("click", function(event){

        event.preventDefault();

        window.location.href="../pages/topicos.html";

    });


document
    .getElementById("idexercicios")
    .addEventListener("click", function(event){

        event.preventDefault();

        window.location.href="../pages/exercicios.html";

    });


document
    .getElementById("idteste")
    .addEventListener("click", function(event){

        event.preventDefault();

        window.location.href="../pages/teste_nivel.html";

    });


/* =========================================================
   BANCO DE EXERCÍCIOS
========================================================= */

const exercicios = {


/* =====================================================
   VOCABULÁRIO
===================================================== */

vocabulario: {

    basico: [

        {
            pergunta:"What is the meaning of 'apple'?",
            alternativas:[
                "Maçã",
                "Casa",
                "Carro",
                "Livro"
            ],
            correta:0
        },

        {
            pergunta:"Choose the correct word: I drink ___ every morning.",
            alternativas:[
                "coffee",
                "chair",
                "window",
                "shoe"
            ],
            correta:0
        },

        {
            pergunta:"What is 'dog' in Portuguese?",
            alternativas:[
                "Gato",
                "Cachorro",
                "Pássaro",
                "Peixe"
            ],
            correta:1
        },

        {
            pergunta:"Which word means 'casa'?",
            alternativas:[
                "House",
                "Horse",
                "Hand",
                "Hat"
            ],
            correta:0
        },

        {
            pergunta:"Choose the correct word: The sky is ___.",
            alternativas:[
                "blue",
                "table",
                "run",
                "book"
            ],
            correta:0
        }

    ],


    intermediario: [

        {
            pergunta:"What does 'improve' mean?",
            alternativas:[
                "Melhorar",
                "Esquecer",
                "Perder",
                "Comprar"
            ],
            correta:0
        },

        {
            pergunta:"Choose the correct word: She has a very ___ job.",
            alternativas:[
                "interesting",
                "eat",
                "quickly",
                "yesterday"
            ],
            correta:0
        },

        {
            pergunta:"What does 'although' express?",
            alternativas:[
                "Contraste",
                "Tempo",
                "Lugar",
                "Quantidade"
            ],
            correta:0
        },

        {
            pergunta:"Choose the synonym of 'happy'.",
            alternativas:[
                "Sad",
                "Angry",
                "Glad",
                "Tired"
            ],
            correta:2
        },

        {
            pergunta:"What does 'environment' mean?",
            alternativas:[
                "Ambiente",
                "Equipamento",
                "Experiência",
                "Emprego"
            ],
            correta:0
        }

    ],


    avancado: [

        {
            pergunta:"What does 'accurate' mean?",
            alternativas:[
                "Preciso",
                "Rápido",
                "Barulhento",
                "Perigoso"
            ],
            correta:0
        },

        {
            pergunta:"Choose the synonym of 'significant'.",
            alternativas:[
                "Unimportant",
                "Important",
                "Tiny",
                "Simple"
            ],
            correta:1
        },

        {
            pergunta:"What does 'despite' indicate?",
            alternativas:[
                "Contraste",
                "Causa",
                "Tempo",
                "Lugar"
            ],
            correta:0
        },

        {
            pergunta:"Choose the correct word: The results were highly ___.",
            alternativas:[
                "reliable",
                "eat",
                "chair",
                "slowly"
            ],
            correta:0
        },

        {
            pergunta:"What does 'achievement' mean?",
            alternativas:[
                "Conquista",
                "Problema",
                "Tentativa",
                "Mudança"
            ],
            correta:0
        }

    ]

},


/* =====================================================
   GRAMÁTICA
===================================================== */

gramatica: {

    basico: [

        {
            pergunta:"She ___ a student.",
            alternativas:[
                "is",
                "are",
                "am",
                "be"
            ],
            correta:0
        },

        {
            pergunta:"They ___ happy.",
            alternativas:[
                "is",
                "am",
                "are",
                "be"
            ],
            correta:2
        },

        {
            pergunta:"I ___ coffee every morning.",
            alternativas:[
                "drink",
                "drinks",
                "drinking",
                "drank"
            ],
            correta:0
        },

        {
            pergunta:"He ___ football on Sundays.",
            alternativas:[
                "play",
                "plays",
                "playing",
                "played"
            ],
            correta:1
        },

        {
            pergunta:"Choose the correct sentence.",
            alternativas:[
                "She are happy.",
                "She is happy.",
                "She am happy.",
                "She be happy."
            ],
            correta:1
        }

    ],


    intermediario: [

        {
            pergunta:"I have lived here ___ 2020.",
            alternativas:[
                "for",
                "since",
                "during",
                "from"
            ],
            correta:1
        },

        {
            pergunta:"If I had more time, I ___ travel.",
            alternativas:[
                "will",
                "would",
                "can",
                "am"
            ],
            correta:1
        },

        {
            pergunta:"She has ___ finished her homework.",
            alternativas:[
                "already",
                "yet",
                "still",
                "ever"
            ],
            correta:0
        },

        {
            pergunta:"They ___ to London last year.",
            alternativas:[
                "go",
                "gone",
                "went",
                "going"
            ],
            correta:2
        },

        {
            pergunta:"Choose the correct sentence.",
            alternativas:[
                "He don't like coffee.",
                "He doesn't like coffee.",
                "He doesn't likes coffee.",
                "He not like coffee."
            ],
            correta:1
        }

    ],


    avancado: [

        {
            pergunta:"If she had studied, she ___ the exam.",
            alternativas:[
                "would pass",
                "would have passed",
                "will pass",
                "passes"
            ],
            correta:1
        },

        {
            pergunta:"The report ___ by the manager yesterday.",
            alternativas:[
                "was written",
                "wrote",
                "has wrote",
                "writing"
            ],
            correta:0
        },

        {
            pergunta:"I wish I ___ more time.",
            alternativas:[
                "have",
                "had",
                "will have",
                "having"
            ],
            correta:1
        },

        {
            pergunta:"By next year, they ___ the project.",
            alternativas:[
                "will complete",
                "will have completed",
                "completed",
                "complete"
            ],
            correta:1
        },

        {
            pergunta:"Hardly ___ when the phone rang.",
            alternativas:[
                "I had arrived",
                "had I arrived",
                "I arrived",
                "did I arrived"
            ],
            correta:1
        }

    ]

},


/* =====================================================
   PRONÚNCIA
===================================================== */

pronuncia: {

    basico: [

        {
            pergunta:"Which word starts with the /b/ sound?",
            alternativas:[
                "Book",
                "Phone",
                "Chair",
                "Think"
            ],
            correta:0
        },

        {
            pergunta:"Which word starts with the /k/ sound?",
            alternativas:[
                "Cat",
                "Girl",
                "Phone",
                "Ship"
            ],
            correta:0
        },

        {
            pergunta:"Which word has the /sh/ sound?",
            alternativas:[
                "Ship",
                "Dog",
                "Cat",
                "Pen"
            ],
            correta:0
        },

        {
            pergunta:"Which word has the /ch/ sound?",
            alternativas:[
                "Chair",
                "Book",
                "Dog",
                "Fish"
            ],
            correta:0
        },

        {
            pergunta:"Which word rhymes with 'cat'?",
            alternativas:[
                "Hat",
                "Dog",
                "Book",
                "Sun"
            ],
            correta:0
        }

    ],

    intermediario: [

        {
            pergunta:"Which word has a silent 'k'?",
            alternativas:[
                "Know",
                "Keep",
                "Kind",
                "Kitchen"
            ],
            correta:0
        },

        {
            pergunta:"Which word has the /θ/ sound?",
            alternativas:[
                "Think",
                "Drink",
                "Sing",
                "Bring"
            ],
            correta:0
        },

        {
            pergunta:"Which word contains the /v/ sound?",
            alternativas:[
                "Very",
                "Berry",
                "Ferry",
                "Merry"
            ],
            correta:0
        },

        {
            pergunta:"Which word has the /dʒ/ sound?",
            alternativas:[
                "Job",
                "Shop",
                "Stop",
                "Top"
            ],
            correta:0
        },

        {
            pergunta:"Which word has a silent 'b'?",
            alternativas:[
                "Comb",
                "Baby",
                "Table",
                "Number"
            ],
            correta:0
        }

    ],

    avancado: [

        {
            pergunta:"Which word has the /ʃən/ ending?",
            alternativas:[
                "Nation",
                "Nation's",
                "Native",
                "Nature"
            ],
            correta:0
        },

        {
            pergunta:"Which word contains the /ʒ/ sound?",
            alternativas:[
                "Vision",
                "Mission",
                "Kitchen",
                "Question"
            ],
            correta:0
        },

        {
            pergunta:"Which word has stress on the second syllable?",
            alternativas:[
                "Hotel",
                "Table",
                "Window",
                "Teacher"
            ],
            correta:0
        },

        {
            pergunta:"Which word contains a silent 'gh'?",
            alternativas:[
                "Though",
                "Together",
                "Garden",
                "Mother"
            ],
            correta:0
        },

        {
            pergunta:"Which word has the vowel sound /iː/?",
            alternativas:[
                "Beach",
                "Bed",
                "Bad",
                "Book"
            ],
            correta:0
        }

    ]

},


/* =====================================================
   LISTENING
===================================================== */

listening: {

    basico: [

        {
            pergunta:"Imagine you hear: 'Good morning! How are you?' What is the person doing?",
            alternativas:[
                "Greeting someone",
                "Saying goodbye",
                "Ordering food",
                "Asking for directions"
            ],
            correta:0
        },

        {
            pergunta:"You hear: 'My name is John.' What information did you hear?",
            alternativas:[
                "A name",
                "An address",
                "An age",
                "A phone number"
            ],
            correta:0
        },

        {
            pergunta:"You hear: 'I am twenty years old.' What is the person's age?",
            alternativas:[
                "12",
                "20",
                "30",
                "40"
            ],
            correta:1
        },

        {
            pergunta:"You hear: 'I like pizza.' What food does the person like?",
            alternativas:[
                "Pizza",
                "Rice",
                "Fish",
                "Bread"
            ],
            correta:0
        },

        {
            pergunta:"You hear: 'See you tomorrow!' What does the person mean?",
            alternativas:[
                "See you today",
                "See you tomorrow",
                "Good morning",
                "Good afternoon"
            ],
            correta:1
        }

    ],

    intermediario: [

        {
            pergunta:"You hear: 'The meeting starts at half past nine.' What time is it?",
            alternativas:[
                "8:30",
                "9:00",
                "9:30",
                "10:30"
            ],
            correta:2
        },

        {
            pergunta:"You hear: 'I have been working here for three years.' How long?",
            alternativas:[
                "Three months",
                "Three years",
                "Five years",
                "Ten years"
            ],
            correta:1
        },

        {
            pergunta:"You hear: 'She missed the bus because she woke up late.' Why did she miss it?",
            alternativas:[
                "The bus was early",
                "She was sick",
                "She woke up late",
                "She forgot the address"
            ],
            correta:2
        },

        {
            pergunta:"You hear: 'Could you send me the report by Friday?' What is being requested?",
            alternativas:[
                "A meeting",
                "A report",
                "A phone call",
                "A presentation"
            ],
            correta:1
        },

        {
            pergunta:"You hear: 'The flight has been delayed.' What happened?",
            alternativas:[
                "The flight arrived early",
                "The flight was cancelled",
                "The flight was delayed",
                "The flight departed"
            ],
            correta:2
        }

    ],

    avancado: [

        {
            pergunta:"You hear: 'Despite the difficulties, the company managed to increase its profits.' What happened?",
            alternativas:[
                "Profits decreased",
                "The company closed",
                "Profits increased",
                "The company lost money"
            ],
            correta:2
        },

        {
            pergunta:"You hear: 'The project was postponed due to budget constraints.' Why was it postponed?",
            alternativas:[
                "Lack of time",
                "Budget problems",
                "Staff problems",
                "Technical problems"
            ],
            correta:1
        },

        {
            pergunta:"You hear: 'She was reluctant to accept the offer.' What does reluctant suggest?",
            alternativas:[
                "She was eager",
                "She was uncertain or unwilling",
                "She was excited",
                "She was prepared"
            ],
            correta:1
        },

        {
            pergunta:"You hear: 'The results were considerably better than expected.' How were the results?",
            alternativas:[
                "Much better",
                "Much worse",
                "Exactly the same",
                "Unclear"
            ],
            correta:0
        },

        {
            pergunta:"You hear: 'Had they known about the problem, they would have acted sooner.' What does this imply?",
            alternativas:[
                "They knew immediately",
                "They did not know about it",
                "They caused the problem",
                "They ignored the problem"
            ],
            correta:1
        }

    ]

},


/* =====================================================
   SPEAKING
===================================================== */

speaking: {

    basico: [

        {
            pergunta:"How would you introduce yourself?",
            alternativas:[
                "My name is Ana.",
                "Yesterday is blue.",
                "I am table.",
                "Good is house."
            ],
            correta:0
        },

        {
            pergunta:"Someone asks: 'How are you?' Choose an appropriate answer.",
            alternativas:[
                "I'm fine, thank you.",
                "My name is John.",
                "I live tomorrow.",
                "It's a chair."
            ],
            correta:0
        },

        {
            pergunta:"Someone asks: 'Where are you from?'",
            alternativas:[
                "I'm from Brazil.",
                "I'm twenty.",
                "I'm a student.",
                "I'm fine."
            ],
            correta:0
        },

        {
            pergunta:"Someone asks: 'What do you do?'",
            alternativas:[
                "I'm a student.",
                "I'm from Brazil.",
                "I'm fine.",
                "It's Monday."
            ],
            correta:0
        },

        {
            pergunta:"How can you politely ask for someone's name?",
            alternativas:[
                "What's your name?",
                "Where your name?",
                "You name what?",
                "Name you?"
            ],
            correta:0
        }

    ],

    intermediario: [

        {
            pergunta:"How would you give your opinion?",
            alternativas:[
                "In my opinion, this is a good idea.",
                "My opinion yesterday.",
                "I opinion good.",
                "This opinion is yesterday."
            ],
            correta:0
        },

        {
            pergunta:"How can you politely disagree?",
            alternativas:[
                "I see your point, but I disagree.",
                "You are wrong!",
                "No you!",
                "Wrong idea."
            ],
            correta:0
        },

        {
            pergunta:"How would you make a suggestion?",
            alternativas:[
                "Why don't we try again?",
                "We tried yesterday?",
                "Try why?",
                "Yesterday we."
            ],
            correta:0
        },

        {
            pergunta:"How would you ask someone to repeat?",
            alternativas:[
                "Could you say that again, please?",
                "Say again!",
                "You repeat?",
                "Again that."
            ],
            correta:0
        },

        {
            pergunta:"How would you express uncertainty?",
            alternativas:[
                "I'm not completely sure.",
                "I completely sure.",
                "Sure not completely.",
                "I know everything."
            ],
            correta:0
        }

    ],

    avancado: [

        {
            pergunta:"Which expression is appropriate in a formal discussion?",
            alternativas:[
                "I would argue that...",
                "That's totally crazy!",
                "No way!",
                "Whatever."
            ],
            correta:0
        },

        {
            pergunta:"How can you politely interrupt someone?",
            alternativas:[
                "Sorry to interrupt, but...",
                "Stop talking.",
                "Be quiet.",
                "Listen to me."
            ],
            correta:0
        },

        {
            pergunta:"How can you clarify your position?",
            alternativas:[
                "What I mean is...",
                "You know.",
                "Whatever.",
                "I don't know."
            ],
            correta:0
        },

        {
            pergunta:"How can you introduce a contrasting idea?",
            alternativas:[
                "On the other hand...",
                "Because yesterday...",
                "At the table...",
                "For example yesterday..."
            ],
            correta:0
        },

        {
            pergunta:"How can you conclude an argument?",
            alternativas:[
                "Taking everything into account...",
                "Anyway, whatever.",
                "That's it, maybe.",
                "I don't care."
            ],
            correta:0
        }

    ]

},


/* =====================================================
   READING
===================================================== */

reading: {

    basico: [

        {
            pergunta:"Read: 'Tom is 20 years old. He lives in London.' Where does Tom live?",
            alternativas:[
                "Paris",
                "London",
                "Madrid",
                "New York"
            ],
            correta:1
        },

        {
            pergunta:"Read: 'Mary likes apples and bananas.' What fruit does Mary like?",
            alternativas:[
                "Apples and bananas",
                "Oranges",
                "Grapes",
                "Pears"
            ],
            correta:0
        },

        {
            pergunta:"Read: 'John goes to school every morning.' Where does John go?",
            alternativas:[
                "Work",
                "School",
                "Home",
                "The park"
            ],
            correta:1
        },

        {
            pergunta:"Read: 'The dog is under the table.' Where is the dog?",
            alternativas:[
                "On the table",
                "Under the table",
                "Behind the house",
                "In the car"
            ],
            correta:1
        },

        {
            pergunta:"Read: 'Sarah has two brothers.' How many brothers does Sarah have?",
            alternativas:[
                "One",
                "Two",
                "Three",
                "Four"
            ],
            correta:1
        }

    ],

    intermediario: [

        {
            pergunta:"Read: 'James decided to study abroad because he wanted to experience a different culture.' Why did he study abroad?",
            alternativas:[
                "To find a job",
                "To experience a different culture",
                "To visit family",
                "To learn to drive"
            ],
            correta:1
        },

        {
            pergunta:"Read: 'The restaurant was crowded, so we decided to eat somewhere else.' Why did they leave?",
            alternativas:[
                "The food was expensive",
                "The restaurant was crowded",
                "They were tired",
                "It was closed"
            ],
            correta:1
        },

        {
            pergunta:"Read: 'Emma usually takes the bus, but today she walked to work.' How did Emma go to work today?",
            alternativas:[
                "By bus",
                "By car",
                "On foot",
                "By train"
            ],
            correta:2
        },

        {
            pergunta:"Read: 'Although it was raining, they continued playing.' What happened?",
            alternativas:[
                "They stopped",
                "They continued",
                "They went home",
                "They cancelled the game"
            ],
            correta:1
        },

        {
            pergunta:"Read: 'Peter saved money for six months before buying the computer.' What did Peter do first?",
            alternativas:[
                "Bought the computer",
                "Saved money",
                "Sold the computer",
                "Borrowed money"
            ],
            correta:1
        }

    ],

    avancado: [

        {
            pergunta:"Read: 'Despite facing considerable opposition, the proposal was eventually approved.' What happened?",
            alternativas:[
                "It was rejected",
                "It was approved",
                "It was cancelled",
                "It was forgotten"
            ],
            correta:1
        },

        {
            pergunta:"Read: 'The researcher acknowledged that further studies would be necessary.' What does this suggest?",
            alternativas:[
                "The research is complete",
                "More research is needed",
                "The study was cancelled",
                "No evidence exists"
            ],
            correta:1
        },

        {
            pergunta:"Read: 'The company experienced a significant decline in revenue.' What happened?",
            alternativas:[
                "Revenue increased",
                "Revenue decreased considerably",
                "Revenue remained unchanged",
                "Revenue disappeared"
            ],
            correta:1
        },

        {
            pergunta:"Read: 'The policy was implemented gradually to minimize potential disruption.' Why was it implemented gradually?",
            alternativas:[
                "To save money",
                "To reduce possible disruption",
                "To increase competition",
                "To delay the project"
            ],
            correta:1
        },

        {
            pergunta:"Read: 'The findings challenge several assumptions previously considered valid.' What do the findings do?",
            alternativas:[
                "Confirm all assumptions",
                "Question previous assumptions",
                "Ignore previous studies",
                "Repeat the same experiment"
            ],
            correta:1
        }

    ]

},


/* =====================================================
   WRITING
===================================================== */

writing: {

    basico: [

        {
            pergunta:"Choose the correct sentence.",
            alternativas:[
                "I am a student.",
                "I student am.",
                "Am student I.",
                "Student I am a."
            ],
            correta:0
        },

        {
            pergunta:"Choose the correct sentence.",
            alternativas:[
                "She likes music.",
                "She like music.",
                "She liking music.",
                "She music likes."
            ],
            correta:0
        },

        {
            pergunta:"Choose the correct sentence.",
            alternativas:[
                "They live in Brazil.",
                "They lives Brazil.",
                "They Brazil live.",
                "They living Brazil."
            ],
            correta:0
        },

        {
            pergunta:"Choose the correct sentence.",
            alternativas:[
                "I have a dog.",
                "I has a dog.",
                "I dog have.",
                "Have I dog."
            ],
            correta:0
        },

        {
            pergunta:"Choose the correct sentence.",
            alternativas:[
                "My favorite color is blue.",
                "My color favorite blue.",
                "Blue favorite my is.",
                "My is color blue."
            ],
            correta:0
        }

    ],

    intermediario: [

        {
            pergunta:"Choose the best sentence.",
            alternativas:[
                "I have been studying English for two years.",
                "I studying English two years.",
                "I have study English two years.",
                "I am study English."
            ],
            correta:0
        },

        {
            pergunta:"Choose the best sentence.",
            alternativas:[
                "If I have time, I will call you.",
                "If I will have time, I call you.",
                "If I time have, I calling.",
                "If time I have, I called."
            ],
            correta:0
        },

        {
            pergunta:"Choose the correct sentence.",
            alternativas:[
                "She has already finished her work.",
                "She already finish her work.",
                "She has finish already work.",
                "She finished has her work."
            ],
            correta:0
        },

        {
            pergunta:"Choose the correct sentence.",
            alternativas:[
                "I went to the store because I needed milk.",
                "I go store because milk.",
                "I went because store milk.",
                "I needed went store."
            ],
            correta:0
        },

        {
            pergunta:"Choose the best sentence.",
            alternativas:[
                "Although it was raining, we went outside.",
                "Although raining we outside.",
                "It raining although outside.",
                "Although we rain outside."
            ],
            correta:0
        }

    ],

    avancado: [

        {
            pergunta:"Choose the most appropriate formal sentence.",
            alternativas:[
                "I would appreciate your response at your earliest convenience.",
                "Answer me quickly.",
                "I want your answer now.",
                "Give me an answer."
            ],
            correta:0
        },

        {
            pergunta:"Choose the grammatically correct sentence.",
            alternativas:[
                "Had I known, I would have acted differently.",
                "Had I knew, I would act differently.",
                "If I had know, I acted.",
                "Had I know, I would acted."
            ],
            correta:0
        },

        {
            pergunta:"Choose the best academic sentence.",
            alternativas:[
                "The results indicate that further research is required.",
                "The results say research more.",
                "Results further research maybe.",
                "Research is results required."
            ],
            correta:0
        },

        {
            pergunta:"Choose the most natural sentence.",
            alternativas:[
                "It is worth considering the potential consequences.",
                "It worth consider potential.",
                "Worth it considering consequences.",
                "The consequences worth."
            ],
            correta:0
        },

        {
            pergunta:"Choose the best conclusion.",
            alternativas:[
                "Taking all these factors into account, the proposal appears to be the most suitable option.",
                "All factors, proposal good.",
                "These factors proposal.",
                "The proposal all."
            ],
            correta:0
        }

    ]

}

};


/* =========================================================
   VARIÁVEIS
========================================================= */

let categoriaSelecionada = "";

let nivelSelecionado = "";

let questaoAtual = 0;

let pontuacao = 0;

let respondeu = false;


/* =========================================================
   ELEMENTOS
========================================================= */

const categorias =
    document.getElementById("categoriasExercicios");

const selecaoNivel =
    document.getElementById("selecaoNivel");

const areaExercicio =
    document.getElementById("areaExercicio");

const resultadoExercicio =
    document.getElementById("resultadoExercicio");

const tituloCategoria =
    document.getElementById("tituloCategoria");

const categoriaAtual =
    document.getElementById("categoriaAtual");

const nivelAtual =
    document.getElementById("nivelAtual");

const pergunta =
    document.getElementById("pergunta");

const alternativas =
    document.getElementById("alternativas");

const questaoAtualElemento =
    document.getElementById("questaoAtual");

const totalQuestoes =
    document.getElementById("totalQuestoes");

const numeroQuestao =
    document.getElementById("numeroQuestao");

const progresso =
    document.getElementById("progresso");

const feedback =
    document.getElementById("feedback");

const botaoProxima =
    document.getElementById("botaoProxima");

const pontuacaoElemento =
    document.getElementById("pontuacao");

const pontuacaoTotal =
    document.getElementById("pontuacaoTotal");

const mensagemResultado =
    document.getElementById("mensagemResultado");


/* =========================================================
   SELECIONAR CATEGORIA
========================================================= */

document
    .querySelectorAll(".card-exercicio")
    .forEach(function(card){

        card.addEventListener("click", function(){

            categoriaSelecionada =
                card.dataset.categoria;

            tituloCategoria.textContent =
                card.querySelector("h2").textContent;

            categorias.style.display = "none";

            selecaoNivel.classList.add("ativo");

        });

    });


/* =========================================================
   SELECIONAR NÍVEL
========================================================= */

document
    .querySelectorAll(".card-nivel")
    .forEach(function(card){

        card.addEventListener("click", function(){

            nivelSelecionado =
                card.dataset.nivel;

            iniciarExercicio();

        });

    });


/* =========================================================
   INICIAR EXERCÍCIO
========================================================= */

function iniciarExercicio(){

    questaoAtual = 0;

    pontuacao = 0;

    respondeu = false;


    selecaoNivel.classList.remove("ativo");

    resultadoExercicio.classList.remove("ativo");

    areaExercicio.classList.add("ativo");


    categoriaAtual.textContent =
        tituloCategoria.textContent;


    if(nivelSelecionado === "basico"){

        nivelAtual.textContent =
            "Básico";

    }

    else if(nivelSelecionado === "intermediario"){

        nivelAtual.textContent =
            "Intermediário";

    }

    else{

        nivelAtual.textContent =
            "Avançado";

    }


    carregarQuestao();

}


/* =========================================================
   CARREGAR QUESTÃO
========================================================= */

function carregarQuestao(){

    const lista =
        exercicios[
            categoriaSelecionada
        ][
            nivelSelecionado
        ];


    const questao =
        lista[questaoAtual];


    respondeu = false;


    pergunta.textContent =
        questao.pergunta;


    numeroQuestao.textContent =
        `Questão ${questaoAtual + 1}`;


    questaoAtualElemento.textContent =
        questaoAtual + 1;


    totalQuestoes.textContent =
        lista.length;


    pontuacaoTotal.textContent =
        lista.length;


    progresso.style.width =
        `${((questaoAtual + 1) / lista.length) * 100}%`;


    alternativas.innerHTML = "";


    feedback.textContent = "";


    botaoProxima.textContent =
        questaoAtual === lista.length - 1
            ? "Finalizar"
            : "Próxima";


    questao.alternativas.forEach(
        function(texto, indice){

            const botao =
                document.createElement("button");

            botao.classList.add("alternativa");

            botao.textContent =
                texto;


            botao.addEventListener(
                "click",
                function(){

                    responder(
                        botao,
                        indice,
                        questao.correta
                    );

                }
            );


            alternativas.appendChild(botao);

        }
    );

}


/* =========================================================
   RESPONDER
========================================================= */

function responder(
    botao,
    indiceEscolhido,
    indiceCorreto
){

    if(respondeu){

        return;

    }


    respondeu = true;


    const botoes =
        document.querySelectorAll(".alternativa");


    botoes.forEach(function(item){

        item.disabled = true;

    });


    if(indiceEscolhido === indiceCorreto){

        botao.classList.add("correta");

        feedback.textContent =
            "✓ Resposta correta!";

        pontuacao++;

    }

    else{

        botao.classList.add("errada");

        botoes[
            indiceCorreto
        ].classList.add("correta");

        feedback.textContent =
            "✗ Resposta incorreta.";

    }

}


/* =========================================================
   PRÓXIMA QUESTÃO
========================================================= */

botaoProxima.addEventListener(
    "click",
    function(){

        if(!respondeu){

            feedback.textContent =
                "Escolha uma resposta antes de continuar.";

            return;

        }


        const lista =
            exercicios[
                categoriaSelecionada
            ][
                nivelSelecionado
            ];


        if(questaoAtual < lista.length - 1){

            questaoAtual++;

            carregarQuestao();

        }

        else{

            mostrarResultado();

        }

    }
);


/* =========================================================
   RESULTADO
========================================================= */

function mostrarResultado(){

    areaExercicio.classList.remove("ativo");

    resultadoExercicio.classList.add("ativo");


    pontuacaoElemento.textContent =
        pontuacao;


    pontuacaoTotal.textContent =
        exercicios[
            categoriaSelecionada
        ][
            nivelSelecionado
        ].length;


    const total =
        exercicios[
            categoriaSelecionada
        ][
            nivelSelecionado
        ].length;


    const porcentagem =
        (pontuacao / total) * 100;


    if(porcentagem === 100){

        mensagemResultado.textContent =
            "Excelente! Você acertou todas as questões!";

    }

    else if(porcentagem >= 70){

        mensagemResultado.textContent =
            "Muito bem! Você teve um ótimo resultado.";

    }

    else if(porcentagem >= 50){

        mensagemResultado.textContent =
            "Bom trabalho! Continue praticando.";

    }

    else{

        mensagemResultado.textContent =
            "Continue praticando. Você vai melhorar!";

    }

}


/* =========================================================
   VOLTAR PARA CATEGORIAS
========================================================= */

document
    .getElementById("voltarCategorias")
    .addEventListener("click", function(){

        selecaoNivel.classList.remove("ativo");

        categorias.style.display = "grid";

    });


/* =========================================================
   VOLTAR PARA NÍVEIS
========================================================= */

document
    .getElementById("voltarNivel")
    .addEventListener("click", function(){

        areaExercicio.classList.remove("ativo");

        selecaoNivel.classList.add("ativo");

    });


/* =========================================================
   TENTAR NOVAMENTE
========================================================= */

document
    .getElementById("tentarNovamente")
    .addEventListener("click", function(){

        iniciarExercicio();

    });


/* =========================================================
   VOLTAR AOS EXERCÍCIOS
========================================================= */

document
    .getElementById("voltarExercicios")
    .addEventListener("click", function(){

        resultadoExercicio.classList.remove("ativo");

        categorias.style.display = "grid";

    });