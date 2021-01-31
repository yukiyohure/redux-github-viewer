import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/organisms/Header";
import { Route, Switch } from "react-router-dom";
import IssuePage from "./pages/Issue";
import PullRequest from "./pages/PullRequest";
import Index from "./pages/Index.js";
import styled from "styled-components";
import Profile from "./containers/Profile";
import ModalWrapper from "./containers/Modal";

const ContentWrapper = styled.div`
  padding: 2rem 1rem;
  margin: 0 auto;
  max-width: 896px;
`;

function App() {
  return (
    <div>
      <ModalWrapper />
      <GlobalStyle />
      <Header />
      <ContentWrapper>
        <Switch>
          <Route path="/issue" component={IssuePage} />
          <Route path="/pull-request" component={PullRequest} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/" component={Index} />
          {/* pathの検索方法が前方置換なのでexactを宣言して完全一致にしてあげる */}
        </Switch>
      </ContentWrapper>
    </div>
  );
}

export default App;
