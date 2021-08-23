<template>
  <div id="container"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
// import videosrc from '../assets/xgplayer-demo-720p.mp4';
const videosrc = 'http://localhost:5000/xgplayer-demo-720p.mp4'

export default defineComponent({
  setup() {
    let events = ['abort', 'canplaythrough','canplay', 'durationchange','emptied',
      'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'pause',
      'playing', 'play', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled',
      'suspend', 'timeupdate', 'volumechange', 'waiting'
    ];
   

    onMounted(() => {
      let container: HTMLElement = document.getElementById('container');

      let video = document.createElement('video');
      video.src = videosrc;
      video.muted = true;
      video.autoplay = true;
      container.appendChild(video);
      video.controls = true;
      let lastTime;
      events.forEach(item=>{
        video.addEventListener(item, function(e) {
          console.log(item, e);
          if(item === 'timeupdate') {
            console.log(video.currentTime);
          //   if(!lastTime) {
          //     lastTime = Date.now();
          //   } else {
          //     console.log(Date.now()-lastTime);
          //     lastTime = Date.now();
          //   }
          }
        })
      })
    }) 
  },
})
</script>
