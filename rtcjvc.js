
const ttarEl = document.getElementById("txtar");
const tlcnEl = document.getElementById("ttlcnt");
const rmcnEl = document.getElementById("remcnt");

ttarEl.addEventListener("keyup", () => {
    console.log("Key is pressed..");
    updateCounter();
});
updateCounter();

function updateCounter() {
    tlcnEl.innerText = ttarEl.value.length;
    rmcnEl.innerText = ttarEl.getAttribute("maxlength") - ttarEl.value.length;
}
