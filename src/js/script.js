$(document).ready(function () {

    $('.form__point-a .form__order-input, .form__point-b .form__order-input').on('click', function () {
        $(this).parent().parent().find('.form__field_focused').removeClass('form__field_focused');
        $(this).parent().addClass('form__field_focused');
    })

    // переключатель контента
    $('.toggle__target').on('click', function () {
        $('.toggle__content.' + $(this).data('toggle-group') ).removeClass('toggle__content_active');
        $('.toggle__content.' + $(this).data('toggle-group') + '.' + $(this).data('toggle-target') ).addClass('toggle__content_active');
        //return false;
    })

    $('.top-navbar__mobile').on('click', function () {
        $(this).toggleClass('open');
        $('.top-navbar__menu').slideToggle()
        return false;
    })

    if( $('.map-container__map').length>0 ){

    }

    $('.form__order-city').select2();
    $('.form__order-time').inputmask("h:s",{ "placeholder": "чч/мм" });//.mask("99:99");
    $('input[type="tel"]').inputmask("+7 (999) 999-99-99");//.mask("99:99");
    $('.form__order-date').ionDatePicker({
        lang: "ru",
        sundayFirst: false,
        years: "80",
        format: "DD.MM.YYYY",
        onClick: function(date){
            //$("#result-1").html("onClick: " + date);
        }
    });

    $('.modal.open').modal('show');

})

$(window).on('scroll', function () {

})

$(window).on('load', function(){
	
	 check_footer();
		
})

$(window).on('resize', function(){


	 check_footer();
		
})

function check_footer(){

    if( $('.map-form-container').height()<=$('.map-container').height() ){
        $('.map-container').css({ height: $(window).height()-80 });
	}else{
        $('.map-container').css({ height: $('.map-form-container').height()+50 });
	}
	
	//$('.footer').show();
}