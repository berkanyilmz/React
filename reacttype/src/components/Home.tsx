import React from 'react';
import {DataComing} from "./propstypes";

function Home(props: DataComing) {
    return (
        <div>
            Selam {props.name}, Yaşınız : {props.age}
            {props.isUser ? <p>{'Kullanıcı'}</p> : <p>{'Kullanıcı Degil'}</p>}
        </div>
    );
}

export default Home;
