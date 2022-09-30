<template>
    <v-app class="auth_page">
        <v-card
            elevation="2"
            outlined
        >
            <router-view />
        </v-card>
    </v-app>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.v-card {
    padding:20px ;
}

.auth_page {
    padding: 107px 0 0 0 !important;
    width:800px;
    margin:0 auto;
}
</style>
