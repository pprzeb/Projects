import React from 'react';

import MenuInitial from '../../components/menu-initial/menu-initial.component'

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from 'react-dnd';


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
            <DndProvider backend={HTML5Backend}>
                <MenuInitial />
            </DndProvider>
            
        </div>

    )
    }
}

export default HomePage