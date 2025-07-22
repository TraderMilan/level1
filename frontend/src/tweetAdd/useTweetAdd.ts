import {useState} from "react";
import {useTweetStore} from "../store/useTweetStore.ts";

export function useTweetAdd() {
    const [newTweet, setNewTweet] = useState<string>('');
    const addTweet = useTweetStore((state) => state.addTweet)


    async function handleNewTweet() {
        if (newTweet.trim().length === 0) return

        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Not authenticated');

            const res = await fetch('http://localhost:3000/tweets', {
                method: 'POST',
                headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`},
                body: JSON.stringify({content: newTweet}),
            })

            if (!res.ok) throw new Error("Error while posting tweets")

            const tweet = await res.json()
            addTweet(tweet)

            setNewTweet('')


        } catch (error) {
            console.error(error)
        }


    }


    return {newTweet, setNewTweet, handleNewTweet};

}