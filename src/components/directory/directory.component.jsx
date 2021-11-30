import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.css'
import SECTIONS_DATA from './sections.data';
class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: SECTIONS_DATA
        }
    }
    render() {
        return (
            <div className="directory">
                {
                    this.state.sections.map(({ id, ...otherSectionProps}) =>
                        <MenuItem key={id} {...otherSectionProps} />
                    )
                }
            </div>
        )
    }
}

export default Directory;