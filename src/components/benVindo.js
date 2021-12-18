import React, { Component } from 'react'
import { ThemeProvider, AppBar, TextField, Button, RadioGroup, FormControlLabel, Radio } from "@mui/material"


export class BenVindo extends Component {

    continue = e => {
        e.preventDefault();

        this.props.nextStep();

    }
    back = e => {
        e.preventDefault();
        this.props.backStep();

    }

    render() {
      
        return (

            <div>
                <h1>TESTE DOS DONS</h1>

                <h2>Este teste possui 35 sentenças que ajudarão ao (à) irmão(ã) a enxergar com mais clareza
                    seus dons espirituais.
                    Clasifique cada sentença, aplicando a escala e escrevendo o número apropiado no quadrinho correspondente na tabela. Para colocar as respostas na tabela deve-se usar o sentido vertical e não horizontal.
                    Despois de completar o teste, some os pontos em cada fila horizontal e escreva o resultado correspondente dos totais. O resultado final em cada fila idica ivel de iteresse e habilidade que tem  a area de certo dom. Os resultados elvados mostram quais os dos espirituais permanentes rm 12 6-8 são mais evidentes em sua vida

                </h2>

                <Button

                    variant="contained"
                    color="success"
                    onClick={this.continue}
                >Iniciar</Button>


            </div>
        )
    }
}


export default BenVindo
