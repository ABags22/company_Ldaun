/// <reference types="vite/client" />

// default SVG as URL
declare module "*.svg" {
  const content: string;
  export default content;
}

// SVG as React component (pakai svgr)
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
