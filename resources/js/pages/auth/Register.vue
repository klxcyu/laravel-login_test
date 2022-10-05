<template>
    <v-card
        elevation="2"
        outlined
    >
        <validation-observer
            ref="observer"
            v-slot="{ invalid }"
        >
            <v-card-title> 회원가입 </v-card-title>
            <form @submit.prevent="submit">
                <validation-provider
                    v-slot="{ errors }"
                    name="name"
                    rules="required|max:20"
                >
                    <v-text-field
                    v-model="name"
                    :counter="20"
                    :error-messages="errors"
                    label="성함"
                    required
                    ></v-text-field>
                </validation-provider>
                <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email|max:20"
                >
                    <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="아이디(이메일)"
                    :counter="20"
                    required
                    ></v-text-field>
                </validation-provider>
                <validation-provider
                    v-slot="{ errors }"
                    name="password"
                    rules="required"
                >
                    <v-text-field
                    v-model="password"
                    :error-messages="errors"
                    label="비밀번호"
                    type="password"
                    required
                    ></v-text-field>
                </validation-provider>
                <validation-provider
                    v-slot="{ errors }"
                    name="password_confirmation"
                    rules="required"
                >
                    <v-text-field
                    v-model="password_confirmation"
                    :error-messages="errors"
                    label="비밀번호 확인"
                    type="password"
                    required
                    ></v-text-field>
                </validation-provider>
                <v-btn
                    class="mr-4"
                    type="submit"
                    :disabled="invalid"
                >
                    회원가입
                </v-btn>
                <v-btn @click="clear">
                    재작성
                </v-btn>
            </form>
        </validation-observer>
    </v-card>
</template>

<script>
    import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
    import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
    import { createNamespacedHelpers } from 'vuex';
    const progress = createNamespacedHelpers('modules/progress');
    const auth = createNamespacedHelpers('modules/auth');
    setInteractionMode('eager')

    extend('digits', {
        ...digits,
        message: '{_field_} needs to be {length} digits. ({_value_})',
    })

    extend('required', {
        ...required,
        message: '필수항목 입니다!',
    })

    extend('max', {
        ...max,
        message: '최대 글자수는 {length}자 입니다.',
    })

    extend('regex', {
        ...regex,
        message: '{_field_} {_value_} does not match {regex}',
    })

    extend('email', {
        ...email,
        message: '이메일 형식이 아닙니다.',
    })

    export default {
        components: {
            ValidationProvider,
            ValidationObserver,
        },
        data: () => ({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }),
        mounted() {
            this.settimeout = setTimeout(() => {
                this.$progress.success()
            }, 1000);
        },
        methods: {
            ...auth.mapActions(['setUserToken', 'setIsLogin']),
            submit () {
                this.$refs.observer.validate()
                this.$progress.start()
                this.$axios.post('/api/auth/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                .then(res => {
                    if(res.status === 200) {
                        this.$auth.login(res.data.access_token)
                        this.$msg.success('회원가입이 완료 되었습니다!')
                        this.$router.push('/')
                    }
                })
                .catch(err => {
                    if(!err.response.data?.errors) {
                        switch(err.response.data.message) {
                            case 'duplicate':
                                this.$msg.warning('이미 존재하는 아이디 입니다.')
                                break;
                            case 'The given data was invalid.':
                                this.$msg.error('요청 데이터가 옳바르지 않습니다!')
                                break;
                            default:
                                this.$msg.error('처리 중 오류가 발생하였습니다.')
                                break;
                        }
                    } else {
                        const errors = err.response.data.errors
                        Object.keys(errors).forEach(k => {
                            this.$msg.error(errors[k][0])
                        })
                    }
                })
                .finally(() => {
                    setTimeout(() =>this.$progress.success(), 1000)
                })

            },
            clear () {
                this.name = ''
                this.email = ''
                this.$refs.observer.reset()
            },
        },
    }
</script>

<style scoped lang="scss">


</style>
