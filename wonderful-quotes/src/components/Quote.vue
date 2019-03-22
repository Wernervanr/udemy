<template>
    <div class="col-sm-3">
        <div v-if="latestQuote" class="col latestQuote">
            {{ latestQuote }}
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'latestQuote'
        ]
    }
</script>

<style scoped>
    .latestQuote {
        font-family: Arizonia;
        font-size: 3em;
        padding: 20px;
        border: 1px solid #ccc;
        display: inline-block;
        margin-bottom: 10px;
        width: 100%
    }
</style>
