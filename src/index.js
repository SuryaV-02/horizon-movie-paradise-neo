import*as bootstrap from'bootstrap';

function NavigateAsFresh(){   
    window.location.replace('your link');
   return false;
}

function test(){
    alert();
}


window.onload = function() {
    var anchors = document.getElementsByClassName('container-for-click d-inline-flex');
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function() {
            alert('ho ho ho');
        }
    }
}

function openPage(id){
    window.open('./movie_details.html')
}

$("#input-query-field").keypress(function(event){
    if(event.which == 13){
        event.preventDefault();
        $("#form-query").submit();
    }
});