import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M287.1 0C305.7 0 320 14.33 320 32v128c0 17.7-14.3 32-32.9 32-16.8 0-32-14.3-32-32v-50.7L54.63 310.6c-12.5 12.5-32.76 12.5-45.258 0-12.496-12.5-12.496-32.7 0-45.2L210.7 64h-51.6c-16.8 0-32-14.33-32-32s15.2-32 32-32h128zM576 80c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-26.51 21.5-48 48-48s48 21.49 48 48zM448 208c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-96 128c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm96 128c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm128 0c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zM223.1 336c0-26.5 22.4-48 48-48 27.4 0 48.9 21.5 48.9 48s-21.5 48-48.9 48c-25.6 0-48-21.5-48-48zM320 464c0 26.5-21.5 48-48.9 48-25.6 0-48-21.5-48-48s22.4-48 48-48c27.4 0 48.9 21.5 48.9 48zm-224.9 0c0-26.5 22.4-48 48-48 27.4 0 48 21.5 48 48s-20.6 48-48 48c-25.6 0-48-21.5-48-48zM576 336c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-96-128c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z" />
  </svg>
);

const SvgArrowUpRightDotsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpRightDotsSolid;
