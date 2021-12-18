import React, { Component } from 'react'
import { ThemeProvider, AppBar, TextField, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material"


export class Quinto extends Component {

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
                        21- eu tenho grande interesse em ajudar as pessoas ignoradas, desconhecidas da moioria.
                    </p>

                    <RadioGroup
                        aria-label="1"
                        name="radio-buttons-group"
                        onChange={handleChange('r21')}
                        defaultValue= {values.r21}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />

                    <p>
                        22- quando falo contra o pecado, faço-o em obendiencia a Deus e não me preocupo com o que os homens pensem de mim

                    </p>

                    <RadioGroup
                        aria-label="2"
                        name="radio-buttons-group"
                        onChange={handleChange('r22')}
                        defaultValue= {values.r22}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />

                    <p>

                        23- eu tenho prazer de escrever, digitar, arquivar, registrar números ou atas , para organizar e manter em ordem o trabalho da igreja

                    </p>

                    <RadioGroup
                        aria-label="3"
                        defaultValue= {values.r23}
                        name="radio-buttons-group"
                        onChange={handleChange('r23')}
                    >
                        <FormControlLabel value="3" control={<Radio />} label="Muito" />
                        <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                        <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                        <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />

                    <p>
                    24- sou diligente em meu  estudo da biblia e bastante cuidadoso na area de  pesquisa biblicas
                    </p>

                    <RadioGroup
                    aria-label="4"

                    name="radio-buttons-group"
                    onChange={handleChange('r24')}
                    defaultValue= {values.r24}
                    >
                    <FormControlLabel value="3" control={<Radio />} label="Muito" />
                    <FormControlLabel value="2" control={<Radio />} label="Mais ou menos" />
                    <FormControlLabel value="1" control={<Radio />} label="Pouco" />
                    <FormControlLabel value="0" control={<Radio />} label="Nunca" />
                    </RadioGroup>
                    <br />

                    <p>
                    25- quando encontro um crente em aflições e sofrimientos, procuro conforta-lo
                    </p>

                    <RadioGroup
                    aria-label="5"
                    name="radio-buttons-group"
                    onChange={handleChange('r25')}
                    defaultValue= {values.r25}
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

export default Quinto
