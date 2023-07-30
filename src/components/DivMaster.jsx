import { useState} from 'react'
import './../style/DivMaster.css'

export default function DivMaster() {
    
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [imc, setImc] = useState('')

    //onChange={event => {funcao(event.target.value);}}

    function calcularImc(){
        const pesoFloat = parseFloat(peso)
        const alturaFloat = parseFloat(altura)
        const imcValor = pesoFloat/(alturaFloat*alturaFloat)
        
        setImc(imcValor.toFixed(2))

        document.getElementById('normal').style.color = '#FFFFFF';
        document.getElementById('sobrepeso').style.color = '#FFFFFF';
        document.getElementById('obesidade').style.color = '#FFFFFF';
        document.getElementById('grave').style.color = '#FFFFFF';
        document.getElementById('magreza').style.color = '#FFFFFF';

        if (imcValor < 18.5 && imcValor != 0) {
            document.getElementById('magreza').style.color = '#F8DF0F';
        } else if (imcValor >= 18.5 && imcValor <= 24.9) {
            document.getElementById('normal').style.color = '#00FF00';
        } else if (imcValor >= 25.0 && imcValor <= 29.9) {
            document.getElementById('sobrepeso').style.color = '#FF7F50';
        } else if (imcValor >= 30.0 && imcValor <= 39.9) {
            document.getElementById('obesidade').style.color = '#B03A2E';
        } else if (imcValor >= 40) {
            document.getElementById('grave').style.color = '#FF0000';
        }
    }
    
    function limpar() {
        setPeso('')
        setAltura('')
        setImc('')
        document.getElementById('normal').style.color = '#FFFFFF'
        document.getElementById('sobrepeso').style.color = '#FFFFFF'
        document.getElementById('obesidade').style.color = '#FFFFFF'
        document.getElementById('grave').style.color = '#FFFFFF'
        document.getElementById('magreza').style.color = '#FFFFFF'
    }

    return(
        // <div className='DivMaster '>
        //     <div>
        //         <h2 className='title'>Calcular IMC</h2>
                
        //         <div className='DivPesoAltura'>
        //             <h3>Peso: </h3>
        //             <input type="number" className='Input ' placeholder='Quilos' value={peso} 
        //             onChange={event => {setPeso(event.target.value);}}/>
                    
        //             <h3>Altura: </h3>
        //             <input type="number" className='Input ' placeholder='Metros' value={altura} 
        //             onChange={event => {setAltura(event.target.value);}} />
        //         </div>

        //         <div className='DivBotao'>
        //             <div>
        //                 <button type="button" className='Button btn ' id='calcular' onClick={calcularImc}><strong>Calular</strong></button>
        //             </div>
        //             <div>
        //                 <button type="button" className='Button btn ' id='limpar' onClick={limpar}><strong>Limpar</strong></button>
        //             </div>
        //         </div>

        //         <div className='DivResultado '>
        //             <h3>SEU IMC:</h3>
        //             <input type='number' className='Input' placeholder='Resultado' id='resultado' value={imc} readOnly/>
        //         </div>

        //         <div className='DivTabela'>
                    
                //     <table>
                //     <h3 className=''>Indices: </h3>			
                //         <tr>    
				// 			<td><h3>IMC</h3></td>
				// 			<td><h3>Classificação</h3></td>
				// 		</tr>
				// 		<tr id='magreza'  >
				// 			<td>Menor que 18,5: </td>
				// 			<td>Magreza</td>
				// 		</tr>
				// 		<tr id='normal' >
				// 			<td>Entre 18,5 e 24,9: </td>
				// 			<td>Normal</td>
				// 		</tr>
				// 		<tr id='sobrepeso' >
				// 			<td>Entre 25,0 e 29,9: </td>
				// 			<td>Sobrepeso</td>
				// 		</tr>
				// 		<tr id='obesidade' >
				// 			<td>Entre 30,0 e 39,9: </td>
				// 			<td>Obesidade</td>
				// 		</tr>
				// 		<tr id='grave' >
				// 			<td>Maior que 40,0: </td>
				// 			<td>Obesidade Grave</td>
				// 		</tr>
				
				// </table>
        //         </div>
        //     </div>
        // </div>
        
        <div className='container DivMaster'>
            <div class="row   ">
                <h2 className='title'>Calcular IMC</h2>
                
                <div class="col DivPesoAltura mb-3">
                <h3>Peso: </h3>
                <input type="number" className='Input ' placeholder='Quilos' value={peso} 
                onChange={event => {setPeso(event.target.value);}}/>
                        
                <h3>Altura: </h3>
                <input type="number" className='Input ' placeholder='Metros' value={altura} 
                onChange={event => {setAltura(event.target.value);}} />

                </div>
                <div class="col DivBotao mb-3">
                    <div>
                        <button type="button form-control" className='Button btn ' id='calcular' onClick={calcularImc}><strong>Calular</strong></button>
                        
                    </div>
                    <div>
                        <button type="button form-control" className='Button btn ' id='limpar' onClick={limpar}><strong>Limpar</strong></button>
                    </div>

                </div>
                    


                <div class="col DivResultado mb-3">
                    <h3>SEU IMC:</h3>
                    <input type='number' className='Input' placeholder='Resultado' id='resultado' value={imc} readOnly/>


                </div>
                <div class="col DivTabela mb-3">
                        <table className=''>
                        <h3 className=''>Indices: </h3>			
                            <tr>    
                                <td><h3>IMC</h3></td>
                                <td><h3>Classificação</h3></td>
                            </tr>
                            <tr id='magreza'  >
                                <td>Menor que 18,5: </td>
                                <td>Magreza</td>
                            </tr>
                            <tr id='normal' >
                                <td>Entre 18,5 e 24,9: </td>
                                <td>Normal</td>
                            </tr>
                            <tr id='sobrepeso' >
                                <td>Entre 25,0 e 29,9: </td>
                                <td>Sobrepeso</td>
                            </tr>
                            <tr id='obesidade' >
                                <td>Entre 30,0 e 39,9: </td>
                                <td>Obesidade</td>
                            </tr>
                            <tr id='grave' >
                                <td>Maior que 40,0: </td>
                                <td>Obesidade Grave</td>
                            </tr>
                    
                    </table>


                </div>
                
            </div>
        </div>
        







    )
}