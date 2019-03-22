<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button v-on:click="changeName">Change my name!</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                        :myName="name"
                        :userAge="age"
                        v-on:nameWasReset="name = $event"
                        :resetFn="resetName"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" v-on:ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                name: 'Werner',
                age: 27
            };
        },
        methods: {
            changeName() {
                this.name = 'Deedee';
            },
            resetName(){
                this.name = 'Werner';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
