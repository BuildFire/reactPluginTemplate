

import React, { useState, useEffect } from 'react';
import {
    sortableContainer,
    sortableElement,
    sortableHandle,
} from 'react-sortable-hoc';
import "./listStyle.less";



export default function SortablelistComponent(props) {
    const DragHandle = sortableHandle(() => <i style={{ cursor: 'pointer', fontSize: 24, color: '#999' }} className="control-List-Icon icon icon-menu" />);
    const SortableContainer = sortableContainer(({ children }) => <div>{children}</div>);
    const SortableItem = sortableElement((
        { value, edit, remove, allowMove }
    ) => (
        <div className="d-item" onClick={edit} style={{ justifyContent: 'space-between' }}>
            <div className="listedItem" style={{ alignItems: 'center', display: 'flex' }}>
                <div className="pull-left cursor-grab ui-sortable-handle ">
                    {
                        props.sortType == "manually" && 
                        <DragHandle />
                    }
                </div>
                <div className="layout-Name-Container">
                    <p className='layout-Name'> Layout {value.layout} - Title </p>
                    <p> Layout {value.layout} - Info </p>
                </div>
                <div className="controlsList">
                    <i style={{ cursor: 'pointer', fontSize: 24, color: '#999' }} className="control-List-Icon icon icon-pencil3" />
                    <i style={{ cursor: 'pointer', fontSize: 24, color: '#999' }} className="control-List-Icon icon icon-cross" />
                </div>
            </div>
        </div>
    ));
    console.log(props.items);
    const onSortEnd = ({ oldIndex, newIndex }) => {
        let newArr = props.items;
        props.setItems([]);
        let oldItem = newArr[oldIndex];
        newArr.splice(oldIndex, 1);
        newArr.splice(newIndex, 0, oldItem);
        props.setItems(newArr);
    };

    return (
        <div className='border-radius-four border-grey listContainer'>
            <SortableContainer onSortEnd={onSortEnd}
                onSortStart={(data) => {
                    const elements = document.getElementsByClassName('controlsList');;
                    for (let i = 0; i < elements.length; i++) elements[i].style.opacity = 0;
                }}
                useDragHandle>
                {props.items.map((value, index) => (
                    <SortableItem key={`item-${value}`} index={index} value={value} />
                ))}
            </SortableContainer>

        </div>
    )
}
