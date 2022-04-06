import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M312 256c0-8.838-7.164-16-16-16H24c-8.836 0-16 7.162-16 16 0 8.836 7.164 16 16 16h106.1l-31.41 39.1c-1.818 2.729-2.629 5.891-2.629 8.938C96.06 328.1 103.2 336 112 336c5.156 0 10.22-2.5 13.31-7.125L160 284.8l34.75 44.03c3.05 4.67 8.15 7.17 13.35 7.17 8.7 0 15.9-7.9 15.9-15.9 0-3.047-.809-6.209-2.629-8.938L189.9 272H296c8.8 0 16-7.2 16-16zM24 208h61.52L72.03 73.73c-.44-4.4 2.78-8.31 7.19-8.75 4.28-.62 8.31 2.77 8.75 7.16L101.5 208H152V64c0-4.422 3.594-8 8-8s8 3.58 8 8v144h50.63l13.41-135.9c.438-4.391 4.344-7.734 8.75-7.156 4.406.437 7.625 4.344 7.188 8.75L234.6 208H296c1.352 0 2.623.29 3.945.398L320 64c0-35.35-71.63-64-160-64S0 28.65 0 64l20.05 144.4c1.33-.1 2.6-.4 3.95-.4zm272 96h-42.71c1.81 5.1 2.71 10.5 2.71 16.1 0 13.48-5.635 25.63-14.62 34.35l6.592 84.03a7.988 7.988 0 0 1-7.344 8.594c-.228.026-.428.026-.628.026-4.156 0-7.656-3.188-7.969-7.375l-5.865-75.29C220.6 366.7 214.5 368 208.1 368a47.928 47.928 0 0 1-39.01-20.03L168 346.6V448c0 4.422-3.594 8-8 8s-8-3.6-8-8V346.7l-.982 1.246C141.1 360.5 127.5 368 112 368c-6.447 0-12.58-1.318-18.2-3.637l-5.828 75.32A7.994 7.994 0 0 1 80 447.1c-.188 0-.406 0-.625-.031a7.987 7.987 0 0 1-7.344-8.594l6.553-84.11c-8.934-8.713-14.53-20.83-14.53-34.27 0-5.545.922-10.96 2.709-16.06H24c-1.352 0-2.623-.29-3.945-.399L0 448c0 35.35 71.63 64 160 64s160-28.65 160-64l-20.05-144.4c-1.35.1-2.55.4-3.95.4z" />
  </svg>
);

const SvgTamaleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTamaleSolid;