<template>
    <div id="app">
        <ProgressLinear />
        <Header />
        <main>
            <router-view />
        </main>

    </div>
</template>

<script>
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import CardImg1 from '@/components/CardImg1'
import ProgressLinear from '@/components/ProgressLinear'


export default {
    components: {
        Header,
        Footer,
        CardImg1,
        ProgressLinear
    },
    watch: {
        $route(to, from) {

        }
    }
}
</script>

<style>
main {
    width:1200px;
    margin:0 auto;
}

.v-application--wrap {
    min-height: 0vh !important;
}
</style>
