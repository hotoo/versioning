# 版本号 (version number)

----

[![NPM version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coveralls-badge]][coveralls-url]

[npm-badge]: https://img.shields.io/npm/v/versioning.svg?style=flat
[npm-url]: https://www.npmjs.com/package/versioning
[travis-badge]: https://travis-ci.org/hotoo/versioning.svg?branch=master
[travis-url]: https://travis-ci.org/hotoo/versioning
[coveralls-badge]: https://coveralls.io/repos/hotoo/versioning/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/hotoo/versioning


语义化版本号比较模块。

语义化版本号通常定义如下：

```
Major_Version_Number.Minor_Version_Number[.Revision_Number[.Build_Number]]

主版本号            .子版本号            [.修正版本号     [.编译版本号  ]]
```

## 使用

```javascript
var version = require("versioning");
version.compare("6.0", "6"); // 0
version.eq("6.0", "6"); // true

var v = new version("6.0");
v == 6 // true
v > 6  // false
```

## API

静态方法：

### version.compare(v1, v2)

比较两个语义化版本号的大小。

返回：

* 如果两个版本号都具有的部分相等，返回 0；
* 如果两个版本号都具有的部分中，v1 大于 v2 则返回 1；
* 如果两个版本号都具有的部分中，v1 小于 v2 则返回 -1。


### version.eq(v1, v2)

比较两个版本号是否相等。

返回：

* 如果两个版本号都具有的部分相等，返回 true；
* 否则，返回 false。

### version.gt(v1, v2)

比较两个版本号都具有的部分中，v1 是否大于 v2。

返回：

* 如果 v1 > v2，返回 true；
* 否则返回 false。

### version.gte(v1, v2)

比较两个版本号都具有的部分中，v1 是否大于或等于 v2。

返回：

* 如果 v1 >= v2，返回 true；
* 否则，返回 false。

### version.lt(v1, v2)

比较两个版本号都具有的部分中，v1 是否小于 v2。

返回：

* 如果 v1 < v2，返回 true；
* 否则，返回 false。

### version.lte(v1, v2)

比较两个版本号都具有的部分中，v1 是否小于或等于 v2。

返回：

* 如果 v1 <= v2，返回 true；
* 否则，返回 false。

### 实例化

除了上面的静态方法， versioning 还可以进行实例化，API 与上面一致。

特殊的，versioning 实例可以使用算术比较运算符，比较两个版本的大小。

注意：使用算术比较运算符，只能比较到子版本号，而且要求子版本号小于 10 的场景。

```javascript
var versioning = require("versioning");

var ver = new versioning("6.0");

ver.eq(6); // true.
ver.gte("5.9"); // true.

ver == 6 // true.
ver > 5.9 // true.
```

### 注意

JavaScript 引擎的限制，versioning 实例与字符串相加时，只返回两级版本号。
要得到完整的原生版本号，需要使用显示转换方式。

```javascript
var v = new versioning("1.2.3.4");

"" + v; // "1.2"

String(v); // "1.2.3.4"
v.toString(); // "1.2.3.4"
```
