import './Home.css'
import Button from './Button'
import Pessoa from './img/pessoa.png'



function Home(){
    return(
        <div>
          <Button />
  
        <h1 className="home">Bem-vindo à <br />seção de vagas!</h1>
        <img src={Pessoa} alt="Ícone de vaga" />
      </div>
      
    )
    
    }
    export default Home
    