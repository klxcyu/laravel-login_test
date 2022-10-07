<template>
    <v-row justify="center">
        <v-col
            cols="12"
            sm="10"
            md="8"
            lg="6"
        >
        <v-card ref="form">
            <v-card-title>로그인</v-card-title>
            <v-card-text>
            <v-text-field
                ref="email"
                v-model="email"
                :rules="emailRules"
                :error-messages="errorMessages"
                label="아이디(이메일 주소)"
                placeholder="아이디 입력"
                required
            ></v-text-field>
            <v-text-field
                ref="password"
                v-model="password"
                :rules="pwRules"
                :error-messages="errorMessages"
                label="비밀번호"
                placeholder="비밀번호 입력"
                type="password"
                required
            ></v-text-field>
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
                <v-tooltip
                v-if="formHasErrors"
                left
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on"
                    >
                    <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                </template>
                <span>지우기</span>
                </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn
                color="primary"
                text
                @click="submit"
            >
                로그인
            </v-btn>
            <v-btn
                color="warning"
                text
                to="/auth/register"
            >
                회원가입 {{ test }}
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
  </v-row>
</template>

<script lang="ts">
import { computed, ref } from '@vue/composition-api'

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
    setup() {
        const test = null


        return {
            test,
        }
    },
    data: () => ({
        emailRules: [
            value => !!value || '아이디를 입력해 주세요.',
            value => emailPattern.test(value) || '이메일 주소 형식이여야 합니다.',
        ],
        pwRules: [
            value => !!value || '비밀번호를 입력해 주세요.',
        ],
        errorMessages: '',
        formHasErrors: false,
        email: null,
        password: null,
    }),
    beforeCreate() {

    },
    mounted() {

    },
    beforeDestroy() {

    },
    computed: {
        form () {
            return {
                email: this.email,
                password: this.password
            }
        },
    },
    methods: {
        resetForm() {
            this.errorMessages = []
            this.formHasErrors = false

            Object.keys(this.form).forEach(f => {
                this.$refs[f].reset()
            })
        },
        submit() {
            this.formHasErrors = emailPattern.test(this.email) ? false : true

            Object.keys(this.form).forEach(f => {
                if(!this.form[f]) this.formHasErrors = true

                this.$refs[f].validate(true)
            })

            if(!this.formHasErrors) this.$_AUTH.login(this.form)
        },
    },
    watch: {
        name () {
            this.errorMessages = ''
        },
    },
}
</script>

<style scoped lang="scss">
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
