import layout from "../layout/layout.js";
import arr from "./data/data.js";
let url = "http://localhost:3001/playlist"
function write() {
    axios.get(url)
    .then(res => {
        console.log(res.data);
        reload(res.data)
    })
}
write()
let cont = document.querySelector('#root')
cont.style.backgroundColor =  '#070707'
layout(cont)
const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let right = document.querySelector('.right')
let pause = document.querySelector('.pause')
let back = document.querySelector('.center-back')
let next = document.querySelector('.center-next')
let progreesBlock = document.querySelector('.footer-center-bottom')
let progress = document.querySelector('.progress')
let musictitle = document.querySelector('.musictitle')
let musicimg2 = document.querySelector('.imgclick2')
let bigImg2 = document.querySelector('.bigImg2')
let musicartist = document.querySelector('.musicartist')
let musicimg = document.querySelector('.musicimg')
let musictitle2 = document.querySelector('.artistSinger')
let musicartist2 = document.querySelector('.artistSinger2')
let flowBtn2 = document.querySelector('.flowBtn2')
let stop = document.querySelector('.stop')
let top = document.querySelector('.footer-center-top')
let progreesBlock2 = document.querySelector('.footer3-center-bottom')
let audio = document.querySelector('audio')
let likedclick = document.querySelector('.likedclick')
let searchblock = document.querySelector('.searchblock')
let blockFlow = document.querySelectorAll('.history__block-item-top_no')
let place = document.querySelector('.history__block__grid')
let container = document.querySelector('.containersearch')
let flow = document.querySelector('.none')
let progress2 = document.querySelector('.progress3')
let wrap = document.querySelector('.wrapper')
let header = document.querySelector('header')
let nameImg = document.querySelector('.search')
nameImg.style.filter = 'invert(0%)'
let name = document.querySelector('.searchtext')
name.style.color = '#ffffff '
let inp = document.querySelector('.inpsearch')
let palceResults2 = document.querySelector('.place__results')
let palceResults = document.querySelector('.place__results_right')
let palceResultsLeft = document.querySelector('.place__results_left')
let local = localStorage.getItem('search')
let clickImg = document.querySelector('.musicimg')
let bigImg = document.querySelector('.footer-big-img')
let flowBtn = document.querySelector('.flowBtn')
let layoutImg = document.querySelector('.avatar_layout img')
let pause2 = document.querySelector('.pause2')
let searchImg = document.querySelector('.searchImg2')
searchImg.style.filter = 'invert(0%)'
let searchText = document.querySelector('.searchText')
searchText.style.color = 'white'
musicimg2.onclick = () => {
    musicimg2.style.display = 'none'
    bigImg2.style.display = 'block'
}
flowBtn2.onclick = () => {
    musicimg2.style.display = 'block'
    bigImg2.style.display = 'none'
}
clickImg.onclick = () => {
    clickImg.style.display = 'none'
    bigImg.style.display = 'block'
}
flowBtn.onclick = () => {
    clickImg.style.display = 'block'
    bigImg.style.display = 'none'
}
if(viewport_width <= 1650) {
    jenres(arr.slice(0, 12))
} else {
    jenres(arr.slice(0, 15))
}
if(viewport_width <= 1350) {
    jenres(arr.slice(0, 9))
}
if(viewport_width <= 1250) {
    jenres(arr.slice(0, 12))
}
if(viewport_width <= 900) {
    jenres(arr.slice(0, 9))
}
if(viewport_width <= 600) {
    jenres(arr.slice(0, 6))
    layoutImg.style.display = 'none'
}
flow.onclick = () => {
    right.style.display = "none"
    header.style.width = '83.5%'
    header.style.left = '16.5%'
    header.style.transform = 'translateX(0%)'
    wrap.style.width = '80%'
    wrap.style.float = 'right'
    wrap.style.margin = '110px 1.5% 0 0'
    place.style.gridTemplateColumns = 'repeat(6, 224px)'
    place.style.gridAutoRows = '224px'
    place.style.gridGap = '31px'
    jenres(arr.slice(0))
}
searchblock.style.display = 'flex'
likedclick.onclick = () => {
    window.location.assign('../liked/index.html')
}
blockFlow.forEach(item => {
    item.onclick = () => {
        item.parentNode.parentNode.style.display = 'none'
    }
})
function jenres(data) {
    place.innerHTML = ''
    for(let item of data) {
        let block = document.createElement('div')
        block.classList.add('history__block__grid__grid-block')
        block.style.backgroundImage = `url('../public/jenres/${item.img}.png')`
        place.append(block)
    }
}
function reload(data) {
    inp.onkeyup = () => {
        if(inp.value.length !== 0) {
            container.style.display = 'none'
            palceResults2.style.display = 'flex'
            palceResults.style.display = 'block'
            palceResultsLeft.style.display = 'flex'
        } else {
            container.style.display = 'block'
            palceResults2.style.display = 'none'
            palceResults.style.display = 'none'
            palceResultsLeft.style.display = 'none'
        }
        let value = inp.value.toLowerCase().trim()
        let filtered = data.filter(item => item.music.toLowerCase().includes(value))
        reloadArr(filtered);
        filtered.length !== 0 || filtered.length !== 16 ? showBlock(filtered[0], filtered) : palceResultsLeft.style.display = 'none'
        console.log(filtered.length);
        localStorage.setItem('search', JSON.stringify(filtered))
    }
}
let player3 = document.querySelector('.player3')
let blockImg = document.querySelector('.place__results_left_img')
let blockSong = document.querySelector('.place__results_left_song')
let blockArtist = document.querySelector('.place__results_left_artist')
palceResultsLeft.onmouseenter = () => {
    if(viewport_width <= 750) {
        player3.style.display = 'none'
        player3.style.opacity = '0'
    } else {
        player3.style.display = 'block'
        player3.style.opacity = '1'
    }
}
palceResultsLeft.onmouseleave = () => {
    player3.style.opacity = '0'
    setTimeout(() => {
        player3.style.display = 'block'
    }, 200);
}
const showBlock = (obj, filtered) => {
    console.log(obj);
    blockImg.style.backgroundImage = `url('../img/${obj.img}.jpg')`
    blockSong.innerHTML = obj.music
    blockArtist.innerHTML = obj.artist
    palceResultsLeft.onclick = () => {
        loadSong(obj.music, obj.artist, filtered)
        audio.play()
        pause.classList.add('stops')
         pause2.classList.add('stops')
         songIndex = 0
    }
}
let count = 0

