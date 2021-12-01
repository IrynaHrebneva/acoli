import { React, Component } from 'react';
import '../App.css';
import './SearchQualityOfLiveSection.css';

export default class SearchQualityOfLiveSection extends Component { 
    constructor(props) {
        super(props);
        // set state
        this.state = {
          search: ""
        };

        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleKeyPress(event) {
        if (event.key == "Enter") {
            event.preventDefault();
            this.props.searchCallback(this.state.search);
        }
      };

      handleChange(event) {
        this.setState({search: event.target.value});
      }
    
      render() {
        return ( 
            <div>
            <img source src="../images/img-15.jpg"/>
            <div className='search-quality'>
                <div className='search-quality-container'>
                    <h1> Quality of Live </h1>
                    <span>Cost of Living scores and indexes are a way to compare the overall price of goods and services between different countries. You get a custom cost of living that includes housing, food, utilities, transportation, healthcare costs, taxes, and child care prices.</span>
                    <div className='search-quality-wrapper'>
                        <form action='/' method='get'>
                            <input
                                type='search'
                                value={this.state.search}
                                className='search-quality-field'
                                placeholder='Enter a City or Zip'
                                onKeyPress={this.handleKeyPress}
                                onChange={this.handleChange}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}