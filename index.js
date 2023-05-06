
function validPhoneNumber(phoneNumber) {
    
    try {
        if (phoneNumber.length !== 9 || isNaN(phoneNumber)){
            alert ("The Phone number is invalid");
            throw( "The Phone number is invalid")
        } else{ 
        console.log("Phone number: " + phoneNumber )
         }

} catch (err){
    console.error(err);
}
}

