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
	
$("audio").each(function() {
    this.pauseOthers = function(event) {
        $('audio').addClass('stopaudio');
        $(this).removeClass('stopaudio');
        $('.stopaudio').each(function() {
            this.pause();
        });
    };
    this.addEventListener("play", this.pauseOthers.bind(this), false);
});
});
