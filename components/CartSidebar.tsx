import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Truck, ShoppingBag as BagIcon } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

const CartSidebar: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, total, isOpen, setIsOpen, clearCart } = useCart();
  const { t, language } = useLanguage();
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const deliveryFee = orderType === 'delivery' ? 0.500 : 0;
  const finalTotal = total + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setOrderPlaced(false);
      setShowCheckout(false);
      setIsOpen(false);
      setFormData({ name: '', phone: '', address: '' });
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div className={`relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col transition-transform duration-300 transform ${language === 'ar' ? '-translate-x-0' : 'translate-x-0'}`}>
        {/* Header */}
        <div className="p-4 bg-kuwait-dark text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-kuwait-gold" />
            <h2 className="font-serif text-lg">{t('yourCart')}</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {orderPlaced ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
              <ShoppingBag size={40} />
            </div>
            <h3 className="text-2xl font-serif text-kuwait-dark">{t('bookingSuccess')}</h3>
            <p className="text-gray-500">{t('bookingMessage')}</p>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-gray-500">
            <ShoppingBag size={48} className="mb-4 opacity-20" />
            <p>{t('emptyCart')}</p>
          </div>
        ) : !showCheckout ? (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-medium text-kuwait-dark line-clamp-1">{item.name}</h4>
                      <p className="text-kuwait-gold font-bold text-sm">{item.price.toFixed(3)} {t('kd')}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-2 py-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-red-500"><Minus size={14} /></button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-green-500"><Plus size={14} /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-400 hover:text-red-600 underline">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="p-6 bg-gray-50 border-t border-gray-200 space-y-4">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>{t('subtotal')}</span>
                  <span>{total.toFixed(3)} {t('kd')}</span>
                </div>
                {orderType === 'delivery' && (
                   <div className="flex justify-between">
                     <span>{t('deliveryFee')}</span>
                     <span>{deliveryFee.toFixed(3)} {t('kd')}</span>
                   </div>
                )}
              </div>
              <div className="flex justify-between font-bold text-lg text-kuwait-dark pt-2 border-t border-gray-200">
                <span>{t('total')}</span>
                <span>{finalTotal.toFixed(3)} {t('kd')}</span>
              </div>
              <button 
                onClick={() => setShowCheckout(true)}
                className="w-full py-3 bg-kuwait-gold text-kuwait-dark font-bold rounded-lg hover:bg-opacity-90 transition-colors shadow-md"
              >
                {t('checkout')}
              </button>
            </div>
          </>
        ) : (
          /* Checkout Form */
          <div className="flex-1 flex flex-col bg-gray-50">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <button 
                  onClick={() => setShowCheckout(false)} 
                  className="text-sm text-gray-500 hover:text-kuwait-dark flex items-center gap-1 mb-4"
                >
                  ← Back to Cart
                </button>

                <div>
                    <h3 className="font-serif text-lg mb-4 text-kuwait-dark">{t('orderType')}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button 
                            onClick={() => setOrderType('delivery')}
                            className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${orderType === 'delivery' ? 'border-kuwait-gold bg-white text-kuwait-gold' : 'border-gray-200 text-gray-400 hover:border-gray-300'}`}
                        >
                            <Truck size={24} className="mb-2" />
                            <span className="text-sm font-medium">{t('delivery')}</span>
                        </button>
                        <button 
                            onClick={() => setOrderType('takeaway')}
                            className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${orderType === 'takeaway' ? 'border-kuwait-gold bg-white text-kuwait-gold' : 'border-gray-200 text-gray-400 hover:border-gray-300'}`}
                        >
                            <BagIcon size={24} className="mb-2" />
                            <span className="text-sm font-medium">{t('takeaway')}</span>
                        </button>
                    </div>
                </div>

                <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4">
                    <h3 className="font-serif text-lg text-kuwait-dark pt-4">{t('customerInfo')}</h3>
                    <div>
                        <label className="block text-sm text-gray-500 mb-1">{t('fullName')}</label>
                        <input 
                            required 
                            type="text" 
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-kuwait-gold"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-500 mb-1">{t('phone')}</label>
                        <input 
                            required 
                            type="tel" 
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-kuwait-gold"
                            value={formData.phone}
                            onChange={e => setFormData({...formData, phone: e.target.value})}
                        />
                    </div>
                    {orderType === 'delivery' && (
                        <div>
                            <label className="block text-sm text-gray-500 mb-1">{t('address')}</label>
                            <textarea 
                                required 
                                rows={3}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-kuwait-gold"
                                value={formData.address}
                                onChange={e => setFormData({...formData, address: e.target.value})}
                            ></textarea>
                        </div>
                    )}
                </form>
            </div>
            
            <div className="p-6 bg-white border-t border-gray-200">
                 <div className="flex justify-between font-bold text-lg text-kuwait-dark mb-4">
                    <span>{t('total')}</span>
                    <span>{finalTotal.toFixed(3)} {t('kd')}</span>
                 </div>
                 <button 
                    type="submit" 
                    form="checkout-form"
                    className="w-full py-3 bg-kuwait-green text-white font-bold rounded-lg hover:bg-opacity-90 transition-colors shadow-md"
                 >
                    {t('placeOrder')}
                 </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
