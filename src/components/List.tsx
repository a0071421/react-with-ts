import React from "react";
import { IState as IProps } from "src/App"

const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map(({ name, url, age, note }) => {
            return (
                <li className="List" key={Math.random().toString(16)}>
                    <div className="List-header">
                        <img className="List-img" src={url} alt="" />
                        <h2>{name}</h2>
                    </div>
                    <p>{age} years old</p>
                    <p className="List-note">{note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
};



export default List;