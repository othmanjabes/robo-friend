import React from "react";

const Card = ({name, id, email}) =>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma1 grow bw2 shadow-5">
            <img alt="photo" src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;