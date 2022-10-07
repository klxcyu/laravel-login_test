<template>
    <div>
        {{ username }}
        <v-btn @click="changeName">changeUserName</v-btn>
        제품명 :{{ name }}, 가격 {{ price }}
        <v-btn @click="changeProduct">changeProduct</v-btn>
        <v-input type="text" v-model="username"></v-input>
    </div>
</template>

<script>

import { reactive, ref, toRefs, onMounted, inject, getCurrentInstance } from 'vue'

export default {
    setup() {

        const username = ref('scalper')

        function changeName() {
            username.value = '하이'
        }

        const state = reactive({
            name: 'TV',
            price: 100,
        })

        function changeProduct() {
            state.name = "세탁기"
            state.price = 5000
        }

        onMounted(() => {


        })

        return {
            username,
            changeName,
            changeProduct,
            ...toRefs(state),
        }
    },
}
</script>

<style>

</style>
