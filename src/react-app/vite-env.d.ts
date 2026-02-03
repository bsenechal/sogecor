/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DEV: boolean;
  [key: string]: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


declare module "*.webp" {
  const src: string;
  export default src;
}
