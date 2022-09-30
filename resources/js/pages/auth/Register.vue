<template>
    <validation-observer
        ref="observer"
        v-slot="{ invalid }"
    >
        <v-card-title> 회원가입 </v-card-title>
        <form @submit.prevent="submit">
            <validation-provider
                v-slot="{ errors }"
                name="name"
                rules="required|max:10"
            >
                <v-text-field
                v-model="name"
                :counter="10"
                :error-messages="errors"
                label="성함"
                required
                ></v-text-field>
            </validation-provider>
            <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
            >
                <v-text-field
                v-model="email"
                :error-messages="errors"
                label="아이디(이메일)"
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
</template>

<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import { mapActions } from 'vuex';

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
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
            this.successProgress()
        }, 1000);
    },
    methods: {
        ...mapActions('modules/progress', ['successProgress', 'destroyProgress', 'startProgress']),
        submit () {
            this.$refs.observer.validate()
            console.log('작동')
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
