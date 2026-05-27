import React, { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';

const sampleProducts = [
  { id: 1, name: 'Silk Scarf', category: 'Accessories', price: '₹850', status: 'Active' },
  { id: 2, name: 'Hand-embroidered Kurta', category: 'Apparels', price: '₹2,200', status: 'Active' },
  { id: 3, name: 'Jute Tote Bag', category: 'Accessories', price: '₹450', status: 'Inactive' },
];

const ProductCatalogue = () => {
  const [products, setProducts] = useState(sampleProducts);

  const remove = (id) => setProducts(products.filter(p => p.id !== id));

  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-serif text-muted-dark-green">Product Catalogue</h2>
          <p className="text-muted-dark-green/60 font-medium mt-1">Manage and showcase your products</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-mint-green text-white rounded-xl font-semibold text-sm hover:bg-muted-dark-green transition-colors shadow-md shadow-mint-green/20">
          <Plus className="w-4 h-4" strokeWidth={2} />
          Add Product
        </button>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-soft-sage/20 shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-soft-sage/15 bg-soft-sage/5">
          {['Product', 'Category', 'Price', 'Actions'].map(h => (
            <p key={h} className="text-xs font-bold text-muted-dark-green/60 uppercase tracking-widest">{h}</p>
          ))}
        </div>

        {/* Rows */}
        {products.map((p) => (
          <div key={p.id} className="grid grid-cols-4 gap-4 px-6 py-4 border-b border-soft-sage/10 last:border-0 items-center hover:bg-soft-sage/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-mint-green/10 flex items-center justify-center shrink-0">
                <span className="text-mint-green text-xs font-bold">{p.name[0]}</span>
              </div>
              <span className="text-sm font-semibold text-muted-dark-green">{p.name}</span>
            </div>
            <span className="text-sm text-muted-dark-green/70">{p.category}</span>
            <span className="text-sm font-semibold text-muted-dark-green">{p.price}</span>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg text-muted-dark-green/50 hover:text-mint-green hover:bg-mint-green/10 transition-all">
                <Pencil className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button onClick={() => remove(p.id)} className="p-2 rounded-lg text-muted-dark-green/50 hover:text-red-400 hover:bg-red-50 transition-all">
                <Trash2 className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalogue;
