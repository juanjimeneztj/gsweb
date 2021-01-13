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