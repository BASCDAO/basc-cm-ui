import styled from "styled-components";

const Container = styled("div")`
    width: 100vw;
    height: 75px;
    display: flex;
    justify-content: start;
    align-items: center;
`

const Logo = styled("a")`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width 350px;
    text-decoration: none;
`
const Basc = styled("img")`
    width: 50px;
    margin-left: 25px;
`
const Title = styled("h1")`
    color: white;
    margin-left: 15px;
    font-family: 'Galindo', cursive;
`

const Navbar = () => {
    return (
        <Container>
            <Logo href="https://daobasc.gitbook.io/basc-world-cup/">
                <Basc src="logo-white.svg" alt="basc-logo"/>
                <Title>World Cup</Title>
            </Logo>
        </Container>
    )
}

export default Navbar