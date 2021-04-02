import React, { Component } from 'react'
// import { Form } from 'react-bootstrap'
import Styles from "..//..//src//styles.css"
import Form from 'react-bootstrap/Form'

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
                            <Form.Group id="dePortArea" className="x-col x-md x-1-1-4 form-row selectf">
                            <i className="fas fa-plane-departure fa-fw"></i>
                            <Form.Control as="select" size="lg" id="dePort" placeholder="From" onChange="flightSearch.selectDePort(this.state.value)">
                             <option value>From</option>
                             <optgroup label="Ghana (Gaana)">
                             <option label="Accra - Kotoka Intl.(ACC)" value="ACC">Accra - Kotoka Intl.(ACC)</option>
                             <option label="Kumasi (KMS)" value="KMS">Kumasi (KMS)</option>
                             <option label="Takoradi Airport (TKD)" value="TKD">Takoradi Airport (TKD)</option>
                             <option label="Tamale Airport(TML)" value="TML">Tamale Airport (TML)</option>

                             </optgroup>
                           </Form.Control>
                          </Form.Group>
                        </div>
                     <div id="arrPortArea" className="x-col x-md x-1-4 form-row selectf">
                     <i className="fas fa-plane-departure fa-fw"></i>
                      <Form.Control as="select" size="lg" id="arrPort" placeholder="To" onChange="flightSearch.selectArrPort(this.value)">
                             <option value>To</option>
                             <optgroup label="Ghana (Gaana)">
                             <option label="Kumasi (KMS)" value="KMS">Kumasi (KMS)</option>
                             <option label="Takoradi Airport (TKD)" value="TKD">Takoradi Airport (TKD)</option>
                             <option label="Tamale Airport(TML)" value="TML">Tamale Airport (TML)</option>
                             </optgroup>
                      </Form.Control>
                    </div>

                    <div id="multiSelectPortArea" className="x-col x-md x-1-4 form-row selectf" style={{display:"none"}}>
                      <div>
                          
                      </div>
                    </div>
                    </div>
                
                </div>
                
            </div>
        )
    }
}

export default HomePage
