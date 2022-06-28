const initialState = {
    user: {
        user_name: '',
        email: '',
        token: '',
        token_expires_at: ''
    },
    categories: {
        results: []
    },

    carts: {
        results: [],
        totalPrice: 0,
        totalCart: 0,
        totalCartItems: 0
    },

    orders: {
        results: [],
        errors: {
            customer_name: null,
            customer_phone: null,
            address: null,
            pin_code: null,
            building_type: null,
            city: null,
            state: null
        }
    },

    products: {
        results: []
    }
};

export default initialState;
