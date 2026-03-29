// Filtro de Projetos
document.addEventListener('DOMContentLoaded', () => {

    // Gera thumbnail real do vídeo e exibe como capa antes do play
    document.querySelectorAll('.projeto-video').forEach(video => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        video.addEventListener('loadedmetadata', () => {
            video.currentTime = 1.5; // pula para 1.5s pra evitar frames pretos
        });

        video.addEventListener('seeked', function onSeeked() {
            canvas.width  = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            video.poster = canvas.toDataURL('image/jpeg', 0.85);
            video.removeEventListener('seeked', onSeeked);
        });

        video.preload = 'metadata';
        video.load();
    });

    // Play button nos cards de vídeo
    document.querySelectorAll('.projeto-play-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const video = btn.closest('.projeto-video-container').querySelector('.projeto-video');
            btn.classList.add('oculto');
            video.currentTime = 0;
            video.controls = true;
            video.play();
        });
    });

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
