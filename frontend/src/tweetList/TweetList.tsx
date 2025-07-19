import type {Tweet} from '../pages/MainPage.tsx'
import './TweetList.css'

type TweetsProps = {
    tweets: Tweet[]
    handleDelete: (id: number) => void
}

export function TweetList({tweets, handleDelete}: TweetsProps  ){


    return(
        <ul className={"tweets"}>
            {tweets.map(tweet => <li key={tweet._id}>
                    {tweet.content}
                    <div className={"remove"} onClick={() => handleDelete(tweet._id)}>x</div>
                </li>
            )}
        </ul>
    )
}