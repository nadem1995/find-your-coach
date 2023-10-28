<template>
    <base-card v-for="req in requests" :key="req.email">
    <h5>{{req.email}}</h5>
    <p>{{ req.message }}</p>
    </base-card>
    <div></div>
</template>

<script>
    export default {

        computed:{
            requests(){
                return this.$store.getters.getRequests;
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>