import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m509.1 198.8-112-160c-3-4.25-7.9-6.8-13.1-6.8H127.1c-4.3 0-9.2 2.55-12.2 6.83l-112 160c-4.344 6.203-3.75 14.59 1.406 20.11l240 256C247.4 478.2 251.6 480 256 480s8.635-1.828 11.67-5.062l240-256C512.9 213.4 513.4 205 509.1 198.8zM383.4 75.13 465.3 192H294.4l89-116.87zM256 189.6 160.3 64h191.4L256 189.6zM128.6 75.13l89 116.87H46.73L128.6 75.13zM256 440.6 52.93 224h406.1L256 440.6z" />
  </svg>
);

const SvgGem = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGem;
