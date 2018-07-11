
export const PrefixURL = (): string => '/';
export const Login = (): string => '/Login';
export const App = (): string => '/App';

export const prefix = (prefixs: string): string => `${PrefixURL()}${prefixs}`;

export const SupportList = (): string => prefix('support-list');

export const DynamicList = (): string => prefix('dynamic-list');

export const DynamicInfo = (id : string = '', editing : boolean = false): string => {
    if (editing) {
      return prefix(`dynamic/${id}?editing=true`);
    }
    return prefix(`dynamic/${id}`);
  };