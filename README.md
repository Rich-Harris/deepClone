deepClone.js
============

Simple utility to deep clone objects and arrays, for when you want to modify or transform data without borking the original.

```js
a = { one: 1, two: 2, three: 3 };
b = a;

b.four = 4;
console.log( a.four ); // 4


a = { one: 1, two: 2, three: 3};
b = deepClone( a );

b.four = 4;
console.log( a.four ); // undefined
```

Not exactly rocket science. Just a handy thing to have lying around. Doesn't check for cyclical references, so if you get stuck in an infinite loop it's you're own fault.

MIT licensed.