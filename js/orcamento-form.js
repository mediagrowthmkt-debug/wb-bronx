// Formulário de Orçamento
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('orcamentoForm');
    
    if (!form) return;
    
    // Máscara de telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            
            if (value.length > 6) {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
            } else if (value.length > 2) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else if (value.length > 0) {
                value = `(${value}`;
            }
            
            e.target.value = value;
        });
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Verifica se aceitou os termos
        const aceitaTermos = document.getElementById('aceita-termos');
        if (!aceitaTermos.checked) {
            alert('Por favor, aceite os termos para continuar.');
            return;
        }
        
        // Coleta os dados do formulário
        const formData = {
            // Dados de contato
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            empresa: document.getElementById('empresa').value,
            cargo: document.getElementById('cargo').value,
            
            // Informações do projeto
            tipoProjeto: document.getElementById('tipo-projeto').value,
            localizacao: document.getElementById('localizacao').value,
            areaEstimada: document.getElementById('area-estimada').value,
            prazoDesejado: document.getElementById('prazo-desejado').value,
            investimentoEstimado: document.getElementById('investimento-estimado').value,
            possuiTerreno: document.getElementById('possui-terreno').value,
            
            // Detalhes
            descricaoProjeto: document.getElementById('descricao-projeto').value,
            precisaProjeto: document.getElementById('precisa-projeto').checked,
            precisaLicenciamento: document.getElementById('precisa-licenciamento').checked,
            modeloChaveMao: document.getElementById('modelo-chave-mao').checked,
            
            // Preferências de contato
            contatoPreferido: document.querySelector('input[name="contato-preferido"]:checked')?.value,
            melhorHorario: document.getElementById('melhor-horario').value
        };
        
        // Aqui você pode adicionar a lógica para enviar os dados
        console.log('Dados do orçamento:', formData);
        
        // Mensagem formatada para WhatsApp
        let whatsappMsg = `*SOLICITAÇÃO DE ORÇAMENTO*\n\n`;
        whatsappMsg += `*Nome:* ${formData.nome}\n`;
        whatsappMsg += `*Email:* ${formData.email}\n`;
        whatsappMsg += `*Telefone:* ${formData.telefone}\n`;
        if (formData.empresa) whatsappMsg += `*Empresa:* ${formData.empresa}\n`;
        whatsappMsg += `\n*PROJETO*\n`;
        whatsappMsg += `*Tipo:* ${formData.tipoProjeto}\n`;
        whatsappMsg += `*Localização:* ${formData.localizacao}\n`;
        whatsappMsg += `*Área:* ${formData.areaEstimada}m²\n`;
        if (formData.descricaoProjeto) whatsappMsg += `\n*Descrição:*\n${formData.descricaoProjeto}`;
        
        // Redireciona direto para o WhatsApp do Lucas
        const whatsappURL = `https://wa.me/5548999385954?text=${encodeURIComponent(whatsappMsg)}`;
        window.open(whatsappURL, '_blank');
        
        form.reset();
    });
});
