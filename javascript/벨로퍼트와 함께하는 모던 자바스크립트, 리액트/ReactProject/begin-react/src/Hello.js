import React from 'react';

function Hello({color, name}){
    return (
        <h1 style= {{ color }} >
            안녕하세요 {name}
        </h1>
    )
        
}

Hello.defaultProps = {
    name: 'noNamed',
    color: 'gray'
}

export default Hello;