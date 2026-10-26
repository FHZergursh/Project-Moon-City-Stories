import React from 'react'
import type { Message } from '../types/Message'

type MessageListProps = { 
  messages: Message[]
}

const MessageList = ({messages} : MessageListProps) => {
  return (
    <div>
      <div className='mb-10'>Messaages below here</div>
      {messages.map((index) => (
        <div key={index.messageNumber}>
          <h1>{index.title}</h1>
          <h2>{index.content}</h2>
        </div>
      ))}



      

    </div>
  )
}

export default MessageList