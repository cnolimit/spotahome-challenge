import React from 'react';
import Navigation from './components/Navigation'
import HomeCard from './components/HomeCard'
import {apiGetHomeCards} from './utils/api'
import Spinner from './components/Spinner';


class App extends React.Component {
  state = { fetching: true, homecards: [] }
  componentDidMount() {
    apiGetHomeCards().then((res) => {
      this.setState({fetching: false, homecards: res.data})
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />
        {
          this.state.fetching
          ? <Spinner />
          : this.state.homecards.map((homecard, index) => (
            <HomeCard
              key={`${homecard.adId}-${index}`}
              title={homecard.title}
              image={homecard.photoUrls.homecardHidpi}
              price={`${homecard.pricePerMonth}`}
              currency={`${homecard.currencySymbol}`}
            />
          ))
        }
      </React.Fragment>
    )
  }
}

export default App;
