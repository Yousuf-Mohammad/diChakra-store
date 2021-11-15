import React from 'react';

import notfound from '../../images/Monster 404 Error.gif'
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '50%', height: "80%" }} src={notfound} alt="" />

        </div>
    );
};

export default NotFound;