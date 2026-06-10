import { useState } from "react";
import OrdersList from "./components/OrdersList";
import OrderDetail from "./components/OrderDetail";

function App() {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const handleOrderClick = (orderId: string) => {
    setSelectedOrderId(orderId);
  };

  const handleBack = () => {
    setSelectedOrderId(null);
  };

  return (
    <>
      {selectedOrderId ? (
        <OrderDetail orderId={selectedOrderId} onBack={handleBack} />
      ) : (
        <OrdersList onOrderClick={handleOrderClick} />
      )}
    </>
  );
}

export default App;
