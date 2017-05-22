/**
 * Created by aresn on 16/3/22.
 */
(function(exports) {
    Vue.directive('time', {
        bind: function() {

        },
        update: function(value) {
            var self = this;
            this.el.innerHTML = util.time.getMagic(value);
            this.timeout = setInterval(function() {
                self.el.innerHTML = util.time.getMagic(value);
            }, 60000);
        },
        unbind: function() {
            clearInterval(this.timeout);
        }
    });

    var filters = {
        all: function(list) {
            return list;
        },
        active: function(list) {
            return list.filter(function (todo) {
                return !todo.status;
            });
        },
        completed: function(list) {
            return list.filter(function (todo) {
                return todo.status;
            });
        }
    };

    exports.app = new Vue({
        el: '#app',
        data: {
            type: 'all',
            list: JSON.parse(localStorage.getItem('list')) || [],
            todo_new: ''
        },
        computed: {
            leftCount: function() {
                var count = 0;
                for (var i = 0; i < this.list.length; i++) {
                    if (this.list[i].status == 0) {
                        count += 1;
                    }
                }
                return count;
            },
            filterList: function () {
                return filters[this.type](this.list);
            }
        },
        methods: {
            addTodo: function() {
                var data = {
                    title: this.todo_new,
                    status: 0,
                    time: util.time.getUnix('s')
                };

                this.list.push(data);
                this.todo_new = '';
            },
            toggleTodo: function(index) {
                this.filterList[index].status = (this.filterList[index].status) ? 0: 1;
            },
            removeTodo: function(item) {
                this.list.$remove(item);
            },
            clearCompleted: function() {
                this.list = filters.active(this.list);
            },
            changeType: function(type) {
                this.type = type;
            }
        },
        watch: {
            list: {
                handler: function(list) {
                    localStorage.setItem('list', JSON.stringify(list));
                },
                deep: true
            }
        }
    });
})(window);