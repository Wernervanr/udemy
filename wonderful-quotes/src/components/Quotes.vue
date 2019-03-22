<template>
    <div class="col-sm-9">
        <div    @click="deleteQuote(index)"
                v-for="(quote, index) in submittedQuotes"
                class="quoteDiv col-sm-2">
            {{ quote }}
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'submittedQuotes',
            'deleteQuote'
        ]
    }
</script>

<style scoped>
    .quoteDiv {
        font-family: Arizonia;
        font-size: 3em;
        border: 1px solid #ccc;
        padding: 20px;
        margin-bottom: 10px;
        margin-right: 5px;
        display: inline-block;
        width: auto;
    }
</style>
