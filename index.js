let count = 0
let saveEl = document.getElementById("save-el")
function increment() {
    count+=1
    document.getElementById("count-el").innerText = count;
}

function save() {
    let entry = " " + count + " - "
    saveEl.innerText += entry
}
