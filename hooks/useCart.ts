import { useState, useCallback } from 'react';
import { CartItemType } from '@/components/CartItem';
import { UniformItem } from '@/data/uniformData';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const addToCart = useCallback((item: UniformItem, size: string) => {
    const cartItemId = `${item.id}-${size}`;
    
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === cartItemId);
      
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === cartItemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      
      const newCartItem: CartItemType = {
        id: cartItemId,
        name: item.name,
        price: item.price,
        size,
        primaryColor: item.primaryColor,
        secondaryColor: item.secondaryColor,
        accentColor: item.accentColor,
        quantity: 1,
        image: item.image
      };
      
      return [...prevItems, newCartItem];
    });
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  }, []);

  const removeItem = useCallback((id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getTotalItems = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  const getTotalPrice = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cartItems]);

  return {
    cartItems,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalItems,
    getTotalPrice
  };
};