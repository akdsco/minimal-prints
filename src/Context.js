import React from 'react'

const Context = React.createContext(undefined, undefined);

function ContextProvider(props) {
  return(
    <Context.Provider value=''>
      {props.children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}