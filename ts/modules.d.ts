declare module "*!text" {
  const classNames: any
  export default classNames
}

declare module "path" {
  export function normalize(p: string): string;
  export function join(...path: string[]): string;
}