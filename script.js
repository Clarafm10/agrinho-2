// Banco de perguntas (Pergunta, resposta correta em booleano, explicação)
const quizData = [
    {
        question: "A tecnologia no campo, como o uso de drones, ajuda a economizar água na irrigação?",
        answer: true,
        explanation: "Correto! Os drones e sensores detectam as áreas exatas que precisam de água, evitando o desperdício."
    },
    {
        question: "Para produzir mais alimentos, é sempre obrigatório desmatar novas florestas?",
        answer: false,
        explanation: "Exato! Com tecnologia e técnicas como a rotação de culturas, podemos aumentar a produção reaproveitando terras já abertas."
    },
    {
        question: "A rotação de culturas ajuda a manter os nutrientes do solo saudáveis?",
        answer: true,
        explanation: "Muito bem! Alternar as plantas cultivadas evita o esgotamento do solo e diminui pragas."
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const questionBox = document.getElementById("question-box");
const resultBox = document.getElementById("result-box");
const resultMessage = document.getElementById("result-message");

function loadQuestion() {
    if (currentQuestionIndex < quizData.length) {
        questionElement.innerText = quizData[currentQuestionIndex].question;
    } else {
        showResults();
    }
}

function checkAnswer(userAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    
    if (userAnswer === correctAnswer) {
        score++;
        alert("Acertou! " + quizData[currentQuestionIndex].explanation);
    } else {
        alert("Errado... " + quizData[currentQuestionIndex].explanation);
    }
    
    currentQuestionIndex++;
    loadQuestion();
}

function showResults() {
    questionBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    resultMessage.innerText = `Você completou o desafio! Acertou ${score} de ${quizData.length} perguntas.`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultBox.classList.add("hidden");
    questionBox.classList.remove("hidden");
    loadQuestion();
}

// Inicializa o quiz na primeira execução
window.onload = loadQuestion;