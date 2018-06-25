/**
 * Created by leiyouwho on 6/20/16.
 */

/**
 * convert file to base64
 * @param file
 */

require('es6-promise').polyfill();
require('isomorphic-fetch');
require('babel-polyfill');

export const convertResourceToBase64 = (file) => new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.addEventListener('load', () => {
    resolve(fileReader.result);
  });
  fileReader.readAsDataURL(file);
});

export const convertRemoteResourceToBase64 = (url) => new Promise((resolve, reject) => {
  fetch(url)
    .then(res => res.blob())
    .then(data => {
      const reader = new window.FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = function() {
        const base64data = reader.result;
        resolve(base64data);
      };
    });
})
