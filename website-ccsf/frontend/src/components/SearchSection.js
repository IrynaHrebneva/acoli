import { render } from '@testing-library/react';
import React from 'react';
import '../App.css';
import './SearchSection.css';
import Table from './Table.js';

function handelChange(e) {
    if (e.charCode === 13) {
        this.setState({ query: this.search.value },
            () => {
                this.getQuery()
            }
        )   
    }
}

function SearchSection() {
//    render() {
    return (
        <div className='search-container'>

            <video autoPlay muted loop > 
                <source src="../videos/video-2.mp4" type="video/mp4" /> 
            </video> 
            <h1> Search Best Places To Live </h1>
            <div>
                <form>
                    <input
                        type='search'
                        className='search-field'
                        placeholder='Enter a City or Zip'
                        // ref={input => this.search = input}
                        // method="get" 
                        // onKeyUp={this.handelChange}
                    />
                </form>
            </div>

        </div>
    )
   //}

   
}

export default SearchSection;