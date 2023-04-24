import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import routes from "./config/Routes";
import { DefaultLayout } from "./layout/DefaultLayout";
function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
