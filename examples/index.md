# 演示文档

---

````javascript
seajs.use('../versioning', function(versioning){

    console.log(versioning.compare("6.0", "6")); // 0
    console.log(versioning.compare("6.1", "6")); // 1
    console.log(versioning.compare("6.1", "6.2")); // -1
    console.log(versioning.eq("6.0", "6")); // true

    var ver = new versioning("6.0");
    console.log(ver == 6); // 不要使用全等符(===)
    console.log(ver.eq(6));

    var v = 0+ver;
    console.log(typeof v, v); // number, 6

    var v = ""+ver;
    console.log(typeof v, v); // string, "6"

});
````
