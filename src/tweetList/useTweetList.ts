import type {Tweet} from "../mainPage/MainPage.tsx";


export function useTweetList(
    tweets: Tweet[],
    setTweets: (tweets: Tweet[]) => void
) {


    function handleDelete(id: number){
        setTweets([...tweets.filter(t => t.id !== id)])
    }

    return {handleDelete}
}