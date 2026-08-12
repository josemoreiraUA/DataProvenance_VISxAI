class IncludeHTML extends HTMLElement {
  async connectedCallback() {
    const src = this.getAttribute('src');
    if (!src) return;

    try {
      const res = await fetch(src);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: Failed to fetch ${src}`);
      }
      
      // Inject content
      this.innerHTML = await res.text();

      // Trigger MathJax re-render if present
      if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
        MathJax.typesetPromise([this]).catch(err => console.error(err));
      }
    } catch (err) {
      console.error('IncludeHTML Error:', err);
      // Temporary visible error on screen for debugging:
      this.innerHTML = `<p style="color: red; font-weight: bold;">[Failed to load: ${src}]</p>`;
    }
  }
}

customElements.define('include-html', IncludeHTML);


