import React from "react";

export default function TicketItem({ticket, dispatch}) {
    const {id, title, description, priority} = ticket;
    const priorityClass = {
        1: "priority-low",
        2: "priority-medium",
        3: "priority-high"
    }

    return (
        <div className="ticket-item">
            <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>

            <h3>{title}</h3>
            <h3>{description}</h3>

            <button
                className={"button"}
                onClick={() => dispatch({type: "DELETE_TICKET", payload: {id}})}>
                Delete
            </button>

            <button
                disabled
                className={"button"}
                onClick={() => dispatch({type: "UPDATE_TICKET", payload: {id}})}>
                Edit
            </button>
        </div>
    );
}