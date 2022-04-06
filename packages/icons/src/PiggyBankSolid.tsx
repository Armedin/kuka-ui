import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="m400 96-.9.66c-4.4-.44-9.7-.66-15.1-.66H256c-16.5 0-32.5 2.08-47.8 6-.1-2-.2-3.98-.2-6 0-53.02 42.1-96 96-96 53 0 96 42.98 96 96zm-16 32c3.5 0 6.1.1 10.4.3 4.3.3 8.5.7 12.6 1.3 17.6-20.5 43.8-33.6 73-33.6h32l-18.8 75.1c15.9 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-32c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H256v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c-34.9-26.2-58.7-66.2-63.21-112H68c-37.56 0-68-30.4-68-68s30.44-68 68-68h4c13.25 0 24 10.7 24 24s-10.75 24-24 24h-4c-11.05 0-20 8.1-20 20 0 11 8.95 20 20 20h31.2c12.1-59.8 57.7-107.5 116.3-122.8 12.9-3.4 25.6-5.2 40.5-5.2h128zm40 112c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
  </svg>
);

const SvgPiggyBankSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPiggyBankSolid;
