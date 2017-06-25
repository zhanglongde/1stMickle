1.Function结合闭包
    function Eggs(i) {
      var index = i||0
      var data = [0,1,2,3,4,5]
      var length = data.length

      return {
        next: function () {
          return data[++index]
        },
        prev: function () {
          return data[--index]
        },
        hasNext: function () {
          return index < length-1
        },
        // 指针重置
        rewind: function () {
          index = 0
        }
      }
    }
2.class+extend