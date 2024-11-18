function updateClock() {
    let now = new Date();
    
    document.getElementById('clock').textContent = `
        ${String(now.getHours()).padStart(2, '0')}:
        ${String(now.getMinutes()).padStart(2, '0')}:
        ${String(now.getSeconds()).padStart(2, '0')}
    `;
}

updateClock();
setInterval(updateClock, 1000);
