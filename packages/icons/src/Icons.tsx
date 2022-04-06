import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M473.7 4.136C493.5.176 512 15.32 512 35.51V167.1h-.2c.1 2.2.2 3.6.2 4 0 29.6-28.7 52-64 52s-64-22.4-64-52c0-27.8 28.7-52 64-52 11.7 0 22.6 3.4 32 7V35.52l-128 25.6V199.1h-.2c.1 2.2.2 3.6.2 4 0 29.6-28.7 52-64 52s-64-22.4-64-52c0-27.8 28.7-52 64-52 11.7 0 22.6 3.4 32 7V61.12c0-15.26 10.8-28.39 25.7-31.38l128-25.604zm-.6 155.964c-5.6-4.5-14.3-9-25.1-9s-19.5 4.5-25.1 9c-5.4 4.4-6.9 8.8-6.9 11 0 4 1.5 8.4 6.9 12.8 5.6 4.5 14.3 7.2 25.1 7.2s19.5-2.7 25.1-7.2c5.4-4.4 6.9-8.8 6.9-12.8 0-2.2-1.5-6.6-6.9-11zm-160 32c-5.6-4.5-14.3-9-25.1-9s-19.5 4.5-25.1 9c-5.4 4.4-6.9 8.8-6.9 11 0 4 1.5 8.4 6.9 12.8 5.6 4.5 14.3 7.2 25.1 7.2s19.5-2.7 25.1-7.2c5.4-4.4 6.9-8.8 6.9-12.8 0-2.2-1.5-6.6-6.9-11zM59.72 6.047C82.48 2.253 105.7 9.682 121.1 25.99L128 32l5.1-5.99c17.2-16.323 40.4-23.758 63.2-19.963C230.7 11.79 256 41.61 256 76.54v2.91c0 20.75-8.6 40.55-23.8 54.75l-90.4 84.3c-3.7 3.5-8.7 5.5-13.8 5.5-5.1 0-10.1-2-13.8-5.5l-90.41-84.3C8.617 120 0 100.2 0 79.45v-2.9C0 41.61 25.26 11.79 59.72 6.047zM99.38 48.63a39.497 39.497 0 0 0-34.4-11.02C45.95 40.78 32 57.25 32 76.54v2.91c0 11.89 4.94 23.25 13.63 31.35L128 187.7l82.4-76.9c8.7-8.1 13.6-19.46 13.6-31.35v-2.91c0-19.29-13.9-35.76-33-38.93-12.6-2.09-25.4 2.01-34.4 11.02L128 77.26 99.38 48.63zM208 392c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm-64 32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm64.8-150.3L216 288h24c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V336c0-26.5 21.49-48 48-48h23.1l8.06-14.3c5.42-10.9 16.5-18.6 28.64-18.6h72.4c12.1 0 23.2 7.7 28.6 18.6zM48 320c-8.84 0-16 7.2-16 16v128c0 8.8 7.16 16 16 16h192c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16h-43.8l-16-32.9h-72.4L91.78 320H48zm342.6 48H480c6.5 0 12.3 3.9 14.8 9.9s1.1 12.8-3.5 17.4l-112 112c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l84.7-84.7H352c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.8 3.5-17.4l112-112c6.2-6.3 16.4-6.3 22.6 0 6.3 6.2 6.3 16.4 0 22.6L390.6 368z" />
  </svg>
);

const SvgIcons = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIcons;