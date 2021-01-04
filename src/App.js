import butterfly1 from './Butterfly1.jpg';
import butterfly2 from './Butterfly2.jpg';
import butterfly3 from './Butterfly3.jpg';
import FetchQuote from './quotesFetcher';

import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Butterflies</h1>
      <FetchQuote/>
      <figure>
      <img src={butterfly1} className="butterfly1" alt="butterfly1"/>
      <figcaption>Danaus Plexippus</figcaption>
      </figure>
      <figure>
      <img src={butterfly2} className="butterfly2" alt="butterfly2" />
      <figcaption>Morpho Pelides</figcaption>
      </figure>
      <figure>
      <img src={butterfly3} className="butterfly3" alt="butterfly3" />
      <figcaption>Delias Eucharia</figcaption>
      </figure>
    </div>
  );
}

export default App;
