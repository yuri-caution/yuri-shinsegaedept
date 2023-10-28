$(function(){
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')

    // resize, reload
    // var resizeTimer;
    // $(window).bind('resize', function( ) {
    //     window.clearTimeout( resizeTimer );
    //     resizeTimer = window.setTimeout( resizeFunction, 500 );
    // });
    // function resizeFunction(){
    //     location.reload()
    // }


    // slide
    ScrollReveal().reveal('.slider_wrap', {
        distance: '100px',
        origin: 'left',
        easing: 'ease-in-out',
        delay: 0
    });

    ScrollReveal().reveal('.slider_wrap .view_more', {
        distance: '10px',
        origin: 'left',
        easing: 'ease-in-out',
        delay: 0
    });


    // section news



    $(window).resize(function(){ 
        if (window.innerWidth < 1021) {
            var $slide = $('.content_wrap');
            $slide.on('init reInit', function (event, slick) {
                //페이징이니셜
                $("#slider_paging").html('<span class="page">'+ (slick.currentSlide+1) +'</span> / ' + 8);
            }).on('beforeChange', function(event, slick, currentSlide, nextSlide){ 
                //슬라이드 변경 시 페이징 변경
                var i = (nextSlide ? nextSlide : 0) + 1;
                $("#slider_paging").find(".page").text(i);
                if(i == 2){
                    $('.color_bar').css('width', '30px')
                }else if(i == 3){
                    $('.color_bar').css('width', '60px')
                }else if(i == 4){
                    $('.color_bar').css('width', '90px')
                }else if(i == 5){
                    $('.color_bar').css('width', '120px')
                }else if(i == 6){
                    $('.color_bar').css('width', '150px')
                }else if(i == 7){
                    $('.color_bar').css('width', '180px')
                }else if(i == 8){
                    $('.color_bar').css('width', '210px')
                }else {
                    $('.color_bar').css('width', 0)
                }
            });

            $slide.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow : $('.arrow_left'), 
                nextArrow : $('.arrow_right'),
                infinite:false
            })

            


        }else{
            $('.content_wrap').css('display', 'grid')
            ScrollReveal().reveal('.news h2', {
                distance: '50px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 0
            });
            
            ScrollReveal().reveal('.news > p', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 100
            });
            
            ScrollReveal().reveal('.content_wrap .col_01', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 200
            });
            
            ScrollReveal().reveal('.content_wrap .col_02', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 300
            });
            
            ScrollReveal().reveal('.content_wrap .col_03', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 400
            });
        
            ScrollReveal().reveal('.news .view_more', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 600
            });
        }
        
        }).resize(); 




    // section now
    $(window).ready(function(){ 
        if (window.innerWidth < 1021) {

        }else{
            $('.cards li').hover(function(){
                $(this).find('div').css('transform', 'none')
            }, function(){
                $(this).find('div').css('transform', 'translateY(100%)')
            })
        
            ScrollReveal().reveal('.now h2', {
                distance: '50px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 0
            });
        
            ScrollReveal().reveal('.cards .card_01', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 200
            });
            
            ScrollReveal().reveal('.cards .card_02', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 300
            });
            
            ScrollReveal().reveal('.cards .card_03', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 400
            });
            
            ScrollReveal().reveal('.cards .card_04', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 500
            });
            
            ScrollReveal().reveal('.now a', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 600
            });
            
            ScrollReveal().reveal('.now p', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 700
            });
            
            ScrollReveal().reveal('.sns li.p', {
                distance: '30px',
                origin: 'right',
                easing: 'ease-in-out',
                delay: 800
            });
            
            ScrollReveal().reveal('.sns li.f', {
                distance: '30px',
                origin: 'right',
                easing: 'ease-in-out',
                delay: 850
            });
            
            ScrollReveal().reveal('.sns li.i', {
                distance: '30px',
                origin: 'right',
                easing: 'ease-in-out',
                delay: 900
            });
            
            ScrollReveal().reveal('.sns li.y', {
                distance: '30px',
                origin: 'right',
                easing: 'ease-in-out',
                delay: 950
            });
            
            ScrollReveal().reveal('.sns li.a', {
                distance: '30px',
                origin: 'right',
                easing: 'ease-in-out',
                delay: 1000
            });
            
            ScrollReveal().reveal('.sns li.k', {
                distance: '30px',
                origin: 'right',
                easing: 'ease-in-out',
                delay: 1050
            });
            
            ScrollReveal().reveal('.sns li.s', {
                distance: '30px',
                origin: 'right',
                easing: 'ease-in-out',
                delay: 1100
            });
        }
    });



    // section art
    $('.slide_wrap').on('init reInit', function (event, slick) {
        //페이징이니셜
        $("#slide_paging").html('<span class="page">'+ (slick.currentSlide+1) +'</span> / ' + 5);
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){ 
        //슬라이드 변경 시 페이징 변경
        var i = (nextSlide ? nextSlide : 0) + 1;
        $("#slide_paging").find(".page").text(i);
    });

    $('.slide_wrap').slick({
        slidesToShow: 2,
        variableWidth: true,
        prevArrow : $('.prev'), 
        nextArrow : $('.next'),
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })

    $(window).ready(function(){ 
        if (window.innerWidth < 1021) {

        }else{        
            ScrollReveal().reveal('.art h2', {
                distance: '50px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 0
            });
        
            ScrollReveal().reveal('.art #text_wrap', {
                distance: '100px',
                origin: 'left',
                easing: 'ease-in-out',
                delay: 200
            });
                
            ScrollReveal().reveal('.art .view_more', {
                distance: '10px',
                origin: 'left',
                easing: 'ease-in-out',
                delay: 200
            });
            
            ScrollReveal().reveal('.slide_wrap', {
                distance: '30px',
                origin: 'right',
                easing: 'ease-in-out',
                delay: 300
            });
        
            ScrollReveal().reveal('#text_wrap .btns', {
                distance: '50px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 400
            });
        
        }
    })
   

    // section brand
    $('.tab_slick').slick({
        centerMode: true,
        centerPadding: '470px',
        initialSlide: 1,
        prevArrow : $('.prevArrow'), 
        nextArrow : $('.nextArrow'),
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    centerMode: false,
                    prevArrow : $('.pArrow'), 
                    nextArrow : $('.nArrow'),
                }
            }
        ]
    })

    $('.popup-gallery.addir').magnificPopup({
        delegate: 'a',
        type: 'ajax',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        closeOnContentClick: false,
        closeOnBgClick: false,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        },
    });

    $('.popup-gallery.onoma').magnificPopup({
        delegate: 'a',
        type: 'ajax',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        closeOnContentClick: false,
        closeOnBgClick: false,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        },
    });

    $('.popup-gallery.boontheshop').magnificPopup({
        delegate: 'a',
        type: 'ajax',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        closeOnContentClick: false,
        closeOnBgClick: false,
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        },
    });

    $('.prevArrow').click(function(){
        var prevName = $('.slick-center').find('div > div').attr('class');
        console.log(prevName)
        if(prevName == 'addir'){
            $('.gallery_wrap.addir').show().siblings().hide()
        }else if(prevName == 'onoma'){
            $('.gallery_wrap.onoma').show().siblings().hide()
        }else{
            $('.gallery_wrap.boontheshop').show().siblings().hide()
        }
    })

    $('.nextArrow').click(function(){
        var nextName = $('.slick-center').find('div > div').attr('class');
        console.log(nextName)
        if(nextName == 'addir'){
            $('.gallery_wrap.addir').show().siblings().hide()
        }else if(nextName == 'onoma'){
            $('.gallery_wrap.onoma').show().siblings().hide()
        }else{
            $('.gallery_wrap.boontheshop').show().siblings().hide()
        }
    })

    $('.pArrow').click(function(){
        var prevName = $('.tab_slick .slick-current').find('div > div').attr('class');
        console.log(prevName)
        if(prevName == 'addir'){
            $('.gallery_wrap.addir').show().siblings().hide()
        }else if(prevName == 'onoma'){
            $('.gallery_wrap.onoma').show().siblings().hide()
        }else{
            $('.gallery_wrap.boontheshop').show().siblings().hide()
        }
    })

    $('.nArrow').click(function(){
        var nextName = $('.tab_slick .slick-current').find('div > div').attr('class');
        console.log(nextName)
        if(nextName == 'addir'){
            $('.gallery_wrap.addir').show().siblings().hide()
        }else if(nextName == 'onoma'){
            $('.gallery_wrap.onoma').show().siblings().hide()
        }else{
            $('.gallery_wrap.boontheshop').show().siblings().hide()
        }
    })
    $(window).resize(function(){ 
        if (window.innerWidth < 1021) {
        }else{
   

    ScrollReveal().reveal('.brand h2', {
        distance: '50px',
        origin: 'bottom',
        easing: 'ease-in-out',
        delay: 0
    });
    
    ScrollReveal().reveal('.brand .tab_slick, .prevArrow, .nextArrow', {
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-in-out',
        delay: 100
    });
    
    ScrollReveal().reveal('.popup-gallery .col_01', {
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-in-out',
        delay: 200
    });
    
    ScrollReveal().reveal('.gallery_wrap .col_02, .popup-gallery .col_02', {
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-in-out',
        delay: 300
    });
    
    ScrollReveal().reveal('.popup-gallery .col_03', {
        distance: '30px',
        origin: 'bottom',
        easing: 'ease-in-out',
        delay: 400
    });
        }
    
    })

    

    // section magazine
    $(window).ready(function(){ 
        if (window.innerWidth < 1021) {
            
        }else{
            ScrollReveal().reveal('.magazine h2', {
                distance: '50px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 0
            });
            
            ScrollReveal().reveal('.magazine .movie_area', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 100
            });
            
            ScrollReveal().reveal('.magazine .col_01', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 200
            });
            
            ScrollReveal().reveal('.magazine .col_02', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 350
            });
            
            ScrollReveal().reveal('.magazine .col_03', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 500
            });
        
            ScrollReveal().reveal('.magazine .view_more', {
                distance: '30px',
                origin: 'bottom',
                easing: 'ease-in-out',
                delay: 600
            });
        }
    });
   

})