import Hero from '../components/Home/Hero'
import ImpactStats from '../components/Home/ImpactStats'
import ResearchThemes from '../components/Home/ResearchThemes'
import FeaturedWork from '../components/Home/FeaturedWork'
import Timeline from '../components/Home/Timeline'
import TrustRecognition from '../components/Home/TrustRecognition'
import CTAStrip from '../components/Home/CTAStrip'
import Skills from '../components/Home/Skills'


export default function Home() {
  return (
    <>
      <Hero />
      <div className="separator" />
      <ImpactStats />
      <div className="separator" />
      <Skills></Skills>
      <div className="separator" />
      <Timeline />
      <div className="separator" />
      <ResearchThemes />
      <div className="separator" />
      <FeaturedWork />
      
      <div className="separator" />
      <TrustRecognition />
      <div className="separator" />
      <CTAStrip />
    </>
  )
}
