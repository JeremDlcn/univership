document.querySelector('#main > div').addEventListener('mouseover', ()=>{
	setTimeout(()=>{
		let spade = document.querySelectorAll('.spade');
		for (let i = 0; i < spade.length; i++){
			spade[i].style.opacity = '0';
		}
	},400);
});

document.querySelector('#main > div').addEventListener('mouseleave', ()=>{
	setTimeout(()=>{
		let spade = document.querySelectorAll('.spade');
		for (let i = 0; i < spade.length; i++){
			spade[i].style.opacity = '1';
		}
	},400);
});