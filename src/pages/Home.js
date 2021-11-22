import React, { Component } from "react";
import Typist from 'react-typist';

class Home extends Component {
  constructor (props) {
    super(props)
    this.props.handle('home')
  }

  render() {
    return (
      
        <div class='main-content'>
          <section>
            <h2>// about me</h2>
            <p>
              <span>
                <Typist cursor={{show: false}} avgTypingDelay={20} startDelay={500}>
                  Hi! My name is <span className="bold magenta">Damiano</span>.{' '}
                  <Typist.Delay ms={1000} />
                  I’m a 24-year-old <span className="bold green">developer</span>{' '}
                  based in <span className="bold yellow">Milan, IT</span>.
                </Typist>
              </span>
            </p>
          </section>
          <div className="spacer"></div>
          <div className="spacer"></div>

          <section>
            <h2>// education</h2>
            <div className="element-container">
              <p>
                <span className="element-left">
                  <span className="bold yellow">*</span> [2019-2022]
                </span>
                <span>
                  <span className="bold red">Master’s Degree</span> in{' '}
                  <span className="bold green">Computer Science</span>
                </span>
              </p>
              <p>
                <span className="element-left"></span>
                <span>@ Università degli Studi di Milano-Bicocca</span>
              </p>
            </div>
            <div className="spacer"></div>
            <div className="element-container">
              <p>
                <span className="element-left">
                  <span className="bold yellow">*</span> [2016-2019]
                </span>
                <span>
                  <span className="bold red">Bachelor's Degree</span> in{' '}
                  <span className="bold green">Computer Science</span>
                </span>
              </p>
              <p>
                <span className="element-left"></span>
                <span>@ Università degli Studi di Milano-Bicocca</span>
              </p>
            </div>
            <div className="spacer"></div>
            <div className="element-container">
              <p>
                <span className="element-left">
                  <span className="bold yellow">*</span> [2016-2019]
                </span>
                <span className="bold red">High School Diploma</span>
              </p>
              <p>
                <span className="element-left"></span>
                <span>
                  @ Liceo Scientifico Statale "Leonardo da Vinci" - Milano
                </span>
              </p>
            </div>
          </section>
          <div className="spacer"></div>
          <div className="spacer"></div>
          <section>
            <h2>// work experince</h2>
            <div className="element-container">
              <p>
                <span className="element-left">
                  <span className="bold yellow">*</span> [2017-2018]
                </span>
                <span className="bold red">Rider</span>
              </p>
              <p>
                <span className="element-left"></span>
                <span>@ Uber Eats</span>
              </p>
            </div>
          </section>
          <div className="spacer"></div>
          <div className="spacer"></div>
          <section>
            <h2>// skills</h2>
            <div className="skill-row">
              <div className="skill-column">
                <div className="elements-container">
                  <p>
                    <span className="element-left">
                      <span className="icon yellow">&#xf121;</span>{' '}
                      <span className="bold">Programming</span>
                    </span>
                    <span className="green skill-left">Python</span>
                    <span className="bold magenta">
                      <span>[</span>
                      <span className="skill-bar">##########</span>
                      <span>]</span>
                    </span>
                  </p>
                  <p>
                    <span className="element-left"></span>
                    <span className="green skill-left">Javascript</span>
                    <span className="bold magenta">
                      <span>[</span>
                      <span className="skill-bar">#######</span>
                      <span>]</span>
                    </span>
                  </p>
                  <p>
                    <span className="element-left"></span>
                    <span className="green skill-left">Java</span>
                    <span className="bold magenta">
                      <span>[</span>
                      <span className="skill-bar">#######</span>
                      <span>]</span>
                    </span>
                  </p>
                  <p>
                    <span className="element-left"></span>
                    <span className="green skill-left">C/C++</span>
                    <span className="bold magenta">
                      <span>[</span>
                      <span className="skill-bar">######</span>
                      <span>]</span>
                    </span>
                  </p>
                </div>
                <div className="spacer"></div>
                <div className="elements-container">
                  <p>
                    <span className="element-left">
                      <span className="icon yellow">&#xfcbe;</span>{' '}
                      <span className="bold">OS</span>
                    </span>
                    <span className="green skill-left">Windows</span>
                    <span className="bold magenta">
                      <span>[</span>
                      <span className="skill-bar">##########</span>
                      <span>]</span>
                    </span>
                  </p>
                  <p>
                    <span className="element-left"></span>
                    <span className="green skill-left">Linux</span>
                    <span className="bold magenta">
                      <span>[</span>
                      <span className="skill-bar">########</span>
                      <span>]</span>
                    </span>
                  </p>
                </div>
                <div className="spacer"></div>
                <div className="elements-container">
                  <p>
                    <span className="element-left">
                      <span className="icon yellow">&#xf6e6;</span>{' '}
                      <span className="bold">Languages</span>
                    </span>
                    <span className="green">Italian</span>: native
                  </p>
                  <p>
                    <span className="element-left"></span>
                    <span className="green">English</span>: C1
                  </p>
                  <div className="spacer"></div>
                </div>
              </div>
              <div className="skill-column skill-column-dx">
                <div className="elements-container">
                  <p>
                    <span className="element-left">
                      <span className="icon yellow">&#xf6b7;</span>{' '}
                      <span className="bold">Database</span>
                    </span>
                    <span className="green skill-left">MongoDB</span>
                    <span className="bold magenta">
                      <span>[</span>
                      <span className="skill-bar">######</span>
                      <span>]</span>
                    </span>
                  </p>
                  <p>
                    <span className="element-left"></span>
                    <span className="green skill-left">SQL</span>
                    <span className="bold magenta">
                      <span>[</span>
                      <span className="skill-bar">#####</span>
                      <span>]</span>
                    </span>
                  </p>
                </div>
                <div className="spacer"></div>
                <div className="elements-container">
                  <p>
                    <span className="element-left">
                      <span className="icon yellow">&#xe702;</span>{' '}
                      <span className="bold">Technologies</span>
                    </span>
                    <span className="green skill-left">Docker</span>
                    <span className="bold magenta">
                      <span>[</span>
                      <span className="skill-bar">########</span>
                      <span>]</span>
                    </span>
                  </p>
                  <p>
                    <span className="element-left"></span>
                    <span className="green skill-left">Git</span>
                    <span className="bold magenta">
                      <span>[</span>
                      <span className="skill-bar">#######</span>
                      <span>]</span>
                    </span>
                  </p>
                </div>
                <div className="spacer"></div>
                <div className="elements-container">
                  <p>
                    <span className="element-left">
                      <span className="icon yellow">&#xfa9e;</span>{' '}
                      <span className="bold">Web dev</span>
                    </span>
                    <span className="green skill-left">HTML</span>
                    <span className="bold magenta">
                      <span>[</span>
                      <span className="skill-bar">#########</span>
                      <span>]</span>
                    </span>
                  </p>
                  <p>
                    <span className="element-left"></span>
                    <span className="green skill-left">CSS</span>
                    <span className="bold magenta">
                      <span>[</span>
                      <span className="skill-bar">########</span>
                      <span>]</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        <div className="bottom-spacer"></div>
        
      </div>
    );
  }
}

export default Home;
