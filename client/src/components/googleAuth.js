import React, {Component} from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '744378676671-ghmj1vl0r1a3jh0e8t78p6nokbsdjdrs.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.authInst = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.authInst.isSignedIn.get());
                this.authInst.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = isSignedIn => {
        console.log('isSignedIn', isSignedIn);
        if(isSignedIn) {
            this.props.signIn(this.authInst.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignOut() {
        this.authInst.signOut();
    }

    onSignIn() {
        this.authInst.signIn();
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOut.bind(this)} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignIn.bind(this)} className="ui red google button">
                    <i className="google icon" />
                    Sign In
                </button>
            )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

function mapStateToProp(state) {
    return {
        isSignedIn : state.auth.isSignedIn
    }
}

export default connect(mapStateToProp, {signIn, signOut})(GoogleAuth);