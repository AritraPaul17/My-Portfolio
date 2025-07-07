import { createContext, useRef, useState } from "react";

export const PageContext = createContext();

export const PageContextProvider = (props) => {

    const [showMenu, setShowMenu] = useState(false);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillRef = useRef(null);
    const workRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (reference) => {
        reference.current.scrollIntoView({ behavior: 'smooth' }); // You can also use { block: 'center' } if needed
    };

    return (
        <PageContext.Provider value={{ showMenu, setShowMenu, homeRef, aboutRef, skillRef, workRef, contactRef, scrollToSection }}>
            {props.children}
        </PageContext.Provider>
    )
}