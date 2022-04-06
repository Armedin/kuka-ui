import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 285v91c0 74.98-60.19 136-134.2 136H196.2c-22.31 0-44.47-5.703-64.09-16.52L71.23 461.9C47 448.6 32 423 32 395.2v-50.33c0-23.16 10.22-44.75 28.28-59.42L96 257.4v40.67L80.25 310.4C69.94 318.8 64 331.3 64 344.8v50.33c0 16.2 8.656 31.03 22.62 38.72l60.88 33.58c14.9 8.27 31.7 12.57 48.7 12.57h117.7c56.3 0 102.1-46.7 102.1-104v-91c0-16-12.7-29-28.3-29 0 0-16.87.256-17 .256C350 256.3 357.4 224 328.6 224h-14.78c-10.99 0-13.6 5.012-21.72 5.012C275.5 229 278.6 208 254.8 208h-17.25c-16.82 0-17.63 11.69-29.56 11.69-8.69.01-15.99-7.09-15.99-15.99V56c0-13.25-10.7-24-24-24s-24 10.75-24 24l-.9 280c0 8.836-7.164 16-16 16s-16.01-7.167-16.01-16L112 56c0-34.72 31.76-62.16 67.76-54.8C205.9 6.561 224 30.88 224 57.6v119.1c4.4-.2 8.9-.7 13.5-.7h17.25c16.03 0 31.06 6.375 42.19 17.53 5.56-1.73 11.16-1.53 16.86-1.53h14.78c21.47 0 41.03 13.67 51.72 32h7.344C420.9 224 448 251.4 448 285z" />
  </svg>
);

const SvgHandBackPointUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandBackPointUp;
