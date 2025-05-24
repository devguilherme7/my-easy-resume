import React, { createContext as createContextReact, useContext } from 'react';

type CreateContextReturn<T> = [React.Provider<T>, () => T | undefined];

export function createContext<T>(options: {
  name: string;
  defaultValue?: T;
  errorMessage?: string;
}): CreateContextReturn<T> {
  const {
    name,
    defaultValue,
    errorMessage = `use${name} must be used within ${name}Provider`,
  } = options;

  const Context = createContextReact<T | undefined>(defaultValue);
  Context.displayName = name;

  function useHook() {
    const context = useContext(Context);

    if (context === undefined) {
      throw new Error(errorMessage);
    }

    return context;
  }

  return [Context.Provider, useHook];
}
