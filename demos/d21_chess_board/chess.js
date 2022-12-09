// w3schools: HTML Drag and Drop API

function allowDrop(ev) {
   ev.preventDefault();
}

function drag(ev) {
   ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
   ev.preventDefault();

   const data = ev.dataTransfer.getData("text");
   const moving_id = parseInt(data.replace('drag', ''));
   let target_id = ev.target.getAttribute('id')

   if (target_id.includes('square')){
      // landed on empty square
      ev.target.innerHTML = ''
      ev.target.appendChild(document.getElementById(data));
      return;
   }

   target_id = parseInt(target_id.replace('drag', ''));

   if (target_id > 15 && moving_id > 15){
      // cancel move if landed on own
      return
   }
   else if (target_id <= 15 && moving_id <= 15){
      // cancel move if landed on own
      return
   }
   // landed on opponent
   console.log(ev.target)
   ev.target.innerHTML = ''
   ev.target.parentNode.innerHTML = ''
   ev.currentTarget.appendChild(document.getElementById(data));

}

// chess setup
function init(){
    const pieces = document.querySelectorAll('span');
    pieces.forEach((element, index)=> {
        element.setAttribute('id', `drag${index}`)
        element.setAttribute('draggable', "true")
        element.setAttribute('ondragstart', "drag(event)")
    });

    const squares = document.querySelectorAll('table td');
    squares.forEach((element, index)=> {
        element.setAttribute('id', `square${index}`)
        element.setAttribute('ondrop', "drop(event)")
        element.setAttribute('ondragover', "allowDrop(event)")
    });
}
