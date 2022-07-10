import React from 'react';
import Alert from 'react-bootstrap/Alert';

class Alert extends React.Component {
    render() {
        const { children } = this.props;
        return (<div className="alert alert-warning" role="alert">
                    what is love?
                    {children}
                </div>)
    }
}

export default Alert