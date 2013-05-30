$(document).ready(function(){
  $('#get_color').on('click', function (e){
    e.preventDefault();
  $.ajax({
    type: "POST",
    url: "/color",
    dataType: "json"
    }).done( function(data){
      var color = data.color;
      var cell = data.cell;
      $("#color_me li:eq(" + cell + ")").css('background-color', color);
    });
  });

});
