new Vue({
    el: '#desafio',
    data: {
        nome: 'Erik Gomes',
        idade: '22',
        linkImg: 'https://i.pinimg.com/originals/e4/34/2a/e4342a4e0e968344b75cf50cf1936c09.jpg',
    },
    methods: {
        random01: function(){
           return Math.random(0, 1);
        }
    }
})