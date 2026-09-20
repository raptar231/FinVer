// Initialize mermaid with larger default sizes
document.addEventListener('DOMContentLoaded', function() {
  if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
        nodeSpacing: 80,
        rankSpacing: 100,
        padding: 40
      },
      themeVariables: {
        fontSize: '18px',
        fontFamily: 'var(--md-text-font, "Roboto")',
        primaryColor: '#0f172a',
        primaryTextColor: '#f8fafc',
        primaryBorderColor: '#38bdf8',
        lineColor: '#94a3b8',
        textColor: '#e2e8f0',
        mainBkg: '#0f172a',
        secondaryColor: '#052e16',
        tertiaryColor: '#2e1065'
      }
    });
  }
});