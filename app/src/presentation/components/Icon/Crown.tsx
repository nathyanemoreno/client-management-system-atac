import { SVGProps, memo } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={512}
    height={512}
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="#ffb743"
      d="M2.837 20.977 1.012 9.115c-.135-.876.863-1.474 1.572-.942l5.686 4.264a1.359 1.359 0 0 0 1.945-.333l4.734-7.1c.5-.75 1.602-.75 2.102 0l4.734 7.1a1.359 1.359 0 0 0 1.945.333l5.686-4.264c.71-.532 1.707.066 1.572.942l-1.825 11.862zm24.953 6.582H4.21a1.373 1.373 0 0 1-1.373-1.373v-3.015h26.326v3.015c0 .758-.615 1.373-1.373 1.373z"
      data-original="#ffb743"
    />
  </svg>
);

const Crown = memo(SvgComponent);

export default Crown;
