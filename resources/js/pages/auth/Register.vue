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
            <form ref="form" @submit.prevent="submit">
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
import { ref, onMounted, computed, getCurrentInstance } from 'vue'
import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
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
    setup() {
        const app = getCurrentInstance().proxy

        let name = ref('')
        let email = ref('')
        let password = ref('')
        let password_confirmation = ref('')

        const observer = ref(null)

        onMounted(() => {

        })

        const form = computed(() => {
            return {
                name: name.value,
                email: email.value,
                password: password.value,
                password_confirmation: password_confirmation.value,
            }
        })

        function submit() {
            observer.value.validate()
            app.$_AUTH.register(form.value)
        }

        function clear() {
            name.value = ''
            email.value = ''
            observer.value.reset()
        }

        return {
            name,
            email,
            password,
            password_confirmation,
            observer,
            submit,
            clear,
        }
    }
}
</script>

<style scoped lang="scss">


</style>
