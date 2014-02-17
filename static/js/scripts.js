<!-- Raul Hernandez Lopez 2014 -->
function sendRequestToModel(city, is_open_in_weekends, has_support_desk)
{
    $.get("/../../placesnearby/web/search",
          {city: city, is_open_in_weekends: is_open_in_weekends , has_support_desk: has_support_desk},
          requestHandler,
          'json'
    );
}

function requestHandler(response){
    console.log('Location response');
    
    console.log(response['city']);
    console.log(response['street']);
    console.log(response['timestamp']);
    console.log(response['random']);
}

$(document).ready(function() {
    var timer,
        delayInMilliseconds = 1000,
        $searchName = $('#searchName');
        $searchIsOpen = $('#searchIsOpen');
        $searchHasSupport = $('#searchHasSupport');
   
    $searchIsOpen.on('change', function(){
       this.value = this.checked ? "Y" : "N";
    }).change();
    $searchHasSupport.on('change', function(){
       this.value = this.checked ? "Y" : "N";
    }).change();

    $searchName.focus();

    $searchName.on('keyup', function(e) {
        clearTimeout(timer);
        timer = setTimeout(function() {
            sendRequestToModel($searchName.val(), $searchIsOpen.val(), $searchHasSupport.val());
        }, delayInMilliseconds);
    });
});