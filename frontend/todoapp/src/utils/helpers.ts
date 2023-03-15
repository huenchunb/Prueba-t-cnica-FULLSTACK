export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {day: "numeric", month: "long", year: "numeric"};
    const dateFormated = date.toLocaleDateString("es-ES", options);
    return dateFormated;
}