function reloadArr(arr) {
    palceResults.innerHTML = ''
    count = 0
    player(arr)
    for(let item of arr) {
        count++
            let wrap = document.createElement('div')
            let number = document.createElement('p')
            let play = document.createElement('div')
            let block = document.createElement('div')
            let musicimg = document.createElement('div')
            let musicblock = document.createElement('div')
            let blocktext1 = document.createElement('p')
            let blocktext2 = document.createElement('p')
            let blockalbum = document.createElement('p')
            let musicdate = document.createElement('p')
            let likedblock = document.createElement('div')
            let timeblock = document.createElement('p')
            let spinner = document.createElement('div')
            let bir = document.createElement('div')
            let ikki = document.createElement('div')
            let uch = document.createElement('div')
            let turt = document.createElement('div')

            wrap.classList.add('musicitem2')
            spinner.classList.add('spinner2')
            bir.classList.add('bir2')
            ikki.classList.add('ikki2')
            uch.classList.add('uch2')
            turt.classList.add('turt2')
            number.classList.add('musicnumber2')
            play.classList.add('play2')
            number.innerHTML = count
            block.classList.add('musicblock2')
            musicimg.classList.add('musicblockimg2')
            musicimg.style.backgroundImage = `url('../img/${item.img}.jpg')`
            musicblock.classList.add('musicblocktext2')
            blocktext1.classList.add('blocktext3')
            blocktext1.innerHTML = item.music
            blocktext2.classList.add('blocktext4')
            blocktext2.innerHTML = item.artist
            blockalbum.classList.add('musicblockalbum2')
            blockalbum.innerHTML = item.albom
            musicdate.classList.add('musicdate2')
            musicdate.innerHTML = item.dateadd
            likedblock.classList.add('likedblock2')
            timeblock.classList.add('timeblock2')
            timeblock.innerHTML = item.length
            
            palceResults.append(wrap)
            wrap.append(number, spinner, play, block, blockalbum, musicdate, likedblock, timeblock)
            block.append(musicimg, musicblock)
            spinner.append(bir,ikki,uch, turt)
            musicblock.append(blocktext1, blocktext2)
            wrap.onmouseenter = () => {
                likedblock.style.display = "block"
                likedblock.style.opacity = "1"
                number.style.display = "none"
                play.style.display = "block"
                play.style.opacity = "1"
            }
            wrap.onclick = () => {
                songIndex = number.innerHTML
                loadSong(item.music, item.artist, arr)
                audio.play()
                pause.classList.add('stops')
        pause2.classList.add('stops')
            }
            likedblock.onclick = () => {
                likedblock.classList.toggle('full')
                if (likedblock.classList.contains('full')) {
                    axios.patch(url + "/" + item.id, {
                            liked: true
                        })
                        .then(res => console.log(res.data))
                        write()
                } else {
                    axios.patch(url + "/" + item.id, {
                            liked: false
                        })
                        .then(res => console.log(res.data))
                        write()
                }
            }
            
            wrap.onmouseleave = () => {
                !item.liked ? likedblock.style.opacity = "0" : null
                play.style.opacity = "0"
                setTimeout(() => {
                    number.style.display = "block"
                    play.style.display = "none"
                    !item.liked ? likedblock.style.display = "none" : null
                }, 200);
            }
            item.liked ? likedblock.classList.add('full') : null
    }
}
let musicount = 0
var songIndex = 0
const player = (musics) => {
    
    console.log(songIndex);

    back.onclick = () => {
        +songIndex--
        if (+songIndex < 0) {
            +songIndex++
        }
        loadSong(musics[+songIndex].music, musics[+songIndex].artist, musics)
        audio.play()
    }
    var actions = {
        1: function() {
            +songIndex
            console.log(+songIndex);
            loadSong(musics[+songIndex].music, musics[+songIndex].artist, musics)
            audio.play()
        },
        2: function() {
            +songIndex++
            console.log(+songIndex);
            loadSong(musics[+songIndex].music, musics[+songIndex].artist, musics)
            audio.play()
        }
    };
    var counter = 0;

    next.onclick = () => {
        actions[counter = (counter % 2) + 1]();

    }
    audio.addEventListener('ended', nextSong)

    function nextSong(e) {
        songIndex++
        loadSong(musics[songIndex].music, musics[songIndex].artist, musics)
        audio.play()
    }
    loadSong(musics[songIndex].music, musics[songIndex].artist, musics)

}
if(viewport_width >= 1050) {
    pause.onclick = () => {
        pause.classList.toggle('stops')
        if (pause.classList.contains('stops')) {
            Playsong()
        } else {
            Pausesong()
        }
    }
     if (audio.played) {
        pause.classList.add('stops')
    } else {
        pause.classList.remove('stops')
    }
} else {
    pause2.onclick = () => {
        pause2.classList.toggle('stops')
        if (pause2.classList.contains('stops')) {
            Playsong()
        } else {
            Pausesong()
        }
    }
    if (audio.played) {
        pause2.classList.add('stops')
    } else {
        pause2.classList.remove('stops')
    }
}





