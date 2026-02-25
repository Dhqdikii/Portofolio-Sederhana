# Portfolio Website Specification

## 1. Project Overview
- **Project Name:** Personal Portfolio
- **Type:** Single Page Website
- **Core Functionality:** A modern, fast, and interactive portfolio website with editable profile, dark/light theme toggle, smooth scrolling, and sections for home, about, skills, projects, and social media links.
- **Target Users:** Personal use to showcase skills and projects

## 2. UI/UX Specification

### Layout Structure
- **Navigation:** Fixed top navbar with smooth scroll links
- **Sections:**
  1. Hero/Home - Full viewport height with animated introduction
  2. About - Profile information with editable content
  3. Skills - Progress bars or skill cards
  4. Projects - Card grid layout
  5. Contact/Social Media - Social links with icons

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette
**Light Theme:**
- Background: `#FAFAFA`
- Surface: `#FFFFFF`
- Primary: `#6366F1` (Indigo)
- Secondary: `#EC4899` (Pink)
- Accent: `#10B981` (Emerald)
- Text Primary: `#1F2937`
- Text Secondary: `#6B7280`

**Dark Theme:**
- Background: `#0F172A` (Slate 900)
- Surface: `#1E293B` (Slate 800)
- Primary: `#818CF8` (Indigo 400)
- Secondary: `#F472B6` (Pink 400)
- Accent: `#34D399` (Emerald 400)
- Text Primary: `#F1F5F9`
- Text Secondary: `#94A3B8`

#### Typography
- **Font Family:** 
  - Headings: 'Playfair Display', serif
  - Body: 'Plus Jakarta Sans', sans-serif
- **Font Sizes:**
  - Hero Title: 4rem (64px)
  - Section Title: 2.5rem (40px)
  - Subtitle: 1.5rem (24px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

#### Spacing System
- Section padding: 100px vertical
- Container max-width: 1200px
- Card gap: 24px
- Element spacing: 16px

#### Visual Effects
- Glassmorphism effect on cards
- Gradient backgrounds with animation
- Smooth hover transitions (0.3s ease)
- Scroll reveal animations
- Floating decorative elements
- Particle or gradient mesh background

### Components

#### Navigation Bar
- Logo/Name on left
- Menu links: Home, About, Skills, Projects, Contact
- Theme toggle button (sun/moon icon)
- Edit profile button
- Glassmorphism background on scroll

#### Hero Section
- Animated gradient background
- Profile photo (circular with glow)
- Name with typing animation
- Tagline/ profession
- CTA buttons (View Projects, Contact Me)
- Scroll indicator at bottom

#### About Section
- Editable profile card
- Profile photo, name, title
- Bio text (editable)
- Location and availability status

#### Skills Section
- Skill cards with icons
- Progress indicator or proficiency level
- Hover effect with glow
- Categories: Frontend, Backend, Tools

#### Projects Section
- Project cards with:
  - Thumbnail image
  - Project title
  - Description
  - Tech stack tags
  - Links (Live, GitHub)
- Filter by category (optional)
- Hover: scale up + shadow

#### Social Media/Contact Section
- Social icons with hover animations:
  - GitHub
  - Instagram
  - LinkedIn
  - Email
- Each with gradient background on hover

#### Footer
- Copyright text
- Back to top button

## 3. Functionality Specification

### Core Features

#### Theme Toggle
- Switch between dark/light mode
- Persist preference in localStorage
- Smooth transition animation
- System preference detection

#### Edit Profile
- Edit button opens modal/inline editor
- Editable fields: Name, Title, Bio, Location
- Profile photo URL input
- Save to localStorage
- Changes persist across sessions

#### Smooth Scrolling
- CSS scroll-behavior: smooth
- Active section highlighting in nav
- Scroll progress indicator (optional)

#### Performance Optimization
- Lazy loading for images
- Minimal dependencies
- Optimized CSS animations
- Debounced scroll events

### Data Storage (localStorage)
```javascript
{
  profile: {
    name: "Your Name",
    title: "Web Developer",
    bio: "Your bio...",
    photo: "url...",
    location: "City, Country"
  },
  theme: "dark" | "light"
}
```

### Default Data
- Name: "Dhicky"
- Title: "Web Developer & Designer"
- Skills: HTML, CSS, JavaScript, React, Node.js
- Sample Projects: 3 placeholder projects
- Social Links: Placeholder URLs

## 4. Acceptance Criteria

### Visual Checkpoints
- [ ] Hero section fills viewport with gradient animation
- [ ] Navigation is fixed and has glass effect on scroll
- [ ] Theme toggle smoothly switches colors
- [ ] All sections have scroll reveal animation
- [ ] Project cards have hover effects
- [ ] Social icons have gradient hover effect
- [ ] Mobile responsive layout works correctly

### Functionality Checkpoints
- [ ] Theme preference persists after page reload
- [ ] Profile data can be edited and saved
- [ ] Edited profile persists after page reload
- [ ] Smooth scroll works for all nav links
- [ ] No lag when scrolling (60fps)
- [ ] All social links are clickable

### Performance Checkpoints
- [ ] Page loads under 3 seconds
- [ ] Smooth 60fps animations
- [ ] No layout shift during loading

