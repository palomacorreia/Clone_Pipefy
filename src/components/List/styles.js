import styled from 'styled-components';


export const Container =styled.div`

 padding:0 15px;
 heigth:100%;
 flex:0 0 320px;
 opacity:${props=>props.done ? 0.6 :1};

//Toda div que antes dela tem uma div

    & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #ffa500;
      border: 0;
      cursor: pointer;
    }
  }

    ul {
      margin-top: 30px;
    }
   
`;