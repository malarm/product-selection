// Define types
export interface Product {
    id: string;
    company: string;
    series: string;
    product: string;
    data: string;
  }
  
  export interface State {
    companies: string[];
    companySeries: { [key: string]: string[] };
    products: Product[];
  }
  