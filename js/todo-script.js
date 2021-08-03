Vue.component('task',{ // создаем компонент Vue, в первом параметре название, а в скобках прописываем сам компонент
    props: ['data'], // элемент который пересылаем из объекта в этот компонент
    methods: {
        // эти функции будут указываться при событии клика на соответствующую кнопку
        task_delete: function(){
            // функция будет запускать глобальную функцию в главном объекте и даём ей название
            this.$emit('task_delete');
        },
        task_complete: function(){
            this.$emit('task_complete');
        },
        task_add: function(){
            this.$emit('task_add');
        }
    },
    // template хранит структуру объекта на уровне вёрстки
    // на примере в заголовок передается содержимое title из нашего массива
    template: `
        <div class="task">
            <button @click="task_complete()" class="task__done">✔️</button>
            <h3 class="task__title">{{data.title}}</h3>
            <button @click="task_delete()" class="task__delete">❌</button>
        </div>
    `
    //события по кнопкам @click вызывают функцию, которые описаны в компоненте, а именно в methods
})  


var vue = new Vue({  //создаем объект Vue и инициализируем его
    el: '#app', // указываем элемент на наше приложение
    data: {  // здесь будут храниться задания
        new_task: { // шаблон для добавления новой задачи
            title: ''
        },
        tasks_actual: [ // записываем эти записи, чтобы те появлялись как пример
            {
                title: 'Заставить кнопки работать'
            },
            {
                title: 'Покушать'
            }
        ],
        tasks_done: [
            {
                title: 'Создать два массива'
            }
        ]
    },
    methods:{
        delete_task_done(id){
            this.tasks_done.splice(id,1);
        },
        delete_task_actual(id){
            this.tasks_actual.splice(id,1);
        },
        complete_task(id){
            this.tasks_done.push(this.tasks_actual.pop(id,1));
        },
        add_task(){
            if(this.new_task.title != ''){
                this.tasks_actual.push({
                    title: this.new_task.title
                });
                this.new_task.title='';
            }
        }
    }
})