// This is a JavaScript file
$(document).on('click','#cadastro',function(){
  var parametros = {
    "marca":$('#marca').val(),
    "modelo":$('#modelo').val(),
    "cor":$('#color').val(),
    "valor":$('#valor').val(),
    "ano":$('#ano').val()
  }

  if($('#marca').val() == "" || $('#modelo').val() == "" || $('#cor').val() == "" || $('#valor').val() == "" || $('#ano').val() == ""){
    navigator.notification.alert("Please fill in all fields !!!");
    window.location.reload();
  }

      var elem = document.getElementById("carrito");   
      var width = 0.5;
      var id = setInterval(frame, 0.5);
      function frame() {
        if (width >= 100) {
          elem.innerHTML = '<i class="fas fa-car-alt"></i>';
          clearInterval(id);
        } else {
          width+= 0.5; 
          elem.style.width = width + '%'; 
          elem.innerHTML = '<i class="fas fa-car-side x5"></i>';
        }
      }
      
  $.ajax({
    type:"post",
    url:"https://the-claudio-whitewolfinspace.c9users.io/cadastrar.php",
    data: parametros,
    success:function(data){
      $('#marca').val("");
      $('#modelo').val("");
      $('#color').val("");
      $('#valor').val("");
      $('#ano').val("");
      var id = setInterval(function() {
        navigator.notification.alert(data);
        window.location.reload();
      }, 700);
    },
    error:function(data){
      var id = setInterval(function() {
        navigator.notification.alert(data);
        window.location.reload();
      }, 700);
          
    }
  });
});

$(document).on('change','#color',function(){
  var cor = $('#color').val();
  $('#carro').css('color',cor);
  $('#carrito').css('color',cor);
});

