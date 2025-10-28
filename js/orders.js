/**
 * Order Management System
 * Features: Order processing, status tracking, customer management, payment processing
 */

class OrderManager {
    constructor() {
        this.orders = this.initializeOrders();
        this.customers = this.initializeCustomers();
        this.orderStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned'];
        this.paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer', 'Cash on Delivery'];
        this.currentOrderId = 1001;
        this.init();
    }

    initializeOrders() {
        return [
            {
                id: 1001,
                orderNumber: 'ORD-2024-001',
                customerId: 1,
                customerName: 'John Smith',
                customerEmail: 'john.smith@email.com',
                customerPhone: '+1-555-0123',
                orderDate: new Date('2024-01-15'),
                status: 'Delivered',
                paymentStatus: 'Paid',
                paymentMethod: 'Credit Card',
                subtotal: 299.99,
                tax: 24.00,
                shipping: 9.99,
                total: 333.98,
                shippingAddress: {
                    street: '123 Main St',
                    city: 'New York',
                    state: 'NY',
                    zipCode: '10001',
                    country: 'USA'
                },
                billingAddress: {
                    street: '123 Main St',
                    city: 'New York',
                    state: 'NY',
                    zipCode: '10001',
                    country: 'USA'
                },
                items: [
                    {
                        productId: 2,
                        name: 'Smart Watch Series 5',
                        sku: 'TW-SW-002',
                        quantity: 1,
                        price: 299.99,
                        total: 299.99
                    }
                ],
                trackingNumber: 'TRK123456789',
                estimatedDelivery: new Date('2024-01-20'),
                actualDelivery: new Date('2024-01-19'),
                notes: 'Customer requested morning delivery'
            },
            {
                id: 1002,
                orderNumber: 'ORD-2024-002',
                customerId: 2,
                customerName: 'Sarah Johnson',
                customerEmail: 'sarah.j@email.com',
                customerPhone: '+1-555-0124',
                orderDate: new Date('2024-01-16'),
                status: 'Shipped',
                paymentStatus: 'Paid',
                paymentMethod: 'PayPal',
                subtotal: 449.97,
                tax: 36.00,
                shipping: 0.00,
                total: 485.97,
                shippingAddress: {
                    street: '456 Oak Ave',
                    city: 'Los Angeles',
                    state: 'CA',
                    zipCode: '90210',
                    country: 'USA'
                },
                billingAddress: {
                    street: '456 Oak Ave',
                    city: 'Los Angeles',
                    state: 'CA',
                    zipCode: '90210',
                    country: 'USA'
                },
                items: [
                    {
                        productId: 1,
                        name: 'Wireless Bluetooth Headphones',
                        sku: 'TS-WH-001',
                        quantity: 1,
                        price: 199.99,
                        total: 199.99
                    },
                    {
                        productId: 5,
                        name: 'Wireless Charging Pad',
                        sku: 'CT-WC-005',
                        quantity: 2,
                        price: 49.99,
                        total: 99.98
                    },
                    {
                        productId: 6,
                        name: 'Bluetooth Speaker Pro',
                        sku: 'SM-BS-006',
                        quantity: 1,
                        price: 89.99,
                        total: 89.99
                    }
                ],
                trackingNumber: 'TRK987654321',
                estimatedDelivery: new Date('2024-01-22'),
                actualDelivery: null,
                notes: 'Free shipping applied'
            },
            {
                id: 1003,
                orderNumber: 'ORD-2024-003',
                customerId: 3,
                customerName: 'Mike Davis',
                customerEmail: 'mike.davis@email.com',
                customerPhone: '+1-555-0125',
                orderDate: new Date('2024-01-17'),
                status: 'Processing',
                paymentStatus: 'Pending',
                paymentMethod: 'Bank Transfer',
                subtotal: 1299.99,
                tax: 104.00,
                shipping: 19.99,
                total: 1423.98,
                shippingAddress: {
                    street: '789 Pine St',
                    city: 'Chicago',
                    state: 'IL',
                    zipCode: '60601',
                    country: 'USA'
                },
                billingAddress: {
                    street: '789 Pine St',
                    city: 'Chicago',
                    state: 'IL',
                    zipCode: '60601',
                    country: 'USA'
                },
                items: [
                    {
                        productId: 3,
                        name: '4K Ultra HD Camera',
                        sku: 'PP-4K-003',
                        quantity: 1,
                        price: 1299.99,
                        total: 1299.99
                    }
                ],
                trackingNumber: null,
                estimatedDelivery: new Date('2024-01-25'),
                actualDelivery: null,
                notes: 'High-value item - signature required'
            },
            {
                id: 1004,
                orderNumber: 'ORD-2024-004',
                customerId: 4,
                customerName: 'Alex Chen',
                customerEmail: 'alex.chen@email.com',
                customerPhone: '+1-555-0126',
                orderDate: new Date('2024-01-18'),
                status: 'Pending',
                paymentStatus: 'Pending',
                paymentMethod: 'Credit Card',
                subtotal: 229.98,
                tax: 18.40,
                shipping: 9.99,
                total: 258.37,
                shippingAddress: {
                    street: '321 Elm St',
                    city: 'Houston',
                    state: 'TX',
                    zipCode: '77001',
                    country: 'USA'
                },
                billingAddress: {
                    street: '321 Elm St',
                    city: 'Houston',
                    state: 'TX',
                    zipCode: '77001',
                    country: 'USA'
                },
                items: [
                    {
                        productId: 4,
                        name: 'Gaming Mechanical Keyboard',
                        sku: 'GT-KB-004',
                        quantity: 1,
                        price: 149.99,
                        total: 149.99
                    },
                    {
                        productId: 8,
                        name: 'Gaming Mouse RGB',
                        sku: 'GT-GM-008',
                        quantity: 1,
                        price: 79.99,
                        total: 79.99
                    }
                ],
                trackingNumber: null,
                estimatedDelivery: new Date('2024-01-24'),
                actualDelivery: null,
                notes: 'Gaming bundle order'
            },
            {
                id: 1005,
                orderNumber: 'ORD-2024-005',
                customerId: 5,
                customerName: 'Lisa Wang',
                customerEmail: 'lisa.wang@email.com',
                customerPhone: '+1-555-0127',
                orderDate: new Date('2024-01-19'),
                status: 'Cancelled',
                paymentStatus: 'Refunded',
                paymentMethod: 'PayPal',
                subtotal: 199.99,
                tax: 16.00,
                shipping: 9.99,
                total: 225.98,
                shippingAddress: {
                    street: '654 Maple Dr',
                    city: 'Phoenix',
                    state: 'AZ',
                    zipCode: '85001',
                    country: 'USA'
                },
                billingAddress: {
                    street: '654 Maple Dr',
                    city: 'Phoenix',
                    state: 'AZ',
                    zipCode: '85001',
                    country: 'USA'
                },
                items: [
                    {
                        productId: 10,
                        name: 'Smart Home Hub',
                        sku: 'HT-SH-010',
                        quantity: 1,
                        price: 199.99,
                        total: 199.99
                    }
                ],
                trackingNumber: null,
                estimatedDelivery: new Date('2024-01-23'),
                actualDelivery: null,
                notes: 'Customer requested cancellation - product not compatible'
            }
        ];
    }

