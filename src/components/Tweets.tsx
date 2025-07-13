import type {Tweet} from '../App.tsx'

type TweetsProps = {
    tweets: Tweet[]
    handleDelete: (id: number) => void
}

export function PrintTweets({tweets, handleDelete}: TweetsProps  ){


    return(
        <ul className={"tweets"}>
            {tweets.map(tweet => <li key={tweet.id}>
                {tweet.title}
                <div className={"remove"} onClick={() =>handleDelete(tweet.id)}>x</div>
            </li>)}
        </ul>
    )
}