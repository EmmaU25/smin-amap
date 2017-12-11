import React from 'react';


class Storepicker extends React.Component{
	render(){
		return (
		    
	        <form className="store-selector">
	        {/*commentaire*/}
	        <h2>Entrez un nom de magasin</h2>
	        <input  type="text" required placeholder="Nom du magasin"/>
	        <button type="submit">Visiter le magasin</button>
	        </form>
	        
	    )
	}
}

export default Storepicker;