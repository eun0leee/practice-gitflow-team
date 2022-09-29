const numberInput = document.querySelector("input");1
const box = document.querySelector(".box");

const handleToggle = () => {
    if (box.classList.contains("toggle")){
        box.classList.remove("toggle");
    } else {
        box.classList.add("toggle");
    } 
}


const handleInput = () => {
    let val = numberInput.value;

    if(!box.classList.contains("toggle")){
        box.classList.add("toggle"); 
    }

    box.innerText(`${val} 명`);
}
