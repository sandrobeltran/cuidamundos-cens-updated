"use client";

import Button from "@/components/Button";
import React, { useRef } from "react";

const formatter = new Intl.NumberFormat("es-CO", {
  style: "decimal",
  maximumFractionDigits: 0,
});

const PRODUCTS_DATA = [
  {
    name: "Carne",
    amount: "1 Kilogramo",
    water: 15000,
    co2: 5641,
  },
  {
    name: "Huevos",
    amount: "12 unidades",
    water: 523,
    co2: 202,
  },
  {
    name: "Leche",
    amount: "1 Litro y Medio",
    water: 1906,
    co2: 458,
  },
  {
    name: "Pan",
    amount: "14 Unidades",
    water: 375,
    co2: 43,
  },
  {
    name: "Arroz",
    amount: "1 Kilogramo",
    water: 2558,
    co2: 242,
  },
  {
    name: "Café",
    amount: "1 Libra",
    water: 150,
    co2: 155,
  },
  {
    name: "Pollo",
    amount: "1 Pollo Entero",
    water: 396,
    co2: 284,
  },
  {
    name: "Papas",
    amount: "1 Kilogramo",
    water: 130,
    co2: 9,
  },
  {
    name: "Bananos",
    amount: "7 Unidades",
    water: 70,
    co2: 25,
  },
  {
    name: "Aguacates",
    amount: "3 Unidades",
    water: 342,
    co2: 72,
  },
];

type TProps = {};

const ProductsTableModal = ({}: TProps) => {
  const modalWrapperRef = useRef<HTMLDivElement>(null);

  function handleClose() {
    modalWrapperRef.current!.style.display = "none";
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((e.target as HTMLDivElement).id === modalWrapperRef.current?.id) {
      modalWrapperRef.current.style.display = "none";
    }
  }

  return (
    <div
      id="productsTableModalWrapper"
      className="modalWrapper fixed left-0 top-0 z-50 hidden h-full w-full items-center justify-center bg-black/20 backdrop-blur-sm"
      onClick={handleClick}
      ref={modalWrapperRef}
    >
      <div className="flex h-fit max-h-[90%] w-fit max-w-3xl flex-col items-center gap-10 overflow-y-auto rounded-3xl bg-white px-16 py-8 shadow-xl shadow-stone-950/10 backdrop-blur-md mobile-land:max-h-[95%] mobile-land:gap-6">
        <div
          className="flex w-full flex-col items-center gap-4 text-center"
          id="devicesTable"
        >
          <div className="grid w-full grid-cols-4 gap-4 rounded-3xl bg-cens-medium px-6 py-7 text-white">
            <h6 className="w-full">PRODUCTO</h6>
            <h6 className="w-full">CANTIDAD</h6>
            <h6 className="w-full">LT DE AGUA</h6>
            <h6 className="w-full">KG CO2</h6>
          </div>
          {/* DEVICES TABLE */}
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.name}
              className="min-h-12 grid w-full grid-cols-4 items-center gap-4 rounded-3xl bg-white px-6 py-2 text-stone-500 shadow-md"
            >
              <p className="max-w-full">{product.name}</p>
              <p className="max-w-full">{product.amount}</p>
              <p className="max-w-full">{formatter.format(product.water)}</p>
              <p className="max-w-full">{formatter.format(product.co2)}</p>
            </div>
          ))}
          <div className="mt-4">
            <Button hierarchy="primary" size="lg" onClick={() => handleClose()}>
              Volver
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsTableModal;
