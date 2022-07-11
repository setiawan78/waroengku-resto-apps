import WaroengkuDbSource from '../data/waroengku-dbsource';
import { createWaroengkuDetailTemplate } from "../views/templates/template-creator";

const sendReview = async () => {
  const id = document.querySelector('#id-resto').value;
  const name = document.querySelector('#name').value;
  const review = document.querySelector('#message').value;
  
  const body = { id, name, review };

  const response = await WaroengkuDbSource.reviewWaroengs(body);
  return response;
};

export default sendReview;
