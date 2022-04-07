import React from 'react';
import { useEffect } from 'react';
import logo from './logo.svg';
import { CartoLayer, MAP_TYPES, setDefaultCredentials } from '@deck.gl/carto';
import './App.css';

function App() {
  useEffect(() => {
    // getCartoToken();
    const ICON_MAPPING = {
      marker: {x: 0, y: 0, width: 24, height: 24, mask: true}
      // ... you can set different mappings and use them by key at getIcon function
    };
    setDefaultCredentials({
      apiBaseUrl: 'https://gcp-us-east1.api.carto.com',
      accessToken:
        // eslint-disable-next-line
        'eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfajl3eHQwbnoiLCJqdGkiOiI3ZjVkZTJhYiJ9.deIgT389U_YFodUSADFt5g6EccLWIJAbw1Ta0CraYxQ'
    });
    // let icon = PinRed;
    new CartoLayer({
      connection: 'carto_dw',
      type: MAP_TYPES.QUERY,
      data: 'select * from carto-dw-ac-j9wxt0nz.shared.pha_retailer_2',
      pointType: 'icon',
      pickable: true,
      getIconSize: () => 29,
      getIconColor: () => [255, 0, 0],
      getIcon: () => 'marker',
      iconMapping: ICON_MAPPING,
      iconAtlas: 'https://s3.amazonaws.com/com.cartodb.users-assets.production/maki-icons/marker-stroked-24.svg?req=markup'
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
