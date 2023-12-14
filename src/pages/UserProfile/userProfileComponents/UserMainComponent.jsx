import React from 'react';
import { UserBalance } from './UserBalance';
import { UserChecks } from './UserChecks';
import { UserCommercialOffers } from './UserCommercialOffers';
import { UserDeliveries } from './UserDeliveries';
import { UserFavoriteProducers } from './UserFavoriteProducers';
import { UserFavorites } from './UserFavorites';
import { UserInquiries } from './UserInquiries';
import { UserPaymentMethods } from './UserPaymentMethods';
import { UserPurchases } from './UserPurchases';
import { UserReturns } from './UserReturns';
import { UserReviewsQuestions } from './UserReviewsQuestions';

export const UserMainComponent = ({ componentType }) => {
    // { name: 'personal-data', title: 'Личные данные' },
    // { name: 'deliveries', title: 'Доставки' },
    // { name: 'balance', title: 'Баланс' },

    // { name: 'payment-methods', title: 'Способы оплаты' },
    // { name: 'favorites', title: 'Избранное' },
    // { name: 'purchases', title: 'Покупки' },

    // { name: 'favorite-producers', title: 'Любимые производители' },
    // { name: 'checks', title: 'Чеки' },
    // { name: 'commercial-offers', title: 'Коммерческие предложения' },

    // { name: 'inquiries', title: 'Обращения и проверка товара' },
    // { name: 'returns', title: 'Возвраты' },
    // { name: 'reviews-questions', title: 'Отзывы и вопросы' },

    switch (componentType) {
        case 'balance':
            return <UserBalance />;
        case 'checks':
            return <UserChecks />;
        case 'commercial-offers':
            return <UserCommercialOffers />;
        case 'favorite-producers':
            return <UserFavoriteProducers />;
        case 'deliveries':
            return <UserDeliveries />;
        case 'favorites':
            return <UserFavorites />;
        case 'inquiries':
            return <UserInquiries />;
        case 'payment-methods':
            return <UserPaymentMethods />;
        case 'purchases':
            return <UserPurchases />;
        case 'returns':
            return <UserReturns />;
        case 'reviews-questions':
            return <UserReviewsQuestions />;
        default:
            return null;
    }
};
