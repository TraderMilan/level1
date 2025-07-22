import {type StateCreator, create } from 'zustand';

type Tweet = {
    _id: string;
    content: string;
    createdAt: string;
}
type Store = {
    tweets: Tweet[];
    setTweets: (tweets: Tweet[]) => void;
    addTweet: (tweet: Tweet) => void;
    deleteTweet: (id: string) => void;
}

export const useTweetStore = create<Store>((set: Parameters<StateCreator<Store>>[0]) => ({
    tweets: [],
    setTweets: (tweets: Tweet[]) => set({tweets}),
    addTweet: (tweet: Tweet) => set(( state) => ({tweets: [...state.tweets, tweet]})),
    deleteTweet: (id: string) => set((state) => ({tweets: state.tweets.filter(t => t._id !== id)})),
}))