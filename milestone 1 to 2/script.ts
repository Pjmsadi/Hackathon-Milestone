const btn = document.getElementById('toggle-skills') as HTMLButtonElement
const skl = document.getElementById('skills') as HTMLElement

btn.addEventListener('click', ()=> {

    if(skl.style.display === 'none'){
        skl.style.display = 'block'
    }
    else{
        skl.style.display ='none'
    }

});