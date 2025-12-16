/**
 * Helper function to load knowledge items into a knowledge base
 *
 * Iterates through the array of knowledge items to load and adds them to the
 * existing knowledge array, skipping any null or undefined items.
 *
 * @param {Array} knowledgeToLoad - Array of knowledge items to add
 * @param {Array} knowledge - The target knowledge base array to populate
 *
 * @example
 * const knowledgeBase = [];
 * const newKnowledge = ['Item 1', 'Item 2', null, 'Item 3'];
 * loadKnowledgeHelper(newKnowledge, knowledgeBase);
 * // knowledgeBase is now ['Item 1', 'Item 2', 'Item 3']
 */
export function loadKnowledgeHelper(knowledgeToLoad, knowledge) {
  // Iterate through each knowledge item to load
  knowledgeToLoad.forEach((k) => {
    // Skip null or undefined items
    if (!k) return;

    // Add the knowledge item to the knowledge base
    knowledge.push(k);
  });
}
