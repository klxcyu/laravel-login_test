<template>
    <ul>
        <li v-for="item in list" :key="item">
            <Card1 />
        </li>
    </ul>
</template>

<script>
import Card1 from '@/components/Card1'
import CardImg1 from '@/components/CardImg1'
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapGetters } = createNamespacedHelpers('modules/progress');

const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

export default {
    components: {
        Card1,
        CardImg1
    },
    data: () => ({
        settimeout: null,
        item: null,
        list: 10,
    }),
    beforeMount() {

    },
    mounted() {
        this.settimeout = setTimeout(() => {
            this.successProgress()
        }, 1000);
    },
    beforeDestroy() {
        /* this.destroyProgress() */
        clearTimeout(this.settimeout)
    },
    methods: {
        ...mapActions([
            'startProgress',
            'successProgress',
            'destroyProgress'
        ])
    },
    computed: {
        ...mapGetters([
            'value',
            'show',
        ]),
    },

}
</script>

<style lang="scss">
ul li {
    padding:0 0 10px 0;
}
</style>
