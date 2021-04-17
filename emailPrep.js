function emailPrep(address) {
    // This function trims any additional spaces and adds a semi-colon to prepare an address
    // to be added to a list.

    // First check that the argument is a non-empty String:

    if (typeof(address) != 'string' || address == '') {
        console.log("The argument is either not a String or it is an empty String [emailPrep]");
        return '';  // 
    }

    // Then we remove any spaces at the beginning and end of the string:

    address = address.trim();

    // Then we append the string with a semi-colon, and prepend it with a single space:

    address = ' ' + address + ';';

    return address;
}