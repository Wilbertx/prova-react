const {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} = require('react-router-dom');
const {PageLayout} = require('./components/PageLayout');

const ErrorComp = () => {
    return <div>Erro</div>
}

const HomeScreen = () => {
    return <div style={{height: '300px'}}>Home Screen</div>;
}

const SobreScreen = () => {
    return <div style={{height: '300px'}}>Sobre Screen</div>;
}

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<div />} errorElement={<ErrorComp />}>
            <Route index path="/" element={<HomeScreen />}></Route>
            <Route index path="/sobre" element={<SobreScreen />}></Route>
            <Route index path="/contato" element={<HomeScreen />}></Route>
        </Route>
    ) 
);

export const RootNavigation = () => {
    return <RouterProvider router={route} />;
};