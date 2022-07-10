import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class WaroengkuDbSource {
  static async waroengsList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async searchWaroengs(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailWaroengs(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async reviewWaroengs(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify({
        id: data.id,
        name: data.name,
        review: data.review,
      }),
    });
    return response.json();
  }

  static async _sendRequest(url) {
    const loading = document.querySelector('.loading');
    loading.classList.toggle('d-none');
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      loading.classList.toggle('d-none');
      if (responseJson.error) {
        throw new Error(responseJson.message);
      } else {
        return responseJson;
      }
    } catch (error) {
      loading.classList.toggle('d-none');
      swal('Uppss..!', error.message, 'error');
    }
  }
}

export default WaroengkuDbSource;
