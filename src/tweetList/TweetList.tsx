import type {Tweet} from '../mainPage/MainPage.tsx'
import './TweetList.css'

type TweetsProps = {
    tweets: Tweet[]
    handleDelete: (id: number) => void
}

export function TweetList({tweets, handleDelete}: TweetsProps  ){


    return(
        <ul className={"tweets"}>
            {tweets.map(tweet => <li key={tweet.id}>
                {tweet.content}
                <div className={"remove"} onClick={() =>handleDelete(tweet.id)}>x</div>
            </li>)}
        </ul>
    )
}