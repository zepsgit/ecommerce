import React from "react";
import './collection-preview.css'
import CollectionItem from "../collection-item/collection-item.component";
const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((items, idx) => idx < 4)
                        .map(({ id, ...otherItemProps })=> (
                <CollectionItem className="item" key={id} {...otherItemProps}/>
                    ))
                }
            </div>
        </div>
        
    )
}
export default CollectionPreview;