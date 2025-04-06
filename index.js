const container = document.querySelector("#container")
const reset = document.querySelector("#reset")

for (let i = 0; i<16*16; i++){
    const cell = document.createElement("div");
    cell.classList.add("cell")
    container.appendChild(cell);
    cell.addEventListener("pointerenter", () => cell.style.backgroundColor = "rgb("+Math.random()*255+ ","+ Math.random()*255+","+Math.random()*255+")")
};

const cells = document.querySelectorAll(".cell")

reset.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'red'
    })});