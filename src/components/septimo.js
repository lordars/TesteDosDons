import React, { Component } from 'react'
import { ThemeProvider, AppBar, TextField, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material"


export class Septimo extends Component {

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
                    31- eu prefiro ensinar a biblia  par amudar as vidas do que evanagelizar
                    </p>

                    <RadioGroup
                        aria-label="1"
                        name="radio-buttons-group"
                        onChange={handleChange('r31')}
                        defaultValue= {values.r31}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />

                    <p>
                    32- sou muito sensivel no discernimiento dos empecilhos ao desenvolvimento espiritual das pessoas e me esforço para ajudá-las a vencerem estes problemas de um modo positivio

                    </p>

                    <RadioGroup
                        aria-label="2"
                        name="radio-buttons-group"
                        onChange={handleChange('r32')}
                        defaultValue= {values.r32}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />

                    <p>

                       
33- minha motivação para ganhar mais dinheiro  é querer dar mais ao trabalhjo do senhor

                    </p>

                    <RadioGroup
                        aria-label="3"
                        defaultValue= {values.r33}
                        name="radio-buttons-group"
                        onChange={handleChange('r33')}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />

                    <p>
                    34- tenho alvos e objetivos para o futuro e gosto de planejar com os outros para o futuros
                    </p>

                    <RadioGroup
                    aria-label="4"
                    defaultValue= {values.r34}
                    name="radio-buttons-group"
                    onChange={handleChange('r34')}
                    >
                    <FormControlLabel value="3" control={<Radio />} label="Muito" />
                    <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                    <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                    <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />

                    <p>
                    35- eu me alegro quando outros são abençoados e sofro com os problemas e tristezas dos outros
                    </p>

                    <RadioGroup
                    aria-label="5"
                    name="radio-buttons-group"
                    onChange={handleChange('r35')}
                    defaultValue= {values.r35}
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

export default Septimo
