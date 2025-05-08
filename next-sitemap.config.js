module.exports = {
    siteUrl: 'https://ai-pdf-rotate.vercel.app', // 替换为你的网站地址
    generateRobotsTxt: true, // 自动生成 robots.txt 文件
    sitemapSize: 7000, // 每个站点地图的最大条目数
    changefreq: 'daily', // 更新频率
    priority: 0.7, // 页面优先级
    exclude: ['/404', '/_error'], // 排除不需要索引的页面
    include: ['/tools/rotate-pdf'], // 包含特定页面
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  };