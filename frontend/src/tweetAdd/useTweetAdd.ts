import {useState} from "react";
import {useTweetStore} from "../store/useTweetStore.ts";
import {API_URL} from "../lib/api";

export function useTweetAdd() {
    const [newTweet, setNewTweet] = useState<string>('');
    const addTweet = useTweetStore((state) => state.addTweet)


    async function handleNewTweet() {
        if (newTweet.trim().length === 0) return

        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Not authenticated');

            const res = await fetch(`${API_URL}/tweets`, {
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