import { createContext, useEffect, useState } from "react";
import type { Product } from "../components/sections/ProductSection/ProductList";

export type BagItem = Product & { quantity: number };

interface IBagContext {
  bagItems: BagItem[];
  setBagItems: React.Dispatch<React.SetStateAction<BagItem[]>>;
  addToBag: (product: Product) => void;
  removeFromBag: (productId: number) => void;
  removeItemQuantityFromBag: (productId: number, quantity: number) => void;
}

export const BagContext = createContext({} as IBagContext);

export const BagProvider = ({ children }: { children: React.ReactNode }) => {
  const localBagItems = localStorage.getItem("@hardwareCommerce:bagItems");
  const [bagItems, setBagItems] = useState<BagItem[]>(
    localBagItems ? JSON.parse(localBagItems) : []
  );

  useEffect(() => {
    localStorage.setItem(
      "@hardwareCommerce:bagItems",
      JSON.stringify(bagItems)
    );
  }, [bagItems]);

  const addToBag = (product: Product) => {
    const productIsInBagItems = bagItems.some(({ id }) => id === product.id);

    if (productIsInBagItems) {
      const updatedBagItems = bagItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setBagItems(updatedBagItems);
    } else {
      setBagItems([...bagItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromBag = (productId: number) => {
    const updatedBagItems = bagItems.filter(({ id }) => id !== productId);

    setBagItems(updatedBagItems);
  };

  const removeItemQuantityFromBag = (productId: number, quantity: number) => {
    const foundProduct = bagItems.find(({ id }) => id === productId);

    if (foundProduct && foundProduct.quantity > 1) {
      const updatedBagItems = bagItems.map((item) => {
        if (item.id === productId) {
          return {
            ...item,
            quantity: item.quantity - quantity,
          };
        }

        return item;
      });

      setBagItems(updatedBagItems);
    }
  };

  return (
    <BagContext.Provider
      value={{
        bagItems,
        setBagItems,
        addToBag,
        removeFromBag,
        removeItemQuantityFromBag,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};
