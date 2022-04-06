import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M211.8 488.6c1.6 2.5 2.1 5.6 1.4 8.5-.6 2.9-2.4 5.5-4.9 7.1-2.6 1.6-5.6 2.1-8.6 1.5-61.4-13.9-115.6-49.9-152.17-101.2C10.97 353.2-5.395 290.3 1.57 227.7 8.536 165 38.34 107.2 85.29 65.21 132.2 23.2 193-.013 256 0c1.5 0 2.1.293 4.3.863 1.4.569 1.8 1.404 3.7 2.456 1.1 1.052 1.9 2.3 2.5 3.674.5 1.374.8 2.846.8 4.327V112.3l24.5-25.91c1-1.08 2.2-1.95 3.6-2.55 1.3-.61 2.8-.94 4.3-.98 1.5-.05 2.9.2 4.3.73s2.7 1.33 3.8 2.35c1 1.02 1.9 2.24 2.5 3.6.6 1.35 1 2.81 1 4.3 0 1.48-.2 2.96-.7 4.34-.6 1.39-1.4 2.62-2.4 3.72l-44 46.6c-1.1 1.1-2.3 2-3.7 2.6-1.5.6-3 .9-5.4.9-.6 0-2.2-.3-3.6-.9-1.4-.6-2.7-1.5-3.7-2.6l-44.1-46.6c-2-2.16-3.1-5.07-3-8.06 0-3 1.3-6.74 3.5-7.9 2.2-2.06 5.1-3.17 8.1-3.08 3 .08 5.8 1.35 7.9 3.53l24.5 26.01V22.89c-56.4 2.75-109.8 25.84-150.47 64.98C53.58 127 28.49 179.6 23.61 235.8a233.509 233.509 0 0 0 44.07 157.9c32.42 45.5 82.02 77.5 137.02 89.9 2.9.7 5.5 2.5 7.1 5zm-40.4-362.5c-.8 1.3-1.9 2.4-3.1 3.2-20.5 13.9-37.2 32.6-48.8 54.5-11.6 21.9-17.7 46.3-17.7 71.1 0 24.8 6.1 49.2 17.7 70.2 11.6 22.8 28.3 41.5 48.8 55.4 2.5 1.7 4.2 4.3 4.7 7.3.6 2.9-.9 6-1.7 8.4-1.7 2.5-5.2 4.2-7.3 3.9-2.9 1.4-6 .8-8.4-.9-23.6-16-42.8-37.5-56.14-62.7-13.31-25.1-20.27-53.1-20.27-81.6 0-28.4 6.96-56.5 20.27-81.6 13.34-25.2 32.54-46.7 56.14-62.7 1.2-.8 2.6-1.4 4-1.8 1.5-.3 3-.3 4.5 0 1.4.2 2.8.8 4.1 1.6 1.3.8 2.3 1.9 3.2 3.1.8 1.2 1.4 2.6 1.7 4.1.3 1.5.3 3 0 4.4-.3 1.5-.8 2.9-1.7 4.1zm169.5 257.4c.8-1.2 1.9-2.3 2.2-3.1v-.1c21.3-14 38-32.7 49.6-54.6 11.5-21.8 17.5-46.2 17.5-70.9 0-24.7-6-49.1-17.5-71-11.6-22.7-28.3-40.5-49.6-54.5-.3-.8-1.4-1.9-2.2-3.1-.8-1.3-1.4-2.7-1.6-4.1-1.2-1.5-.3-3 0-4.4.3-1.5.9-2.9 1.7-4.1.9-1.2 1.1-2.3 3.2-3.1 1.2-.8 2.6-1.3 4.1-1.6 1.5-.3 2.9-.3 4.4 0 1.5.3 2.8.9 4.1 1.8 23.4 16 42.7 37.5 55.9 62.6 13.3 25.1 19.4 53.1 19.4 81.5 0 28.5-6.1 56.5-19.4 81.6-13.2 25.1-32.5 46.6-55.9 62.6-1.3.9-2.6 1.5-4.1 1.8-1.5.3-2.9.3-4.4 0-1.5-.3-2.9-1.7-4.1-1.6-2.1-.8-2.3-1.9-3.2-3.1-.8-1.2-1.4-2.6-1.7-4.1-.3-1.4-1.2-2.9 0-4.4.2-1.4.8-2.8 1.6-4.1zM312.3 6.307C368.5 19.04 418.7 50.28 455 95.01 485.4 132.6 504.6 178 510.3 226c5.6 48-2.4 96.7-23.2 140.3-20.9 43.6-53.6 80.5-94.5 106.3C351.7 498.3 304.4 512 256 512c-1.5 0-2.9-.3-4.3-.9-1.4-.5-2.6-1.4-3.7-2.4-1.9-1.1-1.9-2.3-2.4-3.7-.6-1.4-.9-2.8-.9-4.3v-99.2l-24.5 26c-2.1 2.2-4.9 2.6-7.9 3.6-3 .1-5.9-1.1-8.1-4-2.2-1.2-3.5-4-3.5-7-.1-3 1-5.9 3-8.1l44.1-46.6c1.3-2.2 5.1-3.4 7.3-3.4 4 0 6.9 1.2 9.1 3.4l44 46.6c2.1 2.2 3.2 5.1 3.1 8.1-.1 3-1.4 5.8-3.5 7-2.2 2.9-5.1 4.1-8.1 4-3-1-5.9-1.4-7.9-3.6l-24.5-25.9v87.5c56.4-2.8 109.8-25.8 150.5-65 40.7-40 65.8-91.7 70.7-147.9 4.8-57.1-10.8-112.3-44.1-157.9-33.3-45.55-82-77.51-137-89.94-1.5-.33-2.8-.94-4.1-1.79-1.2-.86-2.2-1.94-3-3.2-.8-1.25-2.2-2.65-1.6-4.11-.2-1.46-.2-2.96.1-4.41.4-1.44 1-2.81 1.8-4.03.9-1.21 2-2.243 3.2-3.036 1.3-.794 2.7-1.333 4.1-1.586 1.5-.253 3-.216 4.4.109zM353.1 256.1c0 31.4-17.5 61.1-49.3 83.5-2.1 1.5-4.8 2.3-7.4 2-2.7-.2-5.2-1.3-7-3.2l-70.1-69.8c-2.2-2.1-4.2-5-3.4-8 0-3 1.2-5.9 3.3-8 2.2-2.1 5-3.3 8-3.3s5.9 1.2 8 3.3l63.1 62.8c20.8-17.1 32.2-37.9 32.2-59.3 0-23.9-14.1-47-39.7-65.1-2.5-1.7-4.1-4.3-4.6-7.3-.5-2.9.1-6 1.9-8.4 1.7-2.5 4.3-4.1 7.3-4.6 2.9-.5 6 .1 8.4 1.9 31.8 22.4 49.3 52.1 49.3 83.5zm-136.4 85.4c-3 .5-6-.2-8.5-1.9-31.7-22.4-50.1-52.1-50.1-83.5s18.4-61.1 50.1-83.5c2.2-1.6 4.9-2.3 7.5-2.1 2.7.3 5.1 1.4 7 3.3l70.1 69.8c2.1 2.1 3.3 5 3.3 8s-2 5.8-3.3 8c-2.1 2.1-5 3.3-7.9 3.3-3 0-6.8-1.2-8-3.3l-63.1-62.9c-20.9 17.3-32.2 38-32.2 59.4 0 23 14.1 47 39.7 65 2.4 1.8 4.1 4.4 4.6 7.4.5 2.9-.2 5.9-1.9 8.4-1.7 2.4-4.4 4.1-7.3 4.6z" />
  </svg>
);

const SvgNfcDirectional = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNfcDirectional;
