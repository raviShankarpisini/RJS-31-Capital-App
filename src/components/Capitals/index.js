import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

const Country = props => {
  const {eachCountry} = props
  const {id, capitalDisplayText, country} = eachCountry

  return <option value={id}>{capitalDisplayText}</option>
}

class Capitals extends Component {
  state = {stateId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({stateId: event.target.value})
  }

  render() {
    const {stateId} = this.state
    const selectingCountryItem = countryAndCapitalsList.find(
      eachState => eachState.id === stateId,
    )

    const countryName = selectingCountryItem.country
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <p className="description">
            <select
              className="select"
              onChange={this.onChangeCapital}
              value={stateId}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <Country eachCountry={eachCountry} key={eachCountry.id} />
              ))}
            </select>
            is capital of which country?
          </p>
          <h1 className="heading">{countryName}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
