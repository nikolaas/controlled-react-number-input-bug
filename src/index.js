import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(<ControlledInput />, document.getElementById('controlledInput'));
ReactDOM.render(<UncontrolledInput />, document.getElementById('uncontrolledInput'));

function ControlledInput() {
    const [value, setValue] = React.useState('');
    return (
        <React.Fragment>
            <span className="label">Controlled React Input</span>
            <input
                type="number"
                name="controlled-input"
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
        </React.Fragment>
    );
}

function UncontrolledInput() {
    return (
        <React.Fragment>
            <span className="label">Uncontrolled React Input</span>
            <input type="number" name="uncontrolled-input" />
        </React.Fragment>
    );
}
