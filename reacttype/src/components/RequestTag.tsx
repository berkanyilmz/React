import React from 'react';

type RequestProps = {
    status: 'loading' | 'success' | 'error';
};

function RequestTag(props: RequestProps) {
    return (
        <div>
            {props.status === 'loading' && <p>Loading...</p>}
            {props.status === 'success' && <p>Success</p>}
            {props.status === 'error' && <p>Error</p>}
        </div>
    );
}

export default RequestTag;