import { heroes } from "../data/heroes";

export const validPublishers = (publisher)=>
{
    const publishers = ['DC Comics', 'Marvel Comics'];

    if (!publishers.includes(publisher))
    {
        throw new Error(`${publisher} no es válido`)
    }
}

export const validId = (id)=>
{
   if (heroes.filter(hero => hero.id === id) === undefined)
   {
    throw new Error(`${id} no es válido`)
   }
}