<template>
    <v-app>
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

<style>

</style>
