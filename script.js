// 1. Alternância de Tema Claro / Escuro
const btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Atualiza o texto do botão conforme o estado
    if (document.body.classList.contains('dark-mode')) {
        btnTema.textContent = 'Modo Claro';
    } else {
        btnTema.textContent = 'Modo Escuro';
    }
});

// 2. Validação e Simulação de Envio do Formulário de Contato
const formContato = document.getElementById('form-contato');
const msgStatus = document.getElementById('msg-status');

formContato.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação de e-mail usando expressão regular (Regex)
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !email || !mensagem) {
        msgStatus.style.color = 'red';
        msgStatus.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    if (!emailValido.test(email)) {
        msgStatus.style.color = 'red';
        msgStatus.textContent = 'Por favor, insira um e-mail válido.';
        return;
    }

    // Sucesso e Simulação do Envio
    msgStatus.style.color = 'green';
    msgStatus.textContent = 'Mensagem enviada com sucesso!';
    
    // Limpa os campos do formulário
    formContato.reset();
});