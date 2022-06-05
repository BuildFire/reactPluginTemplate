import React, { useState, useEffect } from "react";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import "./listStyle.less";
import dummyObjects from "../../../assets/dummyData";


export default function SortablelistComponent(props) {

  const [items, setItems] = useState(dummyObjects);
  const [layoutsAdded, setLayoutsAdded] = useState(dummyObjects);

  useEffect(() => {
    // desendDate"asenedDate"asenedTitle"desendTitle
    let newItems = layoutsAdded;
    setItems([]);
    console.log(props.sortType);
    if (props.sortType == "Newest Entry") {
      newItems.sort(function (a, b) {
        if (a.date > b.date) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (props.sortType == "Latest Entry") {
      newItems.sort(function (a, b) {
        if (a.date > b.date) {
          return -1;
        } else {
          return 1;
        }
      });
    } else if (props.sortType == "Title A - Z") {
      newItems.sort(function (a, b) {
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (props.sortType == "Title Z - A") {
      newItems.sort(function (a, b) {
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    setItems(newItems);
  }, [props]);


  const DragHandle = sortableHandle(() => (
    <i
      style={{ cursor: "pointer", fontSize: 24, color: "#999" }}
      className="control-List-Icon icon icon-menu"
    />
  ));
  const SortableContainer = sortableContainer(({ children }) => (
    <div>{children}</div>
  ));
  let SortableItem;
  let index=1;
  if (props.listFor == "SponsorShip") {
    SortableItem = sortableElement(({ value }) => (
      <div className="d-item" style={{ justifyContent: "space-between" }}>
        <div
          className="listedItem"
          style={{ alignItems: "center", display: "flex" }}
        >
          <div className="pull-left cursor-grab ui-sortable-handle ">
            {props.sortType == "Manually" && <DragHandle />}
          </div>
          <div className="layout-Name-Container">
            <p className="layout-Name"> Layout {value.layout} - Title </p>
            <p> Layout {value.layout} - Info </p>
          </div>
          <div className="controlsList">
            <i
              style={{ cursor: "pointer", fontSize: 24, color: "#999" }}
              className="control-List-Icon icon icon-pencil3"
            />
            <i
              style={{ cursor: "pointer", fontSize: 24, color: "#999" }}
              className="control-List-Icon icon icon-cross"
            />
          </div>
        </div>
      </div>
    ));
  } else if (props.listFor == "Home") {
    SortableItem = sortableElement(({ value }) => (
      <div className="d-item" style={{ justifyContent: "space-between" }}>
        <div
          className="listedItem"
          style={{ alignItems: "center", display: "flex" }}
        >
          <div className="pull-left cursor-grab ui-sortable-handle ">
            {props.sortType == "Manually" && <DragHandle />}
          </div>
          <div className="layout-Name-Container">
            <p className="layout-Name"> SponsorShip Title - {value.layout} </p>
            <p> SponsorShip </p>
          </div>
          <div className="controlsList">
          
            <span class="button-switch">
              <input
                className="checkBox"
                id={`show${++index}`}
                type="checkbox"
                value="true"
              />
              <label for={`show${index}`} class="label-success"></label>
            </span>

            <i
              style={{ cursor: "pointer", fontSize: 24, color: "#999" }}
              className="control-List-Icon icon icon-graph"
            />
            <i
              style={{ cursor: "pointer", fontSize: 24, color: "#999" }}
              className="control-List-Icon icon icon-pencil3"
            />
            <i
              style={{ cursor: "pointer", fontSize: 24, color: "#999" }}
              className="control-List-Icon icon icon-cross"
            />
          </div>
          
        </div>
       
      </div>
   
    ));

  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let newArr = items;
    setItems([]);
    let oldItem = newArr[oldIndex];
    newArr.splice(oldIndex, 1);
    newArr.splice(newIndex, 0, oldItem);
    setItems(newArr);
  };

  return (
    <div className="border-radius-four border-grey listContainer">
      <SortableContainer
        onSortEnd={onSortEnd}
        onSortStart={(data) => {
          const elements = document.getElementsByClassName("controlsList");
          for (let i = 0; i < elements.length; i++)
            elements[i].style.opacity = 0;
        }}
        useDragHandle
      >
        {console.log("-----> in return ", items)}
        {
        items.map((value, index) => {
          console.log("+value ->", value);
          return(
          <SortableItem key={`item-${index}`} index={index} value={value} />
        )})
      }
      </SortableContainer>
    </div>
  );
}
