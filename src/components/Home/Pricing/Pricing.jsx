import { useTranslation } from "react-i18next";
import PricingCard from "./PricingCard";
import './Pricing.css';
export default function Pricing() {
  const { t } = useTranslation();
  return (
    <div className="containers">
      <div className="pricing-container">
  
          <div className="pricing-header">
            <h5 className="whyChooseHeading">{t("home.pricing.heading")}</h5>
            <h2 className="empower">{t("home.pricing.subheading")}</h2>
          </div>
     
        <div className="price-card">
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
