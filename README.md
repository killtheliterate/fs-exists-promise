# fs-exists-promise

# Install

```sh
npm install fs-exists-promise
```

# Usage

```javascript
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
