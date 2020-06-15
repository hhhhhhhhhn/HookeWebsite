function textToHTML(text){
    return `<p>${text}</p>`.replace(new RegExp("\t","gi"), " ").replace(new RegExp("\n","gi"), "</p><p>").replace(new RegExp("<p>[\n ]*</p>", "gi"), "")
}

async function getAutocitation(settings){
	const result = await hooke.autoCitation(settings)
	return textToHTML(result)
}

window.onload = async()=>{
	var settings = {
		...JSON.parse(localStorage.getItem("hooke_settings")),
		...{text: localStorage.getItem("hooke_text"), replace:true}
	}
    var htm = await getAutocitation(settings)
    div = document.getElementById("text")
    div.innerHTML = htm
}