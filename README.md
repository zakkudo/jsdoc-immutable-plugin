<a name="module_jsdoc-immutable-plugin"></a>

## jsdoc-immutable-plugin
Make working with [Immutable](https://facebook.github.io/immutable-js/) types in [jsdoc](http://usejsdoc.org/) enjoyable.

Why use this?

- Generates standard types for jsdoc so you can set `allowUnknownTags`
  to `false`
- Includes links to all of the documentation for the different types on the
  official site
- Includes short official descriptions from the official site inline


Install with:

```console
yarn add --dev @zakkudo/jsdoc-immutable-plugin
```

Add to your jsdoc config with:

```js
    "plugins": [
        "@zakkudo/jsdoc-immutable-plugin"
    ],
```

Included Types:

- `Immutable`
- `Immutable.Map`
- `Immutable.List`
- `Immutable.OrderedMap`
- `Immutable.Set`
- `Immutable.OrderedSet`
- `Immutable.Stack`

**Example** *(Tag your Maps)*  
```js
/**
 * Generates an empty map. I'm not sure why you would do this...
 * @return {Immutable.Map} The new map
 *\/
export default function generateMap() {
    return fromJS({});
}
```
**Example** *(Tag your Lists)*  
```js
/**
 * Returns a list of names
 * @return {Immutable.List<String>} The generated list
 *\/
export default function getListOfNames() {
    return fromJS(['Jim', 'George', 'Bill']);
}
```
