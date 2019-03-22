<template>
    <div class="container">
        <progress-bar :quoteAmount="quoteAmount">

        </progress-bar>

        <new-quote
            v-on:updateList="submitQuote($event)"
            :quoteAmount="quoteAmount">
        </new-quote>

        <div class="row">
            <single-quote
                    :latestQuote="quoteList[0]">
            </single-quote>
            <all-quotes
                    :submittedQuotes="quoteList"
                    :deleteQuote="deleteQuote">
            </all-quotes>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Progress from './components/Progress.vue'
    import New from './components/New.vue'
    import Quote from './components/Quote.vue'
    import Quotes from './components/Quotes.vue'
    import Footer from './components/shared/Footer.vue'

    export default {
        data: function() {
            return {
                quoteList: ['First quote'],
                quoteAmount: 1
            }
        },
        methods: {
            deleteQuote: function(index){
                this.quoteList.splice(index, 1);
                this.quoteAmount--;
            },
            submitQuote: function(quote){
                this.quoteList.unshift(quote);
                this.quoteAmount++;
            }
        },
        components: {
            progressBar: Progress,
            newQuote: New,
            singleQuote: Quote,
            allQuotes: Quotes,
            appFooter: Footer
        }
    }
</script>

<style>
</style>
