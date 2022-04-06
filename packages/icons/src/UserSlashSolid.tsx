import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M95.1 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7c5.625 0 10.73-1.65 15.42-4.029L264.9 304.3c-93.6 2.4-169.8 78.8-169.8 173zm535.7-8.2L353.7 251.2c54.69-14.56 95.18-63.95 95.18-123.2C447.1 57.31 390.7 0 319.1 0c-68.9 0-125.4 55.93-126.8 125.4L38.9 5.1C34.41 1.672 29.19 0 24.03 0 16.91 0 9.845 3.156 5.127 9.187c-8.187 10.44-6.375 25.53 4.062 33.7L601.2 506.9c10.5 8.203 25.56 6.328 33.69-4.078 8.21-10.422 6.31-25.522-4.09-33.722z" />
  </svg>
);

const SvgUserSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserSlashSolid;