    initializeCustomers() {
        return [
            {
                id: 1,
                name: 'John Smith',
                email: 'john.smith@email.com',
                phone: '+1-555-0123',
                address: {
                    street: '123 Main St',
                    city: 'New York',
                    state: 'NY',
                    zipCode: '10001',
                    country: 'USA'
                },
                registrationDate: new Date('2023-12-01'),
                totalOrders: 3,
                totalSpent: 899.97,
                status: 'Active'
            },
            {
                id: 2,
                name: 'Sarah Johnson',
                email: 'sarah.j@email.com',
                phone: '+1-555-0124',
                address: {
                    street: '456 Oak Ave',
                    city: 'Los Angeles',
                    state: 'CA',
                    zipCode: '90210',
                    country: 'USA'
                },
                registrationDate: new Date('2023-11-15'),
                totalOrders: 5,
                totalSpent: 1245.50,
                status: 'Active'
            },
            {
                id: 3,
                name: 'Mike Davis',
                email: 'mike.davis@email.com',
                phone: '+1-555-0125',
                address: {
                    street: '789 Pine St',
                    city: 'Chicago',
                    state: 'IL',
                    zipCode: '60601',
                    country: 'USA'
                },
                registrationDate: new Date('2024-01-01'),
                totalOrders: 1,
                totalSpent: 1423.98,
                status: 'Active'
            },
            {
                id: 4,
                name: 'Alex Chen',
                email: 'alex.chen@email.com',
                phone: '+1-555-0126',
                address: {
                    street: '321 Elm St',
                    city: 'Houston',
                    state: 'TX',
                    zipCode: '77001',
                    country: 'USA'
                },
                registrationDate: new Date('2023-10-20'),
                totalOrders: 2,
                totalSpent: 456.75,
                status: 'Active'
            },
            {
                id: 5,
                name: 'Lisa Wang',
                email: 'lisa.wang@email.com',
                phone: '+1-555-0127',
                address: {
                    street: '654 Maple Dr',
                    city: 'Phoenix',
                    state: 'AZ',
                    zipCode: '85001',
                    country: 'USA'
                },
                registrationDate: new Date('2023-09-10'),
                totalOrders: 4,
                totalSpent: 678.90,
                status: 'Active'
            }
        ];
    }

