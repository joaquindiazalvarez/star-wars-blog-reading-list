import React , { useContext }from "react"
import { Context } from "../store/appContext"
export function PageSelector(){
    const {store, actions} = useContext(Context);
    return(
    <div>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item" onClick={actions.scrollLeftGryffindor}>
                    <a className="page-link">Previous</a>
                </li>
                <li className="page-item" onClick={actions.scrollRightGryffindor}>
                    <a className="page-link">Next</a>
                </li>
            </ul>
        </nav>
    </div>
    )
    
}