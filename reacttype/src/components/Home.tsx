import React from 'react';

type DataComing = {
    name: string;
};

function Home(props: DataComing) {
    return (
        <div>Selam {props.name}</div>
    );
}

export default Home;
