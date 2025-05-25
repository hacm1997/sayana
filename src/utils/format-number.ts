export const formatCOP = (amount: number) => {
  return new Intl.NumberFormat("es-CO", {
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(amount);
};
