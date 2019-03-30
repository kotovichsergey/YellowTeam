//выбираем все лементы с классом main_cont - наши основные блоки
let main = document.getElementsByClassName("main_cont"),
	countLayers = 0, 
	amountLayer = 0,
	result = document.getElementsByClassName('mix')[0];	
function choiceInput (select, fanc){
	let choice = document.querySelectorAll(select);
	for (let i = 0; i < choice.length; i++) {
		choice[i].addEventListener("click", fanc);
	}	
}
choiceInput('input[name$="answerFirst"]',toSelectAnswerFirst);
function toSelectAnswerFirst() {
	main[1].classList.remove("hid");
	main[0].classList.add("hid");	
    let targetElement = event.target,
		cheсkedImg = targetElement.nextElementSibling.firstElementChild,
		with_img = document.getElementsByClassName("with_img")[0],
		without_img = document.getElementsByClassName("without_img")[0];
	if (cheсkedImg) {
		let picture = cheсkedImg.getAttribute('src');
		result.style.backgroundImage = 'url(' + picture + ')';
		with_img.classList.remove("hid");
		without_img.classList.add("hid");
		countLayers++;
	} else {
		without_img.classList.remove("hid");
		with_img.classList.add("hid");
		result.style.backgroundImage = "url()";
	}
	choiceInput('input[name$="answerSecond"]', toSelectanswerSecondTwo);
}
function toSelectanswerSecondTwo() {	
    let targetElement = event.target;
    amountLayer = +targetElement.nextElementSibling.innerHTML;
	amountLayer += countLayers;
	countLayers = amountLayer - countLayers;
	main[2].classList.remove("hid");
	main[1].classList.add("hid");
	choiceInput('input[name$="answerThird"]', toSelectanswerThird);
}
function toSelectanswerThird() {
    let targetElement = event.target,
		cheсkedColor = targetElement.id;
	result.style.backgroundImage = "linear-gradient(" + cheсkedColor + ", " + cheсkedColor + "), " + result.style.backgroundImage;
	//backgroundImage += "linear-gradient(" + cheсkedColor + ", " + cheсkedColor + "), ";
	countLayers--;
	switch(countLayers) {
	case 0:  
		main[4].classList.remove("hid");
		main[2].classList.add("hid");		
		break;
	case 1:  
		main[3].classList.remove("hid");
		main[2].classList.add("hid");
		choiceInput('input[name$="answerFour"]', toSelectanswerFour);
		break;
	default:
		//targetElement.removeEventListener("click", toSelectanswerThird);
		removeLabel = targetElement.nextElementSibling;
		removeLabel.parentNode.removeChild(removeLabel);
		targetElement.parentNode.removeChild(targetElement);
		break;
	}
}
function toSelectanswerFour() {  
	main[4].classList.remove("hid");
	main[3].classList.add("hid");
    let targetElement = event.target,
		cheсkedColor = targetElement.id;	
	result.style.backgroundImage = "linear-gradient(" + cheсkedColor + ", " + cheсkedColor + "), " + result.style.backgroundImage;
	//backgroundImage += "linear-gradient(" + cheсkedColor + ", " + cheсkedColor + "), ";
	choiceInput('select', toSelectAnswerFive);
}
function toSelectAnswerFive() {  
    let targetElement = event.target;
    let mode = targetElement.value;
	if (mode) {
		main[5].classList.remove("hid");
	}
	switch(amountLayer) {
	case 2:  
		result.style.backgroundSize = "200px 300px, 400px 300px";
		break;
	case 3:  
		result.style.backgroundSize = "133px 300px, 266px 300px, 400px 300px";
		break;
	default: 
		result.style.backgroundSize = "100px 300px, 200px 300px, 300px 300px, 400px 300px";
		break;
	}
    result.style.backgroundBlendMode = mode;
}