<template>
    <div class="col-xs-12 col-sm-6">
        <p>{{ serverStatus }}</p>
        <button v-on:click="changeToNormal">Change to normal</button>
    </div>
</template>

<script>
    export default {
        props: [
            'serverStatus'
        ],
        methods: {
            changeToNormal() {
                this.serverStatus = 'derp';
                this.$emit('showServerDetails', this.serverStatus);
            }
        }
    }
</script>

<style>

</style>
