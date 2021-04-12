<template>
    <div class="red">
        <input :value="value" @input="onInput"/>
    </div>
</template>
<script>
export default{
    name: 'MyInput',
    props: {
        value:{
            type:String
        }
    },
    methods:{
        onInput(e){
            const value = e.target.value
            this.$emit('input',value)
        }
    }
}
</script>

<style scoped>
    .red{
        background: red;
        display: inline-block;
    }
</style>
