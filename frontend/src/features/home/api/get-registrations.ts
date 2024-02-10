import { getXataClient } from '@/src/xata'

const xata = getXataClient()

export default async function registerEmailApi(email: string) {
  const result = await xata.db.registrations.create({ email: email })

  console.log(result.id)
  return result.id
}
