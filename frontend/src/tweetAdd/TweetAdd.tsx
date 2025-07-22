import {useTweetAdd} from "./useTweetAdd.ts";


export function TweetAdd() {
    const { newTweet, setNewTweet, handleNewTweet } = useTweetAdd()

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleNewTweet()
        }}>
            <label htmlFor="tweet">Tweet</label>
            <input
                type="text"
                id="tweet"
                value={newTweet}
                onChange={(e) => setNewTweet(e.target.value)}
            />
            <button type="submit">Post</button>
        </form>
    )
}