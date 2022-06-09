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
        }
      `}
    />
  );
};

export default GlobalStyles;
