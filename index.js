import layout from "./layout/layout.js";
let url = "http://localhost:3001/playlist"
let a
let b
const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

axios.get(url)
.then(res => {
    console.log(res.data)
})
axios.get("http://localhost:3001/alboms")
.then(res => {
    console.log(res.data)
    a = res.data
    b = res.data
    if(viewport_width <= 1650) {
        reload(a.slice(0, 4))
        reloadtwo(b.slice(6, 10))
    } else {
        reload(a.slice(0, 5))
        reloadtwo(b.slice(6, 11))
    }
    if(viewport_width <= 1350) {
        reload(a.slice(0, 3))
        reloadtwo(b.slice(6, 9))
    }
    if(viewport_width <= 1050) {
        reload(a.slice(0, 4))
        reloadtwo(b.slice(6, 10))
    }
    if(viewport_width <= 900) {
        reload(a.slice(0, 3))
        reloadtwo(b.slice(6, 9))
    }
    if(viewport_width <= 600) {
        reload(a.slice(0, 2))
        reloadtwo(b.slice(6, 8))
    }
})
let premimStorage = JSON.parse(localStorage.getItem('userState'))
let body = document.querySelector('#root')
layout(body)
let cont = document.body
if(premimStorage) {
    premimStorage.change === 'on' ? cont.classList.add('gold') : cont.classList.add('index')
} else {

    cont.classList.add('index')
}
let right = document.querySelector('.right')
let header = document.querySelector('header')
let flow = document.querySelector('.none')
let wrap = document.querySelector('.wrapper')
let grid = document.querySelector('.wrap-grid')
let section = document.querySelector('.grid')
let sectiontwo = document.querySelector('.gridtwo')
let grids = document.querySelectorAll('.grid-block')
let click = document.querySelector('.click')
let likedclick = document.querySelector('.likedclick')
let search = document.querySelector('.searchhome')
let likedtext = document.querySelector('.hometext')
let homeImg = document.querySelector('.home2')
let homeImg2 = document.querySelector('.home')
let clickImg = document.querySelector('.musicimg')
let bigImg = document.querySelector('.footer-big-img')
let flowBtn = document.querySelector('.flowBtn')
let homeText = document.querySelector('.homeText')
clickImg.onclick = () => {
    clickImg.style.display = 'none'
    bigImg.style.display = 'block'
}
flowBtn.onclick = () => {
    clickImg.style.display = 'block'
    bigImg.style.display = 'none'
}
likedtext.style.color = '#ffffff'
likedclick.onclick = () => {
    window.location.assign('./liked/index.html')
}
search.onclick = () => {
    window.location.assign('./search/index.html')
}
grids.forEach(item => {
    item.onmouseenter = () => {
        item.firstChild.nextElementSibling.style.display = "block"
            item.firstChild.nextElementSibling.style.opacity = "1"
    }
         item.onmouseleave = () => {
	        item.firstChild.nextElementSibling.style.opacity = "0"
	        setTimeout(() => {
		        item.firstChild.nextElementSibling.style.display = null
	         }, 200);
            } 
})
flow.onclick = () => {
    right.style.display = "none"
    header.classList.add('headerUptaded')
    wrap.classList.add('wrapUptaded')
    grid.style.gridTemplateColumns = "repeat(3, 1fr)"
    section.classList.add('gridUptaded')
    sectiontwo.classList.add('gridUptaded')
    body.classList.add('bodyUptaded')
    if(viewport_width <= 1650) {
        reload(a.slice(0, 5))
        reloadtwo(b.slice(6, 11))
    } else {
        reload(a.slice(0, 6))
        reloadtwo(b.slice(6))
    }
    if(viewport_width <= 1350) {
        reload(a.slice(0, 4))
        reloadtwo(b.slice(6, 10))
    }
}

let {pathname} = window.location
pathname !== '/playlist/index.html' || '/liked/index.html' ? localStorage.removeItem('albom') : null



const reload = (arr) => {
    section.innerHTML = ""
     for(let item of arr) {
        let items = document.createElement('div'),
            itemImg = document.createElement('div'),
            itemPlayer = document.createElement('div'),
            itemTextBlock = document.createElement('div'),
            itemText = document.createElement('p'),
            itemText2 = document.createElement('p');

        items.classList.add('items')
        itemPlayer.classList.add('player')
        itemImg.classList.add('item-img')
        itemImg.style.backgroundImage = `url("./img/${item.img}.jpg")`  
        itemTextBlock.classList.add('item-text-block')
        itemText.classList.add('grid-text')
        itemText.innerHTML = item.artist
        itemText2.classList.add('text')
        itemText2.innerHTML = item.songs

        section.append(items)
        items.append(itemImg, itemTextBlock)
        itemImg.append(itemPlayer)
        itemTextBlock.append(itemText, itemText2)

        items.onmouseenter = () => {
            items.style.backgroundColor = "#282828"
            itemPlayer.style.display = "block"
            setTimeout(() => {
                itemPlayer.style.opacity = "1"
            }, 100);
        }
        items.onmouseleave = () => {
            items.style.backgroundColor = null
            itemPlayer.style.opacity = "0"
            setTimeout(() => {
                itemPlayer.style.display = null
            }, 300);
        }
        items.onclick = () => {
            window.location.assign('./playlist/index.html')
            localStorage.setItem('albom', JSON.stringify(item))
        }
     }
 }
 const reloadtwo = (arr) => {
    sectiontwo.innerHTML = ""
     for(let item of arr) {
        let items = document.createElement('div'),
            itemImg = document.createElement('div'),
            itemPlayer = document.createElement('div'),
            itemTextBlock = document.createElement('div'),
            itemText = document.createElement('p'),
            itemText2 = document.createElement('p');

        items.classList.add('items')
        itemPlayer.classList.add('player')
        itemImg.classList.add('item-img')
        itemImg.style.backgroundImage = `url("./public/images/${item.img}.png")`  
        itemTextBlock.classList.add('item-text-block')
        itemText.classList.add('grid-text')
        itemText.innerHTML = item.artist
        itemText2.classList.add('text')
        itemText2.innerHTML = item.songs

        sectiontwo.append(items)
        items.append(itemImg, itemTextBlock)
        itemImg.append(itemPlayer)
        itemTextBlock.append(itemText, itemText2)

        items.onmouseenter = () => {
            items.style.backgroundColor = "#282828"
            itemPlayer.style.display = "block"
            setTimeout(() => {
                itemPlayer.style.opacity = "1"
            }, 100);
        }
        items.onmouseleave = () => {
            items.style.backgroundColor = null
            itemPlayer.style.opacity = "0"
            setTimeout(() => {
                itemPlayer.style.display = null
            }, 300);
        }
     }
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
 homeImg.style.filter = 'invert(0%)'
 homeImg2.style.filter = 'invert(0%)'
 homeText.style.color = 'white'
