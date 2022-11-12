import styled from "@emotion/styled";

export const FriendConteiner = styled.ul`
  width: 230px;
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;

export const FriendItem = styled.li`
  border: 2px solid black;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin: 7px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.9) 0px 0px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background-color: #fff;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  background-color: ${props => (props.status ? 'green' : 'red')};
  border-radius: 50%;
`;
