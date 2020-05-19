import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import MainPage from './pages/MainPage';
import FoodPage from "./pages/FoodPage";
import TourPage from "./pages/TourPage";
import FoodBoard from "./pages/FoodBoard";
import TourBoard from "./pages/TourBoard";
import Header from './layouts/Header';
import Nav from "./components/Nav";
import Footer from './layouts/Footer';

const dashboardRoutes = [];

function App(props) {
  const { ...rest } = props;

  return (
    <React.Fragment>
        <Header
        color="white"
        routes={dashboardRoutes}
        brand="MATTANG"
        rightLinks={<Nav />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      ></Header>
      <Route exact path="/" component={MainPage}/>
      <Route exact path="/food" component={FoodPage} />
      <Route exact path="/tour" component={TourPage} />
      <Route path="/foodBoard" component={FoodBoard} />
      <Route path="/tourBoard" component={TourBoard} />
      {/*<Route component={PostPage} path={'/@:user_name/:write_id'} exact/>*/}
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Footer />
    </React.Fragment>
  );
}

export default App;
