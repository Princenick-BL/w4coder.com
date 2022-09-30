import Redis from 'ioredis'

const redis = process.env.NEXT_PUBLIC_APP_ENV ? new Redis(process.env.NEXT_PUBLIC_RESIS_URL) : null

export default {redis}