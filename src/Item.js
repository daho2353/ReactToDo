import React from 'react';

function createTask(item)
{
    return <li key={item.key}>{item}</li>
}
function Item(props){
    var newItem = props.entries;
    var listItems = newItem.map(createTask);
    return(
        <ul className="List" style={{listStylePosition : 'inside'}}>
            {listItems}
        </ul>
    );
}

export default Item;