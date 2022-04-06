import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M29.72 7.766C25.158.157 15.31-2.203 7.78 2.282c-7.594 4.547-10.06 14.38-5.5 21.95l288 480C293.3 509.2 298.6 512 304 512c2.812 0 5.656-.734 8.219-2.281 7.594-4.547 10.06-14.38 5.5-21.95L29.72 7.766z" />
  </svg>
);

const SvgSlashBack = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSlashBack;
