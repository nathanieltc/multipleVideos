// JavaScript Document

$(function() {
$("video").each(function() {
    this.pauseOthers = function(event) {
        $('video').addClass('stopvideo');
        $(this).removeClass('stopvideo');
        $('.stopvideo').each(function() {
            this.pause();
        });
    };
    this.addEventListener("play", this.pauseOthers.bind(this), false);
});
});