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