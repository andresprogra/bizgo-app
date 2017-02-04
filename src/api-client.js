const URL = 'https://api-bizgo-andresprogra.c9users.io/api/v1/commerces'

function getCommerces() {

  return fetch(URL)
    .then(response => response.json())
    .then(data => data.data)
    .then(commerces => commerces.map(commerce => {
      return {
        id: commerce.id,
        name: commerce.name,
        address: commerce.street,
        num_ext: commerce.num_ext,
        num_int: commerce.num_int,
        phone: commerce.phone,
        status: commerce.status,
        url: commerce.url,
        img: 'http://franquiciasyfranquicias.com/blog/wp-content/uploads/2013/07/franquicias-e-mexico.jpg',
        portada: 'https://cdn.pixabay.com/photo/2016/03/26/23/00/umbrellas-1281751_960_720.jpg'
        
      }
    }))
}

export { getCommerces }