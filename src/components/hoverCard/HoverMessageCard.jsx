export const HoverMessageCard = () => {
    return (
        <div
            className='hover-card hover-user-card'
            style={{ top: 12, right: 30 }}
        >
            <p>Сообщения</p>
            <span>{0}</span> новых
            <p>Войдите в систему, чтобы посмотреть свои сообщения </p>
        </div>
    );
};
