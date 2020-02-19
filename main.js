var lgh = $('.lightning li').length;

$('.lightning li').each(function(i) {
    $(this).css({
        left: i * (100/lgh) = '%',
        bottom: randomNum(-20, 10) + '%',
        animationDuration: randomNum(1,5) + 's'
    });r
});

function randomNum(max, min) {
    var num = Math.floor(Math.random() * (max-min + 1) + min);
    return num;
}
