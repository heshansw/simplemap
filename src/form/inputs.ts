export const hasAttribute = (attributes: NamedNodeMap, attrName: string) =>
    Array.from(attributes).some((node) => node.name === attrName)
