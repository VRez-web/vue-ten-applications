export default {
    data() {
        return {
            timeout: ""
        }
    },
    methods: {
        debounce(func, wait = 1000) {
            console.log('im from mixin')
            clearTimeout(this.timeout);
            this.timeout = setTimeout(func, wait);
        },
    }
}