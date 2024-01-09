"use client";

import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { MessageSquarePlusIcon } from 'lucide-react';

function CreateChatButton() {
    const router = useRouter();
    const createNewChat = async() => {
        router.push('/chat/new')
    }
  return (
    <Button onClick={createNewChat} variant={"ghost"}>
        <MessageSquarePlusIcon/>
    </Button>
  )
}

export default CreateChatButton