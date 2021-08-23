import { createRouter, createWebHashHistory } from 'vue-router';

const Editor = () => import("./components/Editor.vue");
const Video = () => import("./components/Video.vue");
const routes = [
  {
    path: '/editor',  
    name: 'Editor',
    component: Editor
  },
  {
    path: '/video',  
    name: 'Video',
    component: Video
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
