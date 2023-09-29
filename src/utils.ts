export async function fetchDefinition(keyword: string) {
    const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    );
    const data = await res.json();

    return data;
}
