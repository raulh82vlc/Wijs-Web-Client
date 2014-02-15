function sendRequestToModel(city)
{
    $.get("/placesnearby/web/Office.php",
          {city: city},
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
        $searchBox = $('#searchBox');

    $searchBox.focus();

    $searchBox.on('keyup', function(e) {
        clearTimeout(timer);
        timer = setTimeout(function() {
            sendRequestToModel($searchBox.val());
        }, delayInMilliseconds);
    });
});