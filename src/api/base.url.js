export const BASE_URL = (function() {
  let url = '';
  switch (process.env.NODE_ENV) {
    case 'development':
      //url = 'http://localhost:8088/api'; //这里是本地的请求url,对应vue应用在本地的port
      url = window.location.origin; //生产环境url
      break;
    case 'production':
      url = window.location.origin; //生产环境url
      break;
  }
  return url;
})();
