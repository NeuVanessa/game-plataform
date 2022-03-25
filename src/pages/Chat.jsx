import React, { useState } from "react";
import styled from "styled-components";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  const uri = "https://data.cometchat.com/assets/images/avatars/ironman.png";
  const messages = [
    {
      text: "Hello  asddasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasas",
      id: "1",
      sender: {
        name: "Ironman",
        uid: "user1",
        avatar: "https://data.cometchat.com/assets/images/avatars/ironman.png",
      },
    },
    {
      text: "Hi Mr. Stark",
      id: "2",
      sender: {
        name: "Spiderman",
        uid: "user2",
        avatar:
          "https://data.cometchat.com/assets/images/avatars/spiderman.png",
      },
    },
    {
      text: "Hello",
      id: "3",
      sender: {
        name: "Ironman",
        uid: "user1",
        avatar: "https://data.cometchat.com/assets/images/avatars/ironman.png",
      },
    },
    {
      text: "Hello",
      id: "3",
      sender: {
        name: "Ironman",
        uid: "user1",
        avatar: "https://data.cometchat.com/assets/images/avatars/ironman.png",
      },
    },
    {
      text: "Hello",
      id: "3",
      sender: {
        name: "Ironman",
        uid: "user1",
        avatar: "https://data.cometchat.com/assets/images/avatars/ironman.png",
      },
    },
    {
      text: "Hello",
      id: "3",
      sender: {
        name: "Ironman",
        uid: "user1",
        avatar: "https://data.cometchat.com/assets/images/avatars/ironman.png",
      },
    },
    {
      text: "Hello",
      id: "3",
      sender: {
        name: "Ironman",
        uid: "user1",
        avatar: "https://data.cometchat.com/assets/images/avatars/ironman.png",
      },
    },
    {
      text: "Hello",
      id: "3",
      sender: {
        name: "Ironman",
        uid: "user1",
        avatar: "https://data.cometchat.com/assets/images/avatars/ironman.png",
      },
    },
  ];

  // const user = {
  //   uid: "user1",
  // };
  // useState({ messages: messages, user: user });

  const style = {
    height: isOpen ? "190px" : 0,
    transition: "3s",
    background: "black",
  };
  return (
    <Container>
      <ChatBox>
        <MessagePanel>
          <Header>
            {/* <Close onClick={() => setIsOpen(!isOpen)}>fECHAR</Close> */}

            <Avatar src={uri} />
            <Title>Chat Online</Title>
          </Header>
          <Notice>
            Chat em desenvolvimento {"\n"} versão beta novidades a caminho.
          </Notice>
          <ChatContainer>
            {messages.map((message) => {
              return (
                <MessageList key={message.id}>
                  <AvatarMessage src={message.sender.avatar} />
                  <div>
                    <ChatName>{message.sender.name}</ChatName>
                    <div>
                      {" "}
                      <ChatMessage>{message.text}</ChatMessage>{" "}
                    </div>
                  </div>
                </MessageList>
              );
            })}
          </ChatContainer>
        </MessagePanel>
        <div>
          <input
            style={{
              width: "78%",
              height: 50,
              color: "#666",
              border: "none",
            }}
            type="text"
            placeholder="Escreva uma mensagem ..."
            //autofocus="true"
          />
          <button
            style={{
              position: "absolute",
              width: 62,
              height: 52,
              fontSize: 15,
              background: "#091322",
              color: "white",
              border: "none",
            }}
          >
            Enviar
          </button>
        </div>
      </ChatBox>

      {/* CODIGO ABAIXO COMENTADO TESTANDO O TOOGLE AINDA CODIGO FICA DENTRO DO CONTAINER */}
      {/* <ChatBox>
        <MessagePanel>
          <Header>
            <Close onClick={()=> setIsOpen(!isOpen)} >fECHAR</Close>

            <Avatar></Avatar>
            <Title>Mensagem</Title>
          </Header>
        <Notice>
            Chat em desenvolvimento {"\n"} versão beta novidades a caminho.
          </Notice> 
          <ChatContainer>
            {messages.map((message) => {
              return (
                <MessageList key={message.id}>
                  <AvatarMessage src={message.sender.avatar} />
                  <div>
                    <ChatName>{message.sender.name}</ChatName>
                    <div>
                      {" "}
                      <ChatMessage>{message.text}</ChatMessage>{" "}
                    </div>
                  </div>
                </MessageList>
              );
            })}
          </ChatContainer>
        </MessagePanel>
        <div>
          <form>
            <input style={{width:'78%',height:50,color:'#666',border:'none'}}
              type="text"
              placeholder="Escreva uma mensagem ..."
              autofocus="true"
              
            />
            <button style={{width:48,height:45,marginLeft:5,borderRadius:50,fontSize:10,border:'none'}}>Enviar</button>
          </form>
        </div>
      </ChatBox> */}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  height: 400px;
  right: 5%;
  width: 300px;
  background: transparent;
`;
const ChatContainer = styled.div`
  overflow: scroll;
  background: #091322;
  /* Scrolling no */
  overflow-x: hidden;
  height: 100%;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;
const ChatBox = styled.div`
  margin: 0 0 0 0;
  position: relative;
  height: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
`;

const MessagePanel = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 0;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  box-flex: 1;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-box-orient: vertical;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: hidden;
`;

const MessageText = styled.div`
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  position: relative;
`;

const Form = styled.form`
  padding: 10px;
  position: relative;
  max-width: 98%;
  //   width: 95%;
  margin: 0 auto;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -o-box-orient: horizontal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  color: #232529;
  background-color: #f0f2f2;
  border-top: #dce0e0 solid 1px;
`;

const Typing = styled.div`
  position: relative;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -o-box-flex: 1;
  -ms-box-flex: 1;
  box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  margin-right: 4px;
`;
const Header = styled.div`
padding: 8px 8px 8px 8px;
background-color: #f0f2f2;
border-top-left-radius:   15px 20px;
border-top-right-radius:  15px 20px;
border-bottom: #dce0e0 solid 1px;
min-height: 30px;
-webkit-flex-shrink: 0;
flex-shrink: 0;
position: relative;
-webkit-flex-shrink: 0;
flex-shrink: 0;
}
`;

const Notice = styled.div`
  border-bottom: #dce0e0 solid 1px;
  font-size: 0.7rem;
  line-height: 1.1rem;
  padding: 8px;
  text-align: center;
  //background-color: rgba(255,255,0,0.125);
  background-color: white;
