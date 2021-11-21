import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.css'
import hats from '../../homepageImg/hats.jpg'
import jacket from '../../homepageImg/jacket.jpg'
import sneaker from '../../homepageImg/sneaker.jpg'
import women from '../../homepageImg/women.jpg'
import men from '../../homepageImg/men.jpg'
class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    id: 1,
                    title: "HATS",
                    imgUrl: hats,
                },
                {
                    id: 2,
                    title: "JACKETS",
                    imgUrl: jacket
                },
                {
                    id: 3,
                    title: "SNEAKERS",
                    imgUrl:sneaker
                },
                {
                    id: 4,
                    title: "WOMEN'S",
                    imgUrl: women,
                    size:'large'
                },
                {
                    id: 5,
                    title: "MEN'S",
                    imgUrl: men,
                    size:"large"
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory">
                {
                    this.state.sections.map(({ id, title, imgUrl, size }) =>
                        <MenuItem key={id} title={title} imgUrl={imgUrl} size={size} />
                    )
                }
            </div>
        )
    }
}

export default Directory;