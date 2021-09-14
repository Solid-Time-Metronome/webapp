import styled from "styled-components";

  export const DisplayBeat = styled.div`
  border-radius: 50%;
  background: lightblue;
  display: block;
  text-align: center;
  height: 100px;
  width: 100px;
   margin: 40px 120px;
   padding:5px;
  font-size: ${props => (props.small ? "0" : "75px")};
`
