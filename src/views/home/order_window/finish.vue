<template>
  <el-container direction="vertical">
    <div id="title">
      <span>完单页消返弹窗</span>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="10">
          <el-form-item label="油站id" prop="gas_ids">
            <el-input v-model="ruleForm.gas_ids" placeholder="多个油站ID用英文逗号分开"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="环境" prop="database_id">
        <el-select v-model="ruleForm.database_id" placeholder="请选择测试环境">
          <el-option label="团油--02环境" value="13"></el-option>
          <el-option label="团油--03环境" value="14"></el-option>
          <el-option label="团油--04环境" value="11"></el-option>
          <el-option label="团油--05环境" value="10"></el-option>
          <el-option label="团油--06环境" value="9"></el-option>
          <el-option label="团油--07环境" value="12"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否生效" prop="yn">
        <el-radio-group v-model="ruleForm.yn">
          <el-radio v-model="ruleForm.yn" label="1">生效</el-radio>
          <el-radio v-model="ruleForm.yn" label="0">失效</el-radio>
        </el-radio-group>
      </el-form-item>
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
import { finishOrderStrategy } from '@/api/http'
export default {
  data() {
    return {
      ruleForm: {
        database_id: '',
        gas_ids: '',
        yn: '',
      },
      rules: {
        gas_ids: [{ required: true, message: '请输入油站ID', trigger: 'blur' }],
        database_id: [
          {
            required: true,
            message: '请选择测试环境',
            trigger: 'change',
          },
        ],
        yn: [{ required: true, message: '请选择是否生效', trigger: 'change' }],
      },
      result: '',
      desc: '<span>自动化返利数据库<br>czb_activity库<br>gas_group     消返油站组<br>gas_rel_group   消返油站编码关系表<br>finish_order_strategy   消返策略表<br><br>业务步骤：<br>赫拉=&gt;智能营销=&gt;油站分组_随机免单 下面创建一个油站组，指定油站id<br>然后在 自动化返利tab下 创建策略<br></span>',
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) return
        let result = await finishOrderStrategy(this.ruleForm)
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
