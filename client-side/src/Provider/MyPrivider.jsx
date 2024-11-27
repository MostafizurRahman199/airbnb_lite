import React, { createContext, useContext as useReactContext } from 'react';


const MyContext = createContext();


export const useMyContext = () => {
    const context = useReactContext(MyContext);
    if (!context) {
        throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
};


const MyProvider = ({ children }) => {
  
    const contextValue = {
        example: "This is an example value",
        // Add more state or methods as needed
    };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
