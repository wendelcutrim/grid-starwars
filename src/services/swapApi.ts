export const baseUrl: string = import.meta.env.VITE_API_BASE_URL;

const getData = async (url: string) => {
    const response = await fetch(`${baseUrl}/${url}`)
    const data = await response.json();

    return console.table(data.results);
}

getData("people")