async function loadSong(song, artist, music) {
    console.log(song);
    let data = music.filter(item => {
        if (item.music === song) {
            return item
        }
    })
    let block = document.querySelectorAll('.blocktext3')
    block.forEach(item => {
        if(item.innerHTML === data[0].music) {
            let spinner = document.querySelectorAll('.spinner2')
            spinner.forEach(items => {
                items.classList.remove('opacity2')

                item.parentNode.parentNode.parentNode.firstChild.nextSibling.classList.add('opacity2')
            }
            )
            let numbersblock = document.querySelectorAll('.musicnumber2')
            numbersblock.forEach(items => {
                items.classList.remove('noopacity')

                item.parentNode.parentNode.parentNode.firstChild.classList.add('noopacity')
            }
            )
            let paused = document.querySelectorAll('.play2')
            paused.forEach(items => {
                items.classList.remove('pausestop')

                item.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.classList.add('pausestop')
            }
            )
            let body = document.querySelectorAll('.musicitem2')
            body.forEach(items => {
                items.classList.remove('white')

                item.parentNode.parentNode.parentNode.classList.add('white')
            }
            )
            let text = document.querySelectorAll('.blocktext3')
            text.forEach(items => {
                items.classList.remove('green')

                item.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.firstChild.classList.add('green')
            }
            )
        }
    })
    if(viewport_width >= 1050) {
        // console.log(block);
        musictitle.innerHTML = song
        musicartist.innerHTML = artist
        musicimg.style.backgroundImage = `url("../img/${song}.jpg")`
        bigImg.style.backgroundImage = `url("../img/${song}.jpg")`
        audio.src = `../music/${song}.mp3`;
    } else {
        musictitle2.innerHTML = song
        musicartist2.innerHTML = artist
        musicimg2.style.backgroundImage = `url("../img/${song}.jpg")`
        bigImg2.style.backgroundImage = `url("../img/${song}.jpg")`
        audio.src = `../music/${song}.mp3`;
    }
}

