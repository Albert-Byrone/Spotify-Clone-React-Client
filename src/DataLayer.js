import { React, createContext, useReducer, useContext } from 'react';

// prepare the datalayer
export const DataLayerContext = createContext();

// create the actual datalayer
export const DataLayer = ({ initialState, reducer, children }) =>( 
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);


// state provider function
export const useDataLayerValue = () => useContext(DataLayerContext);