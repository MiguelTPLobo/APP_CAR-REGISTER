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
      navigator.notification.alert(data);
      window.location.reload();
    },
    error:function(data){
      navigator.notification.alert(data);
      window.location.reload();
    }
  });
});

$(document).on('change','#color',function(){
  var cor = $('#color').val();
  $('#carro').css('color',cor);
});
