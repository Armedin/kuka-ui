import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 256c0 141.4-114.6 256-256 256S32 397.4 32 256 146.6 0 288 0c112 0 207.2 71.96 241.1 172.2-13.2-4.1-28.9-.7-41 10.2l-149.9 146c-14.9-5.2-31.6-8.4-50.2-8.4-55.1 0-93.8 27.9-116.1 53.5-5.8 6.7-5.1 16.8 1.6 22.6 6.7 5.8 16.8 5.1 22.6-1.6C214 373.8 244.6 352 288 352c43.4 0 73.1 21.8 91.9 42.5 5.8 6.7 15.9 7.4 22.6 1.6 5.2-4.5 6.8-11.7 3.6-17.7l10.2-9.1-24.8-24.8c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0l25.1 25.1 15.3-14.7-25.4-25.4c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0l25.7 25.7 15.3-14.7-26-26c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0l26.3 26.3 15.3-14.8-26.6-26.5c-4.7-4.7-4.7-12.3 0-17 4.7-4.7 12.3-4.7 17 0l26.9 26.9 12.4-12c.1 3.2.2 6.4.2 8.7v.9zm-335.6-80c-17.7 0-32 14.3-32 32s14.3 32 32 32c17.6 0 32-14.3 32-32s-14.4-32-32-32zm160 64c17.6 0 32-14.3 32-32s-14.4-32-32-32c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
  </svg>
);

const SvgFaceThermometerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceThermometerSolid;
