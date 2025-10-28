/**
 * Advanced Product Search System
 * Features: Real-time search, filters, sorting, pagination
 */

class ProductSearch {
    constructor() {
        this.products = this.initializeProducts();
        this.searchResults = [];
        this.currentPage = 1;
        this.itemsPerPage = 12;
        this.currentFilters = {
            category: 'all',
            priceRange: [0, 10000],
            brand: 'all',
            rating: 0,
            inStock: true
        };
        this.sortBy = 'relevance';
        this.init();
    }

    initializeProducts() {
        return [
            {
                id: 1,
                name: "Wireless Bluetooth Headphones",
                description: "High-quality wireless headphones with noise cancellation",
                category: "Audio",
                brand: "TechSound",
                price: 199.99,
                originalPrice: 249.99,
                rating: 4.5,
                reviews: 128,
                inStock: true,
                stock: 45,
                image: "img/product-1.png",
                tags: ["wireless", "bluetooth", "headphones", "noise-cancellation"],
                specifications: {
                    "Battery Life": "30 hours",
                    "Connectivity": "Bluetooth 5.0",
                    "Weight": "250g"
                }
            },
            {
                id: 2,
                name: "Smart Watch Series 5",
                description: "Advanced fitness tracking smartwatch with health monitoring",
                category: "Wearables",
                brand: "TechWear",
                price: 299.99,
                originalPrice: 399.99,
                rating: 4.8,
                reviews: 89,
                inStock: true,
                stock: 23,
                image: "img/product-2.png",
                tags: ["smartwatch", "fitness", "health", "tracking"],
                specifications: {
                    "Display": "1.4 inch AMOLED",
                    "Battery": "7 days",
                    "Water Resistance": "50m"
                }
            },
            {
                id: 3,
                name: "4K Ultra HD Camera",
                description: "Professional 4K camera for photography and videography",
                category: "Cameras",
                brand: "PhotoPro",
                price: 1299.99,
                originalPrice: 1599.99,
                rating: 4.7,
                reviews: 67,
                inStock: true,
                stock: 12,
                image: "img/product-3.png",
                tags: ["camera", "4k", "photography", "videography"],
                specifications: {
                    "Resolution": "4K UHD",
                    "Sensor": "1 inch CMOS",
                    "Lens": "24-70mm f/2.8"
                }
            },
            {
                id: 4,
                name: "Gaming Mechanical Keyboard",
                description: "RGB backlit mechanical keyboard for gaming enthusiasts",
                category: "Gaming",
                brand: "GameTech",
                price: 149.99,
                originalPrice: 199.99,
                rating: 4.6,
                reviews: 156,
                inStock: true,
                stock: 34,
                image: "img/product-4.png",
                tags: ["keyboard", "gaming", "mechanical", "rgb"],
                specifications: {
                    "Switches": "Cherry MX Blue",
                    "Backlight": "RGB",
                    "Connectivity": "USB-C"
                }
            },
            {
                id: 5,
                name: "Wireless Charging Pad",
                description: "Fast wireless charging pad for smartphones and devices",
                category: "Accessories",
                brand: "ChargeTech",
                price: 49.99,
                originalPrice: 79.99,
                rating: 4.3,
                reviews: 203,
                inStock: true,
                stock: 67,
                image: "img/product-5.png",
                tags: ["wireless", "charging", "smartphone", "fast-charge"],
                specifications: {
                    "Power": "15W",
                    "Compatibility": "Qi Standard",
                    "Material": "Silicone"
                }
            },
            {
                id: 6,
                name: "Bluetooth Speaker Pro",
                description: "Portable Bluetooth speaker with 360-degree sound",
                category: "Audio",
                brand: "SoundMax",
                price: 89.99,
                originalPrice: 129.99,
                rating: 4.4,
                reviews: 92,
                inStock: true,
                stock: 28,
                image: "img/product-6.png",
                tags: ["speaker", "bluetooth", "portable", "360-sound"],
                specifications: {
                    "Power": "20W",
                    "Battery": "12 hours",
                    "Connectivity": "Bluetooth 5.0"
                }
            },
            {
                id: 7,
                name: "Laptop Stand Adjustable",
                description: "Ergonomic adjustable laptop stand for better posture",
                category: "Accessories",
                brand: "ErgoTech",
                price: 39.99,
                originalPrice: 59.99,
                rating: 4.2,
                reviews: 145,
                inStock: true,
                stock: 89,
                image: "img/product-7.png",
                tags: ["laptop", "stand", "ergonomic", "adjustable"],
                specifications: {
                    "Material": "Aluminum",
                    "Adjustability": "6 positions",
                    "Weight": "1.2kg"
                }
            },
            {
                id: 8,
                name: "Gaming Mouse RGB",
                description: "High-precision gaming mouse with customizable RGB lighting",
                category: "Gaming",
                brand: "GameTech",
                price: 79.99,
                originalPrice: 99.99,
                rating: 4.7,
                reviews: 178,
                inStock: true,
                stock: 41,
                image: "img/product-8.png",
                tags: ["mouse", "gaming", "rgb", "precision"],
                specifications: {
                    "DPI": "16000",
                    "Polling Rate": "1000Hz",
                    "Buttons": "8 programmable"
                }
            },
            {
                id: 9,
                name: "Tablet Pro 12.9 inch",
                description: "Professional tablet with stylus for creative work",
                category: "Tablets",
                brand: "TechTab",
                price: 799.99,
                originalPrice: 999.99,
                rating: 4.9,
                reviews: 234,
                inStock: true,
                stock: 15,
                image: "img/product-9.png",
                tags: ["tablet", "stylus", "creative", "professional"],
                specifications: {
                    "Display": "12.9 inch Retina",
                    "Storage": "256GB",
                    "Stylus": "Included"
                }
            },
            {
                id: 10,
                name: "Smart Home Hub",
                description: "Central hub for controlling smart home devices",
                category: "Smart Home",
                brand: "HomeTech",
                price: 199.99,
                originalPrice: 249.99,
                rating: 4.6,
                reviews: 87,
                inStock: true,
                stock: 32,
                image: "img/product-10.png",
                tags: ["smart-home", "hub", "automation", "control"],
                specifications: {
                    "Connectivity": "WiFi, Zigbee, Z-Wave",
                    "Voice Control": "Yes",
                    "Compatibility": "1000+ devices"
                }
            },
            {
                id: 11,
                name: "Wireless Earbuds Pro",
                description: "Premium wireless earbuds with active noise cancellation",
                category: "Audio",
                brand: "TechSound",
                price: 179.99,
                originalPrice: 229.99,
                rating: 4.8,
                reviews: 156,
                inStock: true,
                stock: 38,
                image: "img/product-11.png",
                tags: ["earbuds", "wireless", "noise-cancellation", "premium"],
                specifications: {
                    "Battery": "6 hours + 18h case",
                    "Noise Cancellation": "Active",
                    "Water Resistance": "IPX4"
                }
            },
            {
                id: 12,
                name: "Monitor 27 inch 4K",
                description: "Ultra-wide 4K monitor for professional work and gaming",
                category: "Monitors",
                brand: "DisplayPro",
                price: 599.99,
                originalPrice: 799.99,
                rating: 4.5,
                reviews: 112,
                inStock: true,
                stock: 19,
                image: "img/product-12.png",
                tags: ["monitor", "4k", "ultra-wide", "gaming"],
                specifications: {
                    "Size": "27 inch",
                    "Resolution": "4K UHD",
                    "Refresh Rate": "144Hz"
                }
            },
            {
                id: 13,
                name: "External SSD 1TB",
                description: "High-speed external SSD for data storage and backup",
                category: "Storage",
                brand: "StorageTech",
                price: 129.99,
                originalPrice: 179.99,
                rating: 4.7,
                reviews: 203,
                inStock: true,
                stock: 56,
                image: "img/product-13.png",
                tags: ["ssd", "external", "storage", "fast"],
                specifications: {
                    "Capacity": "1TB",
                    "Speed": "1050 MB/s",
                    "Interface": "USB 3.2"
                }
            },
            {
                id: 14,
                name: "Webcam 4K Streaming",
                description: "Professional 4K webcam for streaming and video calls",
                category: "Cameras",
                brand: "StreamTech",
                price: 199.99,
                originalPrice: 279.99,
                rating: 4.4,
                reviews: 89,
                inStock: true,
                stock: 24,
                image: "img/product-14.png",
                tags: ["webcam", "4k", "streaming", "video-calls"],
                specifications: {
                    "Resolution": "4K UHD",
                    "Frame Rate": "60fps",
                    "Microphone": "Built-in noise cancellation"
                }
            },
            {
                id: 15,
                name: "Power Bank 20000mAh",
                description: "High-capacity power bank with fast charging technology",
                category: "Accessories",
                brand: "PowerTech",
                price: 59.99,
                originalPrice: 89.99,
                rating: 4.3,
                reviews: 167,
                inStock: true,
                stock: 73,
                image: "img/product-15.png",
                tags: ["power-bank", "charging", "portable", "fast-charge"],
                specifications: {
                    "Capacity": "20000mAh",
                    "Output": "18W",
                    "Ports": "2 USB-A, 1 USB-C"
                }
            },
            {
                id: 16,
                name: "VR Headset Pro",
                description: "Virtual reality headset for immersive gaming and experiences",
                category: "Gaming",
                brand: "VRTech",
                price: 399.99,
                originalPrice: 499.99,
                rating: 4.6,
                reviews: 94,
                inStock: true,
                stock: 17,
                image: "img/product-16.png",
                tags: ["vr", "headset", "gaming", "immersive"],
                specifications: {
                    "Display": "OLED 2K per eye",
                    "Field of View": "110°",
                    "Tracking": "6DOF"
                }
            },
            {
                id: 17,
                name: "Smart Light Bulbs Pack",
                description: "Set of 4 smart LED bulbs with app control and scheduling",
                category: "Smart Home",
                brand: "HomeTech",
                price: 79.99,
                originalPrice: 119.99,
                rating: 4.5,
                reviews: 134,
                inStock: true,
                stock: 45,
                image: "img/product-17.png",
                tags: ["smart-bulbs", "led", "app-control", "scheduling"],
                specifications: {
                    "Wattage": "9W",
                    "Color": "16 million colors",
                    "Control": "WiFi app"
                }
            },
            {
                id: 18,
                name: "Drone with 4K Camera",
                description: "Professional drone with 4K camera and GPS positioning",
                category: "Drones",
                brand: "SkyTech",
                price: 899.99,
                originalPrice: 1199.99,
                rating: 4.8,
                reviews: 67,
                inStock: true,
                stock: 8,
                image: "img/product-18.png",
                tags: ["drone", "4k", "camera", "gps"],
                specifications: {
                    "Camera": "4K UHD",
                    "Flight Time": "30 minutes",
                    "Range": "7km"
                }
            }
        ];
    }

