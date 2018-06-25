/**
 * Created by leiyouwho on 6/13/16.
 */

import moment from 'moment';

async function run (fn, options) {
  const start = new Date();
  console.log(`[${moment(start).format()}] Starting ${fn.name} ...`);

  await fn().then(() => {
    const end = new Date();
    const during = end.getTime() - start.getTime();
    console.log(`[${moment(end).format()}] Finished ${fn.name},  total time: ${during} ms`);
  });
}


if (process.argv.length > 2) {
  delete require.cache[__filename];
  const module = process.argv[2];
  run(require(`./${module}.js`)).catch(err => console.warn(err.stack));
}

export default run;
