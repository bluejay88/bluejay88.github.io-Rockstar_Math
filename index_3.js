// Lazy Loading Images
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");

    const lazyLoad = (image) => {
        const src = image.getAttribute("data-src");
        if (!src) return;
        image.src = src;
        image.classList.add("loaded");
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lazyLoad(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });
});

// Hamburger menu
function toggleMenu() {
    const menu = document.querySelector('#nav-links');
    menu.classList.toggle('show');
  }

// Optimizations and SEO
function optimizeWebsite() {
    // Minify CSS and JS (handled server-side or via build tools)
    
    // Image Optimization
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.setAttribute("loading", "lazy");
    });

    // Reduce HTTP Requests
    // Combine CSS and JS files when possible (e.g., via build tool or manually)

    // Enable GZIP compression (handled server-side)

    // Use CDN for static assets (ensure CSS, JS, and images are served via a CDN)

    // Implement Browser Caching (cache headers set on server-side)

    // Ensure Responsive Images (use srcset for better image scaling)

    // Implement Preload for critical CSS
    const preload = document.createElement('link');
    preload.rel = 'preload';
    preload.href = 'index_3.css';
    preload.as = 'style';
    document.head.appendChild(preload);

    // Lazy load videos if present (similar to images)
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.setAttribute("loading", "lazy");
    });

    // Defer non-critical JS to load only after DOM is ready
    const scripts = document.querySelectorAll("script");
    scripts.forEach(script => {
        script.setAttribute("defer", true);
    });

    // Ensure SEO-friendly meta tags and headers are present
    document.title = "Rockstar Math - Personalized Math Tutoring";
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Math tutoring services that help students build confidence and excel in math. Learn Algebra, Calculus, Geometry, and more with personalized sessions.";
    document.head.appendChild(metaDescription);

    const keywords = document.createElement("meta");
    keywords.name = "keywords";
    keywords.content = "Math Tutor, Algebra, Calculus, Geometry, Trigonometry, Online Math Tutor";
    document.head.appendChild(keywords);
}

optimizeWebsite();
