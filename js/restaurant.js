google.maps.event.addDomListener(window, 'load', init); 
var map;
var market;
function init(){ 
  var mapOption = { 
    center: new google.maps.LatLng(-12.0981589,-77.036525), 
    zoom: 15, mapTypeId:google.maps.MapTypeId.ROADMAP 
  }; 
    map = new google.maps.Map(document.getElementById('map'),mapOption);
    var place = new google.maps.LatLng(-12.0981589,-77.036525);
  }
  
$(document).ready(function () {
  $('#selectSuccess2').on('change',function(){
    var valor = $(this).val();
    $('#container').html('');
    if (valor === 'comida mexicana') {
     $('#box').remove(); 
     $('#container').append('<div class="col-xs-4" data-toggle="modal" data-target="#exampleModal"> + <img class= "img-responsive img" id="enchiladas" + src="../assets/img/enchiladas.jpg">')
     .append('<div class="col-xs-4" data-toggle="modal" data-target="#exampleModal"> + <img class= "img-responsive img" + src="../assets/img/guacamole.jpg">')
     .append('<div class="col-xs-4" data-toggle="modal" data-target="#exampleModal"> + <img class= "img-responsive img" + src="../assets/img/pozole.jpg">');
    } 
    else if (valor === 'comida peruana'){
      $('#box').remove();
      $('#container').append('<div class="col-xs-4" data-toggle="modal" data-target="#exampleModal"> + <img class= "img-responsive img" + src="../assets/img/rocoto.jpg">')
      .append('<div class="col-xs-4" data-toggle="modal" data-target="#exampleModal"> + <img class= "img-responsive img" + src="../assets/img/menestron.jpg">')
      .append('<div class="col-xs-4" data-toggle="modal" data-target="#exampleModal"> + <img class= "img-responsive img" + src="../assets/img/huancaina.jpg">');
    }
    else if (valor === 'comida japonesa'){
      $('#box').remove();
      $('#container').append('<div class="col-xs-4" data-toggle="modal" data-target="#exampleModal"> + <img class= "img-responsive img" + src="../assets/img/yakitori.jpg">')
      .append('<div class="col-xs-4" data-toggle="modal" data-target="#exampleModal"> + <img class= "img-responsive img" + src="../assets/img/takoyakis.jpg">')
      .append('<div class="col-xs-4" data-toggle="modal" data-target="#exampleModal"> + <img class= "img-responsive img" + src="../assets/img/sushi.jpg">');
    }
    else {
      return $('option','#inicio');
    }
  });

  // $('#enchiladas').on('click', function() {
  //   if($(this).attr('src') === 'assets/img/enchiladas.jpg') {
  //     $('#myModal').show();
  //   }
  // });

  
}); 

