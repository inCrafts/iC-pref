var timer = 0;
autoSlider();
let line = document.getElementById('line');
let left = 0;

function autoSlider() {

    timer = setTimeout(function () {
        left = left - 170;
        if (left < -510) {
            left = 0;
            clearTimeout(timer);
        }
        line.style.left = left + 'px';
        autoSlider();
    }, 1000);
}

