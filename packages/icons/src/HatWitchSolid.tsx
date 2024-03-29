import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M224 319.1c0-16.7 14.4-31.1 32-31.1h63.98c17.62 0 31.99 14.37 31.99 31.1l-.87 64.9h114.2l-71.7-169.6c-6.246-14.38-6.871-30.62-1.875-45.5l6.25-18.1a31.986 31.986 0 0 1 30.37-21.88h39.24c13.75 0 25.99 8.75 30.37 21.88l14 42.12 30.37-77.24c3.875-11.5.875-24.12-7.75-32.75l-69.36-72.62c-10.12-10.25-25.99-12.38-38.49-5.125L260.4 107.1c-23.6 13.7-42.4 34.3-53.4 59.3L110.3 384H224v-64.9zm32 64.9h63.98v-64.9H256V384zm297.4 32H22.56C10.1 416 0 426.1 0 438.6c0 6.543 2.781 12.79 7.688 17.12C30.41 475.7 88.99 512 166.4 512h243.2c76.61 0 135.1-36.26 158.7-56.28 4.9-4.32 7.7-10.42 7.7-17.02 0-12.4-10.1-22.7-22.6-22.7z" />
  </svg>
);

const SvgHatWitchSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHatWitchSolid;
