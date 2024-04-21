const fs = require('fs').promises;

class ProductManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async getProducts(limit) {
    try {
      const data = await fs.readFile(this.filePath, 'utf8');
      const products = JSON.parse(data);
      if (limit) {
        return products.slice(0, limit);
      }
      return products;
    } catch (error) {
      throw new Error('Error reading products file');
    }
  }

  async getProductById(productId) {
    try {
      const data = await fs.readFile(this.filePath, 'utf8');
      const products = JSON.parse(data);
      const product = products.find(p => p.id === productId);
      return product;
    } catch (error) {
      throw new Error('Error reading products file');
    }
  }
}

module.exports = ProductManager;
