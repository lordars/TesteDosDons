import React, { Component } from 'react'
import { ThemeProvider, AppBar, TextField, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material"


export class Quarto extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    }
    back = e => {
        e.preventDefault();
        this.props.backStep();

    }

    render() {
        const { values, handleChange } = this.props;
        return (

            <div>
                <React.Fragment>
                    <AppBar title="Test dos dones" />
                    <p>
                        16-eu me sinto feliz quando sou solicitado a dar assistencia aos outros; não sinto a necessidade de possuir um posto de  liderança
                    </p>
                    <RadioGroup
                        aria-label="1"
                        name="radio-buttons-group"
                        onChange={handleChange('r16')}
                        defaultValue= {values.r16}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>
                        17- faço com que as verdades biblicas dificeis se tornem compreensiveis para os outros

                    </p>
                    <RadioGroup
                        aria-label="2"
                        name="radio-buttons-group"
                        onChange={handleChange('r17')}
                        defaultValue= {values.r17}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>

                        18-tenho capacidade de dar conselhos eficazes a pessoas com problemas pessoais
                    </p>
                    <RadioGroup
                        aria-label="3"

                        name="radio-buttons-group"
                        onChange={handleChange('r18')}
                        defaultValue= {values.r18}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>

                        19- não tenho nunhum problema em doar recursos e dar dinheiro alegremente para o ministerio da igreja
                    </p>
                    <RadioGroup
                        aria-label="4"

                        name="radio-buttons-group"
                        onChange={handleChange('r19')}
                        defaultValue= {values.r19}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />
                    <p>
                    20- poso planejar com outras pessoas com calma e dar-lhes a orientação necessaria para que sejam capacitado a realizar a tarefa planejada
                    </p>
                    <RadioGroup
                        aria-label="5"

                        name="radio-buttons-group"
                        onChange={handleChange('r20')}
                        defaultValue= {values.r20}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>

                    <br />
                    <Button

                        variant="contained"
                        color="success"
                        onClick={this.continue}
                    >Continue</Button>
                    <Button

                        variant="contained"
                        color="secondary"
                        onClick={this.back}
                    >voltar</Button>
                </React.Fragment>

            </div>
        )
    }
}


export default Quarto