    init() {
        this.createSearchInterface();
        this.bindEvents();
        this.displayProducts(this.products);
    }

    createSearchInterface() {
        const searchHTML = `
            <div class="search-container">
                <div class="search-header">
                    <div class="search-input-container">
                        <input type="text" id="searchInput" class="form-control search-input" 
                               placeholder="Search products, brands, categories...">
                        <button class="btn btn-primary search-btn" id="searchBtn">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    <div class="search-filters">
                        <button class="btn btn-outline-secondary filter-toggle" id="filterToggle">
                            <i class="fas fa-filter"></i> Filters
                        </button>
                        <div class="search-sort">
                            <select class="form-select" id="sortSelect">
                                <option value="relevance">Sort by Relevance</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                                <option value="newest">Newest First</option>
                                <option value="name">Name A-Z</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="search-filters-panel" id="filtersPanel">
                    <div class="row">
                        <div class="col-md-3">
                            <h6>Category</h6>
                            <div class="filter-group">
                                <label><input type="radio" name="category" value="all" checked> All Categories</label>
                                <label><input type="radio" name="category" value="Audio"> Audio</label>
                                <label><input type="radio" name="category" value="Gaming"> Gaming</label>
                                <label><input type="radio" name="category" value="Cameras"> Cameras</label>
                                <label><input type="radio" name="category" value="Accessories"> Accessories</label>
                                <label><input type="radio" name="category" value="Wearables"> Wearables</label>
                                <label><input type="radio" name="category" value="Smart Home"> Smart Home</label>
                                <label><input type="radio" name="category" value="Tablets"> Tablets</label>
                                <label><input type="radio" name="category" value="Monitors"> Monitors</label>
                                <label><input type="radio" name="category" value="Storage"> Storage</label>
                                <label><input type="radio" name="category" value="Drones"> Drones</label>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h6>Price Range</h6>
                            <div class="filter-group">
                                <div class="price-range">
                                    <input type="range" class="form-range" id="priceRange" min="0" max="2000" value="1000">
                                    <div class="price-display">
                                        <span id="minPrice">$0</span> - <span id="maxPrice">$2000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h6>Brand</h6>
                            <div class="filter-group">
                                <label><input type="radio" name="brand" value="all" checked> All Brands</label>
                                <label><input type="radio" name="brand" value="TechSound"> TechSound</label>
                                <label><input type="radio" name="brand" value="TechWear"> TechWear</label>
                                <label><input type="radio" name="brand" value="PhotoPro"> PhotoPro</label>
                                <label><input type="radio" name="brand" value="GameTech"> GameTech</label>
                                <label><input type="radio" name="brand" value="ChargeTech"> ChargeTech</label>
                                <label><input type="radio" name="brand" value="SoundMax"> SoundMax</label>
                                <label><input type="radio" name="brand" value="ErgoTech"> ErgoTech</label>
                                <label><input type="radio" name="brand" value="TechTab"> TechTab</label>
                                <label><input type="radio" name="brand" value="HomeTech"> HomeTech</label>
                                <label><input type="radio" name="brand" value="DisplayPro"> DisplayPro</label>
                                <label><input type="radio" name="brand" value="StorageTech"> StorageTech</label>
                                <label><input type="radio" name="brand" value="StreamTech"> StreamTech</label>
                                <label><input type="radio" name="brand" value="PowerTech"> PowerTech</label>
                                <label><input type="radio" name="brand" value="VRTech"> VRTech</label>
                                <label><input type="radio" name="brand" value="SkyTech"> SkyTech</label>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h6>Rating</h6>
                            <div class="filter-group">
                                <label><input type="radio" name="rating" value="0" checked> All Ratings</label>
                                <label><input type="radio" name="rating" value="4"> 4+ Stars</label>
                                <label><input type="radio" name="rating" value="4.5"> 4.5+ Stars</label>
                                <label><input type="radio" name="rating" value="4.8"> 4.8+ Stars</label>
                            </div>
                            <h6>Availability</h6>
                            <div class="filter-group">
                                <label><input type="checkbox" name="inStock" checked> In Stock Only</label>
                            </div>
                        </div>
                    </div>
                    <div class="filter-actions">
                        <button class="btn btn-primary" id="applyFilters">Apply Filters</button>
                        <button class="btn btn-outline-secondary" id="clearFilters">Clear All</button>
                    </div>
                </div>
                
                <div class="search-results-header">
                    <div class="results-count">
                        <span id="resultsCount">0</span> products found
                    </div>
                    <div class="view-options">
                        <button class="btn btn-outline-secondary view-btn active" data-view="grid">
                            <i class="fas fa-th"></i>
                        </button>
                        <button class="btn btn-outline-secondary view-btn" data-view="list">
                            <i class="fas fa-list"></i>
                        </button>
                    </div>
                </div>
                
                <div class="search-results" id="searchResults">
                    <!-- Results will be populated here -->
                </div>
                
                <div class="pagination-container" id="paginationContainer">
                    <!-- Pagination will be populated here -->
                </div>
            </div>
        `;

        // Insert search interface into the shop page
        const shopContent = document.querySelector('.container-fluid.product');
        if (shopContent) {
            shopContent.insertAdjacentHTML('afterbegin', searchHTML);
        }
    }

