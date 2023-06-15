const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: 'USD', style: 'currency', minimumFractionDigits: 2
});

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number);
}