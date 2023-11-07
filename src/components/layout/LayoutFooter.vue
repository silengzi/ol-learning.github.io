<template>
  <!-- 页尾 footer -->
  <!-- 
    1. 运行天数 2022 1 29 开始
    2. 第几个访客 这个得用 axios
    3. px 2 rem
   -->
  <div id="layout_header">
    <!-- ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ ኈ ቼ ዽ ጿ -->
    <!-- ◔̯◔ -->
    <div>
      <div class="time">
        本站已经勉强运行了
        <span>&nbsp;{{day}}&nbsp;</span>天
        <span class="time_span">&nbsp;{{hour}}&nbsp;</span>时
        <span class="time_span">&nbsp;{{minute}}&nbsp;</span>分
        <span class="time_span">&nbsp;{{second}}&nbsp;</span>秒
      </div>  <!-- 2022 1 29 -->
      <div class="number">您是本站的第&nbsp;{{number}}&nbsp;个访客 &nbsp;&nbsp; (˘͈ᵕ ˘͈❀)</div>
    </div>
  </div>
</template>

<script>
import request from '@/network/request.js'  // 网络请求相关

export default {
  name: 'layout_header',
  data() {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      number: 0,  // 访客数(created就+1)
    }
  },
  methods: {
    // 计算本站运行了多久
    getTime() {
      let start = new Date("2022/1/29 0:00:00") /* 开始时间 */
      let start_time = start.getTime()  /* 开始时间时间戳长度 */
      let now = new Date()  /* 现在时间 */
      let now_time = now.getTime()  /* 现在时间时间戳长度 */
      let run_time = now_time - start_time  /* 运行时长 */
      let one_day_time = 24 * 60 *60 * 1000 /* 一天的时间戳长度 */
      let day = run_time / one_day_time /* 总运行时间 / 一天的时间 = 运行了几天 */
        this.day = Math.floor(day)  /* 向下取整 */
      let hour = (day - this.day) * 24
        this.hour = Math.floor(hour)
      let minute = (hour - this.hour) * 60
        this.minute = Math.floor(minute)
      let second = (minute - this.minute) * 60
        this.second = Math.floor(second)
    }
  },
  created() {
    // 获取运行时间
    setInterval(() => {
      this.getTime()
    }, 1000)

    // 获取访客人数
    request({
      url: 'vnum',
    }).then((res) => {
      let number = res.data.data
      this.number = number
    }).catch((err) => {
      console.log(err);
    })
  }
}
</script>

<style scoped lang="less">
#layout_header {
  /* position: fixed;
  bottom: 0;
  right: 0; */
  width: 100%;
  font-size: 0.875rem;
  text-align: center;
  padding: 0 1.25rem 0.1875rem;

  >div {
    border-top: 0.0625rem solid #fff;

    >div {  // 这个是控制每一行的
      line-height: 1.125rem;
      height: 1.125rem;
    }

    .time {
      .time_span {
        min-width: 1.375rem;
        width: 1.25rem;
        display: inline-block;
      }
    }
  }
}
</style>