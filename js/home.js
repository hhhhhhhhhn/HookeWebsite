function getText(){
    return document.getElementById("text").value
}

document.addEventListener("click", (e)=>{
    if(e.target.id == "plagiarism"){
        localStorage.setItem("hooke_text", getText())
        window.location.href = "./comparison.html";
    }else if(e.target.id == "autocitation"){
        localStorage.setItem("hooke_text", getText())
        window.location.href = "./autocitation.html";
    }else if(e.target.id == "settings"){
        window.location.href = "./settings.html";
    }
})