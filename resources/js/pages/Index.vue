<template>
    <div>
        <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="width"
            :stroke-linecap="lineCap"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
        ></v-sparkline>
        <ul>
            <li>
                <v-card
                    class="mx-auto"
                    max-width="400"
                    tile
                >
                    <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Single-line item</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>

                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Two-line item</v-list-item-title>
                        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle>
                        Secondary line text Lorem ipsum dolor sit amet,
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                        consectetur adipiscing elit.
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </v-card>
            </li>
            <li>
                <v-card
                    class="mx-auto"
                    max-width="400"
                    tile
                >
                    <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Single-line item</v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>

                    <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title>Two-line item</v-list-item-title>
                        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>

                    <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title>Three-line item</v-list-item-title>
                        <v-list-item-subtitle>
                        Secondary line text Lorem ipsum dolor sit amet,
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                        consectetur adipiscing elit.
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
                </v-card>
            </li>
        </ul>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapGetters } = createNamespacedHelpers('modules/progress');

const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

export default {
    data: () => ({
        width: 2,
        radius: 10,
        padding: 8,
        lineCap: 'round',
        gradient: gradients[5],
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        gradientDirection: 'top',
        gradients,
        fill: false,
        type: 'trend',
        autoLineWidth: false,
        settimeout: null,
    }),
    beforeMount() {

    },
    mounted() {
        this.settimeout = setTimeout(() => {
            this.successProgress()
        }, 1000);
    },
    beforeDestroy() {
        /* this.destroyProgress() */
        clearTimeout(this.settimeout)
    },
    methods: {
        ...mapActions([
            'startProgress',
            'successProgress',
            'destroyProgress'
        ])
    },
    computed: {
        ...mapGetters([
            'value',
            'show',
        ]),
    },

}
</script>

<style lang="scss">

</style>
