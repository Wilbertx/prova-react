import FetchProducts from '../components/FetchProducts';
import Sobre from '../components/Sobre';
import { HomeScreens } from '../screens/HomeScreens';

const {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} = require("react-router-dom");
const { PageLayout } = require("../components/PageLayout");

const ErrorComp = () => {
  return <div>Erro</div>;
};


const SobreScreen = () => {
  return <div style={{ height: "300px" }}>Sobre Screen</div>;
};

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />} errorElement={<ErrorComp />}>
      <Route index path="/" element={<HomeScreens />}></Route>
      <Route path="/sobre" element={<SobreScreen />}></Route>
      <Route path="/produtos" element={<FetchProducts />}></Route>
      <Route path="/noticias" element={<Sobre />}></Route>
    </Route>
  )
);

export const RootNavigation = () => {
  return <RouterProvider router={route} />;
};

