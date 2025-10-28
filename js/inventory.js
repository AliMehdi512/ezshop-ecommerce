/**
 * Inventory Management System
 * Features: Stock tracking, low stock alerts, inventory reports, supplier management
 */

class InventoryManager {
    constructor() {
        this.inventory = this.initializeInventory();
        this.suppliers = this.initializeSuppliers();
        this.stockAlerts = [];
        this.salesHistory = [];
        this.init();
    }

    initializeInventory() {
        return [
            {
                id: 1,
                productId: 1,
                sku: "TS-WH-001",
                name: "Wireless Bluetooth Headphones",
                category: "Audio",
                currentStock: 45,
                minStock: 10,
                maxStock: 100,
                reorderPoint: 15,
                cost: 120.00,
                sellingPrice: 199.99,
                supplier: "TechSound Inc",
                location: "Warehouse A - Shelf 12",
                lastUpdated: new Date(),
                status: "In Stock"
            },
            {
                id: 2,
                productId: 2,
                sku: "TW-SW-002",
                name: "Smart Watch Series 5",
                category: "Wearables",
                currentStock: 23,
                minStock: 5,
                maxStock: 50,
                reorderPoint: 8,
                cost: 180.00,
                sellingPrice: 299.99,
                supplier: "TechWear Corp",
                location: "Warehouse B - Shelf 5",
                lastUpdated: new Date(),
                status: "In Stock"
            },
            {
                id: 3,
                productId: 3,
                sku: "PP-4K-003",
                name: "4K Ultra HD Camera",
                category: "Cameras",
                currentStock: 12,
                minStock: 3,
                maxStock: 25,
                reorderPoint: 5,
                cost: 800.00,
                sellingPrice: 1299.99,
                supplier: "PhotoPro Ltd",
                location: "Warehouse A - Shelf 8",
                lastUpdated: new Date(),
                status: "Low Stock"
            },
            {
                id: 4,
                productId: 4,
                sku: "GT-KB-004",
                name: "Gaming Mechanical Keyboard",
                category: "Gaming",
                currentStock: 34,
                minStock: 8,
                maxStock: 75,
                reorderPoint: 12,
                cost: 80.00,
                sellingPrice: 149.99,
                supplier: "GameTech Solutions",
                location: "Warehouse C - Shelf 15",
                lastUpdated: new Date(),
                status: "In Stock"
            },
            {
                id: 5,
                productId: 5,
                sku: "CT-WC-005",
                name: "Wireless Charging Pad",
                category: "Accessories",
                currentStock: 67,
                minStock: 15,
                maxStock: 150,
                reorderPoint: 20,
                cost: 25.00,
                sellingPrice: 49.99,
                supplier: "ChargeTech Inc",
                location: "Warehouse A - Shelf 3",
                lastUpdated: new Date(),
                status: "In Stock"
            },
            {
                id: 6,
                productId: 6,
                sku: "SM-BS-006",
                name: "Bluetooth Speaker Pro",
                category: "Audio",
                currentStock: 28,
                minStock: 6,
                maxStock: 60,
                reorderPoint: 10,
                cost: 45.00,
                sellingPrice: 89.99,
                supplier: "SoundMax Audio",
                location: "Warehouse B - Shelf 9",
                lastUpdated: new Date(),
                status: "In Stock"
            },
            {
                id: 7,
                productId: 7,
                sku: "ET-LS-007",
                name: "Laptop Stand Adjustable",
                category: "Accessories",
                currentStock: 89,
                minStock: 20,
                maxStock: 200,
                reorderPoint: 30,
                cost: 18.00,
                sellingPrice: 39.99,
                supplier: "ErgoTech Designs",
                location: "Warehouse C - Shelf 2",
                lastUpdated: new Date(),
                status: "In Stock"
            },
            {
                id: 8,
                productId: 8,
                sku: "GT-GM-008",
                name: "Gaming Mouse RGB",
                category: "Gaming",
                currentStock: 41,
                minStock: 10,
                maxStock: 80,
                reorderPoint: 15,
                cost: 35.00,
                sellingPrice: 79.99,
                supplier: "GameTech Solutions",
                location: "Warehouse C - Shelf 18",
                lastUpdated: new Date(),
                status: "In Stock"
            },
            {
                id: 9,
                productId: 9,
                sku: "TT-TP-009",
                name: "Tablet Pro 12.9 inch",
                category: "Tablets",
                currentStock: 15,
                minStock: 3,
                maxStock: 30,
                reorderPoint: 5,
                cost: 500.00,
                sellingPrice: 799.99,
                supplier: "TechTab Industries",
                location: "Warehouse A - Shelf 1",
                lastUpdated: new Date(),
                status: "Low Stock"
            },
            {
                id: 10,
                productId: 10,
                sku: "HT-SH-010",
                name: "Smart Home Hub",
                category: "Smart Home",
                currentStock: 32,
                minStock: 8,
                maxStock: 60,
                reorderPoint: 12,
                cost: 120.00,
                sellingPrice: 199.99,
                supplier: "HomeTech Systems",
                location: "Warehouse B - Shelf 7",
                lastUpdated: new Date(),
                status: "In Stock"
            },
            {
                id: 11,
                productId: 11,
                sku: "TS-WE-011",
                name: "Wireless Earbuds Pro",
                category: "Audio",
                currentStock: 38,
                minStock: 8,
                maxStock: 70,
                reorderPoint: 12,
                cost: 90.00,
                sellingPrice: 179.99,
                supplier: "TechSound Inc",
                location: "Warehouse A - Shelf 13",
                lastUpdated: new Date(),
                status: "In Stock"
            },
            {
                id: 12,
                productId: 12,
                sku: "DP-M4K-012",
                name: "Monitor 27 inch 4K",
                category: "Monitors",
                currentStock: 19,
                minStock: 4,
                maxStock: 40,
                reorderPoint: 8,
                cost: 350.00,
                sellingPrice: 599.99,
                supplier: "DisplayPro Technologies",
                location: "Warehouse A - Shelf 6",
                lastUpdated: new Date(),
                status: "Low Stock"
            },
            {
                id: 13,
                productId: 13,
                sku: "ST-ESSD-013",
                name: "External SSD 1TB",
                category: "Storage",
                currentStock: 56,
                minStock: 12,
                maxStock: 120,
                reorderPoint: 20,
                cost: 70.00,
                sellingPrice: 129.99,
                supplier: "StorageTech Corp",
                location: "Warehouse C - Shelf 11",
                lastUpdated: new Date(),
                status: "In Stock"
            },
            {
                id: 14,
                productId: 14,
                sku: "ST-W4K-014",
                name: "Webcam 4K Streaming",
                category: "Cameras",
                currentStock: 24,
                minStock: 6,
                maxStock: 50,
                reorderPoint: 10,
                cost: 120.00,
                sellingPrice: 199.99,
                supplier: "StreamTech Media",
                location: "Warehouse B - Shelf 14",
                lastUpdated: new Date(),
                status: "In Stock"
            },
            {
                id: 15,
                productId: 15,
                sku: "PT-PB-015",
                name: "Power Bank 20000mAh",
                category: "Accessories",
                currentStock: 73,
                minStock: 15,
                maxStock: 150,
                reorderPoint: 25,
                cost: 30.00,
                sellingPrice: 59.99,
                supplier: "PowerTech Energy",
                location: "Warehouse C - Shelf 4",
                lastUpdated: new Date(),
                status: "In Stock"
            },
            {
                id: 16,
                productId: 16,
                sku: "VT-VR-016",
                name: "VR Headset Pro",
                category: "Gaming",
                currentStock: 17,
                minStock: 4,
                maxStock: 35,
                reorderPoint: 8,
                cost: 250.00,
                sellingPrice: 399.99,
                supplier: "VRTech Innovations",
                location: "Warehouse A - Shelf 20",
                lastUpdated: new Date(),
                status: "Low Stock"
            },
            {
                id: 17,
                productId: 17,
                sku: "HT-SLB-017",
                name: "Smart Light Bulbs Pack",
                category: "Smart Home",
                currentStock: 45,
                minStock: 10,
                maxStock: 90,
                reorderPoint: 15,
                cost: 40.00,
                sellingPrice: 79.99,
                supplier: "HomeTech Systems",
                location: "Warehouse B - Shelf 12",
                lastUpdated: new Date(),
                status: "In Stock"
            },
            {
                id: 18,
                productId: 18,
                sku: "ST-D4K-018",
                name: "Drone with 4K Camera",
                category: "Drones",
                currentStock: 8,
                minStock: 2,
                maxStock: 20,
                reorderPoint: 4,
                cost: 600.00,
                sellingPrice: 899.99,
                supplier: "SkyTech Aviation",
                location: "Warehouse A - Shelf 25",
                lastUpdated: new Date(),
                status: "Critical Stock"
            }
        ];
    }

