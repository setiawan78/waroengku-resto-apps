import WaroengkuList from '../views/pages/waroengku-itemlist';
import PageDetail from '../views/pages/waroengku-detail';
import PageFavorite from '../views/pages/waroengku-favorite';
import AboutPage from '../views/pages/waroengku-aboutus';

const routes = {
  '/': WaroengkuList,
  '/detail/:id': PageDetail,
  '/favorite': PageFavorite,
  '/about': AboutPage,
};

export default routes;
