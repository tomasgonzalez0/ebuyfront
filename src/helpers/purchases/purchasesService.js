export const sendPurchaseOrder = async (payload) => {
      const token = localStorage.getItem('token');
  try {
    const response = await fetch("https://ebuy.runasp.net/api/Purchases/Insert", {
      method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`${token}`
            },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al realizar la compra');
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error("Error enviando orden de compra:", error.message);
    throw error;
  }
};
