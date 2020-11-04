export async function fetch_get(
  url: string,
  queryString?: any
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      try {
        if (xhr.readyState !== 4) {
          return;
        }
        if (xhr.status !== 200) {
          throw new Error(`FETCH_GET - Failed with status ${xhr.status}`);
        }
        resolve(xhr.responseText);
      } catch (e) {
        console.log(
          `FETCH_GET - error: ${e}; ResponseText: ${xhr.responseText}`
        );
        reject(e);
      }
    };
    xhr.onerror = function () {
      console.log(`FETCH_GET - onError occured`);
      throw new Error(`FETCH_GET - onError occured`);
    };

    // This can probably be better
    if (queryString) {
      let query = "?";
      for (let key in queryString) {
        let name = encodeURIComponent(key);
        let value = encodeURIComponent(queryString[key]);
        query += name + "=" + value + "&";
      }
      url = url + query;
    }
    console.log("FETCH_GET URL: " + url);

    xhr.open("GET", url);
    xhr.withCredentials = true;
    //xhr.setRequestHeader("Accept", "*/*");
    //xhr.setRequestHeader("Accept-Encoding", "gzip, deflate, br");

    xhr.send();
  });
}
