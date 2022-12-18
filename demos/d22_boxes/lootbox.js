// choose box type names
const boxTypes = ['golden', 'silver', 'bronze']

// set possible contents of each box
const lootItems = {}
lootItems[boxTypes[0]] =  [ "star.png", "spruce.png", "snowflake.png", "reindeer.png", "ginger.png", "candy.png", "ball.png" ]
lootItems[boxTypes[1]] =  [ "snowflake.png", "reindeer.png", "ginger.png", "candy.png", "ball.png" ]
lootItems[boxTypes[2]] =  [ "ginger.png", "candy.png", "ball.png" ]

// biased contents will be automatically generated
var lootItemsBiased = {};

// call this once in html to initialize loot boxes
const init = () => {

    // generate biased array of loot items
    // e.g. ['a', 'b', 'b', 'c', 'd', 'd', 'd', 'd', 'd', 'd']
    boxTypes.forEach(item => {
        lootItemsBiased[item] = []
        lootItems[item].forEach((elem, idx) => {
            for(let i = -1; i < idx; i++){
                lootItemsBiased[item].push(elem)
                console.log(elem)
            }
        })
    })
}

const setBoxOpen = (box) => {
    const box_elem = document.getElementById(box).getElementsByClassName('lootbox')[0]
    
    let imgName = box_elem.getAttribute('src')
    let openImgName = ''
    let names = imgName.split('.')
    openImgName = names[0] + '_open.' + names[1]
    box_elem.setAttribute('src', openImgName)
    return
}

// call this when 'Open' button clicked
const openLootBox = (type) => {

    // check if box type is defined
    if(!boxTypes.includes(type)){
        console.log(`Box type ${type} not found`)
        return
    }

    setBoxOpen(type)

    // shuffle biased array and return first item
    const item = lootItemsBiased[type].sort((a, b) => 0.5 - Math.random())[0]
    
    // set item image 
    const item_elem = document.getElementById(type).getElementsByClassName('lootitem')[0]
    item_elem.setAttribute('src', `img/items/${item}`)
    item_elem.classList.add('slide_in')

    // set open button diabled
    const button_elem = document.getElementById(type).getElementsByTagName('button')[0]
    button_elem.disabled = true; 
}
