const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const certificates = document.querySelector('.four-section-certificates');
const configBtn = document.querySelector('.config-icon');

arrowRight.addEventListener('click', () => {
    certificates.scrollLeft += 400});

arrowLeft.addEventListener('click', () =>{
    certificates.scrollLeft -= 400;
});
// configBtn.addEventListener('click', () =>{
//     variables = true
// });


