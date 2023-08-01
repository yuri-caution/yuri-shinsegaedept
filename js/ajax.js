$(function(){
          // slider indicator
          var idx_lgth = $(".carousel_wrap > img").length;
          var srt = 1;
          
          $('.dots > li').click(function(){
            var idx = $(this).index();
            srt = idx;
            $(this).addClass('active').siblings().removeClass('active');
            $(".carousel_wrap > img").eq(idx).addClass('on').siblings().removeClass('on');
          });
})