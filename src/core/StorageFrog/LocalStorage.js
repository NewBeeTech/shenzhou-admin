/**
 * Created by leiyouwho on 6/2/16.
 */

var LocalStorage;

if (localStorage) {
  LocalStorage = localStorage; 
} else {
  LocalStorage = undefined;
}

export default LocalStorage;
