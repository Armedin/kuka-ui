import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M0 96C0 42.98 42.98 0 96 0c53 0 96 42.98 96 96v14.3c-4.3 5-7.7 10.8-10.3 17l-.3-.2H0V96zm132.8 149.1c-3.2 8.6-4.8 16-4.8 25.2V480c0 11.7 3.1 22.6 8.6 32H48c-26.51 0-48-21.5-48-48V160h168.2l-35.4 85.1zM160 480V270.3c0-4.1.8-8.3 2.4-12.2l48.9-118.7c3-7.3 7.8-13.3 15.9-16.7l127.1-60.21c7.8-4.11 18.7-4.11 27.4 0l127.1 60.21c7.2 3.4 12.9 9.4 15.9 16.7l48.9 118.7c1.6 3.9 2.4 8.1 2.4 12.2V480c0 17.7-14.3 32-32 32H432v-64c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v64H191.1c-16.8 0-32-14.3-32-32h.9zm160-184c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v48z" />
  </svg>
);

const SvgFarmSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFarmSolid;
