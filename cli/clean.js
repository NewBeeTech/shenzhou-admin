/**
 * Created by leiyouwho on 6/14/16.
 */

import { exec } from 'child_process';

async function clean() {
  return new Promise((resolve, reject) => {
    exec('npm run clean', (err, stdout) => {
      err ? reject(err) : resolve(stdout);
    });
  });
}

module.exports = clean;
