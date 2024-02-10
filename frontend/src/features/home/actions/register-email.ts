'use server'

import registerEmailApi from '@/src/features/home/api/get-registrations'

export async function registerEmail(email: string) {
  return await registerEmailApi(email)
}
