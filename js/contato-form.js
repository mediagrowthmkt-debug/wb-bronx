// Formulário de Contato
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contatoForm');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Coleta os dados do formulário
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            assunto: document.getElementById('assunto').value,
            mensagem: document.getElementById('mensagem').value
        };
        
        // Monta mensagem para o WhatsApp
        let msg = `Olá, vim pelo site da Bronx Engenharia.\n\n`;
        msg += `*Nome:* ${formData.nome}\n`;
        msg += `*E-mail:* ${formData.email}\n`;
        msg += `*Telefone:* ${formData.telefone}\n`;
        if (formData.assunto) msg += `*Assunto:* ${formData.assunto}\n`;
        if (formData.mensagem) msg += `\n*Mensagem:*\n${formData.mensagem}`;
        
        form.reset();
        
        // Redireciona para o WhatsApp do Lucas
        const whatsappURL = `https://wa.me/5548999385954?text=${encodeURIComponent(msg)}`;
        window.open(whatsappURL, '_blank');
    });
});
