import { useTranslation } from "react-i18next";
import PricingCard from "./PricingCard";
import './Pricing.css';
import { H2, H5 } from '../../Shared/Heading';
export default function Pricing() {
  const { t } = useTranslation();


  

  return (
    <div className="containers">
      <div className="pricing-container">
  
          <div className="pricing-header">
            <H5 centered text={t("home.pricing.heading")} />
            <H2  centered text={t("home.pricing.subheading")}/>
          </div>
     
        <div className="price-card-container">
          {t("home.pricing.plans", { returnObjects: true }).map(
            (plan, index) => (
                <PricingCard
                  title={plan.title}
                  price={plan.price}
                  content={plan.content}
                  button={plan.button}
                  features={plan.features}
                  index={index}
                  key={index}
       
                />

            )
          )}
        </div>

      </div>
    </div>
  );
}
