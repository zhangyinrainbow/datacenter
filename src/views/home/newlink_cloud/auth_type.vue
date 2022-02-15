<template>
  <el-container direction="vertical">
    <div id="title">
      <span>查询uid和来源</span>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="10">
          <el-form-item label="手机号" prop="phone"> <el-input v-model="ruleForm.phone" placeholder="请输入要查询的手机号"></el-input> </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="环境" prop="env">
        <el-select v-model="ruleForm.env" placeholder="请选择数据库">
          <el-option label="能链云" value="1"></el-option>
          <el-option label="高盛" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <el-container id="el_result" direction="vertical">
        <span v-text="result"></span>
      </el-container>
    </el-form>
  </el-container>
</template>
<script>
import { uid_auth_type } from '@/api/http'
export default {
  data() {
    return {
      ruleForm: {
        phone: '',
        env: '',
      },
      rules: {
        phone: [
          { required: true, message: '请输入要查询的手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '手机号长度为15位数字', trigger: 'blur' },
        ],
        env: [
          {
            required: true,
            message: '请选择测试环境',
            trigger: 'change',
          },
        ],
      },
      result: '',
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) return
        let result = await uid_auth_type(this.ruleForm)
        if (result.data.status == 200) {
          this.result = '后端返回的结果:\n' + result.data.data.res
        } else {
          this.result = '后端返回的结果:\n' + JSON.stringify(result.data)
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
#title {
  height: 49px;
  font-size: 16px;
  color: #414c52;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.el-form {
  background-color: #fff;
  margin: 12px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding-top: 20px;
}

#el_result {
  padding: 20px 50px 20px 50px;
}
</style>
