import { redirect } from 'next/navigation'

// /services has moved to /solutions
export default function ServicesPage() {
  redirect('/solutions')
}
