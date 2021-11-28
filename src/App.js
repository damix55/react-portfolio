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

    // bind functions
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

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

    // set state
    this.state = {
      currentPage: this.getCurrentPage(props.parameters['*']),
      lang: lang,
      theme: theme,
      headerInitialSize: undefined
    }
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


  handleScroll() {
    var position = this.main.scrollTop;
    console.log(position)

    // clear height from autoscrolling
    // TODO: disable scrolling when autoscrolling
    if (position == 0) {
      var mainContent = this.mainContent
      mainContent.style.height = null
    }

    const shrinkAmount = 1.8

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


  render() {
    return (
      <div className="main-container">
        <header ref={e => this.header = e}>
          <div className="avatar" ></div>
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
        <div className="content-container" ref={e => this.contentContainer = e}>
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
          <main id="main" ref={e => this.main = e}>
            <div class='main-content' ref={e => this.mainContent = e}>
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