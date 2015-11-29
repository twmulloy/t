var ns = 't';
window[ns] = window[ns] || {};
window[ns] = (function(ns, p) {

  "use strict";

  var what, is, lookup;

  what = {
    type: {
      is: function(obj) {
        var type = Object.prototype.toString.call(obj);
        type = type.substr(8, type.length - 9).toLowerCase();
        switch (type) {
          case 'htmlcollection':
            type = 'array';
          default:
            break;
        }
        return type;
      }
    }
  };

  // Type Lookup Table
  lookup = {
    array: function() {

    },
    string: function() {
      p.elements = q.call(this);
    }
  };

  function is(input) {

    var _type;

    if (!input && this.hasOwnProperty(ns) && this.hasOwnProperty('object')) {
      input = this.object;
    }

    _type = what.type.is(input);

    return {
      type: function(type) {
        return type ? _type === type : _type;
      },
      empty: function() {
        return empty.call(this, input);
      }(),
      blank: function() {
        return blank.call(this, input);
      }()
    }
  }

  function blank(input) {
    return (!input || /^\s*$/.test(input));
  }

  function empty(input) {
    return (!input || /^\s*$/.test(input) || Object.keys(input).length === 0);
  }

  function q() {
    var selector, match;
    var element, elements = [];
    each.call(this.split(','), function(i) {
      selector = this.trim();
      match = selector.match(/^(#|.)?[a-zA-Z][\w:.-]*$/);
      if (match && match[0]) {
        selector = match[0];
        switch (match[1]) {
          case '#':
            element = document.getElementById(selector.replace(match[1], ''));
            break;
          case '.':
            element = document.getElementsByClassName(selector.replace(match[1], ''));
            break;
          default:
            element = document.getElementsByTagName(selector);
            break;
        }
      } else {
        element = document.querySelector(selector);
      }

      if (element) {
        if (is(element).type('array')) {
          if (element.length > 0) {
            each.call(element, function(i) {
              elements.push(this);
            });
          }
        } else {
          elements.push(element);
        }
      }
    });

    return elements;
  }

  function merge() {
    var obj = {},
      i = 0,
      l = arguments.length,
      key;
    for (; i < l; i++) {
      for (key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          obj[key] = arguments[i][key];
        }
      }
    }
    return obj;
  }

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  function 〱each_arr(fn) {
    var l = this.length;
    var i = 0;
    while (l--) {
      fn.call(this[l], i);
      i += 1;
    }
  }

  function each(fn) {
    if (!is(fn).type('function')) {
      return;
    }

    // `ns` object
    if (this.hasOwnProperty(ns)) {
      if (this.hasOwnProperty('elements') && is(this.elements).type('array') && !is(this.elements).empty()) {
        if (this.elements.length > 1) {
          〱each_arr.call(this.elements, fn);
        } else {
          fn.call(this.elements[0]);
        }
      }
    } else if (is(this).type('array')) {
      〱each_arr.call(this, fn);
    }
  }

  p[ns] = (function() {
    return merge(p, {
      each: each,
      empty: empty,
      guid: guid,
      is: is,
      merge: merge,
      what: what
    });
  })();

  Object.prototype[ns] = function() {

    var ist = this.hasOwnProperty(ns);

    if (!ist) {
      p.id = guid();
    }

    p.elements = [];
    p.object = this;
    p.type = what.type.is(this);


    if (is(lookup[p.type]).type('function')) {
      lookup[p.type].call(this);
    }

    return merge(p, p[ns]);
  }

  return p[ns];

})(ns, window[ns]);