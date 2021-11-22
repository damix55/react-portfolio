import React, { Component } from "react";

import NavEntry from './components/NavEntry'
import { Routes,  Route, } from "react-router-dom";

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

// Style
import './assets/css/style.css';
import './assets/css/fonts.css';


class App extends Component {
  constructor (props) {
    super(props);

    this.updateCurrentPage = this.updateCurrentPage.bind(this);
  
    this.state = {
      currentPage: ''
    }
  }

  updateCurrentPage(page) {
    this.setState({currentPage: page})
  }


  shrinkHeader() {
    function scale(breakingPoint, position, x) {
      return (breakingPoint*x-position)/(breakingPoint*x)
    }

    var position = document.getElementById('main').scrollTop;

    var breakingPoint = 200;

    if (position > breakingPoint) {
        position = breakingPoint
    }

    var scaleFactor = scale(breakingPoint, position, 2.5)
    var headerHeight = 8.5 * scaleFactor
    var headerpaddingTop = 3.6 * scale(breakingPoint, position, 1.5)
    var headerpaddingBottom = 2.85 * scaleFactor

    var header = document.getElementsByTagName('header')[0].style
    header.height = headerHeight + "em"
    header.paddingTop = headerpaddingTop + "em"
    header.paddingBottom = headerpaddingBottom + "em"

    var avatar = document.getElementsByClassName('avatar')[0].style
    avatar.height = headerHeight + "em"
    avatar.minWidth = headerHeight + "em"

    var contentContainer = document.getElementsByClassName('content-container')[0].style
    var contentContainerDiff = headerpaddingTop + headerHeight + headerpaddingBottom + 3.55
    contentContainer.height = "calc(100vh - " + contentContainerDiff + "em)"

    var title = document.getElementsByTagName('h1')[0].style
    title.fontSize = 4 * scaleFactor + "em"

    var titleContainer = document.getElementsByClassName('title-container')[0].style
    titleContainer.paddingLeft =  3.6 * scaleFactor + "em"

    var subtitle = document.getElementsByClassName('subtitle')[0].style
    subtitle.fontSize = 1.5 * scaleFactor + "em"
  }

  render() {
    return (
      <div className="main-container">
        <header>
          <div className="avatar"></div>
          <div className="title-container">
            <div>
              <h1>Damiano Dovico</h1>
              <span className="subtitle">Developer</span>
            </div>
          </div>
          <div className="options-container">
            <div>
              <div>
                <span className="icon">&#xfa93;</span> <span>dark theme</span>
              </div>
              <div>
                <span className="icon">&#xf6e6;</span> <span>english</span>
              </div>
            </div>
          </div>
        </header>
        <div className="content-container">
          <nav>
            <ul>
              <NavEntry 
                title='home'
                extension='html' 
                icon={'\uf7db'}
                iconColor='yellow'
                currentPage={this.state.currentPage}
              />
              <NavEntry 
                title='projects'
                extension='html' 
                icon={'\uf670'}
                iconColor='green'
                currentPage={this.state.currentPage}
              />
              <NavEntry 
                title='blog'
                extension='html'
                icon={'\uf894'}
                iconColor='cyan'
                currentPage={this.state.currentPage}
              />
              <NavEntry 
                title='contacts'
                extension='html' 
                icon={'\uf867'}
                iconColor='blue'
                currentPage={this.state.currentPage}
              />
              <div className="spacer"></div>
              <a href="#">
                <li>
                  <span className="icon blue">&#xf83b;</span> <span>linkedin</span>
                </li>
              </a>
              <a href="#">
                <li>
                  <span className="icon magenta">&#xf7a2;</span> <span>github</span>
                </li>
              </a>
              <a href="#">
                <li>
                  <span className="icon yellow">&#xf6ed;</span> <span>email</span>
                </li>
              </a>
            </ul>
          </nav>
          <main id="main" onScroll={this.shrinkHeader}>
            <Routes>
              <Route
                path="/"
                element={<Home handle={this.updateCurrentPage} />}
              />
              <Route
                path="/home.html"
                element={<Home handle={this.updateCurrentPage} />}
              />
              <Route
                exact path="/projects.html"
                element={<Projects handle={this.updateCurrentPage} />}
              />
              <Route
                exact path="/blog.html"
                element={<Blog handle={this.updateCurrentPage} />}
              />
              <Route
                exact path="/contacts.html"
                element={<Contacts handle={this.updateCurrentPage} />}
              />
              <Route
                exact path="*"
                element={<NotFound />}
              />
            </Routes>
          </main>
        </div>
      </div>
    );
  }
}

export default App;