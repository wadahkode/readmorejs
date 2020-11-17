// data artikel biasanya diambil dari database atau bisa juga dari api
let container = document.createElement('article'),
    root = document.getElementById('root'),
    text = "",
    data;

data = {
   0: {
      judul: "kenapa bukan aku",
      isi: "Mengapa dia yang engkau cintai Mengapa dia yang kau pertahankan Sedangkan dia selalu menyakiti, kesabaranmu yang membuat diriku jatuh cinta, apalah daya diriku bukan siapa-siapamu.",
      author: "wadahkode",
      dibuat: "Sab, 31 Okt 2020"
   },
   1: {
      judul: "sakarepmu",
      isi: "bangun tidur tidur lagi",
      author: "wadahkode",
      dibuat: " Sab, 31 Okt 2020"
   }
};

Object.values(data).map((item,key) => text += createViewArticle(item,key));

container.innerHTML = text;
root.append(container);

function createViewArticle(item,key) {
   return `
      <div class="uk-card uk-card-body uk-margin-small-bottom uk-card-default">
         <h1>${item.judul}</h1>
         <sub>oleh: ${item.author} - ${item.dibuat}</sub><p>${readMoreWithoutRedirect(item.isi, 0, 100, key)}</p>
      </div>
   `;
}

function readMoreWithoutRedirect(str, start, end, key) {
    // angka 100 bisa juga diganti dengan parameter end
    if (str.length > 100) {
        return `
            <div>
                <div class="toggle-${key}" hidden>
                    <span>${str}</span>
                    <a class="uk-button uk-button-link uk-text-capitalize read-hide" uk-toggle="target: .toggle-${key}">Sembunyikan kembali</a>
                </div>
                <div class="toggle-${key}">
                    <span>${str.substring(start,end)}...</span>
                    <a class="uk-button uk-button-link uk-text-capitalize read-more" uk-toggle="target: .toggle-${key};">tampilkan semuanya</a>
                </div>
            </div>
        `;
    } else {
        return `<div>${str}</div>`;
    }
}