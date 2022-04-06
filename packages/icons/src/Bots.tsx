import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M86.344 197.834a51.767 51.767 0 0 0-41.57 20.058v-61.874a8.19 8.19 0 0 0-8.19-8.19H8.19a8.19 8.19 0 0 0-8.19 8.19v177.533a8.189 8.189 0 0 0 8.19 8.189h28.394a8.189 8.189 0 0 0 8.19-8.189v-8.088c11.628 13.373 25.874 19.769 41.573 19.769 34.6 0 61.922-26.164 61.922-73.843-.003-45.937-27.04-73.555-61.925-73.555ZM71.516 305.691c-9.593 0-21.221-4.942-26.745-12.5v-43.027c5.528-7.558 17.152-12.791 26.745-12.791 17.734 0 31.107 13.082 31.107 34.013 0 21.223-13.373 34.305-31.107 34.305Zm156.372-59.032a17.4 17.4 0 1 0 17.4 17.4 17.4 17.4 0 0 0-17.4-17.4Zm46.068-89.959v-44.661a13.308 13.308 0 1 0-10.237 0V156.7a107.49 107.49 0 1 0 10.237 0Zm85.993 107.367c0 30.531-40.792 55.281-91.112 55.281s-91.111-24.75-91.111-55.281 40.792-55.281 91.111-55.281 91.112 24.746 91.112 55.276Zm-50.163 17.4a17.4 17.4 0 1 0-17.4-17.4 17.4 17.4 0 0 0 17.4 17.399ZM580.7 250.455c-14.828-2.617-22.387-3.78-22.387-9.885 0-5.523 7.268-9.884 17.735-9.884a65.56 65.56 0 0 1 34.484 10.1 8.171 8.171 0 0 0 11.288-2.468c.07-.11.138-.221.2-.333l8.611-14.886a8.2 8.2 0 0 0-2.867-11.123 99.863 99.863 0 0 0-52.014-14.138c-38.956 0-60.179 21.514-60.179 46.225 0 36.342 33.725 41.864 57.563 45.642 13.373 2.326 24.13 4.361 24.13 11.048 0 6.4-5.523 10.757-18.9 10.757-13.552 0-30.994-6.222-42.623-13.579a8.206 8.206 0 0 0-11.335 2.491 2.76 2.76 0 0 0-.1.164l-10.2 16.891a8.222 8.222 0 0 0 2.491 11.066c15.224 10.3 37.663 16.692 59.441 16.692 40.409 0 63.957-19.769 63.957-46.515.005-38.09-35.458-43.904-59.295-48.265Zm-95.928 60.787a8.211 8.211 0 0 0-9.521-5.938 23.168 23.168 0 0 1-4.155.387c-7.849 0-12.5-6.106-12.5-14.245V240.28h20.349a8.143 8.143 0 0 0 8.141-8.143v-22.671a8.143 8.143 0 0 0-8.141-8.143h-20.351v-30.232a8.143 8.143 0 0 0-8.143-8.143h-28.194a8.143 8.143 0 0 0-8.143 8.143v30.232H399a8.143 8.143 0 0 0-8.143 8.143v22.671A8.143 8.143 0 0 0 399 240.28h15.115v63.667c0 27.037 15.408 41.282 43.9 41.282 12.183 0 21.383-2.2 27.6-5.446a8.161 8.161 0 0 0 4.145-9.278Z" />
  </svg>
);

const SvgBots = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBots;
