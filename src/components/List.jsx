import React from 'react';

export  default ( { header, items , onInputChange } ) => (
    <div className="list">
        <div className="list-header">
            {header}
        </div>
        <div className="list-items">
            {items.map( ( item, index ) => (
                <div className="item" key={index}>
                    <label>{index+1}.</label>
                    <input type="text" onInput={onInputChange} data-index={index} value={item.value}/>
                </div>
            ))}
        </div>
    </div>
);