    initializeSuppliers() {
        return [
            {
                id: 1,
                name: "TechSound Inc",
                contact: "John Smith",
                email: "john@techsound.com",
                phone: "+1-555-0123",
                address: "123 Audio St, Tech City, TC 12345",
                paymentTerms: "Net 30",
                rating: 4.8,
                status: "Active"
            },
            {
                id: 2,
                name: "TechWear Corp",
                contact: "Sarah Johnson",
                email: "sarah@techwear.com",
                phone: "+1-555-0124",
                address: "456 Wearable Ave, Tech City, TC 12346",
                paymentTerms: "Net 15",
                rating: 4.6,
                status: "Active"
            },
            {
                id: 3,
                name: "PhotoPro Ltd",
                contact: "Mike Davis",
                email: "mike@photopro.com",
                phone: "+1-555-0125",
                address: "789 Camera Blvd, Photo City, PC 54321",
                paymentTerms: "Net 45",
                rating: 4.9,
                status: "Active"
            },
            {
                id: 4,
                name: "GameTech Solutions",
                contact: "Alex Chen",
                email: "alex@gametech.com",
                phone: "+1-555-0126",
                address: "321 Gaming St, Game City, GC 67890",
                paymentTerms: "Net 30",
                rating: 4.7,
                status: "Active"
            },
            {
                id: 5,
                name: "ChargeTech Inc",
                contact: "Lisa Wang",
                email: "lisa@chargetech.com",
                phone: "+1-555-0127",
                address: "654 Power Rd, Energy City, EC 11111",
                paymentTerms: "Net 20",
                rating: 4.5,
                status: "Active"
            }
        ];
    }

