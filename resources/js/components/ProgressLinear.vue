<template>
    <v-app id="progress_bar">
        <v-progress-linear
            :active="show"
            indeterminate
            :query="false"
            color="blue-grey"
            ></v-progress-linear>
    </v-app>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapGetters, mapActions } = createNamespacedHelpers('modules/progress');

export default {
    data () {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'value',
            'show',
        ]),
    },
    beforeMount() {
        this.startProgress()
    },
    mounted() {

    },
    methods: {
        ...mapActions([
            'startProgress',
            'destroyProgress'
        ])
    },
    watch: {
        $route(to, from) {
            this.startProgress()
        }
    }

}
</script>

<style scoped lang="scss">
#progress_bar {
    position:fixed;
    top:48px;
    left:0;
    right:0;
    z-index:4000;
}
</style>
