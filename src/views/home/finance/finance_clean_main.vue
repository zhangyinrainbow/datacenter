<template>
  <el-container direction="vertical">
    <div id="title">
      <span>清分主流程巡检</span>
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
            <el-select v-model="ruleForm.type" multiple placeholder="请选择结算方式">
              <el-option label="预存款" value="1"></el-option>
              <el-option label="华夏" value="2"></el-option>
              <el-option label="中顺易" value="3"></el-option>
              <el-option label="平安" value="4"></el-option>
              <el-option label="中信" value="5"></el-option>
              <el-option label="预存油" value="6"></el-option>
              <el-option label="预存款(活动)" value="7"></el-option>
              <el-option label="华夏(活动)" value="8"></el-option>
              <el-option label="中顺易(活动)" value="9"></el-option>
              <el-option label="平安(活动)" value="10"></el-option>
              <el-option label="中信(活动)" value="11"></el-option>
              <el-option label="预存油(活动)" value="12"></el-option>
              <el-option label="渠道(团油收款)" value="13"></el-option>
              <el-option label="渠道(暂无)" value="14"></el-option>
              <el-option label="渠道(预存)" value="15"></el-option>
              <el-option label="渠道(D1)" value="16"></el-option>
              <el-option label="渠道(T1)" value="17"></el-option>
              <el-option label="渠道(实时)" value="18"></el-option>
              <el-option label="渠道(月结)" value="19"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="接收人邮箱地址" prop="email">
            <el-input v-model="ruleForm.email" placeholder="请输入接收人邮箱地址"></el-input>
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
import { finance_clean } from '@/api/http'
export default {
  data() {
    return {
      ruleForm: {
        env_id: '',
        type: '',
        email: '',
      },
      rules: {
        email: [{ required: true, message: '请输入接收人邮箱地址', trigger: 'blur' }],
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
      },
      result: '',
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) return
        this.ruleForm.type = this.ruleForm.type.toString()
        let result = await finance_clean(this.ruleForm)
        console.log(result.data)
        // if (result.data.status == 200) {
        //   this.result = '后端返回的结果:\n' + result.data.data.res
        // } else {
        //   this.result = '后端返回的结果:\n' + JSON.stringify(result.data)
        // }
        // 增加备注
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
