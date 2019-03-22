<template>
    <li class="list-group-item" v-on:click="emitClick(serverStatus)">
        Server #{{ serverId }}
    </li>
</template>

<script>
    export default {
        props: [
            'serverId',
            'serverStatus',
            'emitClick'
        ],
    }
</script>
