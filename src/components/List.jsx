import React from 'react';

export  default ( { header, items , addItem, deleteItem } ) => (
    <div className="list">
        <div className="list-header">
            {header}
        </div>
        <div className="list-items">
            {console.log(items)}
            {items.map( ( item, index ) => (
                <div className="item" key={index}>
                    <label>{index+1}.</label>
                    <input 
                        type="text" 
                        onChange={(e) => addItem(e.target.value, e.target.dataset.index)}
                        // value={item.value}
                        // defaultValue={item.value}
                        data-index={index} 
                    />
                </div>
            ))}
        </div>
    </div>
);