import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    company: {
      title: 'Название компании',
      address: 'Комсомольск-на-Амуре, Ленина 81',
      time: 'с 10:00 - 18:00',
      business: {
        inn: '345678765556',
        name: 'ИП Иванов Иван Иванович',
        address: 'Хабаровск, Комсомольская 15'
      },
      phones: [
        { number: '+7 (999) 999-99-99', title: 'Офис', attribute: 79999999999 }
      ],
      description: 'Если вам нужно использовать глобальную переменную ymaps отдельно от компонента карт (геокодер и др.), просто импортируйте лоадер. Вы можете задать настройки, описанные выше, а также указать параметр debug (по умолчанию - false). Учтите, что функция загрузчика асинхронная. Вы можете подключить плагин напрямую, используя ссылку https://unpkg.com/vue-yandex-maps (opens new window). Установка будет произведена автоматически при обнаружении Vue JS. Это может быть полезно при использовании Code Pen'
    },
    products: [
      {id: 1, article: 123, title: 'Кофе', 'description': 'Описание товара 1', price: 102.5, category: 2, volume: 450, metric: 'мл.', image: 'https://img.freepik.com/free-photo/beer-glass-in-front-of-black-background_23-2148098813.jpg?w=2000'},
      {id: 2, article: 14423, title: 'Мороженное', 'description': 'Описание товара 2', price: 90, category: 3, volume: 0.2, metric: 'кг.', image: 'https://img.freepik.com/free-photo/beer-glass-in-front-of-black-background_23-2148098813.jpg?w=2000'},
      {id: 3, article: 1623, title: 'Колбаса', 'description': 'Описание товара 3', price: 123, category: 4, volume: 1, metric: 'кг.', image: 'https://img.freepik.com/free-photo/beer-glass-in-front-of-black-background_23-2148098813.jpg?w=2000'},
      {id: 4, article: 1223, title: 'Варенье', 'description': 'Описание товара 4', price: 45, category: 3, volume: 0.5, metric: 'л.', image: 'https://img.freepik.com/free-photo/beer-glass-in-front-of-black-background_23-2148098813.jpg?w=2000'},
      {id: 5, article: 12344, title: 'Молоко', 'description': 'Описание товара 1', price: 102.5, category: 2, volume: 450, metric: 'мл.', image: 'https://img.freepik.com/free-photo/beer-glass-in-front-of-black-background_23-2148098813.jpg?w=2000'},
      {id: 6, article: 144523, title: 'Сосиски', 'description': 'Описание товара 2', price: 90, category: 3, volume: 0.2, metric: 'кг.', image: 'https://img.freepik.com/free-photo/beer-glass-in-front-of-black-background_23-2148098813.jpg?w=2000'},
      {id: 7, article: 16223, title: 'Чай', 'description': 'Описание товара 3', price: 123, category: 4, volume: 1, metric: 'кг.', image: 'https://img.freepik.com/free-photo/beer-glass-in-front-of-black-background_23-2148098813.jpg?w=2000'},
      {id: 8, article: 12253, title: 'Кунжут', 'description': 'Описание товара 4', price: 45, category: 3, volume: 0.5, metric: 'л.', image: 'https://img.freepik.com/free-photo/beer-glass-in-front-of-black-background_23-2148098813.jpg?w=2000'}
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
