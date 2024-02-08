const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si ....                                                                   Mi perspectiva sobre la perfección, es muy alta, pero aun asi, llegas tu y lo cubres con esa sonrisa y “Me dejas sin palabras”, yo no creo que el querer sea tan solo pasajero, de hecho, puede ser eterno o quedarse en el Rosio de un amanecer, pero aun asi… quiza no te dare el tiempo que mereces, pero dame ese cachito de tiempo que te sobra para hacer de tus labios, zigzagueantes curvas con un brillo escarlata.  Quiza es necesario estar a cinco centímetros para perder distancias y ganar confianza o arriesgarse, asi explicarte porque me dejas sin palabras, pero a veces estar a cinco centímetros de tu sonrisa solo sea un sueño. "the girl with red cheeks"')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})