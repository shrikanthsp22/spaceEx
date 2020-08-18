import styled from "styled-components";

export const MainWrapper = styled.div`
  display: block;
  padding: 20px;
  background-color: rgb(228 230 232);
`;


export const HeaderComponent = styled.h2``;

export const ParentWrapper = styled.div`
width: 100%;
display: grid;
grid-template-columns: 15% 80%;
@media (max-width: 925px) {
  grid-template-columns: auto;
}
`;

export const FilterContainer = styled.div`
display: inline-block;
width:100%;
height:fit-content;
background-color: white;
border-radius: 3px;
@media (max-width: 1080px) {
  margin-bottom: 25px;
}
`;

export const FilterBlock = styled.div`
display: grid;
grid-template-columns: auto auto;
`;

export const Buttton = styled.span`
padding: 3px;
background-color: #aed393;
border-radius: 2px;
margin: 5px;
text-align:center;
cursor: pointer;
width: 50%;
margin:5px auto;
`;

export const CardContainer = styled.div`
display: inline-block;

`;


export const Card = styled.div`
  display: inline-block;
  padding: 10px;
  width: 20%;
  margin:0 auto;
  margin: 0px 10px 10px 10px;
  min-height: 300px;
  background-color:white;
  border-radius: 3px;
  @media (max-width: 1080px) {
    width: 25%;
    }
  @media (max-width: 768px) {
    width: 40%;
    }
    @media (max-width: 550px) {
      width: 80%;
      }
`;

export const LoaderComponent = styled.div`
width: 100%;
height: 100%;
text-align:center;
position: absolute;
top: 45%;
`;

export const SubHeaders = styled.div`
width:60%; 
margin : 10px auto;
margin-top:0;
text-align: center;
border-bottom: 2px solid #e4e6e8;

`

export const Filter = styled.p`
margin: 0;
padding: 10px;
font-weight: bold;
`;
export const Footer = styled.footer`
background-color: #e4e6e8;
text-align:center;
position: relative;
bottom: 0;
`;

export const Notification = styled.h3`
background-color:  #aed393;
border-radius: 3px;
width:50%;
margin: auto;
padding: 15px;
border: 1px solid #5e8d3c;
text-align:center;
`;