    init() {
        this.checkStockAlerts();
        this.createInventoryInterface();
        this.bindEvents();
    }

    createInventoryInterface() {
        const inventoryHTML = `
            <div class="inventory-dashboard">
                <div class="inventory-header">
                    <h2>Inventory Management</h2>
                    <div class="inventory-actions">
                        <button class="btn btn-primary" id="addProductBtn">
                            <i class="fas fa-plus"></i> Add Product
                        </button>
                        <button class="btn btn-success" id="reorderBtn">
                            <i class="fas fa-shopping-cart"></i> Reorder Items
                        </button>
                        <button class="btn btn-info" id="exportBtn">
                            <i class="fas fa-download"></i> Export Report
                        </button>
                    </div>
                </div>

                <div class="inventory-stats">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon">
                                    <i class="fas fa-boxes"></i>
                                </div>
                                <div class="stat-content">
                                    <h3 id="totalProducts">0</h3>
                                    <p>Total Products</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon">
                                    <i class="fas fa-exclamation-triangle"></i>
                                </div>
                                <div class="stat-content">
                                    <h3 id="lowStockCount">0</h3>
                                    <p>Low Stock Items</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon">
                                    <i class="fas fa-dollar-sign"></i>
                                </div>
                                <div class="stat-content">
                                    <h3 id="totalValue">$0</h3>
                                    <p>Total Inventory Value</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon">
                                    <i class="fas fa-truck"></i>
                                </div>
                                <div class="stat-content">
                                    <h3 id="pendingOrders">0</h3>
                                    <p>Pending Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="inventory-filters">
                    <div class="row">
                        <div class="col-md-3">
                            <select class="form-select" id="categoryFilter">
                                <option value="">All Categories</option>
                                <option value="Audio">Audio</option>
                                <option value="Gaming">Gaming</option>
                                <option value="Cameras">Cameras</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Wearables">Wearables</option>
                                <option value="Smart Home">Smart Home</option>
                                <option value="Tablets">Tablets</option>
                                <option value="Monitors">Monitors</option>
                                <option value="Storage">Storage</option>
                                <option value="Drones">Drones</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-select" id="statusFilter">
                                <option value="">All Status</option>
                                <option value="In Stock">In Stock</option>
                                <option value="Low Stock">Low Stock</option>
                                <option value="Critical Stock">Critical Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control" id="searchInventory" placeholder="Search products...">
                        </div>
                        <div class="col-md-3">
                            <button class="btn btn-outline-primary w-100" id="applyFilters">
                                <i class="fas fa-filter"></i> Apply Filters
                            </button>
                        </div>
                    </div>
                </div>

                <div class="inventory-table-container">
                    <table class="table table-striped inventory-table">
                        <thead>
                            <tr>
                                <th>SKU</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Current Stock</th>
                                <th>Min Stock</th>
                                <th>Status</th>
                                <th>Cost</th>
                                <th>Selling Price</th>
                                <th>Supplier</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="inventoryTableBody">
                            <!-- Inventory data will be populated here -->
                        </tbody>
                    </table>
                </div>

                <div class="inventory-pagination">
                    <!-- Pagination will be populated here -->
                </div>
            </div>

            <!-- Add/Edit Product Modal -->
            <div class="modal fade" id="productModal" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="productModalTitle">Add Product</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form id="productForm">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">Product Name</label>
                                            <input type="text" class="form-control" id="productName" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">SKU</label>
                                            <input type="text" class="form-control" id="productSku" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">Category</label>
                                            <select class="form-select" id="productCategory" required>
                                                <option value="">Select Category</option>
                                                <option value="Audio">Audio</option>
                                                <option value="Gaming">Gaming</option>
                                                <option value="Cameras">Cameras</option>
                                                <option value="Accessories">Accessories</option>
                                                <option value="Wearables">Wearables</option>
                                                <option value="Smart Home">Smart Home</option>
                                                <option value="Tablets">Tablets</option>
                                                <option value="Monitors">Monitors</option>
                                                <option value="Storage">Storage</option>
                                                <option value="Drones">Drones</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">Supplier</label>
                                            <select class="form-select" id="productSupplier" required>
                                                <option value="">Select Supplier</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label">Current Stock</label>
                                            <input type="number" class="form-control" id="currentStock" min="0" required>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label">Min Stock</label>
                                            <input type="number" class="form-control" id="minStock" min="0" required>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label">Max Stock</label>
                                            <input type="number" class="form-control" id="maxStock" min="0" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">Cost Price</label>
                                            <input type="number" class="form-control" id="costPrice" step="0.01" min="0" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label">Selling Price</label>
                                            <input type="number" class="form-control" id="sellingPrice" step="0.01" min="0" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Location</label>
                                    <input type="text" class="form-control" id="productLocation" placeholder="e.g., Warehouse A - Shelf 12">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" id="saveProduct">Save Product</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stock Alert Modal -->
            <div class="modal fade" id="stockAlertModal" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Stock Alerts</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div id="stockAlertsList">
                                <!-- Stock alerts will be populated here -->
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" id="createReorder">Create Reorder</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Insert inventory interface into the admin panel
        const adminPanel = document.querySelector('.admin-panel') || document.body;
        adminPanel.insertAdjacentHTML('beforeend', inventoryHTML);
    }

    bindEvents() {
        // Filter events
        document.getElementById('applyFilters')?.addEventListener('click', () => {
            this.applyFilters();
        });

        document.getElementById('searchInventory')?.addEventListener('input', (e) => {
            this.searchInventory(e.target.value);
        });

        // Modal events
        document.getElementById('addProductBtn')?.addEventListener('click', () => {
            this.openProductModal();
        });

        document.getElementById('saveProduct')?.addEventListener('click', () => {
            this.saveProduct();
        });

        document.getElementById('reorderBtn')?.addEventListener('click', () => {
            this.showStockAlerts();
        });

        document.getElementById('exportBtn')?.addEventListener('click', () => {
            this.exportInventoryReport();
        });

        // Populate supplier dropdown
        this.populateSupplierDropdown();
    }

    checkStockAlerts() {
        this.stockAlerts = this.inventory.filter(item => 
            item.currentStock <= item.reorderPoint
        );

        // Update status based on stock levels
        this.inventory.forEach(item => {
            if (item.currentStock === 0) {
                item.status = "Out of Stock";
            } else if (item.currentStock <= item.minStock) {
                item.status = "Critical Stock";
            } else if (item.currentStock <= item.reorderPoint) {
                item.status = "Low Stock";
            } else {
                item.status = "In Stock";
            }
        });
    }

    updateInventoryStats() {
        const totalProducts = this.inventory.length;
        const lowStockCount = this.inventory.filter(item => 
            item.currentStock <= item.reorderPoint
        ).length;
        const totalValue = this.inventory.reduce((sum, item) => 
            sum + (item.currentStock * item.cost), 0
        );

        document.getElementById('totalProducts').textContent = totalProducts;
        document.getElementById('lowStockCount').textContent = lowStockCount;
        document.getElementById('totalValue').textContent = `$${totalValue.toFixed(2)}`;
        document.getElementById('pendingOrders').textContent = this.stockAlerts.length;
    }

    displayInventory(products = this.inventory) {
        const tbody = document.getElementById('inventoryTableBody');
        if (!tbody) return;

        tbody.innerHTML = products.map(item => `
            <tr>
                <td>${item.sku}</td>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>
                    <span class="badge ${this.getStockBadgeClass(item.currentStock, item.reorderPoint)}">
                        ${item.currentStock}
                    </span>
                </td>
                <td>${item.minStock}</td>
                <td>
                    <span class="badge ${this.getStatusBadgeClass(item.status)}">
                        ${item.status}
                    </span>
                </td>
                <td>$${item.cost.toFixed(2)}</td>
                <td>$${item.sellingPrice.toFixed(2)}</td>
                <td>${item.supplier}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" onclick="inventoryManager.editProduct(${item.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-success" onclick="inventoryManager.adjustStock(${item.id})">
                        <i class="fas fa-plus-minus"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-info" onclick="inventoryManager.viewHistory(${item.id})">
                        <i class="fas fa-history"></i>
                    </button>
                </td>
            </tr>
        `).join('');

        this.updateInventoryStats();
    }

    getStockBadgeClass(currentStock, reorderPoint) {
        if (currentStock === 0) return 'bg-danger';
        if (currentStock <= reorderPoint) return 'bg-warning';
        return 'bg-success';
    }

    getStatusBadgeClass(status) {
        switch (status) {
            case 'In Stock': return 'bg-success';
            case 'Low Stock': return 'bg-warning';
            case 'Critical Stock': return 'bg-danger';
            case 'Out of Stock': return 'bg-dark';
            default: return 'bg-secondary';
        }
    }

    applyFilters() {
        const category = document.getElementById('categoryFilter').value;
        const status = document.getElementById('statusFilter').value;
        const search = document.getElementById('searchInventory').value.toLowerCase();

        let filtered = this.inventory;

        if (category) {
            filtered = filtered.filter(item => item.category === category);
        }

        if (status) {
            filtered = filtered.filter(item => item.status === status);
        }

        if (search) {
            filtered = filtered.filter(item => 
                item.name.toLowerCase().includes(search) ||
                item.sku.toLowerCase().includes(search) ||
                item.supplier.toLowerCase().includes(search)
            );
        }

        this.displayInventory(filtered);
    }

    searchInventory(query) {
        if (!query.trim()) {
            this.displayInventory();
            return;
        }

        const filtered = this.inventory.filter(item => 
            item.name.toLowerCase().includes(query) ||
            item.sku.toLowerCase().includes(query) ||
            item.supplier.toLowerCase().includes(query)
        );

        this.displayInventory(filtered);
    }

    openProductModal(productId = null) {
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        const title = document.getElementById('productModalTitle');
        const form = document.getElementById('productForm');

        if (productId) {
            const product = this.inventory.find(item => item.id === productId);
            title.textContent = 'Edit Product';
            this.populateProductForm(product);
        } else {
            title.textContent = 'Add Product';
            form.reset();
        }

        modal.show();
    }

    populateProductForm(product) {
        document.getElementById('productName').value = product.name;
        document.getElementById('productSku').value = product.sku;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productSupplier').value = product.supplier;
        document.getElementById('currentStock').value = product.currentStock;
        document.getElementById('minStock').value = product.minStock;
        document.getElementById('maxStock').value = product.maxStock;
        document.getElementById('costPrice').value = product.cost;
        document.getElementById('sellingPrice').value = product.sellingPrice;
        document.getElementById('productLocation').value = product.location;
    }

    saveProduct() {
        const form = document.getElementById('productForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const productData = {
            name: document.getElementById('productName').value,
            sku: document.getElementById('productSku').value,
            category: document.getElementById('productCategory').value,
            supplier: document.getElementById('productSupplier').value,
            currentStock: parseInt(document.getElementById('currentStock').value),
            minStock: parseInt(document.getElementById('minStock').value),
            maxStock: parseInt(document.getElementById('maxStock').value),
            cost: parseFloat(document.getElementById('costPrice').value),
            sellingPrice: parseFloat(document.getElementById('sellingPrice').value),
            location: document.getElementById('productLocation').value
        };

        // Check if SKU already exists
        const existingProduct = this.inventory.find(item => 
            item.sku === productData.sku && item.id !== this.editingProductId
        );

        if (existingProduct) {
            alert('SKU already exists. Please use a different SKU.');
            return;
        }

        if (this.editingProductId) {
            // Update existing product
            const index = this.inventory.findIndex(item => item.id === this.editingProductId);
            this.inventory[index] = { ...this.inventory[index], ...productData };
        } else {
            // Add new product
            const newProduct = {
                id: Math.max(...this.inventory.map(item => item.id)) + 1,
                productId: Math.max(...this.inventory.map(item => item.productId)) + 1,
                ...productData,
                reorderPoint: Math.ceil(productData.minStock * 1.5),
                lastUpdated: new Date(),
                status: productData.currentStock > productData.minStock ? 'In Stock' : 'Low Stock'
            };
            this.inventory.push(newProduct);
        }

        this.checkStockAlerts();
        this.displayInventory();
        bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
        form.reset();
        this.editingProductId = null;
    }

    editProduct(productId) {
        this.editingProductId = productId;
        this.openProductModal(productId);
    }

    adjustStock(productId) {
        const product = this.inventory.find(item => item.id === productId);
        const adjustment = prompt(`Current stock: ${product.currentStock}\nEnter adjustment (+/-):`);
        
        if (adjustment !== null) {
            const newStock = product.currentStock + parseInt(adjustment);
            if (newStock >= 0) {
                product.currentStock = newStock;
                product.lastUpdated = new Date();
                this.checkStockAlerts();
                this.displayInventory();
                
                // Log the adjustment
                this.logStockAdjustment(productId, parseInt(adjustment), newStock);
            } else {
                alert('Stock cannot be negative.');
            }
        }
    }

    logStockAdjustment(productId, adjustment, newStock) {
        const product = this.inventory.find(item => item.id === productId);
        const logEntry = {
            id: Date.now(),
            productId: productId,
            productName: product.name,
            adjustment: adjustment,
            newStock: newStock,
            timestamp: new Date(),
            type: 'manual_adjustment'
        };

        this.salesHistory.push(logEntry);
    }

    showStockAlerts() {
        const modal = new bootstrap.Modal(document.getElementById('stockAlertModal'));
        const alertsList = document.getElementById('stockAlertsList');

        if (this.stockAlerts.length === 0) {
            alertsList.innerHTML = '<p class="text-success">No stock alerts at this time.</p>';
        } else {
            alertsList.innerHTML = this.stockAlerts.map(alert => `
                <div class="alert alert-warning d-flex justify-content-between align-items-center">
                    <div>
                        <strong>${alert.name}</strong> (${alert.sku})<br>
                        <small>Current: ${alert.currentStock} | Min: ${alert.minStock} | Reorder: ${alert.reorderPoint}</small>
                    </div>
                    <div>
                        <input type="number" class="form-control form-control-sm d-inline-block" 
                               style="width: 80px;" id="reorderQty_${alert.id}" 
                               value="${alert.maxStock - alert.currentStock}" min="1">
                    </div>
                </div>
            `).join('');
        }

        modal.show();
    }

    createReorder() {
        const reorderItems = [];
        
        this.stockAlerts.forEach(alert => {
            const qtyInput = document.getElementById(`reorderQty_${alert.id}`);
            if (qtyInput && qtyInput.value > 0) {
                reorderItems.push({
                    product: alert,
                    quantity: parseInt(qtyInput.value)
                });
            }
        });

        if (reorderItems.length === 0) {
            alert('Please specify quantities for reorder items.');
            return;
        }

        // Generate reorder report
        this.generateReorderReport(reorderItems);
        bootstrap.Modal.getInstance(document.getElementById('stockAlertModal')).hide();
    }

    generateReorderReport(reorderItems) {
        let report = 'REORDER REPORT\n';
        report += 'Generated: ' + new Date().toLocaleString() + '\n\n';
        
        let totalCost = 0;
        
        reorderItems.forEach(item => {
            const itemCost = item.product.cost * item.quantity;
            totalCost += itemCost;
            
            report += `Product: ${item.product.name}\n`;
            report += `SKU: ${item.product.sku}\n`;
            report += `Supplier: ${item.product.supplier}\n`;
            report += `Quantity: ${item.quantity}\n`;
            report += `Unit Cost: $${item.product.cost}\n`;
            report += `Total Cost: $${itemCost.toFixed(2)}\n\n`;
        });
        
        report += `TOTAL REORDER COST: $${totalCost.toFixed(2)}\n`;
        
        // Create and download file
        const blob = new Blob([report], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `reorder_report_${new Date().toISOString().split('T')[0]}.txt`;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    exportInventoryReport() {
        const report = this.generateInventoryReport();
        
        // Create and download CSV file
        const blob = new Blob([report], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `inventory_report_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    generateInventoryReport() {
        let csv = 'SKU,Product Name,Category,Current Stock,Min Stock,Max Stock,Status,Cost,Selling Price,Supplier,Location,Last Updated\n';
        
        this.inventory.forEach(item => {
            csv += `"${item.sku}","${item.name}","${item.category}",${item.currentStock},${item.minStock},${item.maxStock},"${item.status}",${item.cost},${item.sellingPrice},"${item.supplier}","${item.location}","${item.lastUpdated.toLocaleDateString()}"\n`;
        });
        
        return csv;
    }

    populateSupplierDropdown() {
        const dropdown = document.getElementById('productSupplier');
        if (!dropdown) return;

        dropdown.innerHTML = '<option value="">Select Supplier</option>' +
            this.suppliers.map(supplier => 
                `<option value="${supplier.name}">${supplier.name}</option>`
            ).join('');
    }

    // Public methods for external use
    updateStock(productId, quantity) {
        const product = this.inventory.find(item => item.productId === productId);
        if (product) {
            product.currentStock = Math.max(0, product.currentStock - quantity);
            product.lastUpdated = new Date();
            this.checkStockAlerts();
            this.displayInventory();
        }
    }

    getProductStock(productId) {
        const product = this.inventory.find(item => item.productId === productId);
        return product ? product.currentStock : 0;
    }

    isInStock(productId) {
        const product = this.inventory.find(item => item.productId === productId);
        return product ? product.currentStock > 0 : false;
    }
}

// Initialize inventory manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.inventoryManager = new InventoryManager();
});

// Add inventory styles
const inventoryStyles = `
<style>
.inventory-dashboard {
    padding: 2rem;
    background: #f8f9fa;
    min-height: 100vh;
}

.inventory-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.inventory-actions {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.inventory-stats {
    margin-bottom: 2rem;
}

.stat-card {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    gap: 1rem;
}

.stat-icon {
    font-size: 2rem;
    color: #007bff;
}

.stat-content h3 {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
    color: #333;
}

.stat-content p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
}

.inventory-filters {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
}

.inventory-table-container {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
}

.inventory-table {
    margin: 0;
}

.inventory-table th {
    background: #f8f9fa;
    border-bottom: 2px solid #dee2e6;
    font-weight: 600;
    color: #495057;
}

.inventory-table td {
    vertical-align: middle;
}

.badge {
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
}

.inventory-pagination {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
}

@media (max-width: 768px) {
    .inventory-header {
        flex-direction: column;
        align-items: stretch;
    }
    
    .inventory-actions {
        justify-content: center;
    }
    
    .stat-card {
        flex-direction: column;
        text-align: center;
    }
    
    .inventory-table-container {
        overflow-x: auto;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', inventoryStyles);
