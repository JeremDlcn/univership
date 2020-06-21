if (localStorage.getItem('rgpd') !== "true") createPopup();


function createPopup(){
	let rgpd = document.createElement('div');
	let textrgpd = document.createElement('p');
	let actionrgpd = document.createElement('div');
	let linkrgpd = document.createElement('a');
	let buttonsrgpd = document.createElement('div');
	let deniedrgpd = document.createElement('button');
	let validrgpd = document.createElement('button');
	
	
	rgpd.className = "rgpd";
	textrgpd.innerHTML = "Le site utilise récupère les données du traffic mais pas les données personelles. En naviguant sur se site vous accepter de nous aidés à améliorer notre site en nous partageant vos données de traffic."
	linkrgpd.href = "conditions.html"
	linkrgpd.innerHTML = "En savoir plus"
	deniedrgpd.className = "deniedRGPD"
	deniedrgpd.innerHTML = "Refuser"
	validrgpd.className = "validRGPD"
	validrgpd.innerHTML = "Accepter"
	
	
	buttonsrgpd.appendChild(deniedrgpd);
	buttonsrgpd.appendChild(validrgpd);
	actionrgpd.appendChild(linkrgpd);
	actionrgpd.appendChild(buttonsrgpd);
	rgpd.appendChild(textrgpd);
	rgpd.appendChild(actionrgpd);
	document.querySelector('body').append(rgpd);

	document.querySelector('.validRGPD').addEventListener('click', ()=>{
		localStorage.setItem('rgpd', true);
		event.target.parentElement.parentElement.parentElement.remove();
	});
	
	document.querySelector('.deniedRGPD').addEventListener('click', ()=>{
			window.location.href = "https://www.google.com/";	
	});	
}





