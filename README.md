## aframe-ios-fullscreen-helper-component

Quick-fix for iOS.

- Cannot fullscreen on the iPhone X, 11, and so on models and when having several tabs opened.

Don't use `embedded` component when use this component.

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Events

| Property      | Description |
| ------------- | ----------- |
| addswipeup    |             |
| removeswipeup |             |

### Installation

#### npm or yarn

Install via npm or yarn:

```bash
npm install git+ssh://git@github.com:rinsyan0518/aframe-ios-fullscreen-helper-component.git
yarn add git+ssh://git@github.com:rinsyan0518/aframe-ios-fullscreen-helper-component.git
```

Then require and use.

```js
require("aframe");
require("aframe-ios-fullscreen-helper-component");
```

```html
<a-scene ios-fullscreen-helper></a-scene>
```
