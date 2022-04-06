import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M495.1 174.8c0-45.12-7.712-83.76-14.15-108.2-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16 149 16 15.1 154.6 15.1 337.2c0 45.12 7.714 83.77 14.15 108.2C35.22 464.3 50.46 496 174.9 496c187.2 0 320.2-138.6 320.2-321.2zM384 144c0 4.094-1.562 8.188-4.688 11.31l-52.67 52.67 20.69 20.69a15.948 15.948 0 0 1 4.688 11.31c0 9.133-7.468 16-16 16a15.932 15.932 0 0 1-11.31-4.688L304 230.6l-25.38 25.38 20.69 20.69a15.948 15.948 0 0 1 4.688 11.31c0 9.141-7.474 16-16 16a15.939 15.939 0 0 1-11.31-4.689l-20.69-20.69L230.6 303.1l20.69 20.69a15.948 15.948 0 0 1 4.688 11.31c0 9.141-7.474 16-16 16a15.939 15.939 0 0 1-11.31-4.689l-20.69-20.69-52.69 52.69C152.2 382.4 148.1 384 144 384c-8.5 0-16-6.9-16-16 0-4.094 1.562-8.188 4.688-11.31l52.69-52.69-20.678-20.7c-3.1-3.1-4.7-7.2-4.7-12.2 0-8.529 6.865-16 16-16a15.93 15.93 0 0 1 11.31 4.688l20.69 20.69 25.38-25.38L212.7 235.3c-3.1-3.1-4.7-7.2-4.7-12.2 0-8.528 6.865-16 16-16 4.094 0 8.188 1.562 11.31 4.688l20.69 20.69 25.38-25.38-20.69-20.69a15.948 15.948 0 0 1-4.688-11.31c0-9.141 7.473-16 16-16 4.094 0 8.188 1.562 11.31 4.688l20.69 20.69 52.67-52.67C359.8 129.6 363.9 128 368 128c8.5 0 16 6.9 16 16z" />
  </svg>
);

const SvgRugbyBallSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRugbyBallSolid;