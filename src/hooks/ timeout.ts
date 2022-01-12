import {useCallback, useEffect, useRef} from 'react';

export function useTimeout(handler: Function, timeout?: number) {
  const callbackRef = useRef<Function>();
  const idRef = useRef<number>();

  useEffect(() => {
    callbackRef.current = handler;
  });

  useEffect(() => {
    if (timeout !== null) {
      // @ts-ignore
      const id = setTimeout(() => callbackRef.current(), timeout);
      // @ts-ignore
      idRef.current = id;
      return () => clearTimeout(id);
    } else {
      // @ts-ignore
      idRef.current = null;
    }
  }, [timeout]);

  return useCallback(() => {
    if (idRef.current != null) {
      clearTimeout(idRef.current);
    }
  }, []);
}
