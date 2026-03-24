import Hero from '@/components/sections/Hero'
import MissionBlock from '@/components/sections/MissionBlock'
import StatsStrip from '@/components/sections/StatsStrip'
import CapabilityPillars from '@/components/sections/CapabilityPillars'
import PastPerformancePreview from '@/components/sections/PastPerformancePreview'
import HomeCTABlock from '@/components/sections/HomeCTABlock'

export default function Home() {
  return (
    <>
      <Hero />
      <MissionBlock />
      <StatsStrip />
      <CapabilityPillars />
      <PastPerformancePreview />
      <HomeCTABlock />
    </>
  )
}
