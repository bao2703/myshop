import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import NavMenu from "./NavMenu";
import Auth from "./Auth";

import { fetchCategoriesAsync, selectCategories } from "../store/category-slice";

const App = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <BrowserRouter basename={"/"}>
      <NavMenu />
      <div className="container">
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <Switch>
          <Route path="/authentication" component={Auth} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
        Category
        {categories.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    </BrowserRouter>
  );
};

export default App;
