import React from 'react';

import MenuInitial from '../../components/languages-menu-initial/languages-menu-initial.component'




class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: 'nostate'
        }
    }
    
    
    render() {
         
        return (
        <div>
            <h1>Welcome to Multi Lingo Universe</h1>
            <h2>the best place where you can learn languages</h2>

            <MenuInitial 
                onClick={this.props.handleLanguagesChange} 
                buttonStyle={this.props.checkedLanguages} 
                langList={this.props.lang}
            />
            
        </div>

    )
    }
}

export default HomePage