$('#contact-form').submit(function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();

    // Verifica se todos os campos foram preenchidos
    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Se tudo estiver correto, mostra a mensagem de sucesso
        $('#success-message').removeClass('hidden');
        $('#contact-form')[0].reset(); // Limpa o formulário após o envio
        setTimeout(function() {
            $('#success-message').addClass('hidden'); // Esconde a mensagem após 5 segundos
        }, 5000);
    }
});

// Função para rolagem suave ao clicar nos links de navegação
$('a[href^="#"]').click(function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    
    $('#menu').addClass('hidden');
    
    let target = $(this.hash); // Seleciona o destino do link

    // Desliza suavemente para o destino
    $('html, body').animate({
        scrollTop: target.offset().top
    }, 1000);
});

// Função para alternar o menu no modo mobile
$('#menu-toggle').click(function() {
    $('#menu').toggleClass('hidden');
});

$('[data-character]').click(function() {
    let character = $(this).data('character');

    let content = '';
    // Definir o conteúdo para cada personagem
    if (character === 'eren') {
        content = `
            <h3 class="text-3xl font-bold text-yellow-400 mb-4">Eren Yeager</h3>
            <img src="./assets/eren.jpg" alt="Eren Yeager" class="w-48 h-auto self-center mb-4">
            <p class="text-lg mb-4">Eren Yeager é o protagonista da série, conhecido por sua determinação em destruir todos os Titãs.</p>
            <p class="text-lg">Papel no anime: Eren é um dos membros da 104ª Unidade de Cadetes e posteriormente um membro chave da Tropa de Exploração.</p>
            <p class="text-lg">Poderes: Possui a habilidade de se transformar no Titã de Ataque.</p>
            <button onclick="closeModal()" class="bg-yellow-400 text-gray-800 px-6 py-2 rounded hover:bg-yellow-300 mt-6">Voltar à Galeria</button>
        `;
    } else if (character === 'mikasa') {
        content = `
            <h3 class="text-3xl font-bold text-yellow-400 mb-4">Mikasa Ackerman</h3>
            <img src="./assets/mikasa.webp" alt="Mikasa Ackerman" class="w-96 h-auto self-center mb-4">
            <p class="text-lg mb-4">Mikasa Ackerman é a amiga de infância de Eren e uma das guerreiras mais habilidosas.</p>
            <p class="text-lg">Papel no anime: Mikasa é uma das personagens principais ao longo da série.</p>
            <p class="text-lg">Poderes: Não possui poderes.</p>
            <button onclick="closeModal()" class="bg-yellow-400 text-gray-800 px-6 py-2 rounded hover:bg-yellow-300 mt-6">Voltar à Galeria</button>
        `;
    } else if (character === 'armin') {
        content = `
            <h3 class="text-3xl font-bold text-yellow-400 mb-4">Armin Arlert</h3>
            <img src="./assets/armin.jpg" alt="Armin Arlert" class="w-96 h-auto self-center mb-4">
            <p class="text-lg mb-4">Armin Arlert é um dos melhores amigos de Eren e Mikasa.</p>
            <p class="text-lg">Papel no anime: Armin é fundamental nas estratégias do Reconhecimento.</p>
            <p class="text-lg">Poderes: Se torna o Titã Colossal na terceira temporada.</p>
            <button onclick="closeModal()" class="bg-yellow-400 text-gray-800 px-6 py-2 rounded hover:bg-yellow-300 mt-6">Voltar à Galeria</button>
        `;
    }

    // Inserir o conteúdo no modal e mostrar
    $('#modal-content').html(content);
    $('#modal').removeClass('hidden');
});

function closeModal() {
    $('#modal').addClass('hidden');
}