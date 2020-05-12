// varible
const text = 'Typing is here'
const iconelement = 'icon'
const textelement = 'typing'
const iconallow = true
const iconsym = "|"
const texttimer = 300
const iconblinktimer = 500

// running script
const id = document.getElementById(textelement)
const iconid = document.getElementById(iconelement)
let i = 0
let currenttext = ""
let icon = iconsym

const iconblink = ()=>{
  setInterval(function () {
    iconid.innerHTML = icon
    if(icon.length === 0){
      icon = iconsym
    }
    else {
      icon = ""
    }
  }, iconblinktimer);
}

const timer = ()=>{setInterval(
  typing
  , texttimer)
}
function typing(){
    if(i===text.length){
      clearInterval(timer)
    }
    currenttext += text.charAt(i)
    i++
    id.innerHTML = currenttext
}


timer()
if(iconallow === true){
  iconblink()
}
