import {useEffect} from 'react'

import {TweetAdd} from "../tweetAdd/TweetAdd.tsx";
import {TweetList} from "../tweetList/TweetList.tsx";
import {useTweetStore} from "../store/useTweetStore.ts";
import { API_URL } from "../lib/api";

export function MainPage() {
    const setTweets = useTweetStore(state => state.setTweets)


    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) throw new Error('Not authenticated');

                const response = await fetch(`${API_URL}/tweets`, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`},
                });
                if (!response.ok) throw new Error('Failed to fetch tweets');

                const data = await response.json()
                setTweets(data);
            } catch (error) {
                console.error("Error while loading tweets", error);
            }
        }

        fetchTweets();
    }, [setTweets]);


    return (
        <>
            <h2>Twitter</h2>
            <TweetAdd/>
            <TweetList/>
        </>
    )

}