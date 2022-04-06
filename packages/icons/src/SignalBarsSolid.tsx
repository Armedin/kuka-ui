import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M240 256c-26.4 0-48 21.6-48 47.1v160c0 27.3 21.6 48.9 47.1 48.9s48.9-21.6 48.9-48V303.1c0-25.5-21.6-47.1-48-47.1zM80 384c-26.4 0-48 21.6-48 47.1v32c0 27.3 21.6 48.9 47.1 48.9s48.9-21.6 48.9-48v-32c0-26.4-21.6-48-48-48zm320-256c-26.4 0-48 21.6-48 47.1v288c0 27.3 21.6 48.9 47.1 48.9 27.3 0 48.9-21.6 48.9-48V175.1c0-25.5-21.6-47.1-48-47.1zM560 0c-26.4 0-48 21.6-48 47.1v416c0 27.3 21.6 48.9 47.1 48.9s48.9-21.6 48.9-48V47.1C608 21.6 586.4 0 560 0z" />
  </svg>
);

const SvgSignalBarsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSignalBarsSolid;
