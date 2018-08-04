# jsdoc-immutable-plugin

Adds tags to help document immutable functionality without having to copy-paste text around and allowing disallowing undefined tags.

Install with:

```sh
yarn add --dev @zakkudo/jsdoc-immutable-plugin
```

Add to your jsdoc config with:

```js
    "plugins": [
        "@zakkudo/jsdoc-immutable-plugin"
    ],
```

Tag your reducers this way:

```js
/**
 * Generates an empty map. I'm not sure why you would do this...
 * @return {Immutable.Map} The new map
 */
export default function generateMap() {
    return fromJS({});
}
```

```js
/**
 * Returns a list of names
 * @return {Immutable.List<String>} The generated list
 */
export default function getListOfNames() {
    return fromJS(['Jim', 'George', 'Bill']);
}
```

Includes typedefs for

- `Redux` namespace
- `Redux.Map` typedef to generically describe an immutable map structure
- `Redux.List` typedef to generically describe an immutable list structure
- ...this will likely grow int he future.  Pull requests welcome!
