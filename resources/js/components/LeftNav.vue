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
    width: 200px;
    top: 48px;
    padding: 20px 0;
}


</style>
