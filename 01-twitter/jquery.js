
// var str = "Hello World!";
// var n = str.length;






$('#insertfield').on('focus', function () {
    $('#insertfield').val('');
    
    $('#insertfield').on('keyup', function () {

        var input = $("#insertfield").val();
        var inputLengte = input.length;
        console.log('de input is: ' + input);
        console.log('de lengte is: ' + inputLengte);

        console.log('toets omhoog');
        if (inputLengte >= 2) {
            console.log('groter');
        } else {
            console.log('kleinre');
        }
    });
});


// $("submit").val(function (i, val) {
//     return value(140)
// });
