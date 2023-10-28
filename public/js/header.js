$(function(){
    //메뉴
    $('.gnb li').hover(function(){
        $(this).addClass('on')
    }, function() {
        $(this).removeClass('on')
    })

    //로그인
    $(".login").click(()=>{
        $('header').css('border-bottom', 'white')
        $('.slide_tab .play').fadeOut(1000)
        $('.id_box').focus()
        $(".login_toggle").slideDown('slow');
    });
    
    $(".login_toggle .close").click(()=>{
        $(".login_toggle").slideUp(1000);
        $('header').css('border-bottom', '#f0f0f0')
        $('.slide_tab .play').fadeIn(1500)
    });

    // gnb 표시
    var str = location.pathname

    if(str.includes('brand')){
        $('.gnb > li > a').eq(2).addClass('active')
    }

    if(str.includes('art_culture')){
        $('.gnb > li > a').eq(3).addClass('active')
    }

    if(str.includes('academy')){
        $('.gnb > li > a').eq(3).addClass('active')
    }

    // 스크롤 gnb 이벤트
    $(window).scroll(function(){
        if($(this).scrollTop() < 43){
            $('.top').show()
            $('.gnb ul').css('top', '113px')
        }else {
            $('.top').hide()
            $('.gnb ul').css('top', '70px')
        }
    })

})