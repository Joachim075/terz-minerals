import './HeroSection.css';
import { ArticlesCardsGrid } from './Providers/ArticlesCardsGrid';
import { HeroBullets2 } from './Providers/HeroBullets2';
import { HeroImageRight } from './Providers/HeroImageR';
import { EmailBanner } from './contact/EmailBanner.';
import { GetInTouchSimple } from './contact/GetInTouchSimple';

import { FaqWithHeader } from './home/FaqWithHeader';
import { FeaturesTitle } from './home/FeaturesTitle';
import { HeroBullets } from './home/HeroBullets';
import { LeadGrid } from './home/LeadGrid';
import { StatsGroup } from './home/StatsGroup';
import { StatsRing } from './home/StatsRing';
import { FeaturesGrid } from './home/FeaturesGrid';


function Herosection() {
    return (
        <>
        <HeroBullets/>  
        <FeaturesGrid/>
        <FaqWithHeader/>   
        <FeaturesGrid/> 
        <FaqWithHeader/>   
      
         
            
            
            
            <StatsRing/>
            <StatsGroup/>
                
            
           

        </>
    )
}


export default Herosection;