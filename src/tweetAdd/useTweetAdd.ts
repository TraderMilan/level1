import {useState} from "react";
import type {Tweet} from '../mainPage/MainPage.tsx'

export function useTweetAdd(
    setTweets: (tweets: Tweet[]) => void,
    tweets: Tweet[]
) {
    const [newTweet, setNewTweet] = useState<string>('');

    function generateId(): number {
        if (tweets.length === 0) return 1
        return Math.max(...tweets.map(t => t.id)) + 1
    }

    function handleNewTweet() {
        if (newTweet.trim().length === 0) return
        setTweets([...tweets, {id: generateId(), title: newTweet}])
        setNewTweet('')
    }


    return {newTweet, setNewTweet, handleNewTweet};

}