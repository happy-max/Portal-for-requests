import React, { useReducer, createContext } from "react"

export const ContactContext = createContext()

const initialState = {
    contacts: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_CONTACT":
            return {
                contacts:  action.payload
            }
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.payload]
            }

        case "DEL_CONTACT":
            return {
                contacts: state.contacts.filter(
                    contact => contact.email !== action.payload
                )
            }
        default:
            throw new Error()
    }
}

export const ContactContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ContactContext.Provider value={[state, dispatch]}>
            {props.children}
        </ContactContext.Provider>
    )
}