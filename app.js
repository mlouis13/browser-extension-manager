const $extension = document.querySelector("#extensions");
const url = "http://10.69.4.8:3000/v1/extensions";

async function GetExtension() {
    const response = await fetch(url, {
        headers: {
            Authorization: "Bearer 123",
        },
    });
    const data = await response.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        $extension.innerHTML += `   
                <div class="extension">
                    <div class="extension-header">
                        <img src="${data[i].logo}" alt="logo" />
                        <div class="extension-header-content">
                            <h2>${data[i].name}</h2>
                            <p class="text-neutral-600">
                                ${data[i].description}
                            </p>
                        </div>
                    </div>
                    <div class="extension-append">
                        <button>Remove</button>
                        <input type="checkbox" />
                    </div>
                </div>`;
    }
    console.log($extension);
}

document.addEventListener("DOMContentLoaded", async () => {
    GetExtension();
});