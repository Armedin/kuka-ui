import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m340.7 116.7-48 48c-6.25 6.25-6.25 16.38 0 22.62 3.1 3.08 7.2 4.68 11.3 4.68s8.188-1.562 11.31-4.688l48-48c6.25-6.25 6.25-16.38 0-22.62s-16.41-6.292-22.61.008zM112 96c8.8 0 16-7.16 16-16 0-17.66 14.36-32 32-32 9.531 0 18.55 4.375 24.73 12.03 3.422 4.25 8.609 6.312 14.23 5.844A15.956 15.956 0 0 0 211.5 57c6.6-15.19 24.9-25 44.5-25s37.02 9.812 44.45 25a16.066 16.066 0 0 0 12.58 8.875c5.422.469 10.81-1.594 14.23-5.844C333.5 52.38 342.5 48 352 48c17.64 0 32 14.34 32 32 0 8.84 7.2 16 16 16s16.01-7.156 16.01-16c0-35.28-28.71-64-64-64a63.115 63.115 0 0 0-34.33 10.12C302.7 9.844 280.2 0 255.1 0s-46.72 9.844-61.67 26.12C184.2 19.56 172.3 16 159.1 16c-35.3 0-64 28.72-64 64 .89 8.84 8.1 16 16.9 16zm36.7 20.7c-6.25 6.25-6.25 16.38 0 22.62l48 48c3.1 3.08 7.2 4.68 11.3 4.68s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62l-48-48c-6.21-6.292-16.41-6.292-22.61.008zm353.9 330.6L324.4 237.4c-7.2-8.5-17.7-13.4-28.7-13.4h-79.4c-11 0-21.5 4.9-28.7 13.4L9.4 447.3C-12.01 472.6 5.467 512 38.1 512h435.8c32.6 0 50.1-39.4 28.7-64.7zM211.1 258.1c2-1.3 3.6-2.1 5.2-2.1h79.46c1.584 0 3.141.766 4.273 2.1l63.94 75.34-18.09 18.1c-6.453 6.406-15.11 9.625-24.09 9.312-9.094-.406-17.31-4.469-23.12-11.47l-17.16-20.59c-21.84-26.16-60.3-30.69-87.56-10.22l-14.7 11.03C173.7 333.7 166.9 336 160 336h-14.1l65.2-77.9zm268.1 218.2c-1.7 3.7-4.4 3.7-5.3 3.7H38.1c-.885 0-3.58 0-5.297-3.707-.791-1.707-1.707-5.053 1.025-8.273L118.7 368H160c13.73 0 27.36-4.531 38.39-12.78l14.73-11.03c13.62-10.31 32.89-7.969 43.77 5.094l17.16 20.59c11.48 13.78 28.34 22.12 46.25 22.94.969.063 1.938.094 2.906.094 16.91 0 33.27-6.75 45.28-18.75l16.23-16.24 93.45 110.1c2.734 3.182.934 6.582 1.034 8.282zM240 96v80c0 8.8 7.2 16 16 16s16-7.156 16-16V96c0-8.844-7.156-16-16-16s-16 7.16-16 16z" />
  </svg>
);

const SvgVolcano = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgVolcano;