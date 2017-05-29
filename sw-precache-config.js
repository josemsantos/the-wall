module.exports = {
  runtimeCaching: [{
    urlPattern: /.*(cloudfront)(?!googleapis).*/,
    handler: 'networkFirst'
  }],
  dontCacheBustUrlsMatching: /^((?!index).)*$/,
  navigateFallback: 'index.html',
  navigateFallbackWhitelist: [/^((?!(service-worker\.js|manifest\.json)).)*$/],
  cacheId: '3',
  staticFileGlobs: [
    'images/qr.png'
  ]
};