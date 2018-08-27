# cookie-baker

Handle cookies in a easy way

Methods availables
- [getCookie](#getCookie)
- [setCookie](#setCookie)
- [deleteCookie](#deleteCookie)


### getCookie

cookies.getCookie(key [, isString=false, markAsErasable=false ]);

If you need to retrieve a cookie value from cookies, just give it the key:

````javascript
//document.cookie -> "foo=idunno; bar=firstValue"

var myValue = cookies.get('foo');
console.log('my value', myValue);//idunno

var otherValue = cookies.get('inexistent');
console.log(otherValue);//null
````

Also, you can just mark as erasable value(after it is recovered):

````javascript
//document.cookie -> "foo=idunno; bar=firstValue"

var myValue = cookies.get('foo', false, true);
console.log(myValue);//idunno

var otherValue = cookies.get('foo', false, true);
console.log(otherValue);//null

//document.cookie -> "bar=firstValue"
````




### setCookie

cookies.setCookie(key, value [, daysToExpire=365 ]);

to set a new cookie value, just give it the key and its value. Optionally, you can send how many days your cookie will survive.

````javascript
cookies.set('coffeeType', 'mocha');

//cookie="foo=idunno; bar=firstValue; coffeeType=mocha"
````


### deleteCookie

cookies.deleteCookie(key);

To remove a cookie, just pass the key.

````javascript
//cookie="foo=idunno; bar=firstValue"

cookies.remove('foo');

//cookie="bar=firstValue"
````