    init() {
        this.createOrderInterface();
        this.bindEvents();
        this.displayOrders();
        this.updateOrderStats();
    }

    createOrderInterface() {
        const orderHTML = `
            <div class="order-dashboard">
                <div class="order-header">
                    <h2>Order Management</h2>
                    <div class="order-actions">
                        <button class="btn btn-primary" id="createOrderBtn">
                            <i class="fas fa-plus"></i> Create Order
                        </button>
                        <button class="btn btn-success" id="exportOrdersBtn">
                            <i class="fas fa-download"></i> Export Orders
                        </button>
                        <button class="btn btn-info" id="orderReportBtn">
                            <i class="fas fa-chart-bar"></i> Order Report
                        </button>
                    </div>
                </div>

                <div class="order-stats">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon">
                                    <i class="fas fa-shopping-cart"></i>
                                </div>
                                <div class="stat-content">
                                    <h3 id="totalOrders">0</h3>
                                    <p>Total Orders</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div class="stat-content">
                                    <h3 id="pendingOrders">0</h3>
                                    <p>Pending Orders</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon">
                                    <i class="fas fa-truck"></i>
                                </div>
                                <div class="stat-content">
                                    <h3 id="shippedOrders">0</h3>
                                    <p>Shipped Orders</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="stat-card">
                                <div class="stat-icon">
                                    <i class="fas fa-dollar-sign"></i>
                                </div>
                                <div class="stat-content">
                                    <h3 id="totalRevenue">$0</h3>
                                    <p>Total Revenue</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="order-filters">
                    <div class="row">
                        <div class="col-md-3">
                            <select class="form-select" id="statusFilter">
                                <option value="">All Status</option>
                                <option value="Pending">Pending</option>
                                <option value="Processing">Processing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                                <option value="Returned">Returned</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <select class="form-select" id="paymentStatusFilter">
                                <option value="">All Payment Status</option>
                                <option value="Paid">Paid</option>
                                <option value="Pending">Pending</option>
                                <option value="Failed">Failed</option>
                                <option value="Refunded">Refunded</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <input type="date" class="form-control" id="dateFilter" placeholder="Filter by date">
                        </div>
                        <div class="col-md-3">
                            <input type="text" class="form-control" id="searchOrders" placeholder="Search orders...">
                        </div>
                    </div>
                </div>

                <div class="order-table-container">
                    <table class="table table-striped order-table">
                        <thead>
                            <tr>
                                <th>Order #</th>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Payment</th>
                                <th>Total</th>
                                <th>Tracking</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="orderTableBody">
                            <!-- Order data will be populated here -->
                        </tbody>
                    </table>
                </div>

                <div class="order-pagination">
                    <!-- Pagination will be populated here -->
                </div>
            </div>

            <!-- Order Details Modal -->
            <div class="modal fade" id="orderDetailsModal" tabindex="-1">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Order Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body" id="orderDetailsContent">
                            <!-- Order details will be populated here -->
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" id="updateOrderStatus">Update Status</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Create Order Modal -->
            <div class="modal fade" id="createOrderModal" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Create New Order</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form id="createOrderForm">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h6>Customer Information</h6>
                                        <div class="mb-3">
                                            <label class="form-label">Customer</label>
                                            <select class="form-select" id="orderCustomer" required>
                                                <option value="">Select Customer</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Email</label>
                                            <input type="email" class="form-control" id="orderEmail" required>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Phone</label>
                                            <input type="tel" class="form-control" id="orderPhone" required>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h6>Order Information</h6>
                                        <div class="mb-3">
                                            <label class="form-label">Payment Method</label>
                                            <select class="form-select" id="orderPaymentMethod" required>
                                                <option value="">Select Payment Method</option>
                                                <option value="Credit Card">Credit Card</option>
                                                <option value="PayPal">PayPal</option>
                                                <option value="Bank Transfer">Bank Transfer</option>
                                                <option value="Cash on Delivery">Cash on Delivery</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Status</label>
                                            <select class="form-select" id="orderStatus">
                                                <option value="Pending">Pending</option>
                                                <option value="Processing">Processing</option>
                                                <option value="Shipped">Shipped</option>
                                                <option value="Delivered">Delivered</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Notes</label>
                                            <textarea class="form-control" id="orderNotes" rows="3"></textarea>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-md-6">
                                        <h6>Shipping Address</h6>
                                        <div class="mb-3">
                                            <label class="form-label">Street</label>
                                            <input type="text" class="form-control" id="shippingStreet" required>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">City</label>
                                                    <input type="text" class="form-control" id="shippingCity" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">State</label>
                                                    <input type="text" class="form-control" id="shippingState" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">ZIP Code</label>
                                                    <input type="text" class="form-control" id="shippingZip" required>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Country</label>
                                                    <input type="text" class="form-control" id="shippingCountry" value="USA" required>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h6>Billing Address</h6>
                                        <div class="form-check mb-3">
                                            <input class="form-check-input" type="checkbox" id="sameAsShipping" checked>
                                            <label class="form-check-label" for="sameAsShipping">
                                                Same as shipping address
                                            </label>
                                        </div>
                                        <div id="billingAddressFields">
                                            <div class="mb-3">
                                                <label class="form-label">Street</label>
                                                <input type="text" class="form-control" id="billingStreet">
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">City</label>
                                                        <input type="text" class="form-control" id="billingCity">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">State</label>
                                                        <input type="text" class="form-control" id="billingState">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">ZIP Code</label>
                                                        <input type="text" class="form-control" id="billingZip">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label class="form-label">Country</label>
                                                        <input type="text" class="form-control" id="billingCountry" value="USA">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="order-items-section">
                                    <h6>Order Items</h6>
                                    <div class="row mb-3">
                                        <div class="col-md-6">
                                            <select class="form-select" id="productSelect">
                                                <option value="">Select Product</option>
                                            </select>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="number" class="form-control" id="itemQuantity" placeholder="Qty" min="1" value="1">
                                        </div>
                                        <div class="col-md-2">
                                            <input type="number" class="form-control" id="itemPrice" placeholder="Price" step="0.01" readonly>
                                        </div>
                                        <div class="col-md-2">
                                            <button type="button" class="btn btn-primary w-100" id="addItemBtn">Add Item</button>
                                        </div>
                                    </div>
                                    <div class="order-items-list" id="orderItemsList">
                                        <!-- Order items will be populated here -->
                                    </div>
                                    <div class="order-totals">
                                        <div class="row">
                                            <div class="col-md-6"></div>
                                            <div class="col-md-6">
                                                <div class="d-flex justify-content-between">
                                                    <span>Subtotal:</span>
                                                    <span id="orderSubtotal">$0.00</span>
                                                </div>
                                                <div class="d-flex justify-content-between">
                                                    <span>Tax (8%):</span>
                                                    <span id="orderTax">$0.00</span>
                                                </div>
                                                <div class="d-flex justify-content-between">
                                                    <span>Shipping:</span>
                                                    <span id="orderShipping">$9.99</span>
                                                </div>
                                                <hr>
                                                <div class="d-flex justify-content-between fw-bold">
                                                    <span>Total:</span>
                                                    <span id="orderTotal">$9.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" id="saveOrderBtn">Create Order</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Insert order interface into the admin panel
        const adminPanel = document.querySelector('.admin-panel') || document.body;
        adminPanel.insertAdjacentHTML('beforeend', orderHTML);
    }

    bindEvents() {
        // Filter events
        document.getElementById('statusFilter')?.addEventListener('change', () => this.applyFilters());
        document.getElementById('paymentStatusFilter')?.addEventListener('change', () => this.applyFilters());
        document.getElementById('dateFilter')?.addEventListener('change', () => this.applyFilters());
        document.getElementById('searchOrders')?.addEventListener('input', (e) => this.searchOrders(e.target.value));

        // Modal events
        document.getElementById('createOrderBtn')?.addEventListener('click', () => this.openCreateOrderModal());
        document.getElementById('saveOrderBtn')?.addEventListener('click', () => this.saveOrder());
        document.getElementById('updateOrderStatus')?.addEventListener('click', () => this.updateOrderStatus());

        // Create order form events
        document.getElementById('orderCustomer')?.addEventListener('change', (e) => this.loadCustomerData(e.target.value));
        document.getElementById('sameAsShipping')?.addEventListener('change', (e) => this.toggleBillingAddress(e.target.checked));
        document.getElementById('productSelect')?.addEventListener('change', (e) => this.loadProductData(e.target.value));
        document.getElementById('addItemBtn')?.addEventListener('click', () => this.addOrderItem());

        // Populate dropdowns
        this.populateCustomerDropdown();
        this.populateProductDropdown();
    }

    displayOrders(orders = this.orders) {
        const tbody = document.getElementById('orderTableBody');
        if (!tbody) return;

        tbody.innerHTML = orders.map(order => `
            <tr>
                <td>
                    <a href="#" class="order-link" data-order-id="${order.id}">${order.orderNumber}</a>
                </td>
                <td>
                    <div>
                        <strong>${order.customerName}</strong><br>
                        <small class="text-muted">${order.customerEmail}</small>
                    </div>
                </td>
                <td>${order.orderDate.toLocaleDateString()}</td>
                <td>
                    <span class="badge ${this.getStatusBadgeClass(order.status)}">
                        ${order.status}
                    </span>
                </td>
                <td>
                    <div>
                        <span class="badge ${this.getPaymentBadgeClass(order.paymentStatus)}">
                            ${order.paymentStatus}
                        </span><br>
                        <small class="text-muted">${order.paymentMethod}</small>
                    </div>
                </td>
                <td>$${order.total.toFixed(2)}</td>
                <td>
                    ${order.trackingNumber ? 
                        `<a href="#" class="tracking-link">${order.trackingNumber}</a>` : 
                        '<span class="text-muted">N/A</span>'
                    }
                </td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" onclick="orderManager.viewOrder(${order.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-success" onclick="orderManager.editOrder(${order.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="orderManager.cancelOrder(${order.id})">
                        <i class="fas fa-times"></i>
                    </button>
                </td>
            </tr>
        `).join('');

        // Bind order link events
        document.querySelectorAll('.order-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const orderId = parseInt(e.target.dataset.orderId);
                this.viewOrder(orderId);
            });
        });

        this.updateOrderStats();
    }

    getStatusBadgeClass(status) {
        switch (status) {
            case 'Pending': return 'bg-warning';
            case 'Processing': return 'bg-info';
            case 'Shipped': return 'bg-primary';
            case 'Delivered': return 'bg-success';
            case 'Cancelled': return 'bg-danger';
            case 'Returned': return 'bg-secondary';
            default: return 'bg-light text-dark';
        }
    }

    getPaymentBadgeClass(status) {
        switch (status) {
            case 'Paid': return 'bg-success';
            case 'Pending': return 'bg-warning';
            case 'Failed': return 'bg-danger';
            case 'Refunded': return 'bg-info';
            default: return 'bg-light text-dark';
        }
    }

    applyFilters() {
        const status = document.getElementById('statusFilter').value;
        const paymentStatus = document.getElementById('paymentStatusFilter').value;
        const date = document.getElementById('dateFilter').value;

        let filtered = this.orders;

        if (status) {
            filtered = filtered.filter(order => order.status === status);
        }

        if (paymentStatus) {
            filtered = filtered.filter(order => order.paymentStatus === paymentStatus);
        }

        if (date) {
            const filterDate = new Date(date);
            filtered = filtered.filter(order => 
                order.orderDate.toDateString() === filterDate.toDateString()
            );
        }

        this.displayOrders(filtered);
    }

    searchOrders(query) {
        if (!query.trim()) {
            this.displayOrders();
            return;
        }

        const filtered = this.orders.filter(order => 
            order.orderNumber.toLowerCase().includes(query.toLowerCase()) ||
            order.customerName.toLowerCase().includes(query.toLowerCase()) ||
            order.customerEmail.toLowerCase().includes(query.toLowerCase())
        );

        this.displayOrders(filtered);
    }

    updateOrderStats() {
        const totalOrders = this.orders.length;
        const pendingOrders = this.orders.filter(order => 
            order.status === 'Pending' || order.status === 'Processing'
        ).length;
        const shippedOrders = this.orders.filter(order => order.status === 'Shipped').length;
        const totalRevenue = this.orders
            .filter(order => order.status !== 'Cancelled')
            .reduce((sum, order) => sum + order.total, 0);

        document.getElementById('totalOrders').textContent = totalOrders;
        document.getElementById('pendingOrders').textContent = pendingOrders;
        document.getElementById('shippedOrders').textContent = shippedOrders;
        document.getElementById('totalRevenue').textContent = `$${totalRevenue.toFixed(2)}`;
    }

    viewOrder(orderId) {
        const order = this.orders.find(o => o.id === orderId);
        if (!order) return;

        const modal = new bootstrap.Modal(document.getElementById('orderDetailsModal'));
        const content = document.getElementById('orderDetailsContent');

        content.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <h6>Order Information</h6>
                    <table class="table table-sm">
                        <tr><td><strong>Order Number:</strong></td><td>${order.orderNumber}</td></tr>
                        <tr><td><strong>Order Date:</strong></td><td>${order.orderDate.toLocaleDateString()}</td></tr>
                        <tr><td><strong>Status:</strong></td><td><span class="badge ${this.getStatusBadgeClass(order.status)}">${order.status}</span></td></tr>
                        <tr><td><strong>Payment Status:</strong></td><td><span class="badge ${this.getPaymentBadgeClass(order.paymentStatus)}">${order.paymentStatus}</span></td></tr>
                        <tr><td><strong>Payment Method:</strong></td><td>${order.paymentMethod}</td></tr>
                        <tr><td><strong>Tracking Number:</strong></td><td>${order.trackingNumber || 'N/A'}</td></tr>
                        <tr><td><strong>Estimated Delivery:</strong></td><td>${order.estimatedDelivery ? order.estimatedDelivery.toLocaleDateString() : 'N/A'}</td></tr>
                        <tr><td><strong>Actual Delivery:</strong></td><td>${order.actualDelivery ? order.actualDelivery.toLocaleDateString() : 'N/A'}</td></tr>
                    </table>
                </div>
                <div class="col-md-6">
                    <h6>Customer Information</h6>
                    <table class="table table-sm">
                        <tr><td><strong>Name:</strong></td><td>${order.customerName}</td></tr>
                        <tr><td><strong>Email:</strong></td><td>${order.customerEmail}</td></tr>
                        <tr><td><strong>Phone:</strong></td><td>${order.customerPhone}</td></tr>
                    </table>
                </div>
            </div>

            <div class="row mt-3">
                <div class="col-md-6">
                    <h6>Shipping Address</h6>
                    <address>
                        ${order.shippingAddress.street}<br>
                        ${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zipCode}<br>
                        ${order.shippingAddress.country}
                    </address>
                </div>
                <div class="col-md-6">
                    <h6>Billing Address</h6>
                    <address>
                        ${order.billingAddress.street}<br>
                        ${order.billingAddress.city}, ${order.billingAddress.state} ${order.billingAddress.zipCode}<br>
                        ${order.billingAddress.country}
                    </address>
                </div>
            </div>

            <div class="mt-3">
                <h6>Order Items</h6>
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>SKU</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${order.items.map(item => `
                            <tr>
                                <td>${item.name}</td>
                                <td>${item.sku}</td>
                                <td>${item.quantity}</td>
                                <td>$${item.price.toFixed(2)}</td>
                                <td>$${item.total.toFixed(2)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="4"><strong>Subtotal:</strong></td>
                            <td><strong>$${order.subtotal.toFixed(2)}</strong></td>
                        </tr>
                        <tr>
                            <td colspan="4"><strong>Tax:</strong></td>
                            <td><strong>$${order.tax.toFixed(2)}</strong></td>
                        </tr>
                        <tr>
                            <td colspan="4"><strong>Shipping:</strong></td>
                            <td><strong>$${order.shipping.toFixed(2)}</strong></td>
                        </tr>
                        <tr class="table-active">
                            <td colspan="4"><strong>Total:</strong></td>
                            <td><strong>$${order.total.toFixed(2)}</strong></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            ${order.notes ? `
                <div class="mt-3">
                    <h6>Notes</h6>
                    <p class="text-muted">${order.notes}</p>
                </div>
            ` : ''}
        `;

        modal.show();
    }

    editOrder(orderId) {
        // Implementation for editing orders
        console.log('Edit order:', orderId);
    }

    cancelOrder(orderId) {
        if (confirm('Are you sure you want to cancel this order?')) {
            const order = this.orders.find(o => o.id === orderId);
            if (order) {
                order.status = 'Cancelled';
                order.paymentStatus = 'Refunded';
                this.displayOrders();
                this.updateOrderStats();
            }
        }
    }

    openCreateOrderModal() {
        const modal = new bootstrap.Modal(document.getElementById('createOrderModal'));
        document.getElementById('createOrderForm').reset();
        document.getElementById('orderItemsList').innerHTML = '';
        this.updateOrderTotals();
        modal.show();
    }

    loadCustomerData(customerId) {
        const customer = this.customers.find(c => c.id === parseInt(customerId));
        if (customer) {
            document.getElementById('orderEmail').value = customer.email;
            document.getElementById('orderPhone').value = customer.phone;
            document.getElementById('shippingStreet').value = customer.address.street;
            document.getElementById('shippingCity').value = customer.address.city;
            document.getElementById('shippingState').value = customer.address.state;
            document.getElementById('shippingZip').value = customer.address.zipCode;
            document.getElementById('shippingCountry').value = customer.address.country;
        }
    }

    toggleBillingAddress(sameAsShipping) {
        const billingFields = document.getElementById('billingAddressFields');
        if (sameAsShipping) {
            billingFields.style.display = 'none';
            // Copy shipping to billing
            document.getElementById('billingStreet').value = document.getElementById('shippingStreet').value;
            document.getElementById('billingCity').value = document.getElementById('shippingCity').value;
            document.getElementById('billingState').value = document.getElementById('shippingState').value;
            document.getElementById('billingZip').value = document.getElementById('shippingZip').value;
            document.getElementById('billingCountry').value = document.getElementById('shippingCountry').value;
        } else {
            billingFields.style.display = 'block';
        }
    }

    populateCustomerDropdown() {
        const dropdown = document.getElementById('orderCustomer');
        if (!dropdown) return;

        dropdown.innerHTML = '<option value="">Select Customer</option>' +
            this.customers.map(customer => 
                `<option value="${customer.id}">${customer.name} (${customer.email})</option>`
            ).join('');
    }

    populateProductDropdown() {
        const dropdown = document.getElementById('productSelect');
        if (!dropdown) return;

        // Get products from inventory manager if available
        const products = window.inventoryManager ? window.inventoryManager.inventory : [];
        
        dropdown.innerHTML = '<option value="">Select Product</option>' +
            products.map(product => 
                `<option value="${product.id}" data-price="${product.sellingPrice}">${product.name} - $${product.sellingPrice}</option>`
            ).join('');
    }

    loadProductData(productId) {
        const option = document.querySelector(`#productSelect option[value="${productId}"]`);
        if (option) {
            const price = parseFloat(option.dataset.price);
            document.getElementById('itemPrice').value = price.toFixed(2);
        }
    }

    addOrderItem() {
        const productSelect = document.getElementById('productSelect');
        const quantity = parseInt(document.getElementById('itemQuantity').value);
        const price = parseFloat(document.getElementById('itemPrice').value);

        if (!productSelect.value || !quantity || !price) {
            alert('Please fill in all item fields.');
            return;
        }

        const productText = productSelect.options[productSelect.selectedIndex].text;
        const total = quantity * price;

        const itemHTML = `
            <div class="order-item row align-items-center mb-2">
                <div class="col-md-5">
                    <span class="item-name">${productText}</span>
                </div>
                <div class="col-md-2">
                    <input type="number" class="form-control form-control-sm item-quantity" value="${quantity}" min="1">
                </div>
                <div class="col-md-2">
                    <span class="item-price">$${price.toFixed(2)}</span>
                </div>
                <div class="col-md-2">
                    <span class="item-total">$${total.toFixed(2)}</span>
                </div>
                <div class="col-md-1">
                    <button type="button" class="btn btn-sm btn-outline-danger remove-item">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `;

        document.getElementById('orderItemsList').insertAdjacentHTML('beforeend', itemHTML);

        // Clear form
        productSelect.value = '';
        document.getElementById('itemQuantity').value = '1';
        document.getElementById('itemPrice').value = '';

        this.updateOrderTotals();
        this.bindItemEvents();
    }

    bindItemEvents() {
        // Remove item events
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('.order-item').remove();
                this.updateOrderTotals();
            });
        });

        // Quantity change events
        document.querySelectorAll('.item-quantity').forEach(input => {
            input.addEventListener('change', (e) => {
                const item = e.target.closest('.order-item');
                const quantity = parseInt(e.target.value);
                const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
                const total = quantity * price;
                item.querySelector('.item-total').textContent = `$${total.toFixed(2)}`;
                this.updateOrderTotals();
            });
        });
    }

    updateOrderTotals() {
        const items = document.querySelectorAll('.order-item');
        let subtotal = 0;

        items.forEach(item => {
            const total = parseFloat(item.querySelector('.item-total').textContent.replace('$', ''));
            subtotal += total;
        });

        const tax = subtotal * 0.08; // 8% tax
        const shipping = subtotal > 100 ? 0 : 9.99; // Free shipping over $100
        const total = subtotal + tax + shipping;

        document.getElementById('orderSubtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('orderTax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('orderShipping').textContent = `$${shipping.toFixed(2)}`;
        document.getElementById('orderTotal').textContent = `$${total.toFixed(2)}`;
    }

    saveOrder() {
        const form = document.getElementById('createOrderForm');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const items = Array.from(document.querySelectorAll('.order-item')).map(item => {
            const name = item.querySelector('.item-name').textContent;
            const quantity = parseInt(item.querySelector('.item-quantity').value);
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            const total = parseFloat(item.querySelector('.item-total').textContent.replace('$', ''));

            return {
                productId: Math.floor(Math.random() * 1000), // Mock product ID
                name: name.split(' - $')[0],
                sku: 'SKU-' + Math.floor(Math.random() * 10000),
                quantity: quantity,
                price: price,
                total: total
            };
        });

        if (items.length === 0) {
            alert('Please add at least one item to the order.');
            return;
        }

        const subtotal = items.reduce((sum, item) => sum + item.total, 0);
        const tax = subtotal * 0.08;
        const shipping = subtotal > 100 ? 0 : 9.99;
        const total = subtotal + tax + shipping;

        const newOrder = {
            id: this.currentOrderId++,
            orderNumber: `ORD-2024-${String(this.currentOrderId).padStart(3, '0')}`,
            customerId: parseInt(document.getElementById('orderCustomer').value),
            customerName: document.getElementById('orderCustomer').options[document.getElementById('orderCustomer').selectedIndex].text.split(' (')[0],
            customerEmail: document.getElementById('orderEmail').value,
            customerPhone: document.getElementById('orderPhone').value,
            orderDate: new Date(),
            status: document.getElementById('orderStatus').value,
            paymentStatus: 'Pending',
            paymentMethod: document.getElementById('orderPaymentMethod').value,
            subtotal: subtotal,
            tax: tax,
            shipping: shipping,
            total: total,
            shippingAddress: {
                street: document.getElementById('shippingStreet').value,
                city: document.getElementById('shippingCity').value,
                state: document.getElementById('shippingState').value,
                zipCode: document.getElementById('shippingZip').value,
                country: document.getElementById('shippingCountry').value
            },
            billingAddress: {
                street: document.getElementById('billingStreet').value,
                city: document.getElementById('billingCity').value,
                state: document.getElementById('billingState').value,
                zipCode: document.getElementById('billingZip').value,
                country: document.getElementById('billingCountry').value
            },
            items: items,
            trackingNumber: null,
            estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
            actualDelivery: null,
            notes: document.getElementById('orderNotes').value
        };

        this.orders.unshift(newOrder); // Add to beginning of array
        this.displayOrders();
        this.updateOrderStats();

        // Update inventory if available
        if (window.inventoryManager) {
            items.forEach(item => {
                window.inventoryManager.updateStock(item.productId, item.quantity);
            });
        }

        bootstrap.Modal.getInstance(document.getElementById('createOrderModal')).hide();
        alert('Order created successfully!');
    }

    updateOrderStatus() {
        // Implementation for updating order status
        console.log('Update order status');
    }

    exportOrders() {
        const csv = this.generateOrdersCSV();
        this.downloadCSV(csv, 'orders_export.csv');
    }

    generateOrdersCSV() {
        let csv = 'Order Number,Customer,Date,Status,Payment Status,Total,Items\n';
        
        this.orders.forEach(order => {
            const items = order.items.map(item => `${item.name} (${item.quantity})`).join('; ');
            csv += `"${order.orderNumber}","${order.customerName}","${order.orderDate.toLocaleDateString()}","${order.status}","${order.paymentStatus}",${order.total},"${items}"\n`;
        });
        
        return csv;
    }

    downloadCSV(csv, filename) {
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
    }
}

// Initialize order manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.orderManager = new OrderManager();
});

