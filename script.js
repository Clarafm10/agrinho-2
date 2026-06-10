// Função para adicionar interatividade aos pilares do Agro Sustentável
function mostrarDetalhe(tipo) {
    const painel = document.getElementById('painel-detalhes');
    
    let texto = "";

    switch(tipo) {
        case 'tecnologia':
            texto = "<strong>Tecnologia e Inovação:</strong> Uso de drones, sensores IoT e tratores autônomos para aplicar água e fertilizantes na quantidade exata, evitando desperdícios.";
            break;
        case 'sistemas':
            texto = "<strong>Sistemas Integrados:</strong> Integração Lavoura-Pecuária-Floresta (ILPF) que otimiza o uso da terra, recupera pastagens degradadas e fixa carbono no solo.";
            break;
        case 'economia':
            texto = "<strong>Economia Circular:</strong> Transformação de dejetos animais e restos de cultura em biofertilizantes e biogás, gerando energia limpa para a própria fazenda.";
            break;
        default:
            texto = "<em>Clique em uma das estratégias acima para saber mais!</em>";
    }

    // Altera o conteúdo interno do painel com um efeito visual simples
    painel.innerHTML = texto;
    painel.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    
    // Reseta o fundo depois de um tempinho para dar efeito de clique
    setTimeout(() => {
        painel.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
    }, 300);
}