# 演示文档

---

<form id="form-demo">
  <input type="text" name="v1" value="1.0.0" />
  <select name="expr">
    <option value="eq">equal</option>
    <option value="gt">great than</option>
    <option value="gte">great than equal</option>
    <option value="lt">less than</option>
    <option value="lte">less than equal</option>
    <option value="compare">compare</option>
  </select>
  <input type="text" name="v2" value="1.0.0" />
  <input type="submit" name="btn-compare" value="Compare" />
</form>
<pre id="output">true</pre>

````javascript
seajs.use(['jquery', '../versioning'], function($, versioning){

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

  // ----

  var output = $('#output');

  $('#form-demo').submit(function(){
    var v1 = $('input[name=v1]').val();
    var v2 = $('input[name=v2]').val();
    var expr = $('select[name=expr]').val();
    var result = versioning[expr](v1, v2);

    output.html(String(result));

    return false;
  });

});
````
