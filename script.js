const input = document.querySelector('input')
const buttons = document.querySelectorAll('button')
let arr = Array.from(buttons)
arr.forEach((item,index) => {
    // console.log(item,index);  
    item.addEventListener('click',(e) =>{
        if(e.target.innerHTML === "AC"){
            // e.preventDefault()
            input.value = "100"
            console.log(e.target.innerHTML);
            
        }
    })
})