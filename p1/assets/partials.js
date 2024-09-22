function loadComponent(component, id) {
    fetch(component).then(response => response.text()).then(data => { document.getElementById(id).innerHTML = data; });
}

window.onload = function () {
    loadComponent('./partials/navbar.html', 'navbar');
    loadComponent('./partials/footer.html', 'footer');
};