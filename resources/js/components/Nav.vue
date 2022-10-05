<template>
    <v-tabs>
        <v-tab to="/">Main</v-tab>
        <!-- <v-tab>Contents</v-tab> -->
        <v-tab @click="authLogic()" :to="isLogin ? '' : '/auth/login'">{{ isLogin ? 'logout' : 'login'  }}</v-tab>
        <v-tab v-if="!isLogin" to="/auth/register">register</v-tab>
    </v-tabs>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const auth = createNamespacedHelpers('modules/auth');

export default {
    data() {
        return {
            tab: null,
        }
    },
    methods: {
        authLogic() {
            if(this.isLogin) {
                this.$auth.logout()
                this.$router.push('/auth/login')
            }
        }
    },
    computed: {
        ...auth.mapGetters([
            'isLogin',
        ])
    },
    watch: {
        $route(to, from) {

        }
    }
}

</script>

<style scoped>
.v-tabs {
    display:flex;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index:3000;
    background:#fff;
}
</style>
