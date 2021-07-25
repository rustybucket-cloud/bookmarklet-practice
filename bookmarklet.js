(function() {
    const images = document.querySelectorAll('img');
    images.forEach( image => {
        image.src = 'https://agitated-bassi-83ae31.netlify.app/mr-bird.jpeg';
    });
    const h1 = document.querySelectorAll('h1');
    h1.forEach( header => {
        header.textContent = 'Mr Bird';
    });
    const p = document.querySelectorAll('p');
    p.forEach( para => {
        para.innerHTML = 'Mr Bird';
    });
})()