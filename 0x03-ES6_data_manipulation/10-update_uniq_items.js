export default function updateUniqueItems(groceries) {
  for (const [key, value] of groceries.entries()) {
    if (value === 1) {
      groceries.set(key, 100);
    }
  }
  return groceries;
}
