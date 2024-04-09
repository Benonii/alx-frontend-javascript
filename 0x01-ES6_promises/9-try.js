export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (e) {
    queue.push(`Error: ${e.message}`);
  }

  queue.push('Guardrail was processed');

  return queue;
}
