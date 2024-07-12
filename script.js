document.addEventListener('DOMContentLoaded', function () {
    var toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var links = this.nextElementSibling;
            if (links.style.display === 'block') {
                links.style.display = 'none';
            } else {
                links.style.display = 'block';
            }
        });
    });
});
