import React from "react";
import {
  Avatar,
  ProfileConteiner,
  Name,
  UserContact,
  Stats,
  Item,
  Label,
  Quantity,
} from "./Profile.styled";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileConteiner>
      <div className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>
        <UserContact>{tag}</UserContact>
        <UserContact>{location}</UserContact>
      </div>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Stats>
    </ProfileConteiner>
  );
}
