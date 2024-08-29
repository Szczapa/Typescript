interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

interface Customer {
    id: number;
    name: string;
    email: string;
}

interface OrderItem {
    product: Product;
    quantity: number;
}

interface Order {
    id: number;
    customer: Customer;
    items: OrderItem[];
    status: 'en attente' | 'expédiée' | 'livrée';
}

let createOrder = (client: Customer, items: OrderItem[]): Order => {
    let order: Order = {
        id: Date.now(),
        customer: client,
        items: items,
        status: 'en attente'
    };

    return order;
}

let calculateTotal = (order: Order): number => {
    return order.items.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);
}

class OrderManager {
    constructor(public orders: Order[] = []) {}

    addOrder(order: Order) {
        this.orders.push(order);
    }

    getOrderById(id: number) {
        return this.orders.find(order => order.id === id);
    }

    updateOrderStatus(id: number, status: 'en attente' | 'expédiée' | 'livrée') {
        let order = this.orders.find(order => order.id === id);
        if (order) {
            order.status = status;
        }
    }

    listOrdersByStatus(status: 'en attente' | 'expédiée' | 'livrée'): Order[] {
        return this.orders.filter(order => order.status === status);
    }

    removeOrder(id: number): void {
        this.orders = this.orders.filter(order => order.id !== id);
    }

    /* autre possibilité

    removeOrder(id: number): void {
        const index = this.orders.findIndex(order => order.id === id);
        if (index !== -1) {
            this.orders.splice(index, 1);
        }
    }
    */
}

// Test
const orderManager = new OrderManager();

const product1: Product = { id: 1, name: 'Product 1', price: 100, stock: 10 };
const product2: Product = { id: 2, name: 'Product 2', price: 200, stock: 5 };

const customer: Customer = { id: 1, name: 'Customer 1', email: 'customer1@example.com' };

const orderItem1: OrderItem = { product: product1, quantity: 2 };
const orderItem2: OrderItem = { product: product2, quantity: 1 };

const order1 = createOrder(customer, [orderItem1, orderItem2]);
orderManager.addOrder(order1);

console.log('Order Total:', calculateTotal(order1));

const fetchedOrder = orderManager.getOrderById(order1.id);
console.log('Fetched Order:', fetchedOrder);

orderManager.updateOrderStatus(order1.id, 'expédiée');
console.log('Updated Order Status:', orderManager.getOrderById(order1.id)?.status);

console.log('Orders with status "expédiée":', orderManager.listOrdersByStatus('expédiée'));

orderManager.removeOrder(order1.id);
console.log('Orders after removal:', orderManager.orders);