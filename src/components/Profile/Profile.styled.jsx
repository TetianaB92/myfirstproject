import styled from "@emotion/styled";

export const Avatar = styled.img`
  width: 100px;
  border: 2px solid black;
  border-radius: 50%;

  margin-right: auto;
  margin-left: auto;
  margin-bottom: 30px;
  margin-top: 30px;
  box-shadow: #444343 0px 0px 5px;
`;
export const ProfileConteiner = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  border: 2px solid black;
  border-radius: 7px;
  box-shadow: black 5px 3px 5px;
  transition: all 300ms;
background-color: #dfd7d7;
  width: 250px;

  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;

  &:hover {
    box-shadow: rgb(132 132 132) 10px 5px 5px;
  }
`;
export const Name = styled.p`
  text-align: center;
  font-weight: bold;
  margin-bottom: 30px;
`;
export const UserContact = styled.p`
  text-align: center;
  font-weight: 400px;
  color: rgba(0, 0, 0, 0.6);
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  border-top: 2px solid black;
  border-radius: 5px;
  background-color: #bdb8b8;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px 5px;
  /* &:nth-child(2) {
    margin: 0 10px;
  } */
`;
export const Label = styled.span``;
export const Quantity = styled.span``;
