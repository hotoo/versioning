
# 版本号(version number)

Major_Version_Number.Minor_Version_Number[.Revision_Number[.Build_Number]]
主版本号 . 子版本号 [. 修正版本号 [. 编译版本号 ]]

## 使用

```javascript
var version = require("versioning");
version.compare("6.0", "6"); // true.
version.eq("6.0", "6"); // true.
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

```
var version = require("versioning");
var ver = new version("6.0");

ver.eq(6); // true.
ver.gte("6.1"); // true.
```


## 参考阅读

* [Semantic Versioning](http://semver.org/)
* [Apache APR Version Numbering Concepts](http://apr.apache.org/versioning.html)
* [Version number rules](http://mojo.codehaus.org/versions-maven-plugin/version-rules.html)
* [软件版本号](http://zh.wikipedia.org/wiki/%E8%BB%9F%E4%BB%B6%E7%89%88%E6%9C%AC%E8%99%9F)
* [Software versioning](http://en.wikipedia.org/wiki/Software_versioning)
* [Release Version Numbering](http://openacs.org/doc/eng-standards-versioning.html)
