/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */(function(a,b,c){var d=window.matchMedia;typeof module!="undefined"&&module.exports?module.exports=c(d):typeof define=="function"&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)})("enquire",this,function(a){"use strict";function b(a2,b2){var c2,d2=0,e2=a2.length;for(d2;e2>d2&&(c2=b2(a2[d2],d2),c2!==!1);d2++);}function c(a2){return Object.prototype.toString.apply(a2)==="[object Array]"}function d(a2){return typeof a2=="function"}function e(a2){this.options=a2,!a2.deferSetup&&this.setup()}function f(b2,c2){this.query=b2,this.isUnconditional=c2,this.handlers=[],this.mql=a(b2);var d2=this;this.listener=function(a2){d2.mql=a2,d2.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a2){return this.options===a2||this.options.match===a2}},f.prototype={addHandler:function(a2){var b2=new e(a2);this.handlers.push(b2),this.matches()&&b2.on()},removeHandler:function(a2){var c2=this.handlers;b(c2,function(b2,d2){return b2.equals(a2)?(b2.destroy(),!c2.splice(d2,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a2){a2.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a2=this.matches()?"on":"off";b(this.handlers,function(b2){b2[a2]()})}},g.prototype={register:function(a2,e2,g2){var h=this.queries,i=g2&&this.browserIsIncapable;return h[a2]||(h[a2]=new f(a2,i)),d(e2)&&(e2={match:e2}),c(e2)||(e2=[e2]),b(e2,function(b2){d(b2)&&(b2={match:b2}),h[a2].addHandler(b2)}),this},unregister:function(a2,b2){var c2=this.queries[a2];return c2&&(b2?c2.removeHandler(b2):(c2.clear(),delete this.queries[a2])),this}},new g}),function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c2=a(this).innerHeight();c2>b&&(b=c2)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);var afterResize=function(){var t={};return function(callback,ms,uniqueId){uniqueId||(uniqueId="Don't call this twice without a uniqueId"),t[uniqueId]&&clearTimeout(t[uniqueId]),t[uniqueId]=setTimeout(callback,ms)}}();window.timber=window.timber||{},timber.cacheSelectors=function(){timber.cache={$html:$("html"),$body:$("body"),$breadcrumbs:$(".breadcrumb"),$navigation:$("#accessibleNav"),$hasDropdownItem:$(".site-nav--has-dropdown"),$menuToggle:$(".menu-toggle"),$slider:$(".flexslider"),$slides:$(".flexslider li"),$productImageWrap:$("#productPhoto"),$productImage:$("#productPhotoImg"),$thumbImages:$("#productThumbs").find("a.product-photo-thumb"),$shareButtons:$(".social-sharing"),$collectionFilters:$("#collectionFilters"),$advancedFilters:$(".advanced-filters"),$toggleFilterBtn:$("#toggleFilters"),$featuredContainer:$(".featured-box").closest(".grid-uniform"),$productGridImages:$(".product-grid-image")}},timber.cacheVariables=function(){timber.vars={bpLarge:769,mediaQueryLarge:"screen and (min-width: 769px)",isLargeBp:!1,isTouch:timber.cache.$html.hasClass("supports-touch")}},timber.init=function(){FastClick.attach(document.body),timber.cacheSelectors(),timber.cacheVariables(),timber.cache.$html.removeClass("no-js").addClass("js"),"ontouchstart"in window&&timber.cache.$html.removeClass("no-touch").addClass("touch"),timber.toggleMenu(),timber.productImageSwitch(),timber.equalHeights(),timber.responsiveVideos(),timber.toggleFilters(),timber.initBreakpoints(),$(window).load(function(){timber.responsiveNav()}),timber.socialSharing(),timber.sortFilters()},timber.initBreakpoints=function(){enquire.register(timber.vars.mediaQueryLarge,{match:function(){timber.vars.isLargeBp=!0,timber.productImageZoom()},unmatch:function(){timber.vars.isLargeBp=!1,timber.productImageZoom()}})},timber.accessibleNav=function(){var $nav=timber.cache.$navigation,$allLinks=$nav.find("a"),$topLevel=$nav.children("li").find("a"),$parents=$nav.find(".site-nav--has-dropdown"),$subMenuLinks=$nav.find(".site-nav--dropdown").find("a"),activeClass="nav-hover",focusClass="nav-focus";$parents.on("mouseenter",function(evt){var el=$(this);el.hasClass(activeClass)||evt.preventDefault(),showDropdown($(this))}),$parents.on("mouseleave",function(){hideDropdown($(this))}),$subMenuLinks.on("click",function(evt){evt.stopImmediatePropagation()}),$allLinks.focus(function(){handleFocus($(this))}),$allLinks.blur(function(){removeFocus($topLevel)});function handleFocus(el){var $subMenu=el.next("ul"),hasSubMenu=!!$subMenu.hasClass("site-nav--dropdown"),isSubItem=$(".site-nav--dropdown").has(el).length,$newFocus=null;isSubItem?($newFocus=el.closest(".site-nav--has-dropdown").find("a"),addFocus($newFocus)):(removeFocus($topLevel),addFocus(el))}function showDropdown(el){el.addClass(activeClass),setTimeout(function(){timber.cache.$body.on("touchstart",function(){hideDropdown(el)})},250)}function hideDropdown($el){$el.removeClass(activeClass),timber.cache.$body.off("touchstart")}function addFocus($el){$el.addClass(focusClass)}function removeFocus($el){$el.removeClass(focusClass)}},timber.responsiveNav=function(){$(window).resize(function(){afterResize(function(){timber.cache.$navigation.append($("#moreMenu--list").html()),$("#moreMenu").remove(),timber.alignMenu(),timber.accessibleNav()},200,"uniqueID")}),timber.alignMenu(),timber.accessibleNav()},timber.alignMenu=function(){var $nav=timber.cache.$navigation,w=0,i=0;wrapperWidth=$nav.outerWidth()-101,menuhtml="",!(window.innerWidth<timber.vars.bpLarge)&&($.each($nav.children(),function(){var $el=$(this);$el.hasClass("large-hide")||(w+=$el.outerWidth(!0)),wrapperWidth<w&&(menuhtml+=$("<div>").append($el.clone()).html(),$el.remove(),$el.hasClass("large-hide")||i++)}),wrapperWidth<w&&($nav.append('<li id="moreMenu" class="site-nav--has-dropdown"><a href="#">More<span class="icon icon-arrow-down" aria-hidden="true"></span></a><ul id="moreMenu--list" class="site-nav--dropdown">'+menuhtml+"</ul></li>"),i<=1&&(timber.cache.$navigation.append($("#moreMenu--list").html()),$("#moreMenu").remove())))},timber.toggleMenu=function(){var $doc=$(document),showDropdownClass="show-dropdown",showNavClass="show-nav";timber.cache.$menuToggle.on("click",function(){timber.cache.$html.toggleClass(showNavClass),$("#ajaxifyModal").hasClass("is-visible")&&($("#ajaxifyModal").removeClass("is-visible"),timber.cache.$html.addClass(showNavClass))}),timber.cache.$hasDropdownItem.on("click",function(evt){var $el=$(this);(!$el.hasClass(showDropdownClass)&&timber.vars.isTouch||!$el.hasClass(showDropdownClass)&&timber.cache.$html.hasClass(showNavClass))&&(evt.preventDefault(),$el.addClass(showDropdownClass),$doc.on("click",handleClickOutsideDropdown));function handleClickOutsideDropdown(evt2){var $target=$(evt2.target);!$target.is($el)&&!$.contains($el[0],$target[0])&&($el.removeClass(showDropdownClass),$doc.off("click",handleClickOutsideDropdown))}})},timber.productImageSwitch=function(){timber.cache.$thumbImages.length&&timber.cache.$thumbImages.on("click",function(evt){evt.preventDefault();var newImage=$(this).attr("href");timber.switchImage(newImage,null,timber.cache.$productImage)})},timber.switchImage=function(src,imgObject,el){var $el=$(el);$el.attr("src",src)},timber.productImageZoom=function(){},timber.socialSharing=function(){var $buttons=timber.cache.$shareButtons,$shareLinks=$buttons.find("a"),permalink=$buttons.attr("data-permalink"),$fbLink=$(".share-facebook"),$pinLink=$(".share-pinterest"),$googleLink=$(".share-google");$fbLink.length&&$.getJSON("https://graph.facebook.com/?id="+permalink+"&callback=?",function(data){data.shares?$fbLink.find(".share-count").text(data.shares).addClass("is-loaded"):$fbLink.find(".share-count").remove()}),$pinLink.length&&$.getJSON("https://api.pinterest.com/v1/urls/count.json?url="+permalink+"&callback=?",function(data){data.count>0?$pinLink.find(".share-count").text(data.count).addClass("is-loaded"):$pinLink.find(".share-count").remove()}),$googleLink.length&&$googleLink.find(".share-count").addClass("is-loaded"),$shareLinks.on("click",function(e){e.preventDefault();var el=$(this),popup=el.attr("class").replace("-","_"),link=el.attr("href"),w=700,h=400;switch(popup){case"share-fancy":w=480,h=720;break;case"share-google":w=500;break}window.open(link,popup,"width="+w+", height="+h)})},timber.equalHeights=function(){var $featuredBoxImageArray=[],$featuredBoxArray=[];timber.cache.$featuredContainer.each(function(){$featuredBoxImageArray.push($(this).find(".featured-box--image")),$featuredBoxArray.push($(this).find(".featured-box"))}),$(window).load(function(){resizeElements()}),$(window).resize(function(){afterResize(function(){resizeElements()},250,"id")});function resizeElements(){for(var featuredContainerLength=timber.cache.$featuredContainer.length,i=0;i<featuredContainerLength;i++)$featuredBoxImageArray[i].css("height","auto").equalHeights(),$featuredBoxArray[i].css("height","auto").equalHeights();timber.cache.$productGridImages.css("height","auto").equalHeights()}},timber.responsiveVideos=function(){var $iframeVideo=$('iframe[src*="youtube.com/embed"], iframe[src*="player.vimeo"]'),$iframeReset=$iframeVideo.add("iframe#admin_bar_iframe");$iframeVideo.each(function(){$(this).wrap('<div class="video-wrapper"></div>')}),$iframeReset.each(function(){this.src=this.src})},timber.toggleFilters=function(){timber.cache.$collectionFilters.length&&timber.cache.$toggleFilterBtn.on("click",function(){timber.cache.$toggleFilterBtn.toggleClass("is-active"),timber.cache.$collectionFilters.slideToggle(200),$(window).scrollTop()>timber.cache.$breadcrumbs.offset().top&&$("html, body").animate({scrollTop:timber.cache.$breadcrumbs.offset().top})})},timber.sortFilters=function(){timber.cache.$advancedFilters.each(function(){var $el=$(this),$tags=$el.find("li"),aNumber=/\d+/,sorted=!1;$tags.sort(function(a,b){if(a=parseInt(aNumber.exec($(a).text()),10),b=parseInt(aNumber.exec($(b).text()),10),!(isNaN(a)||isNaN(b)))return sorted=!0,a-b}),sorted&&$el.append($tags)})},timber.formatMoney=function(val){return moneyFormat.indexOf("money")===-1&&(moneyFormat.indexOf("{{amount}}")>-1&&moneyFormat.indexOf(".")===-1?val=val.replace(".","<sup>")+"</sup>":moneyFormat.indexOf("{{amount_with_comma_separator}}")>-1&&(val=val.replace(",","<sup>")+"</sup>")),val},timber.formatSaleTag=function(val){if(moneyFormat.indexOf("money")===-1){if(moneyFormat.indexOf("{{amount}}")>-1&&moneyFormat.indexOf(".")===-1){if(val.indexOf(".00")>-1||parseInt(val.replace(/[^0-9]/g,""),10)>1e3)return val.split(".")[0]}else if(moneyFormat.indexOf("{{amount_with_comma_separator}}")>-1&&(val.indexOf(",00")>-1||parseInt(val.replace(/[^0-9]/g,""),10)>1e3))return val.split(",")[0]}return val},$(timber.init);
//# sourceMappingURL=/cdn/shop/t/10/assets/shop.js.map?v=149315117128311748531652946378
