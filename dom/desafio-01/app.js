new Vue({
    el: '#desafio',
    data: {
        nome: 'Erik Gomes',
        idade: '22'
    },
    methods: {
        random01: function(){
           return Math.random(0, 1);
        }
    }
})