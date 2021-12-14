import*as bootstrap from'bootstrap';
$("#input-query-field").keypress(function(event){
    if(event.which == 13){
        event.preventDefault();
        $("#form-query").submit();
    }
});

function NavigateAsFresh(){   
    window.location.replace('your link');
   return false;
}

function test(){
    alert();
}