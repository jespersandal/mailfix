function validMail(address) {
    /* checks if a string provided is a valid email address. It returns true, if the address has a valid format, and false if it doesn't.

       Error messages are logged to the console.

       Supports these formats:
      
       name@domain.top
       name.lastname@domain.top
       name.middle.lastname@domain.top
       name@sub.domain.top
       name.lastname@sub.domain.top
       name.middle.lastname@sub.domain.top

       Supports both generic and country top domains (e.g. ".com" or ".info" or ".dk")
    */

    // First, we check if the argument is a String:

    if (typeof(address) != 'string') {
        console.log("The argument provided is not a String, but a " + typeof(address) + " [validMail]");
        return false; // Since the parameter must be a String, the function returns false.
    }

    // To provide good error reporting, we should check that the string is not empty, before we proceed:

    if (address == '') {
        console.log("The argument provided is an empty String [validMail]");
        return false;
    }

    /* Next, we check if it meets the basic requirements:
       1) It must contain an @ sign.
       2) It must not contain any spaces.
          (However, it may be OK to ignore spaces at the beginning or the end)
       3) There must be at least 1 period somewhere after the @ sign, and there must be at least 1 character
          before the period.
       4) There must be at least 2 characters after the last period.
       5) The domain part may not contain any characters other than alphanumeric and "-" (apart from the periods).
       
       We break these checks up for readability. In the order provided above, it may also improve performance
       if we can catch the most common mistakes first and skip the other checks.
    */
    
    // The regular expressions below could be consolidated into a single expression. However, it is not easy to avoid false negatives/positives. 
    // So to reduce complexity, I break it down into smaller pieces. See also https://www.regular-expressions.info/email.html
    // This also allows for more detailed and helpful error messages.
    
    // We can now contruct our first regular expressions:

    let atSign = /@/;  // will match the single character @.
    let space = /\s+/;  // will match any blank spaces (including line breaks).

    // .test() method of a RegExp will return true, if the regular expression matches anything in the string.

    if (atSign.test(address) == false) {
        console.log("The email address \'" + address + "\' does not appear to contain an \'@\' sign. A valid email address must contain an @ sign. [validMail]");
        return false;  
    }

    if (space.test(address) == true) {
        console.log("The email address \'" + address + "\' appears to contain a blank space. A valid email address must not contain any spaces. [validMail]");
        return false;
    }

    let topDomain = /\w\.\w{2,}$/;  // We check if there is at least 1 alphanumeric character before the last period and at least 2 after, matching from the end of the string.

    if (topDomain.test(address) == false) {
        console.log("The email address \'" + address + "\' appears to use an invalid domain name. No top domain was found. [validMail]");
        return false;
    }

    let name = /.+\@/;

    if (name.test(address) == false) {
        console.log("The email address \'" + address + "\' is missing a recipient name (the part before the @ sign). [validMail]");
        return false;
    }

    let domain = /\@[A-Za-z0-9\.\-]*$/;  // We check that the domain part only contains valid characters, matching from the end of the string up to and including the @ sign.

    if (domain.test(address) == false) {
        console.log("The email address \'" + address + "\' appears to use an invalid domain name. An invalid character was found. Only A-z, 0-9, \'.\', \'-\' are allowed. [validMail]");
        return false
    }

    // At this point, we have checked for all the basic requirements. If they were not met, the function returned false.

    return true;  // We are confident that the provided address is a valid email address.
}