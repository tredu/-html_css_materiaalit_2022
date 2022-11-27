// Advent Calendar

const getDoorContent = (day, imgFileExtension) => {
    return `<img src="img/day${day}.${imgFileExtension}" alt="door-${day}">`
}

const openDoor = (event) => {
    let td_elem = null
    if (event.target.tagName.toLowerCase() === 'td'){
        td_elem = event.target
    }
    else if (event.target.parentElement.tagName.toLowerCase() === 'td'){
        td_elem = event.target.parentElement
    }
    else{
        return
    }
    let openDay = parseInt(td_elem.getAttribute('id').replace('day',''))
    td_elem.innerHTML = getDoorContent(openDay, imgFileExtension)
    td_elem.classList.add('open')
} 

const openDoorsUntil = (openDay, imgFileExtension) => {
    for (let x = 1; x < openDay; x++){
        const td_elem = document.getElementById(`day${x}`)
        td_elem.innerHTML = getDoorContent(x, imgFileExtension)
        td_elem.classList.add('open')
    }
}

const initAdventCalendar = (is_random, doors, day, month, imgFileExtension) => {

    const cells = document.querySelectorAll('td')

    if (is_random){
        const doors = Array.from({length: 25}, (_, i) => i + 1)
        const shuffled = doors.sort(() => .5 - Math.random() );
        cells.forEach((elem, index)=>{
            elem.innerHTML = `<p class="date_num">${shuffled[index]}</p>`;
            elem.setAttribute('id', `day${shuffled[index]}`);
            elem.addEventListener("click", openDoor); 
        })    
    }

    else{
        cells.forEach((elem, index)=>{
            elem.innerHTML = `<p class="date_num">${doors[index]}</p>`;
            elem.setAttribute('id', `day${doors[index]}`);
            elem.addEventListener("click", openDoor); 
        })
    }

    // get current day if not set
    const d = new Date();
    if (!month){
        month = d.getMonth() + 1;
    }
    if (!day){
        day = (month < 12) ? 0 : d.getDate();
    }
    if(month && month < 12){
        day = 0
    }

    for (let x = day + 1; x < 25 + 1; x++) {
        const elem = document.getElementById(`day${x}`)
        elem.classList.add('locked')
        elem.innerHTML += '<i class="fa fa-lock lock_icon" aria-hidden="true"></i>'
    }

    // open all doors before this day
    const headings = document.getElementsByTagName('h1')
    headings[0].addEventListener('click',  function() { openDoorsUntil(day, imgFileExtension); } )

}
