import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M313.2 1.53C315.3.502 317.7-.001 320 0c2.3-.002 4.7.502 6.8 1.53 1.2.57 2.4 1.296 3.4 2.175l26.3 21.015c33.9 27.12 72.3 48.03 113.5 61.76l31.1 10.34c8.3 2.8 12 11.88 10.1 20.28-2.8 8.3-11.9 12-20.3 10.1l-10.9-3.7v47.3c28.9 33.7 67.6 57.6 110.7 68.4l4.9 1.2c1.2.3 2.5.7 3.6 1.3 2.1 1.1 4 2.6 5.4 4.5 1.4.9 2.5 3.9 3 6.3.4 1.7.5 3.6.3 4.6-.2 2.7-.8 4.5-1.6 6.1-1.1 2.1-2.6 4-4.5 5.4-1.8 1.4-3.9 2.5-6.3 3-1.2.3-3.4.4-3.8.4H544v61.6c14.7 31.3 38.9 57.3 69.2 74.1l18.3 10.2c.6.3 1.2.6 1.7 1 1.9 1.4 3.5 2.2 4.6 5 1.1 1.9 1.9 3.2 2.1 6.4.2 1.9-.8 3.8-.4 5.7-.5 1.9-1.3 3.7-2.4 5.2-1.4 1.9-3.1 3.5-5 4.6-1.9 1.1-4.1 1.9-6.4 2.1-.7-.8-1.3.1-2 .1H576v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H416v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H256v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H96v48c0 8.8-7.16 16-16 16-8.83 0-16-7.2-16-16v-48H16.32c-.67 0-1.35-.9-2.02-.1-2.32-.2-4.494-1-6.413-2.1-1.92-1.1-3.626-2.7-4.968-4.6-1.095-1.5-1.92-3.3-2.408-5.2-.492-1.9-.623-3.8-.418-5.7.246-3.2.988-4.5 2.118-6.4 1.128-2.8 2.669-3.6 4.581-5 .549-.4 1.123-.7 1.72-1l18.298-10.2c30.31-16.8 54.5-42.8 69.19-74.1V272H48.34c-1.31 0-2.61-.1-3.85-.4-2.35-.5-4.5-1.6-6.33-3-1.84-1.4-3.37-3.3-4.45-5.4-.81-1.6-1.36-3.4-1.59-6.1-.23-1-.13-2.9.27-4.6.53-2.4 1.57-5.4 3-6.3 1.43-1.9 3.27-3.4 5.42-4.5 1.14-.6 2.36-1 3.64-1.3l4.84-1.2c43.15-10.8 81.81-34.7 110.71-68.4v-47.3l-10.9 3.7c-8.4 1.9-17.5-1.8-20.3-10.1-2.8-8.4 1.8-17.48 10.1-20.28l30.2-10.34c42.1-13.73 80.5-34.64 114.4-61.76l26.3-21.015c1-.879 1.3-1.605 3.4-2.174V1.53zM122.6 352c-12.4 24.8-29.93 46.6-51.27 64H568.7c-21.4-17.4-38.9-39.2-51.3-64H122.6zM512 320v-48H128v48h384zM192 160h256v-47.3c-40.3-14.9-77.9-36.14-111.5-62.99L320 36.49l-16.5 13.22A401.595 401.595 0 0 1 192 112.7V160zm319.9 80c-20.8-13.9-39.7-29.2-55.9-48H183.1c-15.3 18.8-34.2 34.1-55 48h383.8z" />
  </svg>
);

const SvgVihara = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVihara;
