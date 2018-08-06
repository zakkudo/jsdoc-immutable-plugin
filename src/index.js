const path = require('path');


/**
* Make working with Immutable types in jsdoc enjoyable.
*
* Why use this?
*
* - Generates standard types for jsdoc so you can set `allowUnknownTags`
*   to `false`
* - Includes links to all of the documentation for the different types on the
*   official site
* - Includes short official descriptions from the official site inline
*
*
* Install with:
*
* ```console
* yarn add --dev @zakkudo/jsdoc-immutable-plugin
* ```
*
* Add to your jsdoc config with:
*
* ```js
*     "plugins": [
*         "@zakkudo/jsdoc-immutable-plugin"
*     ],
* ```
*
* Included Types:
*
* - `Immutable`
* - `Immutable.Map`
* - `Immutable.List`
* - `Immutable.OrderedMap`
* - `Immutable.Set`
* - `Immutable.OrderedSet`
* - `Immutable.Stack`
*
* @example <caption>Tag your Maps</caption>
* /**
*  * Generates an empty map. I'm not sure why you would do this...
*  * @return {Immutable.Map} The new map
*  *\/
* export default function generateMap() {
*     return fromJS({});
* }
*
* @example <caption>Tag your Lists</caption>
* /**
*  * Returns a list of names
*  * @return {Immutable.List<String>} The generated list
*  *\/
* export default function getListOfNames() {
*     return fromJS(['Jim', 'George', 'Bill']);
* }
* @module jsdoc-immutable-plugin
*/
exports.handlers = {
  parseBegin: function(e) {
      const files = e.sourcefiles = e.sourcefiles || [];

      files.unshift(path.resolve(__dirname, 'typedefs.js'));
  }
}
