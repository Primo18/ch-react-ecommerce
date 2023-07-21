import { useState } from "react";

const ToggleText = ({ initial, alternate }) => {

    const [otherText, setOtherText] = useState(true);


    const [text, setText] = useState(initial);
    const updateText = () => {
        setText(text === initial ? alternate : initial);
    };
    return (
        <>
            <p>{text}</p>
            <button onClick={updateText}>Toggle</button>
            <button onClick={() => setOtherText(!otherText)}>{otherText ? "Ocultar texto" : "Mostrar Texto"}</button>
            {otherText && <p>Este es el texto que se puede ocultar o mostrar</p>}
        </>
    );
};

export default ToggleText;