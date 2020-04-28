function Scrade() {
  let triggerPoint = window.innerHeight * 0.5;
  let elements = document.getElementsByClassName('scrade');
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    let elementTop = element.getBoundingClientRect().top;
    let elementBottom = element.getBoundingClientRect().bottom;

    if(elementTop < triggerPoint || elementBottom < window.innerHeight) {
      element.classList.add('scrade-go');
    }
  }
}

window.addEventListener('load', Scrade);
window.addEventListener('scroll', Scrade);
window.addEventListener('resize', Scrade);