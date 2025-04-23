import 'dotenv/config'

const PORT = process.env.PORT ?? 5000
const WHITELIST_DOMAINS = process.env.WHITELIST_DOMAINS


export  { PORT , WHITELIST_DOMAINS }