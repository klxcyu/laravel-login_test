<template>
    <v-tabs>
        <v-tab to="/">Main</v-tab>
        <v-tab>Contents</v-tab>
        <v-tab to="/login">Login</v-tab>
    </v-tabs>
</template>

<script>
export default {
    data() {
        return {
            tab: null,
        }
    }
}

</script>

<style scoped>
.v-tabs {
    display:flex;
    justify-content: center;
}




</style>