`;

const MessageList = styled.div`
  display: flex;
  //   padding: 15px 20px;
  align-items: center;
  flex-direction: ${(props) => (props.row ? "row-reverse" : "row")};
`;

const Close = styled.div`
  float: right;
  clear: none;
  margin-right: cal(-0.33em - 10px);
  width: 44px;
  height: 44px;
  box-sizing: content-box;
  padding: 0.33em;
  margin: -0.33em;
  background: red;
  outline: none;
  text-align: center;
  padding: 0.1em 0.5em 0 0.5em;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  padding: 0 25px;
  border: 0;
  display: inline-block;
  font-size: 0.9em;
  -webkit-transition: all 0.125s ease-in-out 0s;
  -moz-transition: all 0.125s ease-in-out 0s;
  -o-transition: all 0.125s ease-in-out 0s;
  -ms-transition: all 0.125s ease-in-out 0s;
  transition: all 0.125s ease-in-out 0s;
  border-radius: 3px;
  cursor: pointer;
`;

const Avatar = styled.img`
  margin-right: 10px;
  float: left;
  margin-right: 10px;
  border-width: 2px;
  border-color: #091322;
  border-radius: 50%;
  overflow: hidden;
  background-color: transparent;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-style: solid;
  -webkit-box-shadow: 0 1px 1px rgb(136 153 166 / 15%);
  box-shadow: 0 1px 1px rgb(136 153 166 / 15%);
  position: relative;
  width: 44px;
  height: 44px;
`;

const AvatarMessage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const ChatName = styled.div`
  border-radius: 8px;
  font-size: 16px;
  position: relative;
  color: white;
  margin-top: 20px;
`;

const ChatMessage = styled.div`
  font-size: 12px;
  color: #999;
  word-break: break-all;
`;

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  font-weight: 700;
  padding-top: 13px;
`;
