import React from "react";
import Navigation from "./components/Navigation";
import HomeCard from "./components/HomeCard";
import { apiGetHomeCards } from "./utils/api";
import Spinner from "./components/Spinner";

class App extends React.Component {
  state = { fetching: true, homecards: [], totalMarkers: 0 };

  componentDidMount() {
    apiGetHomeCards()
      .then(res => {
        this.setState({
          fetching: false,
          homecards: res.data.listings,
          totalMarkers: res.data.totalMarkers
        });
      })
      .catch(() => {
        this.setState({ fetching: false });
      });
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />
        {this.state.fetching ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <h2>
              Displaying {this.state.homecards.length} of{" "}
              {this.state.totalMarkers}
            </h2>
            {this.state.homecards.map((homecard, index) => (
              <HomeCard
                key={`${homecard.adId}-${index}`}
                title={homecard.title}
                image={homecard.photoUrls.homecardHidpi}
                price={`${homecard.pricePerMonth}`}
                currency={`${homecard.currencySymbol}`}
              />
            ))}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default App;
