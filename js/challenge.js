let counterD = document.querySelector('#counter')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let likeBtn = document.querySelector('#heart')
let pause = document.querySelector('#pause')
let listLikes = document.querySelector('.likes')
let form = document.querySelector('#comment-form')
//let comment = document.querySelector('#comment').value
//console.log (counter, minus, plus, likeBtn, pause, listLikes)



let counter = 0
function counting (){
    counter = ++counter
    counterD.textContent = counter
    //console.log(counter)
}

let interval = setInterval(counting, 1000)


likeBtn.addEventListener('click', ()=> {
    let likesNum = 0
    likesNum = ++likesNum
    let li = document.createElement('li')
    listLikes.append(li)
    li.textContent = `${counter} has been liked once`
    
})

//coming back to this!
// let resumeBtn = document.createElement('button')
// resumeBtn.id = 'resume'
// resumeBtn.textContent = 'resume'
// pause.append(resumeBtn)

// function pauseIt (){
//         clearInterval(interval)
//         //pause.textContent = 'resume'
//         pause.disabled = true
//         likeBtn.disabled = true
//         minus.disabled = true
//         pause.disabled = true
        
// }
// function resume (){
//         setInterval(counting, 1000)
//         //pause.textContent = 'pause'
//         likeBtn.disabled = false
//         minus.disabled = false
//         plus.disabled = false
//         pause.disabled = false 
    
//}

// {document.getElementById("p2").style.display="none";}
// to show

// {document.getElementById("p2").style.display="block";}

function pauseAndPlay (){
    if (pause.textContent === ' pause '){
        clearInterval(interval)
        pause.textContent = ' resume '
        likeBtn.disabled = true
        minus.disabled = true
        plus.disabled = true
    } else if (pause.textContent === ' resume '){
        interval = setInterval(counting, 1000)
        pause.textContent = ' pause '
        likeBtn.disabled = false
        minus.disabled = false
        plus.disabled = false
    } 
}

pause.addEventListener('click', pauseAndPlay)


minus.addEventListener('click', () => {
    counter--
    counterD.textContent = counter
})

plus.addEventListener('click', () => {
    counter++
    counterD.textContent = counter
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let comment = document.querySelector('#comment-input').value
    let newComment = document.createElement('p')
    let commentList = document.getElementById('list')
    commentList.append(newComment)
    newComment.textContent = comment
    form.reset()
})


// Make a request to this url -> https://rickandmortyapi.com/api/character
// display each of the characters:
// name in an h2
// have an ul with an li for each episode


// let newSection = document.querySelector('#test')
// let ul = document.createElement('ul')
// ul.id = 'listCharacters'
// newSection.append(ul)

// fetch ('https://rickandmortyapi.com/api/character')
//     .then( resp => resp.json())
//     .then (data => {
//         renderCharacter(data.results)
//         console.log(data.results)
//     })

// function renderCharacter(data){
//     data.forEach(item => {
//         let h2 = document.createElement('h2')
//         newSection.append(h2)
//         h2.textContent = item.name
//         let li = document.createElement('li')
//         ul.append(li)
//         li.textContent = item.gender
//     })
// }






