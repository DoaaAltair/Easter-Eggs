
document.addEventListener('DOMContentLoaded', () => {
    const enorm = document.getElementById('enorm-logo');
    const fightclubHond = document.getElementById('fightclub-hond');
    const fightclub = document.getElementById('fightclub-logo');
    const boxingGlove = document.getElementById('boxing-glove');
    const punchSound = document.getElementById('punch-sound');
    const cheerSound = document.getElementById('cheer-sound');

    let flyInterval;

    fightclubHond.addEventListener('click', () => {
        enorm.classList.remove('hidden');

        const maxHeight = window.innerHeight - enorm.offsetHeight;
        const maxWidth = window.innerWidth - enorm.offsetWidth;
        enorm.style.top = Math.random() * maxHeight + 'px';
        enorm.style.left = Math.random() * maxWidth + 'px';

        flyInterval = setInterval(() => {
            const maxHeight = window.innerHeight - enorm.offsetHeight;
            const maxWidth = window.innerWidth - enorm.offsetWidth;
            enorm.style.top = Math.random() * maxHeight + 'px';
            enorm.style.left = Math.random() * maxWidth + 'px';
        }, 3000);

        enorm.addEventListener('mouseover', () => {
            clearInterval(flyInterval);
        });
    });

    enorm.addEventListener('click', () => {
        clearInterval(flyInterval);
        const logoRect = enorm.getBoundingClientRect();
        const logoLeft = logoRect.left;
        const logoTop = logoRect.top;

        boxingGlove.classList.remove('hidden');
        boxingGlove.style.left = (logoLeft - 100) + 'px';
        boxingGlove.style.top = logoTop + 'px';

        setTimeout(() => {
            boxingGlove.style.left = logoLeft + 'px';
            boxingGlove.style.transform = 'rotate(25deg)';
            punchSound.play();
        }, 10);

        setTimeout(() => {
            enorm.classList.add('hidden');
            boxingGlove.classList.add('hidden');
            fightclub.classList.remove('hidden');
            fightclub.style.left = logoLeft + 'px';
            fightclub.style.top = (logoTop + 50) + 'px';
            fightclub.classList.add('falling');

            confetti({
                particleCount: 200,
                spread: 90,
                origin: { x: logoLeft / window.innerWidth, y: logoTop / window.innerHeight },
                colors: ['#ff0000', '#fff', '#000', 'ddd']
            });

            cheerSound.play();
            setTimeout(() => {
                fightclub.classList.add('hidden');
                cheerSound.pause();
            }, 4000);
        }, 300);
    });
});