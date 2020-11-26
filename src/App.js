import React from "react";
import Card from './components/card';
import './App.css';
import Cartnum from './components/cartnum';
import 'semantic-ui-css/semantic.min.css';
import Tables from './components/table';

function App() {
  return (
    <div className="App">  
      <Tables
        item =<Card

                header="COVID POSTERS | COVID-P015"
                mat="Material"
                matdes="PREMIUM SELF ADHESIVE"

                dim="Dimension"
                dimdes="19 INCH X 27 INCH X .2 INCH"

                pri="Price"
                prides="₹400"
              />
        quant =<Cartnum/>
        tot= "₹400"
      />
    </div>
  );
}

export default App;
