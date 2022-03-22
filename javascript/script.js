// document.documentElement.clientWidth;
// document.documentElement.clientHeight;
let item = document.querySelector('iframe');

function resizeVideoBlock () {
	if(document.documentElement.clientWidth<1200){
  		item.width = document.documentElement.clientWidth - 30;
  		item.height = (document.documentElement.clientWidth - 30) / 1.78;
	}else {
	  	item.width = 1200;
	  	item.height = 675;
	  }
}

resizeVideoBlock();

window.addEventListener(`resize`, resizeVideoBlock, false);
