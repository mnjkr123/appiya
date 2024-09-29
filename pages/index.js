import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import blogdata from "../src/data/blogdata.json";
import Singleblogdata from "../src/data/single-blogdata.json";
import Footerdata from "../src/data/footerdata.json";

import Home from "../src/components/Home";
import Header from "../src/components/components-global/Header";
import Footer from "../src/components/components-global/Footer";
import Blogfull from "../src/components/components-blog/Blogfull";
import Blog2col from "../src/components/components-blog/blog-2-col";
import Blog3col from "../src/components/components-blog/blog-3-col";
import Blogfullleftsidebar from "../src/components/components-blog/blog-full-left-sidebar";
import Blogfullrightsidebar from "../src/components/components-blog/blog-full-right-sidebar";
import Singleblog from "../src/components/components-blog/single-blog";
import Singleleftsidebar from "../src/components/components-blog/single-left-sidebar";
import Singlerightsidebar from "../src/components/components-blog/single-right-sidebar";
import ScrollToTop from "../src/components/components-global/ScrollToTop";

class Root extends Component {
  render() {
    return (
      <div>
        <Router>
          <HashRouter basename="/">
            <div>
              <Header />
              <ScrollToTop />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route
                  path="/blog-full"
                  render={() => {
                    return <Blogfull data={blogdata} />;
                  }}
                />
                <Route
                  path="/blog-2-col"
                  render={() => {
                    return <Blog2col data={blogdata} />;
                  }}
                />
                <Route
                  path="/blog-3-col"
                  render={() => {
                    return <Blog3col data={blogdata} />;
                  }}
                />
                <Route
                  path="/blog-full-left-sidebar"
                  render={() => {
                    return <Blogfullleftsidebar data={blogdata} />;
                  }}
                />
                <Route
                  path="/blog-full-right-sidebar"
                  render={() => {
                    return <Blogfullrightsidebar data={blogdata} />;
                  }}
                />
                <Route
                  path="/single-blog"
                  render={() => {
                    return <Singleblog data={Singleblogdata} />;
                  }}
                />
                <Route
                  path="/single-left-sidebar"
                  render={() => {
                    return <Singleleftsidebar data={Singleblogdata} />;
                  }}
                />
                <Route
                  path="/single-right-sidebar"
                  render={() => {
                    return <Singlerightsidebar data={Singleblogdata} />;
                  }}
                />
              </Switch>
              <Footer data={Footerdata} />
            </div>
          </HashRouter>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
