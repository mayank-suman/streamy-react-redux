import React, {Component} from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StreamCreate from "./stream/streamCreate";
import StreamEdit from "./stream/streamEdit";
import StreamList from "./stream/streamList";
import StreamDelete from "./stream/streamDelete";
import StreamShow from "./stream/streamShow";

import Header from "./header";

class App extends Component {
    render() {
        return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/edit" component={StreamEdit} />
                    <Route path="/streams/delete" component={StreamDelete} />
                    <Route path="/streams/show" component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
        )
    }
}

export default App;