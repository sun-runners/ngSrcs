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

Make sure you include the module 'ngSrcs' in your application config

```
angular.module('myApp', [
  'ngSrcs',
  ...
]);
```

You can give multiple urls to an image tag.

```
$scope.image1 = 'image1.jpg'; // NOT_FOUND
$scope.image2 = 'image2.jpg'; // NOT_FOUND
$scope.image3 = 'image3.jpg'; // FOUND
```

```
<img ng-srcs="[image1, image2, image3]"/>
```

If **image1.jpg** and **image2.jpg** are invalid, **image3.jpg** will be shown.

Easy!
