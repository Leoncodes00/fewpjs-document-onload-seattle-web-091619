// Your code goes here
document.addEventListener('DOMContentLoaded', () => {
    changeText();
})

function changeText(){
    let text = document.getElementById('text');
    text.textContent = "This is really cool!";
}