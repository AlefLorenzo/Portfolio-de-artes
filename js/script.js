// Seleciona o botão do menu e os links da navbar
const menuButton = document.querySelector('.menu-button');
const navbarLinks = document.getElementById('navbar-links');

// Alterna a visibilidade do menu lateral em telas pequenas
menuButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('translate-x-full'); // Adiciona ou remove a classe para o movimento
});

// Adiciona rolagem suave para os links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Fecha o menu automaticamente após clicar em um link em telas pequenas
        if (window.innerWidth < 768) {
            navbarLinks.classList.add('translate-x-full');
        }
    });
});
function openModal(artId) {
        const modal = document.getElementById("modal");
        const title = document.getElementById("modal-title");
        const description = document.getElementById("modal-description");

        // Configurar os detalhes do modal com base na arte clicada
        if (artId === 1) {
            title.textContent = " Kasuga Deer Mandala";
            description.textContent = "O mandala simboliza a harmonia entre o mundo natural e o espiritual, com os cervos representando mensageiros sagrados dos deuses. Esses cervos, que habitam a área ao redor do santuário, são reverenciados e vistos como símbolos de pureza e proteção divina O mandala é uma representação visual do cosmos, com o objetivo de meditar sobre a conexão entre o humano, a natureza e o divino. Ele reflete os princípios da interconexão e da energia espiritual presente na natureza, além de ser um meio para os devotos focarem suas orações e meditações. A arte é uma fusão de design natural e religioso, expressando a reverência à natureza e a espiritualidade.";
        } else if (artId === 2) {
            title.textContent = "Shiva como Senhor da Dança (Nataraja)";
            description.textContent = "Shiva como Nataraja,o Senhor da Dança, é uma das representações mais poderosas de Shiva, simbolizando a dança cósmica que rege a criação, preservação e destruição do universo. Ele é retratado dançando dentro de um círculo de fogo, que representa o ciclo eterno do universo.Na imagem, Shiva tem quatro braços, cada um segurando objetos simbólicos: um tambor  (representando a criação), o fogo (destruição e regeneração), e fazendo gestos que oferecem proteção e indicam libertação. Sua perna levantada, que pisa sobre o demônio Apasmara, simboliza a superação da ignorância A dança de Shiva reflete a natureza cíclica do cosmos e é vista como um símbolo de transformação, destruição do ego e busca pela iluminação, ou moksha. Em essência, Nataraja representa o ritmo cósmico da existência, onde a criação e destruição são interdependentes..";
        } else if (artId === 3) {
            title.textContent = "Indigence and Honor (1804)";
            description.textContent = "e Jean-Baptiste Ingres é uma pintura neoclássica que retrata dois conceitos contrastantes: indigência (pobreza extrema) e honra (dignidade e status social). A obra mostra um homem pobre, em sofrimento, representando a marginalização social, enquanto uma figura nobre mantém uma postura digna, simbolizando os valores da aristocracia O contraste entre as duas figuras reflete as desigualdades sociais da época e questiona como a honra e a dignidade eram associadas à classe social. Ingres utiliza sua técnica meticulosa para destacar esse conflito moral e social, fazendo uma crítica às divisões de classe e ao valor da honra além da riqueza.";
        }

        // Exibir o modal
        modal.classList.remove("hidden");
    }

    // Função para fechar o modal
    function closeModal() {
        const modal = document.getElementById("modal");
        modal.classList.add("hidden");
    }

    // Fechar o modal quando clicar fora da caixa
    window.onclick = function(event) {
        const modal = document.getElementById("modal");
        if (event.target === modal) {
            closeModal();
        }
    }