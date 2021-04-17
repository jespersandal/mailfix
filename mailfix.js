function mailFix(listContent) {

    let fixedMailListStr = '';

    // First we must separate the addresses in the original string (listContent):

    // In case the list is separated by commas or semicolons:

    let separators = /[\,\;]/;
    let fixedList = listContent.replace(separators, ' ');

    // Now, we split the list everywhere there's either a space or a line break and add the results to the array:

    let spaceLines = /\S+/g;

    let rawMailList = fixedList.match(spaceLines);

    // We loop through the rawMailList to check that everything is a properly formated email address and add them to the list:

    for (i = 0; i < rawMailList.length; i++) {
        let address = rawMailList[i];
        if (validMail(address)) {
            address = emailPrep(address);
            fixedMailListStr = fixedMailListStr.concat(address);
        }
    }

    fixedMailListStr = fixedMailListStr.trimStart();

    return fixedMailListStr;

}