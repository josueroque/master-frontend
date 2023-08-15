import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "../../pages/organizations/organizations";
import { CharacterEntity } from "../../pages/rick-morty/rick-morty";

interface Props {
  items: MemberEntity[] | CharacterEntity;
  title: string;
  path: string;
}

export const ListComponent: React.FC<Props | any> = ({
  items,
  title,
  path,
}) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {Array.isArray(items) &&
          items.map((item) => (
            //TODO Add a key for rendered items
            <>
              <img src={item.avatar_url || item.image} />
              <span className="item-text">{item.id}</span>
              <Link
                to={`/detail/${item.login || item.id}`}
                state={{ previousPath: path }}
                className="item-text"
              >
                {item.login || item.name}
              </Link>
            </>
          ))}
      </div>
    </>
  );
};

export default ListComponent;
