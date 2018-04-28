(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			if(clientWidth >= 640) {
				docEl.style.fontSize = '86px';
				/*docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';*/
			}else if(clientWidth <= 320){
                docEl.style.fontSize = '45px';
            }else{
                docEl.style.fontSize = '58px';
				/*docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';*/
			}
		};
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
