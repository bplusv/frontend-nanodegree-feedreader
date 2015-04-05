# Project FeedReader Testing

This project tests an existing application, a RSS feed reader.  
The tests use the Jasmine 2.1 javascript testing library.

### Running the tests
In order to run the unit tests, please open the file index.html in a modern web browser  
(e.g., Internet Explorer >= 9, Google Chrome, Firefox or Safari).

### Editing the Tests
To view or edit the actual code for the tests open the file: 'jasmine/spec/feedreader.js'.

### Aditional Tests
* On existing RSS Feeds Suite: add test to check the feeds are displayed on the sidebar menu.
* New Feature Request: display the author and published date for each feed entry.
* New Feature Request: should be able to setup the number of feed entries to load.

### Notes
Instead of checking for the content on the DOM in a specified format, lets just check for the CSS classes as an interface or contract.  
This way, the tests don't get too coupled or dependent of a particular implementation or format. By being loosely coupled, the tests become refactoring friendly.

### Consulted Materials
* [Jasmine](http://jasmine.github.io/) - Behavior-Driven Testing Framework
* [Jasmine Docs](http://jasmine.github.io/2.1/introduction.html) - Jasmine Documentation