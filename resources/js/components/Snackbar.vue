<template>
    <v-app id="snackbar_wrap">
        <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            top
            centered
            :color="color"
        >
            {{ message }}
            <v-icon
                dark
                right
            >
                {{ icons }}
            </v-icon>
        </v-snackbar>
    </v-app>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const sb = createNamespacedHelpers('modules/snackbar');

export default {
    data: () => ({
        timeout: 3000,
        tmObj: null,
        color: null,
        icons: null,
    }),
    methods: {
        ...sb.mapActions(['resetDatas']),
    },
    computed: {
        ...sb.mapGetters(['type', 'message', 'snackbar']),
    },
    watch: {
        type() {
            switch(this.type) {
                case 'error':
                    this.color = 'red accent-2'
                    this.icons = 'mdi-cancel'
                    break;
                case 'success':
                    this.color = 'success'
                    this.icons = 'mdi-checkbox-marked-circle'
                    break;
                case 'warning':
                    this.color = 'deep-orange accent-2'
                    this.icons = 'mdi-cancel'
                    break;
                case 'info':
                    this.color = 'blue accent-2'
                    this.icons = null
                    break;
                default:
                    this.color = 'blue-grey darken-2'
                    this.icons = null
                    break;
            }
        },
        snackbar() {
            if(this.tmObj) {
                clearTimeout(this.tmObj)
                this.tmObj = null
            } else {
                this.tmObj = setTimeout(() => {
                    this.resetDatas()
                }, this.timeout);
            }
        }
    }
}
</script>

<style scoped lang="scss">
#snackbar_wrap:deep() {
    .v-snack {
        z-index:9999;
    }

    .v-snack__content {
        text-align:center;
    }
}
</style>
