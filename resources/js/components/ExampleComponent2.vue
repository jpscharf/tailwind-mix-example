<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component 2</div>

                    <div class="card-body">
                        I'm an example component #2
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component 2 mounted.')
        }
    };
</script>

<style>
    .component-2 {
        display: block;
    }
</style>
