import React from 'react';

export const parseHTML = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const elements = doc.body.childNodes;

    const parsedComponents = [];

    elements.forEach((node, index) => {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent.trim() !== '') { 
                parsedComponents.push(<span key={index}>{node.textContent}</span>);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const TagName = node.tagName.toLowerCase();
            const attributes = {};

            
            Array.from(node.attributes).forEach(attr => {
                if (attr.name === 'style') {
                    
                    const styleObj = {};
                    attr.value.split(';').forEach(style => {
                        if (style) {
                            const [key, value] = style.split(':');
                            styleObj[key.trim()] = value.trim();
                        }
                    });
                    attributes[attr.name] = styleObj;
                } else {
                    attributes[attr.name] = attr.value;
                }
            });

            
            const children = parseHTML(node.innerHTML);

            
            if (children.length > 0 || node.tagName.toLowerCase() === 'img') {
                if (TagName === 'img') {
                    parsedComponents.push(
                        <img key={index} {...attributes} />
                    );
                } else {
                    parsedComponents.push(
                        <TagName key={index} {...attributes}>
                            {children}
                        </TagName>
                    );
                }
            }
        }
    });

    return parsedComponents;
};
