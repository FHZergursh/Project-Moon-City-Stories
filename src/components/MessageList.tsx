import React from 'react'
import type { Message } from '../types/Message'

type MessageListProps = { 
  messages: Message[]
}

const MessageList = ({messages} : MessageListProps) => {
  return (
    <div>MessageList</div>
  )
}

export default MessageList