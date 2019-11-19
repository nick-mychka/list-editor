import React from "react";
import List from "../list/List";

const App = (props) => {
    return (
        <div className="container">
            <div className="row justify-content-center pt-5 pb-3">
                <div className="col-12">
                    <h1 className="text-center mb-4">List Editor</h1>
                </div>

                <div className="col-12 col-md-8 col-xl-6">
                    <List parent={null} />
                </div>
            </div>
        </div>
    );
}

export default App;