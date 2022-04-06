import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M571.3 420.7c3 3 4.7 7.1 4.7 11.3 0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7H16a16.023 16.023 0 0 1-16-16 16.023 16.023 0 0 1 16-16h544c4.2 0 8.3 1.7 11.3 4.7zM66.5 360.5c-2.26-3.6-3.01-7.9-2.08-12L117.9 112c3-13.72 10.7-25.97 21.7-34.7 11.1-8.74 24.7-13.43 38.8-13.3h219.2c14.1-.13 27.7 4.56 38.8 13.3a61.66 61.66 0 0 1 21.8 34.7l53.5 236.4c.5 2 .5 4.1.2 6.2-.4 2.1-1.1 4.1-2.3 5.9-1.1 1.7-2.5 3.3-4.3 4.5-1.7 1.2-3.6 2.1-5.7 2.6-1.1.2-2.3-.5-3.5-.5-3.6 0-8-.4-10-2.6-2.8-2.3-4.8-5.5-5.6-9l-29.8-131.8-3.4-2.2c-14.2-8.9-30.6-13.6-47.4-13.6-16.7 0-33.2 4.7-47.4 13.6-19.3 12.1-41.6 18.5-64.4 18.5-22.8 0-46-6.4-64.5-18.5-14.2-8.8-30.6-13.6-47.3-13.6-16.8 0-33.2 4.8-47.4 13.6l-3.4 2.2-29.82 131.8c-.46 2.1-1.33 4-2.55 5.7-1.22.9-2.76 3.2-4.54 4.3-1.79 1.2-3.78 1.9-5.85 2.3-2.08.3-4.21.3-6.26-.2-4.13-1-7.72-3.5-9.98-7.1zm67.9-176.8c17.4-6.5 36-8.8 54.4-7 18.4 1.9 35.3 8 51.9 17.8 14.2 8.6 30.6 13.2 47.3 13.2 16.7 0 33.1-4.6 47.4-13.2 15.7-9.8 33.4-15.9 51.8-17.7 18.5-1.9 37 .4 54.4 6.9L426.1 119c-.7-6.5-4.5-12.4-9.8-16.6-6.2-4.17-11.9-6.43-18.7-6.4H178.4c-6.8-.03-13.4 2.22-18.7 6.4-5.3 4.2-9.1 10-10.6 16.6l-14.7 64.7z" />
  </svg>
);

const SvgCustard = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCustard;
