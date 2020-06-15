function getSettings(){
    var settings = {}
    for(e of document.getElementsByTagName("input")){
        if(e.getAttribute("type") == "number") settings[e.id] = Number(e.value)
        else settings[e.id] = e.value
    }
    for(e of document.getElementsByTagName("select")){
        if(e.getAttribute("type") == "number") settings[e.id] = Number(e.value)
        else settings[e.id] = e.value
    }
    return settings
}

function setSettings(settings){
    for(e of document.getElementsByTagName("input")){
        if(Object.keys(settings).includes(e.id)) e.value = settings[e.id]
    }
    for(e of document.getElementsByTagName("select")){
        if(Object.keys(settings).includes(e.id)) e.value = settings[e.id]
    }
}

window.addEventListener("click", (e)=>{
    if(e.target.tagName == "BUTTON"){
        localStorage.setItem("hooke_settings", JSON.stringify(getSettings()))
    }
})

window.onload = ()=>{
    var settings = JSON.parse(localStorage.getItem("hooke_settings") || "{}")
    setSettings(settings)
}