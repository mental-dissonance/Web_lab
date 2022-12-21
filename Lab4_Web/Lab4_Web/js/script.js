$(document).ready(function(){
    $("nav").on("click","#anchor", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

function sort() {
    let Elements = document.getElementsByClassName('item');
    for ( let i = 0; i < Elements.length; i++){
        for ( let j = 0; j < Elements.length - i - 1; j++){
            let FirstDigit = parseFloat(Elements[j].children[2].innerHTML.match(/\d+/)); 
            let SecondDigit = parseFloat(Elements[j + 1].children[2].innerHTML.match(/\d+/));
            if (FirstDigit > SecondDigit){
                Elements[j].before(Elements[j + 1]);
            }
        }
    }
}