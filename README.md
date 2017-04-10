ngSrcs
=======

Show valid images among multiple images

INSTALL
-------

```
bower install ngSrcs --save
```

usage
-----

Make sure you include the module in your application config

```
angular.module('myApp', [
  'ngSrcs',
  ...
]);
```

```
$scope.modelValue === 'image3.jpg' // true
```

```
<img ng-srcs="['image1.jpg','image2.jpg','image3.jpg']"></input>
```

If **image1.jpg** and **image2.jpg** are invalid, **image3.jpg** will be shown.

Easy!
