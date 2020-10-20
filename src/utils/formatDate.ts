const formaDate = (date: string): string => {
    const dateFormat = new Date(date);

    const day = dateFormat.getDate() <= 9 ? `0${dateFormat.getDate()}`: dateFormat.getDate();
    const month = dateFormat.getMonth() < 9 ? `0${dateFormat.getMonth() + 1}` : dateFormat.getMonth() + 1;
    const year = dateFormat.getFullYear();

    return `${day}/${month}/${year}`;
}

export default formaDate;