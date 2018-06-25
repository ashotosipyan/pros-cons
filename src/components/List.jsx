import React from 'react';

export  default ( { header, items , addItem } ) => (
    <div className="list">
        <div className="list-header">
            {header}
        </div>
        <div className="list-items">
            {items.map( ( item, index ) => (
                <div className="item" key={index}>
                    <label>{index+1}.</label>
                    <input type="text" onInput={() => addItem(item.value)} data-index={index} />
                </div>
            ))}
        </div>
    </div>
);