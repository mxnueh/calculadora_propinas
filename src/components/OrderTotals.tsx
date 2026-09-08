import {useMemo} from 'react';
import { formatCurrency } from '../helpers';
import type { OrderItem } from '../types';

type OrderTotalsProps = {
    order: OrderItem[];
}

export default function OrderTotals({order}: OrderTotalsProps) {
    
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
  
    return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina: </h2>
            <p>Subtotal a pagar: {''}
                <span className="font-black">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Propina: {''}
                <span className="font-black">{formatCurrency(subtotalAmount * 0.15)}</span>
            </p>
            <p>Total a pagar: {''}
                <span className="font-black">{formatCurrency(subtotalAmount * 1.15)}</span>
            </p>
        </div>
        <button></button>
    </>
  )
}
