import React from 'react'
import Link from 'next/link'
import ProjectCard from './ProjectCard'
const ProjectsContainer = () => {
  return (
    <div>
      <div className="grid px-12 pt-10 gap-10 place-content-center md:pt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          <Link href="/projects/physicalApp">
            <ProjectCard
              src="/projects/oliveLogo.png"
              title="Senior Project"
              name="Physical Therapy Clinic Service Platform"
              courseName=""
            />
          </Link>
          <Link href="/projects/itsmFlashCard">
            <ProjectCard
              src="/projects/itsmFlashcard.png"
              title="In Course Project"
              name="ITSM Flashcard"
              courseName="IT Service Management Course"
            />
          </Link>
          <Link href="/projects/whisper">
            <ProjectCard
              src="/projects/whisperLogo.png"
              title="Milestone Project"
              name="Whisper"
              courseName="Adv. ISNE Technology Course"
            />
          </Link>
          <ProjectCard
            src="/projects/bearBrickLogo.png"
            title="In Course Project"
            name="BearBrick"
            courseName="Fundamental Database Course"
            gitHubLink="https://github.com/iionayne25/BearBrick"
          />
          <ProjectCard
            src="/projects/2dGame.png"
            title="In Course Project"
            name="2D Breakout"
            courseName="Object Oriented Programming Course"
            gitHubLink="https://github.com/iionayne25/2dBreakout"
          />
          <Link href="/projects/resultSummary">
          <ProjectCard
            src="/projects/result-summary-image.png"
            title="Self-Learning Project"
            name="Summary Results"
            courseName="Frontend Mentor Challenge"
          />
          </Link>
          <Link href="/projects/ageCalculator">
          <ProjectCard
            src="/projects/age-caculator-app-image.png"
            title="Self-Learning Project"
            name="Age Calculator App"
            courseName="Frontend Mentor Challenge"
          />
          </Link>
          <Link href="/projects/qrCode">
          <ProjectCard
            src="/projects/frontend-mentor-qr-code.png"
            title="Self-Learning Project"
            name="QR Code Component"
            courseName="Frontend Mentor Challenge"
          />
          </Link>
          <Link href="/projects/spaceToursismWebsite">
          <ProjectCard
            src="/projects/space-tourism-website-image.png"
            title="Self-Learning Project"
            name="Space Tourism Website"
            courseName="Frontend Mentor Challenge"
          />
          </Link>
          <Link href="/projects/productPreview">
          <ProjectCard
            src="/projects/product-preview-card.png"
            title="Self-Learning Project"
            name="Product Preview Card"
            courseName="Frontend Mentor Challenge"
          />
          </Link>
          <Link href="/projects/interactiveRating">
          <ProjectCard
            src="/projects/interactive-rating.png"
            title="Self-Learning Project"
            name="Interactive Rating"
            courseName="Frontend Mentor Challenge"
          />
          </Link>
         
        </div>
    </div>
  )
}

export default ProjectsContainer
