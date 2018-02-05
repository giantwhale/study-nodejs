Todo App
========

User Authentication 
-------------------

We use `jsonwebtoken` to check if the user is legitimate. Refer to <https://jwt.io> to see
how this package works.

```javascript
const jwt = require('jsonwebtoken');

var data = {id: 10};

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);  // original data object
```

