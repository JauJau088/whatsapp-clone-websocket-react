// Custom hook which is an extension of useState
// but with the addition of using local storage
// to persist the data on page refresh

import { useEffect, useState } from 'react';

const PREFIX = 'whatsapp-clone-';

const useLocalStorage = (key, initialValue) => {
  const prefixKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    // Initial state comes from local storage
    const jsonValue = localStorage.getItem(prefixKey);
    // only if not null or undefined
    if (jsonValue != null) return JSON.parse(jsonValue);
    // otherwise set to initialValue
    // if initialValue is not set then it'll return undefined 
    return typeof initialValue === 'function' ? initialValue() : initialValue;
  });

  // On every change of key or state
  useEffect(() => {
    // set the localStorage
    localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [prefixKey, value]);

  // Need the return values of useState hook
  // to be passed on as the return values of useLocalStorage
  return [value, setValue];
};

export default useLocalStorage;
