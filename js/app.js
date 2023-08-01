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


    // section now
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


    // section now
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


    // section art
    $('.slide_wrap').slick({
        slidesToShow: 2,
        prevArrow : $('.prev'), 
        nextArrow : $('.next'),
    })

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


    // section brand
    $('.tab_slick').slick({
        centerMode: true,
        centerPadding: '470px',
        initialSlide: 1,
        prevArrow : $('.prevArrow'), 
        nextArrow : $('.nextArrow'),
    })

    $('.prevArrow').click(function(){
        var prevName = $('.slick-center').prev().find('div > div').attr('class');
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
        var nextName = $('.slick-center').next().find('div > div').attr('class');
        console.log(nextName)
        if(nextName == 'addir'){
            $('.gallery_wrap.addir').show().siblings().hide()
        }else if(nextName == 'onoma'){
            $('.gallery_wrap.onoma').show().siblings().hide()
        }else{
            $('.gallery_wrap.boontheshop').show().siblings().hide()
        }
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

    // section magazine
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

})