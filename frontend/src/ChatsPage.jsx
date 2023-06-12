import React from 'react'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) =>{
  const chatprops = useMultiChatLogic(
    'd1f467cb-6d29-4fcd-8576-3e7e9ad02a71', 
    props.user.username, props.user.secret);
  return (
    <div style={{height:'100vh'}}>
      <MultiChatSocket {...chatprops}/>
      <MultiChatWindow {...chatprops} style={{height: '100%'}}/>
    </div>
  )
}
export default ChatsPage;