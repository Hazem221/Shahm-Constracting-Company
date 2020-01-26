var slider = $('.slider').bxSlider();

$('p.pager-prev').click(function () {
    var current = slider.getCurrentSlide();
    slider.goToPrevSlide(current) - 1;
});
$('p.pager-next').click(function () {
    var current = slider.getCurrentSlide();
    slider.goToNextSlide(current) + 1;
});
