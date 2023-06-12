import React from 'react'
//import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) =>{
  // const chatprops = useMultiChatLogic(
  //   'd1f467cb-6d29-4fcd-8576-3e7e9ad02a71', 
  //   props.user.username, props.user.secret);
  return (
    <div style={{height:'100vh'}}>
      <PrettyChatWindow 
      projectId='d1f467cb-6d29-4fcd-8576-3e7e9ad02a71'
      username={props.user.username} 
      secret={props.user.secret}
      style={{height: '100%'}}
      />
    </div>
  )
}
export default ChatsPage;