/**
 * <p>
 * Immutable data cannot be changed once created, leading to much simpler
 * application development, no defensive copying, and enabling advanced
 * memoization and change detection techniques with simple logic. Persistent
 * data presents a mutative API which does not update the data in-place, but
 * instead always yields new updated data.
 * </p>
 *
 * <p>
 * <code>Immutable.js</code> provides many Persistent Immutable data structures including:
 * <code>List</code>, <code>Stack</code>, <code>Map</code>,
 * <code>OrderedMap</code>, <code>Set</code>, <code>OrderedSet</code> and <code>Record</code>.
 * </p>
 *
 * <p>
 * These data structures are highly efficient on modern JavaScript VMs by
 * using structural sharing via hash maps tries and vector tries as
 * popularized by Clojure and Scala, minimizing the need to copy or cache data.
 * </p>
 * @typedef Immutable
 * @namespace Immutable
 * @see {@link https://facebook.github.io/immutable-js/}
 */

/**
 * Immutable Map is an unordered <code>Collection.Keyed</code> of <code>(key, value)</code> pairs
 * with <code>O(log32 N)</code> gets and <code>O(log32 N)</code> persistent sets.
 * @typedef Immutable.Map
 * @memberof Immutable
 * @see {@link https://facebook.github.io/immutable-js/docs/#/Map}
 */

/**
 * Lists are ordered indexed dense collections, much like a JavaScript Array.
 * @typedef Immutable.List
 * @memberof Immutable
 * @see {@link https://facebook.github.io/immutable-js/docs/#/List}
 */

/**
 * A type of Map that has the additional guarantee that the iteration order of
 * entries will be the order in which they were <code>set()</code>.
 * @typedef Immutable.OrderedMap
 * @memberof Immutable
 * @see {@link https://facebook.github.io/immutable-js/docs/#/OrderedMap}
 */

/**
 * A Collection of unique values with <code>O(log32 N)</code> adds and has.
 * @typedef Immutable.Set
 * @memberof Immutable
 * @see {@link https://facebook.github.io/immutable-js/docs/#/Set}
 */

/**
 * A type of Set that has the additional guarantee that the iteration order of
 * values will be the order in which they were added.
 * @typedef Immutable.OrderedSet
 * @memberof Immutable
 * @see {@link https://facebook.github.io/immutable-js/docs/#/OrderedSet}
 */

/**
 * Stacks are indexed collections which support very efficient <code>O(1)</code> addition
 * and removal from the front using <code>unshift(v)</code> and <code>shift()</code>.
 * @typedef Immutable.Stack
 * @memberof Immutable
 * @see {@link https://facebook.github.io/immutable-js/docs/#/Stack}
 */
