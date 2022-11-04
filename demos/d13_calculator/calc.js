let ans = 0
let isAns = true

const appendSreen = (data) => {
    let screen = document.getElementById('screen')
    screen.innerHTML += data
}
const updateSreen = (data) => {
    document.getElementById('screen').innerHTML = data
}
const evaluate = (equation) => {
    eq = equation.replaceAll('ans', ans)
    let answer = ''
    if (equation.includes('x')){
        answer = math.simplify(eq).toString().replaceAll(' ','')
    }
    else{
        console.log(math.evaluate(eq).toString())
        answer = math.evaluate(eq).toString().replaceAll(' ','')
    }
        
    updateSreen(answer)
    return answer
}
const erase = () => {
    let screen = document.getElementById('screen')
    screen.innerHTML = screen.innerHTML.slice(0, -1);
}
const findKeyAction = (loc) => {
    const keymap = [
        ['(', ')', 'ans', 'x'],
        ['--', '^', 'sqrt(', '+'],
        ['7','8','9','-'],
        ['4','5','6', '*'],
        ['1','2','3', '/'],
        ['C', '0', '.', '='],
    ]
    let key = keymap[loc[1]][loc[0]]
    
    if(isAns){
        updateSreen('')
        isAns = false
    }
    if( key == 'C'){
        updateSreen('') 
        return
    }
    if (key == 'ans'){
        appendSreen('ans')
        return
    }
    if(key =='--'){
        erase()
        return
    }
    if (key == '='){
        try {
            ans = evaluate(document.getElementById('screen').innerHTML)
        }
        catch (error) {
            document.getElementById('screen').innerHTML = 'err'
        }
        isAns = true
        return
    }

    appendSreen(key)

    isAns = false
    return
}
const keyPush = (e) => {
    if (document.getElementById('screen').innerHTML == 'err'){
        updateSreen('') 
    }
    findKeyAction([ e.target.cellIndex, e.target.parentNode.rowIndex])
} 
const init = () => {
    const keys = Array.from(document.querySelectorAll('table tr td'))
    keys.forEach(element => {
        element.addEventListener("click", keyPush); 
    });
}
