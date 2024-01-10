export interface OrdersResponseType {
  _id: string
  name: string
  order: Order
  index: number
}

export interface Order {
  status: string
  totalQuantity: number
  totalWeight: number
  totalWeightWithWage: number
  _id: string
  createdAt: string
  tracking: string
}

export interface OrderDetailResponse {
  _id: string
  name: string
  mobile: string
  order: OrderDetailInfo
}

export interface OrderDetailInfo {
  products: OrderProductsStatus
  status: string
  note: string
  totalQuantity: number
  totalWeight: number
  totalWeightWithWage: number
  _id: string
  createdAt: string
  updatedAt: string
  tracking: string
}

export interface OrderProductsStatus {
  REGISTERED: OrdersProductItem[]
  PROGRESS: OrdersProductItem[]
  READY: OrdersProductItem[]
  DELIVERED: OrdersProductItem[]
  CANCELED: OrdersProductItem[]
}

export interface OrdersProductItem {
  groupUniqueId: string
  header: string
  wage: number
  product: Product
  subProducts: OrdersSubProduct[]
  _id: string
}

export interface OrdersSubProduct {
  title: string
  weight: number
  quantity: number
  totalQuantity: number
  totalWeightWithWage: number
  thumbnail: string
  note?: string
  _id: string
}

export interface Product {}
