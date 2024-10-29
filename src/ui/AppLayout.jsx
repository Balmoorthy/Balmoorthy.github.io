import styled from "styled-components"
import Header from "./Header"

const Container = styled.div`
    max-width: 120rem;
`


function AppLayout() {
    return (
        <div>
            <Header/>

            <Container>
                
            </Container>
        </div>
    )
}

export default AppLayout
