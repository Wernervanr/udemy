new Vue({
        el: '#exercise',
        data: {
            value: 'hallo'
        },
        methods: {
            alertMe: function() {
                alert(event.target.tagName);
            },
            addValue: function(){
                this.value = event.target.value;
            }
        }
    });
