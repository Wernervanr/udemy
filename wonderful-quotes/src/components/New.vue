<template>
    <form class="newQuoteForm">
        <label>Quote</label>
        <div>
        <textarea v-model="newQuote"></textarea>
        </div>
        <button v-on:click.prevent="submitNewQuote">Add quote</button>
    </form>
</template>

<script>
    export default {
        data: function() {
            return {
                newQuote: '',
            }
        },
        props: [
            'quoteAmount'
        ],
        methods: {
            submitNewQuote: function() {
                if(this.newQuote && this.quoteAmount < 10) {
                    this.$emit('updateList', this.newQuote);
                    this.newQuote = '';
                } else if (!this.newQuote){
                    alert("Oops! No quote was filled in.");
                } else {
                    alert("Max amount of quotes is reached!");
                    this.newQuote = '';
                }
            }
        }
    }
</script>

<style>
    textarea {
        width: 60%;
    }
    .newQuoteForm {
        margin-bottom: 10px
    }

</style>
