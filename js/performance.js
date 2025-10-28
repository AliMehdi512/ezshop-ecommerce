/**
 * Performance Optimization System
 * Features: Image optimization, lazy loading, caching, compression
 */

class PerformanceOptimizer {
    constructor() {
        this.cache = new Map();
        this.observers = new Map();
        this.init();
    }

    init() {
        this.optimizeImages();
        this.implementLazyLoading();
        this.optimizeFonts();
        this.implementCaching();
        this.optimizeJavaScript();
        this.optimizeCSS();
        this.monitorPerformance();
    }

    optimizeImages() {
        // Convert images to WebP format if supported
        this.convertToWebP();
        
        // Add responsive images
        this.addResponsiveImages();
        
        // Optimize image loading
        this.optimizeImageLoading();
    }

    convertToWebP() {
        if (!this.supportsWebP()) return;

        const images = document.querySelectorAll('img[src$=".png"], img[src$=".jpg"], img[src$=".jpeg"]');
        images.forEach(img => {
            const webpSrc = img.src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
            const webpImg = new Image();
            webpImg.onload = () => {
                img.src = webpSrc;
            };
            webpImg.onerror = () => {
                // Fallback to original format
            };
            webpImg.src = webpSrc;
        });
    }

    supportsWebP() {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }

    addResponsiveImages() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            const srcset = this.generateSrcSet(img.dataset.src);
            if (srcset) {
                img.srcset = srcset;
                img.sizes = this.generateSizes();
            }
        });
    }

    generateSrcSet(baseSrc) {
        const sizes = [320, 640, 768, 1024, 1200, 1920];
        return sizes.map(size => {
            const filename = baseSrc.replace(/(\.[^.]+)$/, `_${size}w$1`);
            return `${filename} ${size}w`;
        }).join(', ');
    }

    generateSizes() {
        return '(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1200px) 1200px, 1920px';
    }

    optimizeImageLoading() {
        // Preload critical images
        const criticalImages = document.querySelectorAll('img[data-critical="true"]');
        criticalImages.forEach(img => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = img.src;
            document.head.appendChild(link);
        });
    }

    implementLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        this.loadImage(img);
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.01
            });

            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });

            this.observers.set('images', imageObserver);
        } else {
            // Fallback for older browsers
            this.loadAllImages();
        }
    }

    loadImage(img) {
        if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
        
        // Add loading animation
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s';
        
        img.onload = () => {
            img.style.opacity = '1';
        };
    }

    loadAllImages() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => this.loadImage(img));
    }

    optimizeFonts() {
        // Preload critical fonts
        this.preloadFonts();
        
        // Optimize font loading
        this.optimizeFontLoading();
    }

    preloadFonts() {
        const criticalFonts = [
            'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap',
            'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
        ];

        criticalFonts.forEach(fontUrl => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = fontUrl;
            link.onload = function() {
                this.rel = 'stylesheet';
            };
            document.head.appendChild(link);
        });
    }

    optimizeFontLoading() {
        // Add font-display: swap to all fonts
        const style = document.createElement('style');
        style.textContent = `
            @font-face {
                font-family: 'Open Sans';
                font-display: swap;
            }
            @font-face {
                font-family: 'Roboto';
                font-display: swap;
            }
        `;
        document.head.appendChild(style);
    }

    implementCaching() {
        // Implement service worker for caching
        if ('serviceWorker' in navigator) {
            this.registerServiceWorker();
        }
        
        // Implement memory caching
        this.implementMemoryCache();
    }

    registerServiceWorker() {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully');
            })
            .catch(error => {
                console.log('Service Worker registration failed');
            });
    }

    implementMemoryCache() {
        // Cache API responses
        this.cacheAPIResponses();
        
        // Cache DOM queries
        this.cacheDOMQueries();
    }

    cacheAPIResponses() {
        const originalFetch = window.fetch;
        window.fetch = async (url, options) => {
            const cacheKey = `${url}_${JSON.stringify(options)}`;
            
            if (this.cache.has(cacheKey)) {
                return this.cache.get(cacheKey);
            }
            
            const response = await originalFetch(url, options);
            this.cache.set(cacheKey, response);
            
            // Clear cache after 5 minutes
            setTimeout(() => {
                this.cache.delete(cacheKey);
            }, 5 * 60 * 1000);
            
            return response;
        };
    }

    cacheDOMQueries() {
        const queryCache = new Map();
        
        const originalQuerySelector = document.querySelector;
        document.querySelector = function(selector) {
            if (queryCache.has(selector)) {
                return queryCache.get(selector);
            }
            
            const element = originalQuerySelector.call(this, selector);
            if (element) {
                queryCache.set(selector, element);
            }
            
            return element;
        };
    }

    optimizeJavaScript() {
        // Defer non-critical JavaScript
        this.deferNonCriticalJS();
        
        // Optimize event listeners
        this.optimizeEventListeners();
        
        // Implement code splitting
        this.implementCodeSplitting();
    }

    deferNonCriticalJS() {
        const scripts = document.querySelectorAll('script[src]');
        scripts.forEach(script => {
            if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
                // Check if script is critical
                const isCritical = script.hasAttribute('data-critical');
                if (!isCritical) {
                    script.defer = true;
                }
            }
        });
    }

    optimizeEventListeners() {
        // Use event delegation for better performance
        document.addEventListener('click', this.handleClickDelegation.bind(this));
        document.addEventListener('scroll', this.throttle(this.handleScroll.bind(this), 100));
        document.addEventListener('resize', this.throttle(this.handleResize.bind(this), 100));
    }

    handleClickDelegation(e) {
        // Handle click events efficiently
        if (e.target.matches('.btn, .nav-link, .dropdown-toggle')) {
            // Handle button clicks
        }
    }

    handleScroll() {
        // Handle scroll events
        this.updateScrollPosition();
    }

    handleResize() {
        // Handle resize events
        this.updateViewportSize();
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    implementCodeSplitting() {
        // Load modules on demand
        this.loadModulesOnDemand();
    }

    loadModulesOnDemand() {
        // Load search functionality only when needed
        const searchTrigger = document.querySelector('#searchInput, .search-btn');
        if (searchTrigger) {
            searchTrigger.addEventListener('click', () => {
                this.loadModule('search');
            });
        }
        
        // Load admin functionality only when needed
        const adminTrigger = document.querySelector('.admin-panel');
        if (adminTrigger) {
            this.loadModule('admin');
        }
    }

    loadModule(moduleName) {
        if (this.cache.has(moduleName)) {
            return this.cache.get(moduleName);
        }
        
        const moduleMap = {
            'search': 'js/search.js',
            'inventory': 'js/inventory.js',
            'orders': 'js/orders.js',
            'admin': 'admin.html'
        };
        
        const modulePath = moduleMap[moduleName];
        if (modulePath) {
            return this.loadScript(modulePath);
        }
    }

    loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    optimizeCSS() {
        // Remove unused CSS
        this.removeUnusedCSS();
        
        // Optimize CSS delivery
        this.optimizeCSSDelivery();
    }

    removeUnusedCSS() {
        // This would require a build process in a real implementation
        // For now, we'll just optimize the delivery
    }

    optimizeCSSDelivery() {
        // Inline critical CSS
        this.inlineCriticalCSS();
        
        // Load non-critical CSS asynchronously
        this.loadNonCriticalCSS();
    }

    inlineCriticalCSS() {
        const criticalCSS = `
            /* Critical CSS for above-the-fold content */
            .navbar { display: flex; }
            .hero-section { min-height: 100vh; }
            .product-grid { display: grid; }
        `;
        
        const style = document.createElement('style');
        style.textContent = criticalCSS;
        document.head.insertBefore(style, document.head.firstChild);
    }

    loadNonCriticalCSS() {
        const nonCriticalCSS = [
            'lib/animate/animate.min.css',
            'lib/owlcarousel/assets/owl.carousel.min.css'
        ];
        
        nonCriticalCSS.forEach(cssFile => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = cssFile;
            link.onload = function() {
                this.rel = 'stylesheet';
            };
            document.head.appendChild(link);
        });
    }

    monitorPerformance() {
        // Monitor Core Web Vitals
        this.monitorCoreWebVitals();
        
        // Monitor resource loading
        this.monitorResourceLoading();
        
        // Monitor user interactions
        this.monitorUserInteractions();
    }

    monitorCoreWebVitals() {
        // Monitor Largest Contentful Paint
        this.monitorLCP();
        
        // Monitor First Input Delay
        this.monitorFID();
        
        // Monitor Cumulative Layout Shift
        this.monitorCLS();
    }

    monitorLCP() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.startTime);
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }
    }

    monitorFID() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    console.log('FID:', entry.processingStart - entry.startTime);
                });
            });
            observer.observe({ entryTypes: ['first-input'] });
        }
    }

    monitorCLS() {
        if ('PerformanceObserver' in window) {
            let clsValue = 0;
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                });
                console.log('CLS:', clsValue);
            });
            observer.observe({ entryTypes: ['layout-shift'] });
        }
    }

    monitorResourceLoading() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    if (entry.entryType === 'resource') {
                        console.log(`Resource loaded: ${entry.name} in ${entry.duration}ms`);
                    }
                });
            });
            observer.observe({ entryTypes: ['resource'] });
        }
    }

    monitorUserInteractions() {
        // Track user interactions for performance insights
        document.addEventListener('click', (e) => {
            this.trackInteraction('click', e.target);
        });
        
        document.addEventListener('scroll', this.throttle(() => {
            this.trackInteraction('scroll', null);
        }, 1000));
    }

    trackInteraction(type, element) {
        const interaction = {
            type,
            element: element ? element.tagName : null,
            timestamp: Date.now(),
            url: window.location.href
        };
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'user_interaction', {
                event_category: 'performance',
                event_label: type,
                value: 1
            });
        }
    }

    updateScrollPosition() {
        // Update scroll position for performance
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        document.documentElement.setAttribute('data-scroll', scrollTop);
    }

    updateViewportSize() {
        // Update viewport size for responsive behavior
        const width = window.innerWidth;
        const height = window.innerHeight;
        document.documentElement.setAttribute('data-viewport', `${width}x${height}`);
    }

    // Public methods for external use
    preloadResource(url, type = 'script') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = type;
        link.href = url;
        document.head.appendChild(link);
    }

    loadResource(url, type = 'script') {
        return new Promise((resolve, reject) => {
            if (type === 'script') {
                const script = document.createElement('script');
                script.src = url;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            } else if (type === 'style') {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = url;
                link.onload = resolve;
                link.onerror = reject;
                document.head.appendChild(link);
            }
        });
    }

    clearCache() {
        this.cache.clear();
        console.log('Cache cleared');
    }

    getPerformanceMetrics() {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        return {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
        };
    }
}

// Initialize performance optimizer when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.performanceOptimizer = new PerformanceOptimizer();
});

// Add performance monitoring styles
const performanceStyles = `
<style>
/* Performance optimization styles */
img[data-src] {
    opacity: 0;
    transition: opacity 0.3s;
}

img[data-src].loaded {
    opacity: 1;
}

/* Loading states */
.loading {
    position: relative;
    overflow: hidden;
}

.loading::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { left: -100%; }
    100% { left: 100%; }
}

/* Optimize animations for better performance */
.animate {
    will-change: transform;
    transform: translateZ(0);
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* Optimize for mobile performance */
@media (max-width: 768px) {
    .mobile-optimize {
        transform: translateZ(0);
        -webkit-transform: translateZ(0);
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', performanceStyles);
