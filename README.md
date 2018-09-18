# pickapart [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> deep immutable destructuring with omit

- If your app is already using `Lodash`, then just [use the `lodash-pickapart` mixin](https://github.com/busterc/lodash-pickapart).

## Installation

```sh
$ npm install --save pickapart
```

## Usage

```js
const pickapart = require('pickapart');

// pickapart(paths, source)
// * paths: String|Array (optional, if source is an Array)
// * source: Object|Array

const payload = { name: 'abc', meta: { token: 123, easy: true } };

const [token, data] = pickapart('meta.token', payload);
console.log('=> ', payload);
// => { name: 'abc', meta: { token: 123, easy: true }}
console.log('=> ', token);
// => 123
console.log('=> ', data);
// => { name: 'abc', meta: { easy: true }}

const [is, ez] = pickapart(['name', 'meta.easy'], payload);
console.log('=> ', is);
// => 'abc'
console.log('=> ', ez);
// => true

const flavors = ['chocolate', 'vanilla', 'strawberry'];

const [plain, others] = pickapart('[1]', flavors);
console.log('=> ', plain);
// => 'vanilla'
console.log('=> ', others);
// => [ 'chocolate', 'strawberry' ]

const [choco, notChoco] = pickapart(flavors);

console.log('=> ', choco);
// => 'chocolate'
console.log('=> ', notChoco);
// => [ 'vanilla', 'strawberry' ]
```

## License

ISC © [Buster Collings]()

[npm-image]: https://badge.fury.io/js/pickapart.svg
[npm-url]: https://npmjs.org/package/pickapart
[travis-image]: https://travis-ci.org/busterc/pickapart.svg?branch=master
[travis-url]: https://travis-ci.org/busterc/pickapart
[daviddm-image]: https://david-dm.org/busterc/pickapart.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/busterc/pickapart
[coveralls-image]: https://coveralls.io/repos/busterc/pickapart/badge.svg
[coveralls-url]: https://coveralls.io/r/busterc/pickapart
