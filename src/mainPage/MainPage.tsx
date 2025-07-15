import {useState, useEffect} from 'react'
import {TweetAdd} from "../tweetAdd/TweetAdd.tsx";
import {useTweetAdd} from "../tweetAdd/useTweetAdd.ts";
import {TweetList} from "../tweetList/TweetList.tsx";
import {useTweetList} from "../tweetList/useTweetList.ts";

export interface Tweet {
    id: number;
    content: string;
}

export function MainPage() {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const {newTweet, setNewTweet, handleNewTweet} = useTweetAdd(setTweets);
    const {handleDelete} = useTweetList(tweets, setTweets)


    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const response = await fetch('http://localhost:3000/tweet');
                const data = await response.json()
                setTweets(data);
            } catch (error) {
                console.error("Error while loading tweets",error);
            }
        }

        fetchTweets();
    }, []);




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