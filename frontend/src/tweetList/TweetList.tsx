import './TweetList.css'
import {useTweetList} from "./useTweetList.ts";


export function TweetList(){
    const { tweets, handleDelete } = useTweetList()

    return(
        <ul className="tweets">
            {tweets.map(tweet => <li className="tweet-item" key={tweet._id}>
                    {tweet.content}
                    <div className={"remove"} onClick={() => handleDelete(tweet._id)}>x</div>
                </li>
            )}
        </ul>
    )
}