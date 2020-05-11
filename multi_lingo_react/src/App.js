import React from 'react';
import './App.css';
import MainBox from './mainbox'

function App() {
  return (
    <div className="App">
      <nav className="tl pa3 pa4-ns">
        <a className="link dim black b f6 f5-ns dib mr3" href="#" title="Home">Site Name</a>
        <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">Home</a>
        <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="About">About</a>
        <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">Store</a>
        <a className="link dim gray    f6 f5-ns dib" href="#" title="Contact">Contact</a>
      </nav>
      <header className='f3 white bg-blue ma1 dib br3 pa3 shadow-5'>Welcome to Multi Lingo App</header>
      <div className="mw9 center ph3-ns">
        <div className="cf ph2-ns">
          <div className="fl w-100 w-20-ns pa2">
            <div className="outline bg-white pv2">
              <form className="pa2">
              <fieldset id="favorite_movies" className="bn">
              <legend className="fw7 mb2">Favorite Movies</legend>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="spacejam" value="spacejam"/>
                  <label htmlFor="spacejam" className="lh-copy">Space Jam</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="airbud" value="airbud"/>
                  <label htmlFor="airbud" className="lh-copy">Air Bud</label>
              </div>
              <div className="flex items-center mb2">
                  <input className="mr2" type="checkbox" id="hocuspocus" value="hocuspocus"/>
                  <label htmlFor="hocuspocus" className="lh-copy">Hocus Pocus</label>
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
