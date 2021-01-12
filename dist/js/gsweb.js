// Function to disable button in the SMS forms
$("body").on('click','.sms-check-checkbox', function() {  
    if($('.sms-check-checkbox').prop('checked')) { 
        $(this).parent().parent().find('button.btn').removeClass('sms-disabled'); 
        $(this).parent().parent().find('button.btn').prop('disabled', false);                         
    } else {  
        $(this).parent().parent().find('button.btn').addClass('sms-disabled'); 
        $(this).parent().parent().find('button.btn').prop('disabled', true); 
    }  
});  