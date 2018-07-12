var OSS = require('ali-oss').Wrapper;
var fs = require('fs');
var path = require('path');
var ENV = process.env.APPENV;


var client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAIVYqorIg12D6T',
  accessKeySecret: '0C7is8k5aUpvKD4IT0HB5sQSWNZcqU',
  bucket: 'shenzhoukeji'
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
