$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var blanks = [$("input#item1").val(), $("input#item2").val(), $("input#item3").val(), $("input#item4").val()];

   blanks.sort();
   var uppered = blanks.map(function(blank){
     return blank.toUpperCase();
   });
   
   var names =["item1", "item2", "item3", "item4"];

   for(var i=0; i<names.length; i++){
     $("." + names[i]).text(uppered[i]);
   }

   $("#final-list").show();
   $("#blanks").hide();

   event.preventDefault();
 });
});
