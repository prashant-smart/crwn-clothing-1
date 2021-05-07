import React from 'react';

import { SpinnerContainer,SpinnerOverlay } from './with-sppiner.styles';

const withSpinner =WrappedComponent=>{
    const Sppiner=({isLoading,...otherProps}) =>{
        return isLoading?(
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ):(
            <WrappedComponent {...otherProps}/>
        );
    };
    return Sppiner;
};

export default  withSpinner;