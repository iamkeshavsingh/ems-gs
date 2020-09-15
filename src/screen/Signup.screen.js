import React from 'react';

import Form from '../render-props/Form';
import Card from '../ui/Card';

var input_metadata = [
    { name: 'name', type: 'text', label: 'Enter Full Name' },
    { name: 'email', type: 'email', label: 'Enter Email' },
    { name: 'mobile', type: 'number', label: 'Enter Mobile' },
    { name: 'password', type: 'password', label: 'Enter Password' }
];

function SignupScreen() {


    function handleSubmit(state) {
        console.log(state);
    }

    return (
        <Form input_metadata={input_metadata}>
            {function (state, change) {
                return (
                    <section className="container" style={{ marginTop: '5rem' }}>
                        <Card className="row">
                            <form className="col s12" onSubmit={function (event) {
                                event.preventDefault();
                                handleSubmit(state);
                            }}>
                                {input_metadata.map(function (input) {
                                    return (
                                        <div className="row" key={input.name}>
                                            <div className="input-field col s8">
                                                <input id={input.name} type={input.type} className="validate" onChange={change} />
                                                <label htmlFor={input.name}>{input.label}</label>
                                            </div>
                                        </div>
                                    );
                                })}
                                <button type="submit" className="btn btn-primary btn-large">SignUp</button>
                            </form>
                        </Card>
                    </section>
                );
            }}
        </Form>
    );
}


export default SignupScreen;