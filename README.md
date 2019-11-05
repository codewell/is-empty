# @codewell/is-empty

## Installation
```
npm install @codewell/is-empty
```


## Basic usage
```JavaScript
import isEmpty from '@codewell/is-empty';

isEmpty([]); // => true
isEmpty(''); // => true
isEmpty({}); // => true

isEmpty(['foo']); // => false
isEmpty('foo'); // => false
isEmpty({ foo: 'bar' }); // => false
```
