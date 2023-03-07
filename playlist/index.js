import layout from "../layout/layout.js";
let url = "http://localhost:3001/playlist";
function write() {
    axios.get(url)
    .then(res => {
        music(res.data)
        console.log(res.data);
    })
}
write()
axios.get("http://localhost:3001/alboms")
    .then(res => {
        console.log(res.data)
    })
    
let local = JSON.parse(localStorage.getItem('albom'))
let color = document.querySelector('.color')
let cont = document.querySelector('#root')

color.style.backgroundImage = local ? `linear-gradient(180deg, ${local.background} 5.09%, #121212 43.28%)` : `linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)`
layout(cont)
const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
let right = document.querySelector('.right')
let playlistImg = document.querySelector('.playlist-img').style.backgroundImage = `url(../img/${local.img}.jpg)`
let title = document.querySelector('.titletext').innerHTML = local.artist
let musicname = document.querySelector('.artist-name').innerHTML = local.songs
let place = document.querySelector('.musicsblock');
let header = document.querySelector('header')
let flow = document.querySelector('.none')
let wrap = document.querySelector('.wrapper')
let wraps = document.querySelector('.wrappers')
let playerall = document.querySelector('.biggestPlayer')
let search = document.querySelector('.searchhome')
search.onclick = () => {
    window.location.assign('../search/index.html')
}
let pause = document.querySelector('.pause')
let pause2 = document.querySelector('.pause2')
let back = document.querySelector('.center-back')
let next = document.querySelector('.center-next')
let clickImg = document.querySelector('.musicimg')
let bigImg = document.querySelector('.footer-big-img')
let flowBtn = document.querySelector('.flowBtn')
let flowBtn2 = document.querySelector('.flowBtn2')
let musicimg2 = document.querySelector('.imgclick2')
let bigImg2 = document.querySelector('.bigImg2')
let layoutImg = document.querySelector('.avatar_layout img')
if(viewport_width <= 600) {
    layoutImg.style.display = 'none'
}
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
let progreesBlock = document.querySelector('.footer-center-bottom')
let progress = document.querySelector('.progress')
let radius = document.querySelector('.radius')
let progreesBlock2 = document.querySelector('.footer3-center-bottom')
let progress2 = document.querySelector('.progress3')
let radius3 = document.querySelector('.radius3')
let musictitle = document.querySelector('.musictitle')
let musicartist = document.querySelector('.musicartist')
let musictitle2 = document.querySelector('.artistSinger')
let musicartist2 = document.querySelector('.artistSinger2')
let musicimg = document.querySelector('.musicimg')
let stop = document.querySelector('.stop')
let top = document.querySelector('.footer-center-top')
let audio = document.querySelector('audio')
let likedclick = document.querySelector('.likedclick')
likedclick.onclick = () => {
    window.location.assign('../liked/index.html');
}
progreesBlock.onmouseenter = () => {
    progress.classList.add('green2')
    radius.style.display = 'block'
}
progreesBlock.onmouseleave = () => {
    progress.classList.remove('green2')
    radius.style.display = 'none'
}
progreesBlock2.onmouseenter = () => {
    progress2.classList.add('green2')
    radius3.style.display = 'block'
}
progreesBlock2.onmouseleave = () => {
    progress2.classList.remove('green2')
    radius3.style.display = 'none'
}
flow.onclick = () => {
    right.style.display = "none"
    header.style.width = '83.5%'
    header.style.left = '16.5%'
    header.style.transform = 'translateX(0%)'
    wrap.style.width = '80%'
    wrap.style.float = 'right'
    wrap.style.margin = '110px 1.5% 0 0'
    wraps.style.width = '80%'
    wraps.style.left = '18.0%'
    wraps.style.transform = 'translateX(0%)'
}
let count = 0
const music = (arr) => {
    place.innerHTML = ''
    count = 0
    let data = arr.filter(item => {
        if (local.artist === item.artist) {
            return item
        }
    })
    player(data)
    for (let item of arr) {
        if (local.artist === item.artist) {
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

            wrap.classList.add('musicitem')
            spinner.classList.add('spinner')
            bir.classList.add('bir')
            ikki.classList.add('ikki')
            uch.classList.add('uch')
            turt.classList.add('turt')
            number.classList.add('musicnumber')
            play.classList.add('play')
            number.innerHTML = count
            block.classList.add('musicblock')
            musicimg.classList.add('musicblockimg')
            musicimg.style.backgroundImage = `url('../img/${item.img}.jpg')`
            musicblock.classList.add('musicblocktext')
            blocktext1.classList.add('blocktext1')
            blocktext1.innerHTML = item.music
            blocktext2.classList.add('blocktext2')
            blocktext2.innerHTML = item.artist
            blockalbum.classList.add('musicblockalbum')
            blockalbum.innerHTML = item.albom
            musicdate.classList.add('musicdate')
            musicdate.innerHTML = item.dateadd
            likedblock.classList.add('likedblock')
            timeblock.classList.add('timeblock')
            timeblock.innerHTML = item.length
            
            place.append(wrap)
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
                console.log(+songIndex);
                loadSong(item.music, item.artist, data)
                audio.play()
                pause2.classList.add('stops')
                pause.classList.add('stops')
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
}

// var audio = new Audio();
let musicount = 0
var songIndex = 0
console.log(+songIndex);
const player = (musics) => {
    
    console.log(+songIndex);

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
            console.log('Действие 1');
            +songIndex
            console.log(+songIndex);
            loadSong(musics[+songIndex].music, musics[+songIndex].artist, musics)
            audio.play()
        },
        2: function() {
            console.log('Действие 2');
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
        console.log(songIndex);
        +songIndex++
        loadSong(musics[+songIndex].music, musics[+songIndex].artist, musics)
        audio.play()
    }
    loadSong(musics[+songIndex].music, musics[+songIndex].artist, musics)

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
    let block = document.querySelectorAll('.blocktext1')
    block.forEach(item => {
        if(item.innerHTML === data[0].music) {
            // item.parentNode.parentNode.parentNode.style.backgroundColor = 'red'
            // item.parentNode.parentNode.parentNode.firstChild.nextSibling.style.opacity = "1"
            // item.parentNode.parentNode.parentNode.firstChild.style.opacity = "0"
            let spinner = document.querySelectorAll('.spinner')
            spinner.forEach(items => {
                items.classList.remove('opacity')

                item.parentNode.parentNode.parentNode.firstChild.nextSibling.classList.add('opacity')
            }
            )
            let numbersblock = document.querySelectorAll('.musicnumber')
            numbersblock.forEach(items => {
                items.classList.remove('noopacity')

                item.parentNode.parentNode.parentNode.firstChild.classList.add('noopacity')
            }
            )
            let paused = document.querySelectorAll('.play')
            paused.forEach(items => {
                items.classList.remove('pausestop')

                item.parentNode.parentNode.parentNode.firstChild.nextSibling.nextSibling.classList.add('pausestop')
            }
            )
            let body = document.querySelectorAll('.musicitem')
            body.forEach(items => {
                items.classList.remove('white')

                item.parentNode.parentNode.parentNode.classList.add('white')
            }
            )
            let text = document.querySelectorAll('.blocktext1')
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
