<template>
  <el-container direction="vertical">
    <!-- <div class="block">
      <el-timeline v-for="item in gitlab_list" :key="item.id">
        <el-timeline-item :timestamp="rTime(item.committed_date)" placement="top">
          <el-card>
            <h4>{{ item.message }}</h4>
            <p>提交人:{{ item.committer_name }}</p>
            <p>提交于:{{ rTime(item.committed_date) }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div> -->
    <div ref="echart" class="main"></div>
    <div ref="echart_line" class="main"></div>
  </el-container>
</template>

<script>
import * as echarts from 'echarts'
// import { get_gitlab_info } from '@/api/http'

export default {
  data() {
    return {
      gitlab_list: [],
    }
  },
  mounted() {
    this.init()
    this.echart_line()
    // this.getGitlabInfo()
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.echart)
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts bar示例',
          x: 'center',
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      })
    },
    echart_line() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.echart_line, 'macarons')
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts line入门示例',
          x: 'center',
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            align: 'left',
          },
        },
        legend: {
          top: 25,
          data: ['定时巡检次数', '外部发布次数'],
          textStyle: {},
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        toolbox: {
          right: 15,
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['01-13', '01-14', '01-15', '01-16', '01-17', '01-18', '01-19'],
          axisLine: {},
        },
        yAxis: {
          type: 'value',
          axisLine: {},
        },
        series: [
          {
            name: '定时巡检次数',
            type: 'line',
            data: [0, 0, 0, 0, 0, 0, 0],
          },
          {
            name: '外部发布次数',
            type: 'line',
            data: [0, 0, 0, 0, 0, 0, 0],
          },
        ],
      })
    },
    // async getGitlabInfo() {
    //   const result = await get_gitlab_info()
    //   this.gitlab_list = result.data
    // },
    rTime(date) {
      var json_date = new Date(date).toJSON()
      return new Date(+new Date(json_date) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, ' ')
        .replace(/\.[\d]{3}Z/, '')
    },
  },
}
</script>

<style lang="less" scoped>
el-container {
  justify-content: center;
  padding: 0px;
}

.main {
  width: 50%;
  height: 400px;
}

.el-card {
  width: 350px;
  height: 165px;
}

.block {
  height: 300px;
  width: 408px;
  overflow-y: auto;
  margin: 15px;
  margin-bottom: 50px;
}
.el-timeline {
  padding: 0px;
}
.el-timeline-item__wrapper {
  padding: 0px;
}
</style>
