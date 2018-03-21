function Promise(fn) {
  var callback;
  this.then = function (done) {
    callback = done;
  }
  function resolve() {
    callback()
  }
  fn(resolve)
}