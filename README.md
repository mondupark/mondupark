# 3D Artist Portfolio

A professional portfolio website for 3D artists featuring an interactive 3D model viewer.

## Features

- 🎨 **Interactive 3D Viewer**: Upload and view GLB/GLTF 3D models in real-time
- 🚀 **Auto-load Model**: Automatically loads default model (headTest.glb) on page load
- 🌙 **Dark Theme**: Professional dark theme design
- 📱 **Responsive**: Works on all devices
- ⚡ **Performance Optimized**: Fast loading and smooth interactions
- 🎮 **Unreal-style Controls**: Industry-standard camera controls

## 3D Viewer Controls

- **Left Click + Drag**: Rotate model
- **Right Click + Drag**: Rotate model
- **Alt + Right Click + Drag**: Zoom in/out
- **Middle Click + Drag**: Pan camera
- **Mouse Wheel**: Zoom
- **F Key**: Frame focus on model

## Pages

- **Home**: Introduction and featured work
- **3D Viewer**: Interactive 3D model viewer with auto-load feature
- **About**: Skills, experience, and software proficiency
- **Contact**: Get in touch

## Setup

### Adding Your 3D Models

1. Place your GLB/GLTF files in the `models/` directory
2. The viewer will automatically load `models/headTest.glb` on page load
3. Users can also upload any GLB/GLTF file using the upload button

### Local Development

Simply open `index.html` in a web browser to view the site locally.

## Technologies

- Three.js for 3D rendering
- Vanilla JavaScript
- Modern CSS with CSS Grid and Flexbox
- GitHub Pages for hosting

## GitHub Pages Deployment

This site is automatically deployed via GitHub Pages. Any changes pushed to the main branch will be reflected on the live site.

### Deployment URL
```
https://dhpark9609-lang.github.io/3d-portfolio-viewer/
```

## File Structure

```
/
├── index.html          # Homepage
├── viewer.html         # 3D Viewer (auto-loads models/headTest.glb)
├── about.html          # About page
├── contact.html        # Contact page
├── style.css           # Dark theme styling
├── models/             # 3D model files directory
│   └── headTest.glb    # Default model (add your own)
└── README.md           # Documentation
```

## License

© 2024 3D Artist Portfolio. All rights reserved.
