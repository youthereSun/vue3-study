<template>
  <div id="page11">
    <a-card class="card-body" title="intersectionObserver原理">
      <p>let observer=new IntersectionObserver(callback,option)</p>
      <p>callback函数返回的是一个entries数组，每个项包括了当前元素相对于父元素的值</p>
      <p>option中使用root配置父元素，默认为视口元素</p>
      <p>isIntersecting表示当前元素是否与父元素交叉</p>
      <lazy-load-imgs :data="state.list" boxHeight="300px" boxWidth="300px"/>
    </a-card>

    <a-card class="card-body" title="无限滚动视频">
      <lazy-load-videos @loadMore="loadVideos" :data="state.videoList" boxHeight="500px" boxWidth="300px"/>
    </a-card>
    <a-card class="card-body" title="方法">
      disconnect()
      使IntersectionObserver对象停止监听工作。
      <br />
      observe()
      使IntersectionObserver开始监听一个目标元素。
      <br />
      takeRecords()
      返回所有观察目标的IntersectionObserverEntry对象数组。
      <br />
      unobserve()
      使IntersectionObserver停止监听特定目标元素。
    </a-card>

  </div>
</template>

<script>
export default {
  name: "index",
}
</script>
<script setup>
import LazyLoadImgs from "./components/LazyLoadImgs.vue";
import LazyLoadVideos from "./components/LazyLoadVideos.vue";
import {reactive} from "vue";

const state = reactive({
  list: [
    {
      id: 1,
      des: '第1张',
      url: 'https://www.qqpao.com/uploads/allimg/170729/10-1FH9110925.gif'
    },
    {
      id: 2,
      des: '第2张',
      url: 'https://uploadfile.huiyi8.com/2014/1107/20141107114402602.gif'
    },
    {
      id: 3,
      des: '第3张',
      url: 'https://img.zcool.cn/community/01e93a5763c7720000018c1bc52180.GIF'
    },
    {
      id: 4,
      des: '第4张',
      url: 'https://www.qqpao.com/uploads/allimg/190410/21-1Z410162F6-50.gif'
    }
  ],
  videoList: [
    {
      id: 1,
      url: 'https://stream.mux.com/bictqEaM7K02pMCMBssCJ4TKng01TPZHH2/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2NjAwMjU3NDUsImF1ZCI6InYiLCJzdWIiOiJiaWN0cUVhTTdLMDJwTUNNQnNzQ0o0VEtuZzAxVFBaSEgyIn0.L07CKzuoEB5ISQnh-0S9at6VhGjZNC0hT85fOngWA_tp50bNs7pFIvX_6crOdBp1mnm9ydaojDy1SWOBu4becs_c2yPhVEVc485TAKl46Ydcarw0t5_M0j_51MxCHpmMKzBT0mWY1E8Op6AemhNYlIpI9SwBBavQbfl1doGrsT4c7pYLqZ6461zse6AJw3xPKFJnjGyfAeK80OQulQQ7WXvKemjbTWLdQPJMgQNjouMuRRVLsm5ATf9hZq-gG-5whQZmY8ge5gaZGLlevIWZJ3SA0HpSpQNLq2Rhh-HG2UGIqnxMNsEl-5Tb37N9OfnZ74a3bUnAjrJzt025b_EyjQ'
    },
    {
      id: 2,
      url: 'https://storage.coverr.co/videos/H1KJI6kMnpOtRcG2ZB1KPrbP009RLpuq8?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjYwMDE0OTE1fQ.4R2NweM-5Q-mZwsubhYs3JUzt9Bk-bPysUb69kw1prY'
    }, {
      id: 3,
      url: 'https://storage.coverr.co/videos/Nv4Gqow7scn9XalkdfhPSLNjwNWrYYpE?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjYwMDE0OTE1fQ.4R2NweM-5Q-mZwsubhYs3JUzt9Bk-bPysUb69kw1prY'
    }
  ]
})

const loadVideos=()=>{
  let more=[
    {
      id:5,
      url:'https://ak.picdn.net/shutterstock/videos/1072143227/preview/stock-footage-carefree-young-vivacious-woman-dancing-alone-barefoot-on-sofa-in-modern-living-room-at-home-happy.webm'
    },
    {
      id:6,
      url:'https://storage.coverr.co/videos/yPTw6YdCBBY38Atem01H2UXqPNRfHjbHJ?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjYwMDE0OTE1fQ.4R2NweM-5Q-mZwsubhYs3JUzt9Bk-bPysUb69kw1prY'
    }
  ]
  state.videoList.push(...more)
}
</script>

<style scoped lang="less">
#page11 {
  width: 100vw;
  height: 100vh;
  padding: 10px;

  .card-body {
    margin: 20px;
  }
}

</style>