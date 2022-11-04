import axios from "axios";

const api_tse = axios.create({
baseURL: 'https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json'

})

export default api_tse;