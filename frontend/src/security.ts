// Security measures
export function initSecurity(): void {
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e: MouseEvent) => e.preventDefault());

  // Disable keyboard shortcuts
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (
      (e.ctrlKey && (e.key === 'u' || e.key === 's')) || // Ctrl+U, Ctrl+S
      (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'j' || e.key === 'c')) || // Ctrl+Shift+I/J/C
      e.key === 'F12'
    ) {
      e.preventDefault();
      return false;
    }
  });

  // Basic console protection in production
  if (process.env.NODE_ENV === 'production') {
    const noop = (): void => {};
    ['log', 'info', 'warn', 'error', 'debug'].forEach((method: string) => {
      // Bypass type checking by casting console to any
      (console as any)[method as keyof Console] = noop as Console['log'];
    });
  }

  // DevTools detection (warning only, no reload)
  let devtoolsWarningShown = false;
  const checkDevTools = (): void => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
  };
}
