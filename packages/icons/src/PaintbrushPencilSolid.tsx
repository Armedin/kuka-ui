import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m306.9 348.3-79.2-79.2L480.4 16.4c21.9-21.867 57.3-21.867 79.2 0 21.9 21.87 21.9 57.33 0 79.2L306.9 348.3zM205 291.8l.1-.1 79.2 79.2-.1-.8c2.5 10.1 3.8 19 3.8 29.9 0 61.9-50.1 112-112 112H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h4.81c17.63 0 29.59-18.9 27.78-36.4-.39-3.8-.59-7.7-.59-11.6 0-61.9 50.1-112 112-112 10 0 19.8 1.3 29 3.8zm-10.6-34.6c-6-.8-12.2-1.2-18.4-1.2h-2.5L50.75 133.3c-25-25-25-65.56 0-90.55l23.43-23.43c24.99-24.998 65.52-24.998 90.52 0L298.5 153.1 194.4 257.2zM320 400c0-6.2-.4-12.4-1.2-18.4l104.1-104.1 75.6 75.7c6.8 6.7 11.7 15 14.3 24.2l29.7 104c2.4 8.4.1 17.4-6.1 22.7-6.2 7-15.2 9.4-23.6 7l-104-29.7c-9.1-2.7-17.5-7.6-24.2-14.3l-65.5-64.6c0-.8.9-1.7.9-2.5z" />
  </svg>
);

const SvgPaintbrushPencilSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPaintbrushPencilSolid;
