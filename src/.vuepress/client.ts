import { defineClientConfig } from "@vuepress/client";
//import Antd from 'ant-design-vue';
import "vuepress-theme-hope/presets/bounce-icon.scss"
//import 'ant-design-vue/dist/reset.css';
//import "./styles/element-variables.scss"
import Antd from 'ant-design-vue';
//import 'ant-design-vue/dist/reset.css';


export default defineClientConfig({
  enhance: ({ app, router, siteData }) => {
    app.use(Antd);
  },
});