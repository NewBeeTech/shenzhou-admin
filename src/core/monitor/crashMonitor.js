/* @flow */
import Raven from 'raven-js';
import AppInfo from '../../../AppInfo';

const prod: boolean = AppInfo.prod;

export function initMonitor() {
  if (prod) {
    Raven.config(AppInfo.sentryDSN).install();
  }

  //  event handler for processing unhandledrejection events
  window.onunhandledrejection = (evt) => {
    if (prod) {
      Raven.captureException(evt.reason);
    } else {
      /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
      console.error(evt.reason);
    }
  };

  /* eslint max-params: ["error", 5]*/
  window.onerror = (message, source, lineno, colno, error) => {
    if (prod) {
      Raven.captureException(error, {
        message,
        source,
        lineno,
        colno,
      });
    } else {
      console.error({
        message,
        source,
        lineno,
        colno,
        error,
      });
    }
  };
}

export default Raven;
