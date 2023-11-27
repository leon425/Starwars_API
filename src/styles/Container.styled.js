import styled from 'styled-components';

export const Container = styled.div` 
    font-family: Roboto;

    h1{
        font-size: 20px;
        text-align: center;
    }

    h2 {
       font-size: 15px;
    }

    .all{
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid black;
        padding: 50px;
        max-width: 500px;
        background: white;
        margin-top: 100px;
        margin-left: 150px;
    }

    .header{
        margin:50px;
        font-size:25px;
    }

    .home{
        text-align: center;
        margin: 50px;
        font-size: 30px;
    }

`
//sytled.div is the HTML tag
//could be anything. could be sytled.span, .section, .img, .a