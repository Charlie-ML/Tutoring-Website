# Design Guidelines: Private Tutoring Business Website

## Design Approach
**Reference-Based**: Draw inspiration from professional service websites like Calendly, Grammarly, and educational platforms that emphasize trust and clarity. Focus on clean, modern professionalism with a warm, approachable tone.

## Core Design Principles
- **Trust & Credibility**: Professional appearance that reassures parents and students
- **Clarity First**: Easy navigation and scannable content
- **Direct Action**: Minimize friction in contacting the tutor
- **Mobile-Optimized**: Seamless experience on phones

## Color Palette
- **Primary**: Navy blue (#1e3a5f or similar)
- **Background**: Soft white/off-white (#fafafa, #ffffff)
- **Accent**: Subtle gold (#d4af37, #c5a572) for CTAs and highlights
- **Text**: Dark gray for body copy, navy for headings

## Typography System
- **Headings**: Modern sans-serif (Inter, Poppins, or Outfit), bold weights (600-700)
- **Body**: Clean, readable sans-serif (same family, 400-500 weight)
- **Hierarchy**: H1 (48-56px desktop), H2 (36-40px), H3 (24-28px), Body (16-18px)

## Layout & Spacing
- **Spacing Scale**: Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistency
- **Container**: max-w-6xl for content, full-width for hero and contact sections
- **Section Padding**: py-16 to py-24 on desktop, py-12 on mobile
- **Vertical Rhythm**: Consistent spacing between sections creates flow

## Navigation
- **Sticky header** with transparent-to-solid background on scroll
- Links: Home, About, Services, Testimonials, Contact
- Mobile: Hamburger menu transforming to vertical list
- Gold underline or highlight on active/hover states

## Section Specifications

### Hero Section
- **Height**: 85vh on desktop, natural height on mobile
- **Layout**: Two-column (text left, image right on desktop; stack on mobile)
- **Image**: High-quality professional photo of tutor, rounded corners or subtle shadow
- **Headline**: Large, bold statement about results/confidence
- **Sub-headline**: Supporting text, 60% opacity
- **CTA Button**: Gold background, white text, prominent size (px-8 py-4), smooth scroll to Contact
- **Button on Image**: If overlaying image, add backdrop blur (backdrop-blur-sm) to button background

### About Me Section
- **Layout**: Two-column alternating (bio text, then small secondary photo)
- **Header**: "Meet Your Tutor" - navy, bold
- **Bio Area**: Generous text space for experience, qualifications, teaching philosophy
- **Secondary Photo**: Smaller, casual photo showing personality (max-w-md)
- **Trust Elements**: Credentials, years of experience highlighted

### Services & Subjects Section
- **Layout**: Grid layout (2-3 columns on desktop, 1 on mobile)
- **Icons**: Use Heroicons for subject categories (book, calculator, beaker, etc.)
- **Cards**: Light background cards with subtle border or shadow
- **Content**: Subject name, grade levels (e.g., "Math - Grades 6-12"), brief description
- **Scannable**: Icons + clear headlines for quick comprehension

### Testimonials Section
- **Layout**: Three-column grid (stack to single column on mobile)
- **Cards**: White/light cards with subtle shadow, generous padding
- **Quote Marks**: Visual element or icon
- **Content Structure**: Quote text, student/parent name, grade/subject context
- **Styling**: Italic quotes, attribution in smaller text

### Contact Section (Critical)
- **Layout**: Centered, full attention
- **Header**: Clear, action-oriented ("Get in Touch" or "Ready to Start?")
- **Contact Buttons**: Three large, prominent buttons stacked vertically with icons
  - Email Me (mailto: link) - envelope icon
  - Call or Text (tel: link) - phone icon  
  - WhatsApp - WhatsApp icon
- **Button Styling**: Navy background, white text, rounded, full mobile width, generous padding (py-4 px-6)
- **Icons**: Left-aligned in buttons from Heroicons
- **Availability Text**: Below buttons, smaller text, "Responding within 24 hours"
- **Spacing**: Generous space between buttons (gap-4)

## Component Library
- **Buttons**: Primary (gold), Secondary (navy outline), sizes (base, large)
- **Cards**: Light background, rounded corners (rounded-lg), subtle shadow
- **Icons**: Heroicons via CDN, consistent sizing (h-6 w-6 for inline, h-12 w-12 for features)
- **Images**: Rounded corners, subtle shadows for depth

## Responsive Behavior
- **Breakpoints**: Mobile-first (base), tablet (md: 768px), desktop (lg: 1024px)
- **Navigation**: Hamburger menu below 768px
- **Grids**: 1 column mobile → 2-3 columns desktop
- **Typography**: Scale down 20-30% on mobile
- **Touch Targets**: Minimum 44px height for mobile buttons

## Images
- **Hero Image**: Professional headshot or tutor in teaching environment, right side of hero section, high quality
- **About Section Image**: Casual, approachable photo showing personality, smaller than hero
- **Style**: All images with rounded corners (rounded-lg), consistent treatment throughout

## Animations
**Minimal approach**:
- Smooth scroll behavior for navigation links
- Subtle hover states on buttons (slight scale or brightness change)
- Navigation background fade-in on scroll
- No scroll-triggered animations or complex transitions