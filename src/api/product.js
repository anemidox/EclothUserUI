export async function fetchProducts() {
    const url = 'https://fakestoreapi.com/products';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}
