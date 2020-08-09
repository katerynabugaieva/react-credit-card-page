import React from 'react';

class CreditCardDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: '1200,00$',
      status: 'Active/ Inactive',
      resetsOn: '(nut virtuell) 01. May 2020',
      atm: 'Yes/No',
      version: 'Physical/ Virtual',
      expirationDate: '(nur physisch?) 08/2024',
    };
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Monthly limit</th>
              <td>{this.state.limit}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{this.state.status}</td>
            </tr>
            <tr>
              <th>Resets on</th>
              <td>{this.state.resetsOn}</td>
            </tr>
            <tr>
              <th>ATM withdrewals</th>
              <td>{this.state.atm}</td>
            </tr>
            <tr>
              <th>Version</th>
              <td>{this.state.version}</td>
            </tr>
            <tr>
              <th>Expires on</th>
              <td>{this.state.expirationDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CreditCardDetails;
