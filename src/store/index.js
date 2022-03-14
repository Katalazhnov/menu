import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    company: {
      title: 'Название компании'
    },
    products: [
      {id: 1, article: 123, title: 'Кофе', 'description': 'Описание товара 1', price: 102.5, category: 2},
      {id: 2, article: 14423, title: 'Мороженное', 'description': 'Описание товара 2', price: 90, category: 3},
      {id: 3, article: 1623, title: 'Колбаса', 'description': 'Описание товара 3', price: 123, category: 4},
      {id: 4, article: 1223, title: 'Варенье', 'description': 'Описание товара 4', price: 45, category: 3}
    ],
    categories: [
      {id: 2, title: 'Напитки'},
      {id: 3, title: 'К чаю'},
      {id: 4, title: 'Покушать'},
    ],
    cart: [],
    cartLength: 0,
    cartSumma: 0,
    activeCategory: undefined,
    order: {
      name: undefined,
      phone: undefined,
      description: undefined,
      point: undefined,
    },
    points: [
      {value: 1, text: 'ленина 34'},
      {value: 2, text: 'мира 37'},
    ]
  },
  getters: {
    activeCategory: state => {
      return state.activeCategory;
    },
    company: state => {
      return state.company;
    },
    products: state => {
      return state.products;
    },
    categories: state => {
      return state.categories;
    },
    cart: state => {
      return state.cart;
    },
    cartLength: state => {
      return state.cartLength;
    },
    cartSumma: state => {
      return state.cartSumma;
    },
    order: state => {
      return state.order;
    },
    points: state => {
      return state.points;
    },
  },
  mutations: {
    SET_ORDER_POINT: (state, payload) => {
      state.order.point = payload;
    },
    SET_ORDER_NAME: (state, payload) => {
      state.order.name = payload;
    },
    SET_ORDER_PHONE: (state, payload) => {
      state.order.phone = payload;
    },
    SET_ORDER_DESCRIPTION: (state, payload) => {
      state.order.description = payload;
    },
    SET_ACTIVE_CATEGORY: (state, payload) => {
      state.activeCategory = payload;
    },
    SET_POINTS: (state, payload) => {
      state.points = payload;
    },
    SET_COMPANY: (state, payload) => {
      state.company = payload;
    },
    SET_CATEGORIES: (state, payload) => {
      state.categories = payload;
    },
    SET_PRODUCTS: (state, payload) => {
      state.products = payload;
    },
    ADD_TO_CART: (state, payload) => {
      if (!(state.cart[payload.id] > 0)) {
        state.cart[payload.id] = 0;
      }
      state.cart[payload.id]++;
      state.cartLength++;
      state.cartSumma += payload.price;
    },
    SUB_FROM_CART: (state, payload) => {
      if (state.cart[payload.id] <= 1) {
        state.cart[payload.id] = 0;
      } else {
        state.cart[payload.id]--;
      }

      let count = 0;
      if (state.cart.length > 0) {
        state.cart.forEach(el => {
          count += el;
        });
        state.cartLength = count;
        state.cartSumma -= payload.price;
      } else {
        state.cartLength = 0;
        state.cartSumma = 0;
      }
    },
  },
  actions: {
    setCompany: async (context, company) => {
     // let {data} = await Axios.post('http://myapiendpoint.com/api/name', {name: name});

      //if (data.status == 200) {
        context.commit('SET_COMPANY', company);
     // }
    },
    setCategories: async (context, categories) => {
      // let {data} = await Axios.post('http://myapiendpoint.com/api/name', {name: name});

      //if (data.status == 200) {
      context.commit('SET_CATEGORIES', categories);
      // }
    },
    setProducts: async (context, products) => {
      // let {data} = await Axios.post('http://myapiendpoint.com/api/name', {name: name});

      //if (data.status == 200) {
      context.commit('SET_PRODUCTS', products);
      // }
    },
    setActiveCategory: (context, category) => {
      context.commit('SET_ACTIVE_CATEGORY', category ? category : undefined);
    },
    addToCart: (context, product) => {
      context.commit('ADD_TO_CART', product);
    },
    subFromCart: (context, product) => {
      context.commit('SUB_FROM_CART', product);
    },
    setOrderName: (context, data) => {
      context.commit('SET_ORDER_NAME', data);
    },
    setOrderPhone: (context, data) => {
      context.commit('SET_ORDER_PHONE', data);
    },
    setOrderDescription: (context, data) => {
      context.commit('SET_ORDER_DESCRIPTION', data);
    },
    setOrderPoint: (context, data) => {
      context.commit('SET_ORDER_POINT', data);
    },
    setPoints: (context, data) => {
      context.commit('SET_POINTS', data);
    },
    sendOrder: ({state}) => {
      alert(state.order.name + '   ' +  state.order.phone +'   ' +  state.order.point);
    },
  },
  modules: {
  }
})