    bindEvents() {
        // Search input events
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.performSearch(e.target.value);
        });

        document.getElementById('searchBtn').addEventListener('click', () => {
            const query = document.getElementById('searchInput').value;
            this.performSearch(query);
        });

        // Filter events
        document.getElementById('filterToggle').addEventListener('click', () => {
            const panel = document.getElementById('filtersPanel');
            panel.classList.toggle('show');
        });

        document.getElementById('applyFilters').addEventListener('click', () => {
            this.applyFilters();
        });

        document.getElementById('clearFilters').addEventListener('click', () => {
            this.clearFilters();
        });

        // Sort events
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.sortBy = e.target.value;
            this.performSearch(document.getElementById('searchInput').value);
        });

        // Price range events
        document.getElementById('priceRange').addEventListener('input', (e) => {
            const value = e.target.value;
            document.getElementById('maxPrice').textContent = `$${value}`;
        });

        // View toggle events
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentView = e.target.dataset.view;
                this.displayProducts(this.searchResults.length > 0 ? this.searchResults : this.products);
            });
        });
    }

    performSearch(query) {
        if (!query.trim()) {
            this.searchResults = this.products;
        } else {
            const searchTerms = query.toLowerCase().split(' ');
            this.searchResults = this.products.filter(product => {
                const searchableText = [
                    product.name,
                    product.description,
                    product.category,
                    product.brand,
                    ...product.tags
                ].join(' ').toLowerCase();

                return searchTerms.every(term => searchableText.includes(term));
            });
        }

        this.applyFilters();
    }

    applyFilters() {
        const category = document.querySelector('input[name="category"]:checked').value;
        const brand = document.querySelector('input[name="brand"]:checked').value;
        const rating = parseFloat(document.querySelector('input[name="rating"]:checked').value);
        const inStock = document.querySelector('input[name="inStock"]').checked;
        const maxPrice = parseInt(document.getElementById('priceRange').value);

        let filteredResults = [...this.searchResults];

        // Apply filters
        if (category !== 'all') {
            filteredResults = filteredResults.filter(product => product.category === category);
        }

        if (brand !== 'all') {
            filteredResults = filteredResults.filter(product => product.brand === brand);
        }

        if (rating > 0) {
            filteredResults = filteredResults.filter(product => product.rating >= rating);
        }

        if (inStock) {
            filteredResults = filteredResults.filter(product => product.inStock);
        }

        filteredResults = filteredResults.filter(product => product.price <= maxPrice);

        // Sort results
        this.sortResults(filteredResults);

        this.searchResults = filteredResults;
        this.currentPage = 1;
        this.displayProducts(filteredResults);
    }

    sortResults(results) {
        switch (this.sortBy) {
            case 'price-low':
                results.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                results.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                results.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                results.sort((a, b) => b.id - a.id);
                break;
            case 'name':
                results.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default: // relevance
                // Keep original order for relevance
                break;
        }
    }

    clearFilters() {
        document.querySelector('input[name="category"][value="all"]').checked = true;
        document.querySelector('input[name="brand"][value="all"]').checked = true;
        document.querySelector('input[name="rating"][value="0"]').checked = true;
        document.querySelector('input[name="inStock"]').checked = true;
        document.getElementById('priceRange').value = 2000;
        document.getElementById('maxPrice').textContent = '$2000';
        document.getElementById('searchInput').value = '';
        this.searchResults = this.products;
        this.currentPage = 1;
        this.displayProducts(this.products);
    }

    displayProducts(products) {
        const resultsContainer = document.getElementById('searchResults');
        const resultsCount = document.getElementById('resultsCount');
        const paginationContainer = document.getElementById('paginationContainer');

        // Update results count
        resultsCount.textContent = products.length;

        // Pagination
        const totalPages = Math.ceil(products.length / this.itemsPerPage);
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const paginatedProducts = products.slice(startIndex, endIndex);

        // Display products
        if (this.currentView === 'list') {
            resultsContainer.innerHTML = this.renderProductList(paginatedProducts);
        } else {
            resultsContainer.innerHTML = this.renderProductGrid(paginatedProducts);
        }

        // Display pagination
        this.renderPagination(paginationContainer, totalPages);
    }

    renderProductGrid(products) {
        return products.map(product => `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="product-item rounded wow fadeInUp">
                    <div class="product-item-inner border rounded">
                        <div class="product-item-inner-item">
                            <img src="${product.image}" class="img-fluid w-100 rounded-top" alt="${product.name}">
                            ${product.originalPrice > product.price ? '<div class="product-sale">Sale</div>' : ''}
                            ${product.stock < 10 ? '<div class="product-new">Low Stock</div>' : ''}
                            <div class="product-details">
                                <a href="#" class="quick-view" data-product-id="${product.id}">
                                    <i class="fa fa-eye fa-1x"></i>
                                </a>
                            </div>
                        </div>
                        <div class="p-4">
                            <h6 class="mb-2">${product.name}</h6>
                            <div class="d-flex justify-content-between">
                                <div class="d-flex align-items-center">
                                    <small class="text-muted me-2">${product.rating}</small>
                                    <div class="text-warning">
                                        ${this.renderStars(product.rating)}
                                    </div>
                                    <small class="text-muted ms-1">(${product.reviews})</small>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt-2">
                                <div>
                                    <span class="text-primary fw-bold">$${product.price}</span>
                                    ${product.originalPrice > product.price ? 
                                        `<small class="text-muted text-decoration-line-through ms-1">$${product.originalPrice}</small>` : ''
                                    }
                                </div>
                                <small class="text-muted">${product.stock} in stock</small>
                            </div>
                        </div>
                        <div class="product-item-add border border-top-0 rounded-bottom text-center p-4 pt-0">
                            <a href="#" class="btn btn-primary btn-sm me-2 add-to-cart" data-product-id="${product.id}">
                                <i class="fa fa-shopping-cart me-1"></i> Add to Cart
                            </a>
                            <a href="#" class="btn btn-outline-secondary btn-sm wishlist" data-product-id="${product.id}">
                                <i class="fa fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderProductList(products) {
        return products.map(product => `
            <div class="col-12 mb-3">
                <div class="product-item-list border rounded p-3">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
                        </div>
                        <div class="col-md-6">
                            <h6 class="mb-1">${product.name}</h6>
                            <p class="text-muted small mb-2">${product.description}</p>
                            <div class="d-flex align-items-center">
                                <div class="text-warning me-2">
                                    ${this.renderStars(product.rating)}
                                </div>
                                <small class="text-muted">${product.rating} (${product.reviews} reviews)</small>
                            </div>
                        </div>
                        <div class="col-md-2 text-center">
                            <div class="text-primary fw-bold">$${product.price}</div>
                            ${product.originalPrice > product.price ? 
                                `<small class="text-muted text-decoration-line-through">$${product.originalPrice}</small>` : ''
                            }
                            <div class="small text-muted">${product.stock} in stock</div>
                        </div>
                        <div class="col-md-2 text-end">
                            <a href="#" class="btn btn-primary btn-sm me-2 add-to-cart" data-product-id="${product.id}">
                                <i class="fa fa-shopping-cart me-1"></i> Add to Cart
                            </a>
                            <a href="#" class="btn btn-outline-secondary btn-sm wishlist" data-product-id="${product.id}">
                                <i class="fa fa-heart"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return '★'.repeat(fullStars) + 
               (hasHalfStar ? '☆' : '') + 
               '☆'.repeat(emptyStars);
    }

    renderPagination(container, totalPages) {
        if (totalPages <= 1) {
            container.innerHTML = '';
            return;
        }

        let paginationHTML = '<nav><ul class="pagination justify-content-center">';
        
        // Previous button
        paginationHTML += `
            <li class="page-item ${this.currentPage === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${this.currentPage - 1}">Previous</a>
            </li>
        `;

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= this.currentPage - 2 && i <= this.currentPage + 2)) {
                paginationHTML += `
                    <li class="page-item ${i === this.currentPage ? 'active' : ''}">
                        <a class="page-link" href="#" data-page="${i}">${i}</a>
                    </li>
                `;
            } else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
                paginationHTML += '<li class="page-item disabled"><span class="page-link">...</span></li>';
            }
        }

        // Next button
        paginationHTML += `
            <li class="page-item ${this.currentPage === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${this.currentPage + 1}">Next</a>
            </li>
        `;

        paginationHTML += '</ul></nav>';

        container.innerHTML = paginationHTML;

        // Bind pagination events
        container.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = parseInt(e.target.dataset.page);
                if (page && page !== this.currentPage) {
                    this.currentPage = page;
                    this.displayProducts(this.searchResults);
                }
            });
        });
    }

    // Public methods for external use
    searchProducts(query) {
        this.performSearch(query);
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }

    getProductsByCategory(category) {
        return this.products.filter(product => product.category === category);
    }
}

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.productSearch = new ProductSearch();
});

