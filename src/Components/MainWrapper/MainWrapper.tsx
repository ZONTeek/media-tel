import React from "react";
import constants from '../../constants.json'

export const MainWrapper = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <div style={styles}>
            {children}
        </div>
    )
}

const styles = {
    width: `calc(100% - ${constants.DRAWER_WIDTH}px)`, 
    marginLeft: `${constants.DRAWER_WIDTH}px`
}