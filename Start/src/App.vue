<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <my-server-status></my-server-status>
        <hr>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import Header from './components/shared/Header.vue'
    import ServerStatus from './components/Server/ServerStatus.vue'
    import Footer from './components/shared/Footer.vue'

    export default {
        components: {
            'my-header': Header,
            'my-server-status': ServerStatus,
            'my-footer': Footer
        }
    }
</script>

<style>

</style>
