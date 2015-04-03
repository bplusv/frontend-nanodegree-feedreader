/* feedreader.js
 * This file contains the tests for the feedreader application.
 * Tests use the Jasmine JS library.
 */

$(function() {
    /*
     * Test the RSS Feeds array of objects definition.
     */
    describe('RSS Feeds', function() {

        /*
         * The feeds are defined as an array and is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds).toEqual(jasmine.any(Array));
            expect(allFeeds.length).not.toBe(0);
        });

        /*
         * Each feed has an url property defined and is not empty.
         */
        it('each feed has an url', function() {
            allFeeds.forEach(function(item) {
              expect(item.url).toBeDefined();
              expect(item.url).toEqual(jasmine.any(String));
              expect(item.url.trim().length).not.toBe(0);
            });
        });


        /*
         * Each feed has a name property defined and is not empty.
         */
        it('each feed has a name', function() {
            allFeeds.forEach(function(item) {
              expect(item.name).toBeDefined();
              expect(item.url).toEqual(jasmine.any(String));
              expect(item.name.trim().length).not.toBe(0);
            });
        });
    });


    /* Test the sidebar menu hide and shows correctly. */
    describe('The menu', function() {
        var $body = $('body');
        var $menuIcon = $('.menu-icon-link');

        /*
         * The menu is hidden by default.
         */
        it('should be hidden by default', function() {
            expect($body.hasClass('menu-hidden')).toBe(true);
        });


         /*
          * The menu displays when the menu icon is clicked
          * and hides when clicked again.
          */
        it('should hide/show when menu icon is clicked', function() {
            expect($body.hasClass('menu-hidden')).toBe(true);

            $menuIcon.click();
            expect($body.hasClass('menu-hidden')).toBe(false);

            $menuIcon.click();
            expect($body.hasClass('menu-hidden')).toBe(true);
        });
    });


    /* Test the initial feed loads and displays correctly. */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
          expect($('.feed .entry').length).toBe(0);
          loadFeed(0, function() {
            done();
          });
        });

        /*
         * After the initial feed loads, there is at least a single 
         * .entry element within the .feed container.
         */
        it('should load correctly', function(done) {
          expect($('.feed .entry').length).not.toBe(0);
          done();
        });
    });


    /* Test the selection of a new feed loads and updates content. */
    describe('New Feed Selection', function() {
        var oldTitle,
            oldEntries,
            newTitle,
            newEntries;

        beforeEach(function(done) {
          loadFeed(0, function() {
            oldTitle = $('.header-title').text();
            oldEntries = $('.feed .entry').text();
            done();
          });
        });

        beforeEach(function(done) {
          loadFeed(1, function() {
            newTitle = $('.header-title').text();
            newEntries = $('.feed .entry').text();
            done();
          });
        });

        /*
         * After selecting and loading another feed,
         * the entries within the .feed container are updated.
         */
        it('should update feed entries content', function(done) {
          expect(newTitle).not.toEqual(oldTitle);
          expect(newEntries).not.toEqual(oldEntries);
          done();
        });
     });
}());
