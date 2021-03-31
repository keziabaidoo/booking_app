import React, { Component } from 'react'
import Styles from "..//..//src//styles.css"

export class HomePage extends Component {
    render() {
        return (
            <div vc-col-inner>
                <div className="col-bg-overlay-wrap" data-bg-animation="none">
                    <div className="custom-tabs">
                       <ul className="x-col x-m x-1-1 booking-links">
                          <li><a className="active" data-tab="book-aflight">Book A Flight</a></li>

                          <li><a data-tab="check-in">Check-In</a></li>

                          <li><a data-tab="flight-schedule">Flight Schedule</a></li>
                       </ul>
                    </div>

                    <div className="x-col x-md x-1-1 booking-form">
                        <div id="book-flight" className="x-col x-md x-1-1 tab-content active">
                            <div id="dePortArea" className="x-col x-md x-1-1-4 form-d"></div>
                        </div>
                    </div>
                <h1>hello</h1>
                </div>
                
            </div>
        )
    }
}

export default HomePage
