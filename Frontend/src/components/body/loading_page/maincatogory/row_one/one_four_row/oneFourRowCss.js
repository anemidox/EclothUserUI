// export default function oneFourRowCss() {
//     return (`
//         <style>
//         .one-four-row-container {
//             display: flex;
//             box-sizing: border-box; 
//         }
//         .one-four-row {
//             box-sizing: border-box;
//             background-color: #f0f0f0;
//             width: 50vh;
//             height: 75vh;
//             margin: 1%;
//         }
//         </style>
//     `);
// }

export default function oneFourRowCss() {
    return (`
        <style>
        .shopping-cart-container {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
            width: 80vw;
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
            background-color: #f9f9f9;
        }
        .shopping-cart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .shopping-cart-header h2 {
            margin: 0;
        }
        .shopping-cart-items {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 20px;
        }
        .shopping-cart-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            border: 1px solid #ddd;
            background-color: #fff;
        }
        .item-image {
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin-bottom: 10px;
        }
        .item-details {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .item-name {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .item-price {
            color: #b12704;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .item-quantity {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }
        .quantity-button {
            background-color: #ddd;
            border: 1px solid #ccc;
            padding: 5px;
            cursor: pointer;
        }
        .quantity-input {
            width: 50px;
            padding: 5px;
            text-align: center;
            border: 1px solid #ccc;
        }
        .add-to-cart-button, .remove-button {
            background-color: #ff9900;
            border: none;
            padding: 10px;
            cursor: pointer;
            margin-bottom: 10px;
            color: white;
        }
        .remove-button {
            background-color: #ff4d4d;
        }
        </style>
    `);
}
