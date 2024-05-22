import {Outlet} from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

function LayoutOutlet() {

    return (
        <ContainerLayoutOutlet>
            <ContainerHeader>
                <Header/>
            </ContainerHeader>

            <ContainerOutler>
                <Outlet/>
            </ContainerOutler>
        </ContainerLayoutOutlet>
    );
}

const ContainerLayoutOutlet = styled.div`
    width : 100%;
    height: auto;
    padding : 20px;

    display: flex;
    align-items: center;
    flex-direction: column;
`

const ContainerHeader = styled.div`
    width : 1000px;
    height : 80px;
`   

const ContainerOutler = styled.div`
    width : 1000px;
    min-height: 1000px;
`

export default LayoutOutlet;