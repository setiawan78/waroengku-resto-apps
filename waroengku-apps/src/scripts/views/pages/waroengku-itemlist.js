import WaroengkuDbSource from '../../data/waroengku-dbsource';
import { createWaroengkuItemTemplate } from '../templates/template-creator';

const WaroengkuList = {
  async render() {
    const html = `
      <div>
        <div class="hero">
          <div class="container">
              <h1 class="hero__title">Waroengku Apps</h1>
              <p class="hero__tagline">Tentukan Pilihan Restaurantmu Sekarang!!</p>
              <p class="hero__tagline">Jadikan Momen Makan Santai Bersama Keluarga Di Tempat Restaurant Pilihanmu!</p>
            <a href="#content" class="btn">Find Now!</a>
          </div>
        </div>

        <div id="content" class="content">
          <h2 class="content__heading">Explore Waroengku</h2>
          <div class="loader">

          </div>
          <div id="restos" class="restos">
          
          </div>
        </div>
      </div>
    `;
    return html;
  },

  async afterRender() {
    const restos = await WaroengkuDbSource.waroengsList();
    const restosContainer = document.querySelector('#restos');
    const loader = document.querySelector('.loader');
    if (restos.length !== 0) {
      loader.remove();
      restos.forEach((resto) => {
        restosContainer.innerHTML += createWaroengkuItemTemplate(resto);
      });
    }
  },
};

export default WaroengkuList;
