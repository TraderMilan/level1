import {useState} from "react";
import type {Tweet} from '../pages/MainPage.tsx'

export function useTweetAdd(
    setTweets: (tweets: Tweet[]) => void,
) {
    const [newTweet, setNewTweet] = useState<string>('');


    async function handleNewTweet() {
        if (newTweet.trim().length === 0) return

        try {
            const res = await fetch('http://localhost:3000/tweet', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({content: newTweet}),
            })

            if (!res.ok) throw new Error("Error while posting tweet")

            const getRes = await fetch('http://localhost:3000/tweet')
            const data = await getRes.json()

            setTweets(data)
            setNewTweet('')


        } catch (error) {
            console.error(error)
        }


    }


    return {newTweet, setNewTweet, handleNewTweet};

}