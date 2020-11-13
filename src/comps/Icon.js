import React, { Component } from 'react';

class Icon extends Component {
    render() {
        return (
            <div>
                <i className="fa fa-cc-visa" style={{ color: 'navy', fontSize: '24px', margin: '10px' }} />
                <i className="fa fa-cc-amex" style={{ color: 'blue', fontSize: '24px', margin: '10px' }} />
                <i className="fa fa-cc-mastercard" style={{ color: 'red', fontSize: '24px', margin: '10px' }} />
                <i className="fa fa-cc-discover" style={{ color: 'orange', fontSize: '24px', margin: '10px' }} />

            </div>
        );
    }
}

export default Icon;