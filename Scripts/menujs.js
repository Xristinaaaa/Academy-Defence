$(document).ready(function() {
    $(".namedcolors").mouseenter(function() {
        $(this).css({
            'background-color': 'red',
            'animation': 'namedcolors 0.3s infinite alternate'
        });
    });
    $(".namedcolors").mouseleave(function() {
        $(this).css({ 'background-color': 'grey', 'animation': 'namedcolors 0.3s 0 alternate' });
    });
    $("#start-button").click(function() {
        window.location.assign("../Index.html");
    });
});