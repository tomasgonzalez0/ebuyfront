

export const sendInStoreSale = async (payload) => {
      const token = localStorage.getItem('token');
  try {
    const response = await fetch("https://ebuy.runasp.net/api/InStoreSales/Insert", {
      method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`${token}`
            },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (typeof data === "string" && data.includes("Customer not found")) {
      throw new Error("Customer not found.");
    }

    if (data && typeof data.message === "string" && data.message.includes("Customer not found")) {
      throw new Error("Customer not found.");
    }

    if (!response.ok) {
      throw new Error((data && data.message) || 'Error to send in-store sale order');
    }

    return data;
  } catch (error) {
    console.error("Error sending the sale order:", error.message);
    throw error;
  }
};