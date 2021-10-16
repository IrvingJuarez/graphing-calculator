import React from "react";

class InputField extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section>
                <article>
                    <form>
                        <div>
                            <label htmlFor="x-axis">X: </label>
                            <input type="text" name="x-axis" id="x-axis" />
                        </div>

                        <div>
                            <label htmlFor="y-axis">Y: </label>
                            <input type="text" name="y-axis" id="y-axis" />
                        </div>

                        <input type="button" value="Print" />
                    </form>
                </article>
            </section>
        )
    }
}

export default InputField;