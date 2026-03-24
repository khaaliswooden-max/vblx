import { permanentRedirect } from 'next/navigation'

// /services has moved to /solutions
export default function ServicesPage() {
  permanentRedirect('/solutions')
}
