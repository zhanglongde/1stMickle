/*添加拒绝方法，添加一个数组方法存放*/

function Promise(fn) {
  var promise = this;
      promise._value;
      promise._reason;
      promise._resolves =[]
      promise._rejects = []
      promise._status = 'PENDING'

  this.then = function (onFulfilled,onRejected) {
    return new Promise(function (resolve,reject) {
      function handle(value) {
        var ret = typeof onFulfilled === 'function' && onFulfilled(value) || value;
        if (ret && typeof ret['then'] === 'function') {
          ret.then(function (value) {
            resolve(value);
          },function (reason) {
            reject(reason)
          });
        } else {
          resolve(ret)
        }
      }
      function errback(reason) {
        reason = typeof onRejected === 'function' && onRejected(reason) || reason;
        reject(reason)
      }
      if (promise._status === 'PENDING') {
        promise._resolves.push(handle);
        promise._rejects.push(errback);
      } else if (promise._status === 'FULFILLED') {
        handle(promise._value)
      } else if (promise._status === 'REJECTED') {
        errback(promise._reason);
      }
    })
  }

  function resolve(value) {
    setTimeout(function () {
      promise._status = 'FULFILLED'
      promise._resolves.forEach(function (callback) {
        value = callback(value)
      })
    },0)
  }

  function reject(value) {
    setTimeout(function () {
      promise._status = 'REJECTED'
      promise._rejects.forEach(function (callback) {
        value = callback(value)
      })
    },0)
  }

  fn(resolve,reject);
}