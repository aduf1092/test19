function getURLVar(key){var value2=[],query=String(document.location).split("?");if(query[1]){var part=query[1].split("&");for(i=0;i<part.length;i++){var data=part[i].split("=");data[0]&&data[1]&&(value2[data[0]]=data[1])}return value2[key]?value2[key]:""}}function isEmpty(el){return!$.trim(el.html())}$(document).ajaxStop(function(){function isEmpty2(el){return!$.trim(el.html())}isEmpty2($("#product"))||$("#product .option-container").addClass("has-option")}),$(document).ready(function(){if($(window).width()<=479){var gridheight=-1;$(".custom-category .col-xs-6 .item .item-inner .caption").each(function(){gridheight=gridheight>$(this).height()?gridheight:$(this).height()}),$(".custom-category .col-xs-6 .item .item-inner .caption").each(function(){$(this).height(gridheight-30)})}$(window).width()<=991&&($("#sidebar-toggle .oc-menu-bar").click(function(e){e.stopPropagation();var effect=$(this).closest("#sidebar-toggle.oc-menu").find(".menu-effect").val();$("#column-left").addClass("sidebar-toggle"),$(".sidebar-overlay").toggle(),effect=="none"&&$("#column-left").toggle(),effect=="fade"&&$("#column-left").fadeToggle(),effect=="slide"&&$("#column-left").slideToggle()}),$("#column-left").click(function(e){e.stopPropagation()}),$(document.body).click(function(e){var effect=$("#sidebar-toggle.oc-menu").find(".menu-effect").val();$(".sidebar-overlay").hide(),effect=="none"&&$("#column-left").hide(),effect=="fade"&&$("#column-left").fadeOut(),effect=="slide"&&$("#column-left").slideUp()})),$(".mobtab a").click(function(e){$(".mobtab a").removeClass("active"),$(this).addClass("active")}),$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),$(".swatch :radio").change(function(){var optionIndex=$(this).closest(".swatch").attr("data-option-index"),optionValue=$(this).val();$(this).closest("form").find(".single-option-selector").eq(optionIndex).val(optionValue).trigger("change")}),$("#button-cart").on("click",function(e){e.preventDefault(),$.ajax({url:"/cart/add.js",type:"post",data:$("#form_buy input[type='text'], #form_buy select"),dataType:"json",beforeSend:function(){$("#button-cart").button("loading")},complete:function(){$("#button-cart").button("reset")},success:function(json){if($(".alert, .text-danger").remove(),$(".form-group").removeClass("has-error"),json.error){if(json.error.option)for(i in json.error.option){var element=$("#input-option"+i.replace("_","-"));element.parent().hasClass("input-group")?element.parent().after('<div class="text-danger">'+json.error.option[i]+"</div>"):element.after('<div class="text-danger">'+json.error.option[i]+"</div>")}json.error.recurring&&$("select[name='recurring_id']").after('<div class="text-danger">'+json.error.recurring+"</div>"),$(".text-danger").parent().addClass("has-error")}toastr.success("Congratulation! Your item has been added."),$.getJSON("/cart.js",function(cart2){load(cart2)}),$("html, body").animate({scrollTop:0},"slow")},error:function(xhr,ajaxOptions,thrownError){xhr.status==422?toastr.warning("Item variant already added to the cart."):alert(thrownError+"\r\n"+xhr.statusText+"\r\n"+xhr.responseText)}})}),$("#button-cart-sticky").on("click",function(e){e.preventDefault(),$.ajax({url:"/cart/add.js",type:"post",data:$("#form_buy input[type='text'], #form_buy_sticky select"),dataType:"json",beforeSend:function(){$("#button-cart-sticky").button("loading")},complete:function(){$("#button-cart-sticky").button("reset")},success:function(json){if($(".alert, .text-danger").remove(),$(".form-group").removeClass("has-error"),json.error){if(json.error.option)for(i in json.error.option){var element=$("#input-option"+i.replace("_","-"));element.parent().hasClass("input-group")?element.parent().after('<div class="text-danger">'+json.error.option[i]+"</div>"):element.after('<div class="text-danger">'+json.error.option[i]+"</div>")}json.error.recurring&&$("select[name='recurring_id']").after('<div class="text-danger">'+json.error.recurring+"</div>"),$(".text-danger").parent().addClass("has-error")}toastr.success("Congratulation! Your item has been added."),$.getJSON("/cart.js",function(cart2){load(cart2)}),$("html, body").animate({scrollTop:0},"slow")},error:function(xhr,ajaxOptions,thrownError){xhr.status==422?toastr.warning("Item variant already added to the cart."):alert(thrownError+"\r\n"+xhr.statusText+"\r\n"+xhr.responseText)}})}),$("#button-cart-buy").on("click",function(e){e.preventDefault(),$.ajax({url:"/cart/add.js",type:"post",data:$("#form_buy input[type='text'], #form_buy select"),dataType:"json",beforeSend:function(){$("#button-cart-buy").button("loading")},complete:function(){$("#button-cart-buy").button("reset")},success:function(json){if($(".alert, .text-danger").remove(),$(".form-group").removeClass("has-error"),json.error){if(json.error.option)for(i in json.error.option){var element=$("#input-option"+i.replace("_","-"));element.parent().hasClass("input-group")?element.parent().after('<div class="text-danger">'+json.error.option[i]+"</div>"):element.after('<div class="text-danger">'+json.error.option[i]+"</div>")}json.error.recurring&&$("select[name='recurring_id']").after('<div class="text-danger">'+json.error.recurring+"</div>"),$(".text-danger").parent().addClass("has-error")}$.getJSON("/cart.js",function(cart2){window.top.location.href="/checkout"})},error:function(xhr,ajaxOptions,thrownError){xhr.status==422?toastr.warning("Item variant already added to the cart."):alert(thrownError+"\r\n"+xhr.statusText+"\r\n"+xhr.responseText)}})});var headerSpaceH=$("header").outerHeight(!0);$("header").after('<div class="headerSpace unvisible" style="height:'+headerSpaceH+'px;"></div>');var currentP=0,stickyOffset=0,stickyOffset1=0;stickyOffset=$("header").offset().top,stickyOffset+=$("header").outerHeight(),stickyOffset+=30,isEmpty($("#product-product"))||(stickyOffset1=$("#form_buy").offset().top,stickyOffset1+=$("#form_buy").outerHeight()),$(window).scroll(function(){var headerH=$("header").height(),scrollP=$(window).scrollTop(),winInnW=window.innerWidth;scrollP!=currentP&&(winInnW>991&&(scrollP>=stickyOffset?($(".fix").addClass("fix-header"),$(".headerSpace").removeClass("unvisible")):($(".fix").removeClass("fix-header"),$(".headerSpace").addClass("unvisible"))),isEmpty($("#product-product"))||(scrollP>=stickyOffset1?($(".form_buy_sticky").addClass("fix-header2"),$(".form_buy_sticky").addClass("fix-header1"),$("html").css("padding-bottom","64px")):($(".form_buy_sticky").removeClass("fix-header1"),$(".form_buy_sticky").removeClass("fix-header2"),$("html").css("padding-bottom","0px"))),currentP=$(window).scrollTop())}),isEmpty($("#product"))||$("#product .option-container").addClass("has-option"),isEmpty($("#product2"))||$("#product2 .option-container").addClass("has-option"),$("header").after('<div class="breadcrumbs"><div class="container"></div></div>');var breadcrumb=$("ul.breadcrumb"),breadcrumbs_container=$(".breadcrumbs .container"),breadcrumbs=$(".breadcrumbs");if(isEmpty($("body.common-home"))){if(isEmpty($("#content > h1")))if(isEmpty($("#content h1:first-of-type")))if(isEmpty($("#content h2:first-of-type")))var page_title=$("#content h3:first-of-type");else var page_title=$("#content h2:first-of-type");else var page_title=$("#content h1:first-of-type");else var page_title=$("#content > h1");page_title.prependTo(breadcrumbs)}breadcrumb.appendTo(breadcrumbs_container),$(".hd3").length&&breadcrumbs.addClass("hd3"),$(".text-danger").each(function(){var element=$(this).parent().parent();element.hasClass("form-group")&&element.addClass("has-error")}),$("#search input[name='q']").parent().find("button").on("click",function(){var url="/search",value2=$("header #search input[name='q']").val();if(value2=="Search all products..."||value2=="")return jQuery("#search-by-category input[name='q']").focus(),!1;url+="?type=product&q="+encodeURIComponent(value2),location=url}),$("#search input[name='q']").on("keydown",function(e){e.keyCode==13&&$("header #search input[name='q']").parent().find("button").trigger("click")}),$("#menu .dropdown-menu").each(function(){var menu=$("#menu").offset(),dropdown=$(this).parent().offset(),i2=dropdown.left+$(this).outerWidth()-(menu.left+$("#menu").outerWidth());i2>0&&$(this).css("margin-left","-"+(i2+10)+"px")}),$("#list-view").click(function(){$("#content .product-grid > .clearfix").remove(),$("#content .row > .product-grid").attr("class","product-layout product-list col-xs-12 product-item"),$("#grid-view").removeClass("active"),$("#list-view").addClass("active"),$(".product-item .item").each(function(){var caption=$(this).find(".caption");$(this).find(".action-links").appendTo(caption)}),localStorage.setItem("display","list"),localStorage.setItem("type","none")}),$("#grid-view").click(function(){var cols=$("#column-right, #column-left").length;cols==2?$("#content .product-list").attr("class","product-layout product-grid grid-style col-lg-6 col-md-6 col-sm-6 col-xs-6 product-item"):cols==1?$("#content .product-list").attr("class","product-layout product-grid grid-style col-lg-4 col-md-4 col-sm-6 col-xs-6 product-item"):$("#content .product-list").attr("class","product-layout product-grid grid-style col-lg-3 col-md-3 col-sm-6 col-xs-6 product-item"),$("#list-view").removeClass("active"),$("#grid-view").addClass("active"),$(".product-item .item").each(function(){var images_container=$(this).find(".images-container");$(this).find(".action-links").appendTo(images_container)}),localStorage.setItem("display","grid"),localStorage.setItem("type","none")}),localStorage.getItem("display")=="list"?($("#list-view").trigger("click"),$("#list-view").addClass("active")):($("#grid-view").trigger("click"),$("#grid-view").addClass("active")),$(".grid-style .item").mouseover(function(){$(this).closest(".grid-style").addClass("active")}),$(".grid-style .item").mouseout(function(){$(this).closest(".grid-style").removeClass("active")}),$(document).on("keydown","#collapse-checkout-option input[name='email'], #collapse-checkout-option input[name='password']",function(e){e.keyCode==13&&$("#collapse-checkout-option #button-login").trigger("click")}),$("[data-toggle='tooltip']").tooltip({container:"body"}),$(document).ajaxStop(function(){$("[data-toggle='tooltip']").tooltip({container:"body"})})});var cart={add:function(product_id,quantity){$.ajax({url:"/cart/add.js",type:"post",data:"id="+product_id+"&quantity="+(typeof quantity!="undefined"?quantity:1),dataType:"json",beforeSend:function(){var btn=$(this);$(".btn-cart > .button").button("loading")},complete:function(){$(".btn-cart > .button").button("reset")},success:function(json){$(".alert, .text-danger").remove(),json.redirect&&(location=json.redirect),toastr.success("Congratulation! Your item has been added."),$.getJSON("/cart.js",function(cart2){load(cart2)})},error:function(xhr,ajaxOptions,thrownError){xhr.status==422?toastr.warning("Item variant already added to the cart."):alert(thrownError+"\r\n"+xhr.statusText+"\r\n"+xhr.responseText)}})},remove:function(key){$.ajax({url:"/cart/update.js",type:"post",data:"updates["+key+"]=0",dataType:"json",beforeSend:function(){},success:function(json){$("#cart > button").button("reset"),getURLVar("route")=="/cart"||getURLVar("route")=="/checkout"?location="/cart":setTimeout(function(){load(json)},5)},error:function(xhr,ajaxOptions,thrownError){alert(xhr.responseText)}})}};function load(cart2){$("#cart .dropdown-menu > li:first-child .table > tbody > tr").remove(),$.each(cart2.items,function(index,cartItem){var line=index+1,cents="";cartItem.price%100<10&&(cents="0");var price=parseInt(cartItem.price/100)+"."+cents+cartItem.price%100,cartRemove="onclick=\"cart.remove('"+cartItem.id+"')\"",cartItem="<tr><td class='text-center'><a href='"+cartItem.url+"' title='"+cartItem.title+"'><img class='cart-image' src='"+cartItem.image+"' alt='"+cartItem.title+"' title='"+cartItem.title+"'></a></td><td class='text-left info-item'><a class='cart-name' href='"+cartItem.url+"'>"+cartItem.title+"</a><p class='cart-quantity'>"+cartItem.quantity+" &times;</p><p class='cart-price'><span class='money'>"+Shopify.formatMoney(price)+"</span></p></td><td class='text-center cart-close'><button type='button' "+cartRemove+"' title='Remove' class='btn btn-danger btn-xs'><i class='ion-android-close'></i></button></td></tr>";$("#cart .dropdown-menu > li:first-child .table > tbody").append(cartItem)}),cart2.item_count<1?($("#cart .dropdown-menu > li:first-child .table > tbody").append('<p class="text-center cart-empty">Your shopping cart is empty!</p>'),$("#cart .dropdown-menu li:not(:first-child):last-child").removeClass("show"),$("#cart .dropdown-menu li:not(:first-child):last-child").addClass("hide")):($("#cart .dropdown-menu p.cart-empty").remove(),$("#cart .dropdown-menu li:not(:first-child):last-child").removeClass("hide"),$("#cart .dropdown-menu li:not(:first-child):last-child").addClass("show")),$("#cart > button #cart-total .txt_number").html(cart2.item_count),$("#cart > button .total-price").html("<span class=money>"+Shopify.formatMoney(cart2.total_price)+'<i class="fas fa-chevron-down"></i></span>'),$("#cart-subtotal").html("<span class=money>"+Shopify.formatMoney(cart2.total_price)+"</span>")}$(document).delegate(".agree","click",function(e){e.preventDefault(),$("#modal-agree").remove();var element=this;$.ajax({url:$(element).attr("href"),type:"get",dataType:"html",success:function(data){html='<div id="modal-agree" class="modal">',html+='  <div class="modal-dialog">',html+='    <div class="modal-content">',html+='      <div class="modal-header">',html+='        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',html+='        <h4 class="modal-title">'+$(element).text()+"</h4>",html+="      </div>",html+='      <div class="modal-body">'+data+"</div>",html+="    </div>",html+="  </div>",html+="</div>",$("body").append(html),$("#modal-agree").modal("show")}})}),function($2){$2.fn.autocomplete=function(option){return this.each(function(){this.timer=null,this.items=new Array,$2.extend(this,option),$2(this).attr("autocomplete","off"),$2(this).on("focus",function(){this.request()}),$2(this).on("blur",function(){setTimeout(function(object){object.hide()},200,this)}),$2(this).on("keydown",function(event){switch(event.keyCode){case 27:this.hide();break;default:this.request();break}}),this.click=function(event){event.preventDefault(),value=$2(event.target).parent().attr("data-value"),value&&this.items[value]&&this.select(this.items[value])},this.show=function(){var pos=$2(this).position();$2(this).siblings("ul.dropdown-menu").css({top:pos.top+$2(this).outerHeight(),left:pos.left}),$2(this).siblings("ul.dropdown-menu").show()},this.hide=function(){$2(this).siblings("ul.dropdown-menu").hide()},this.request=function(){clearTimeout(this.timer),this.timer=setTimeout(function(object){object.source($2(object).val(),$2.proxy(object.response,object))},200,this)},this.response=function(json){if(html="",json.length){for(i=0;i<json.length;i++)this.items[json[i].value]=json[i];for(i=0;i<json.length;i++)json[i].category||(html+='<li data-value="'+json[i].value+'"><a href="#">'+json[i].label+"</a></li>");var category=new Array;for(i=0;i<json.length;i++)json[i].category&&(category[json[i].category]||(category[json[i].category]=new Array,category[json[i].category].name=json[i].category,category[json[i].category].item=new Array),category[json[i].category].item.push(json[i]));for(i in category)for(html+='<li class="dropdown-header">'+category[i].name+"</li>",j=0;j<category[i].item.length;j++)html+='<li data-value="'+category[i].item[j].value+'"><a href="#">&nbsp;&nbsp;&nbsp;'+category[i].item[j].label+"</a></li>"}html?this.show():this.hide(),$2(this).siblings("ul.dropdown-menu").html(html)},$2(this).after('<ul class="dropdown-menu"></ul>'),$2(this).siblings("ul.dropdown-menu").delegate("a","click",$2.proxy(this.click,this))})}}(window.jQuery);
//# sourceMappingURL=/cdn/shop/t/10/assets/common.js.map?v=154301971868532743661652946378
