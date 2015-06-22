!function(t){"use strict";function e(t,e){t.style.WebkitTransform=e,t.style.msTransform=e,t.style.transform=e}function s(){var e=n.clientWidth,s=t.innerWidth;return s>e?s:e}function i(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s]);return t}function r(t,e){this.el=t,this.options=i({},this.options),i(this.options,e),this._init()}var n=t.document.documentElement,o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},a=o[Modernizr.prefixed("transition")],l={transitions:Modernizr.csstransitions,support3d:Modernizr.csstransforms3d};r.prototype.options={},r.prototype._init=function(){this.grid=this.el.querySelector("section.grid-wrap > ul.grid"),this.gridItems=[].slice.call(this.grid.querySelectorAll("li:not(.grid-sizer)")),this.itemsCount=this.gridItems.length,this.slideshow=this.el.querySelector("section.slideshow > ul"),this.slideshowItems=[].slice.call(this.slideshow.children),this.current=-1,this.ctrlPrev=this.el.querySelector("section.slideshow > nav > span.nav-prev"),this.ctrlNext=this.el.querySelector("section.slideshow > nav > span.nav-next"),this.ctrlClose=this.el.querySelector("section.slideshow > nav > span.nav-close"),this._initMasonry(),this._initEvents()},r.prototype._initMasonry=function(){var t=this.grid;imagesLoaded(t,function(){new Masonry(t,{itemSelector:"li",columnWidth:t.querySelector(".grid-sizer")})})},r.prototype._initEvents=function(){var e=this;this.gridItems.forEach(function(t,s){t.addEventListener("click",function(){e._openSlideshow(s)})}),this.ctrlPrev.addEventListener("click",function(){e._navigate("prev")}),this.ctrlNext.addEventListener("click",function(){e._navigate("next")}),this.ctrlClose.addEventListener("click",function(){e._closeSlideshow()}),t.addEventListener("resize",function(){e._resizeHandler()}),document.addEventListener("keydown",function(t){if(e.isSlideshowVisible){var s=t.keyCode||t.which;switch(s){case 37:e._navigate("prev");break;case 39:e._navigate("next");break;case 27:e._closeSlideshow()}}}),t.addEventListener("scroll",function(){e.isSlideshowVisible?t.scrollTo(e.scrollPosition?e.scrollPosition.x:0,e.scrollPosition?e.scrollPosition.y:0):e.scrollPosition={x:t.pageXOffset||n.scrollLeft,y:t.pageYOffset||n.scrollTop}})},r.prototype._openSlideshow=function(t){if(this.isSlideshowVisible=!0,this.current=t,classie.addClass(this.el,"slideshow-open"),this._setViewportItems(),classie.addClass(this.currentItem,"current"),classie.addClass(this.currentItem,"show"),this.prevItem){classie.addClass(this.prevItem,"show");var i=Number(-1*(s()/2+this.prevItem.offsetWidth/2));e(this.prevItem,l.support3d?"translate3d("+i+"px, 0, -150px)":"translate("+i+"px)")}if(this.nextItem){classie.addClass(this.nextItem,"show");var i=Number(s()/2+this.nextItem.offsetWidth/2);e(this.nextItem,l.support3d?"translate3d("+i+"px, 0, -150px)":"translate("+i+"px)")}},r.prototype._navigate=function(t){if(!this.isAnimating){if("next"===t&&this.current===this.itemsCount-1||"prev"===t&&0===this.current)return void this._closeSlideshow();this.isAnimating=!0,this._setViewportItems();var i=this,r=this.currentItem.offsetWidth,n=l.support3d?"translate3d(-"+Number(s()/2+r/2)+"px, 0, -150px)":"translate(-"+Number(s()/2+r/2)+"px)",o=l.support3d?"translate3d("+Number(s()/2+r/2)+"px, 0, -150px)":"translate("+Number(s()/2+r/2)+"px)",h="",c,d,m;"next"===t?(c=l.support3d?"translate3d( -"+Number(2*s()/2+r/2)+"px, 0, -150px )":"translate(-"+Number(2*s()/2+r/2)+"px)",d=l.support3d?"translate3d( "+Number(2*s()/2+r/2)+"px, 0, -150px )":"translate("+Number(2*s()/2+r/2)+"px)"):(c=l.support3d?"translate3d( "+Number(2*s()/2+r/2)+"px, 0, -150px )":"translate("+Number(2*s()/2+r/2)+"px)",d=l.support3d?"translate3d( -"+Number(2*s()/2+r/2)+"px, 0, -150px )":"translate(-"+Number(2*s()/2+r/2)+"px)"),classie.removeClass(i.slideshow,"animatable"),("next"===t&&this.current<this.itemsCount-2||"prev"===t&&this.current>1)&&(m=this.slideshowItems["next"===t?this.current+2:this.current-2],e(m,d),classie.addClass(m,"show"));var u=function(){classie.addClass(i.slideshow,"animatable"),classie.removeClass(i.currentItem,"current");var s="next"===t?i.nextItem:i.prevItem;classie.addClass(s,"current"),e(i.currentItem,"next"===t?n:o),i.nextItem&&e(i.nextItem,"next"===t?h:c),i.prevItem&&e(i.prevItem,"next"===t?c:h),m&&e(m,"next"===t?o:n);var r=function(e){if(l.transitions){if(-1===e.propertyName.indexOf("transform"))return!1;this.removeEventListener(a,r)}i.prevItem&&"next"===t?classie.removeClass(i.prevItem,"show"):i.nextItem&&"prev"===t&&classie.removeClass(i.nextItem,"show"),"next"===t?(i.prevItem=i.currentItem,i.currentItem=i.nextItem,m&&(i.nextItem=m)):(i.nextItem=i.currentItem,i.currentItem=i.prevItem,m&&(i.prevItem=m)),i.current="next"===t?i.current+1:i.current-1,i.isAnimating=!1};l.transitions?i.currentItem.addEventListener(a,r):r()};setTimeout(u,25)}},r.prototype._closeSlideshow=function(t){classie.removeClass(this.el,"slideshow-open"),classie.removeClass(this.slideshow,"animatable");var s=this,i=function(t){if(l.transitions){if("ul"!==t.target.tagName.toLowerCase())return;this.removeEventListener(a,i)}classie.removeClass(s.currentItem,"current"),classie.removeClass(s.currentItem,"show"),s.prevItem&&classie.removeClass(s.prevItem,"show"),s.nextItem&&classie.removeClass(s.nextItem,"show"),s.slideshowItems.forEach(function(t){e(t,"")}),s.isSlideshowVisible=!1};l.transitions?this.el.addEventListener(a,i):i()},r.prototype._setViewportItems=function(){this.currentItem=null,this.prevItem=null,this.nextItem=null,this.current>0&&(this.prevItem=this.slideshowItems[this.current-1]),this.current<this.itemsCount-1&&(this.nextItem=this.slideshowItems[this.current+1]),this.currentItem=this.slideshowItems[this.current]},r.prototype._resizeHandler=function(){function t(){e._resize(),e._resizeTimeout=null}var e=this;this._resizeTimeout&&clearTimeout(this._resizeTimeout),this._resizeTimeout=setTimeout(t,50)},r.prototype._resize=function(){if(this.isSlideshowVisible){if(this.prevItem){var t=Number(-1*(s()/2+this.prevItem.offsetWidth/2));e(this.prevItem,l.support3d?"translate3d("+t+"px, 0, -150px)":"translate("+t+"px)")}if(this.nextItem){var t=Number(s()/2+this.nextItem.offsetWidth/2);e(this.nextItem,l.support3d?"translate3d("+t+"px, 0, -150px)":"translate("+t+"px)")}}},t.CBPGridGallery=r}(window);