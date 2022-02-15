<template>
  <el-container direction="vertical">
    <div id="title">
      <span>会员宝扫码验证</span>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="10">
          <el-form-item label="手机号" prop="phone"> <el-input v-model="ruleForm.phone" placeholder="请输入要查询的手机号"></el-input> </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="油站id" prop="gas_id">
            <el-input v-model="ruleForm.gas_id" placeholder="油站需开通会员宝"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="环境" prop="env_id">
            <el-select v-model="ruleForm.env_id" placeholder="请选择测试环境">
              <el-option label="团油--02环境" value="145"></el-option>
              <el-option label="团油--03环境" value="144"></el-option>
              <el-option label="团油--04环境" value="143"></el-option>
              <el-option label="团油--05环境" value="142"></el-option>
              <el-option label="团油--06环境" value="139"></el-option>
              <el-option label="团油--07环境" value="141"></el-option>
            </el-select>
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
    <div id="el_desc" v-html="desc"></div>
  </el-container>
</template>
<script>
import { hunterQR } from '@/api/http'
export default {
  data() {
    return {
      ruleForm: {
        env_id: '',
        gas_id: '',
        phone: '',
      },
      rules: {
        gas_id: [{ required: true, message: '请输入油站ID', trigger: 'blur' }],
        env_id: [
          {
            required: true,
            message: '请选择测试环境',
            trigger: 'change',
          },
        ],
        phone: [
          { required: true, message: '请输入要查询的手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '手机号长度为15位数字', trigger: 'blur' },
        ],
      },
      result: '',
      desc: '<span>查看油站是否开通了会员宝<br>chezhubangapp.gs_rec_auth<br><br>会员宝油站下的加油员列表<br>chezhubangapp.gs_fuel_man<br><br>猎人【加油员】信息表<br>city_hunter.gas_hunter_qr<br><br>扫码绑定关系表<br>city_hunter.gas_hunter_user<br></span>',
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) return
        let result = await hunterQR(this.ruleForm)
        console.log(result.data)
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

#el_desc {
  margin: 10px;
  color: #58666e;
  font-size: 14px;
}
</style>
