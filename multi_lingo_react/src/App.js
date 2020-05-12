import React from 'react';
import './App.css';
import MainBox from './mainbox'

function handleChange(e){
  console.log(e.target.value)
}

function App() {
  return (
    <div className="App">
      <nav className="tl pa3 pa4-ns">
        <a className="link dim black b f6 f5-ns dib mr3" href="http://localhost:3000/" title="Home">Site Name</a>
        <a className="link dim gray    f6 f5-ns dib mr3" href="http://localhost:3000/" title="Home">Home</a>
        <a className="link dim gray    f6 f5-ns dib mr3" href="http://localhost:3000/" title="About">About</a>
        <a className="link dim gray    f6 f5-ns dib mr3" href="http://localhost:3000/" title="Store">Store</a>
        <a className="link dim gray    f6 f5-ns dib" href="http://localhost:3000/" title="Contact">Contact</a>
      </nav>
      <header className='f3 white bg-blue ma1 dib br3 pa3 shadow-5'>Welcome to Multi Lingo App</header>
      <header className='f3 white bg-blue ma1 dib br3 pa3 shadow-5'>Creation mode</header>
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-100 w-20-ns pa2">
            <div className="outline bg-white pv2">
              <form className="pa2" onChange={handleChange}>
              <fieldset id="favorite_movies" className="bn">
              <legend className="fw7 mb2">My languages</legend>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="english_chbox" value="english"/>
                  <label htmlFor="english" className="lh-copy">English</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="french_chbox" value="french"/>
                  <label htmlFor="french" className="lh-copy">French</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="romanian_chbox" value="romanian"/>
                  <label htmlFor="romanian" className="lh-copy">Romanian</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="spanish_chbox" value="spanish"/>
                  <label htmlFor="spanish" className="lh-copy">Spanish</label>
              </div><div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="italian_chbox" value="italian"/>
                  <label htmlFor="italian" className="lh-copy">Italian</label>
              </div>
              </fieldset>
              </form>
            </div>
          </div>
          <div className="fl w-100 w-70-ns pa2">
            <div className="outline bg-washed-blue pv3">
            <MainBox />

            </div>
            
          </div>
          <div className="fl w-100 w-10-ns pa2">
            <div className="outline bg-white pv4"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
