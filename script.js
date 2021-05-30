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
	for (let i = 0; i < btns.length; i++) {
		if (btns[i].className === 'red') {
			btns[i].addEventListener('click', () => {
				divCount.style.color = 'red'
			})
		}
		if (btns[i].className === 'green') {
			btns[i].addEventListener('click', () => {
				divCount.style.color = 'green'
			})
		}
		if (btns[i].className === 'blue') {
			btns[i].addEventListener('click', () => {
				divCount.style.color = 'blue'
			})
		}
	}
}
getCollectionBtn()





