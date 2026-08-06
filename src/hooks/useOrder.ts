import { useState } from 'react';
import type { OrderItem } from '../types'; 

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [auth, setAuth] = useState<boolean>(false);

    console.log(order);

    return {

    }
}