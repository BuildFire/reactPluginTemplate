

import React, { useState, useEffect } from 'react';
import {
    sortableContainer,
    sortableElement,
    sortableHandle,
} from 'react-sortable-hoc';

const DragHandle = sortableHandle(() => <i style={{ fontSize: 24, color: '#999' }} className="icon icon-menu" />);
const SortableContainer = sortableContainer(({ children }) => <div>{children}</div>);
const SortableItem = sortableElement((
    { value, edit, remove, allowMove }
) => (
    <div className="d-item" onClick={edit} style={{ cursor: 'pointer', justifyContent: 'space-between' }}>
        <div style={{ alignItems: 'center', display: 'flex' }}>

            <div className="pull-left cursor-grab ui-sortable-handle">
                <DragHandle />
                <span> {value.title} </span>
            </div>
        </div>
    </div>
));

export default function SortablelistComponent(props) {

    const onSortEnd = ({ oldIndex, newIndex }) => {
        let newArr = props.items;
        props.setItems([]);
        let oldItem = newArr[oldIndex];
        newArr.splice(oldIndex, 1);
        newArr.splice(newIndex, 0, oldItem);
        props.setItems(newArr);
    };

    return (
        <SortableContainer onSortEnd={onSortEnd}
        useDragHandle>
            {props.items.map((value, index) => (
                <SortableItem key={`item-${value}`} index={index} value={value} />
            ))}
        </SortableContainer>
    )
}
