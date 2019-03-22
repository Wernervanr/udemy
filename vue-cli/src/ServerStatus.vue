<template>
    <div>
        <p>Server status: {{ status }}</p>
        <button v-on:click="changeStatus">Change status</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                status: 'critical',
            }
        },
        methods: {
            changeStatus() {
                this.status = 'Normal';
            }
        }
    }
</script>

<style>

</style>
