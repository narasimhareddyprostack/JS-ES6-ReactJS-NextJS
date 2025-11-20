const display_Products = async () => {
    const tb = document.querySelector("tbody");

    try {
        const resp = await fetch("https://dummyjson.com/products");
        const data = await resp.json();

        const rows = data.products.map(product => `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.rating}</td>
            </tr>
        `).join("");

        tb.innerHTML = rows;

    } catch (error) {
        tb.innerHTML = "<tr><td colspan='4'>No Data</td></tr>";
    }
};

display_Products();
