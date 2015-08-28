// JavaScript source code
function sleep(d) {
    for (var t = Date.now() ; Date.now() - t <= d;);
}
function fadeout(ele) {
    var stepLength = 1 / 50;
    if (!parseFloat(ele.style.opacity)) {
        ele.style.opacity = 1;
    }
    function step() {
        if (parseFloat(ele.style.opacity) - stepLength > 0) {
            ele.style.opacity = parseFloat(ele.style.opacity) - stepLength;
        } else {
            ele.style.opacity = 0;
            ele.style.display = 'none';
            clearInterval(setIntervalId);
        }
    }
    var setIntervalId = setInterval(step, 10);
}
function fadein(ele)
{
    ele.style.display = 'inline-block';
    var stepLength = 1 / 100;
    if (!parseFloat(ele.style.opacity)) {
        ele.style.opacity = 0;
    }
    function step() {
        if (parseFloat(ele.style.opacity) + stepLength < 1) {
            ele.style.opacity = parseFloat(ele.style.opacity) + stepLength;
        } else {
            ele.style.opacity = 1;
            clearInterval(setIntervalId);
        }
    }
    var setIntervalId = setInterval(step, 5);
}