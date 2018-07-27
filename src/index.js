import Vue from "vue";
Vue.component('todo-item', {
    props: ['title'],
    template: `
    <li>
        {{title}}
        <button @click="$emit(\'remove\')">移除</button>
        <button @click="$emit(\'complete\')">√</button>
    </li>
    `
})
new Vue({
    el: '#app',
    data: {
        newTodoText: '',
        todos: [{
                id: 1,
                title: 'Do the dishes',
                complete: false
            },
            {
                id: 2,
                title: 'Take out the trash',
                complete: false
            },
            {
                id: 3,
                title: 'Mow the lawn',
                complete: true
            }
        ],
    },
    created: function () {
        let myTodos = JSON.parse(window.localStorage.getItem('myTodos'))
        console.log(myTodos)
        this.todos = myTodos || []
    },
    beforeUpdate: function () {
        console.log('Vue页面更新')
        let todosData = JSON.stringify(this.todos)
        window.localStorage.setItem('myTodos', todosData)
    },
    computed: {
        nextTodoId: function () {
            return (this.todos[this.todos.length - 1].id + 0) + 1
        },
        completedTodos: function () {
            return this.todos.filter(todo => todo.complete)
        },
        unCompletedTodos: function () {
            return this.todos.filter(todo => !todo.complete)
        }
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId,
                title: this.newTodoText
            })
            this.newTodoText = ''
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1)
        },
        completeTodo: function (todo) {
            todo.complete = true
        }
    }
})