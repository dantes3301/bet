export function menuToggle () {
    const selectHeader = document.querySelector('.header__select-head')

    selectHeader.onclick = ()=>{
        selectHeader.parentElement.classList.toggle('active')
    }

    const filtherSelectHead = document.querySelectorAll('.select-head')
    filtherSelectHead.forEach(elem =>{
        
        elem.addEventListener('click', ()=>{
            for(let i = 0; i < filtherSelectHead.length; i++){
                filtherSelectHead[i].parentElement.classList.remove('active')
            }
            // elem.parentElement.classList.toggle('active')
            if(elem.parentElement.classList.contains('active')){
                elem.parentElement.classList.remove('active')
            }
            else{
                elem.parentElement.classList.add('active')
            }
        })
    })
    // add tags 
    const checkboxs = document.querySelectorAll('.checkbox')
    checkboxs.forEach(elem =>{
        elem.addEventListener('click', ()=>{
            if(elem.checked === true){
                for(let i = 0; i < filtherSelectHead.length; i++){
                    filtherSelectHead[i].parentElement.classList.remove('active')
                }
                
                document.querySelector('.casino-tags').innerHTML += `<div class="casino-tag">
                <p>${elem.parentElement.querySelector('label').textContent}</p>
                <svg class="close-tag" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                    <path d="M5.17148 10.8281L10.8283 5.17127" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.8285 10.8287L5.1716 5.17188" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>
                    
            </div>`
            // remove tags

    const btnCloseTags = document.querySelectorAll('.close-tag')
    btnCloseTags.forEach(elem => {
        elem.addEventListener('click', () => {
            
            elem.parentElement.remove()
        })
    })
            }
        })
    })
    
    const btnsMoreInfo = document.querySelectorAll('.card-head-more')
    btnsMoreInfo.forEach(elem =>{
        elem.addEventListener('click', ()=>{
            elem.parentElement.parentElement.classList.toggle('active')
        })
    })
}

