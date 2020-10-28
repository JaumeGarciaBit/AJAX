let m_countriesUrl = "https://restcountries.eu/rest/v2/all";
let m_neighbouringUrl = "https://api.geodatasource.com/neighbouring-countries?key=5YOYI2UHVODPGMJT7HWM3CE89YUKDKWY&country_code=";
let m_neighbouring = [];
let m_countriesData = [];

let m_select = document.getElementById("countriesSelector");
let m_div = document.getElementById("neighbouring");
let m_promise = fetch(m_countriesUrl);

m_promise.then(response => response.json())
        .then(data =>
        {
            m_select.addEventListener("change", function() {changeSelect(this)});
            
            data.forEach(e =>
                {
                    m_countriesData.push(e);

                    let l_option = document.createElement("option");
                    l_option.setAttribute("value", e.alpha2Code);
                    l_option.innerHTML=e.name;
                    m_select.appendChild(l_option);
                })
        })

function changeSelect(param)
{
    m_div.innerHTML = "";

    fetch(m_neighbouringUrl+param.value)
    .then(response => response.json())
    .then(data =>{
        data.forEach(e =>
            {
                console.log(e.country_name);
                m_div.innerHTML+=e.country_name +"<br>";
            });
    });
}