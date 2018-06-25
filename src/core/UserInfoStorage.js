/**
 * Created by leiyouwho on 6/2/16.
 */

import { StorageForg, platform, backend } from './StorageFrog/StorageForg';
import LocalStorage from './StorageFrog/LocalStorage';
platform('web')(StorageForg);
backend(LocalStorage)(StorageForg);
const userInfoStorage = new StorageForg();

export default userInfoStorage;
