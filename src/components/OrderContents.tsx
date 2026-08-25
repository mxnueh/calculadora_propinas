import type { OrderItem } from '../types';
import { formatCurrency } from '../helpers';

type OrderContentsProps = {
    order: OrderItem[];
  };    

export default function OrderContents({order}: OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Contenido del Pedido</h2>
        <div className="space-y-3 mt-5">
            {order.length === 0 ? (
                <p className="text-center text-2xl">No hay elementos en el pedido</p>
            ) : (
                order.map(item =>(
                    <div key={item.id}
                        className="flex justify-between items-centerborder-t border-gray-200 py-5 last-of-type:border-b">

                        <div>
                            <p className="text-xl">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="text-lg font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                        <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black">
                            X
                        </button>
                    </div>
                ))
            )}
        </div>
    </div>
  )
}
