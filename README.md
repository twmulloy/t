# t.js
`t` is a javascript framework for myself that includes the most common components asked for by clients, in a syntax that reads a little better than native javascript.

## Features
Checklist of features that will complete the base of the `t` javascript framework.
- [x] DOM selectors
- [ ] Utilities
  - [x] Merge
  - [x] Deep merge
  - [x] Empty?
  - [x] Blank?
  - [x] GUID
  - [x] Type?
  - [x] Each
  - [ ] Delay
- [ ] Extension authoring
- [ ] Templates
- [ ] WebComponent loader
- [ ] Two-way data bind
- [ ] CSS animation tween
- [ ] Client-side router 
- [ ] Image sequencer and scrubber
- [ ] XHR

## Usage
Include the `script`.
```
<script src='t.js'></script>
```

### DOM
To query elements, simply create a string with a selector or comma delimited multiple selectors.
```
var dom = "html, body".t();
```

`t()` will select the fastest `document` query selector function.
```
"body".t(); // `getElementsByTagName`
```

```
"#my-id".t(); // `getElementsById`
```

```
".my-class".t(); // `getElementsByClassName`
```

The `t()` string method returns the element nodes contained within the `elements` namespace (if they exist), along with some helpful utility functions.


### Utils
Utility functions can be called from the `t()` result object or from the global `t` object.

```
<!doctype html>
<meta charset='utf-8'>

<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>

<script>
  // `t()` result object
  var items = "li".t();
  items.each(function(){
    console.log(this); // -> <li></li>
  });

  "li".t().each(function(){
    console.log(this); // -> <li></li>
  });

  // `t` object
  t.each([1, 2, 3], function(){
    console.log(this); // -> Number
  });
</script>
```

### Data Types
Check for generic data types: `number`, `string`, `array`, `object`, `undefined`, `global` and more!
```
t.what.type.is(0);   
// -> "number"

t.what.type.is(1.0);
// -> "number"

t.what.type.is('hello');
// -> "string"

t.what.type.is(this);
// -> "global"

t.what.type.is({});
// -> "object"

t.what.type.is();
// -> "undefined"

t.what.type.is([]);
// -> "array"
```
The data type can also be checked with the `type()` comparison function using the `t.is()` belt.

```
t.is(0).type();   
// -> "number"

t.is(1.0).type();
// -> "number"

t.is('hello').type();
// -> "string"

t.is(this).type();
// -> "global"

t.is({}).type();
// -> "object"

t.is().type();
// -> "undefined"

t.is([]).type();
// -> "array"
```
The above `t.is()` belt syntax is meant for `type` checking.
```
if(t.is('hello').type('string')){
  console.log("process string...");
}

// Using `this` reads pretty well
if(t.is(this).type('array')){
  console.log("%c \"We are dealing with an array.\"", "font-style: italic;", "- t");
}
```

## Funcs

### t

#### blank

#### each

#### empty

#### guid

#### is

#### merge

#### what
