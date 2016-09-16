// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });

// fis.match('*', {
//   useHash: false
// });

// fis.match('*.js', {
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });

fis.match('/modules/**.js', {
  isMod: true
})

fis.match('/modules/(**).js', {
  isMod: true,
  moduleId: '$1'
})


fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
})


//html/css/js to link
// fis-conf.js
fis.match('*.html', {
    useMap: true
});

fis.match('*.{js,css}', {
    // 开启 hash
    useHash: true
});


fis.match('widget/*.{php,js,css}', {
  isMod: true
});

fis.match('::package', {
  spriter: fis.plugin('csssprites')
});

//fis3-hook-module
fis.hook('module', {
  mode: 'amd' // 模块化支持 amd 规范，适应 require.js
});