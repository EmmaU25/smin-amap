import React from 'react';


class header extends React.Component{
	render(){
		return (
            <header>
                <h1>AMAP</h1>
                <h3><span> { this.props.tagline }</span></h3>
            </header>
	    )
	}
}

export default header;