<template>
    <v-app class="login_page">
        <v-card
            elevation="2"
            outlined
            >
            <v-text-field
            label="아이디"
            :rules="rules"
            hide-details="auto"
            v-model="email"
            ></v-text-field>
            <v-text-field label="패스워드" type="password" v-model="password"></v-text-field>
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


const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
    data: () => ({
        rules: [
            value => !!value || 'Required.',
            value => (value || '').length <= 20 || 'Max 20 characters',
            value => {
                return emailPattern.test(value) || 'Invalid e-mail.'
            },
        ],
        loader: null,
        loading2: false,
        progressSettimeout: null,
        email: null,
        password: null,
    }),
    mounted() {
        this.settimeout = setTimeout(() => {
            this.successProgress()
        }, 1000);
    },
    beforeDestroy() {

    },
    methods: {
        ...mapActions(['successProgress', 'destroyProgress', 'startProgress']),
        login() {
            this.$axios.post('/api/auth/login', {
                email: this.email,
                password : this.password,
            })
            .then(res => {
                console.log(res)

            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                this.loading2 = false
                this.successProgress()
                this.loader = null
            })
        },

    },
    watch: {
        loader () {
            /* if(!emailPattern.test(this.email)) return false
            this.login() */
            this.startProgress()
            const l = this.loader
            this[l] = !this[l]
            this.login()
        },
    },
}
</script>

<style scoped lang="scss">
.v-card {
    padding:20px ;
}

.login_page {
    padding: 107px 0 0 0 !important;
    width:500px;
    margin:0 auto;
}
</style>
