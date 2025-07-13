export function PrintForm({newTweet, setNewTweet, handleNewTweet}: {
    newTweet: string,
    setNewTweet: (newTweet: string) => void,
    handleNewTweet: () => void,
}){


    return (
        <div className='form'>
            <label htmlFor="tweet">Tweet</label>
            <input
                type="text"
                id="tweet"
                value={newTweet}
                onChange={(e)=>setNewTweet(e.target.value)}
            />
            <button onClick={handleNewTweet}>Post</button>
        </div>
    )
}