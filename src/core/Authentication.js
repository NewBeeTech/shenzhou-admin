/* @flow */
import userInfoStorage from './UserInfoStorage';

export const PATIENT = 1;
export const MA = 2;
export const PA = 4;
export const DOCTOR = 8;
export const MRC = 32;
export const ADMIN = 64;
export const TEST = 128;

const roleValues: [] = JSON.parse(
  userInfoStorage.getItem('roleValues') ? userInfoStorage.getItem('roleValues') : '[]'
);

const Global = {
  roleValues,
};

export function getRoleValues(): [] {
  return Global.roleValues;
}

export function setRoleValues(roles: []): void {
  Global.roleValues = roles;
}

export function checkAuth(roles: []): boolean {
  for (const role of getRoleValues()) {
    if (roles.findIndex(value => value === role) >= 0) return true;
  }
  return false;
}
