// Filtro de Projetos
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filtro-btn');
    const projectCards = document.querySelectorAll('.projeto-card-completo');
    
    if (filterButtons.length === 0 || projectCards.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Atualiza botões ativos
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filtra projetos
            projectCards.forEach(card => {
                if (filter === 'todos') {
                    card.style.display = 'block';
                } else {
                    const categoria = card.getAttribute('data-categoria');
                    if (categoria === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});
