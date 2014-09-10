Bootstrap 3 Typeahead
=====================

For simple autocomplete use cases there seems to be nothing wrong with the dropped typeahead plugin. Here you will find the typeahead autocomplete plugin for Twitter's Bootstrap 2 ready to use with Twitter's Bootstrap 3. The original code is written by [@mdo](http://twitter.com/mdo) and [@fat](http://twitter.com/fat).

Users who migrate their website or app from Twitter's Bootstrap 2 to Bootstrap 3 can also use this plugin to keep their current autocomplete functions. See for a complete list of migrations steps: [Migrate your templates from Twitter Bootstrap 2.x to Twitter Bootstrap 3](http://bassjobsen.weblogs.fm/migrate-your-templates-from-twitter-bootstrap-2-x-to-twitter-bootstrap-3/)

With Twitter Bootstrap 3 the typeahead plugin had been dropped. [@mdo](http://twitter.com/mdo) says: "in favor of folks using [Twitter's typeahead](https://github.com/twitter/typeahead.js). Twitter's typeahead has more features than the old bootstrap-typeahead.js and less bugs." Twitter's typeahead don't work direct with Bootstrap 3. The DOM structure of the dropdown menu used by `typeahead.js` differs from the DOM structure of the Bootstrap dropdown menu. You'll need to load some additional CSS in order to get the `typeahead.js` dropdown menu to fit the default Bootstrap's theme. Try [extended Bootstrap's LESS](https://github.com/bassjobsen/typeahead.js-bootstrap-css) or if your are looking for a more a more extended version try: [typeahead.js-bootstrap3.less](https://github.com/hyspace/typeahead.js-bootstrap3.less/blob/master/typeahead.less).

~~`Typeahead.js` doesn't seem ready for the new Twitter Bootstrap 3 at the moment. Code is not up to date and fixes are need. See also:
[Typeahead problems with Bootstrap 3.0 RC1](http://stackoverflow.com/questions/18167246/typeahead-problems-with-bootstrap-3-0-rc1).~~

Download
========

 - Download the latest [bootstrap3-typeahead.js](https://github.com/bassjobsen/Bootstrap-3-Typeahead/blob/master/bootstrap3-typeahead.js) or [bootstrap3-typeahead-min.js](https://github.com/bassjobsen/Bootstrap-3-Typeahead/blob/master/bootstrap3-typeahead-min.js).

 - Include it in your source after jQuery and Bootstrap Javascript.
 
Full integration with Bootstrap 3 Typeahead
-------------------------------------------
Download the latest version of Boostrap from [Bootstrap](https://github.com/twbs/bootstrap/archive/master.zip). Copy `bootstrap3-typeahead.js` to the js/ folder. Edit `gruntfile.js` and add `bootstrap3-typeahead.js` to the plugins' list.
Build your own version with typeahead with `grunt dist`.

CSS
===
There is no additional css required to use the plugin. Bootstrap's css contains all required styles in the `.dropdown-menu` class. The original CSS add a `z-index` of 1051 to the dropdownmenu via the typeahead class. You could add this if you need it.
`.typeahead { z-index: 1051;}` (less or css).

Usage
=====

	<input type="text" data-provide="typeahead">

You'll want to set `autocomplete="off"` to prevent default browser menus from appearing over the Bootstrap typeahead dropdown.

Via data attributes
-------------------
Add data attributes to register an element with typeahead functionality as shown in the example above.

Via JavaScript
--------------

Call the typeahead manually with:

	$('.typeahead').typeahead()

Destroys previously initialized typeaheads. This entails reverting DOM modifications and removing event handlers:	
	
	$('.typeahead').typeahead('destroy')

Also read: [How to Use JSON Objects With Twitter Bootstrap Typeahead](http://tatiyants.com/how-to-use-json-objects-with-twitter-bootstrap-typeahead/)	

Javascript Example
=============

Loading a collection
--------------------

	$.get('example_collection.json', function(data){
		$("#name").typeahead({ source:data });
	},'json');
	//example_collection.json
	// ["item1","item2","item3"]

Options
=======

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-source=""`.

<table class="table table-bordered table-striped">
              <thead>
               <tr>
                 <th style="width: 100px;">Name</th>
                 <th style="width: 50px;">type</th>
                 <th style="width: 100px;">default</th>
                 <th>description</th>
               </tr>
              </thead>
              <tbody>
                <tr>
                 <td>source</td>
                 <td>array, function</td>
                 <td>[ ]</td>
                 <td>The data source to query against. May be an array of strings or a function. The function accepts two arguments, the <code>query</code> value in the input field and the <code>process</code> callback. The function may be used synchronously by returning the data source directly or asynchronously via the <code>process</code> callback's single argument.</td>
               </tr>
               <tr>
                 <td>items</td>
                 <td>number</td>
                 <td>8</td>
                 <td>The max number of items to display in the dropdown. Can also be set to 'all'</td>
               </tr>
               <tr>
                 <td>minLength</td>
                 <td>number</td>
                 <td>1</td>
                 <td>The minimum character length needed before triggering autocomplete suggestions. You can set it to 0 so suggestion are shown even when there is no text when lookup function is called.</td>
               </tr>
               <tr>
                 <td>showHintOnFocus</td>
                 <td>boolean</td>
                 <td>false</td>
                 <td>If hints should be shown when applicable as soon as the input gets focus.</td>
               </tr>
              <tr>
                 <td>scrollHeight</td>
                 <td>number, function</td>
                 <td>0</td>
                 <td>Number of pixels the scrollable parent container scrolled down (scrolled out the viewport).</td>
               </tr>
               <tr>
                 <td>matcher</td>
                 <td>function</td>
                 <td>case insensitive</td>
                 <td>The method used to determine if a query matches an item. Accepts a single argument, the <code>item</code> against which to test the query. Access the current query with <code>this.query</code>. Return a boolean <code>true</code> if query is a match.</td>
               </tr>
               <tr>
                 <td>sorter</td>
                 <td>function</td>
                 <td>exact match,<br> case sensitive,<br> case insensitive</td>
                 <td>Method used to sort autocomplete results. Accepts a single argument <code>items</code> and has the scope of the typeahead instance. Reference the current query with <code>this.query</code>.</td>
               </tr>
               <tr>
                 <td>updater</td>
                 <td>function</td>
                 <td>returns selected item</td>
                 <td>The method used to return selected item. Accepts a single argument, the <code>item</code> and has the scope of the typeahead instance.</td>
               </tr>
               <tr>
                 <td>highlighter</td>
                 <td>function</td>
                 <td>highlights all default matches</td>
                 <td>Method used to highlight autocomplete results. Accepts a single argument <code>item</code> and has the scope of the typeahead instance. Should return html.</td>
               </tr>
              <tr>
                 <td>autoSelect</td>
                 <td>boolean</td>
                 <td>true</td>
                 <td>Allows you to dictate whether or not the first suggestion is selected automatically. Turning autoselect off also means that the input won't clear if nothing is selected and <kbd>enter</kbd> or <kbd>tab</kbd> is hit.</td>
               </tr>
              </tbody>
            </table>

Methods
=======

	.typeahead(options)
	.lookup: To trigger the lookup function externally

Initializes an input with a typeahead.

Bower
=====

To use with [Bower](http://bower.io/). Add to your bower.json file:


	{
            "name": "MyProject",
            "dependencies": {
            "bootstrap3-typeahead": "git@github.com:bassjobsen/Bootstrap-3-Typeahead.git#master"
            }
       }

Bloodhound
==========	
[Bloodhound](https://github.com/twitter/typeahead.js/blob/master/doc/bloodhound.md) is the [typeahead.js](https://github.com/twitter/typeahead.js) suggestion engine, since version 0.10.0. Bloodhound is robust, flexible, and offers advanced functionalities such as prefetching, intelligent caching, fast lookups, and backfilling with remote data. To use Bloodhound with Bootstrap-3-Typeahead:

	// instantiate the bloodhound suggestion engine
	var numbers = new Bloodhound({
	datumTokenizer: Bloodhound.tokenizers.whitespace,
	queryTokenizer: Bloodhound.tokenizers.whitespace,
	local:  ["(A)labama","Alaska","Arizona","Arkansas","Arkansas2","Barkansas"]
	});
	 
	// initialize the bloodhound suggestion engine
	numbers.initialize();

	$('.typeahead').typeahead(
	{
	items: 4,
	source:numbers.ttAdapter()	
	});
	

Bootstrap Tags Input
====================
[Bootstrap Tags Input](http://timschlechter.github.io/bootstrap-tagsinput/examples/) is a jQuery plugin providing a Twitter Bootstrap user interface for managing tags. Bootstrap Tags Input has a typeahead option which allows you to set the source:

    $('input').tagsinput({
      typeahead: {
        source: ['Amsterdam', 'Washington', 'Sydney', 'Beijing', 'Cairo']
      }
    });

or

    $('input').tagsinput({
      typeahead: {                  
        source: function(query) {
          return $.get('http://someservice.com');
        }
      }
    });

See also: https://github.com/bassjobsen/Bootstrap-3-Typeahead/issues/40	
