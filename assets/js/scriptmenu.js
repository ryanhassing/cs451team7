// $( document ).ready(function() {

//     var WebSocket = require('ws');
//     global.something = "value";

//     var ipInput = ""

//     $(document).on("click", "#forfeit",function(){
//         $("#modal-screen").css("display", "flex")
//         console.log("hey")
//     })
//     $(document).on("click", ".leave", function(){
//         Board.resetBoard(boardConfig);
//         $("#modal-screen").css("display", "none")
//     })
//     $(document).on("click", "#restart-game", function(){
//         Board.resetBoard(boardConfig);
//     })

//         $(document).on("click", "#playtemp", function(){

//             var ipInput = "";

//             $("#mainmenuscreen > #modal-screen").css("display", "none")
//            ipInput = $("#fname").val();

//             console.log("this is IPinput:" + ipInput);

//             var url = 'ws://' + ipInput + ':4567/checkers';
//             const connection = new WebSocket(url);

//             // connection opened
//             connection.addEventListener('open', function(event) {
//                 connection.send('Connected.');
//             });

//             // log message
//             connection.addEventListener('message', function(event) {
//                 console.log('Message: ', event.data);
//             });

//         })

//     $("#fname").on('keyup', function() {
//         console.log("sdsdsdsdsd")
//         let val = 0
//         if($("#fname").val().length == 0  ){
//             $("#playtemp").prop("disabled", true);
//         }
//         else{
//             $("#playtemp").prop("disabled", false);
//         }

//     });

//     $(document).on("click", "#cancel-join",function(){
//         $("#mainmenuscreen > #modal-screen").css("display", "none")
//     })
//     $(document).on("click", "#join", function(){

//         $("#mainmenuscreen > #modal-screen").css("display", "flex")
//         console.log("hello")
//     })

// });
