import React, { Component } from 'react';

class ContactDetails extends Component {
  render() {
    const { fName, lName } = this.props;

    return (
      <div>
        <h3>Contact Details</h3>
        <pre>{JSON.stringify(this.props)}</pre>

        <div className="card">
          <div className="card-header">
            <h4>
              {fName}{"  "}{lName}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDetails;
