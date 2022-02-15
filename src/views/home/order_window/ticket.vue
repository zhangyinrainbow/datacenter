<template>
  <el-container direction="vertical">
    <div id="title">
      <span>完单页券包弹窗</span>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="10">
          <el-form-item label="油站id" prop="gas_id">
            <el-input v-model="ruleForm.gas_id" placeholder="多个油站ID用英文逗号分开"></el-input>
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
      <el-form-item label="是否生效" prop="is_deleted">
        <el-radio-group v-model="ruleForm.is_deleted">
          <el-radio v-model="ruleForm.is_deleted" label="0">生效</el-radio>
          <el-radio v-model="ruleForm.is_deleted" label="1">失效</el-radio>
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
import { marketingStrategy } from '@/api/http'
export default {
  data() {
    return {
      ruleForm: {
        database_id: '',
        gas_id: '',
        is_deleted: '',
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
        is_deleted: [{ required: true, message: '请选择是否生效', trigger: 'change' }],
      },
      result: '',
      desc: '<span>会员宝抽奖<br>czb_activity库<br>prize_draw_activity 抽奖活动表<br>activity_publish        广告发布表<br>new_ad_info  新广告信息表<br><br>业务创建步骤：<br>赫拉=&gt;油站会员宝=&gt; 抽奖活动， 下创建活动，内容可以复制之前的活动，奖励选择会员宝专属奖励，  必中时间设定，填好油站id文件上传，有效期内保存<br>然后将连接配置到 宙斯 =&gt;营销平台=&gt;营销活动=&gt;广告（新） 在 投放位置 中搜索 会员宝完单抽奖【完单抽奖】若有，更改一下连接，和生效时间，若没有，重新配置一下该位置，连接填写 赫拉生成的连接。测试环境小程序抽奖不能跳转，</span>',
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (!valid) return
        let result = await marketingStrategy(this.ruleForm)
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
