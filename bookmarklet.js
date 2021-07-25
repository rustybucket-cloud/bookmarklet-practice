(function() {
    const images = document.querySelectorAll('img');
    images.forEach( image => {
        image.src = 'https://agitated-bassi-83ae31.netlify.app/mr-bird.jpeg';
    });
    const h1 = document.querySelectorAll('h1');
    h1.forEach( header => {
        header.textContent = 'Mr Bird';
    });
    const h2 = document.querySelectorAll('h2');
    h2.forEach( text => {
        text.textContent = 'Mr Bird';
    });
    const h3 = document.querySelectorAll('h3');
    h3.forEach( text => {
        text.textContent = 'Mr Bird';
    });
    const li = document.querySelectorAll('li');
    li.forEach( text => {
        text.textContent = 'Mr Bird';
    });
    const a = document.querySelectorAll('a');
    a.forEach( text => {
        text.textContent = 'Mr Bird';
    });
    const p = document.querySelectorAll('p');
    p.forEach( para => {
        para.innerHTML = 'Mr Bird';
    });
})()