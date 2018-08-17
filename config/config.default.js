// 设置cookie安全字符
exports.keys = 'eggcookie';
// 添加view配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
};
// 添加news的配置项
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0'
};

// 配置使用的中间件
exports.middleware = [
  'robot'
];

exports.robot = {
  ua: [
    /Baiduspider/i
  ]
};

// 可以根据不同的环境加载不同的配置文件，参考 https://eggjs.org/zh-cn/basics/config.html#%E9%85%8D%E7%BD%AE%E5%8A%A0%E8%BD%BD%E9%A1%BA%E5%BA%8F



