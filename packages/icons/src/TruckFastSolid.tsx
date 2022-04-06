import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M112 0C85.49 0 64 21.49 64 48v48H16c-8.837 0-16 7.2-16 16s7.163 16 16 16h256c8.8 0 16 7.2 16 16s-7.2 16-16 16H48c-8.84 0-16 7.2-16 16s7.16 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.837 0-16 7.2-16 16s7.163 16 16 16h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H64v128c0 53 42.1 96 96 96 53 0 96-43 96-96h128c0 53 42.1 96 96 96 53 0 96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12.9-12-28.3-18.7-45.3-18.7H416V48c0-26.51-21.5-48-48-48H112zm432 237.3V256H416v-96h50.7l77.3 77.3zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm368-48c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48z" />
  </svg>
);

const SvgTruckFastSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckFastSolid;
