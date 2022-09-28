<template>
    <div id="app">
        <Header />
        <main>
            <CardImg1 />
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import CardImg1 from '@/components/CardImg1'


export default {
    components: {
        Header,
        Footer,
        CardImg1

    }
}
</script>

<style>
#app {
    width:1200px;
    margin:0 auto;
}


</style>
