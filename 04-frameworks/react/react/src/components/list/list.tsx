import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "../../pages/organizations/list";

interface Props {
  items: MemberEntity[];
  title: string;
}

export const ListComponent: React.FC<Props> = ({ items, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {Array.isArray(items) &&
          items.map((item) => (
            <>
              <img src={item.avatar_url} />
              <span>{item.id}</span>
              <Link to={`/detail/${item.login}`}>{item.login}</Link>
            </>
          ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
