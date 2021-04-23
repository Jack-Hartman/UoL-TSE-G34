// Import CSS.
import '../Styles/Loading.css';

// Import React.
import React, { Componeent } from 'react';

const Loading = () => {

    return (
        <>
            <div class="loader">
                <div class="loader-inner">
                    <div class="loader-line-wrap">
                    <div class="loader-line"></div>
                    </div>
                    <div class="loader-line-wrap">
                    <div class="loader-line"></div>
                    </div>
                    <div class="loader-line-wrap">
                    <div class="loader-line"></div>
                    </div>
                    <div class="loader-line-wrap">
                    <div class="loader-line"></div>
                    </div>
                    <div class="loader-line-wrap">
                    <div class="loader-line"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Loading;