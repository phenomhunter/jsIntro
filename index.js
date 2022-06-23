let count = 0
let saveEl = document.getElementById("save-el")
let mario = document.getElementById("mario")
let ans = true;
function increment() {
    if(ans == true){ 
        count+=1
        document.getElementById("count-el").innerText = count;
        mario.src = "coinGif.gif"
        ans = false
        setTimeout(tmo, 1000)
    }

}

function save() {
    let entry = " " + count + " - "
    saveEl.innerText += entry
    count = 0
    document.getElementById("count-el").innerText = count
    mario.src = "MarioGif.gif"
}

function tmo() {
    ans = true
    mario.src = "MarioGif.gif"
}
