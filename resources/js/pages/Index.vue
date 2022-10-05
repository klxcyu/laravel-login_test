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
            this.$_PROGRESS.success()
        }, 1000);
    },
    beforeDestroy() {
        clearTimeout(this.settimeout)
    },
    methods: {

    },
    computed: {

    },
}
</script>

<style scoped lang="scss">
ul li {
    padding:0 0 10px 0;
}
</style>
