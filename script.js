'use strict';


let countOfClicks = 0;
count.innerText = countOfClicks;
btnPlus.addEventListener('click', () => {
	count.innerText = ++countOfClicks;
})
btnMinus.addEventListener('click', () => {
	count.innerText = --countOfClicks;
})
// btnRed.addEventListener('click', () => {
// 	divCount.className = 'red'
// })
// btnGreen.addEventListener('click', () => {
// 	divCount.className = 'green'
// })
// btnBlue.addEventListener('click', () => {
// 	divCount.className = 'blue'
// })

let getCollectionBtn = ()=>{
	let btns = document.body.querySelectorAll('button');
	console.log(btns)
	for (let button of btns){
		if (button.className === 'red') {
			button.addEventListener('click', () => {
				divCount.style.color = 'red'
			})
		}
		if (button.className === 'green') {
			button.addEventListener('click', () => {
				divCount.style.color = 'green'
			})
		}
		if (button.className === 'blue') {
			button.addEventListener('click', () => {
				divCount.style.color = 'blue'
			})
		}
	}
	// for (let i = 0; i < btns.length; i++) {
	// 	if (btns[i].className === 'red') {
	// 		btns[i].addEventListener('click', () => {
	// 			divCount.style.color = 'red'
	// 		})
	// 	}
	// 	if (btns[i].className === 'green') {
	// 		btns[i].addEventListener('click', () => {
	// 			divCount.style.color = 'green'
	// 		})
	// 	}
	// 	if (btns[i].className === 'blue') {
	// 		btns[i].addEventListener('click', () => {
	// 			divCount.style.color = 'blue'
	// 		})
	// 	}
	// }
}
getCollectionBtn()





