<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server-item
            v-for="server in servers"
            :serverId="server.id"
            :serverStatus="server.status"
            :emitClick="showDetails">
            </app-server-item>
        </ul>
    </div>
</template>

<script>
    import ServerItem from './ServerItem.vue'

    export default {
        data: function() {
            return {
                servers: [
                    {id: 1, status: 'normal'},
                    {id: 2, status: 'critical'},
                    {id: 3, status: 'unknown'},
                    {id: 4, status: 'normal'},
                ],
            }
        },
        methods: {
            showDetails: function(status) {
                this.$emit('showServerDetails', status);
            },
        },
        components: {
            appServerItem: ServerItem,
        },
    }

</script>

<style>

</style>
