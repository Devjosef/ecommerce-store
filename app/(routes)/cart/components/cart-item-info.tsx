interface CartItemInfoProps {
    product: Record<string, any>;
  }
  
  const CartItemInfo: React.FC<CartItemInfoProps> = ({
    product
  }) => {
    return (
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-semibold text-blue-700">{product.name}</p>
        </div>
  
        <div className="mt-1 flex text-sm">
          <p className="text-gray-600">{product.color}</p>
          <p className="ml-4 border-l pl-4 text-gray-600">{product.size}</p>
        </div>
  
        <p className="mt-1 text-sm font-medium text-green-800">${product.price}</p>
      </div>
    );
  };
   
  export default CartItemInfo;