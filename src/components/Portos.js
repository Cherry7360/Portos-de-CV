import SA from './imagens/sa.jpg'
import SV from './imagens/mindelo.jpg'
import SN from './imagens/sn.jpg'
import SAL from './imagens/sl.jpg'
import BV from './imagens/bv.jpg'
import MAIO from './imagens/maio.jpg'
import ST from './imagens/praia.jpg'
import FOGO from './imagens/fo.jpg'
import BRAVA from './imagens/br.jpg'
import cv from './imagens/cv.png'
import './Portos.css'
export default function Portos(props){

    return (

        <div className="Container">
            <div className='header'> 
                <img src={cv} alt=""/>
                <h1>Portos de CV</h1>
                </div>
            
            <div className="Card_ports" >
                <img src={SA} alt=""/>
                <div className='ilha'>
                    <p>Santo Antão</p> 
                    <button onClick= { () => props.selecionarPortos([-25.0646,17.0195])}>Porto Novo</button>
                </div> 
            </div>
            <div className="Card_ports">
                <img src={SV} alt=""/>
                <div className='ilha'>
                    <p>São Vicente</p>
                    <button onClick= { () => props.selecionarPortos([-24.995448,16.889619])}>Porto Grande</button></div>
                  
            </div>
            <div className="Card_ports">
                <img src={SN} alt=""/>
                <div className='ilha'>
                    <p>São Nicolau</p>
                    <button onClick= { () => props.selecionarPortos([ -24.3568,16.566])}>Porto Tarrafal</button>
                 </div>
            </div>
            <div className="Card_ports">
                <img src={SAL} alt=""/>
                <div className='ilha'>
                    <p>Sal</p>
                    <button  onClick= { () => props.selecionarPortos([ -22.982883,16.757578])}>Porto da Palmeira</button></div> 
            </div>
            <div className="Card_ports">
                <img src={BV} alt=""/>
                <div className='ilha'>
                    <p>Boa Vista</p>
                    <button  onClick= { () => props.selecionarPortos([ -22.918, 16.177])} >Porto Sal-Rei</button></div>
            </div>
            <div className="Card_ports">
                <img src={MAIO} alt=""/>
                <div className='ilha'> 
                    <p>Maio</p>
                    <button  onClick= { () => props.selecionarPortos([-23.21085,15.139576])}>Porto Inglês</button></div>
              
            </div>
            <div className="Card_ports">
                <img src={ST} alt=""/>
                <div className='ilha'>
                    <p>Santiago</p>
                    <button  onClick= { () => props.selecionarPortos([-23.5083,14.9208])}>Porto da Praia</button></div> 
                 
            </div>
            <div className="Card_ports">
                <img src={FOGO} alt=""/>
                <div className='ilha'>
                    <p>Fogo</p>
                    <button  onClick= { () => props.selecionarPortos([-24.501743,14.923969])}>Porto Vale Cavaleiros</button>
                    </div> 
                 
            </div>
            <div className="Card_ports">
                <img src={BRAVA} alt=""/>
                <div className='ilha'>
                    <p>Brava</p> 
                    <button  onClick= { () => props.selecionarPortos([-24.68039,14.887543])}>Porto Furna</button></div>
                 
            </div>
        </div> 
    )
}

/**selecionarPortos([-25.0646,17.0195])
 * ,longitude, latitude
 */