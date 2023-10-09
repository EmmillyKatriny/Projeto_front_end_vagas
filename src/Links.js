import { NavLink } from "react-router-dom";
import './Links.css';

function Links(){
    return(
        <nav> 
        <ul > 
      
        <NavLink activeClassName="is-active" to="/" 
        exact > Home </NavLink>

     
      
        
         </ul> 
         </nav>
    )

}
export default Links;