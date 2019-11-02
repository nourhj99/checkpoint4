import React from 'react';

export default function Title(props)
{  
    let style;
    if (props.small==true)
    {
        style={...props.style,fontSize:14}
    }
    else
    {
        style={...props.style,fontSize:25}
    }
    return (
        <div>
          <p style={style}>{props.children}</p>
        </div>
    )
}