function getYear(){
   return new Date().getFullYear()
}

$(document).ready(function(){

    $('a[href="#"],a[href=""] ').click(function(e){
      e.preventDefault()
    })


    $('.link-dropdown').on('mouseenter',()=>{
        $('.sublist').first().addClass('sublist-active');
    })
    // ano atual no footer
    $(".year").text(getYear());


    $(".hamburguer-menu").click(function(){ 
        $('.nav-2').addClass('nav-2-active');
    })
    $(".close-menu").click(function(){
        $('.nav-2').removeClass('nav-2-active');
    })


    $('.link-dropdown2 ').on('mouseenter',()=>{
        $('.list-item2:nth-child(2) .sublist').addClass('sublist-active');

    })
    $('.link-dropdown2').on('mouseleave',()=>{
        $('.list-item2:nth-child(2) .sublist').mouseenter(function(){
            if($(this)) $(this).addClass('sublist-active');
        })
        $('.list-item2:nth-child(2) .sublist').mouseleave(function(){
            if($(this)) $(this).removeClass('sublist-active');
        })
        $('.list-item2:nth-child(2) .sublist').removeClass('sublist-active');
    })


    $('.link-dropdown').on('mouseleave',()=>{
        $('.sublist').first().mouseenter(function (){
            if($(this)) $(this).addClass('sublist-active');
        })
        $('.sublist').first().mouseleave(function (){
            if($(this)) $(this).removeClass('sublist-active');
        })
        $('.sublist').first().removeClass('sublist-active');
    })


    const mediaDropdown = window.matchMedia("(max-width: 936px)");

    $('.link-dropdown').on('click', function(e){
        //se não for mobile {função clique desnecessária}
      if(!mediaDropdown.matches) return

        if(!$('.sublist').first().hasClass('sublist-clicked')) e.preventDefault()
      $('.sublist').first().addClass('sublist-active');
      $('.sublist').first().addClass('sublist-clicked');
      $(".list-item2:nth-child(2) .sublist").removeClass('sublist-active');
      $(".list-item2:nth-child(2) .sublist").removeClass('sublist-clicked');
     
    })
    $('.link-dropdown2').on('click', function(e){
      //se não for mobile {função clique desnecessária}
      if(!mediaDropdown.matches) return

        if(!$('.list-item2:nth-child(2) .sublist').hasClass('sublist-clicked')) e.preventDefault()
        
        $(".list-item2:nth-child(2) .sublist").addClass('sublist-active');
        $(".list-item2:nth-child(2) .sublist").addClass('sublist-clicked');
        $('.sublist').first().removeClass('sublist-active');
        $('.sublist').first().removeClass('sublist-clicked');
      })
      $('.loading').removeClass('loading-active');




   //Elemento Stick
   if($('.stick-container')){
    $(window).scroll(function(){
        const windowScroll = $(this).scrollTop();
        const main = $('main').offset().top;
        if(windowScroll > main){
            $('.stick-container').addClass('stick-container-active');
        }
    })
    $('.stick-container button').click(function(){
        $('.stick-container').toggleClass('stick-container-full');
    })
}

    
    $('.section-tab a').first().addClass('link-active');
    $('#item1').addClass('item-active');



    let index = 0;
    //Recomeçar o slide automático a partir do clique, caso houver 
    $(".controls a").on('click', function(){
    // pegando o indice do link clicado
    $('.controls a').each((i,element)=> {
     if($(this).attr('href')=== element.getAttribute('href'))  index = i;
    });
       
    })
    $('.prev').click(function(){
        if(index < 1) index = $(".img").length 
        slideShow(index - 1) ;
    })
    $('.next').click(function(){
        if(index > $(".img").length) {index = 0};
         slideShow(index+ 1);
    })
   
    //slide automático
    slideShow()
    function slideShow(i){
        $('.controls a').each(function(){$(this).removeClass('link-slide-active')});
        
        //barra de progresso
        $('.progress').toggleClass('progress-active')

        $('.img').each(function(){$(this).removeClass('img-slide-active')});
       index = typeof i == 'number' ? i : index ;
     

        if(index >= $(".img").length) {index = 0};
        $(".img")[index].className += " img-slide-active";
        $(".controls a")[index].className+= " link-slide-active";
        if(i == undefined){
            index++;
           
            setTimeout(function(){ 
                slideShow()
            }, 5000);
        }

     
  
    }

})

//tab
$('.section-tab nav a').click(function (e){
   e.preventDefault();
   const href = $(this).attr('href');
   $('section a').removeClass('link-active');
   $('section .main-item ').removeClass('item-active');
   $(this).addClass('link-active');
   $(href).addClass('item-active');
   
})

// controle slide
$('.controls a').click(function(e){
    e.preventDefault();
    const href = $(this).attr('href');
    $('.controls a').removeClass('link-slide-active');
    $('.img').removeClass('img-slide-active');
    $(this).addClass('link-slide-active');
    $(href).addClass('img-slide-active');
})