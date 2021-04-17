# mailfix

## Purpose
This is a simple webapplication that is intended to do a very simple thing: If you have a list of email addresses in a spreadsheet, or that the list is otherwise formated in such a way that each address is on a separate line, this tool will remove the line breaks and create a list of addresses separated by semicolons.

The new list can be copied into email applications.

The whole problem could be solved in about three lines of code, but just as an exercise, I decided to add some more general functionality, in case I need it for another purpose. I created a function for validating that a string is a valid email address, which might come in handy later.
