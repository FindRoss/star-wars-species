export async function getSpecies(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {

    console.log("Console logging error from speciesAPI ", err)
  }
}