<template>
    <div id="app">
        <ProgressLinear />
        <Header />
        <main>
            <LeftNav />
            <router-view class="main_contents" />
        </main>
    </div>
</template>

<script>
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import CardImg1 from '@/components/CardImg1'
import ProgressLinear from '@/components/ProgressLinear'
import LeftNav from '@/components/LeftNav'

export default {
    components: {
        Header,
        Footer,
        CardImg1,
        ProgressLinear,
        LeftNav
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

.main_contents {
    padding: 70px 0 0 200px;
}

.v-application--wrap {
    min-height: 0vh !important;
}
</style>
