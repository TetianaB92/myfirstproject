import React from "react";
import { FriendConteiner, FriendItem, Status } from "./Friendlist.styled";

export default function Friendlist({ friends }) {
  return (
    <FriendConteiner>
      {friends.map((friend) => (
        <FriendItem key={friend.id}> 
          <Status status={friend.isOnline}>{friend.isOnline}</Status>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </FriendItem>
      ))}
    </FriendConteiner>
  );
}
