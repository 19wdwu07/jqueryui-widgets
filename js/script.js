console.log('working');
$('#progressbar').hide();

//menu
$( function() {
    $( "#menu" ).menu();
  } );


// autocomplete search
$( function() {
    var availableTags = [
     "Ice Cream", "Pine Apple Souffle","Chocolate Pudding"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );


// accordion
$( function() {
    $( "#accordion" ).accordion();
  } );


//selectable
$('#selectable').selectable();



  //spinner
  $( function() {
      var spinner = $( "#spinner" ).spinner();
  });



//progress bar

$('button').click(function(){
	$('#progressbar').show();
$( function() {
    $( "#progressbar" ).progressbar({
      value: 37
    });
  } );

// Progressbar animation type 1
// $(function() {
//     var pGress = setInterval(function() {
//         var pVal = $('#progressbar').progressbar('option', 'value');
//         var pCnt = !isNaN(pVal) ? (pVal + 1) : 1;
//         if (pCnt > 100) {
//             clearInterval(pGress);
//         } else {
//             $('#progressbar').progressbar({value: pCnt});
//         }
//     },10);
// });

// Progressbar animation type 2
$(function() {
    $('#progressbar').progressbar(); // inizializa progressbar widget
    $pVal = $('.ui-progressbar-value').addClass('ui-corner-right');
    var pGress = setInterval(function() { //generate our endless loop
        var pCnt = $pVal.width(); // get width as int
        // generate a random number between our max 100 and it's half 50,
        // this is optional, and make the bar move back and forth before
        // we reach the end.
        var rDom = Math.floor(Math.random() * (100 - 50 + 1) + 50);
        var step = rDom >= 100 ? 100: rDom; // reached our max ? reset step.
        doAnim(step);
    },1000);
    var doAnim = function(wD) {
        // complete easing list http://jqueryui.com/demos/effect/easing.html
        $pVal.stop(true).animate({width: wD + '%'},1000, 'easeOutBounce');
        if (wD >= 100) clearInterval(pGress) /* run callbacks here */
    }
});
});




// color animation
// $( function() {
//     var state = true;
//     $( "#button" ).on( "click", function() {
//       if ( state ) {
//         $( "#effect" ).animate({
//           backgroundColor: "#aa0000",
//           color: "#fff",
//           width: 500
//         }, 1000 );
//       } else {
//         $( "#effect" ).animate({
//           backgroundColor: "#fff",
//           color: "#000",
//           width: 240
//         }, 1000 );
//       }
//       state = !state;
//     });
//   } );
