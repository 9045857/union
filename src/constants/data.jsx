// src/constants/data.js
export const countries = ['Россия', 'Белорусия', 'Казахстан', 'Киргизия'];

export const userRole = [
    { russianName: 'Покупатель', englishName: 'buyer' },
    { russianName: 'Продавец', englishName: 'supplier' },
    { russianName: 'Оба', englishName: 'both' },
];

export const userBuyerSections = [
    { name: 'personal-data', title: 'Личные данные' },
    { name: 'deliveries', title: 'Доставки' },
    { name: 'balance', title: 'Баланс' },

    { name: 'payment-methods', title: 'Способы оплаты' },
    { name: 'favorites', title: 'Избранное' },
    { name: 'purchases', title: 'Покупки' },

    { name: 'favorite-producers', title: 'Любимые производители' },
    { name: 'checks', title: 'Чеки' },
    { name: 'commercial-offers', title: 'Коммерческие предложения' },

    { name: 'inquiries', title: 'Обращения и проверка товара' },
    { name: 'returns', title: 'Возвраты' },
    { name: 'reviews-questions', title: 'Отзывы и вопросы' },
];

export const userSupplierSections = [
    { name: 'personal-data', title: 'Личные данные' },
    { name: 'deliveries', title: 'Доставки' },
    { name: 'balance', title: 'Баланс' },

    { name: 'company-details', title: 'Реквизиты' },
    { name: 'sales', title: 'Продажи' },
    { name: 'commercial-offers', title: 'Коммерческие предложения' },

    { name: 'inquiries', title: 'Обращения и проверка товара' },
    { name: 'returns', title: 'Возвраты' },
    { name: 'reviews-questions', title: 'Отзывы и вопросы' },
];

export const userBothSections = [
    { name: 'personal-data', title: 'Личные данные' },
    { name: 'balance', title: 'Баланс' },
    { name: 'company-details', title: 'Реквизиты' },

    { name: 'deliveries', title: 'Доставки' },
    { name: 'sales', title: 'Продажи' },
    { name: 'purchases', title: 'Покупки' },

    { name: 'commercial-offers', title: 'Коммерческие предложения' },
    { name: 'favorite-producers', title: 'Любимые производители' },
    { name: 'checks', title: 'Чеки' },

    { name: 'inquiries', title: 'Обращения и проверка товара' },
    { name: 'returns', title: 'Возвраты' },
    { name: 'reviews-questions', title: 'Отзывы и вопросы' },
];

export const productCategories = ['Электроника', 'Одежда', 'Книги', '...'];
