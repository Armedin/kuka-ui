import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240 16c0-8.836 7.2-16 16-16s16 7.164 16 16v16h168.3c4.9 0 9.5 2.21 12.5 6l51.2 64c4.7 5.8 4.7 14.2 0 19.1l-51.2 64c-3 4.7-7.6 6.9-12.5 6.9H272v32h176c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H272v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V384H71.69c-4.86 0-9.46-2.2-12.49-6.9l-51.204-64c-4.674-4.9-4.674-13.3 0-19.1L59.2 230c3.03-3.8 7.63-6 12.49-6H240v-32H64c-17.67 0-32-14.3-32-32V64c0-17.67 14.33-32 32-32h176V16zm192.6 48H64v96h368.6l38.4-48-38.4-48zM40.98 304l38.4 48H448v-96H79.38l-38.4 48z" />
  </svg>
);

const SvgSignsPost = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSignsPost;
