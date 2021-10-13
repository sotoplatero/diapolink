import {TwitterApi} from 'twitter-api-v2';

const tc = new TwitterApi(import.meta.env.VITE_TWITTER_BEARER_TOKEN);

export {tc}