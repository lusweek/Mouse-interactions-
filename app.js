window.addEventListener("load", () => {
    const container = document.querySelector(".container")

    for (let i = 1; i <= 6 ;i++) {
        container.innerHTML += ` <article id="box-${i}" class="container-object object"> </article>`
        }
    
})


// ------------------------- Boxes ------------------------- // 

// Single click
function boxFunk() {
    const box = document.querySelector("#box-1")

    box.innerHTML="<h1>Click me</h1>";

    let boolian = false
    box.addEventListener("click", () => {
                // boolina turns true if false and false if true
        boolian = !boolian
        boolian ? box.style.backgroundColor="black" : box.style.backgroundColor="white";
})
}

// Dubble click
function boxTwoFunk() {
    const box = document.querySelector("#box-2")
    box.innerHTML="<h1>Dubble click me</h1>";

    let boolian = false
    box.addEventListener("dblclick", () => {
        boolian = !boolian
        boolian ? box.style.backgroundColor="black" : box.style.backgroundColor="white";
})
}

// Hover with mouse in and mouseout 
function boxThreeFunk() {
    const box = document.querySelector("#box-3")
    box.innerHTML="<h1>Hover me</h1>";

    box.addEventListener("mousemove", () => {
        box.style.backgroundColor="black";
})
box.addEventListener("mouseout", () => {
    box.style.backgroundColor="white";
})
}

// mousedown and mouseup
function boxFourFunk() {
    const box = document.querySelector("#box-4")
    box.innerHTML="<h1>click me slow</h1>";

    let boolian = false
    box.addEventListener("mousedown", () => {
        box.style.backgroundColor="blue";
})
box.addEventListener("mouseup", () => {
    boolian = !boolian
    boolian ? box.style.backgroundColor="black" : box.style.backgroundColor="white";
})
}

// rightclick, called contextmenu
function boxFiveFunk() {
    const box = document.querySelector("#box-5")
    box.innerHTML="<h1>Right click me</h1>";

    let boolian = false
    box.addEventListener("contextmenu", () => {
        boolian = !boolian
        boolian ? box.style.backgroundColor="black" : box.style.backgroundColor="white";
})
}


/* 
shiftKey: Shift
altKey: Alt (or Opt for Mac)
ctrlKey: Ctrl
metaKey: Cmd for Mac
*/
// add event as an argument and then set up if to add wich kew to press down. add && or || to the if, if wanted.
function boxsixFunk() {
    const box = document.querySelector("#box-6")
    box.innerHTML="<h1>Shift click me</h1>";

    let boolian = false
    box.addEventListener("click", (event) => {
        if (event.shiftKey) {
            boolian = !boolian
            boolian ? box.style.backgroundColor="black" : box.style.backgroundColor="white";
        }
})
}


window.addEventListener("load", () => {
    boxFunk();
    boxTwoFunk();
    boxThreeFunk();
    boxFourFunk(); 
    boxFiveFunk();
    boxsixFunk();
});
