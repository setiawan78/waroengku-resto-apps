import WaroengkuDbSource from '../data/waroengku-dbsource';

const sendReview = async (element) => {
  const id = element.querySelector('#id-resto').value;
  const name = element.querySelector('#name').value;
  const review = element.querySelector('#message').value;
  const loadingElement = {
    sending: element.querySelector('.sending'),
    netral: element.querySelector('.netral'),
  };
  const body = { id, name, review };

  const response = await WaroengkuDbSource.review(body, loadingElement);
  afterSending(response, element);
  return response;
};

export default sendReview;
