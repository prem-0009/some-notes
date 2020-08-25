const notesBtn = document.querySelector('.notes-btn');
const notesBody = document.querySelector('.notes-body')

// const myCloseB = document.querySelector('.my-close');
// const myNotesB = document.querySelector('.my-notes-body');


const myContainer = document.querySelector('.my-container');


const arr = [];



notesBtn.addEventListener('click', function(){
    
    if ( !notesBody.value){
        alert ('write sumthin');
        return;
    }

    //create my-notes
    const createMyNotes = document.createElement('div');
    myContainer.appendChild(createMyNotes)
    
    //add class
    createMyNotes.classList.add('my-notes')
    
    
    //create my-close
    const createCloseBtn = document.createElement('button');
    createCloseBtn.innerText = 'X'
    createCloseBtn.classList.add('my-close')
    createMyNotes.append(createCloseBtn)
    //create my-notes-body
    const createBody = document.createElement('p')
    createBody.contentEditable = true                   //update

    createBody.innerHTML = notesBody.value;             //create &  read
    
    createBody.classList.add('my-notes-body')
    createMyNotes.append(createBody)

    //delete
    // const btnClose = document.querySelector('.my-close')
    createCloseBtn.addEventListener('click', function(){
        myContainer.removeChild(createMyNotes)
    })
    


    
    notesBody.value = '';

    const hi = document.querySelectorAll('.my-notes-body')
    

    console.log(hi)
})


