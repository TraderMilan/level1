import type {Tweet} from "../pages/MainPage.tsx";


export function useTweetList(
    tweets: Tweet[],
    setTweets: (tweets: Tweet[]) => void
) {


    async function handleDelete(id: number){

        try {
            const res = await fetch(`http://localhost:3000/tweet/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error("Error while deleting tweet")
            setTweets([...tweets.filter(t => t._id !== id)])


        } catch (error) {
            console.error(error)
        }

    }

    return {handleDelete}
}