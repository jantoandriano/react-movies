import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white: #fff;
        --lightGray: #eee;
        --mediumGray: #353535;
        --darkGray: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMedium: 1.1rem;
        --fontSmall: 0.9rem;
        --background_1: linear-gradient(to bottom, #141b29, #0c111b 300px);
        --background_2: #121926;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    body{
        background-color: var(--background_2);
        h1{
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);  
        }
        h3{
            font-size: 1.1rem;
            font-weight: 600;
        }
        p{
            font-size: 1rem;
            color: var(--white);
        }
    }
`;
