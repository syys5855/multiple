<template>
    <div class="clearfix">
        <div class="col-xs-8">
            <span>{{todo.text}}</span>
        </div>
        <div class="sol-xs-4 pull-right">
           <a href="javascript:void(0);" @click="removeTodo({todo})">
               <span class="glyphicon glyphicon-remove" ></span>
           </a>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';


export default {
    props: [
        'todo'
    ],
    methods: {
        ...mapMutations([
            'removeTodo'
        ])
    }
}
</script>

<style>

</style>
