/**
 * Comprehensive SEO Optimization System
 * Features: Meta tag management, structured data, performance optimization, analytics
 */

class SEOOptimizer {
    constructor() {
        this.analytics = {
            pageViews: 0,
            bounceRate: 0,
            avgSessionDuration: 0,
            conversionRate: 0
        };
        this.init();
    }

    init() {
        this.optimizePageLoad();
        this.addStructuredData();
        this.optimizeImages();
        this.addBreadcrumbs();
        this.optimizeInternalLinking();
        this.addSchemaMarkup();
        this.initializeAnalytics();
        this.optimizePerformance();
    }

    optimizePageLoad() {
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Optimize font loading
        this.optimizeFontLoading();
        
        // Add loading states
        this.addLoadingStates();
    }

    preloadCriticalResources() {
        const criticalResources = [
            { href: 'css/style.css', as: 'style' },
            { href: 'js/main.js', as: 'script' },
            { href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap', as: 'style' }
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as;
            if (resource.as === 'style') {
                link.onload = function() { this.rel = 'stylesheet'; };
            }
            document.head.appendChild(link);
        });
    }

    optimizeFontLoading() {
        // Add font-display: swap for better performance
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

    addLoadingStates() {
        // Add loading states for better UX
        const loadingHTML = `
            <div id="seo-loading" class="seo-loading" style="display: none;">
                <div class="loading-spinner"></div>
                <p>Loading content...</p>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', loadingHTML);
    }

    addStructuredData() {
        const currentPage = this.getCurrentPage();
        const structuredData = this.generateStructuredData(currentPage);
        
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split('/').pop().split('.')[0];
        
        const pageMap = {
            'index': 'homepage',
            'shop': 'product-catalog',
            'single': 'product-detail',
            'cart': 'shopping-cart',
            'contact': 'contact-page',
            'bestseller': 'bestseller-page'
        };
        
        return pageMap[page] || 'default';
    }

    generateStructuredData(pageType) {
        const baseData = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "EZShop Electronics Store",
            "url": "https://ezshop-store.com",
            "description": "Premium electronics store offering the latest tech gadgets and accessories",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ezshop-store.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        };

        switch (pageType) {
            case 'homepage':
                return {
                    ...baseData,
                    "@type": "Store",
                    "name": "EZShop Electronics Store",
                    "description": "Discover the latest electronics and tech gadgets at EZShop. Shop premium smartphones, laptops, headphones, gaming accessories, and smart home devices.",
                    "url": "https://ezshop-store.com",
                    "logo": "https://ezshop-store.com/img/logo.png",
                    "image": "https://ezshop-store.com/img/store-image.jpg",
                    "telephone": "+92-326-4747914",
                    "email": "ali.mehdi.dev579@gmail.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "123 Tech Street",
                        "addressLocality": "New York",
                        "addressRegion": "NY",
                        "postalCode": "10001",
                        "addressCountry": "US"
                    },
                    "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
                    "paymentAccepted": "Credit Card, PayPal, Bank Transfer",
                    "currenciesAccepted": "USD",
                    "priceRange": "$10-$2000"
                };

            case 'product-catalog':
                return {
                    ...baseData,
                    "@type": "CollectionPage",
                    "name": "Electronics Catalog - EZShop Store",
                    "description": "Browse our complete collection of electronics, tech gadgets, and accessories",
                    "mainEntity": {
                        "@type": "ItemList",
                        "name": "Electronics Products",
                        "description": "Complete collection of electronics and tech gadgets"
                    }
                };

            case 'product-detail':
                const product = this.getCurrentProduct();
                return {
                    ...baseData,
                    "@type": "Product",
                    "name": product.name,
                    "description": product.description,
                    "image": product.image,
                    "brand": {
                        "@type": "Brand",
                        "name": product.brand
                    },
                    "offers": {
                        "@type": "Offer",
                        "price": product.price,
                        "priceCurrency": "USD",
                        "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                        "seller": {
                            "@type": "Organization",
                            "name": "EZShop Electronics Store"
                        }
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": product.rating,
                        "reviewCount": product.reviews
                    }
                };

            default:
                return baseData;
        }
    }

    getCurrentProduct() {
        // Mock product data - in real implementation, this would come from the product system
        return {
            name: "Wireless Bluetooth Headphones",
            description: "High-quality wireless headphones with noise cancellation",
            image: "https://electro-store.com/img/product-1.png",
            brand: "TechSound",
            price: 199.99,
            inStock: true,
            rating: 4.5,
            reviews: 128
        };
    }

    optimizeImages() {
        // Add lazy loading to images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
            
            // Add alt text if missing
            if (!img.alt) {
                img.alt = this.generateAltText(img.src);
            }
            
            // Add width and height attributes for better CLS
            if (!img.width || !img.height) {
                this.addImageDimensions(img);
            }
        });
    }

    generateAltText(src) {
        const filename = src.split('/').pop().split('.')[0];
        const altTextMap = {
            'product-1': 'Wireless Bluetooth Headphones with noise cancellation',
            'product-2': 'Smart Watch Series 5 with fitness tracking',
            'product-3': '4K Ultra HD Camera for professional photography',
            'product-4': 'Gaming Mechanical Keyboard with RGB lighting',
            'product-5': 'Wireless Charging Pad for smartphones',
            'carousel-1': 'Electronics store banner showcasing latest tech gadgets',
            'header-img': 'Electro electronics store header image'
        };
        
        return altTextMap[filename] || `Electronics product image - ${filename}`;
    }

    addImageDimensions(img) {
        // In a real implementation, you would get actual dimensions
        // For now, we'll use common aspect ratios
        img.width = 300;
        img.height = 300;
    }

    addBreadcrumbs() {
        const breadcrumbs = this.generateBreadcrumbs();
        if (breadcrumbs.length > 1) {
            const breadcrumbHTML = this.createBreadcrumbHTML(breadcrumbs);
            this.insertBreadcrumbs(breadcrumbHTML);
        }
    }

    generateBreadcrumbs() {
        const path = window.location.pathname;
        const segments = path.split('/').filter(segment => segment);
        
        const breadcrumbs = [
            { name: 'Home', url: '/' }
        ];
        
        let currentPath = '';
        segments.forEach(segment => {
            currentPath += '/' + segment;
            const name = this.getBreadcrumbName(segment);
            breadcrumbs.push({ name, url: currentPath });
        });
        
        return breadcrumbs;
    }

    getBreadcrumbName(segment) {
        const nameMap = {
            'shop.html': 'Shop',
            'single.html': 'Product',
            'cart.html': 'Cart',
            'contact.html': 'Contact',
            'bestseller.html': 'Bestsellers'
        };
        
        return nameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    }

    createBreadcrumbHTML(breadcrumbs) {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": crumb.name,
                "item": `https://electro-store.com${crumb.url}`
            }))
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);

        return `
            <nav aria-label="Breadcrumb" class="breadcrumb-nav">
                <ol class="breadcrumb">
                    ${breadcrumbs.map((crumb, index) => `
                        <li class="breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}">
                            ${index === breadcrumbs.length - 1 ? 
                                crumb.name : 
                                `<a href="${crumb.url}">${crumb.name}</a>`
                            }
                        </li>
                    `).join('')}
                </ol>
            </nav>
        `;
    }

    insertBreadcrumbs(html) {
        const mainContent = document.querySelector('main') || document.querySelector('.container-fluid');
        if (mainContent) {
            mainContent.insertAdjacentHTML('afterbegin', html);
        }
    }

    optimizeInternalLinking() {
        // Add proper internal linking structure
        this.addRelatedProducts();
        this.addCategoryLinks();
        this.optimizeNavigationLinks();
    }

    addRelatedProducts() {
        // This would integrate with the product system
        const relatedProducts = this.getRelatedProducts();
        if (relatedProducts.length > 0) {
            const relatedHTML = this.createRelatedProductsHTML(relatedProducts);
            this.insertRelatedProducts(relatedHTML);
        }
    }

    getRelatedProducts() {
        // Mock data - in real implementation, this would come from the product system
        return [
            { name: 'Gaming Mouse RGB', url: '/single.html?id=8', image: '/img/product-8.png' },
            { name: 'Gaming Headset', url: '/single.html?id=16', image: '/img/product-16.png' },
            { name: 'Mechanical Keyboard', url: '/single.html?id=4', image: '/img/product-4.png' }
        ];
    }

    createRelatedProductsHTML(products) {
        return `
            <section class="related-products" aria-label="Related Products">
                <h3>Related Products</h3>
                <div class="row">
                    ${products.map(product => `
                        <div class="col-md-4">
                            <div class="related-product-item">
                                <a href="${product.url}" aria-label="View ${product.name}">
                                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                                    <h4>${product.name}</h4>
                                </a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    insertRelatedProducts(html) {
        const productSection = document.querySelector('.product') || document.querySelector('.container-fluid');
        if (productSection) {
            productSection.insertAdjacentHTML('beforeend', html);
        }
    }

    addCategoryLinks() {
        // Add category navigation for better internal linking
        const categories = [
            { name: 'Audio', url: '/shop.html?category=audio' },
            { name: 'Gaming', url: '/shop.html?category=gaming' },
            { name: 'Cameras', url: '/shop.html?category=cameras' },
            { name: 'Accessories', url: '/shop.html?category=accessories' },
            { name: 'Smart Home', url: '/shop.html?category=smart-home' }
        ];

        const categoryHTML = `
            <nav class="category-nav" aria-label="Product Categories">
                <h3>Shop by Category</h3>
                <ul class="category-list">
                    ${categories.map(category => `
                        <li><a href="${category.url}">${category.name}</a></li>
                    `).join('')}
                </ul>
            </nav>
        `;

        const sidebar = document.querySelector('.sidebar') || document.querySelector('.col-md-3');
        if (sidebar) {
            sidebar.insertAdjacentHTML('afterbegin', categoryHTML);
        }
    }

    optimizeNavigationLinks() {
        // Add proper navigation structure
        const nav = document.querySelector('nav');
        if (nav) {
            nav.setAttribute('role', 'navigation');
            nav.setAttribute('aria-label', 'Main navigation');
        }

        // Add skip links for accessibility
        this.addSkipLinks();
    }

    addSkipLinks() {
        const skipLinks = `
            <a href="#main-content" class="skip-link">Skip to main content</a>
            <a href="#navigation" class="skip-link">Skip to navigation</a>
            <a href="#footer" class="skip-link">Skip to footer</a>
        `;
        document.body.insertAdjacentHTML('afterbegin', skipLinks);
    }

    addSchemaMarkup() {
        // Add FAQ schema if on FAQ page
        if (window.location.pathname.includes('faq')) {
            this.addFAQSchema();
        }

        // Add review schema for product pages
        if (window.location.pathname.includes('single')) {
            this.addReviewSchema();
        }

        // Add organization schema
        this.addOrganizationSchema();
    }

    addFAQSchema() {
        const faqData = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is your return policy?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We offer a 30-day return policy for all products in original condition."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer free shipping?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer free shipping on orders over $100."
                    }
                }
            ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(faqData);
        document.head.appendChild(script);
    }

    addReviewSchema() {
        const reviewData = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Wireless Bluetooth Headphones",
            "review": {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4.5",
                    "bestRating": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "John Smith"
                },
                "reviewBody": "Great headphones with excellent sound quality and noise cancellation."
            }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(reviewData);
        document.head.appendChild(script);
    }

    addOrganizationSchema() {
        const organizationData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "EZShop Electronics Store",
            "url": "https://ezshop-store.com",
            "logo": "https://ezshop-store.com/img/logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-326-4747914",
                "contactType": "customer service",
                "availableLanguage": "English"
            },
            "sameAs": [
                "https://www.facebook.com/ezshopstore",
                "https://www.twitter.com/ezshopstore",
                "https://www.instagram.com/ezshopstore"
            ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(organizationData);
        document.head.appendChild(script);
    }

    initializeAnalytics() {
        // Initialize Google Analytics or other analytics tools
        this.setupGoogleAnalytics();
        this.trackPageViews();
        this.trackUserInteractions();
    }

    setupGoogleAnalytics() {
        // Google Analytics 4 setup
        const gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
        document.head.appendChild(gtagScript);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
    }

    trackPageViews() {
        // Track page views
        this.analytics.pageViews++;
        
        // Send to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                page_title: document.title,
                page_location: window.location.href
            });
        }
    }

    trackUserInteractions() {
        // Track button clicks
        document.addEventListener('click', (e) => {
            if (e.target.matches('button, .btn, a[href]')) {
                this.trackEvent('click', e.target.textContent || e.target.href);
            }
        });

        // Track form submissions
        document.addEventListener('submit', (e) => {
            this.trackEvent('form_submit', e.target.action || 'unknown_form');
        });

        // Track search queries
        const searchInput = document.querySelector('input[type="search"], #searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                if (e.target.value.length > 2) {
                    this.trackEvent('search', e.target.value);
                }
            });
        }
    }

    trackEvent(action, label) {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: 'user_interaction',
                event_label: label
            });
        }
    }

    optimizePerformance() {
        // Optimize Core Web Vitals
        this.optimizeLCP();
        this.optimizeFID();
        this.optimizeCLS();
        
        // Add performance monitoring
        this.monitorPerformance();
    }

    optimizeLCP() {
        // Optimize Largest Contentful Paint
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.src && !img.complete) {
                img.addEventListener('load', () => {
                    // Image loaded
                });
            }
        });
    }

    optimizeFID() {
        // Optimize First Input Delay
        // Defer non-critical JavaScript
        const scripts = document.querySelectorAll('script[src]');
        scripts.forEach(script => {
            if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
                script.defer = true;
            }
        });
    }

    optimizeCLS() {
        // Optimize Cumulative Layout Shift
        // Add dimensions to images and videos
        const media = document.querySelectorAll('img, video');
        media.forEach(element => {
            if (!element.width || !element.height) {
                element.style.aspectRatio = '1/1';
            }
        });
    }

    monitorPerformance() {
        // Monitor Core Web Vitals
        if ('web-vital' in window) {
            // This would require the web-vitals library
            // getCLS(console.log);
            // getFID(console.log);
            // getLCP(console.log);
        }

        // Monitor page load time
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            this.trackEvent('page_load_time', loadTime.toString());
        });
    }

    // Public methods for external use
    updateMetaTags(title, description, keywords) {
        document.title = title;
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = description;
        }

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.content = keywords;
        }
    }

    addCanonicalURL(url) {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = url;
    }

    generateSitemap() {
        // Generate dynamic sitemap
        const pages = [
            { url: '/', priority: 1.0, changefreq: 'daily' },
            { url: '/shop.html', priority: 0.9, changefreq: 'daily' },
            { url: '/contact.html', priority: 0.7, changefreq: 'monthly' }
        ];

        return pages.map(page => `
            <url>
                <loc>https://electro-store.com${page.url}</loc>
                <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
                <changefreq>${page.changefreq}</changefreq>
                <priority>${page.priority}</priority>
            </url>
        `).join('');
    }
}

// Initialize SEO optimizer when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.seoOptimizer = new SEOOptimizer();
});

// Add SEO styles
const seoStyles = `
<style>
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: #fff;
    padding: 8px;
    text-decoration: none;
    z-index: 1000;
}

.skip-link:focus {
    top: 6px;
}

.breadcrumb-nav {
    margin-bottom: 1rem;
}

.breadcrumb {
    background: transparent;
    padding: 0;
    margin: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
    content: ">";
    color: #6c757d;
}

.related-products {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #dee2e6;
}

.related-product-item {
    text-align: center;
    margin-bottom: 1rem;
}

.related-product-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 0.5rem;
}

.category-nav {
    margin-bottom: 2rem;
}

.category-list {
    list-style: none;
    padding: 0;
}

.category-list li {
    margin-bottom: 0.5rem;
}

.category-list a {
    color: #007bff;
    text-decoration: none;
    padding: 0.5rem;
    display: block;
    border-radius: 0.25rem;
    transition: background-color 0.3s;
}

.category-list a:hover {
    background-color: #f8f9fa;
    text-decoration: underline;
}

.seo-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #007bff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Accessibility improvements */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* Focus indicators */
a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    .btn {
        border: 2px solid currentColor;
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', seoStyles);
