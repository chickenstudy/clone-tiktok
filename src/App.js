import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRouter } from '~/routes';
import { Fragment } from 'react';
import { DefaultLayout } from './components/Layouts';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
