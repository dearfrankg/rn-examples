
const getInvoiceData = (items) => {
  const invoiceStructure = {}
  items.forEach((item) => {
    if (item.name in invoiceStructure) {
      invoiceStructure[item.name][0]++
    } else {
      invoiceStructure[item.name] = [1, item.abv]
    }
  })
  const lineItems = Object.keys(invoiceStructure).map((name) => {
    return {
      name,
      quantity: invoiceStructure[name][0],
      subtotal: (invoiceStructure[name][0] * invoiceStructure[name][1]).toFixed(2)
    }
  })
  const grandTotal = lineItems.reduce((a, c) => a + parseFloat(c.subtotal), 0)
  return {
    lineItems,
    grandTotal: grandTotal.toFixed(2)
  }
}

export default getInvoiceData
