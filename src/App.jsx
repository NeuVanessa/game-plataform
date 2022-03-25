//components
import Sidebar from "./components/design-system/Sidebar";
import Main from "./components/layout/Main";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

//assets
import logo from "./logo.svg";
import banner from "./assets/banner.jpg";
import Library from "./pages/Library";
import Friends from "./pages/Friends";
import Config from "./pages/Config";
import Gifts from "./pages/Gifts";
//libs
import styled from "styled-components";
//styles
import "./App.css";

function App() {
  const Profile = () => <h1> You are in Profile </h1>;

  return (
    // <Container>

    //     <Sidebar />
    //   <Main />
    // </Container>

    <BrowserRouter>
      <Container>
        <Sidebar />
        <div style={{ backgroundColor: "transparent", width: "100%" }}>
          <Switch>
            <Route path="/friends" component={Friends} />
            <Route path="/library" component={Library} />
            <Route path="/config" component={Config} />
            <Route path="/gifts" component={Gifts} />
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  display: flex;
  //background: #999;
  height: 100vh;
  background: url(${banner});
  background-size: 1455px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

const Home = styled.div`
  display: flex;
  height: 100vh;
  background: url(${banner});
  background-size: 1455px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;
