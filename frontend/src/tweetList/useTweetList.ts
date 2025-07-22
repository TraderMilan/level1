import {useTweetStore} from "../store/useTweetStore.ts";


export function useTweetList() {

    const tweets = useTweetStore((state) => state.tweets)
    const deleteTweet = useTweetStore((state) => state.deleteTweet)

    async function handleDelete(id: string){

        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('Not authenticated');
            const res = await fetch(`http://localhost:3000/tweets/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            });

            if (!res.ok) throw new Error("Error while deleting tweets")
            deleteTweet(id)


        } catch (error) {
            console.error(error)
        }

    }

    return {tweets, handleDelete}
}