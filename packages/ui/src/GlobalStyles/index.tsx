import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body,
        body.light {
          --is-dark: false;
          --kukui-bg-card: #ffffff;
          --kukui-bg-default: #f1f5f9;
          --kukui-bg-dialog: #ffffff;
          --kukui-bg-hover: rgba(148, 163, 184, 0.12);
          --kukui-bg-status-bar: #cbd5e1;
          --kukui-text-default: #1e293b;
          --kukui-text-secondary: #64748b;
          --kukui-text-hint: #94a3b8;
          --kukui-text-disabled: #94a3b8;
          --kukui-border: #e2e8f0;
          --kukui-input-border: #e2e8f0;
          --kukui-input-border-focused: rgb(218 218 219 / 30%);
          --kukui-divider: #eff2f5;
          --kukui-icon: #64748b;
        }
        body {
          --kukui-primary: #4f46e5;
          --kukui-primary-rbg: 79, 70, 229;
          --kukui-primary-hover: #473fce;
          --kukui-primary-text: #fff;

          --kukui-secondary: #f3f6f9;
          --kukui-secondary-hover: #e4e6ef;
          --kukui-secondary-text: #7e8299;

          /* --kukui-skeleton-bg: #f2f2f2; */
          --kukui-skeleton-bg: var(--kukui-accent-100);
          --kukui-skeleton-bg-shimmer: #fefefe;
          --kukui-skeleton-shimmer-offset: 250px;
          --kukui-placeholder-shimmer-offset: 250px;

          --kukui-accent-50: #f8fafc;
          --kukui-accent-100: #f1f5f9;
          --kukui-accent-200: #e2e8f0;
          --kukui-accent-300: #cbd5e1;
          --kukui-accent-400: #94a3b8;
          --kukui-accent-500: #64748b;
          --kukui-accent-600: #475569;
          --kukui-accent-700: #334155;
          --kukui-accent-800: #1e293b;
          --kukui-accent-900: #0f172a;
          --kukui-accent: #1e293b;

          --kukui-red-50: #fff5f5;
          --kukui-red-100: #ffe3e3;
          --kukui-red-200: #ffc9c9;
          --kukui-red-300: #ffa8a8;
          --kukui-red-400: #ff8787;
          --kukui-red-500: #ff6b6b;
          --kukui-red-600: #fa5252;
          --kukui-red-700: #f03e3e;
          --kukui-red-800: #e03131;
          --kukui-red-900: #c92a2a;
          --kukui-red: #fa5252;
          --kukui-red-rgb: 250 82 82;

          --kukui-lime-50: #f4fce3;
          --kukui-lime-100: #e9fac8;
          --kukui-lime-200: #d8f5a2;
          --kukui-lime-300: #c0eb75;
          --kukui-lime-400: #a9e34b;
          --kukui-lime-500: #94d82d;
          --kukui-lime-600: #82c91e;
          --kukui-lime-700: #74b816;
          --kukui-lime-800: #66a80f;
          --kukui-lime-900: #5c940d;
          --kukui-lime: #82c91e;

          --kukui-yellow-50: #fff9db;
          --kukui-yellow-100: #fff3bf;
          --kukui-yellow-200: #ffec99;
          --kukui-yellow-300: #ffe066;
          --kukui-yellow-400: #ffd43b;
          --kukui-yellow-500: #fcc419;
          --kukui-yellow-600: #fab005;
          --kukui-yellow-700: #f59f00;
          --kukui-yellow-800: #f08c00;
          --kukui-yellow-900: #e67700;
          --kukui-yellow: #fab005;
        }
      `}
    />
  );
};

export default GlobalStyles;
