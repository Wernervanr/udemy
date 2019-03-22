new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        showControls: false,
        logs: [],
        youWon: false,
        youLost: false,
        specialAttackAmount: 3,
        healAmount: 2,
    },
    methods: {
        startGame: function() {
            this.showControls = true;
            this.logs = [];
            this.youWon = false;
            this.youLost = false;
            this.specialAttackAmount = 3;
            this.healAmount = 2;
        },
        attack: function() {
            var damage = this.calculateAmount(5, 15);
            this.monsterHealth -= damage;

            this.logs.unshift('Monster took ' + damage + ' damage!');
            this.attacked();
        },
        specialAttack: function() {
            if(this.specialAttackAmount > 0) {
                this.specialAttackAmount -= 1;

                var damage = this.calculateAmount(15, 35);
                this.monsterHealth -= damage;

                this.logs.unshift('Monster took ' + damage + ' special attack damage!');
                this.attacked();
            } else {
                this.logs.unshift('Max amount of special attacks has been reached, kindly pick another move');
            }
        },
        heal: function() {
            if(this.playerHealth < 100 && this.healAmount > 0) {
                this.healAmount -= 1;

                var healValue = this.calculateAmount(10, 25);
                this.playerHealth += healValue;

                this.logs.unshift('Player was healed for ' + healValue + ' health!');
                this.attacked();
            } else if (this.healAmount > 0 && this.playerHealth === 100){
                this.logs.unshift('Max health has been reached, kindly pick another move');
            } else {
                this.logs.unshift('You are out of heals, kindly pick another move');
            }
        },
        attacked: function(){
            var damage = this.calculateAmount(7, 20);
            this.playerHealth -= damage;

            this.logs.unshift('Player took ' + damage + ' damage!');
        },
        resetGame: function() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.showControls = false;
        },
        calculateAmount: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        }
    },
    computed: {
        healthPercentagePlayer: function() {
            var vm = this;
            return vm.playerHealth + '%';
        },
        healthPercentageMonster: function() {
            var vm = this;
            return vm.monsterHealth + '%';
        },
    },
    watch: {
        playerHealth: function() {
            if(this.playerHealth > 100){
                this.playerHealth = 100;
            } else if (this.playerHealth <= 0){
                this.youLost = true;
                this.resetGame();
            }
        },
        monsterHealth: function() {
            if(this.monsterHealth <= 0){
                this.youWon = true;
                this.resetGame();
            }
        }
    }
});
