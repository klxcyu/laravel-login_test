<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example componen
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.');

            const users = [
                { 'user': 'fred', 'age': 48 },
                { 'user': 'brand', 'age': 36 },
                { 'user': 'fred', 'age': 40 },
                { 'user': 'brand', 'age': 34 }
            ]

            const sb = _.filter(users, user => {
                return user.age < 40
            })

            console.log(sb)
        }
    }
</script>
