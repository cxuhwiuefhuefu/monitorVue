import Vue from 'vue'
import App from './App.vue'

// 引入 main.js 放在 new Vue()之前
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

process.env.NODE_ENV === "production" &&  Sentry.init({
  dsn: 'https://beb850f662804bb187d4eb19af11f103@o902056.ingest.sentry.io/5842526',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
  release: 'ssp' + process.env.VERSION
});


// Sentry.init({
//   dsn: "https://beb850f662804bb187d4eb19af11f103@o902056.ingest.sentry.io/5842526", // 这里是你的 dsn 地址，注册完就有
//   integrations: [
//     new VueIntegration({
//       Vue,
//       tracing: true,
//       logErrors: true
//     }),
//     new Integrations.BrowserTracing(),
//   ],

//   // We recommend adjusting this value in production, or using tracesSampler
//   // for finer control
//   tracesSampleRate: 1.0,
// });


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
