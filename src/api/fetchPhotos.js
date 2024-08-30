const url = 'http://localhost/Backend/src/get/GetCategory.php';

export function fetchCategories() {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            // Check if data contains a 'data' property
            if (data && Array.isArray(data.data)) {
                return data.data; // Return the array of categories
            } else {
                throw new Error('Invalid data format');
            }
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
            return []; // Return an empty array on error
        });
}

export function getCategoryData() {
    // Ensure to use the correct variables
    return {
        ids: window.categoryIds || [],
        name: window.categoryNames || [],
        description: window.categoryDescriptions || [],
        image: window.categoryImages || [],
        category: window.categoryCategories || [],
    };
}
