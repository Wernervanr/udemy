<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <hr>
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
               <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default content</p>
                    </component>
                </keep-alive>
               <!--<app-quote>-->
                   <!--<h2 slot="title">{{ quoteTitle }}</h2>-->
                   <!--<p>A wonderful quote</p>-->
               <!--</app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data: function() {
            return {
                quoteTitle: 'The quote',
                selectedComponent: 'appQuote'
            }
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
    h2 {
        color: red;
    }
</style>
