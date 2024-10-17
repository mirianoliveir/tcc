import {createContext, useContext } from "react";
 
const DataContext = createContext({}); 

export default DataProvider ({children}) {

    return <DataContext.Provider value={{}}> {children} </DataContext.Provider>
} 

export function useData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
}