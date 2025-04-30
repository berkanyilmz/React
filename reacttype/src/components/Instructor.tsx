import React from "react";
import {instructorProps} from "./propstypes";

function Instructor(props: instructorProps) {
    return (
        <div>
            {props.instructorsNameLastName.firstName}
            {' '}
            {props.instructorsNameLastName.lastName}
        </div>
    )
}

export default Instructor;