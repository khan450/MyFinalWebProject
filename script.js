document.getElementById('animateButton').addEventListener('click', function () {
    var button = document.getElementById('animateButton');
    button.style.position = 'relative';
    var position = 0;
    var interval = setInterval(frame, 10);

    function frame() {
        if (position == 350) {
            clearInterval(interval);
        } else {
            position++;
            button.style.left = position + 'px';
        }
    }
});
