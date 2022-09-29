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
    watch: {
        $route(to, from) {
            if(to.name === 'login') this.show = false
            else this.show = true
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
