import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M304 32c0 17.67-14.3 32-32 32s-32-14.33-32-32 14.3-32 32-32 32 14.33 32 32zM160 80c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zm0 48c17.7 0 32 14.3 32 32h8c13.3 0 24 10.7 24 24v16c0 1.7-.2 3.4-.5 5.1C280.3 229.6 320 286.2 320 352c0 88.4-71.6 160-160 160C71.63 512 0 440.4 0 352c0-65.8 39.74-122.4 96.54-146.9-.35-1.7-.54-3.4-.54-5.1v-16c0-13.3 10.7-24 24-24h8c0-17.7 14.3-32 32-32zm0 320c53 0 96-43 96-96 0-53.9-43-96-96-96-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96zm177.6-169.1c16.9-32.8 44.9-59.1 78.9-73.8-.3-1.7-.5-3.4-.5-6v-16c0-12.4 10.7-24 24-24h8c0-16.8 14.3-32 32-32s32 15.2 32 32h8c13.3 0 24 11.6 24 24v16c0 2.6-.2 4.3-.5 6C600.3 229.6 640 286.2 640 352c0 88.4-71.6 160-160 160-62.9 0-115.8-35.3-142.4-86.9 9.3-22.6 14.4-47.2 14.4-73.1 0-25.9-5.1-50.5-14.4-73.1zM480 256c-53.9 0-96 42.1-96 96 0 53 42.1 96 96 96 53 0 96-43 96-96 0-53.9-43-96-96-96zM336 32c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zm80 48c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32z" />
  </svg>
);

const SvgHandcuffsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandcuffsSolid;
