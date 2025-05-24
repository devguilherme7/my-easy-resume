type ClassValue = string | number | boolean | undefined | null;
type ClassObject = { [key: string]: boolean | undefined | null };
type ClassArray = ClassValue[];

/**
 * Combines multiple class names into a single string.
 * Handles strings, objects, arrays, and falsy values.
 *
 * @example
 * cn('foo', 'bar') // => 'foo bar'
 * cn('foo', { bar: true, baz: false }) // => 'foo bar'
 * cn('foo', ['bar', { baz: true }]) // => 'foo bar baz'
 */
export function cn(...args: (ClassValue | ClassObject | ClassArray)[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg));
      continue;
    }

    if (Array.isArray(arg)) {
      const innerClasses = cn(...arg);
      if (innerClasses) {
        classes.push(innerClasses);
      }
      continue;
    }

    if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg[key]) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}
