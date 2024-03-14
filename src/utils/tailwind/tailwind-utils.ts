import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

interface ClassDictionary {
  [id: string]: any;
}

interface ClassArray extends Array<ClassValue> {}

type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;

export function tailwind(...classes: ClassValue[]): string {
  return twMerge(clsx(classes));
}
