import React, { useState } from "react";
import Transformer from "./Transformer";

function ConverterHex2rgb() {
    const [inputHex, setInputHex] = useState('#34495e');

    const [convert, setConvert] = useState({
        resultText: Transformer(inputHex),
        bgColor: Transformer(inputHex),
    });

    const regexp = /#[A-Fa-f0-9]{6}$/;

    const handleChangeInput = (evt) => {
        let result = evt.target.value;
        setInputHex(result);

        if (result.length < 7) {
            return;
        }

        regexp.test(result.toLowerCase())
            ? setConvert({
                resultText: Transformer(result),
                bgColor: Transformer(result),
            })
            : setConvert({ resultText: 'Error' });
    }
    return (
        <>
            <div
                className="converter-wrapper"
                style={{ backgroundColor: convert.bgColor }}
            >
                <div className="converter-content">
                    <div className="input-wrapper">
                        <input
                            className="hex-input"
                            type="text"
                            placeholder="Ввод значения"
                            value={inputHex}
                            maxLength="7"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="result-wrapper">
                        <span className="rgb-result">
                            {inputHex.length > 6 ? convert.resultText : ""}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ConverterHex2rgb;
