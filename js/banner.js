const bgcolor = ['#5B2F44', '#5D540B', '#207844', '#184A4D', '#1B778B']

const banners = [
    {
        id: 1,
        from: '대전신세계 Art & Science',
        title: 'DYAF 23 : 대전청년작가장터',
      },
    {
        id: 2,
        from: '광주신세계',
        title: '떠나보낸, 함께 살아가야 할',
      },
    {
        id: 3,
        from: '대구신세계',
        title: '에코토피아 Ecotopia',
      },
    {
        id: 4,
        from: '본점',
        title: 'RABBIT FRIENDS:김한나, 송형노',
      },
    {
        id: 5,
        from: '신세계 아카데미',
        title: '여름학기 수강회원 모집',
      },
]

const from = document.getElementById('from')
const title = document.getElementById('title')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const bgArea = document.getElementById('text_wrap')

let idx = 0

next.addEventListener('click', () => {
    idx++
    if(idx > banners.length - 1) idx = 0
    showBanner()
})

prev.addEventListener('click', () => {
    idx--
    if(idx < 0) idx = banners.length - 1
    showBanner()
})

function showBanner() {
    from.textContent = banners[idx].from
    title.textContent = banners[idx].title
    bgArea.style.backgroundColor = bgcolor[idx]
}

function init() {
    showBanner()
}

init()
