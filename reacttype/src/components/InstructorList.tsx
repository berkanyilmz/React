import React from 'react';

type instructorsListNameType = {
    instructorsListName : {
        firstName : string;
        lastName : string;
    }[]
};

const InstructorList = (props: instructorsListNameType) => {
    return (
        <div>
            {
                props.instructorsListName.map(item => {
                    return (
                        <h3 key={item.firstName}>{item.firstName} {item.lastName}</h3>
                    )
                })
            }
        </div>
    );
};

export default InstructorList;