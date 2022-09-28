<template>
 <v-app>
    <v-card
        elevation="2"
        outlined
        >
        <v-text-field
        label="아이디"
        :rules="rules"
        hide-details="auto"
        ></v-text-field>
        <v-text-field label="패스워드"></v-text-field>
        <v-btn
            class="ma-2"
            :loading="loading2"
            :disabled="loading2"
            color="success"
            @click="loader = 'loading2'"
        >
            Custom Loader
            <template v-slot:loader>
                <span>Loading...</span>
            </template>
        </v-btn>
    </v-card>
</v-app>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('modules/progress');

export default {
    data: () => ({
        rules: [
            value => !!value || 'Required.',
            value => (value || '').length <= 20 || 'Max 20 characters',
            value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
            },
        ],
        loader: null,
        loading2: false,
        progressSettimeout: null,
    }),
    mounted() {
        this.settimeout = setTimeout(() => {
            this.successProgress()
        }, 1000);
    },
    beforeDestroy() {

    },
    methods: {
        ...mapActions(['successProgress', 'destroyProgress', 'startProgress'])
    },
    watch: {
        loader () {
            this.startProgress()
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => {
                this[l] = false
                this.successProgress()
            }, 3000)

            this.loader = null
        },
    },
}
</script>

<style scoped>
.v-card {
    padding:20px ;
}
</style>
