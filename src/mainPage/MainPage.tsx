import {useState, useEffect} from 'react'
import {TweetAdd} from "../tweetAdd/TweetAdd.tsx";
import {useTweetAdd} from "../tweetAdd/useTweetAdd.ts";
import {TweetList} from "../tweetList/TweetList.tsx";
import {useTweetList} from "../tweetList/useTweetList.ts";

export interface Tweet {
    id: number;
    title: string;
}

export function MainPage() {
    const [tweets, setTweets] = useState<Tweet[]>( () => {
            const stored = localStorage.getItem('tweets')
            return stored ? JSON.parse(stored) : []
        }
    );
    const {newTweet, setNewTweet, handleNewTweet} = useTweetAdd(setTweets, tweets);
    const {handleDelete} = useTweetList(tweets, setTweets)


    useEffect(() => {
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }, [tweets]);



    return (
        <>
            <h2>Twitter</h2>
            <TweetAdd
                newTweet={newTweet}
                setNewTweet={setNewTweet}
                handleNewTweet={handleNewTweet}
            />
            <TweetList
                tweets={tweets}
                handleDelete={handleDelete}
            />
        </>
    )

}