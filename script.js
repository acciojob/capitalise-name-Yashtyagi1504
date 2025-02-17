let input = document.getElementById("fname");
input.addEventListener("change",()=>{
	let upperValue = "";
	input.value.split("").forEach(char => {
		upperValue += char.toUpperCase();
	})
	input.value = upperValue;
})

