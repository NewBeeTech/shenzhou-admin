/**
 * Created by leiyouwho on 6/14/16.
 */

import Repo from 'git-repository';

export default async () => {
  let repo = await Repo.open('./dist', { init: true });

  await repo.setRemote('origin', 'https://github.com/user/example.git');
  await repo.add('--all .');
  await repo.commit('Commit message');
  await repo.push('origin', 'gh-pages');
  
};