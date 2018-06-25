/**
 * Created by leiyouwho on 6/13/16.
 */

import { exec } from 'child_process';

// const reult = exec('webpack-dev-server --config webpack.config.bundle.js -d --inline --progress --colors --content-base src/')

const bundle = () => new Promise((resolve, reject) => {
  exec('webpack --config webpack.config.prod.js  --inline --progress --colors', (err, stdout) => {
    if (err) {
      reject(err);
    }
    console.log(stdout);
    resolve();
  });
});

module.exports = bundle;


