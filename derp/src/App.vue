<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers v-on:showServerDetails="serverStatus = $event"></servers>
            <app-server-details v-on:changeToNormal="serverStatus = $event" :serverStatus="serverStatus"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        data: function() {
            return {
                serverStatus: 'Click on the server to see the details here',
            }
        },
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
