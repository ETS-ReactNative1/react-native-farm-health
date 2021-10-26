import React, { Component } from 'react'

const FirebaseContext = React.createContext(null);

export const withFirebase = Comment => props =>(
    <FirebaseContext>
        {firebase=><Component{...props} firebase={firebase}/>}
    </FirebaseContext>

);

export default FirebaseContext;