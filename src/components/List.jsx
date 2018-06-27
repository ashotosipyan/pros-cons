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
                        onChange={(e) => {
                                if(!e.target.value.length){
                                    deleteItem(item.id, e.target.dataset.index)
                                }else{
                                    addItem(e.target.value, e.target.dataset.index)
                                }
                            }
                        }
                        data-index={index + 1} 
                    />
                </div>
            ))}
        </div>
    </div>
);