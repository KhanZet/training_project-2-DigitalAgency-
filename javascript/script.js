// document.documentElement.clientWidth;
// document.documentElement.clientHeight;
const videoBLock = document.querySelector('iframe');

function resizeVideoBlock () {
	if(document.documentElement.clientWidth<1200){
  		videoBLock.width = document.documentElement.clientWidth - 30;
  		videoBLock.height = (document.documentElement.clientWidth - 30) / 1.78;
	}else {
	  	videoBLock.width = 1200;
	  	videoBLock.height = 675;
	  }
}

resizeVideoBlock();

window.addEventListener(`resize`, resizeVideoBlock, false);

const iconNav = document.querySelector('.header__sort');
const headerContact = document.querySelector('.header__contact');
const headerNav = document.querySelector('.header-nav');
const header = document.querySelector('.header');
const headerContainer = document.querySelector('.header-container')
if(iconNav){
	iconNav.addEventListener("click", function (e) {
		iconNav.classList.toggle('_active');
		headerNav.classList.toggle('_active');
		header.classList.toggle('_active');
		headerContact.classList.toggle('_active');
		headerContainer.classList.toggle('_active');
		document.body.classList.toggle('_block')


	})
}
// PORTFOLIO

const buttonLeft = document.querySelector('.portfolio__button_left');
const buttonRight = document.querySelector('.portfolio__button_right')

const imageDiv = document.querySelector('.portfolio__items');
const image = imageDiv.firstChild
const portfolioList = ['portfolio1.png', 'portfolio2.png', 'portfolio3.png']

console.log(image);
	
let i = 1;
image.src = 'img/main/' + portfolioList[1];
buttonRight.addEventListener('click', function(e){
	i++;
	if(i == 3) i = 2;
	image.src = 'img/main/' + portfolioList[i];

});
buttonLeft.addEventListener('click', function(e){
	i--;
	if(i == -1) i = 0;
	image.src = 'img/main/' + portfolioList[i];

});