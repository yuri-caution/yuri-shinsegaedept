const icons = [
    {
        id: 1,
        icon: "../images/ico_post_on.png",
      },
    {
        id: 2,
        icon: "../images/ico_facebook_on.png",
      },
    {
        id: 3,
        icon: "../images/ico_instagram_on.png",
      },
    {
        id: 4,
        icon: "../images/ico_youtube_on.png",
      },
    {
        id: 5,
        icon: "../images/ico_app_on.png",
      },
    {
        id: 6,
        icon: "../images/ico_kakao_on.png",
      },
    {
        id: 7,
        icon: "../images/ico_sbot_on.png",
      },
]

$(function(){
  $('.sns li a').hover(function(){
    var idx = $(this).index()
    $(this).find('img').attr('src', $(this).find('img').attr('src').replace(".png", "_on.png"))
  }, function(){
    $(this).find('img').attr('src', $(this).find('img').attr('src').replace("_on.png", ".png"))
  })

})

