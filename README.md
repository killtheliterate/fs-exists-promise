[![Build Status](https://travis-ci.org/killtheliterate/fs-exists-promise.svg?branch=master)](https://travis-ci.org/killtheliterate/fs-exists-promise)
[![NPM version](https://img.shields.io/npm/v/fs-promise-exists.svg)](https://www.npmjs.com/package/fs-exists-promise)

# fs-exists-promise
Provides functionality similar to the deprecated `fs.exists()`. 
# Install

```sh
npm install fs-exists-promise
```

# Usage

```javascript
// take note that you need to pass a legit path to fs-exists-promise.
var fsExists = require('fs-exists-promise')

fsExists(resolve(__dirname, './something-you-are-looking-for'))
  .then(function (truth) {
    doSomething()
  })
  .catch(function(err) {
    // catch, you fool.
    console.log(err)
  })
```

# Documentation

[documentation](./docs)
