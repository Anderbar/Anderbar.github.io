document.addEventListener('DOMContentLoaded', (event) => {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const image = document.getElementById('image');

    noButton.addEventListener('click', () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const randomTop = Math.floor(Math.random() * 100) + 1;
        const randomLeft = Math.floor(Math.random() * 100) + 1;

        noButton.style.position = 'absolute';
        noButton.style.top = `${randomTop}%`;
        noButton.style.left = `${randomLeft}%`;
    });

    yesButton.addEventListener('click', () => {
        yesButton.style.visibility = 'hidden';
        noButton.style.visibility = 'hidden'; 
        text1.textContent = 'Congratulations!';
        text2.textContent = 'There was only 1 right answer.. and you found it! :)'; 
        image.src = 'assets/images/valentines-i-love-you.gif';
    });
});