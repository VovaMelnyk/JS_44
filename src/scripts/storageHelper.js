export const storage = {
    addItem(key, value) {
        const result = JSON.stringify(value)
        localStorage.setItem(key, result)
    },

    getItem(key) {
        try {
            const payload = localStorage.getItem(key);
            return JSON.parse(payload)
        } catch (error) {
            console.error('Error parse')
        }
    }
}