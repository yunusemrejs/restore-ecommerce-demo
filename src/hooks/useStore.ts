import { Listener, State } from '@yunusemrejs/restore-js';
import { useState, useEffect } from 'react';

const useStore = (store : State, watchedStates: Set<keyof State>) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const listener = {
      watchedStates: watchedStates,
      callback(newState) {
        setState(newState);
      },
    } as Listener;
    const listenerId = store.subscribe(listener);
    return () => store.unsubscribe(listenerId);
  }, []);

  return state;
};

export default useStore;
