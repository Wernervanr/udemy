<template>
    <div>
        <h1>Quotes Added</h1>
        <div class="quoteProgressBar">
            <div class="quoteProgress" v-bind:style="{ width: quoteAmount + '0%' }">
                <p>{{ quoteAmount }} / 10</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'quoteAmount',
        ]
    }
</script>

<style scoped>
    .quoteProgressBar {
        background: #ccc;
        height: 30px;
        border-radius: 2%;
    }
    .quoteProgress {
        background: turquoise;
        height: 100%;
        width: 0%;
        color: white;
    }
</style>
