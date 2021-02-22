const coloums = document.querySelectorAll('.coloum');

coloums.forEach(function (coloum) {

    coloum.addEventListener('click', function (e) {
        if (e.target.className === 'coloum') {
            e.target.style.backgroundColor = 'yellow';
        } else {
            e.target.parentElement.style.backgroundColor = 'yellow';
        };
    });
});