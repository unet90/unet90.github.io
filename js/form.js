function checkInput(form){form.find(".validation").each(function(){var val=jQuery(this).val();val=val.replace(" ","");if(val!=""){jQuery(this).removeClass("empty_field");}else{jQuery(this).addClass("empty_field");}});}function checkPhone(form){form.find(".phone_input").each(function(){var need_int=jQuery(this).val();need_int=need_int.replace("_","");if(need_int.length==15){jQuery(this).removeClass("empty_int");}else{jQuery(this).addClass("empty_int");}});}function submit_form(el){var form=jQuery("#"+el.id);checkPhone(form);var sizeInt=form.find(".empty_int").size();if(sizeInt>0){alert('Проверка номера');return false;}else{var data=form.serialize();jQuery.ajax({url:"contact.php",type:"POST",data:{info:data},dataType:"json",success:function(resp){if(resp==1){form.html("<p style='font-size: 18px; margin-top: 20px;'>Ваше сообщение отправлено! Ожидайте звонка.</p>");}else{alert("Ошибка");}}});}}jQuery(function(){jQuery("#close-form, #overlay").click(function(){$('.modal-form').animate({opacity:0},200,function(){$(this).css('display','none');$('#overlay').fadeOut(400);});});jQuery(".form-link").click(function(){$('#overlay').fadeIn(400,function(){$('.modal-form').css('display','block').animate({opacity:1},200);});return false;})});