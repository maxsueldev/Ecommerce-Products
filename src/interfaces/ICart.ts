import IProducts from "./IProduct";

export default interface ICart {
  products: IProducts[];
  qtd_total: number;
  price_total: number;
}
