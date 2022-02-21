import React,{useContext} from "react";

function KalkItems({ hendelClick, back, resultat}){

    return(
        <div className="keybord">
            <button id="clear" >Clear</button>
            <button id = 'back' onClick={back}>C</button>
            <button className="btn2" onClick={hendelClick} name="/" >&divide;</button>
            <button className="btn1" onClick={hendelClick} name="7">7</button>
            <button className="btn1" onClick={hendelClick} name="8">8</button>
            <button className="btn1" onClick={hendelClick} name="9">9</button>
            <button className="btn2" onClick={hendelClick} name="*">&times;</button>
            <button className="btn1" onClick={hendelClick} name="4">4</button>
            <button className="btn1" onClick={hendelClick} name="5">5</button>
            <button className="btn1" onClick={hendelClick} name="6">6</button>
            <button className="btn2" onClick={hendelClick} name="-">&ndash;</button>
            <button className="btn1" onClick={hendelClick} name="1">1</button>
            <button className="btn1" onClick={hendelClick} name="2">2</button>
            <button className="btn1" onClick={hendelClick} name="3">3</button>
            <button className="btn2" onClick={hendelClick} name="+">+</button>
            <button className="btn1" onClick={hendelClick} name="0">0</button>
            <button className="btn1" onClick={hendelClick} name=".">.</button>
            <button className="btn2" onClick={resultat} name="=">=</button>


            


        </div>
    )
}

export default KalkItems
