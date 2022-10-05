<template>
    <ul v-if="show">
        <li>
            Git
        </li>
        <li>
            Laravel
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            show: true,
        }
    },
    beforeMount() {
        this.show = this.$route.matched.some(record => record.meta.leftNavOff) ? false : true
    },
    watch: {
        $route(to, from) {
            this.show = to.matched.some(record => record.meta.leftNavOff) ? false : true
        }
    }
}
</script>

<style scoped lang="scss">
ul {
    position: fixed;
    top: 0;
    left: 100px;
    border-right: 1px solid #ddd;
    bottom: 0;
    padding: 70px 50px 70px 0;
}


</style>