// Add search styles
const searchStyles = `
<style>
.search-container {
    margin-bottom: 2rem;
}

.search-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.search-input-container {
    display: flex;
    flex: 1;
    max-width: 500px;
}

.search-input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.search-btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.search-filters {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.search-filters-panel {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    display: none;
}

.search-filters-panel.show {
    display: block;
}

.filter-group {
    margin-bottom: 1rem;
}

.filter-group label {
    display: block;
    margin-bottom: 0.5rem;
    cursor: pointer;
}

.filter-group input[type="radio"],
.filter-group input[type="checkbox"] {
    margin-right: 0.5rem;
}

.price-range {
    margin-bottom: 1rem;
}

.price-display {
    text-align: center;
    font-weight: bold;
    color: #007bff;
}

.filter-actions {
    text-align: center;
    margin-top: 1rem;
}

.search-results-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.results-count {
    font-weight: bold;
    color: #666;
}

.view-options .btn {
    margin-left: 0.25rem;
}

.view-options .btn.active {
    background-color: #007bff;
    color: white;
}

.product-item-list {
    transition: all 0.3s ease;
}

.product-item-list:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.pagination-container {
    margin-top: 2rem;
}

@media (max-width: 768px) {
    .search-header {
        flex-direction: column;
        align-items: stretch;
    }
    
    .search-input-container {
        max-width: none;
    }
    
    .search-filters {
        justify-content: space-between;
    }
    
    .search-results-header {
        flex-direction: column;
        gap: 1rem;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', searchStyles);
