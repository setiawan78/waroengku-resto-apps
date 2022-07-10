class ProfileAbout extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="profile-card">
      <div class="img-thumb">
        <img data-src="images/rahmsol.jpg" alt="rahmat soleh" class="lazyload"/>
      </div>
      <div class="bio-profile">
        <h3>Indra Setiawan</h3>
        <p>Mahasiswa Universitas Dinamika<p>
        <p>Fullstack Developer<p>
        <a href="https://www.linkedin.com/in/indra-setiawan-b2009822b/" target="_blank" rel="noopener">Visit LinkedIn</a>
        <a href="https://github.com/setiawan78" target="_blank" rel="noopener">Visit Github</a>
      </div>
      </div>
      `;
  }
}

customElements.define('profile-dev', ProfileAbout);
