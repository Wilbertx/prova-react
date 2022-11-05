import Noticias from '../components/Noticias';
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
  return <div style={{ height: "300px" }}></div>;
};

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />} errorElement={<ErrorComp />}>
      <Route index path="/" element={<HomeScreens />}></Route>
      <Route path="/Noticias" element={<Noticias />}></Route>
      <Route path="/Sobre" element={<Sobre />}></Route>
    </Route>
  )
);

export const RootNavigation = () => {
  return <RouterProvider router={route} />;
};

