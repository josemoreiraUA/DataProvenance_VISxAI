class IncludeHTML extends HTMLElement {
  async connectedCallback() {
    const src = this.getAttribute('src');
    if (!src) return;

    try {
      const res = await fetch(src);
      if (!res.ok) {
        throw new Error(`Status ${res.status}: Could not load ${src}`);
      }
      
      // Inject HTML content
      this.innerHTML = await res.text();

      // Safely re-render MathJax after content is inserted
      if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
        MathJax.typesetPromise([this]).catch(err => console.error('MathJax error:', err));
      }
    } catch (err) {
      console.error('IncludeHTML Error:', err);
      this.innerHTML = `<p style="color: #dc2626; font-size: 0.85rem;">Failed to load snippet: ${src}</p>`;
    }
  }
}

customElements.define('include-html', IncludeHTML);