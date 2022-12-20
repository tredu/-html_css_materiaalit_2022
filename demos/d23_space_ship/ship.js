// move space ship with keyboard
const legit_keys = ['w', 'a', 's', 'd']
let prev_key = 'd'
const moveDirection = (key) => {
    const space_elem = document.getElementsByTagName('body')[0] 
    const ship_elem = document.getElementById('ship') 

    if(key == prev_key){
        return
    }
    
    if(legit_keys.includes(key)){
        space_elem.setAttribute('style', `animation-name: move_${key};`)
        
        prev_key = key
    }
    if(key == 'w'){ship_elem.setAttribute('style', `transform: rotate(0deg)`)}
    if(key == 'a'){ship_elem.setAttribute('style', `transform: rotate(-90deg)`)}
    if(key == 's'){ship_elem.setAttribute('style', `transform: rotate(180deg)`)}
    if(key == 'd'){ship_elem.setAttribute('style', `transform: rotate(90deg)`)}

    if(key == '1'){
        document.documentElement.style.setProperty('--tile_scale', '1');
        document.documentElement.style.setProperty('--bg_size', '600px');
    }
    if(key == '2'){
        document.documentElement.style.setProperty('--tile_scale', '0.5');
        document.documentElement.style.setProperty('--bg_size', '300px');
    }
    if(key == '3'){
        document.documentElement.style.setProperty('--tile_scale', '0.25');
        document.documentElement.style.setProperty('--bg_size', '150px');
    }
}

const init = () => {
   addEvent(document, "keypress", function (e) {
    e = e || window.event;
    moveDirection(e.key)
}); 
}

// https://stackoverflow.com/questions/16089421/how-do-i-detect-keypresses-in-javascript
function addEvent(element, eventName, callback) {
    if (element.addEventListener) {
        element.addEventListener(eventName, callback, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, callback);
    } else {
        element["on" + eventName] = callback;
    }
}
