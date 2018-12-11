var nameanimation = bodymovin.loadAnimation({
    container: document.getElementById('name'),
    render: 'svg',
    loop:false,
    autoplay: true,
    path: 'data.json'
    ,
});

$(document).ready(function(){
    $(".btn").append('<span></span><span></span>');
});



$(document).on("scroll", function(){
    if
  ($(document).scrollTop() > 86){
      $("#banner").addClass("shrink");
    }
    else
    {
        $("#banner").removeClass("shrink");
    }
});


