import React from 'react'

function childrenWithProps(children, props){
  return React.children.map(props.children,
        child => React.cloneElement(child, {...props}))
}
export { childrenWithProps }