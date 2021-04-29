const googleSheetUrl = "https://spreadsheets.google.com/feeds/cells/1qNPcY0ELWQpdn97dsMSFskTadNRZrBwzU8gvhYQkL94/1/public/full?alt=json";
const FETCH_CALL = () => {
  return fetch(googleSheetUrl).then(res => res.json() );
}
export default FETCH_CALL;
