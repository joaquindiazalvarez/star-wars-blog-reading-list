import React , { useContext, useState, useEffect}from "react"
import { Context } from "../store/appContext"
export function PageSelector(props){
    const {store, actions} = useContext(Context);
    for(let i = 0; i < 4; i++){
        if(props.house === store.houseArray[i]){
            var max = 8;
            var houseObtained = i;
            var scrollLeft = actions[store.houseArray[i]].scrollLeft;
            var scrollRight = actions[store.houseArray[i]].scrollRight;  
        }
    }
    /*
    if(props.house === "g"){
        var max = 8;
        house = gpage;
        var scrollLeft = actions.scrollLeftGryffindor
        var scrollRight = actions.scrollRightGryffindor
    }
    else if(props.house === "h"){
        var max = 8;
        house = hpage;
        var scrollLeft = actions.scrollLeftHufflepuff
        var scrollRight = actions.scrollRightHufflepuff
    }
    else if(props.house === "r"){
        var max = 8;
        house = rpage;
        var scrollLeft = actions.scrollLeftRavenclaw
        var scrollRight = actions.scrollRightRavenclaw
    }
    else if(props.house === "h"){
        var max = 8;
        house = spage;
        var scrollLeft = actions.scrollLeftSlytherin
        var scrollRight = actions.scrollRightSlytherin
    }*/
    return(
    <div>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={store.page[houseObtained]<= 1 ? ("page-item disabled", console.log(houseObtained)) : "page-item"} onClick={scrollLeft}>
                    <a className="page-link">Previous</a>
                </li>
                <li className="page-item" onClick={scrollRight}>
                    <a className="page-link">Next</a>
                </li>
            </ul>
        </nav>
    </div>
    )
    
}