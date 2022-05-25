import { heroes } from "../data/heroes"
import { validPublishers } from "./validInfo";


export const getHeroByPublisher = (publisher)=>
{
    validPublishers(publisher);
    return heroes.filter(hero => hero.publisher === publisher);
}

