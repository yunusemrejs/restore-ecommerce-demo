import { Listener, State } from '@yunusemrejs/restore-js';
import { useState, useEffect } from 'react';

const useStore = (store : State, watchedStates: (keyof State)[]) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const listener = {
      watchedStates: watchedStates,
      callback(newState) {
        setState(newState);
      },
    } as Listener;
    store.subscribe(listener);
    return () => store.unsubscribe(listener);
  }, []);

  return state;
};

export default useStore;
