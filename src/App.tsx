import {PrintForm} from "./components/Form.tsx";
import {useState, useEffect} from "react";
import {PrintTweets} from './components/Tweets.tsx'

export interface Tweet  {
    id: number;
    title: string;
}

function App() {
    const [newTweet, setNewTweet] = useState<string>('');
    const [tweets, setTweets] = useState<Tweet[]>(() => {
        const saved = localStorage.getItem("tweets")
        return saved ? JSON.parse(saved) : []
    });


    useEffect(() => {
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }, [tweets]);

    function generateId(): number {
        if (tweets.length === 0) return 1
        return Math.max(...tweets.map(t => t.id)) + 1
    }

    function handleNewTweet(){
        if (newTweet.trim().length === 0) return
        setTweets([...tweets, {id: generateId(), title: newTweet}])
        setNewTweet('')
    }

    function handleDelete(id: number){
        setTweets([...tweets.filter(t => t.id !== id)])
    }


    return (
        <>
            <h2>Twitter</h2>
            <PrintForm
                newTweet={newTweet}
                setNewTweet={setNewTweet}
                handleNewTweet={handleNewTweet}
            />
            <PrintTweets
                tweets={tweets}
                handleDelete={handleDelete}
            />

        </>
    )
}

export default App
