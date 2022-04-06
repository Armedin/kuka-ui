import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M196.5 128h151c7.125-12.25 6-28.12-4.5-38.63L294.5 41c-12.5-12.5-32.75-12.5-45.25 0L200.8 89.32c-10.4 10.5-11.6 26.48-4.3 38.68zm-18-60.75 22.38-22.5C195 37.5 186.4 32.38 176.3 32.38H64c-17.75 0-32 14.38-32 32v63.81l130.1.063c-5.5-20.953-.2-44.503 16.4-61.003zM400 160.1l-240 .1v63.67c0 17.75-14.25 32-32 32s-32-14.25-32-32V160.2l-64-.1c-17.75 0-32 14.38-32 32V384c0 53 43 96 96 96h192c53 0 96-42.95 96-95.95l16 .013c61.75 0 112-50.31 112-111.9C512 210.4 461.8 160.1 400 160.1zm0 160.2h-16v-96h16c26.5 0 48 21.5 48 48 0 26.3-21.5 48-48 48z" />
  </svg>
);

const SvgMugMarshmallowsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMugMarshmallowsSolid;
