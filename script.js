// Estrutura de dados otimizada (Múltipla escolha em vez de Verdadeiro/Falso)
const questoes = [
    {
        pergunta: "Qual dessas tecnologias reduz drasticamente o uso excessivo de agrotóxicos?",
        alternativas: [
            "Drones e sensores de mapeamento seletivo",
            "Tratores convencionais mais velozes",
            "Sistemas de irrigação por inundação",
            "Aumento manual da colheita"
        ],
        correta: 0,
        motivo: "Drones identificam os focos exatos de pragas, aplicando insumos apenas onde é necessário."
    },
    {
        pergunta: "O que é o sistema de Plantio Direto e por que ele é sustentável?",
        alternativas: [
            "Queimar o solo antes de plantar para limpar a área",
            "Plantar diretamente sobre os resíduos da colheita anterior, protegendo o solo",
            "Retirar toda a cobertura vegetal para expor a terra ao sol",
            "Cultivar apenas plantas aquáticas"
        ],
        correta: 1,
        motivo: "Esse método evita a erosão, mantém a umidade da terra e conserva os nutrientes naturais do solo."
    }
];

let indiceAtual = 0;

const campoPergunta = document.getElementById("quiz-question");
const containerOpcoes = document.getElementById("quiz-options");
const campoFeedback = document.getElementById("quiz-feedback");

function iniciarEtapa() {
    // Limpa estados anteriores
    containerOpcoes.innerHTML = "";
    campoFeedback.innerText = "";

    if (indiceAtual < questoes.length) {
        let dadosItem = questoes[indiceAtual];
        campoPergunta.innerText = dadosItem.pergunta;

        // Renderiza botões dinamicamente no DOM
        dadosItem.alternativas.forEach((opcao, indice) => {
            const botao = document.createElement("button");
            botao.classList.add("quiz-btn");
            botao.innerText = `${indice + 1}. ${opcao}`;
            botao.addEventListener("click", () => validarEscolha(indice));
            containerOpcoes.appendChild(botao);
        });
    } else {
        campoPergunta.innerText = "Parabéns! Você completou a jornada ecológica.";
        campoFeedback.innerText = "Você está pronto para aplicar o equilíbrio sustentável no futuro do nosso Agro!";
    }
}

function validarEscolha(indiceSelecionado) {
    let itemCorrente = questoes[indiceAtual];
    
    // Desabilita os botões para evitar cliques repetidos durante a transição
    const botoes = containerOpcoes.querySelectorAll("button");
    botoes.forEach(b => b.disabled = true);

    if (indiceSelecionado === itemCorrente.correta) {
        campoFeedback.style.color = "#52b788";
        campoFeedback.innerText = "Excelente! " + itemCorrente.motivo;
    } else {
        campoFeedback.style.color = "#ff9f1c";
        campoFeedback.innerText = "Não foi dessa vez. O correto seria: " + itemCorrente.motivo;
    }

    // Avança para a próxima pergunta após 4 segundos para dar tempo de ler o feedback
    indiceAtual++;
    setTimeout(iniciarEtapa, 4000);
}

// Inicialização imediata
iniciarEtapa();