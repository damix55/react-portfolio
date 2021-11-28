// Libraries
import React, { Component } from "react";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import detectBrowserLanguage from 'detect-browser-language'
import yaml from 'js-yaml'

// Components
import NavEntry from './components/NavEntry'
import Content from './components/Content';
import Icon from './components/Icon'

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

    // bind functions
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollOnTop = this.scrollOnTop.bind(this);

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
      
      cookies.set('lang', lang, { path: '/', secure: true});
    }

    // theme
    var theme = cookies.get('theme')

    if (!theme) {
      theme = 'dark';
    }
    
    this.setTheme(theme, false)

    // set state
    this.state = {
      currentPage: this.getCurrentPage(props.parameters['*']),
      lang: lang,
      theme: theme,
      headerInitialSize: undefined,
      menuData: {}
    }

    // fetch menu data
    const menuData = require(`./pages/menu.yml`)
    fetch(menuData.default)
      .then(r => r.text())
      .then(text => yaml.load(text))
      .then(yml => this.setState({menuData: yml}));
  }


  componentDidMount = () => {
    this.main.addEventListener('scroll', this.handleScroll);

    var headerStyle = getComputedStyle(this.header)
    var headerInitialHeight = parseInt(headerStyle.height.replace('px', ''))
    var headerInitialFontSize = parseInt(headerStyle.fontSize.replace('px', ''))
    var headerInitialPaddingTop = parseInt(headerStyle.paddingTop.replace('px', ''))
    var headerInitialPaddingBottom = parseInt(headerStyle.paddingBottom.replace('px', ''))

    this.setState({
      headerInitialFontSize: headerInitialFontSize,
      headerInitialHeight: headerInitialHeight + headerInitialPaddingTop + headerInitialPaddingBottom
    })
  }


  componentWillUnmount() {
    this.main.removeEventListener('scroll', this.handleScroll)
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
    var newLang;
    if (this.state.lang !== 'it') {
      newLang = 'it'
    }
    else {
      newLang = 'en'
    }
    this.setState({lang: newLang})

    const { cookies } = this.props;
    cookies.set('lang', newLang, { path: '/', secure: true});
  }



  toggleTheme() {
    var newTheme
    if (this.state.theme !== 'light') {
      newTheme = 'light'
    }
    else {
      newTheme = 'dark'
    }

    this.setTheme(newTheme)
  }


  setTheme(theme, setState=true) {
    if (theme === 'dark') {
      document.body.classList.remove('light-mode')
    }
    else {
      document.body.classList.add('light-mode')
    }

    if(setState) {
      this.setState({theme: theme})
    }

    const { cookies } = this.props;
    cookies.set('theme', theme, { path: '/', secure: true});
  }


  handleScroll() {
    var position = this.main.scrollTop;

    // clear height from autoscrolling
    // TODO: disable scrolling when autoscrolling
    if (position === 0) {
      var mainContent = this.mainContent
      mainContent.style.height = null
    }

    var shrinkAmount;

    if (window.innerWidth > 500) {
      shrinkAmount = 1.8
    }
    else {
      shrinkAmount = 1.5
    }
    

    const shrinkFactor = 1/shrinkAmount
    const breakingPoint = this.state.headerInitialHeight * (1-shrinkFactor);

    if (position > breakingPoint) {
      position = breakingPoint;
    }

    this.scrollSpacer.style.height = position + 'px'
    var scaleFactorNorm = (breakingPoint-position)/breakingPoint
    var scaleFactor = (scaleFactorNorm*(1-shrinkFactor)) + shrinkFactor

    this.header.style.fontSize = this.state.headerInitialFontSize * scaleFactor + 'px'
  }


  scrollOnTop() {
    var mainContent = this.mainContent
    var height = mainContent.scrollHeight

    mainContent.style.height = height + 'px'
    
    this.main.scroll({top: 0, left: 0, behavior: 'smooth'})
}


  render() {
    return (
      <div className="main-container">
        <header ref={e => this.header = e}>
          <div className="avatar"></div>
          <div className="title-container">
            <div>
              <h1>Damiano Dovico</h1>
              <span className="subtitle">Developer</span>
            </div>
          </div>
          <div className="options-container">
            <div>
              <div className='option' onClick={this.toggleTheme}>
                <span className="icon">&#xfa93;</span> <span>{ this.state.theme } theme</span>
              </div>
              <div className='option' onClick={this.toggleLanguage}>
                <span className="icon">&#xf6e6;</span> <span>{ this.state.lang==='en' ? ( 'english' ) : ( 'italiano' ) }</span>
              </div>
            </div>
          </div>
          <div className="hamburger">
            <div className="menu-icon icon">&#xf85b;</div>
          </div>
        </header>
        <div className="content-container" ref={e => this.contentContainer = e}>
          <nav>
            <ul>
              {/* pages */}
              { this.state.menuData.pages !== undefined &&
                this.state.menuData.pages.map(function(p, i) {
                  return(
                    <NavEntry 
                      title={p.name}
                      extension='html' 
                      icon={p.icon}
                      iconColor={p.color}
                      currentPage={this.state.currentPage}
                      scrollOnTop={this.scrollOnTop}
                      key={`nav-entry-${i}`}
                    />
                  )
                }, this)
              }
              <div className="spacer"></div>

              {/* links */}
              { this.state.menuData.links !== undefined &&
                this.state.menuData.links.map(function(l, i) {
                  return(
                    <a href={l.href} key={`link-${i}`}>
                      <li>
                        <Icon hex={l.icon} color={l.color} /> <span>{l.name}</span>
                      </li>
                    </a>
                  )
                }, this)
              }
            </ul>
          </nav>
          <main id="main" ref={e => this.main = e}>
            <div className='main-content' ref={e => this.mainContent = e}>
              <div className="scroll-spacer" ref={e => this.scrollSpacer = e}></div>
                <Content name={this.state.currentPage} lang={this.state.lang} />
              <div className="bottom-spacer"></div>
            </div>
          </main>
        </div>
        <div className="page-bottom"></div>
      </div>
    );
  }
}

export default withCookies(App);