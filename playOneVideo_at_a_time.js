// JavaScript Document

$(function() {
$("audio, video").each(function() {
    this.pauseOthers = function(event) {
        $('audio, video').addClass('stopaudio, stopvideo');
        $(this).removeClass('stopaudio, stopvideo');
        $('.stopaudio, .stopvideo').each(function() {
            this.pause();
        });
    };
    this.addEventListener("play", this.pauseOthers.bind(this), false);
	

});
});
