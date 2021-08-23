<template>
  <video @loadeddata="showFrame" controls muted autoplay class="video-source" src="../assets/xgplayer-demo-720p.mp4"></video>
  <div v-for="item in snapshootList" :key="item.index">
    <img :src="item.src" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      snapshootList: []
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  },
  methods: {
    showFrame(event: Event) {
      let video = event.target || {};
      // window.video1 = video;
      let duration = video.duration;
      let picnum =5;
      let step = duration/picnum;
      for(let i=0;i<picnum;i++) {
        setTimeout(()=>{
          this.snapshootList.push({
            src: this.getImage(video, step*i),
            index: i
          });
        },i*200)
      }
      

      // debugger
      // let scale = 0.8,video = event.target, 
			// canvas = document.createElement("canvas"); // 创建一个画布
			// canvas.width = video.videoWidth * scale;
			// canvas.height = video.videoHeight * scale;
			// canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height); 
			// try {
      //   // let poster = './src/assets/logo.png';
      //   let poster = canvas.toDataURL("image/png")
			// 	video.setAttribute("poster", poster);
      //   document.getElementById('img-poster').src = poster;
			// }
			// catch (err) {
			// 	console.log("Error: " + err);
			// }
    },
    getImage(video, time) {
      let scale = 0.8; 
        let canvas = document.createElement("canvas"); // 创建一个画布
        canvas.width = video.videoWidth * scale;
        canvas.height = video.videoHeight * scale;
        video.currenTime = time;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height); 
        try {
          // let poster = './src/assets/logo.png';
          return canvas.toDataURL("image/png")
          
        }
        catch (err) {
          console.log("Error: " + err);
        }
    },
  },
  
})
</script>

<style scoped>
.video-source {
  width: 200px;
  height: 200px;

}
</style>
