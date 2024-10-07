import "./styles/style.scss"

import {useState} from "react";

import {Option} from "./type/dropDownConstantType.ts";


function App() {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [isFocus, setIsFocus] = useState(false)

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        setIsFocus(false);
    };


    return (
        <div className="main">
            <div className="drop-down">
                <select id="cars" name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>
            </div>

        </div>
    )
}

export default App
