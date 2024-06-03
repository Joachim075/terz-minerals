import { ArticleCardImage } from "./home/ArticleCardImage";
import { GridAsymmetrical } from "./home/GridAsymmetrical";
import { ArticlesCardsGrid } from "./Providers/ArticlesCardsGrid";
import { FeaturesGrid } from "./service/FeaturesGrid";
import { HeroImageRight } from "./service/HeroImageRight";

import "./Services.css";

function Services() {
    return (
        <>
           <HeroImageRight/>
           <ArticlesCardsGrid/>
           <FeaturesGrid/>
          <GridAsymmetrical/>
           
           
        </>
    );
}

export default Services;
