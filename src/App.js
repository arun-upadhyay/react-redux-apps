import React from 'react';
import AllPost from "./AllPost";
import {HeaderPage} from './layout/header';
import {FooterPage} from './layout/footer'

function App() {
    return (
        <div className="App" class="container">
            <div>
                <HeaderPage/>
                <AllPost/>
                <FooterPage/>

            </div>

        </div>
    );
}

export default App;
