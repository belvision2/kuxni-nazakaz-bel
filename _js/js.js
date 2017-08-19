$(window).load(function() {
	var phone=$(".phone-block .td a").html();
	phone=phone.replace("<span>","");
	phone=phone.replace("</span>","");
	phone=phone.replace("29","(29)");
	$("span[itemprop=telephone]").html(phone);
});

var fl_search = true;

$(document).ready(function() {
	$('#search_top').focus(function() {
		if (fl_search) {
			$(this).val('');		
			fl_search = false;
		}
	});
	$('#frm_search_top').submit(function() {
		if ($('#search_top').val()!='' && !fl_search) {
			return true;
		} else {
			$('#search_top').addClass('error').focus();
			return false;
		}
	});
});

function flash(version, filename, name, width, height, wmode, bgcolor, menu, flashvars, salign) {
	!salign ? salign="LT":"";
	document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+version+'" width="'+width+'" height="'+height+'" id="'+name+'" align="middle">');
	document.write('<param name="allowScriptAccess" value="sameDomain"/>');
	document.write('<param name="allowFullScreen" value="true"/>');
	document.write('<param name="wmode" value="'+wmode+'"/>');
	document.write('<!-- Flash FIX v0.4 | www.mega.by -->');
	document.write('<param name="bgcolor" value="'+bgcolor+'"/>');
	document.write('<param name="salign" value="'+salign+'"/>');
	document.write('<param name="movie" value="'+filename+'"/>');
	document.write('<param name="menu" value="'+menu+'"/>');
	document.write('<param name="quality" value="high"/>');
	document.write('<param name="flashvars" value="'+flashvars+'"/>');
	document.write('<embed src="'+filename+'" wmode="'+wmode+'" menu="'+menu+'" quality="high" flashvars="'+flashvars+'" salign="'+salign+'" width="'+width+'" height="'+height+'" bgcolor="'+bgcolor+'" name="'+name+'" align="middle" allowScriptAccess="sameDomain" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflash"/>');
	document.write('</object>');
	return true;
}

function flash_innerHTML(version, filename, name, width, height, wmode, bgcolor, menu, flashvars, salign) {
	!salign ? salign="LT":"";
	htmlText='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+version+'" width="'+width+'" height="'+height+'" id="'+name+'" align="middle">'
	+'<param name="allowScriptAccess" value="sameDomain"/>'
	+'<param name="allowFullScreen" value="true"/>'
	+'<param name="wmode" value="'+wmode+'"/>'
	+'<!-- Flash FIX v0.4 | www.mega.by -->'
	+'<param name="bgcolor" value="'+bgcolor+'"/>'
	+'<param name="salign" value="'+salign+'"/>'
	+'<param name="movie" value="'+filename+'"/>'
	+'<param name="menu" value="'+menu+'"/>'
	+'<param name="quality" value="high"/>'
	+'<param name="flashvars" value="'+flashvars+'"/>'
	+'<embed src="'+filename+'" wmode="'+wmode+'" menu="'+menu+'" quality="high" flashvars="'+flashvars+'" salign="'+salign+'" width="'+width+'" height="'+height+'" bgcolor="'+bgcolor+'" name="'+name+'" align="middle" allowScriptAccess="sameDomain" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflash"/>'
	+'</object>';
	return htmlText;
}

function email(name, domain, tld, text, subject) {
	if(subject) {	
	} else {
		subject='Письмо с сайта';
	}
	if(text) {
		if(subject) {
			document.write('<a href="mailto:'+name+'@'+domain+'.'+tld+'?Subject='+subject+'">'+text+'</a>');
		} else {
		}
	} else {
		document.write('<a href="mailto:'+name+'@'+domain+'.'+tld+'?Subject='+subject+'">'+name+'@'+domain+'.'+tld+'</a>');
	}
}

function f_cart(id) {
	$('#product_id').val(id);
	$('#frm_cart').submit();
}

function f_set_cookie(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function f_format_price(price) {
	price = price.toString();
	length = price.length;
	var tmp = '';
	for (i=1;i<=length;i++) {
		tmp = (i%3==0 && i!=length ? ' ' : '')+price.charAt(length-i)+tmp;
	}
	return tmp;
}

function f_close_popup() {
	$('#div_opacity').fadeOut(300);
	if ($('#div_call_order').is(':visible')) {
		$('#div_call_order').slideUp(300);
	}
	if ($('#div_designer_order').is(':visible')) {
		$('#div_designer_order').slideUp(300);
	}
	if ($('#div_discount').is(':visible')) {
		$('#div_discount').slideUp(300);
	}
	if ($('#div_rules').is(':visible')) {
		$('#div_rules').slideUp(300);
	}
	if ($('#div_flyer').is(':visible')) {
		$('#div_flyer').slideUp(300);
	}
	if ($('#div_meet_order').is(':visible')) {
		$('#div_meet_order').slideUp(300);
	}
	if ($('#div_calc').is(':visible')) {
		$('#div_calc').slideUp(300);
	}	
}

function f_order_designer(id) {
	if (id != 0) {
		ga('send','event','call_des','designer','open');
	} else {
		ga('send','event','call_des','all','open');
	}
	$("#designer_designer [value='"+id+"']").attr("selected", "selected");
	$('#div_opacity').fadeIn(300);
	$('#div_designer_order').slideDown(300);
}

function f_meet_designer(id) {
	var tmp = $("#meet_designer [value='"+id+"']");
	tmp.attr("selected", "selected");
	$('#meet_address').val(tmp.data('address'));
	$('#meet_tel').val(tmp.data('tel'));
	$('#div_opacity').fadeIn(300);
	$('#div_meet_order').slideDown(300);
}