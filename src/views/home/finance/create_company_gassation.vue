<template>
  <el-container direction="vertical">
    <div id="title">
      <span>创建商户和油站</span>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
      <el-row>
        <el-col :span="10">
          <el-form-item label="环境" prop="env_id">
            <el-select v-model="ruleForm.env_id" placeholder="请选择测试环境">
              <el-option label="团油--01环境" value="http://10.10.11.56:8001/"></el-option>
              <el-option label="团油--02环境" value="http://10.10.11.56:8002/"></el-option>
              <el-option label="团油--03环境" value="http://10.10.11.56:8003/"></el-option>
              <el-option label="团油--04环境" value="http://10.10.11.56:8004/"></el-option>
              <el-option label="团油--05环境" value="http://10.10.11.56:8005/"></el-option>
              <el-option label="团油--06环境" value="http://10.10.11.56:8006/"></el-option>
              <el-option label="团油--07环境" value="http://10.10.11.56:8007/"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="结算方式" prop="type">
            <el-select v-model="ruleForm.type" placeholder="请选择结算方式">
              <el-option label="预存款" value="1"></el-option>
              <el-option label="华夏" value="2"></el-option>
              <el-option label="中顺易" value="3"></el-option>
              <el-option label="平安" value="4"></el-option>
              <el-option label="中信" value="5"></el-option>
              <el-option label="D1" value="6"></el-option>
              <el-option label="预存油" value="7"></el-option>
              <el-option label="建行" value="8"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="请输入商户名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入商户名称"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="show">
        <el-col :span="10">
          <el-form-item label="请输入企业名称" prop="account_bank_name">
            <el-input v-model="ruleForm.account_bank_name" placeholder="请输入企业名称"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="show">
        <el-col :span="10">
          <el-form-item label="请输入法人姓名" prop="legal_name">
            <el-input v-model="ruleForm.legal_name" placeholder="请输入法人姓名"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="show">
        <el-col :span="10">
          <el-form-item label="请输入营业执照" prop="business_license">
            <el-input v-model="ruleForm.business_license" placeholder="请输入营业执照"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
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
import { company_create } from '@/api/http'
export default {
  data() {
    return {
      ruleForm: {
        type: '',
        name: '',
        account_bank_name: '',
        legal_name: '',
        business_license: '',
      },
      rules: {
        name: [{ required: true, message: '请输入油站ID', trigger: 'blur' }],
        type: [
          {
            required: true,
            message: '请选择结算方式',
            trigger: 'change',
          },
        ],
        env_id: [
          {
            required: true,
            message: '请选择测试环境',
            trigger: 'change',
          },
        ],
        account_bank_name: [{ required: true, message: '请输入企业名称', trigger: 'blur' }],
        legal_name: [{ required: true, message: '请输入法人姓名', trigger: 'blur' }],
        business_license: [{ required: true, message: '请输入营业执照', trigger: 'blur' }],
      },
      result: '',
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) return
        let result = await company_create(this.ruleForm)
        console.log(result.data)
        // if (result.data.status == 200) {
        //   this.result = '后端返回的结果:\n' + result.data.data.res
        // } else {
        //   this.result = '后端返回的结果:\n' + JSON.stringify(result.data)
        // }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
  computed: {
    show: function () {
      return this.ruleForm.type == 8 ? true : false
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
