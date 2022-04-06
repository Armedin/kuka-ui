import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m128 512 230.6-134.3L128 197v315zm502.8-42.9-118.8-94V48c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v27.01L38.81 5.111A23.956 23.956 0 0 0 24.03 0C16.91 0 9.84 3.158 5.121 9.189c-8.188 10.44-6.37 25.53 4.068 33.7L601.2 506.9c10.5 8.203 25.57 6.328 33.69-4.078 8.21-10.422 6.31-25.522-4.09-33.722z" />
  </svg>
);

const SvgBookmarkSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookmarkSlashSolid;