// Add order styles
const orderStyles = `
<style>
.order-dashboard {
    padding: 2rem;
    background: #f8f9fa;
    min-height: 100vh;
}

.order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.order-actions {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.order-stats {
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

.order-filters {
    background: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 2rem;
}

.order-table-container {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
}

.order-table {
    margin: 0;
}

.order-table th {
    background: #f8f9fa;
    border-bottom: 2px solid #dee2e6;
    font-weight: 600;
    color: #495057;
}

.order-table td {
    vertical-align: middle;
}

.order-link {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
}

.order-link:hover {
    text-decoration: underline;
}

.tracking-link {
    color: #007bff;
    text-decoration: none;
    font-size: 0.875rem;
}

.tracking-link:hover {
    text-decoration: underline;
}

.badge {
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
}

.order-items-section {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #dee2e6;
}

.order-item {
    padding: 0.5rem;
    border: 1px solid #dee2e6;
    border-radius: 0.375rem;
    background: #f8f9fa;
}

.order-totals {
    margin-top: 1rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 0.375rem;
}

@media (max-width: 768px) {
    .order-header {
        flex-direction: column;
        align-items: stretch;
    }
    
    .order-actions {
        justify-content: center;
    }
    
    .stat-card {
        flex-direction: column;
        text-align: center;
    }
    
    .order-table-container {
        overflow-x: auto;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', orderStyles);
