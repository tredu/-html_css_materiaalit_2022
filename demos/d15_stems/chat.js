
document.getElementById('send').addEventListener("click", myFunction1);
function myFunction1() {
    alert('No one cares!')
}
document.getElementById('exit').addEventListener("click", myFunction2);
function myFunction2() {
    alert('Meeting is too important to exit now!')
}
const names = ['Astrid', 'Blenda', 'Cecilia', 'Eva', 'Freja']

var intervalId = window.setInterval(function(){
    change_speaker()
    var today = new Date();
    var mins = today.getMinutes()
    if(mins < 10){mins = `0${mins}`}
    var time = today.getHours() + ":" + mins;
    let elems = document.querySelector('#chat .messages')
    let content = elems.innerHTML
    const random_num = Math.floor(Math.random() * names.length);
    content += `<div><span>${names[random_num]}</span>${generateWords()}<span>${time}</span></div>`
    const element = document.querySelector('#chat .messages')
    element.innerHTML = content
    element.scrollTop = element.scrollHeight;
    if(elems.children.length > 50){clearInterval(intervalId)}
}, 5000);

// prog.world/creating-our-own-lorem-ipsum-generator-in-javascript/
const words = [
"got", "ability", "shop", "recall", "fruit", "easy", "dirty", "giant", "shaking", "ground", "weather", "lesson", "almost", "square", "forward", "bend", "cold", "broken", "distant", "adjective"
]
function change_speaker(){
    const avatars = document.querySelectorAll('figure img')
    avatars.forEach(elem =>{
        elem.setAttribute('class', '')
    })
    avatars[randomNumber(0, avatars.length - 1)].setAttribute('class', 'active_speaker')
}
function getRandomWord(firstLetterToUppercase = false) {
    const word = words[randomNumber(0, words.length - 1)];
    return firstLetterToUppercase ? word.charAt(0).toUpperCase() + word.slice(1) : word;
}
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function generateWords(length = 10) {
    return [...Array(length)].map((_, i) => getRandomWord(i === 0)).join(' ').trim() + '.';
}
