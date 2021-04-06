<template>
    <div class="red">
        这里是demo内部
        {{message}}
        <button @click="fn">call fn</button>
    </div>
</template>

<script>
    export default{
        props:['message','fn']
    }
</script>

<style scoped>
.red{
    color:red
}
</style>
