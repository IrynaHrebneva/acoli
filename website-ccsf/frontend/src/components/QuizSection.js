import React from 'react';
import '../App.css';
import './QuizSection.css';

function QuizSection() {
    return (
        <div>
            <img source src="../images/img-17.jpg"/>
            <div class = "container">
            <h1>Find your best place</h1>
                <div>
                    <h2>Purchasing Power</h2> 
                    <div>
                        <input type="range" min="0" max="4" id="my-range" list="my-datalist"/>
                        <datalist id='my-datalist' class='--list-length: 5;'>
                            <option>Not Important</option>
                            <option></option>
                            <option>Somewhat Important</option>
                            <option></option>
                            <option>Very Important</option>
                        </datalist>
                    </div>
                </div>
                <div>
                <h2>Safety</h2>
                    <div>
                        <input type="range" min="0" max="4" id="my-range" list="my-datalist"/>
                        <datalist id='my-datalist' class='--list-length: 5;'>
                            <option>Not Important</option>
                            <option></option>
                            <option>Somewhat Important</option>
                            <option></option>
                            <option>Very Important</option>
                        </datalist>
                    </div>
                </div>
                <div>
                <h2>Health Care</h2>
                    <div>
                        <input type="range" min="0" max="4" id="my-range" list="my-datalist"/>
                        <datalist id='my-datalist' class='--list-length: 5;'>
                            <option>Not Important</option>
                            <option></option>
                            <option>Somewhat Important</option>
                            <option></option>
                            <option>Very Important</option>
                        </datalist>
                    </div>
                </div>
                <div>
                <h2>Climate</h2>
                    <div>
                        <input type="range" min="0" max="4" id="my-range" list="my-datalist"/>
                        <datalist id='my-datalist' class='--list-length: 5;'>
                            <option>Not Important</option>
                            <option></option>
                            <option>Somewhat Important</option>
                            <option></option>
                            <option>Very Important</option>
                        </datalist>
                    </div>
                </div>
                <div>
                <h2>Cost of Living</h2>
                    <div>
                        <input type="range" min="0" max="4" id="my-range" list="my-datalist"/>
                        <datalist id='my-datalist' class='--list-length: 5;'>
                            <option>Not Important</option>
                            <option></option>
                            <option>Somewhat Important</option>
                            <option></option>
                            <option>Very Important</option>
                        </datalist>      
                    </div>
                </div>
                <div>
                <h2>Property Price to Income Ratio</h2>
                    <div>
                        <input type="range" min="0" max="4" id="my-range" list="my-datalist"/>
                        <datalist id='my-datalist' class='--list-length: 5;'>
                            <option>Not Important</option>
                            <option></option>
                            <option>Somewhat Important</option>
                            <option></option>
                            <option>Very Important</option>
                        </datalist>
                    </div>
                </div>
                <div>
                <h2>Traffic/Commute Time</h2>
                    <div>
                        <input type="range" min="0" max="4" id="my-range" list="my-datalist"/>
                        <datalist id='my-datalist' class='--list-length: 5;'>
                            <option>Not Important</option>
                            <option></option>
                            <option>Somewhat Important</option>
                            <option></option>
                            <option>Very Important</option>
                        </datalist>
                    </div>
                </div>
                <div>
                <h2>Pollution</h2>
                    <div>
                    <input type="range" min="0" max="4" id="my-range" list="my-datalist" class='styled-slider'/>
                        <datalist id='my-datalist' class='--list-length: 5;'>
                            <option>Not Important</option>
                            <option></option>
                            <option>Somewhat Important</option>
                            <option></option>
                            <option>Very Important</option>
                        </datalist>
                    </div>
                </div>
                <div>
                <p>Filter results by location:</p>
                <label for="countries">Country:</label>
                <select name="countries">
                    <option value="">---Any Country---</option>
                    <option value="United States">United States</option>
                </select>
                <label for="regions">Region:</label>
                <select name="regions" multiple>
                    <option value="">---Any Region---</option>
                    <option value="CA">CA</option>
                    <option value="NY">NY</option>
                </select>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default  QuizSection;