import React, {FC} from "react";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Navigation} from "./components/Navigation";
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));

const RemoteWrapper:FC<{children: React.ReactNode}> = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    {children}
  </div>
);

export const App = () => {

    return (
        <>
            <Header/>
            <Navigation/>
            <div style={{background: "rgba(43, 192, 219, 0.3)"}}>
                <h1>This is the Host!</h1>
                <h2>Remote App:</h2>
                <RemoteWrapper>
                    <RemoteApp/>
                </RemoteWrapper>
                <h2>Remote Button:</h2>
                <RemoteWrapper>
                    <RemoteButton/>
                </RemoteWrapper>
                <br/>
                <a href="http://localhost:4000">Link to Remote App</a>
            </div>
            <Footer/>
        </>
    )
}

export default App;
