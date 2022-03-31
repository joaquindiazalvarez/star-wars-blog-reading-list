import React , { useContext, useState, useEffect}from "react"
import { Context } from "../store/appContext"
export function PageSelector(props){
    const {store, actions} = useContext(Context);
    for(let i = 0; i < 4; i++){
        if(props.house === store.houseArray[i]){
            var max = store.max[i];
            var houseObtained = i;
            var scrollLeft = actions[store.houseArray[i]].scrollLeft;
            var scrollRight = actions[store.houseArray[i]].scrollRight;  
        }
    }
    return(
    <div>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={store.page[houseObtained]<= 1 ? "page-item disabled" : "page-item"} onClick={scrollLeft}>
                    <a className="page-link">Previous</a>
                </li>
                <li className={store.page[houseObtained] >= max ? "page-item disabled" : "page-item"} onClick={scrollRight}>
                    <a className="page-link">Next</a>
                </li>
            </ul>
        </nav>
    </div>
    )
    
}