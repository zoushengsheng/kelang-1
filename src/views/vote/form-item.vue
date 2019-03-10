<template>
<el-form-item label="您的姓名：【填空题】">
    <el-input v-if="question.type == 'text'"></el-input>
    <el-radio-group v-if="question.type == 'radio'">
        <el-radio :label="option.value" v-for="option in question.options">{{option.text}}</el-radio>
    </el-radio-group>
    <el-checkbox-group v-if="question.type == 'checkbox'">
        <el-checkbox :label="option.value" v-for="option in question.options"></el-checkbox>
    </el-checkbox-group>
</el-form-item>
</template>
<<script>
export default {
    props: {
        question: null
    }
}
</script>