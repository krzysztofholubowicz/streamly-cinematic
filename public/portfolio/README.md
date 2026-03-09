# Portfolio Images

This folder contains all images used in the portfolio section.

## How to add/change portfolio images:

1. **Add a new image:**
   - Place your image file in this folder (e.g., `new-project.jpg`)
   - Open `src/data/projects.ts`
   - Add a new project object with `image: '/images/portfolio/new-project.jpg'`

2. **Replace existing image:**
   - Simply replace the image file in this folder
   - Keep the same filename, or update the path in `src/data/projects.ts`

3. **Recommended image specifications:**
   - Format: JPG or PNG
   - Resolution: Minimum 1920x1080px
   - Aspect ratio: 16:9 or 21:9 works best
   - File size: Keep under 500KB for optimal performance

## File structure:
```
public/
  images/
    portfolio/
      polsat.jpg
      impact-cee.jpg
      corporate.jpg
      ...
```

To reference in `projects.ts`: `/images/portfolio/filename.jpg`
