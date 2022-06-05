 <template>
  <div id="app">
    <Navigation />
    <Top />
    <Middle />
    <Upload />
    <h3>综合课程设计 made by 王涛</h3>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TextRes from "./components/text.vue";
import Upload from "./components/upload.vue";
import PictureSource from "./components/picture.vue";
import Navigation from "./components/Navigation.vue";
import Introduction from "./components/Introduction.vue";
import FormRec from "./components/FormRec.vue";
import Top from "./components/top.vue";
import Middle from "./components/middle.vue";

export default {
  name: "App",
  components: {
    Upload,
    TextRes,
    PictureSource,
    Navigation,
    Introduction,
    FormRec,
    Top,
    Middle,
  },
};
</script>
