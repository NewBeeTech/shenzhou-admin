/**
 * Created by leiyouwho on 6/1/16.
 */

export const platform = (platform) => (target) => {
  target.prototype.platform = platform;
}
export const backend = (backend) => (target) => {
  target.prototype.backend = backend;
}

@platform('web')
@backend(localStorage)
class StorageForg {
  setItem(key, value) {
    this.backend.setItem(key, value);
  }
  getItem(key) {
    return this.backend.getItem(key);
  }
  removeItem(key) {
    this.backend.removeItem(key);
  }
  clear() {
    this.backend.clear();
  }
  length() {
    this.backend.length();
  }
}

export {
  StorageForg,
};
