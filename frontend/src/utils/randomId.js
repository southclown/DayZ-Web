// Generate random ID with prefix
export function generateRandomId(prefix = '') {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    const hash = btoa(Math.random().toString()).replace(/[^a-zA-Z0-9]/g, '').substring(0, 8);
    return `${prefix}${timestamp}${randomStr}${hash}`;
}

// Generate random section ID that changes on each page load
export function generateSectionId(section) {
    const storedIds = window.__sectionIds || {};
    if (!storedIds[section]) {
        storedIds[section] = generateRandomId(`section-`);
    }
    window.__sectionIds = storedIds;
    return storedIds[section];
}

// Get section ID (for navigation)
export function getSectionId(section) {
    return window.__sectionIds?.[section] || section;
}
