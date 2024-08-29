var _a;
let createOrder = (client, items) => {
    let order = {
        id: Date.now(),
        customer: client,
        items: items,
        status: 'en attente'
    };
    return order;
};
let calculateTotal = (order) => {
    return order.items.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);
};
class OrderManager {
    constructor(orders = []) {
        this.orders = orders;
    }
    addOrder(order) {
        this.orders.push(order);
    }
    getOrderById(id) {
        return this.orders.find(order => order.id === id);
    }
    updateOrderStatus(id, status) {
        let order = this.orders.find(order => order.id === id);
        if (order) {
            order.status = status;
        }
    }
    listOrdersByStatus(status) {
        return this.orders.filter(order => order.status === status);
    }
    removeOrder(id) {
        this.orders = this.orders.filter(order => order.id !== id);
    }
}
// Test
const orderManager = new OrderManager();
const product1 = { id: 1, name: 'Product 1', price: 100, stock: 10 };
const product2 = { id: 2, name: 'Product 2', price: 200, stock: 5 };
const customer = { id: 1, name: 'Customer 1', email: 'customer1@example.com' };
const orderItem1 = { product: product1, quantity: 2 };
const orderItem2 = { product: product2, quantity: 1 };
const order1 = createOrder(customer, [orderItem1, orderItem2]);
orderManager.addOrder(order1);
console.log('Order Total:', calculateTotal(order1));
const fetchedOrder = orderManager.getOrderById(order1.id);
console.log('Fetched Order:', fetchedOrder);
orderManager.updateOrderStatus(order1.id, 'expédiée');
console.log('Updated Order Status:', (_a = orderManager.getOrderById(order1.id)) === null || _a === void 0 ? void 0 : _a.status);
console.log('Orders with status "expédiée":', orderManager.listOrdersByStatus('expédiée'));
orderManager.removeOrder(order1.id);
console.log('Orders after removal:', orderManager.orders);
