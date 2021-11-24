// Libraries
import React, { Component } from "react";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import detectBrowserLanguage from 'detect-browser-language'

// Components
import NavEntry from './components/NavEntry'
import Content from './components/Content';

// Style
import './assets/css/style.css';
import './assets/css/fonts.css';


class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor (props) {
    super(props);
    const { cookies } = props;

    // language
    var lang = cookies.get('lang')

    if (!lang) {
      lang = detectBrowserLanguage().substring(0,2)
      if (lang) {
        lang = lang.substring(0,2)
        if (lang !== 'it') {
          lang = 'en'
        }
      }
      else {
        lang = 'en'
      }
      
      cookies.set('lang', lang, { path: '/' });
    }

    // theme
    var theme = cookies.get('theme')

    if (!theme) {
      theme = 'dark';
    }
    
    this.setTheme(theme)

    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);

    this.state = {
      currentPage: this.getCurrentPage(props.parameters['*']),
      lang: lang,
      theme: theme
    }
  }


  componentDidUpdate = (prevProps) => {
    if (prevProps.parameters['*'] !== this.props.parameters['*']) {
      this.setState({
        currentPage: this.getCurrentPage(this.props.parameters['*']),
      })
    }
    
  }


  getCurrentPage(name) {
    if (name === '' || name === undefined) {
      return 'home'
    }
    var validPages = ['home', 'projects', 'blog', 'contacts']
    var nameStripped = name.substring(0, name.length-5)

    if (!name.endsWith('.html') || !validPages.includes(nameStripped)) {
      return 'notFound'
    }
    return nameStripped
  }


  toggleLanguage() {
    if (this.state.lang !== 'it') {
      var newLang = 'it'
    }
    else {
      var newLang = 'en'
    }
    this.setState({lang: newLang})

    const { cookies } = this.props;
    cookies.set('lang', newLang, { path: '/' });
  }



  toggleTheme() {
    if (this.state.theme !== 'light') {
      var newTheme = 'light'
    }
    else {
      var newTheme = 'dark'
    }

    this.setTheme(newTheme)
  }


  setTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.remove('light-mode')
    }
    else {
      document.body.classList.add('light-mode')
    }
    this.setState({theme: theme})

    const { cookies } = this.props;
    cookies.set('theme', theme, { path: '/' });
  }


  shrinkHeader() {
    function scale(breakingPoint, position, x) {
      return (breakingPoint*x-position)/(breakingPoint*x)
    }

    var position = document.getElementById('main').scrollTop;

    // clear height from autoscrolling
    // causes minor glitches on short pages on Chrome
    if (position < 100) {
      var mainContent = document.getElementsByClassName('main-content')[0]
      var main = document.getElementById('main')
      mainContent.style.height = null
    }

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
              <div class='option' onClick={this.toggleTheme}>
                <span className="icon">&#xfa93;</span> <span>{ this.state.theme } theme</span>
              </div>
              <div class='option' onClick={this.toggleLanguage}>
                <span className="icon">&#xf6e6;</span> <span>{ this.state.lang==='en' ? ( 'english' ) : ( 'italiano' ) }</span>
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
            <Content name={this.state.currentPage} lang={this.state.lang} />
          </main>
        </div>
      </div>
    );
  }
}

export default withCookies(App);