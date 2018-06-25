var OSS = require('ali-oss').Wrapper;
var fs = require('fs');
var path = require('path');
var ENV = process.env.APPENV;


var client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAItNo7dzxDTKX0',
  accessKeySecret: 'fTbGpaeN3KujuD3cNiCfSzz1O0rJR5',
  bucket: 'jianghu2017'
});

fs.readdir(path.resolve(__dirname, '..', 'dist'), function(err, files) {
  if (files) {
    files.map(fileName => {
      if (ENV) {
        client.put(`admin/${ENV}/${fileName}`, path.resolve(__dirname, '..', 'dist', fileName)).then(function (val) {
          console.log(val.url);
        }).then(function (val) {
        });
      } else {
        client.put(`admin/${fileName}`, path.resolve(__dirname, '..', 'dist', fileName)).then(function (val) {
          console.log(val.url);
        }).then(function (val) {
        });
      }
    });
  }
});