function Playsong() {
    audio.play()
}

function Pausesong() {
    audio.pause()
}

function updateProgress(e) {
    if(viewport_width >= 1050) {
        const {
            duration,
            currentTime
        } = e.srcElement
        const progressPrecent = currentTime / duration * 100
        progress.style.width = `${progressPrecent}%`
    }  else {
        const {
            duration,
            currentTime
        } = e.srcElement
        const progressPrecent = currentTime / duration * 100
        progress2.style.width = `${progressPrecent}%`
    }
}
audio.addEventListener('timeupdate', updateProgress)

function setProgres(e) {
    const width = this.clientWidth
    const click = e.offsetX
    const duration = audio.duration
    audio.currentTime = (click / width) * duration
}
progreesBlock.addEventListener('click', setProgres)
progreesBlock2.addEventListener('click', setProgres)
let radius = document.querySelector('.radius')
progreesBlock.onmouseenter = () => {
    progress.classList.add('green2')
    radius.style.display = 'block'
}
progreesBlock.onmouseleave = () => {
    progress.classList.remove('green2')
    radius.style.display = 'none'
}
let volumeBlock = document.querySelector('.footer-bottom')
let volumeSet = document.querySelector('.progress2')
let radius2 = document.querySelector('.radius2')

function setVolume(e) {
    const width = this.clientWidth
    const click = e.offsetX
    let target = width / 100 * click
    const volume = +`0.${target < 10 && target > 0 ? `0${target}` : target}`
    audio.volume = volume
    volumeSet.style.width = `${width / 100 * click}%`
    console.log(volume, audio.volume);
    console.log(volume);
}
volumeBlock.addEventListener('click', setVolume)

volumeBlock.onmouseenter = () => {
    radius2.style.display = 'block'
    volumeSet.style.backgroundColor = '#1DB954'
}
volumeBlock.onmouseleave = () => {
    radius2.style.display = 'none'
    volumeSet.style.backgroundColor = null
}