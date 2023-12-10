declare type author = {
  name: string;
  avatar: string;
};

declare module "*.svg" {
  const content: unknown;
  export default content;
}

declare module "*.png" {
  const content: unknown;
  export default content;
}

// Add declarations for other asset types here

