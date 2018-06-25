import crashMonitor from './crashMonitor';

export const crashMonitorMiddleware = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    crashMonitor.captureException(err, {
      extra: {
        action,
        state: store.getState(),
      },
    });
    throw err;
  }
};
