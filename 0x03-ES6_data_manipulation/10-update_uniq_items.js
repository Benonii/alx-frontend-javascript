export default function updateUniqueItems(groceries) {
  for (const [key, value] of groceries.entries()) {
    try {
      if (value === 1) {
        groceries.set(key, 100);
      }
    } catch (e) {
      throw new Error('Cannot process');
    }
  }
  return groceries;
}
