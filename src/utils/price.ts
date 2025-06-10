import type { Skip } from "../types/skip";

export const calculateTotalPrice = (skip:Skip) =>{
    const basePrice = skip.price_before_vat;
    const vatAmount = (basePrice * skip.vat) / 100
    const transportCost = skip.transport_cost ?? 0
    const skipPerTonneCost  = skip.per_tonne_cost ?? 0

    return basePrice + vatAmount + transportCost + skipPerTonneCost
}