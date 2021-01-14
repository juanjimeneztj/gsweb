$(document).ready(function(){
    $('.sip-nj-background-image-png').each(function(){
        $(this).css('background-image','url('+$(this).attr('sip-background-image')+')');
    });
    $('.sip-nj-list-icon-check').each(function(ele){
        let srcField = $(this);
        srcField.addClass('sip-gsweb-list-'+ele);
        if(srcField.attr('sip-list-icon-space')){
            srcField.children('li').css('padding-left', srcField.attr('sip-list-icon-space')+'px');
        }else{
            srcField.children('li').css('padding-left', '35px');
        }
        if(srcField.attr('sip-list-icon-size')){
            $('head').append('<style>.sip-nj-list-icon-check.sip-gsweb-list-'+ele+' > li:before{ font-size: ' + srcField.attr('sip-list-icon-size') + 'px;}</style>');
        }else{
            $('head').append('<style>.sip-nj-list-icon-check.sip-gsweb-list-'+ele+' > li:before{ font-size: 22px;}</style>');
        }
        if(srcField.attr('sip-list-icon')){
            $('head').append('<style>.sip-nj-list-icon-check.sip-gsweb-list-'+ele+' > li:before{ content: "' + srcField.attr('sip-list-icon') + '";}</style>');
        }else{
            $('head').append('<style>.sip-nj-list-icon-check.sip-gsweb-list-'+ele+' > li:before{ content: "";}</style>');
        }
    });
});
// Function to disable button in the SMS forms
$("body").on('click','.sms-check-checkbox', function() {  
    let srcField = $(this);
    if(srcField.prop('checked')) { 
        srcField.parent().parent().parent().find('button.btn').removeClass('sms-disabled'); 
        srcField.parent().parent().parent().find('button.btn').prop('disabled', false);                         
    } else {  
        srcField.parent().parent().parent().find('button.btn').addClass('sms-disabled'); 
        srcField.parent().parent().parent().find('button.btn').prop('disabled', true); 
    }  
});