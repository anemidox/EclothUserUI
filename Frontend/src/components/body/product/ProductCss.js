export default function ProductCss() {
    return `
      <style>
        .product {
          display: flex;
        }
  
        .flex-container-image {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          justify-content: space-between;
        }
  
        .flex-box {
          width: 300px;
          height: 400px;
          background: linear-gradient(purple, pink);
          font-size: 25px;
          text-align: center;
          line-height: 200px;
          border-radius: 5px;
          margin: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden; /* Ensure content doesn't overflow */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Box shadow definition */
          transition: box-shadow 0.3s ease; /* Smooth transition for hover effect */
        }
  
        .flex-box:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Adjusted box shadow on hover */
        }
  
        .flex-box img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensure the image covers the entire box */
        }
      </style>
    `;
  }
  