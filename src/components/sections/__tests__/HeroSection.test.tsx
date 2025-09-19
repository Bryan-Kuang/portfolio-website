import { render, screen } from '@testing-library/react'
import { HeroSection } from '../HeroSection'

describe('HeroSection', () => {
  it('renders the hero section with Bryan Kuang name', () => {
    render(<HeroSection />)

    expect(screen.getByText('Bryan Kuang')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<HeroSection />)

    expect(
      screen.getByText(/Passionate about creating innovative solutions/)
    ).toBeInTheDocument()
  })

  it('renders call-to-action buttons', () => {
    render(<HeroSection />)

    expect(screen.getByText('View Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact Me')).toBeInTheDocument()
  })

  it('renders scroll indicator', () => {
    render(<HeroSection />)

    expect(screen.getByText('Scroll to explore')).toBeInTheDocument()
  })
})
