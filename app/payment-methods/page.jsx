import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import BankTransfer from "../components/PaymentMethods/BankTransfer";
import ElectronicWallets from "../components/PaymentMethods/ElectronicWallets";
import OnlinePayment from "../components/PaymentMethods/OnlinePayment";
import DigitalCurrencies from "../components/PaymentMethods/DigitalCurrencies";
import Asks from "../components/DataCenter/Asks/Asks";
import TraditionalMethods from "../components/PaymentMethods/TraditionalMethods";

const PaymentMethods = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        title="الاستضافات المشتركة"
        description="كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات كلام و المشتركة كلام و وصف للاستضافات المشتركة"
        primaryButtonText="انشاء حساب"
        secondaryButtonText="عرض الاسعار"
        imagesrc="/scg/images/Group1.png"
        imageAlt="Hero Background"
      />
      <BankTransfer />
      <ElectronicWallets />
      <OnlinePayment />
      <DigitalCurrencies />
      <TraditionalMethods />
      <Asks />
    </div>
  );
};

export default PaymentMethods;
