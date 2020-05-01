const raceData = [
	{
		name: "Nëfraans",
		desc: "Race peu évoluée mentalement, mais bien plus évoluée physiquement que les autres races. Ils possèdent une hiérarchie digne des grands empires... des années 1750 MAIS possèdent un sens moral. Ils considèrent que leurs alliés doivent au moins être aussi fort que l’un d’entre eux, sinon ils sont considérés comme des larbins.",
		spec: {
			speed: 80,
			power: 90,
			accuracy: 20
		}
	},
	{
		name: "Scraps",
		desc: "Race artificielle qui s’est développée sur une exoplanète qui servait de dépotoir métallique des autres races. Ils se sont auto-développés grâce à leur “Savant” qui fabriqua la plupart des scraps de la planète avant qu’ils ne se fabriquent par eux-même. Personne ne sait vraiment qui construisit le “Savant”. Les scraps ont toutes les formes et ont des caractéristiques précises (force, intelligence, rapidité, etc,...)",
		spec: {
			speed: 30,
			power: 90,
			accuracy: 70
		}
	},
	{
		name: "Humain",
		desc: "Plus évolués que les humains de 2020, ils ont développé des technologies pouvant améliorer leurs capacitées physiques: Ils sont désormais plus forts, plus rapides, et plus intelligents que leurs ancêtres. Leur société est basée sur l'expansion et l’exploration, la découverte de nouvelles richesses et l’étude de l’univers qui les entoure.",
		spec: {
			speed: 50,
			power: 20,
			accuracy: 40
		}
	},
	{
		name: "Rakao's",
		desc: "Les Rakao’s sont des êtres vivants sur une planète reculée de la galaxie, où la faune et la flore ne font qu’un et s’équilibrent perpétuellement. Ils ne sont pas très forts mais possèdent une grande rapidité et un fort sens de l’honneur, ce qui fait d’eux la seul race totalement pacifique. Ceci est peut être dû au fait qu’ils ne maîtrisent pas les voyages spatiaux.",
		spec: {
			speed: 50,
			power: 50,
			accuracy: 40
		}
	},
	{
		name: "Naukas",
		desc: "Race vivant dans le complexe N-07-FGB-2, ses représentants, très intelligents, sont capables de vivre des millénaires. Ils ont vu des univers se former et se détruire. Ces créatures pacifiques évitent le plus possible le contact d’autres formes intelligentes, principalement pour éviter le combat",
		spec: {
			speed: 50,
			power: 40,
			accuracy: 60
		}
	}

]



const detect = document.querySelectorAll('#select > div');

for (let i = 0; i < detect.length; i++){
	detect[i].addEventListener('mouseenter', ()=>{
		document.querySelector('.r-name').innerHTML = raceData[i].name;
		document.querySelector('.r-desc').innerHTML = raceData[i].desc;
		document.querySelector('.r-speed').value = raceData[i].spec.speed;
		document.querySelector('.r-power').value = raceData[i].spec.power;
		document.querySelector('.r-accuracy').value = raceData[i].spec.accuracy;
	});
	detect[i].setAttribute('data-before', raceData[i].name);
}