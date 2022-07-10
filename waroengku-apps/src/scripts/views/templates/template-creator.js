import CONFIG from '../../globals/config';

const createWaroengkuItemTemplate = (resto) => `
  <div class="waroengku-item">
    <div class="waroengku-item__header">
        <img 
            class="lazyload waroengku-item__header__poster" 
            data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" 
            alt="${resto.name}." 
            height="200px"
       />
        <span class="c_rating">
              <i title="ratings" class="fa fa-star"></i>
              <span>${resto.rating}</span>
        </span>
    </div>
    <div class="waroengku-item__content">
      <h1 tabindex="-1" class="waroengku-item__title">
        <a tabindex="0" class="waroengku-item__content__link" href="${`/#/detail/${resto.id}`}">
          <span class=  waroengku-item__content__title>
            ${resto.name}
          </span>
        </a>
      </h1>
      <p class="kota">${resto.city}</p>
      <p class="waroengku-item__description">${resto.description}</p>
    </div>
  </div>
`;

const createWaroengkuDetailTemplate = (resto) => `
  <div>
    <h2 class="waroengku__title">${resto.name}</h2>
    <img 
        class="waroengku__poster" 
        src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" 
        alt="${resto.name}."
    />
    <div class="waroengku__info">
        <h4>Rating</h4>
        <i title="ratings" class="fas fa-star icon-primary2"></i>
        <p class="detail-name-address-rating">${resto.rating}</p>
        <h4>City</h4>
        <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
        <p class="detail-name-address-rating">${resto.city}</p>
        <h4>Address</h4>
        <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
        <p class="detail-name-address-rating">${resto.address}</p>
        <h4>Description</h4>
        <p class="detail-deskrip">${resto.description}</p>
    </div>
    
    <h4 class="menu__table-title">Menus</h4>
    <div class="table__menus">
        <table cellspacing='0' cellpadding='3'>
          <tr>
            <th class="judulmenu">Menu Makanan:</th>
          </tr>
          ${resto.menus.foods.map((menu) => `
            <tr>
              <td>${menu.name}</td>
            </tr>
          `).join('')}
        </table>

        <table cellspacing='0' cellpadding='3'>
          <tr>
            <th class="judulmenu">Menu Minuman:</th>
          </tr>
          ${resto.menus.drinks.map((menu) => `
            <tr>
              <td>${menu.name}</td>
            </tr>
          `).join('')}
        </table>
    </div>

    <h2 class="review__title">Customer Reviews</h2>
    <div class="waroengku__reviews">
      ${resto.customerReviews.map((review, index) => `
        <div class="card" key=${index}>
          <h3>${review.name}</h3>
          <h4>${review.date}</h4>
          <p>"${review.review}"</p>
        </div>
      `).join('')}
    </div>
    <div class="form-review">
    <p class="judul-subreview">Send Feedback</p>
    <form method="post">
      <input type="hidden" value="${resto.id}" id="id-resto"/>
      <label for="name">Name</label>
      <input id="name" type="text" required/>
      <label for="message">Message</label>
      <textarea id="message" required></textarea>
      <button type="submit">
        <span class="sending d-none"><div></div> Sending...</span>
        <span class="netral">Submit</span>
      </button>
    </form>
    </div>
  </div>
`;

const createAboutUsTemplate = () => `
      <div class="About-Us">
        <h2>About <span>Us</span></h2>
      </div>
      <div class="break-line"></div>
      <div class="gem-desc">
        <h3>GemFinder</h3>
        <p>Salah satu sektor yang terkena dampak dari pandemi Covid-19 adalah sektor pariwisata, terutama lokasi-lokasi yang termasuk hidden gem.
        Akibat dampak tersebut, beberapa lokasi wisata atau destinasi memiliki resiko untuk tutup dan tidak terawat karena kurangnya pendapatan
        akibat dari sedikitnya pengunjung, dan hal ini bisa menyebabkan berkurangnya lokasi pariwisata di Indonesia. Tetapi seiring berjalannya waktu
        dan kasus Covid-19 di Indonesia mulai mereda banyak orang mulai beraktivitas kembali sehingga sektor pariwisata dapat berjalan kembali. Maka dari itu
        kami membuat website dimana anda bisa mencari lokasi hidden gem tersebut yang kami dapatkan melalui survey.
        </p>
        <div class="kelompok">
          <h3>Kelompok CPSG-76</h3>
        </div>
      </div>
          <div class="row-profile">
            <div class="col-4">
              <div class="profile-content">
                <img src="${CONFIG.BASE_IMAGE_URL}fawwaz.jpg" alt="Fawwaz Kautsar">
                <h3>Fawwaz Kautsar</h3>
              </div>
            </div>
            <div class="col-4">
              <div class="profile-content">
                <img src="${CONFIG.BASE_IMAGE_URL}indra.jpg" alt="Indra Setiawan">
                <h3>Indra Setiawan</h3>
              </div>
            </div>
            <div class="col-4">
              <div class="profile-content">
                <img src="${CONFIG.BASE_IMAGE_URL}zhafran.jpg" alt="Zhafran Afif">
                <h3>Zhafran Afif</h3>
              </div>
            </div>
            <div class="col-4">
              <div class="profile-content">
                <img src="${CONFIG.BASE_IMAGE_URL}erick.jpg" alt="Tederick Budiono">
                <h3>Tederick Budiono</h3>
              </div>
            </div>
          </div>
          <div class="credits">
              <h2>Credits</h2>
              <p>Sumber gambar yang digunakan untuk API hidden gem: Google Maps</p>
              <p>Sumber API Hidden Gem (survey): <a href="https://docs.google.com/forms/d/173q_HkLuMI_cCeoJqHOMlNuqhgvervj6LEPqetjD_Nk/edit#responses</a></p>
          </div>
`;

const createLikeWaroengkuButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createunLikedWaroengkuButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createWaroengkuItemTemplate,
  createWaroengkuDetailTemplate,
  createAboutUsTemplate,
  createLikeWaroengkuButtonTemplate,
  createunLikedWaroengkuButtonTemplate,
};
