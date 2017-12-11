import React from 'react';

import inventory from './inventory'
import order from './order'
import header from './header'

class app extends React.Component{
	render(){
		return (
            <div className="amap">
                <div className="menu">
                    <header tagline="Des bons legumes"/>
                </div>
                <order/>
                <inventory/>
            </div>
	    )
	}
}

export default app;