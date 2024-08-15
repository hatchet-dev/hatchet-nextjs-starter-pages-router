import { hatchet, workflow, workflow2 } from '@/lib/workflow'

const secret = process.env.HATCHET_WEBHOOK_SECRET || 'secret'

const webhooks = hatchet.webhooks([workflow, workflow2])

export default webhooks.nextJSPagesHandler({ secret })
