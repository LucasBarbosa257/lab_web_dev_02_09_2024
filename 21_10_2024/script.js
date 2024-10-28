let text_area = document.getElementById("text-area");

function updateCounter() {
    document.getElementById("counter").innerText = text_area.value.length;
}

document.addEventListener("DOMContentLoaded", () => {
    text_area.value = text_area.value.trim();
    updateCounter();
});
