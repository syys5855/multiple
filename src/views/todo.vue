<template>
    <div class="panel panel-success">
        <div class="panel-body">
            <ul class="list-group">
                <li class="list-group-item">
                    <input type="text" class="form-control" v-model="inputTodo" @change="addTodo({text:inputTodo})">
                </li>
                <li class="list-group-item" v-for="(todo,index) in todos" :key="index">
                    <todo :todo="todo"></todo>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Todo from '@components/todo.vue';
import { mapState,mapMutations } from 'vuex';
export default {
    model: {
        prop: 'value',
        event:'change'
    },
    data() {
        return {
            inputTodo:''
        }
    },
    components: {
        Todo
    },
    methods: {
        ...mapMutations({
            addTodo(f,param) {
                this.$store.commit('addTodo', param);
                this.inputTodo = '';
            }
        })
    },
    computed: mapState([
        'todos'
    ])

}
</script>

<style>

</style>
