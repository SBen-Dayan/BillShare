import dayjs from "dayjs";

export function formatDate(date) {
    return dayjs(date).format('MMM/DD/YYYY');
}

export function formatCurrency(value) {
    return `$${value.toFixed(2)}`;
}