import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 480c-6.422 0-12.23-3.85-14.73-9.787L1.267 54.22c-3.438-8.12.359-17.5 8.5-20.96 8.109-3.375 17.53.375 20.97 8.531L192 422.9 353.3 41.7c3.422-8.187 12.83-11.94 20.97-8.531 8.141 3.469 11.94 12.84 8.5 20.97l-175.1 415.1C204.2 476.2 198.4 480 192 480z" />
  </svg>
);

const SvgV = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgV;
