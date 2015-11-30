# t.js

## Usage
Include the `script`.
```
<script src='t.js'></script>
```

## DOM
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


## Utils
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

### Data type
Check for generic data types: `number`, `string`, `array`, `object` and more!
```
t.what.type.is(0);   
// -> "number"

t.what.type.is(1.0);
// -> "number"

t.what.type.is("hello");
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

t.is("hello").type();
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
