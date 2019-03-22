<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="changeTemplate('appBlue', 'I am blue')" class="btn btn-primary">Load Blue Template</button>
                <button @click="changeTemplate('appGreen', 'I am green')" class="btn btn-success">Load Green Template</button>
                <button @click="changeTemplate('appRed', 'I am red')" class="btn btn-danger">Load Red Template</button>
                <hr>
                <component :is="selectedTemplate">
                    <p>{{ templateMessage }}</p>
                </component>
                <!--<app-blue>-->
                    <!--<h1>Je dikke moeder</h1>-->
                <!--</app-blue>-->
                <!--<app-green>-->
                    <!--<h1>Je dikke vader</h1>-->
                <!--</app-green>-->
                <!--<app-red>-->
                    <!--<h1>Je dikke broer</h1>-->
                <!--</app-red>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedTemplate: 'appBlue',
                templateMessage: 'I am blue'
            }
        },
        methods: {
            changeTemplate: function(templateName, templateMessage) {
                this.selectedTemplate = templateName;
                this.templateMessage = templateMessage;
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
